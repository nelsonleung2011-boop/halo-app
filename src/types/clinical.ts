export type CategoryId =
  | 'airway_devices'
  | 'cardiovascular'
  | 'ent'
  | 'endocrine'
  | 'immunology_resus'
  | 'toxicology';

export type NodePhase =
  | 'arrival'
  | 'immediate'
  | 'decision'
  | 'intervention'
  | 'disposition';

export type BranchTone = 'yes' | 'no' | 'critical' | 'neutral';

export type StockToggleKey = 'andexanetAlfaStocked' | 'fomepizoleStocked';

export type SvgDiagramId =
  | 'trach_vs_laryngectomy'
  | 'utley'
  | 'dsed_pads'
  | 'cico_efona';

export interface TimerConfig {
  id: string;
  label: string;
  durationSec: number;
  kind: 'countdown' | 'hypothermia_guard';
  autoStart?: boolean;
  unlocksBranchIds?: string[];
  alertText?: string;
}

export interface DosingItem {
  id: string;
  drugName: string;
  formulaType: 'per_kg' | 'range_per_kg' | 'fixed';
  dosePerKg?: number;
  minDosePerKg?: number;
  maxDosePerKg?: number;
  maxSingleDose?: number;
  maxVolumeMl?: number;
  fixedDoseText?: string;
  unit: string;
  concMgPerMl?: number;
  vialStrength?: number;
  vialUnitLabel?: string;
  dualRateAdrenaline?: boolean;
  concentrationLabel?: string;
  route: string;
  rateOrFrequency: string;
  clinicalNote?: string;
  requiresStockToggle?: StockToggleKey;
  hideWhenStockToggle?: StockToggleKey;
}

export interface CrossAlgorithmTarget {
  topicId: string;
  algoId: string;
  nodeId?: string;
}

export interface BranchOption {
  id: string;
  label: string;
  conditionNote?: string;
  tone: BranchTone;
  nextNodeId: string;
  crossAlgorithmTarget?: CrossAlgorithmTarget;
  requiresTimerUnlocked?: string;
}

export interface NodeIllustration {
  imagePath: string;
  title: string;
  caption: string;
}

export interface ExpandableProcedure {
  title: string;
  steps: string[];
}

export interface AlgorithmNode {
  id: string;
  phase: NodePhase;
  title: string;
  prompt: string;
  actions?: string[];
  deviceSettings?: string[];
  dosingItems?: DosingItem[];
  contextualPitfall?: string;
  inlineCallRoles?: string[];
  illustration?: NodeIllustration;
  svgDiagramId?: SvgDiagramId;
  timerConfig?: TimerConfig;
  calculatorId?: 'osmolar_gap';
  expandableProcedure?: ExpandableProcedure;
  branches: BranchOption[];
  disposition?: {
    destination: string;
    urgency: string;
    checklist: string[];
  };
}

export interface ClinicalAlgorithm {
  id: string;
  topicId: string;
  title: string;
  shortTitle: string;
  presentationTrigger: string;
  colorTag?: 'green' | 'red' | 'blue' | 'amber';
  isDirectHomeShortcut?: boolean;
  estimatedSteps: number;
  startNodeId: string;
  keywords: string[];
  referenceDiagrams?: NodeIllustration[];
  nodes: Record<string, AlgorithmNode>;
}

export interface EvidenceRecord {
  society: string;
  guidelineName: string;
  year: number;
  evidenceLevel: string;
  summary: string;
  citation: string;
  url: string;
}

export interface LocalWorkflowData {
  escalationSteps: string[];
  stockAndEquipment: string;
  admissionCriteria: string;
}

export interface ClinicalTopic {
  id: string;
  title: string;
  shortTitle: string;
  category: CategoryId;
  algorithms: ClinicalAlgorithm[];
  defaultContactRoles: string[];
  commonPitfalls: string[];
  evidence: EvidenceRecord;
  defaultLocalWorkflow: LocalWorkflowData;
}

export interface DepartmentContact {
  id: string;
  roleName: string;
  extension: string;
  pagerOrMobile: string;
  escalationRule: string;
  isPrimaryEmergency: boolean;
}

export interface InstitutionalSettings {
  andexanetAlfaStocked: boolean;
  fomepizoleStocked: boolean;
  equipmentBayNotes: Record<string, string>;
}

export interface ResusLogEntry {
  id: string;
  timestamp: number;
  type: 'module_open' | 'weight' | 'timer' | 'node' | 'cross_algo';
  label: string;
  detail?: string;
}

export interface RecentAlgorithmEntry {
  topicId: string;
  algoId: string;
  timestamp: number;
}

export interface CategoryMeta {
  id: CategoryId;
  title: string;
  shortTitle: string;
  description: string;
  accentClass: string;
  badgeTextClass: string;
}

export interface SearchResultItem {
  topic: ClinicalTopic;
  algorithm: ClinicalAlgorithm;
  score: number;
  matchReason: string;
}
