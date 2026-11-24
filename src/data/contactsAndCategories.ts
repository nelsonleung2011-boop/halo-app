import { CategoryMeta, DepartmentContact } from '../types/clinical';

export const APP_GUIDELINE_VERSION = 'v2026.3';
export const APP_LAST_UPDATED = '2026-11-23';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'airway_devices',
    title: 'Airway & Thoracic Procedures',
    shortTitle: 'Airway & Thoracic',
    description:
      'Tracheostomy, Laryngectomy, CICO (eFONA), Thoracotomy, Finger Thoracostomy, LVAD & Devices',
    accentClass: 'border-rose-300 hover:border-rose-400',
    badgeTextClass: 'text-rose-700',
  },
  {
    id: 'cardiovascular',
    title: 'Cardiovascular',
    shortTitle: 'Cardiovascular',
    description:
      'Refractory VF, Electrical Storm, Anticoagulant/tPA Bleeds, Aortic Dissection & Massive PE',
    accentClass: 'border-amber-300 hover:border-amber-400',
    badgeTextClass: 'text-amber-700',
  },
  {
    id: 'ent',
    title: 'ENT, Airway & GI Bleeds',
    shortTitle: 'ENT & GI Bleeds',
    description: 'Massive Epistaxis, Massive Haemoptysis & Catastrophic Variceal Bleed',
    accentClass: 'border-sky-300 hover:border-sky-400',
    badgeTextClass: 'text-sky-700',
  },
  {
    id: 'endocrine',
    title: 'Endocrine & Environmental',
    shortTitle: 'Endocrine & Env',
    description:
      'Thyroid Storm, Myxoedema Coma, Hyperthermia Syndromes & Severe Accidental Hypothermia',
    accentClass: 'border-emerald-300 hover:border-emerald-400',
    badgeTextClass: 'text-emerald-700',
  },
  {
    id: 'immunology_resus',
    title: 'Immunology & Resuscitation',
    shortTitle: 'Immunology',
    description: 'Refractory Adrenaline-Resistant Anaphylaxis & IV Epinephrine Titration',
    accentClass: 'border-teal-300 hover:border-teal-400',
    badgeTextClass: 'text-teal-700',
  },
  {
    id: 'toxicology',
    title: 'Toxicology (HALO)',
    shortTitle: 'Toxicology',
    description:
      'Beta Blocker, CCB, TCA, Paraquat, CO, Toxic Alcohols & Organophosphate Crisis',
    accentClass: 'border-violet-300 hover:border-violet-400',
    badgeTextClass: 'text-violet-700',
  },
];

export const DEFAULT_CONTACTS: DepartmentContact[] = [
  {
    id: 'anaesthesia',
    roleName: 'Anaesthesia / Airway Team',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Immediate activation for CICO/eFONA, difficult airway, laryngectomy, or refractory arrest.',
    isPrimaryEmergency: true,
  },
  {
    id: 'ent',
    roleName: 'ENT On-Call Team',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Call STAT for tracheostomy bleeding (TIF), immature dislodgement (<7d), or posterior epistaxis.',
    isPrimaryEmergency: true,
  },
  {
    id: 'icu',
    roleName: 'ICU / Resuscitation Team',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Early notification for ECPR candidacy, HIET infusions, endocrine/environmental crises, and shock.',
    isPrimaryEmergency: true,
  },
  {
    id: 'ecmo_team',
    roleName: 'ECMO / ECLS Cannulation Team',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Activate STAT for refractory VF ECPR, hypothermic arrest (<28°C), or massive PE/tox cardiogenic shock.',
    isPrimaryEmergency: true,
  },
  {
    id: 'cardiology',
    roleName: 'Cardiology / Cath Lab',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Activate for Electrical Storm, refractory VF, PERT massive PE, or pacemaker/ICD interrogation.',
    isPrimaryEmergency: true,
  },
  {
    id: 'cardiothoracic',
    roleName: 'Cardiothoracic / Trauma Surgery',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Call STAT for resuscitative thoracotomy, massive haemothorax (>1,500 mL), or Type A aortic dissection.',
    isPrimaryEmergency: true,
  },
  {
    id: 'vad_team',
    roleName: 'MCS / LVAD Coordinator',
    extension: '',
    pagerOrMobile: '24/7 VAD Centre Hotline',
    escalationRule:
      'Contact immediately on arrival of any LVAD patient with alarms, hypotension, or arrest.',
    isPrimaryEmergency: true,
  },
  {
    id: 'haematology',
    roleName: 'Haematology / Blood Bank',
    extension: '',
    pagerOrMobile: 'STAT Transfusion Release',
    escalationRule:
      'Massive transfusion protocol (MTP) & specialist release for 4F-PCC / Idarucizumab / Cryoprecipitate.',
    isPrimaryEmergency: false,
  },
  {
    id: 'interventional_rad',
    roleName: 'Interventional Radiology (IR)',
    extension: '',
    pagerOrMobile: 'On-Call IR Team',
    escalationRule:
      'Urgent BAE for massive haemoptysis, epistaxis embolization, or PERT catheter-directed therapy.',
    isPrimaryEmergency: false,
  },
  {
    id: 'gi_endoscopy',
    roleName: 'GI Endoscopy / Hepatology',
    extension: '',
    pagerOrMobile: 'On-Call GI Bleed Team',
    escalationRule:
      'Activate STAT for variceal band ligation / TIPS following Sengstaken-Blakemore tamponade.',
    isPrimaryEmergency: false,
  },
  {
    id: 'toxicology',
    roleName: 'Toxicology / Poison Control',
    extension: '',
    pagerOrMobile: '24/7 Poison Information',
    escalationRule:
      'Consult for toxic alcohols, organophosphates, Paraquat, refractory CCB/BB shock, or HBO2 triage.',
    isPrimaryEmergency: false,
  },
  {
    id: 'neurosurgery',
    roleName: 'Neurosurgery On-Call',
    extension: '',
    pagerOrMobile: 'Via Hospital Switchboard',
    escalationRule:
      'Immediate referral for anticoagulant or post-thrombolytic ICH alongside urgent reversal.',
    isPrimaryEmergency: false,
  },
];
