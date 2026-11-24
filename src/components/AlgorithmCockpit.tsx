import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCopy,
  ExternalLink,
  Flag,
  GitBranch,
  Image as ImageIcon,
  ListChecks,
  Lock,
  PhoneCall,
  RotateCcw,
  Scale,
  Star,
  X,
  Zap,
} from 'lucide-react';
import {
  getAlgorithmProgress,
  getTopologicalNodeLevels,
} from '../data/clinicalRegistry';
import {
  AlgorithmNode,
  BranchOption,
  ClinicalAlgorithm,
  ClinicalTopic,
  DepartmentContact,
  InstitutionalSettings,
  LocalWorkflowData,
  NodePhase,
  ResusLogEntry,
} from '../types/clinical';
import { BedsideTimerBanner } from './BedsideTimerBanner';
import { ClinicalSvgDiagram } from './ClinicalSvgDiagrams';
import { ContactCallCard } from './ContactCallCard';
import { InlineWeightDosing } from './InlineWeightDosing';
import { OsmolarGapCalculator } from './OsmolarGapCalculator';

interface HistoryStep {
  topicId: string;
  algoId: string;
  algoShortTitle: string;
  nodeId: string;
  nodeTitle: string;
  chosenLabel?: string;
}

interface AlgorithmCockpitProps {
  topic: ClinicalTopic;
  algorithm: ClinicalAlgorithm;
  initialNodeId?: string;
  isFavorite: boolean;
  onToggleFavorite: (algoId: string) => void;
  onSelectAlgorithm: (topicId: string, algoId: string, targetNodeId?: string) => void;
  onBack: () => void;
  onOpenAdminWorkflow: (topicId: string) => void;
  patientWeightKg: number;
  onWeightChange: (kg: number) => void;
  localWorkflow: LocalWorkflowData;
  contacts: DepartmentContact[];
  institutionalSettings: InstitutionalSettings;
  resusLog: ResusLogEntry[];
  onLogEvent: (type: ResusLogEntry['type'], label: string, detail?: string) => void;
}

const WEIGHT_PRESETS = [50, 60, 70, 80, 100];

const PHASE_STYLES: Record<
  NodePhase,
  { label: string; border: string; badgeText: string; icon: React.ReactNode }
> = {
  arrival: {
    label: 'Presentation',
    border: 'border-slate-300',
    badgeText: 'text-slate-700',
    icon: <Zap className="h-4 w-4 text-slate-600" />,
  },
  immediate: {
    label: 'Immediate 30s',
    border: 'border-rose-300',
    badgeText: 'text-rose-700',
    icon: <Zap className="h-4 w-4 text-rose-600" />,
  },
  decision: {
    label: 'Branch Decision',
    border: 'border-amber-300',
    badgeText: 'text-amber-800',
    icon: <GitBranch className="h-4 w-4 text-amber-600" />,
  },
  intervention: {
    label: 'Intervention',
    border: 'border-blue-300',
    badgeText: 'text-blue-700',
    icon: <ListChecks className="h-4 w-4 text-blue-600" />,
  },
  disposition: {
    label: 'Disposition & Escalation',
    border: 'border-emerald-300',
    badgeText: 'text-emerald-700',
    icon: <Flag className="h-4 w-4 text-emerald-600" />,
  },
};

function getSubTabActiveClass(colorTag?: ClinicalAlgorithm['colorTag'], active?: boolean) {
  if (!active) {
    if (colorTag === 'green') {
      return 'border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100';
    }
    if (colorTag === 'red') {
      return 'border border-rose-300 bg-rose-50 text-rose-900 hover:bg-rose-100';
    }
    return 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100';
  }
  if (colorTag === 'green') return 'bg-emerald-700 text-white shadow-sm';
  if (colorTag === 'red') return 'bg-rose-700 text-white shadow-sm';
  if (colorTag === 'blue') return 'bg-blue-700 text-white shadow-sm';
  return 'bg-slate-900 text-white shadow-sm';
}

export const AlgorithmCockpit: React.FC<AlgorithmCockpitProps> = ({
  topic,
  algorithm,
  initialNodeId,
  isFavorite,
  onToggleFavorite,
  onSelectAlgorithm,
  onBack,
  onOpenAdminWorkflow,
  patientWeightKg,
  onWeightChange,
  localWorkflow,
  contacts,
  institutionalSettings,
  resusLog,
  onLogEvent,
}) => {
  const [viewMode, setViewMode] = useState<'stepper' | 'flowmap'>('stepper');
  const [currentNodeId, setCurrentNodeId] = useState<string>(
    initialNodeId && algorithm.nodes[initialNodeId]
      ? initialNodeId
      : algorithm.startNodeId
  );
  const [history, setHistory] = useState<HistoryStep[]>([]);
  const [checkedActions, setCheckedActions] = useState<Record<string, boolean>>({});
  const [secondaryTab, setSecondaryTab] = useState<'none' | 'local' | 'evidence'>('none');
  const [showChartModal, setShowChartModal] = useState(false);
  const [unlockedTimers, setUnlockedTimers] = useState<Record<string, boolean>>({});
  const [procedureExpanded, setProcedureExpanded] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  const crossRoutingRef = useRef<boolean>(false);
  const lastLoggedAlgoRef = useRef<string | null>(null);

  // Request Screen Wake Lock while bedside algorithm cockpit is active
  useEffect(() => {
    let sentinel: WakeLockSentinel | null = null;
    let active = true;

    const acquireWakeLock = async () => {
      try {
        if ('wakeLock' in navigator && document.visibilityState === 'visible') {
          sentinel = await navigator.wakeLock.request('screen');
        }
      } catch {
        // Wake lock can fail silently in unsupported or backgrounded frames
      }
    };

    acquireWakeLock();
    const handleVisibility = () => {
      if (active && document.visibilityState === 'visible') {
        acquireWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      active = false;
      document.removeEventListener('visibilitychange', handleVisibility);
      if (sentinel) {
        sentinel.release().catch(() => {});
      }
    };
  }, []);

  useEffect(() => {
    const startTarget =
      initialNodeId && algorithm.nodes[initialNodeId]
        ? initialNodeId
        : algorithm.startNodeId;
    setCurrentNodeId(startTarget);

    if (crossRoutingRef.current) {
      crossRoutingRef.current = false;
    } else {
      setHistory([]);
      setCheckedActions({});
      setUnlockedTimers({});
    }

    setSecondaryTab('none');
    setShowChartModal(false);
    setProcedureExpanded(false);

    if (lastLoggedAlgoRef.current !== algorithm.id) {
      lastLoggedAlgoRef.current = algorithm.id;
      onLogEvent('module_open', `Opened ${algorithm.title}`, `${topic.title} · Node ${startTarget}`);
    }
  }, [algorithm.id, algorithm.startNodeId, algorithm.title, algorithm.nodes, initialNodeId, topic.title, onLogEvent]);

  const currentNode: AlgorithmNode =
    algorithm.nodes[currentNodeId] ?? algorithm.nodes[algorithm.startNodeId];

  useEffect(() => {
    setProcedureExpanded(false);
  }, [currentNode.id]);

  const progress = useMemo(
    () => getAlgorithmProgress(algorithm, history.length, currentNode.id),
    [algorithm, history.length, currentNode.id]
  );

  const topoLevels = useMemo(() => getTopologicalNodeLevels(algorithm), [algorithm]);

  const visitedNodeIds = useMemo(() => {
    const set = new Set<string>(history.filter((h) => h.algoId === algorithm.id).map((h) => h.nodeId));
    set.add(currentNode.id);
    return set;
  }, [history, currentNode.id, algorithm.id]);

  const handleSelectBranch = (branch: BranchOption) => {
    if (branch.requiresTimerUnlocked && !unlockedTimers[branch.requiresTimerUnlocked]) {
      return;
    }

    if (branch.crossAlgorithmTarget) {
      const target = branch.crossAlgorithmTarget;
      crossRoutingRef.current = true;
      setHistory((prev) => [
        ...prev,
        {
          topicId: topic.id,
          algoId: algorithm.id,
          algoShortTitle: algorithm.shortTitle,
          nodeId: currentNode.id,
          nodeTitle: currentNode.title,
          chosenLabel: branch.label,
        },
      ]);
      onLogEvent('cross_algo', `Cross-routed: ${algorithm.shortTitle} → ${target.algoId}`, branch.label);
      onSelectAlgorithm(target.topicId, target.algoId, target.nodeId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!algorithm.nodes[branch.nextNodeId]) return;
    setHistory((prev) => [
      ...prev,
      {
        topicId: topic.id,
        algoId: algorithm.id,
        algoShortTitle: algorithm.shortTitle,
        nodeId: currentNode.id,
        nodeTitle: currentNode.title,
        chosenLabel: branch.label,
      },
    ]);
    const nextNode = algorithm.nodes[branch.nextNodeId];
    onLogEvent('node', `Entered ${nextNode.title}`, `via "${branch.label}"`);
    setCurrentNodeId(branch.nextNodeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBreadcrumbJump = (index: number) => {
    const target = history[index];
    if (!target) return;
    if (target.algoId !== algorithm.id) {
      crossRoutingRef.current = true;
      setHistory((prev) => prev.slice(0, index));
      onSelectAlgorithm(target.topicId, target.algoId, target.nodeId);
      return;
    }
    setHistory((prev) => prev.slice(0, index));
    setCurrentNodeId(target.nodeId);
  };

  const handleJumpToMapNode = (nodeId: string) => {
    if (!algorithm.nodes[nodeId]) return;
    const existingIdx = history.findIndex(
      (h) => h.algoId === algorithm.id && h.nodeId === nodeId
    );
    if (existingIdx >= 0) {
      setHistory((prev) => prev.slice(0, existingIdx));
    } else if (nodeId === algorithm.startNodeId) {
      setHistory([]);
    }
    onLogEvent('node', `Jumped via Flow Map to ${algorithm.nodes[nodeId].title}`);
    setCurrentNodeId(nodeId);
    setViewMode('stepper');
  };

  const handleReset = () => {
    setCurrentNodeId(algorithm.startNodeId);
    setHistory([]);
    setCheckedActions({});
    setUnlockedTimers({});
    onLogEvent('module_open', `Reset ${algorithm.title}`);
  };

  const toggleActionCheck = (nodeId: string, idx: number) => {
    const key = `${nodeId}::${idx}`;
    setCheckedActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyResusSummary = async () => {
    const lines: string[] = [
      `HALO EMERGENCY RESUS SUMMARY (${topic.title} — ${algorithm.title})`,
      `Generated: ${new Date().toLocaleString()}`,
      `Estimated Patient Weight: ${patientWeightKg} kg`,
      `Current Endpoint: ${currentNode.title}`,
      currentNode.disposition
        ? `Disposition: ${currentNode.disposition.destination} (${currentNode.disposition.urgency})`
        : '',
      '',
      'Clinical Decision Path:',
      ...history.map(
        (h, i) => `${i + 1}. [${h.algoShortTitle}] ${h.nodeTitle}${h.chosenLabel ? ` -> ${h.chosenLabel}` : ''}`
      ),
      `${history.length + 1}. [${algorithm.shortTitle}] ${currentNode.title}`,
      '',
      'Timestamped Event Log:',
      ...resusLog.slice(-15).map((e) => {
        const t = new Date(e.timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        return `- ${t} | ${e.label}${e.detail ? ` (${e.detail})` : ''}`;
      }),
    ].filter(Boolean);

    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2200);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  const getBranchButtonClass = (tone: BranchOption['tone'], locked: boolean) => {
    if (locked) {
      return 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed';
    }
    switch (tone) {
      case 'yes':
        return 'border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-950';
      case 'no':
        return 'border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950';
      case 'critical':
        return 'border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-950';
      default:
        return 'border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-900';
    }
  };

  const inlineContacts = useMemo(() => {
    const roles = currentNode.inlineCallRoles ?? [];
    return roles
      .map((id) => contacts.find((c) => c.id === id))
      .filter((c): c is DepartmentContact => Boolean(c));
  }, [currentNode.inlineCallRoles, contacts]);

  const topicContacts = useMemo(() => {
    return topic.defaultContactRoles
      .map((id) => contacts.find((c) => c.id === id))
      .filter((c): c is DepartmentContact => Boolean(c));
  }, [topic.defaultContactRoles, contacts]);

  const phaseMeta = PHASE_STYLES[currentNode.phase];

  const algoCardAccentBorder =
    algorithm.colorTag === 'green'
      ? 'border-emerald-400'
      : algorithm.colorTag === 'red'
      ? 'border-rose-400'
      : phaseMeta.border;

  const renderFlowMapPanel = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Tap any node to jump directly</span>
        <span className="font-mono tabular-nums">
          {Object.keys(algorithm.nodes).length} nodes
        </span>
      </div>

      <div className="space-y-4">
        {topoLevels.map((levelNodes, levelIdx) => (
          <div key={levelIdx} className="space-y-2">
            {levelIdx > 0 && (
              <div className="flex justify-center">
                <div className="h-4 w-px bg-slate-300" />
              </div>
            )}
            <div
              className={`grid gap-2.5 ${
                levelNodes.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {levelNodes.map((node) => {
                const isActive = node.id === currentNode.id;
                const isVisited = visitedNodeIds.has(node.id);
                const meta = PHASE_STYLES[node.phase];
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => handleJumpToMapNode(node.id)}
                    className={`min-h-[48px] w-full rounded-xl border p-3 text-left transition-all ${
                      isActive
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/25'
                        : isVisited
                        ? 'border-emerald-300 bg-emerald-50/70'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${meta.badgeText}`}
                      >
                        {meta.icon}
                        <span>{meta.label}</span>
                      </span>
                      {isActive && (
                        <span className="font-mono text-[11px] font-bold text-blue-600">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-display text-sm font-bold text-slate-900">
                      {node.title}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-xs text-slate-600">
                      {node.prompt}
                    </p>
                    {node.branches.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-500">
                        {node.branches.map((b, i) => (
                          <span key={b.id}>
                            {i > 0 && <span className="mr-2">·</span>}
                            <span className="font-medium">→ {b.label}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl pb-24">
      {/* Compact Sticky Top Context + Patient Weight Strip */}
      <div className="sticky top-[52px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="flex items-center justify-between gap-2 px-3 py-2 sm:px-6">
          <div className="flex items-center gap-2 min-w-0">
            <button
              type="button"
              onClick={onBack}
              aria-label="Back to algorithms"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="min-w-0">
              <h1 className="font-display text-sm font-bold text-slate-900 truncate sm:text-base">
                {algorithm.title}
              </h1>
              <p className="text-[11px] text-slate-500 truncate">
                {topic.title} · {topic.evidence.society} {topic.evidence.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {algorithm.referenceDiagrams && algorithm.referenceDiagrams.length > 0 && (
              <button
                type="button"
                onClick={() => setShowChartModal(true)}
                className="inline-flex min-h-[48px] items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 hover:bg-slate-100 whitespace-nowrap"
              >
                <ImageIcon className="h-4 w-4 text-blue-600" />
                <span className="hidden sm:inline">Source Chart</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset algorithm"
              className="inline-flex min-h-[48px] items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 hover:bg-slate-100 whitespace-nowrap"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleFavorite(algorithm.id)}
              aria-label={isFavorite ? 'Remove favorite' : 'Favorite algorithm'}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border transition-colors ${
                isFavorite
                  ? 'border-amber-300 bg-amber-50 text-amber-500'
                  : 'border-slate-200 bg-slate-50 text-slate-400 hover:text-slate-700'
              }`}
            >
              <Star className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Sticky Active-Algorithm Patient Weight Bar (10–200 kg + Presets) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/90 px-3 py-1.5 sm:px-6">
          <div className="flex items-center gap-1.5">
            <Scale className="h-3.5 w-3.5 text-blue-600 shrink-0" />
            <span className="font-display text-xs font-bold text-slate-800 whitespace-nowrap">
              Est. Weight:
            </span>
            <div className="flex items-center rounded-lg border border-slate-300 bg-white px-2 py-0.5">
              <input
                type="number"
                min={10}
                max={200}
                value={patientWeightKg}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (Number.isFinite(v) && v >= 10 && v <= 200) {
                    onWeightChange(v);
                  }
                }}
                aria-label="Estimated patient weight in kg (10 to 200)"
                className="w-12 bg-transparent text-center font-mono text-sm font-extrabold text-blue-700 focus:outline-none tabular-nums"
              />
              <span className="text-[11px] font-bold text-slate-500">kg</span>
            </div>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto">
            {WEIGHT_PRESETS.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => onWeightChange(w)}
                className={`min-h-[36px] min-w-[44px] rounded-md px-2 font-mono text-xs font-bold transition-colors tabular-nums whitespace-nowrap shrink-0 ${
                  patientWeightKg === w
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {w} kg
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Algorithm Selector */}
        {topic.algorithms.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto border-t border-slate-100 px-3 py-1.5 sm:px-6">
            {topic.algorithms.map((sub) => {
              const active = sub.id === algorithm.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => onSelectAlgorithm(topic.id, sub.id)}
                  className={`min-h-[40px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${getSubTabActiveClass(
                    sub.colorTag,
                    active
                  )}`}
                >
                  {sub.shortTitle}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Cockpit Control Bar: Mode Switch + Progress */}
      <div className="px-3 pt-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-2.5">
          <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 lg:hidden">
            <button
              type="button"
              onClick={() => setViewMode('stepper')}
              className={`min-h-[44px] rounded-md px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                viewMode === 'stepper'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600'
              }`}
            >
              Stepper
            </button>
            <button
              type="button"
              onClick={() => setViewMode('flowmap')}
              className={`min-h-[44px] rounded-md px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                viewMode === 'flowmap'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600'
              }`}
            >
              Flow Map
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700">
            <GitBranch className="h-4 w-4 text-blue-600" />
            <span>Interactive Stepper &amp; Live Flow Map</span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3 min-w-[160px]">
            <span className="font-mono text-xs font-semibold text-slate-700 tabular-nums whitespace-nowrap">
              Step {progress.currentStep} of {progress.estimatedTotal} · {progress.percent}%
            </span>
            <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-blue-600 transition-all duration-200"
                style={{ width: `${progress.percent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Clickable Cross-Algorithm Breadcrumb Trail */}
        {history.length > 0 && (
          <div className="mt-2.5 flex items-center gap-1 overflow-x-auto pb-1 text-xs">
            {history.map((step, idx) => (
              <React.Fragment key={`${step.algoId}-${step.nodeId}-${idx}`}>
                <button
                  type="button"
                  onClick={() => handleBreadcrumbJump(idx)}
                  className="inline-flex min-h-[38px] items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-700 hover:bg-slate-100 whitespace-nowrap shrink-0"
                >
                  <span>
                    {step.algoId !== algorithm.id
                      ? `${step.algoShortTitle}: ${step.nodeTitle}`
                      : idx === 0
                      ? 'Arrival'
                      : step.nodeTitle}
                  </span>
                </button>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              </React.Fragment>
            ))}
            <span className="inline-flex min-h-[38px] items-center rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-blue-700 whitespace-nowrap shrink-0">
              {currentNode.title}
            </span>
          </div>
        )}
      </div>

      {/* Main Algorithm Grid */}
      <div className="mt-3 grid grid-cols-1 gap-5 px-3 sm:px-6 lg:grid-cols-12">
        {/* Stepper Column */}
        <div
          className={`lg:col-span-7 space-y-4 ${
            viewMode === 'flowmap' ? 'hidden lg:block' : 'block'
          }`}
        >
          <div
            className={`rounded-2xl border ${algoCardAccentBorder} bg-white p-4 shadow-sm sm:p-5`}
          >
            {/* Context-Triggered Bedside Countdown / Guard Banner */}
            {currentNode.timerConfig && (
              <BedsideTimerBanner
                config={currentNode.timerConfig}
                isUnlocked={Boolean(unlockedTimers[currentNode.timerConfig.id])}
                onUnlock={(timerId) =>
                  setUnlockedTimers((prev) => ({ ...prev, [timerId]: true }))
                }
                onLogEvent={(label, detail) => onLogEvent('timer', label, detail)}
              />
            )}

            {/* Phase Header */}
            <div className="flex items-center justify-between gap-2">
              <div
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${phaseMeta.badgeText}`}
              >
                {phaseMeta.icon}
                <span>{phaseMeta.label}</span>
              </div>
              <span
                className={`font-mono text-[11px] font-bold ${
                  algorithm.colorTag === 'green'
                    ? 'text-emerald-700'
                    : algorithm.colorTag === 'red'
                    ? 'text-rose-700'
                    : 'text-slate-500'
                }`}
              >
                {algorithm.shortTitle}
              </span>
            </div>

            {/* Active Prompt / Question */}
            <h2 className="mt-2.5 font-display text-lg font-extrabold leading-snug text-slate-900 sm:text-xl">
              {currentNode.title}
            </h2>
            <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
              {currentNode.prompt}
            </p>

            {/* Device Settings Strip */}
            {currentNode.deviceSettings && currentNode.deviceSettings.length > 0 && (
              <div className="mt-3 grid grid-cols-1 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-3">
                {currentNode.deviceSettings.map((setting, idx) => (
                  <div
                    key={idx}
                    className="font-mono text-xs font-semibold text-slate-800 tabular-nums"
                  >
                    {setting}
                  </div>
                ))}
              </div>
            )}

            {/* Interactive Action Checklist (minimum 48x48 gloved hitboxes) */}
            {currentNode.actions && currentNode.actions.length > 0 && (
              <div className="mt-4 space-y-2">
                {currentNode.actions.map((action, idx) => {
                  const checked = Boolean(checkedActions[`${currentNode.id}::${idx}`]);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleActionCheck(currentNode.id, idx)}
                      className={`flex w-full min-h-[48px] items-start gap-3 rounded-xl border p-3 text-left transition-colors ${
                        checked
                          ? 'border-emerald-300 bg-emerald-50'
                          : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100'
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border ${
                          checked
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-slate-400 bg-white'
                        }`}
                      >
                        {checked && <Check className="h-4 w-4" />}
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          checked ? 'text-slate-500 line-through' : 'text-slate-800'
                        }`}
                      >
                        {action}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Expandable Procedural Micro-Card (e.g., Stellate Ganglion Block) */}
            {currentNode.expandableProcedure && (
              <div className="mt-4 overflow-hidden rounded-xl border border-blue-200 bg-blue-50/60">
                <button
                  type="button"
                  onClick={() => setProcedureExpanded((p) => !p)}
                  className="flex min-h-[48px] w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left hover:bg-blue-50"
                >
                  <span className="font-display text-xs font-extrabold uppercase tracking-wider text-blue-900">
                    {currentNode.expandableProcedure.title}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-blue-700 transition-transform ${
                      procedureExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {procedureExpanded && (
                  <ul className="border-t border-blue-200 bg-white px-3.5 py-3 space-y-1.5 text-xs text-slate-800">
                    {currentNode.expandableProcedure.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="font-mono font-bold text-blue-700">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Inline Vector SVG Anatomical / Procedural Diagram */}
            {currentNode.svgDiagramId && (
              <ClinicalSvgDiagram diagramId={currentNode.svgDiagramId} />
            )}

            {/* Inline SI Osmolar Gap Calculator */}
            {currentNode.calculatorId === 'osmolar_gap' && <OsmolarGapCalculator />}

            {/* Node-Level Uploaded Source Illustration */}
            {currentNode.illustration && (
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <div className="border-b border-slate-200 bg-white px-3.5 py-2">
                  <p className="font-display text-xs font-bold text-slate-900">
                    {currentNode.illustration.title}
                  </p>
                </div>
                <div className="bg-white p-2">
                  <img
                    src={currentNode.illustration.imagePath}
                    alt={currentNode.illustration.title}
                    referrerPolicy="no-referrer"
                    className="mx-auto max-h-72 w-full object-contain"
                  />
                </div>
                <p className="border-t border-slate-200 px-3.5 py-2 text-xs text-slate-600">
                  {currentNode.illustration.caption}
                </p>
              </div>
            )}

            {/* Hard-Capped Inline Weight-Based Dosing */}
            {currentNode.dosingItems && currentNode.dosingItems.length > 0 && (
              <div className="mt-4">
                <InlineWeightDosing
                  items={currentNode.dosingItems}
                  weightKg={patientWeightKg}
                  institutionalSettings={institutionalSettings}
                />
              </div>
            )}

            {/* Contextual Pitfall Alert */}
            {currentNode.contextualPitfall && (
              <div className="mt-4 rounded-xl border border-rose-300 bg-rose-50 p-3.5">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-rose-700">
                      Contextual Safety Pitfall
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-rose-950">
                      {currentNode.contextualPitfall}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Inline One-Touch Call Cards */}
            {inlineContacts.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Who to Call at This Step</span>
                </p>
                <div className="space-y-2">
                  {inlineContacts.map((contact) => (
                    <ContactCallCard key={contact.id} contact={contact} compact />
                  ))}
                </div>
              </div>
            )}

            {/* Branch Decision Buttons (min-h-[56px] >= 48px gloved target) */}
            {currentNode.branches.length > 0 && (
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Next Branch
                </p>
                {currentNode.branches.map((branch) => {
                  const isLocked = Boolean(
                    branch.requiresTimerUnlocked &&
                      !unlockedTimers[branch.requiresTimerUnlocked]
                  );
                  return (
                    <button
                      key={branch.id}
                      type="button"
                      disabled={isLocked}
                      onClick={() => handleSelectBranch(branch)}
                      className={`flex w-full min-h-[56px] items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-all active:scale-[0.99] ${getBranchButtonClass(
                        branch.tone,
                        isLocked
                      )}`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-sm font-bold leading-snug sm:text-base">
                          {branch.label}
                        </p>
                        {branch.conditionNote && (
                          <p className="mt-0.5 text-xs opacity-85">
                            {isLocked
                              ? 'Start & complete the 60-min safety timer above (or confirm pre-hospital PTU) to unlock.'
                              : branch.conditionNote}
                          </p>
                        )}
                      </div>
                      {isLocked ? (
                        <Lock className="h-5 w-5 shrink-0 opacity-70" />
                      ) : (
                        <ArrowRight className="h-5 w-5 shrink-0 opacity-80" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Terminal Disposition + Local Workflow + Copy Resus Summary */}
            {currentNode.disposition && (
              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Disposition Target
                    </span>
                    <span className="font-mono text-xs font-semibold text-emerald-800">
                      {currentNode.disposition.urgency}
                    </span>
                  </div>
                  <p className="mt-1 font-display text-base font-extrabold text-emerald-950">
                    {currentNode.disposition.destination}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {currentNode.disposition.checklist.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-emerald-900"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Local Department Disposition & Stock Overlay */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-slate-700">
                      <Building2 className="h-3.5 w-3.5 text-blue-600" />
                      <span>Local Department Workflow</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenAdminWorkflow(topic.id)}
                      className="min-h-[36px] px-2 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Edit in Admin
                    </button>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-700">
                    <strong>Admission / Transfer:</strong> {localWorkflow.admissionCriteria}
                  </p>
                  <p className="mt-1 text-xs text-slate-700">
                    <strong>Local Stock:</strong> {localWorkflow.stockAndEquipment}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleCopyResusSummary}
                    className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl border border-blue-300 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-900 transition-colors hover:bg-blue-100"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-700" />
                        <span>Copied Resus Summary</span>
                      </>
                    ) : (
                      <>
                        <ClipboardCopy className="h-4 w-4" />
                        <span>Copy Resus Summary</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Restart Algorithm</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Secondary Tabs */}
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() =>
                  setSecondaryTab((prev) => (prev === 'local' ? 'none' : 'local'))
                }
                className={`flex min-h-[48px] items-center justify-center gap-2 px-3 text-xs font-bold transition-colors ${
                  secondaryTab === 'local'
                    ? 'bg-slate-100 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Building2 className="h-4 w-4" />
                <span>Local Workflow &amp; Calls</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    secondaryTab === 'local' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  setSecondaryTab((prev) => (prev === 'evidence' ? 'none' : 'evidence'))
                }
                className={`flex min-h-[48px] items-center justify-center gap-2 border-l border-slate-200 px-3 text-xs font-bold transition-colors ${
                  secondaryTab === 'evidence'
                    ? 'bg-slate-100 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>References &amp; All Pitfalls</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    secondaryTab === 'evidence' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {secondaryTab === 'local' && (
              <div className="space-y-4 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Local Department Operational Pathway
                  </h3>
                  <button
                    type="button"
                    onClick={() => onOpenAdminWorkflow(topic.id)}
                    className="min-h-[40px] rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Customize
                  </button>
                </div>

                <ol className="space-y-1.5 text-sm text-slate-700">
                  {localWorkflow.escalationSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-xs font-bold text-blue-600 mt-0.5">
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 space-y-1.5">
                  <p>
                    <strong>Local Stock &amp; Equipment:</strong> {localWorkflow.stockAndEquipment}
                  </p>
                  <p>
                    <strong>Disposition Criteria:</strong> {localWorkflow.admissionCriteria}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Department Speed-Dial Contacts
                  </h4>
                  {topicContacts.map((c) => (
                    <ContactCallCard key={c.id} contact={c} />
                  ))}
                </div>
              </div>
            )}

            {secondaryTab === 'evidence' && (
              <div className="space-y-4 p-4">
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-rose-700">
                    Critical Pitfalls (DO NOT)
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {topic.commonPitfalls.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 p-2.5 text-xs font-medium text-rose-950"
                      >
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">
                    Core International Guideline Evidence
                  </h3>
                  <p className="mt-1.5 font-display text-sm font-bold text-slate-900">
                    {topic.evidence.guidelineName}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {topic.evidence.society} · {topic.evidence.year} · {topic.evidence.evidenceLevel}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700">
                    {topic.evidence.summary}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-slate-500">
                    {topic.evidence.citation}
                  </p>
                  <a
                    href={topic.evidence.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    <span>Open Source Guideline</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visual Flow Map Column */}
        <div
          className={`lg:col-span-5 ${
            viewMode === 'flowmap' ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-[204px]">
            <h3 className="font-display text-sm font-bold text-slate-900">
              Algorithm Flow Map
            </h3>
            <div className="mt-3">{renderFlowMapPanel()}</div>
          </div>
        </div>
      </div>

      {/* Reference Source Chart Modal */}
      {showChartModal && algorithm.referenceDiagrams && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 backdrop-blur-sm sm:p-6">
          <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
              <h3 className="font-display text-sm font-bold text-slate-900 sm:text-base">
                {algorithm.referenceDiagrams[0].title}
              </h3>
              <button
                type="button"
                onClick={() => setShowChartModal(false)}
                aria-label="Close reference chart"
                className="flex h-12 w-12 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-4 space-y-4">
              {algorithm.referenceDiagrams.map((diag, idx) => (
                <div key={idx} className="space-y-2">
                  <img
                    src={diag.imagePath}
                    alt={diag.title}
                    referrerPolicy="no-referrer"
                    className="w-full rounded-xl border border-slate-200 bg-white object-contain"
                  />
                  <p className="text-xs text-slate-600">{diag.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
