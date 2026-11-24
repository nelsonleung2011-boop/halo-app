import React, { useEffect, useState } from 'react';
import {
  Building2,
  Check,
  Download,
  FileJson,
  Layers,
  PackageCheck,
  Phone,
  RotateCcw,
  Save,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { APP_GUIDELINE_VERSION, APP_LAST_UPDATED } from '../data/contactsAndCategories';
import { ALL_ALGORITHMS, CLINICAL_TOPICS } from '../data/clinicalRegistry';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import {
  DepartmentContact,
  InstitutionalSettings,
  LocalWorkflowData,
} from '../types/clinical';
import { generateClinicalReviewMarkdown } from '../utils/clinicalMarkdown';

interface AdminHubViewProps {
  initialTopicId?: string;
  getEffectiveWorkflow: (topicId: string) => LocalWorkflowData;
  saveLocalWorkflow: (topicId: string, data: LocalWorkflowData) => void;
  resetLocalWorkflow: (topicId: string) => void;
  localWorkflowOverrides: Record<string, LocalWorkflowData>;
  contacts: DepartmentContact[];
  onUpdateContact: (contact: DepartmentContact) => void;
  onResetContacts: () => void;
  institutionalSettings: InstitutionalSettings;
  onUpdateInstitutionalSettings: (patch: Partial<InstitutionalSettings>) => void;
  exportConfigJson: () => string;
  importConfigJson: (raw: string) => boolean;
}

export const AdminHubView: React.FC<AdminHubViewProps> = ({
  initialTopicId,
  getEffectiveWorkflow,
  saveLocalWorkflow,
  resetLocalWorkflow,
  localWorkflowOverrides,
  contacts,
  onUpdateContact,
  onResetContacts,
  institutionalSettings,
  onUpdateInstitutionalSettings,
  exportConfigJson,
  importConfigJson,
}) => {
  const [tab, setTab] = useState<'workflows' | 'contacts' | 'pwa' | 'blueprint'>('workflows');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || CLINICAL_TOPICS[0].id
  );
  const [stepsText, setStepsText] = useState('');
  const [stockText, setStockText] = useState('');
  const [admissionText, setAdmissionText] = useState('');
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (initialTopicId) {
      setSelectedTopicId(initialTopicId);
      setTab('workflows');
    }
  }, [initialTopicId]);

  useEffect(() => {
    const current = getEffectiveWorkflow(selectedTopicId);
    setStepsText(current.escalationSteps.join('\n'));
    setStockText(current.stockAndEquipment);
    setAdmissionText(current.admissionCriteria);
  }, [selectedTopicId, getEffectiveWorkflow]);

  const showSavedBanner = (msg: string) => {
    setSavedNotice(msg);
    setTimeout(() => setSavedNotice(null), 2200);
  };

  const handleSaveWorkflow = () => {
    const parsedSteps = stepsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    saveLocalWorkflow(selectedTopicId, {
      escalationSteps: parsedSteps,
      stockAndEquipment: stockText.trim(),
      admissionCriteria: admissionText.trim(),
    });
    showSavedBanner('Local department workflow saved on device');
  };

  const handleExport = () => {
    const json = exportConfigJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'halo-local-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadClinicalMarkdown = () => {
    const md = generateClinicalReviewMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HALO-Emergency-Clinical-Review-${APP_GUIDELINE_VERSION}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importConfigJson(String(reader.result || ''));
      if (ok) {
        setImportError(null);
        showSavedBanner('Department configuration imported');
      } else {
        setImportError('Invalid configuration JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-5 px-3 pt-4 pb-24 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="font-display text-lg font-extrabold text-slate-900 sm:text-xl">
            Local Workflow &amp; Administration
          </h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Customize operational steps, stock availability &amp; extensions without altering core medical evidence
          </p>
        </div>

        {savedNotice && (
          <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
            <Check className="h-3.5 w-3.5" />
            <span>{savedNotice}</span>
          </div>
        )}
      </div>

      {/* Segmented Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1.5">
        {[
          { id: 'workflows', label: 'Workflows & Stock', icon: <Building2 className="h-3.5 w-3.5" /> },
          { id: 'contacts', label: 'Contacts', icon: <Phone className="h-3.5 w-3.5" /> },
          { id: 'pwa', label: 'Offline & Config JSON', icon: <ShieldCheck className="h-3.5 w-3.5" /> },
          { id: 'blueprint', label: 'Blueprint & Refs', icon: <Layers className="h-3.5 w-3.5" /> },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id as typeof tab)}
            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              tab === item.id
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: Local Workflows & Formulary Stock Toggles */}
      {tab === 'workflows' && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3 sm:p-5">
            <div className="flex items-center gap-2">
              <PackageCheck className="h-4 w-4 text-blue-600" />
              <h2 className="font-display text-sm font-bold text-slate-900">
                Institutional Pharmacy Stock Toggles
              </h2>
            </div>
            <p className="text-xs text-slate-600">
              Controls bedside dosing display in Major Anticoagulant Bleeding (Factor Xa) and Toxic Alcohols.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="min-w-0">
                  <p className="font-display text-xs font-bold text-slate-900">
                    Andexanet alfa stocked
                  </p>
                  <p className="text-[11px] text-slate-600">
                    When No, universal 4F-PCC (50 U/kg, max 5,000 U) displays alone.
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-white p-1 border border-slate-200 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      onUpdateInstitutionalSettings({ andexanetAlfaStocked: true });
                      showSavedBanner('Andexanet alfa set to Stocked (Yes)');
                    }}
                    className={`min-h-[38px] rounded-md px-3 text-xs font-bold ${
                      institutionalSettings.andexanetAlfaStocked
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onUpdateInstitutionalSettings({ andexanetAlfaStocked: false });
                      showSavedBanner('Andexanet alfa set to Not Stocked (4F-PCC universal)');
                    }}
                    className={`min-h-[38px] rounded-md px-3 text-xs font-bold ${
                      !institutionalSettings.andexanetAlfaStocked
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="min-w-0">
                  <p className="font-display text-xs font-bold text-slate-900">
                    Fomepizole stocked
                  </p>
                  <p className="text-[11px] text-slate-600">
                    When No, prioritizes Ethanol 10% IV ADH blockade in Toxic Alcohols.
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-white p-1 border border-slate-200 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      onUpdateInstitutionalSettings({ fomepizoleStocked: true });
                      showSavedBanner('Fomepizole set to Stocked (Yes)');
                    }}
                    className={`min-h-[38px] rounded-md px-3 text-xs font-bold ${
                      institutionalSettings.fomepizoleStocked
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onUpdateInstitutionalSettings({ fomepizoleStocked: false });
                      showSavedBanner('Fomepizole set to Not Stocked (Ethanol IV fallback)');
                    }}
                    className={`min-h-[38px] rounded-md px-3 text-xs font-bold ${
                      !institutionalSettings.fomepizoleStocked
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-4 sm:p-5">
            <div>
              <label
                htmlFor="topic-select"
                className="block font-display text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Select Clinical Topic ({CLINICAL_TOPICS.length} Modules)
              </label>
              <select
                id="topic-select"
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm font-semibold text-slate-900 focus:border-blue-500 focus:outline-none"
              >
                {CLINICAL_TOPICS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} {localWorkflowOverrides[t.id] ? '(Customized)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="local-steps"
                className="block font-display text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Local Escalation Steps (one per line)
              </label>
              <textarea
                id="local-steps"
                rows={4}
                value={stepsText}
                onChange={(e) => setStepsText(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="local-stock"
                className="block font-display text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Local Stock &amp; Equipment Bay Location
              </label>
              <textarea
                id="local-stock"
                rows={2}
                value={stockText}
                onChange={(e) => setStockText(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="local-admission"
                className="block font-display text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Local Admission &amp; Transfer Criteria
              </label>
              <textarea
                id="local-admission"
                rows={2}
                value={admissionText}
                onChange={(e) => setAdmissionText(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleSaveWorkflow}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save className="h-4 w-4" />
                <span>Save Local Override</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  resetLocalWorkflow(selectedTopicId);
                  showSavedBanner('Restored default department workflow');
                }}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset Default</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Department Contacts Editor */}
      {tab === 'contacts' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Enter your hospital DECT extensions or switchboard hotlines — applies across all bedside call cards
            </p>
            <button
              type="button"
              onClick={() => {
                onResetContacts();
                showSavedBanner('Default contact roles restored');
              }}
              className="min-h-[40px] px-2 text-xs font-semibold text-slate-700 hover:underline"
            >
              Reset Defaults
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2.5"
              >
                <p className="font-display text-sm font-bold text-slate-900">
                  {contact.roleName}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500">
                      Extension / Tel
                    </label>
                    <input
                      type="text"
                      value={contact.extension}
                      placeholder="Enter hospital ext. / phone"
                      onChange={(e) =>
                        onUpdateContact({ ...contact, extension: e.target.value })
                      }
                      className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-2.5 font-mono text-xs font-semibold text-slate-900 placeholder:font-sans placeholder:font-normal placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500">
                      Pager / Note
                    </label>
                    <input
                      type="text"
                      value={contact.pagerOrMobile}
                      placeholder="e.g. Hospital Switchboard"
                      onChange={(e) =>
                        onUpdateContact({ ...contact, pagerOrMobile: e.target.value })
                      }
                      className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-2.5 text-xs text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PWA & Backup */}
      {tab === 'pwa' && (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Guideline Bundle</p>
              <p className="mt-1 font-mono text-base font-bold text-slate-900">
                {APP_GUIDELINE_VERSION}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">Reviewed {APP_LAST_UPDATED}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Cached Pathways</p>
              <p className="mt-1 font-mono text-base font-bold text-slate-900 tabular-nums">
                {ALL_ALGORITHMS.length} Algorithms
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Across {CLINICAL_TOPICS.length} HALO modules
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Network State</p>
              <p className="mt-1 font-display text-base font-bold text-slate-900">
                {isOnline ? 'Connected' : 'Offline Ready'}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Service Worker precaching active
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h2 className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
              <FileJson className="h-4 w-4 text-blue-600" />
              <span>Shareable Institutional Profile (halo-local-config.json)</span>
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Export customized workflows, speed-dial extensions, and pharmacy stock toggles (`Andexanet alfa`, `Fomepizole`) to share across ED devices offline.
            </p>

            <div className="mt-3 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={handleExport}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                <span>Export halo-local-config.json</span>
              </button>

              <label className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                <Upload className="h-4 w-4" />
                <span>Import halo-local-config.json</span>
                <input
                  type="file"
                  accept="application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>

            {importError && (
              <p className="mt-2 text-xs font-medium text-rose-600">{importError}</p>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: Blueprint & Complete 28-Module Reference Matrix */}
      {tab === 'blueprint' && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h2 className="font-display text-sm font-bold text-slate-900">
              Algorithm Engine &amp; Offline Architecture
            </h2>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
              <li>
                <strong>Graph State Machine:</strong> Each clinical presentation compiles into a directed decision graph supporting cross-algorithm hops, embedded safety timers, SI calculators, and hard-capped weight dosing.
              </li>
              <li>
                <strong>Separation of Concerns:</strong> Core international evidence is immutable; local escalation steps, formulary stock toggles, and hospital phone extensions live in an isolated override layer.
              </li>
              <li>
                <strong>Offline-First PWA &amp; Wake Lock:</strong> Workbox precaches 100% of bundle assets, SVGs, and algorithm graphs for instant zero-signal execution in resus bays and CT corridors.
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-3">
              <h2 className="font-display text-sm font-bold text-slate-900">
                Complete {CLINICAL_TOPICS.length}-Module Guideline Reference Registry
              </h2>
              <button
                type="button"
                onClick={handleDownloadClinicalMarkdown}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Clinical Review (.md)</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">Module</th>
                    <th className="px-4 py-2.5 font-semibold">Algorithms</th>
                    <th className="px-4 py-2.5 font-semibold">Guideline Source</th>
                    <th className="px-4 py-2.5 font-semibold">Year</th>
                    <th className="px-4 py-2.5 font-semibold">Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CLINICAL_TOPICS.map((t) => (
                    <tr key={t.id}>
                      <td className="px-4 py-2.5 font-semibold text-slate-900">
                        {t.title}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        {t.algorithms.map((a) => a.shortTitle).join(' · ')}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        {t.evidence.society}
                      </td>
                      <td className="px-4 py-2.5 font-mono text-slate-600 tabular-nums">
                        {t.evidence.year}
                      </td>
                      <td className="px-4 py-2.5 text-slate-500">
                        {t.evidence.evidenceLevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
