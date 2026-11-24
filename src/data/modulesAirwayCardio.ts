import { ClinicalTopic } from '../types/clinical';

export const MODULES_AIRWAY_CARDIO: ClinicalTopic[] = [
  {
    id: 'cico',
    title: "Can't Intubate, Can't Oxygenate (CICO) — eFONA",
    shortTitle: 'CICO (eFONA)',
    category: 'airway_devices',
    defaultContactRoles: ['anaesthesia', 'ent', 'icu'],
    commonPitfalls: [
      'DO NOT perform needle cricothyroidotomy with high-pressure jet ventilation in complete upper airway obstruction — high risk of catastrophic barotrauma, tension pneumothorax, and surgical emphysema.',
      'DO NOT attempt more than ONE rescue Supraglottic Airway (SGA) insertion once CICO is declared — move straight to scalpel-bougie-tube eFONA.',
      'DO NOT advance the bougie forcefully past 10–15 cm or hit resistance — risks tracheal/carinal perforation.',
    ],
    evidence: {
      society: 'Difficult Airway Society (DAS) / Vortex Approach',
      guidelineName: 'DAS Guidelines for Management of Unanticipated Difficult Intubation (Plan D: eFONA)',
      year: 2024,
      evidenceLevel: 'Strong Recommendation · Expert Consensus',
      summary:
        'Mandates immediate declaration of CICO after failed Plan A/B/C, 100% O2 nasal/face attempt, and standardized Scalpel-Bougie-Tube (size 6.0 cuffed ETT) emergency front-of-neck access through the cricothyroid membrane.',
      citation: 'Frerk C et al. Br J Anaesth 2015; DAS/Vortex CICO Implementation Update 2024.',
      url: 'https://das.uk.com/guidelines/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Declare "THIS IS A CICO EMERGENCY — PROCEEDING TO eFONA" loudly so the entire team transitions.',
        'Call Anaesthesia Senior and ENT On-Call STAT while opening the eFONA Scalpel-Bougie-6.0 ETT pack.',
        'Assign one nurse exclusively to continuous waveform capnography and external neck stabilization.',
      ],
      stockAndEquipment:
        'Pre-packaged eFONA Kit in every Airway Trolley: No. 10 broad-blade scalpel, coudé-tip bougie, size 6.0 cuffed ETT, and 10 mL syringe.',
      admissionCriteria:
        'All eFONA survivors require immediate ICU admission, ENT surgical airway conversion/inspection, and CXR for pneumothorax/barotrauma.',
    },
    algorithms: [
      {
        id: 'cico-efona-algo',
        topicId: 'cico',
        title: 'CICO Declaration & Scalpel-Bougie-Tube eFONA',
        shortTitle: 'CICO (eFONA)',
        presentationTrigger:
          'Failed tracheal intubation, failed bag-mask ventilation, and failed 2nd-generation SGA with falling SpO2',
        colorTag: 'red',
        isDirectHomeShortcut: true,
        estimatedSteps: 3,
        startNodeId: 'cico-1',
        keywords: [
          'cico',
          'efona',
          'cricothyroidotomy',
          'scalpel',
          'bougie',
          'can not intubate',
          'vortex',
          'front of neck',
        ],
        nodes: {
          'cico-1': {
            id: 'cico-1',
            phase: 'immediate',
            title: 'Declare CICO & Execute Max 1 SGA Attempt',
            prompt:
              'Failed intubation + failed BVM oxygenation. Stop repeated laryngoscopy immediately and declare CICO aloud.',
            actions: [
              'Call aloud: "THIS IS A CICO SITUATION — OPEN THE eFONA KIT NOW!"',
              'Maintain continuous 100% O2 attempt via upper airway (2-person jaw thrust + Guedel/NPA) OR max 1 rapid 2nd-generation SGA attempt while eFONA kit is opened.',
              'Ensure full neuromuscular blockade (confirm Rocuronium given) so laryngospasm/muscle tone does not obstruct rescue.',
              'Position patient supine with maximal neck extension (pillow under shoulders, head dropped back).',
            ],
            contextualPitfall:
              'DO NOT waste critical hypoxic minutes repeating direct/video laryngoscopy or multiple SGA swaps — prepare scalpel immediately.',
            inlineCallRoles: ['anaesthesia', 'ent'],
            branches: [
              {
                id: 'b-cico-sga-ok',
                label: 'SGA Restored Oxygenation (SpO2 & ETCO2 Recovering)',
                conditionNote: 'Pause eFONA, maintain oxygenation, plan controlled awakening or fibreoptic/ENT airway.',
                tone: 'yes',
                nextNodeId: 'cico-disp',
              },
              {
                id: 'b-cico-efona',
                label: 'SpO2 Falling / No ETCO2 → Proceed STAT to Scalpel eFONA',
                conditionNote: 'Zero delay — cut now before hypoxic cardiac arrest.',
                tone: 'critical',
                nextNodeId: 'cico-2',
              },
            ],
          },
          'cico-2': {
            id: 'cico-2',
            phase: 'intervention',
            title: 'Scalpel–Bougie–6.0 ETT Technique (DAS Plan D)',
            prompt:
              'Perform the "Laryngeal Handshake" and execute standardized Scalpel-Bougie-Tube cricothyroidotomy.',
            svgDiagramId: 'cico_efona',
            actions: [
              '1. LARYNGEAL HANDSHAKE: Stabilize thyroid/cricoid cartilages with non-dominant hand; identify cricothyroid membrane (CTM) with index finger.',
              '2. STAB (PALPABLE CTM): Make a transverse stab incision with No. 10 scalpel through skin and CTM, cutting edge facing you; turn blade 90° (sharp edge caudally toward feet).',
              '   • IMPALPABLE NECK (Obesity/Trauma): Make an 8–10 cm vertical midline skin incision first, blunt-dissect with fingers to palpate CTM, then transverse stab.',
              '3. BOUGIE: Slide coudé-tip bougie along flat of scalpel blade into trachea (remove scalpel); advance gently ≤ 10–15 cm (feel tracheal clicks or gentle hold-up — DO NOT force).',
              '4. TUBE: Railroad lubricated size 6.0 cuffed ETT over bougie into trachea until cuff is just below skin; remove bougie, inflate cuff, ventilate, and confirm WAVEFORM ETCO2.',
            ],
            contextualPitfall:
              'DO NOT use needle cricothyroidotomy + high-pressure jet ventilation in total upper airway obstruction — fatal barotrauma/tension pneumothorax!',
            inlineCallRoles: ['anaesthesia', 'ent', 'icu'],
            branches: [
              {
                id: 'b-cico-secured',
                label: 'Waveform Capnography Confirmed → Post-eFONA Stabilization',
                tone: 'yes',
                nextNodeId: 'cico-disp',
              },
            ],
          },
          'cico-disp': {
            id: 'cico-disp',
            phase: 'disposition',
            title: 'Post-eFONA Stabilization, CXR & ENT Handover',
            prompt:
              'Secure the ETT/airway firmly against dislodgement, check for barotrauma, and transfer to ICU/Theatre.',
            actions: [
              'Hold tube manually until sutured or firmly tied around neck (false-passage dislodgement happens easily if unsecured).',
              'Obtain portable CXR STAT to rule out pneumothorax/pneumomediastinum and confirm tube depth above carina.',
              'Arrange urgent ENT / Anaesthesia definitive airway plan (formal tracheostomy or controlled oral intubation once oedema resolves).',
            ],
            inlineCallRoles: ['icu', 'ent', 'anaesthesia'],
            disposition: {
              destination: 'ICU / Operating Theatre (ENT Definitive Airway)',
              urgency: 'STAT Critical Airway Handover',
              checklist: [
                'Continuous waveform capnography active',
                'Size 6.0 ETT secured by tie/suture and depth documented',
                'Post-procedure CXR completed',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'thoracotomy',
    title: 'Resuscitative Thoracotomy (Traumatic Arrest)',
    shortTitle: 'Thoracotomy',
    category: 'airway_devices',
    defaultContactRoles: ['cardiothoracic', 'anaesthesia', 'icu'],
    commonPitfalls: [
      'DO NOT incise the pericardium posteriorly or transversely — you will transect the left phrenic nerve running vertically down the lateral pericardium.',
      'DO NOT cross-clamp the oesophagus instead of the descending thoracic aorta — palpate the pre-placed NG/OG tube anteriorly and clamp the vessel hugging the anterior vertebral column.',
      'DO NOT perform resuscitative thoracotomy in blunt trauma with >10 minutes of arrest/asystole and no signs of life (futile survival <1%).',
    ],
    evidence: {
      society: 'EAST / European Resuscitation Council (ERC)',
      guidelineName: 'Practice Management Guidelines for Emergency Department Thoracotomy',
      year: 2024,
      evidenceLevel: 'Strong Recommendation · Trauma Consensus',
      summary:
        'Targets reversible tamponade, intrathoracic haemorrhage, and subdiaphragmatic exsanguination via Clamshell or Left Anterolateral Thoracotomy (4th–5th ICS) in penetrating (<15 min CPR) or selected blunt (<10 min) arrest.',
      citation: 'Seamon MJ et al. J Trauma Acute Care Surg 2015; ERC Special Circumstances 2021/2024.',
      url: 'https://www.east.org/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Activate Massive Transfusion Protocol (1:1:1 PRBC:FFP:Platelets) and Cardiothoracic/Trauma Surgery STAT.',
        'Open Resuscitative Thoracotomy Tray immediately alongside bilateral Finger Thoracostomy.',
        'Pre-warm rapid infuser (Belmont / Level 1) and alert Operating Theatre to stand by for immediate damage-control repair.',
      ],
      stockAndEquipment:
        'Thoracotomy Tray (No. 10/20 scalpel, Gigli saw / trauma shears, Finochietto rib spreader, Satinsky/DeBakey aortic clamps, internal defib paddles, 3-0 Prolene + skin stapler).',
      admissionCriteria:
        'Immediate transfer to Operating Theatre (ROSC achieved) → ICU.',
    },
    algorithms: [
      {
        id: 'thoracotomy-algo',
        topicId: 'thoracotomy',
        title: 'ED Resuscitative Thoracotomy (Clamshell / Left Anterolateral)',
        shortTitle: 'Thoracotomy',
        presentationTrigger:
          'Traumatic cardiac arrest with penetrating thoracic trauma (<15 min CPR) or witnessed blunt arrest (<10 min)',
        colorTag: 'red',
        estimatedSteps: 4,
        startNodeId: 'thor-1',
        keywords: [
          'thoracotomy',
          'clamshell',
          'tamponade',
          'traumatic arrest',
          'aortic cross clamp',
          'pericardiotomy',
          'hilar twist',
        ],
        nodes: {
          'thor-1': {
            id: 'thor-1',
            phase: 'decision',
            title: 'Candidacy Check & Clamshell / Left Anterolateral Incision',
            prompt:
              'Confirm time since loss of signs of life, execute bilateral finger thoracostomies, and open chest if eligible.',
            actions: [
              'VERIFY INDICATION: Penetrating torso trauma with CPR <15 min (or signs of life in ED/EMS) OR blunt trauma with witnessed arrest <10 min + electrical activity/POCUS cardiac motion.',
              'Start MTP (1:1:1 warmed blood), intubate, and place large-bore IV/IO above the diaphragm + OG/NG tube (landmark for oesophagus).',
              'CHEST ACCESS (4th–5th ICS, inframammary crease in men / under breast fold in women): Start with bilateral finger thoracostomies, then connect across sternum using trauma shears/Gigli saw for CLAMSHELL exposure (preferred for trauma exposure) or wide Left Anterolateral incision.',
              'Insert Finochietto retractor (ratchet/handle pointing laterally/axilla) and open ribs maximally.',
            ],
            contextualPitfall:
              'DO NOT waste time with small superficial cuts or wrong intercostal space (above 4th ICS hits pectoralis/axillary vessels). Pause chest compressions briefly during rib spreading for operator safety.',
            inlineCallRoles: ['cardiothoracic', 'anaesthesia', 'icu'],
            branches: [
              {
                id: 'b-thor-open',
                label: 'Chest Open → Pericardiotomy & Direct Cardiac Control',
                tone: 'critical',
                nextNodeId: 'thor-2',
              },
              {
                id: 'b-thor-futile',
                label: 'Blunt Trauma > 10–15 min Asystole & Zero POCUS Cardiac Motion',
                conditionNote: 'Consider termination of resuscitation per institutional trauma policy.',
                tone: 'neutral',
                nextNodeId: 'thor-disp',
              },
            ],
          },
          'thor-2': {
            id: 'thor-2',
            phase: 'intervention',
            title: 'Pericardiotomy, Cardiac Repair & Internal Defibrillation',
            prompt:
              'Open pericardium longitudinally ANTERIOR to the left phrenic nerve, evacuate clot, control cardiac wounds, and massage.',
            actions: [
              '1. IDENTIFY LEFT PHRENIC NERVE: Runs superior-to-inferior along lateral pericardium.',
              '2. LONGITUDINAL PERICARDIOTOMY: Pinch pericardium anteriorly with forceps, incise vertically anterior & parallel to phrenic nerve; deliver heart out and scoop all clot.',
              '3. CONTROL MYOCARDIAL BLEEDING: Digital finger occlusion (do NOT push finger inside enlarging tear) or Foley catheter balloon gently inflated inside defect, OR rapid skin stapler / 3-0 Prolene pledgeted horizontal mattress sutures.',
              '4. TWO-HANDED INTERNAL CARDIAC MASSAGE: Hinge wrists together with flat palms compressing ventricles from apex toward base (never poke tips of fingers through myocardium!).',
              '5. INTERNAL DEFIBRILLATION (if VF/pVT): Apply internal paddles directly to heart at 10–20 Joules (biphasic).',
            ],
            contextualPitfall:
              'DO NOT injure the coronary arteries when placing cardiac sutures (use horizontal mattress sutures passing underneath major coronary vessels).',
            branches: [
              {
                id: 'b-thor-clamp',
                label: 'Empty Heart / Subdiaphragmatic or Pulmonary Bleed → Cross-Clamp Aorta',
                tone: 'critical',
                nextNodeId: 'thor-clamp',
              },
              {
                id: 'b-thor-rosc',
                label: 'ROSC Achieved (Palpable Pulse / ETCO2 Rise >20 mmHg) → OR STAT',
                tone: 'yes',
                nextNodeId: 'thor-disp',
              },
            ],
          },
          'thor-clamp': {
            id: 'thor-clamp',
            phase: 'intervention',
            title: 'Descending Aorta Cross-Clamp & Pulmonary Hilar Control',
            prompt:
              'Maximise coronary/cerebral perfusion and arrest infradiaphragmatic or pulmonary hilar haemorrhage.',
            actions: [
              'AORTIC CROSS-CLAMP: Sweep left lung anteriorly/superiorly; incise mediastinal pleura over descending thoracic aorta immediately anterior to thoracic vertebral bodies.',
              'Identify oesophagus anteriorly (feel NG/OG tube!) and slide curved Satinsky/DeBakey vascular clamp across aorta just above diaphragm.',
              'PULMONARY HILAR BLEEDING: Divide inferior pulmonary ligament with scissors, then perform 180° pulmonary hilar twist OR apply large vascular clamp across pulmonary hilum to stop massive lung bleed / air embolism.',
              'Resume warm MTP resuscitation + internal cardiac massage + internal defibrillation if needed.',
            ],
            contextualPitfall:
              'Once ROSC is achieved, SBP will surge markedly — prepare Operating Theatre STAT and avoid prolonged (>30 min) aortic clamp ischaemia.',
            inlineCallRoles: ['cardiothoracic'],
            branches: [
              {
                id: 'b-thor-to-disp',
                label: 'Proceed to Operating Theatre Transfer / Outcome',
                tone: 'yes',
                nextNodeId: 'thor-disp',
              },
            ],
          },
          'thor-disp': {
            id: 'thor-disp',
            phase: 'disposition',
            title: 'Operating Theatre Damage Control (or Termination)',
            prompt:
              'If ROSC achieved (SBP >70 mmHg / ETCO2 surge), transfer directly to Operating Theatre with clamps/pack in situ.',
            actions: [
              'If ROSC: Administer broad-spectrum IV antibiotics (e.g., Cefazolin 2 g IV), maintain warmed MTP 1:1:1, and keep sterile moist laparotomy pads over open chest en route to OR.',
              'Log exact aortic cross-clamp time for surgical team.',
            ],
            inlineCallRoles: ['cardiothoracic', 'anaesthesia', 'icu'],
            disposition: {
              destination: 'Operating Theatre STAT → Cardiothoracic / Trauma ICU',
              urgency: 'Immediate Damage-Control Surgery',
              checklist: [
                'Aortic clamp time documented',
                'Warmed MTP 1:1:1 running continuously',
                'IV antibiotics administered for open chest',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'finger-thoracostomy',
    title: 'Finger Thoracostomy & Massive Haemothorax',
    shortTitle: 'Finger Thoracostomy',
    category: 'airway_devices',
    defaultContactRoles: ['cardiothoracic', 'icu', 'anaesthesia'],
    commonPitfalls: [
      'DO NOT insert a chest drain using a metal trocar — high risk of fatal myocardial, hepatic, splenic, or pulmonary laceration.',
      'DO NOT rely on 2nd ICS mid-clavicular needle decompression in adult traumatic arrest — failure rate exceeds 40% due to chest wall thickness and kinking.',
      'DO NOT clamp a chest drain when active air leak or pneumothorax is present — risks immediate iatrogenic tension pneumothorax.',
    ],
    evidence: {
      society: 'ATLS 10th Ed / European Resuscitation Council (ERC)',
      guidelineName: 'Traumatic Cardiac Arrest & Thoracic Decompression Protocol',
      year: 2024,
      evidenceLevel: 'Class I · Trauma Resuscitation Standard',
      summary:
        'Mandates bilateral finger thoracostomy in the Triangle of Safety (4th/5th ICS, anterior-to-midaxillary line) as first-line decompression in traumatic arrest/PPV tension pneumothorax, followed by non-trocar large-bore drain placement on ROSC.',
      citation: 'ATLS Subcommittee, ACS 10th Ed; ERC Guidelines on Trauma Cardiac Arrest 2021/2024.',
      url: 'https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Perform bilateral finger thoracostomy simultaneously with airway & warmed volume/MTP in traumatic arrest.',
        'Notify Cardiothoracic/Trauma Surgery STAT if initial chest drain output ≥ 1,500 mL OR ongoing output > 200 mL/hr for 2–4 hours.',
        'Prepare Autotransfusion (Cell Saver / Atrium Oasis) if available and massive haemothorax occurs.',
      ],
      stockAndEquipment:
        'Sterile Finger Thoracostomy Packs (No. 10 scalpel, Roberts/Kelly curved clamp), 28–32 Fr chest tubes (NO trocars), underwater seal drains.',
      admissionCriteria:
        'All thoracostomy/massive haemothorax patients require ICU/Trauma HDU or immediate Operating Theatre thoracotomy.',
    },
    algorithms: [
      {
        id: 'finger-thoracostomy-algo',
        topicId: 'finger-thoracostomy',
        title: 'Finger Thoracostomy & Massive Haemothorax Triage',
        shortTitle: 'Finger Thoracostomy',
        presentationTrigger:
          'Tension pneumothorax with shock/arrest, ventilated trauma arrest, or massive pleural blood accumulation',
        colorTag: 'amber',
        estimatedSteps: 3,
        startNodeId: 'ft-1',
        keywords: [
          'finger thoracostomy',
          'tension pneumothorax',
          'massive haemothorax',
          'hemothorax',
          'chest drain',
          'triangle of safety',
          '1500 ml',
        ],
        nodes: {
          'ft-1': {
            id: 'ft-1',
            phase: 'immediate',
            title: 'Bilateral Finger Thoracostomy (Triangle of Safety)',
            prompt:
              'Decompress the pleural space rapidly via blunt dissection at the 4th–5th ICS anterior-to-midaxillary line.',
            actions: [
              'LANDMARK (Triangle of Safety): 4th or 5th intercostal space (nipple line / inframammary crease), just ANTERIOR to the mid-axillary line, posterior to lateral border of pectoralis major.',
              'PREP & INCISION: Chlorhexidine prep (local anaesthetic 1% lidocaine if conscious); 3–4 cm transverse incision parallel to rib.',
              'BLUNT DISSECTION: Advance closed curved Kelly/Roberts forceps onto SUPERIOR border of the lower rib (avoids neurovascular bundle under upper rib); push firmly through intercostal muscle & parietal pleura and spread jaws wide.',
              'FINGER SWEEP: Insert gloved index finger (avoid sharp rib fractures!) 360° inside pleural cavity to confirm lung expansion/adhesions and vent air/blood freely.',
            ],
            contextualPitfall:
              'DO NOT place a chest tube immediately during ongoing CPR/arrest — leaving the thoracostomy stoma open allows instant repeated finger re-sweeps and never kinks!',
            inlineCallRoles: ['cardiothoracic', 'anaesthesia'],
            branches: [
              {
                id: 'b-ft-drain',
                label: 'ROSC / Surviving Patient or Massive Blood Output → Place Drain & Measure',
                tone: 'yes',
                nextNodeId: 'ft-drain',
              },
            ],
          },
          'ft-drain': {
            id: 'ft-drain',
            phase: 'decision',
            title: '28–32 Fr Drain Placement (NO Trocar) & Massive Haemothorax Check',
            prompt:
              'Insert large-bore drain without trocar upon ROSC/ventilation and measure immediate & hourly blood loss.',
            actions: [
              'DRAIN INSERTION: Remove trocar completely! Guide 28–32 Fr chest tube with curved clamp along finger tract posteriorly and superiorly until all side holes are well inside pleural space.',
              'Connect to underwater seal suction (-20 cmH2O), secure with heavy 0/1-0 silk mattress suture + occlusive dressing, and note EXACT time-zero fluid level on chamber.',
              'Give Tranexamic Acid (TXA) 1 g IV over 10 min (if trauma < 3 hours) + activate MTP 1:1:1 if hypotensive.',
            ],
            dosingItems: [
              {
                id: 'ft-txa',
                drugName: 'Tranexamic Acid (TXA — Trauma < 3h)',
                formulaType: 'fixed',
                fixedDoseText: '1,000 mg (1 g) IV over 10 min',
                unit: 'mg',
                route: 'IV infusion',
                rateOrFrequency: 'Followed by 1,000 mg IV over 8 hours',
              },
            ],
            contextualPitfall:
              'DO NOT clamp a massive haemothorax drain to "tamponade" bleeding unless directed by Thoracic Surgery — clamping causes lethal tension haemopneumothorax.',
            branches: [
              {
                id: 'b-ft-massive',
                label: 'MASSIVE HAEMOTHORAX (> 1,500 mL Immediate OR > 200 mL/hr × 2–4h)',
                conditionNote: 'Operative thoracotomy trigger — call Cardiothoracic STAT!',
                tone: 'critical',
                nextNodeId: 'ft-disp',
              },
              {
                id: 'b-ft-stable',
                label: 'Drain Output < 1,500 mL & Haemodynamically Stable',
                tone: 'yes',
                nextNodeId: 'ft-disp',
              },
            ],
          },
          'ft-disp': {
            id: 'ft-disp',
            phase: 'disposition',
            title: 'Surgical Thoracotomy Triage & Post-Drain CXR',
            prompt:
              'Verify tube position on CXR and expedite Operating Theatre if massive haemothorax criteria are met.',
            actions: [
              'IF >1,500 mL initial blood OR >200 mL/hr for 2–4h OR persistent shock despite blood: Activate Cardiothoracic/Trauma Surgery STAT for urgent operative thoracotomy.',
              'Obtain portable AP Chest X-ray to verify drain position, sentinel hole inside rib margin, and lung re-expansion.',
              'Administer single-dose IV antibiotic prophylaxis (e.g., Cefazolin 2 g IV) per trauma protocol if contamination present.',
            ],
            inlineCallRoles: ['cardiothoracic', 'icu'],
            disposition: {
              destination: 'Operating Theatre (if Massive Haemothorax) OR Trauma ICU / HDU',
              urgency: 'STAT Surgical / ICU Evaluation',
              checklist: [
                'Exact initial mL output & hourly trend marked on drain',
                'CXR confirms all drainage holes inside chest wall',
                'Underwater seal oscillating / bubbling documented',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'aortic-dissection',
    title: 'Acute Aortic Dissection (Type A & Complicated Type B)',
    shortTitle: 'Aortic Dissection',
    category: 'cardiovascular',
    defaultContactRoles: ['cardiothoracic', 'icu', 'cardiology'],
    commonPitfalls: [
      'DO NOT start IV vasodilators (Nicardipine, Nitroprusside, GTN) BEFORE beta-blockade — reflex tachycardia increases aortic wall shear stress (dP/dt) and extends the dissection flap!',
      'DO NOT perform aggressive full pericardiocentesis for Type A haemopericardium tamponade — sudden rise in arterial pressure blows out the aortic tear; aspirate max 10–20 mL ONLY if peri-arrest.',
      'DO NOT administer Heparin, Aspirin, P2Y12 inhibitors, or Thrombolytics when aortic dissection is on the differential (e.g., RCA ostial STEMI mimic).',
    ],
    evidence: {
      society: 'ACC / AHA & European Society of Cardiology (ESC)',
      guidelineName: 'Guidelines for the Diagnosis and Management of Aortic Disease',
      year: 2024,
      evidenceLevel: 'Class I · Level B',
      summary:
        'Enforces strict anti-impulse therapy sequence (IV Opioid analgesia → Beta-Blocker to HR <60 bpm FIRST → Vasodilator to SBP 100–120 mmHg SECOND), STAT ECG-gated CTA Aorta, and emergent surgical repair for Stanford Type A.',
      citation: 'Isselbacher EM et al. Circulation 2022; ESC Aortic Diseases Guidelines 2024.',
      url: 'https://www.ahajournals.org/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Call Cardiothoracic Surgery and ICU STAT the moment Stanford Type A dissection is confirmed or strongly suspected.',
        'Place two large-bore IVs, radial arterial line (in the arm with the HIGHER blood pressure), and ECG-gated CTA chest/abdomen/pelvis.',
        'Crossmatch 6 units PRBC STAT and stop/avoid all antiplatelets and anticoagulants.',
      ],
      stockAndEquipment:
        'Esmolol / Labetalol infusions, Nicardipine / GTN infusions, Fentanyl IV, and invasive arterial line kit in Resus Bay.',
      admissionCriteria:
        'Type A: Immediate Operating Theatre → Cardiothoracic ICU. Type B: Cardiac/Vascular ICU (or urgent TEVAR if complicated).',
    },
    algorithms: [
      {
        id: 'aortic-dissection-algo',
        topicId: 'aortic-dissection',
        title: 'Anti-Impulse Sequence & Stanford A/B Triage',
        shortTitle: 'Aortic Dissection',
        presentationTrigger:
          'Sudden tearing chest/back pain, pulse/BP deficit (>20 mmHg), new AR murmur, syncope, or stroke + chest pain',
        colorTag: 'red',
        estimatedSteps: 4,
        startNodeId: 'aad-1',
        keywords: [
          'aortic dissection',
          'type a',
          'type b',
          'esmolol',
          'labetalol',
          'nicardipine',
          'anti-impulse',
          'tamponade',
        ],
        nodes: {
          'aad-1': {
            id: 'aad-1',
            phase: 'immediate',
            title: 'STAT Workup, Bilateral Arm BPs & Opioid Analgesia (T=0)',
            prompt:
              'Relieve pain immediately (stops sympathetic surge), check bilateral BPs, and obtain bedside POCUS + CTA.',
            actions: [
              'ANALGESIA FIRST: Give Fentanyl 25–100 mcg IV (or Morphine 2–5 mg IV) STAT to blunt catecholamine-driven HR/BP spikes.',
              'Measure blood pressure in BOTH arms (use the HIGHER reading arm for arterial line and targets).',
              'Bedside POCUS (without delaying CTA): check aortic root >4 cm, intimal flap, acute aortic regurgitation, or pericardial effusion.',
              'Order STAT ECG-gated CTA Chest/Abdomen/Pelvis + Type & Crossmatch 6 units PRBC (or TOE/TEE if too unstable for CT).',
            ],
            dosingItems: [
              {
                id: 'aad-fentanyl',
                drugName: 'Fentanyl IV (Sympathetic Pain Control)',
                formulaType: 'range_per_kg',
                minDosePerKg: 0.5,
                maxDosePerKg: 1.5,
                maxSingleDose: 100,
                unit: 'mcg',
                concMgPerMl: 50,
                vialStrength: 100,
                vialUnitLabel: '100 mcg/2 mL ampoule',
                concentrationLabel: '50 mcg/mL',
                route: 'IV slow push',
                rateOrFrequency: 'Titrate q5–10min to pain relief (avoid hypotension)',
              },
            ],
            contextualPitfall:
              'DO NOT give thrombolytics or dual antiplatelets for inferior ST-elevation until Type A dissection involving the RCA ostium is excluded!',
            inlineCallRoles: ['cardiothoracic', 'icu'],
            branches: [
              {
                id: 'b-aad-anti',
                label: 'Hypertensive / Normotensive → Start Strict Anti-Impulse Sequence',
                tone: 'critical',
                nextNodeId: 'aad-antiimpulse',
              },
              {
                id: 'b-aad-tamponade',
                label: 'Hypotensive / Shock + Pericardial Effusion → Type A Tamponade Protocol',
                conditionNote: 'Avoid aggressive pericardiocentesis unless peri-arrest!',
                tone: 'critical',
                nextNodeId: 'aad-type-a',
              },
            ],
          },
          'aad-antiimpulse': {
            id: 'aad-antiimpulse',
            phase: 'intervention',
            title: 'Anti-Impulse Therapy: HR < 60 FIRST, SBP 100–120 SECOND',
            prompt:
              'Control heart rate (<60 bpm) BEFORE adding vasodilators to suppress dP/dt aortic wall shear.',
            dosingItems: [
              {
                id: 'aad-esmolol-load',
                drugName: '1st Line: Esmolol Loading Dose (HR Control FIRST)',
                formulaType: 'per_kg',
                dosePerKg: 0.5,
                maxSingleDose: 50,
                unit: 'mg',
                concMgPerMl: 10,
                vialStrength: 100,
                vialUnitLabel: '100 mg/10 mL vial',
                concentrationLabel: '10 mg/mL',
                route: 'IV over 1 min',
                rateOrFrequency: 'Followed by 0.05–0.2 mg/kg/min (50–200 mcg/kg/min) infusion; target HR < 60 bpm',
                clinicalNote: 'Hard-capped at 50 mg single bolus load; ultra-short t1/2 (~9 min) ideal before surgery.',
              },
              {
                id: 'aad-labetalol',
                drugName: 'Alternative: Labetalol IV Bolus (Dual Alpha/Beta)',
                formulaType: 'fixed',
                fixedDoseText: '20 mg IV over 2 min, then 20–80 mg q10min (max 300 mg) or 0.5–2 mg/min',
                unit: 'mg',
                route: 'IV push / infusion',
                rateOrFrequency: 'Target HR < 60 bpm and SBP 100–120 mmHg',
              },
              {
                id: 'aad-nicardipine',
                drugName: '2nd Line (AFTER HR < 60): Nicardipine Infusion',
                formulaType: 'fixed',
                fixedDoseText: 'Start 5 mg/hr IV, titrate by 2.5 mg/hr q5–15min (max 15 mg/hr)',
                unit: 'mg/hr',
                route: 'IV infusion',
                rateOrFrequency: 'Add ONLY after beta-blocker reaches HR < 60 bpm to bring SBP to 100–120 mmHg',
              },
            ],
            contextualPitfall:
              'NEVER start Nicardipine or GTN before beta-blockade — unopposed vasodilator reflex tachycardia increases aortic shear stress!',
            branches: [
              {
                id: 'b-aad-type-a',
                label: 'CTA / TOE Shows Stanford Type A (Involves Ascending Aorta)',
                conditionNote: 'Absolute Surgical Emergency — Operating Theatre STAT!',
                tone: 'critical',
                nextNodeId: 'aad-type-a',
              },
              {
                id: 'b-aad-type-b',
                label: 'CTA Shows Stanford Type B (Distal to Left Subclavian Only)',
                tone: 'neutral',
                nextNodeId: 'aad-type-b',
              },
            ],
          },
          'aad-type-a': {
            id: 'aad-type-a',
            phase: 'intervention',
            title: 'Stanford Type A — Emergent Cardiothoracic Surgery',
            prompt:
              'Immediate transfer to Operating Theatre. Manage tamponade or malperfusion strictly without raising shear stress.',
            actions: [
              'Call Cardiothoracic Surgery & Cardiac Anaesthesia STAT for emergency ascending aortic repair.',
              'IF CARDIAC TAMPONADE + PERI-ARREST / SEVERE SHOCK: Perform POCUS-guided limited pericardiocentesis removing ONLY 10–20 mL just to restore perfusing BP (SBP 70–80 mmHg) en route to OR — DO NOT drain completely!',
              'Hold all anticoagulants/antiplatelets; keep 6 units PRBC crossmatched and follow anti-impulse targets if normo/hypertensive.',
            ],
            inlineCallRoles: ['cardiothoracic', 'anaesthesia', 'icu'],
            branches: [
              {
                id: 'b-aad-a-disp',
                label: 'Confirm OR Handover & Disposition',
                tone: 'yes',
                nextNodeId: 'aad-disp',
              },
            ],
          },
          'aad-type-b': {
            id: 'aad-type-b',
            phase: 'intervention',
            title: 'Stanford Type B — Complicated vs Uncomplicated Triage',
            prompt:
              'Screen immediately for malperfusion, rupture, or refractory pain/hypertension requiring TEVAR.',
            actions: [
              'SCREEN FOR COMPLICATED TYPE B: Visceral/renal/limb/spinal malperfusion, pleural effusion/haemothorax (impending rupture), aortic diameter ≥55 mm, or refractory pain/BP despite maximal IV therapy.',
              'If COMPLICATED: Consult Vascular / Cardiothoracic Surgery STAT for emergency TEVAR (Thoracic Endovascular Aortic Repair).',
              'If UNCOMPLICATED: Continue strict IV anti-impulse therapy (HR <60 bpm, SBP 100–120 mmHg) in ICU and transition to oral agents after 24–48h.',
            ],
            inlineCallRoles: ['cardiothoracic', 'icu', 'interventional_rad'],
            branches: [
              {
                id: 'b-aad-b-disp',
                label: 'Confirm ICU / TEVAR Disposition',
                tone: 'yes',
                nextNodeId: 'aad-disp',
              },
            ],
          },
          'aad-disp': {
            id: 'aad-disp',
            phase: 'disposition',
            title: 'Immediate Theatre / TEVAR or Cardiothoracic ICU',
            prompt:
              'Ensure arterial line monitoring, continuous anti-impulse infusions, and blood products accompany transfer.',
            inlineCallRoles: ['cardiothoracic', 'icu'],
            disposition: {
              destination: 'Operating Theatre (Type A / Complicated Type B TEVAR) OR Cardiothoracic ICU',
              urgency: 'STAT Surgical / Vascular Rescue',
              checklist: [
                'Beta-blocker started prior to vasodilator (HR <60 bpm, SBP 100–120 mmHg)',
                'Higher-BP arm arterial line active',
                '6 units PRBC crossmatched; zero anticoagulants given',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'massive-pe',
    title: 'Massive Pulmonary Embolism (Obstructive Shock)',
    shortTitle: 'Massive PE',
    category: 'cardiovascular',
    defaultContactRoles: ['icu', 'cardiology', 'ecmo_team'],
    commonPitfalls: [
      'DO NOT give aggressive >500 mL crystalloid fluid boluses — RV over-distension shifts the interventricular septum into the LV, collapsing cardiac output and precipitating arrest!',
      'DO NOT delay systemic thrombolysis waiting for CTPA in a peri-arrest patient with bedside POCUS showing severe RV strain / McConnell sign.',
      'DO NOT rush to intubate unless refractory hypoxaemia or cardiac arrest — positive-pressure induction abruptly drops RV preload and triggers immediate arrest.',
    ],
    evidence: {
      society: 'European Society of Cardiology (ESC) / AHA',
      guidelineName: 'Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism',
      year: 2024,
      evidenceLevel: 'Class I · Level B',
      summary:
        'Recommends cautious fluid management (≤250–500 mL), early Norepinephrine for RV coronary perfusion, immediate systemic thrombolysis (Alteplase 100 mg/2h or 50 mg bolus in arrest), and PERT activation for VA-ECMO / embolectomy when thrombolysis fails or is contraindicated.',
      citation: 'Konstantinides SV et al. Eur Heart J 2020; AHA/PERT Massive PE Update 2024.',
      url: 'https://www.escardio.org/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Perform immediate bedside POCUS (parasternal short-axis D-sign, RV > LV, McConnell sign, IVC plethora) + leg compression DVT scan.',
        'Call ICU, Cardiology (PERT), and ECMO Team STAT if SBP <90 mmHg or peri-arrest.',
        'Retrieve Alteplase (100 mg) from Resus/Emergency Pharmacy immediately.',
      ],
      stockAndEquipment:
        'Alteplase (50 mg vials ×2), Norepinephrine infusion, high-flow nasal cannula / NRM, and bedside ultrasound.',
      admissionCriteria:
        'All high-risk / massive PE patients require ICU admission (or Cath Lab / Theatre if catheter-directed or surgical embolectomy).',
    },
    algorithms: [
      {
        id: 'massive-pe-algo',
        topicId: 'massive-pe',
        title: 'High-Risk / Massive PE Resuscitation & Reperfusion',
        shortTitle: 'Massive PE',
        presentationTrigger:
          'Acute obstructive shock (SBP <90 mmHg), syncope, severe hypoxaemia, or PEA arrest with RV strain on POCUS',
        colorTag: 'red',
        estimatedSteps: 3,
        startNodeId: 'mpe-1',
        keywords: [
          'massive pe',
          'pulmonary embolism',
          'alteplase',
          'thrombolysis',
          'pert',
          'ecmo',
          'rv strain',
          'mcconnell',
        ],
        nodes: {
          'mpe-1': {
            id: 'mpe-1',
            phase: 'immediate',
            title: 'RV Protection, Cautious Fluid & Early Norepinephrine',
            prompt:
              'Confirm RV strain on POCUS, avoid RV over-distension, and restore aortic root pressure to perfuse the RV.',
            actions: [
              'OXYGENATION: Apply High-Flow Nasal Oxygen (HFNO) or tight NRM (target SpO2 >90–94%); AVOID intubation if at all possible.',
              'CAUTIOUS FLUIDS: Give max 250–500 mL crystalloid ONLY if clear preload deficit/collapsed IVC (stop immediately if no improvement).',
              'EARLY VASOPRESSOR: Start Norepinephrine infusion STAT (0.05–0.5 mcg/kg/min) to maintain MAP ≥65 mmHg & RV coronary perfusion.',
              'BEDSIDE POCUS: Check RV:LV ratio >1.0, septal flattening (D-sign), McConnell sign, mobile RA/RV thrombus, and proximal DVT.',
            ],
            contextualPitfall:
              'DO NOT flood an already failing right ventricle with 1–2 L of saline — fluid boluses worsen septal bowing into the LV!',
            inlineCallRoles: ['icu', 'cardiology'],
            branches: [
              {
                id: 'b-mpe-lyse',
                label: 'No Absolute Bleeding Contraindication (or Arrest/Peri-Arrest) → Systemic Thrombolysis',
                tone: 'critical',
                nextNodeId: 'mpe-lyse',
              },
              {
                id: 'b-mpe-pert',
                label: 'Absolute Contraindication to Thrombolysis OR Refractory Post-Lysis → PERT / VA-ECMO',
                tone: 'critical',
                nextNodeId: 'mpe-pert',
              },
            ],
          },
          'mpe-lyse': {
            id: 'mpe-lyse',
            phase: 'intervention',
            title: 'Systemic Thrombolysis + Anticoagulation',
            prompt:
              'Administer full-dose or arrest-bolus Alteplase immediately; do NOT delay for CTPA in peri-arrest.',
            dosingItems: [
              {
                id: 'mpe-tpa-inf',
                drugName: 'Alteplase (tPA) — Perfusing Massive PE',
                formulaType: 'fixed',
                fixedDoseText: '100 mg IV over 2 hours (or 10 mg bolus + 90 mg over 2h)',
                unit: 'mg',
                vialStrength: 50,
                vialUnitLabel: '50 mg vial',
                route: 'IV infusion',
                rateOrFrequency: 'Start unfractionated Heparin (80 U/kg bolus + 18 U/kg/hr) once aPTT < 2× ULN',
              },
              {
                id: 'mpe-tpa-arrest',
                drugName: 'Alteplase (tPA) — Cardiac Arrest / Peri-Arrest',
                formulaType: 'fixed',
                fixedDoseText: '50 mg IV rapid bolus (repeat 50 mg in 15 min if still in arrest)',
                unit: 'mg',
                route: 'Rapid IV push',
                rateOrFrequency: 'Continue high-quality CPR for ≥ 60–90 min after bolus in PE arrest!',
              },
            ],
            actions: [
              'If peri-arrest and CTPA not yet obtained: give thrombolysis immediately based on POCUS RV strain + high clinical probability.',
              'Start IV Unfractionated Heparin infusion (allows rapid reversal/titration if bleeding or embolectomy needed).',
            ],
            inlineCallRoles: ['icu', 'cardiology'],
            branches: [
              {
                id: 'b-mpe-lyse-fail',
                label: 'Shock Persists >30–60 min Post-tPA → Activate PERT / VA-ECMO Rescue',
                tone: 'critical',
                nextNodeId: 'mpe-pert',
              },
              {
                id: 'b-mpe-lyse-ok',
                label: 'Haemodynamics Improving → Admit ICU',
                tone: 'yes',
                nextNodeId: 'mpe-disp',
              },
            ],
          },
          'mpe-pert': {
            id: 'mpe-pert',
            phase: 'intervention',
            title: 'PERT Activation: VA-ECMO, Catheter or Surgical Embolectomy',
            prompt:
              'Activate multidisciplinary PERT / ECMO team STAT for mechanical clot extraction or VA-ECMO circulatory bypass.',
            actions: [
              'ACTIVATE ECMO TEAM STAT: VA-ECMO immediately offloads the dilated RV and restores systemic perfusion as bridge to recovery or embolectomy.',
              'INTERVENTIONAL RADIOLOGY / CARDIOLOGY: Urgent mechanical catheter-directed thrombectomy (e.g., FlowTriever / Indigo) if available.',
              'CARDIOTHORACIC SURGERY: Surgical pulmonary embolectomy if clot-in-transit or refractory failure.',
              'Start IV Unfractionated Heparin (unless active intracranial/fatal haemorrhage prohibits all anticoagulation).',
            ],
            inlineCallRoles: ['ecmo_team', 'cardiology', 'interventional_rad', 'cardiothoracic'],
            branches: [
              {
                id: 'b-mpe-pert-disp',
                label: 'Proceed to ICU / Cath Lab / Theatre Disposition',
                tone: 'yes',
                nextNodeId: 'mpe-disp',
              },
            ],
          },
          'mpe-disp': {
            id: 'mpe-disp',
            phase: 'disposition',
            title: 'ICU / PERT Critical Care & Bleeding Surveillance',
            prompt:
              'Monitor continuously for post-thrombolytic haemorrhage, RV recovery, and anticoagulation titration.',
            actions: [
              'Strict neuro-checks every 15–30 min for 24h post-thrombolysis; avoid unnecessary arterial punctures.',
              'If major post-tPA haemorrhage occurs: transition immediately to Anticoagulant/tPA Bleeding Reversal module (Cryoprecipitate + TXA).',
            ],
            inlineCallRoles: ['icu', 'cardiology'],
            disposition: {
              destination: 'Intensive Care Unit (ICU) / Cath Lab / Theatre',
              urgency: 'STAT Critical Care Admission',
              checklist: [
                'Norepinephrine titrated to MAP ≥65 mmHg',
                'Reperfusion therapy (tPA or PERT embolectomy/ECMO) executed',
                'Post-thrombolysis neuro & bleeding surveillance active',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
];
