import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_CONTACTS } from '../data/contactsAndCategories';
import { getTopicById } from '../data/clinicalRegistry';
import {
  DepartmentContact,
  InstitutionalSettings,
  LocalWorkflowData,
  RecentAlgorithmEntry,
  ResusLogEntry,
} from '../types/clinical';

const STORAGE_KEYS = {
  FAVORITES: 'halo_favorites_v2',
  RECENTS: 'halo_recents_v2',
  WORKFLOWS: 'halo_local_workflows_v2',
  CONTACTS: 'halo_dept_contacts_v2',
  WEIGHT: 'halo_patient_weight_kg_v2',
  INSTITUTIONAL: 'halo_institutional_settings_v3',
};

const DEFAULT_INSTITUTIONAL_SETTINGS: InstitutionalSettings = {
  andexanetAlfaStocked: false,
  fomepizoleStocked: true,
  equipmentBayNotes: {},
};

function safeReadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function mergeContactsWithDefaults(saved: DepartmentContact[]): DepartmentContact[] {
  const byId = new Map(saved.map((c) => [c.id, c]));
  return DEFAULT_CONTACTS.map((def) => {
    const existing = byId.get(def.id);
    return existing
      ? {
          ...def,
          extension: existing.extension ?? def.extension,
          pagerOrMobile: existing.pagerOrMobile ?? def.pagerOrMobile,
        }
      : def;
  });
}

export function useClinicalStore() {
  const [favoriteAlgoIds, setFavoriteAlgoIds] = useState<string[]>(() =>
    safeReadJson<string[]>(STORAGE_KEYS.FAVORITES, [
      'trach-rcem-green',
      'lvad-uk-emergency',
      'refractory-vf-dsed',
    ])
  );

  const [recentAlgos, setRecentAlgos] = useState<RecentAlgorithmEntry[]>(() =>
    safeReadJson<RecentAlgorithmEntry[]>(STORAGE_KEYS.RECENTS, [])
  );

  const [localWorkflows, setLocalWorkflows] = useState<Record<string, LocalWorkflowData>>(() =>
    safeReadJson<Record<string, LocalWorkflowData>>(STORAGE_KEYS.WORKFLOWS, {})
  );

  const [contacts, setContacts] = useState<DepartmentContact[]>(() => {
    const stored = safeReadJson<DepartmentContact[]>(STORAGE_KEYS.CONTACTS, DEFAULT_CONTACTS);
    return mergeContactsWithDefaults(stored);
  });

  const [institutionalSettings, setInstitutionalSettings] = useState<InstitutionalSettings>(() => {
    const stored = safeReadJson<Partial<InstitutionalSettings>>(
      STORAGE_KEYS.INSTITUTIONAL,
      DEFAULT_INSTITUTIONAL_SETTINGS
    );
    return {
      andexanetAlfaStocked: Boolean(stored.andexanetAlfaStocked),
      fomepizoleStocked: stored.fomepizoleStocked ?? true,
      equipmentBayNotes: stored.equipmentBayNotes ?? {},
    };
  });

  const [patientWeightKg, setPatientWeightKgState] = useState<number>(() => {
    const raw = localStorage.getItem(STORAGE_KEYS.WEIGHT);
    const parsed = raw ? Number(raw) : 70;
    return Number.isFinite(parsed) && parsed >= 10 && parsed <= 200 ? parsed : 70;
  });

  const [resusLog, setResusLog] = useState<ResusLogEntry[]>([]);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', '#F8FAFC');
    }
  }, []);

  const appendResusLog = useCallback(
    (type: ResusLogEntry['type'], label: string, detail?: string) => {
      setResusLog((prev) => [
        ...prev.slice(-49),
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          timestamp: Date.now(),
          type,
          label,
          detail,
        },
      ]);
    },
    []
  );

  const clearResusLog = useCallback(() => {
    setResusLog([]);
  }, []);

  const setPatientWeightKg = useCallback(
    (kg: number) => {
      const clamped = Math.max(10, Math.min(200, Math.round(kg * 10) / 10));
      setPatientWeightKgState(clamped);
      localStorage.setItem(STORAGE_KEYS.WEIGHT, String(clamped));
      appendResusLog('weight', `Estimated weight set to ${clamped} kg`);
    },
    [appendResusLog]
  );

  const toggleFavorite = useCallback((algoId: string) => {
    setFavoriteAlgoIds((prev) => {
      const next = prev.includes(algoId)
        ? prev.filter((id) => id !== algoId)
        : [algoId, ...prev];
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(next));
      return next;
    });
  }, []);

  const recordRecentAlgorithm = useCallback((topicId: string, algoId: string) => {
    setRecentAlgos((prev) => {
      const filtered = prev.filter((item) => item.algoId !== algoId);
      const next = [{ topicId, algoId, timestamp: Date.now() }, ...filtered].slice(0, 10);
      localStorage.setItem(STORAGE_KEYS.RECENTS, JSON.stringify(next));
      return next;
    });
  }, []);

  const getEffectiveWorkflow = useCallback(
    (topicId: string): LocalWorkflowData => {
      const custom = localWorkflows[topicId];
      if (custom) return custom;
      const topic = getTopicById(topicId);
      return (
        topic?.defaultLocalWorkflow ?? {
          escalationSteps: [],
          stockAndEquipment: '',
          admissionCriteria: '',
        }
      );
    },
    [localWorkflows]
  );

  const saveLocalWorkflow = useCallback((topicId: string, data: LocalWorkflowData) => {
    setLocalWorkflows((prev) => {
      const next = { ...prev, [topicId]: data };
      localStorage.setItem(STORAGE_KEYS.WORKFLOWS, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetLocalWorkflow = useCallback((topicId: string) => {
    setLocalWorkflows((prev) => {
      const next = { ...prev };
      delete next[topicId];
      localStorage.setItem(STORAGE_KEYS.WORKFLOWS, JSON.stringify(next));
      return next;
    });
  }, []);

  const updateContact = useCallback((updated: DepartmentContact) => {
    setContacts((prev) => {
      const next = prev.map((c) => (c.id === updated.id ? updated : c));
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetAllContacts = useCallback(() => {
    setContacts(DEFAULT_CONTACTS);
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(DEFAULT_CONTACTS));
  }, []);

  const updateInstitutionalSettings = useCallback(
    (patch: Partial<InstitutionalSettings>) => {
      setInstitutionalSettings((prev) => {
        const next: InstitutionalSettings = {
          ...prev,
          ...patch,
          equipmentBayNotes: patch.equipmentBayNotes ?? prev.equipmentBayNotes,
        };
        localStorage.setItem(STORAGE_KEYS.INSTITUTIONAL, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const exportConfigJson = useCallback(() => {
    return JSON.stringify(
      {
        version: 'v2026.3',
        exportedAt: new Date().toISOString(),
        localWorkflows,
        contacts,
        institutionalSettings,
      },
      null,
      2
    );
  }, [localWorkflows, contacts, institutionalSettings]);

  const importConfigJson = useCallback((raw: string): boolean => {
    try {
      const parsed = JSON.parse(raw);
      if (parsed.localWorkflows && typeof parsed.localWorkflows === 'object') {
        setLocalWorkflows(parsed.localWorkflows);
        localStorage.setItem(STORAGE_KEYS.WORKFLOWS, JSON.stringify(parsed.localWorkflows));
      }
      if (Array.isArray(parsed.contacts)) {
        const merged = mergeContactsWithDefaults(parsed.contacts);
        setContacts(merged);
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(merged));
      }
      if (parsed.institutionalSettings && typeof parsed.institutionalSettings === 'object') {
        const nextSettings: InstitutionalSettings = {
          andexanetAlfaStocked: Boolean(parsed.institutionalSettings.andexanetAlfaStocked),
          fomepizoleStocked: parsed.institutionalSettings.fomepizoleStocked ?? true,
          equipmentBayNotes: parsed.institutionalSettings.equipmentBayNotes ?? {},
        };
        setInstitutionalSettings(nextSettings);
        localStorage.setItem(STORAGE_KEYS.INSTITUTIONAL, JSON.stringify(nextSettings));
      }
      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    favoriteAlgoIds,
    toggleFavorite,
    recentAlgos,
    recordRecentAlgorithm,
    patientWeightKg,
    setPatientWeightKg,
    localWorkflows,
    getEffectiveWorkflow,
    saveLocalWorkflow,
    resetLocalWorkflow,
    contacts,
    updateContact,
    resetAllContacts,
    institutionalSettings,
    updateInstitutionalSettings,
    resusLog,
    appendResusLog,
    clearResusLog,
    exportConfigJson,
    importConfigJson,
  };
}
