import { ClinicalTopic } from '../types/clinical';

export const MODULES_GI_ENV_IMM_TOX: ClinicalTopic[] = [
  {
    id: 'variceal-bleed',
    title: 'Catastrophic Variceal Bleed & Balloon Tamponade',
    shortTitle: 'Variceal Bleed',
    category: 'ent',
    defaultContactRoles: ['gi_endoscopy', 'icu', 'haematology', 'anaesthesia'],
    commonPitfalls: [
      'DO NOT over-transfuse PRBCs (target Hb 7–8 g/dL [70–80 g/L]) — over-transfusion increases portal venous pressure and precipitates catastrophic re-bleeding!',
      'DO NOT inflate the Sengstaken-Blakemore gastric balloon with the full 250–300 mL BEFORE confirming sub-diaphragmatic placement with a 50 mL test inflation + STAT CXR/POCUS — oesophageal inflation causes fatal oesophageal rupture.',
      'DO NOT forget an NG tube above the oesophageal balloon when using a standard 3-lumen Sengstaken-Blakemore tube (it lacks an oesophageal aspiration port, unlike a 4-lumen Minnesota tube) — prevents fatal aspiration.',
    ],
    evidence: {
      society: 'Baveno VII Consensus / BSG / AASLD',
      guidelineName: 'Portal Hypertension & Acute Variceal Haemorrhage Emergency Management',
      year: 2024,
      evidenceLevel: 'Grade 1A · Strong Recommendation',
      summary:
        'Mandates restrictive PRBC transfusion (Hb 7–8 g/dL), immediate vasoactive splanchnic therapy (Terlipressin or Octreotide), IV Ceftriaxone 1 g, Erythromycin pre-endoscopy, airway protection for massive haematemesis, and rescue balloon tamponade / SEMS bridge to urgent endoscopy or TIPS.',
      citation: 'de Franchis R et al. J Hepatol (Baveno VII) 2022; BSG Variceal Haemorrhage Update 2024.',
      url: 'https://www.bsg.org.uk/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Call GI Endoscopy / Hepatology On-Call and ICU STAT while activating Massive Transfusion Protocol (restrictive target Hb 7–8 g/dL).',
        'Give vasoactive agent + IV Ceftriaxone 1 g at T=0 before endoscopy.',
        'Pull Sengstaken-Blakemore / Minnesota tube + 500 mL saline traction setup + manometer from Resus GI Cart early if shock persists.',
      ],
      stockAndEquipment:
        'Sengstaken-Blakemore (3-lumen) or Minnesota (4-lumen) tube (kept chilled/firm in fridge), 50 mL catheter-tip syringes, Kelly padded clamps, pressure manometer, 500 g traction weight, dual Yankauer suction.',
      admissionCriteria:
        '100% ICU admission post-endoscopy / tamponade; early TIPS evaluation (<72h) for Child-Pugh B/C active bleed.',
    },
    algorithms: [
      {
        id: 'variceal-bleed-algo',
        topicId: 'variceal-bleed',
        title: 'Catastrophic Variceal Bleed & Sengstaken-Blakemore Rescue',
        shortTitle: 'Variceal Bleed',
        presentationTrigger:
          'Massive haematemesis, cirrhosis / known portal hypertension with haemorrhagic shock',
        colorTag: 'red',
        estimatedSteps: 4,
        startNodeId: 'var-1',
        keywords: [
          'variceal bleed',
          'sengstaken',
          'blakemore',
          'minnesota tube',
          'terlipressin',
          'octreotide',
          'tips',
          'haematemesis',
        ],
        nodes: {
          'var-1': {
            id: 'var-1',
            phase: 'immediate',
            title: 'Resuscitation, Vasoactives & Antibiotics (T=0)',
            prompt:
              'Start splanchnic vasoconstrictor + IV Ceftriaxone immediately and transfuse restrictively to Hb 7–8 g/dL.',
            dosingItems: [
              {
                id: 'var-octreotide',
                drugName: 'Octreotide (Preferred if Severe CAD / Ischaemic Heart Disease)',
                formulaType: 'fixed',
                fixedDoseText: '50 mcg IV bolus, then 50 mcg/hr IV infusion',
                unit: 'mcg',
                route: 'IV bolus + infusion',
                rateOrFrequency: 'Continue for 2–5 days',
                clinicalNote:
                  'Choose Octreotide OVER Terlipressin if patient has severe coronary/ischaemic heart disease, peripheral vascular disease, or arrhythmias.',
              },
              {
                id: 'var-terlipressin',
                drugName: 'OR Terlipressin (If No Severe IHD/CAD)',
                formulaType: 'fixed',
                fixedDoseText: '2 mg IV slow bolus q4h (reduce to 1 mg q4h once bleed controlled)',
                unit: 'mg',
                route: 'IV push',
                rateOrFrequency: 'Check ECG/ischaemia history & serum Na+ closely',
              },
              {
                id: 'var-ceftriaxone',
                drugName: 'Ceftriaxone (SBP & Mortality Reduction)',
                formulaType: 'fixed',
                fixedDoseText: '1,000 mg (1 g) IV once daily',
                unit: 'mg',
                route: 'IV infusion',
                rateOrFrequency: 'Give STAT at T=0 (7-day course)',
              },
              {
                id: 'var-erythromycin',
                drugName: 'Erythromycin (Pre-Endoscopy Prokinetic)',
                formulaType: 'fixed',
                fixedDoseText: '250 mg IV over 20–30 min (30–120 min before OGD)',
                unit: 'mg',
                route: 'IV infusion',
                rateOrFrequency: 'Clears gastric blood clot for endoscopic visualization',
              },
            ],
            actions: [
              'Place 2 large-bore IVs; transfuse PRBCs restrictively to target Hb 7–8 g/dL (70–80 g/L) — avoid over-transfusion.',
              'Correct platelets <50 × 10^9/L and fibrinogen <1.0–1.5 g/L during active massive bleeding (note INR is unreliable in cirrhosis; avoid routine FFP overload).',
              'Call GI Endoscopy STAT for emergency band ligation (OGD within 12h, or immediately if unstable).',
            ],
            contextualPitfall:
              'Flag Octreotide over Terlipressin in patients with severe coronary/ischaemic heart disease. Avoid routine TXA in chronic liver variceal bleeding (HALT-IT showed increased VTE without mortality benefit).',
            inlineCallRoles: ['gi_endoscopy', 'icu', 'haematology'],
            branches: [
              {
                id: 'b-var-intubate',
                label: 'Exsanguinating Haematemesis / Shock / Encephalopathy → Intubate & Tamponade',
                conditionNote: 'Protect airway BEFORE placing balloon tamponade!',
                tone: 'critical',
                nextNodeId: 'var-intubate',
              },
              {
                id: 'b-var-ogd-stable',
                label: 'Haemodynamics Stabilized on Vasoactives → Urgent Endoscopy (OGD)',
                tone: 'yes',
                nextNodeId: 'var-disp',
              },
            ],
          },
          'var-intubate': {
            id: 'var-intubate',
            phase: 'intervention',
            title: 'Airway Protection (Massive Haemorrhage RSI)',
            prompt:
              'Secure cuffed ETT BEFORE attempting balloon tamponade — balloon placement in an unprotected airway causes fatal aspiration.',
            actions: [
              'Have 2 wide-bore Yankauer suction catheters running at maximum vacuum + videolaryngoscope ready.',
              'Pre-resuscitate with blood/vasopressors (Norepinephrine/push-dose Epinephrine) before induction; consider Ketamine + Rocuronium.',
              'Keep head slightly elevated (20–30°) or prepare SALAD (Suction Assisted Laryngoscopy Airway Decontamination) if flooding.',
            ],
            inlineCallRoles: ['anaesthesia', 'gi_endoscopy'],
            branches: [
              {
                id: 'b-var-to-balloon',
                label: 'Airway Secured & Bleeding Uncontrolled → Insert Sengstaken-Blakemore / Minnesota Tube',
                tone: 'critical',
                nextNodeId: 'var-balloon',
              },
            ],
          },
          'var-balloon': {
            id: 'var-balloon',
            phase: 'intervention',
            title: 'Balloon Tamponade Protocol (Sengstaken-Blakemore / Minnesota)',
            prompt:
              'Bridge to urgent OGD or TIPS: verify sub-diaphragmatic gastric balloon placement before full inflation.',
            actions: [
              '1. CHECK EQUIPMENT: Test both balloons underwater before insertion; confirm whether tube is a 3-lumen Sengstaken-Blakemore (lacks oesophageal suction) or 4-lumen Minnesota tube.',
              '2. INSERT TO 50 cm: Lubricate generously and pass orally (preferred) or nasally to ≥50 cm mark; aspirate gastric port.',
              '3. 50 mL TEST + STAT CXR/POCUS: Inflate GASTRIC balloon with 50 mL air, clamp, and obtain STAT portable CXR (or POCUS) to confirm balloon sits BELOW diaphragm in stomach!',
              '4. FULL GASTRIC INFLATION + TRACTION: Add remaining 200–250 mL air (total 250–300 mL; double-clamp port with padded Kelly clamps). Pull tube gently until resistance at GE junction (~35–45 cm at teeth) and hang 500 g traction (e.g., 500 mL saline bag over IV pole pulley).',
              '5. OESOPHAGEAL ASPIRATION PORT CHECK: Standard 3-lumen Sengstaken-Blakemore lacks an oesophageal aspiration port — INSERT AN NG TUBE above the oesophageal balloon to continuously suction secretions and prevent aspiration (not needed if using a 4-lumen Minnesota tube).',
              '6. OESOPHAGEAL BALLOON (ONLY IF BLEEDING CONTINUES): Inflate to 30–40 mmHg via manometer (NEVER exceed 45 mmHg; deflate for 5 min every 6–12h; max total tamponade 24h).',
            ],
            contextualPitfall:
              'DO NOT inflate 250–300 mL until 50 mL X-ray/POCUS confirms gastric position — oesophageal rupture carries >50% mortality!',
            inlineCallRoles: ['gi_endoscopy', 'icu', 'interventional_rad'],
            branches: [
              {
                id: 'b-var-disp',
                label: 'Tamponade Secured → Transfer to Endoscopy / IR TIPS / ICU',
                tone: 'yes',
                nextNodeId: 'var-disp',
              },
            ],
          },
          'var-disp': {
            id: 'var-disp',
            phase: 'disposition',
            title: 'Emergent Endoscopy (EVL), Rescue TIPS & ICU',
            prompt:
              'Proceed to emergency endoscopic variceal band ligation or rescue TIPS (IR) within 12–24 hours.',
            actions: [
              'Balloon tamponade (or self-expanding metal oesophageal stent / Danis stent) is strictly a temporary <24h bridge.',
              'Alert Interventional Radiology early for rescue TIPS if re-bleeding occurs or Child-Pugh B/C high-risk varices.',
            ],
            inlineCallRoles: ['gi_endoscopy', 'icu', 'interventional_rad'],
            disposition: {
              destination: 'Endoscopy Suite / IR TIPS → ICU',
              urgency: 'STAT GI / Critical Care Intervention',
              checklist: [
                'Vasoactive (Octreotide/Terlipressin) & Ceftriaxone 1 g IV running',
                'Hb target 7–8 g/dL (avoid portal pressure rebound)',
                'If 3-lumen Sengstaken used: supra-oesophageal NG suction active & traction/pressure logged',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'accidental-hypothermia',
    title: 'Severe Accidental Hypothermia (<28°C) & Hypothermic Arrest',
    shortTitle: 'Accidental Hypothermia',
    category: 'endocrine',
    defaultContactRoles: ['icu', 'ecmo_team', 'anaesthesia'],
    commonPitfalls: [
      'DO NOT declare death in hypothermia ("not dead until warm and dead") unless there is obvious lethal injury, completely frozen/incompressible chest wall, or serum K+ > 12 mmol/L (avalanche/asphyxia).',
      'DO NOT deliver > 3 defibrillation shocks OR give IV Adrenaline/Amiodarone when core temperature is < 30°C — drugs accumulate in hypothermic tissues and cause toxicity upon rewarming.',
      'DO NOT handle the patient roughly or stand them upright — sudden cold venous return causes afterdrop and immediate VF cardiac arrest.',
    ],
    evidence: {
      society: 'European Resuscitation Council (ERC) / Wilderness Medical Society (WMS)',
      guidelineName: 'Accidental Hypothermia & ECLS Rewarming Guidelines',
      year: 2024,
      evidenceLevel: 'Class I · International Resuscitation Standard',
      summary:
        'Mandates low-reading oesophageal/bladder thermistor, 60-second pulse/breathing check, gentle horizontal handling, max 3 shocks + withheld IV drugs <30°C, 2× Adrenaline dosing intervals between 30–34.9°C, and urgent VA-ECMO/CPB rewarming for HT III–IV arrest.',
      citation: 'Lott C et al. Resuscitation (ERC Special Circumstances) 2021; Pasquier M / HOPE Score Update 2024.',
      url: 'https://www.erc.edu/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Obtain accurate core temperature immediately using a low-reading oesophageal probe (distal third) or bladder/epitympanic thermistor.',
        'Activate ECMO Team & Cardiothoracic/ICU STAT for ANY hypothermic arrest (HT IV) or unstable HT III (<28°C).',
        'Use gentle horizontal extrication, strip wet clothes with scissors, insulate head/body, and start warmed (40–42°C) IV fluids & humidified O2.',
      ],
      stockAndEquipment:
        'Low-reading oesophageal temperature probe (<25°C capable), forced-air warming blanket (Bair Hugger), Level-1/fluid warmer (42°C), and pleural/peritoneal lavage sets if ECMO delayed.',
      admissionCriteria:
        'HT IV / HT III unstable: Direct VA-ECMO / CPB centre transfer. HT II–III stable: ICU active core & external rewarming.',
    },
    algorithms: [
      {
        id: 'accidental-hypothermia-algo',
        topicId: 'accidental-hypothermia',
        title: 'Swiss Staging, Hypothermic Arrest Guard & ECLS Triage',
        shortTitle: 'Accidental Hypothermia',
        presentationTrigger:
          'Exposure/immersion hypothermia (<32°C or <28°C), sluggish bradycardia, rigidity, or apparent cardiac arrest',
        colorTag: 'blue',
        estimatedSteps: 3,
        startNodeId: 'hypo-1',
        keywords: [
          'hypothermia',
          'swiss staging',
          'afterdrop',
          'hope score',
          'ecmo',
          'rewarming',
          '30 degrees',
          'shocks',
        ],
        nodes: {
          'hypo-1': {
            id: 'hypo-1',
            phase: 'decision',
            title: 'Core Temperature, Swiss Staging & 60-Second Life Check',
            prompt:
              'Handle strictly horizontally, check pulse + breathing for a FULL 60 seconds (with POCUS if available), and measure core temp.',
            actions: [
              'CORE TEMP: Place low-reading oesophageal probe (distal 1/3; wait if intubation pending, use epitympanic thermistor or bladder/rectal probe as interim). Standard oral/tympanic IR thermometers fail <34°C!',
              '60-SECOND CHECK: Palpate carotid + check ECG + bedside POCUS for up to 60 FULL SECONDS — severe bradycardia (e.g., 10–15/min) and faint respirations can sustain life at <28°C.',
              'SWISS STAGING: HT I (35–32°C, conscious/shivering) · HT II (32–28°C, impaired consciousness/no shivering) · HT III (<28°C, unconscious, vital signs present) · HT IV (<24–28°C, no vital signs/arrest).',
              'REMOVE WET CLOTHING by cutting (keep horizontal!), wrap in vapour-barrier + blankets, and start warmed 40–42°C isotonic crystalloids.',
            ],
            contextualPitfall:
              'DO NOT start chest compressions if a perfusing rhythm or cardiac contraction is seen on POCUS/ECG (bradycardia at 12 bpm is physiological at 26°C — compressions may trigger VF!).',
            inlineCallRoles: ['icu', 'ecmo_team'],
            branches: [
              {
                id: 'b-hypo-arrest',
                label: 'HT IV — Confirmed Cardiac Arrest (No Vital Signs / Asystole / VF)',
                conditionNote: 'Triggers <30°C Shock & Drug Interval Guard + VA-ECMO Activation!',
                tone: 'critical',
                nextNodeId: 'hypo-arrest',
              },
              {
                id: 'b-hypo-perfusing',
                label: 'HT II / HT III — Perfusing Rhythm Present (Vital Signs Intact)',
                tone: 'yes',
                nextNodeId: 'hypo-perfusing',
              },
            ],
          },
          'hypo-arrest': {
            id: 'hypo-arrest',
            phase: 'intervention',
            title: 'Hypothermic Cardiac Arrest — Shock & Drug Guard + VA-ECMO',
            prompt:
              'Continuous CPR (mechanical CPR device ideal for transfer) while strictly enforcing <30°C shock/drug holds and activating VA-ECMO.',
            timerConfig: {
              id: 'hypo-arrest-guard',
              label: 'Hypothermic Arrest Shock & Drug Guard',
              durationSec: 480,
              kind: 'hypothermia_guard',
              autoStart: false,
              alertText:
                'Below 30°C: max 3 shocks, withhold IV drugs. 30–34.9°C: double Adrenaline interval (q6–10 min).',
            },
            actions: [
              'ACTIVATE VA-ECMO / CPB STAT: ECLS is gold standard for HT IV arrest (even after hours of CPR!). Calculate HOPE score (age, sex, mechanism, CPR duration, core temp, K+); check arterial/venous K+ immediately (K+ >12 mmol/L suggests asphyxial irreversibility).',
              'TEMP < 30°C: Deliver MAX 3 defibrillation shocks for VF/pVT, then pause shocks until core temp ≥ 30°C. WITHHOLD IV Adrenaline & Amiodarone until ≥ 30°C.',
              'TEMP 30–34.9°C: Resume standard defibrillation and give IV Adrenaline 1 mg at DOUBLE intervals (every 6–10 minutes) until core temp ≥ 35°C.',
              'AIRWAY & BREATHING: Intubate gently (normoventilate based on uncorrected alpha-stat ABG) and ventilate with heated humidified O2 (40–42°C). If ECMO unavailable/delayed >60 min, initiate active internal rewarming (warmed bilateral pleural/peritoneal lavage + bladder lavage).',
            ],
            contextualPitfall:
              'DO NOT terminate CPR in hypothermic arrest before core temp reaches ≥ 32–35°C unless K+ > 12 mmol/L or obvious lethal trauma!',
            inlineCallRoles: ['ecmo_team', 'icu', 'anaesthesia'],
            branches: [
              {
                id: 'b-hypo-arrest-disp',
                label: 'Proceed to ECLS Rewarming & ICU Disposition',
                tone: 'yes',
                nextNodeId: 'hypo-disp',
              },
            ],
          },
          'hypo-perfusing': {
            id: 'hypo-perfusing',
            phase: 'intervention',
            title: 'HT II / HT III — Active External & Minimally Invasive Core Rewarming',
            prompt:
              'Rewarm trunk first to minimize afterdrop; escalate to VA-ECMO if HT III (<28°C) becomes unstable.',
            actions: [
              'TRUNK-FIRST FORCED-AIR WARMING: Apply forced-air warming blanket (40–43°C) to trunk/axillae/groin (leave extremities insulated until trunk warms to avoid cold peripheral vasodilation afterdrop).',
              'WARMED IV FLUIDS + O2: Infuse 40–42°C crystalloids cautiously + heated humidified O2.',
              'WATCH FOR REWARMING SHOCK / ARRHYTHMIA: Treat severe hypotension with low-dose Norepinephrine; atrial fibrillation / Osborne J-waves usually resolve spontaneously with rewarming (avoid antiarrhythmics).',
              'HT III (<28°C) OR CO-MORBID CARDIAC INSTABILITY: Alert VA-ECMO / ICU team early on standby in case of peri-arrest collapse.',
            ],
            inlineCallRoles: ['icu', 'ecmo_team'],
            branches: [
              {
                id: 'b-hypo-perf-disp',
                label: 'Rewarming Underway → ICU Disposition',
                tone: 'yes',
                nextNodeId: 'hypo-disp',
              },
            ],
          },
          'hypo-disp': {
            id: 'hypo-disp',
            phase: 'disposition',
            title: 'VA-ECMO / CPB Rewarming or ICU Critical Care',
            prompt:
              'Rewarm at ~2–5°C/hr on ECLS (avoid hyperthermia >36–37°C!) and monitor for post-rewarming rhabdomyolysis/oedema.',
            actions: [
              'Target gradual rewarming to 36.0°C (avoid hyperthermia after ROSC; maintain targeted temperature management 32–36°C if post-arrest encephalopathy).',
              'Screen for hypoglycaemia, hyperkalaemia during rewarming, DIC, rhabdomyolysis, and frostbite injuries.',
            ],
            inlineCallRoles: ['ecmo_team', 'icu'],
            disposition: {
              destination: 'VA-ECMO / CPB Suite → ICU',
              urgency: 'STAT Critical Care / ECLS Rewarming',
              checklist: [
                'Continuous oesophageal core temp probe active',
                'Serum K+ & HOPE score documented if arrest',
                'Warming target ≤ 36.0–37.0°C (avoid rebound hyperthermia)',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'refractory-anaphylaxis',
    title: 'Refractory Anaphylaxis (Adrenaline-Resistant)',
    shortTitle: 'Refractory Anaphylaxis',
    category: 'immunology_resus',
    defaultContactRoles: ['icu', 'anaesthesia'],
    commonPitfalls: [
      'DO NOT give IV Adrenaline undiluted (1:1,000) or as rapid full-mg IV boluses in a perfusing patient — precipitates fatal VF, myocardial infarction, and cerebral haemorrhage!',
      'DO NOT sit a hypotensive anaphylaxis patient upright — causes "empty ventricle syndrome" and sudden PEA cardiac arrest.',
      'DO NOT rely on Antihistamines (Chlorphenamine) or Corticosteroids (Hydrocortisone) to treat acute airway oedema or shock — they are strictly secondary/delayed.',
    ],
    evidence: {
      society: 'Resuscitation Council UK (RCUK) / ASCIA',
      guidelineName: 'Emergency Treatment of Anaphylaxis & Refractory Anaphylaxis Algorithm',
      year: 2024,
      evidenceLevel: 'Strong Recommendation · Resuscitation Standard',
      summary:
        'Defines Refractory Anaphylaxis as persistent ABC compromise after 2 doses of IM Adrenaline 0.5 mg, mandating immediate transition to Low-Dose IV Adrenaline Infusion (1 mg in 100 mL NS at 0.5–1.0 mL/kg/hr), rapid crystalloid boluses, Glucagon for beta-blocked patients, and early airway support.',
      citation: 'Resuscitation Council UK Anaphylaxis Guidelines 2021; ASCIA Acute Management Update 2024.',
      url: 'https://www.resus.org.uk/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Call ICU and Anaesthesia STAT as soon as a 2nd IM Adrenaline dose fails to reverse shock or stridor.',
        'Mix Low-Dose IV Adrenaline Infusion immediately: 1 mg (1 mL of 1:1,000) in 100 mL Normal Saline = 10 mcg/mL.',
        'Place 2 large-bore IVs for rapid 20 mL/kg crystalloid boluses and monitor continuous ECG + NIBP q1–2min.',
      ],
      stockAndEquipment:
        'Adrenaline 1:1,000 ampoules, 100 mL 0.9% NaCl minibags, Glucagon 1 mg vials, Norepinephrine, Vasopressin, videolaryngoscope + 6.0/6.5 ETTs.',
      admissionCriteria:
        'All Refractory Anaphylaxis / IV Adrenaline infusion cases require ICU/HDU admission for ≥12–24h observation.',
    },
    algorithms: [
      {
        id: 'refractory-anaphylaxis-algo',
        topicId: 'refractory-anaphylaxis',
        title: 'Refractory Anaphylaxis — Low-Dose IV Adrenaline & Rescue',
        shortTitle: 'Refractory Anaphylaxis',
        presentationTrigger:
          'Persistent anaphylactic shock, severe bronchospasm, or airway oedema after ≥ 2 doses of IM Adrenaline',
        colorTag: 'red',
        isDirectHomeShortcut: true,
        estimatedSteps: 4,
        startNodeId: 'ana-1',
        keywords: [
          'anaphylaxis',
          'refractory anaphylaxis',
          'adrenaline infusion',
          'epinephrine',
          'glucagon',
          'beta blocker',
          'kounis',
          'empty ventricle',
        ],
        nodes: {
          'ana-1': {
            id: 'ana-1',
            phase: 'immediate',
            title: 'Trigger Removal, Posture, 2nd IM Adrenaline & Crystalloid',
            prompt:
              'Stop suspected allergen/infusion, lay flat with legs elevated, give 2nd IM Adrenaline + 20 mL/kg fluid while mixing IV infusion.',
            dosingItems: [
              {
                id: 'ana-im-adren',
                drugName: 'Adrenaline (Epinephrine) 1:1,000 IM (Anterolateral Thigh)',
                formulaType: 'fixed',
                fixedDoseText: '0.5 mg (0.5 mL of 1:1,000) IM — repeat after 5 min if no response',
                unit: 'mg',
                route: 'IM anterolateral thigh',
                rateOrFrequency: 'Max 2 IM doses before starting IV infusion',
              },
              {
                id: 'ana-fluid',
                drugName: 'Rapid Crystalloid Bolus (0.9% NaCl or Balanced)',
                formulaType: 'per_kg',
                dosePerKg: 20,
                maxSingleDose: 2000,
                unit: 'mL',
                route: 'Wide-open IV push / pressure bag',
                rateOrFrequency: 'May need 2–4 L total due to massive capillary leak',
              },
            ],
            actions: [
              'STOP trigger immediately (e.g., IV antibiotic, contrast, blood product, colloids — leave cannula in place!).',
              'POSTURE: Lie flat with legs raised (or recovery position if vomiting/airway risk; NEVER sit upright).',
              'Apply 15 L/min 100% O2 via NRM and call ICU + Anaesthesia STAT if not rapidly improving after 2nd IM dose.',
            ],
            contextualPitfall:
              'DO NOT sit a hypotensive anaphylactic patient upright to "help them breathe" — sudden loss of venous return causes empty-ventricle cardiac arrest!',
            inlineCallRoles: ['icu', 'anaesthesia'],
            branches: [
              {
                id: 'b-ana-infusion',
                label: 'Refractory After 2 IM Doses → Start Low-Dose IV Adrenaline Infusion',
                conditionNote: 'RCUK Refractory Anaphylaxis trigger!',
                tone: 'critical',
                nextNodeId: 'ana-infusion',
              },
              {
                id: 'b-ana-resolved',
                label: 'Resolved Completely After 2nd IM Dose + Fluid',
                tone: 'yes',
                nextNodeId: 'ana-disp',
              },
            ],
          },
          'ana-infusion': {
            id: 'ana-infusion',
            phase: 'intervention',
            title: 'Low-Dose IV Adrenaline Infusion (Dual Rate mL/hr & mcg/min)',
            prompt:
              'Prepare standardized 10 mcg/mL bag (1 mg in 100 mL NS) and run via dedicated pump with continuous ECG.',
            dosingItems: [
              {
                id: 'ana-iv-adren-inf',
                drugName: 'Low-Dose IV Adrenaline Infusion (1 mg in 100 mL NS = 10 mcg/mL)',
                formulaType: 'range_per_kg',
                minDosePerKg: 0.5,
                maxDosePerKg: 1.0,
                maxSingleDose: 100,
                unit: 'mL/hr',
                dualRateAdrenaline: true,
                concentrationLabel: '1 mg (1 mL of 1:1,000) in 100 mL 0.9% NaCl = 10 mcg/mL',
                route: 'Dedicated IV infusion pump (peripheral or central)',
                rateOrFrequency: 'Titrate q2–3min to MAP ≥65 mmHg / relief of bronchospasm & stridor',
                clinicalNote:
                  'Continue IM Adrenaline q5min ONLY while mixing/priming pump. Never bolus undiluted 1:1,000 IV!',
              },
            ],
            actions: [
              'If severe stridor, tongue/uvular swelling, or failing oxygenation: call Anaesthesia STAT for early awake/videolaryngoscopy intubation (have smaller ETT 6.0/6.5 + CICO kit ready).',
              'Repeat rapid crystalloid boluses (up to 50–60 mL/kg) if hypovolaemic shock persists.',
            ],
            contextualPitfall:
              'Verify pump concentration is 10 mcg/mL (1 mg in 100 mL) — confusing 10 mcg/mL with standard 100 mcg/mL ICU bags causes a 10× overdose!',
            inlineCallRoles: ['icu', 'anaesthesia'],
            branches: [
              {
                id: 'b-ana-adjuncts',
                label: 'On Beta-Blockers, Persistent Vasoplegia, or Severe Bronchospasm → Second-Line Adjuncts',
                tone: 'critical',
                nextNodeId: 'ana-adjuncts',
              },
              {
                id: 'b-ana-inf-ok',
                label: 'Haemodynamics Stabilized on IV Adrenaline → ICU Admission',
                tone: 'yes',
                nextNodeId: 'ana-disp',
              },
            ],
          },
          'ana-adjuncts': {
            id: 'ana-adjuncts',
            phase: 'intervention',
            title: 'Beta-Blocker Glucagon Rescue, Second Pressors & Kounis Screen',
            prompt:
              'Bypass beta-blockade with IV Glucagon, add Norepinephrine/Vasopressin for vasoplegia, and check ECG for Kounis syndrome.',
            dosingItems: [
              {
                id: 'ana-glucagon',
                drugName: 'Glucagon (If Patient Takes Beta-Blockers)',
                formulaType: 'fixed',
                fixedDoseText: '1–2 mg IV slow push q5min until response, then 1–5 mg/hr infusion',
                unit: 'mg',
                route: 'IV over 5 min',
                rateOrFrequency: 'Bypasses blocked beta-receptors via direct cAMP activation (expect vomiting!)',
              },
              {
                id: 'ana-norepi',
                drugName: 'Norepinephrine OR Vasopressin (Refractory Vasoplegia)',
                formulaType: 'fixed',
                fixedDoseText: 'Norepinephrine 0.05–0.5 mcg/kg/min OR Vasopressin 0.03–0.04 U/min IV',
                unit: 'mcg/kg/min',
                route: 'IV infusion',
                rateOrFrequency: 'Run alongside Adrenaline infusion if SBP remains <90 mmHg',
              },
            ],
            actions: [
              'BRONCHOSPASM: Give nebulized Salbutamol 5 mg + Ipratropium 500 mcg (or nebulized Adrenaline 5 mg for upper airway stridor).',
              'KOUNIS SYNDROME CHECK: Obtain 12-lead ECG if chest pain or arrhythmias occur (allergic coronary vasospasm/plaque rupture — treat carefully with cardiology).',
              'SECONDARY MEDS (only after ABCs): Hydrocortisone 200 mg IV (if refractory wheeze/biphasic risk) + Chlorphenamine 10 mg IV / Cetirizine 10 mg PO (urticaria only).',
            ],
            inlineCallRoles: ['icu', 'anaesthesia'],
            branches: [
              {
                id: 'b-ana-adj-disp',
                label: 'Proceed to ICU Admission & Tryptase Sampling',
                tone: 'yes',
                nextNodeId: 'ana-disp',
              },
            ],
          },
          'ana-disp': {
            id: 'ana-disp',
            phase: 'disposition',
            title: 'ICU Monitoring, Mast Cell Tryptase & Allergy Plan',
            prompt:
              'Admit for continuous weaning of IV Adrenaline, draw timed tryptase levels, and prescribe self-injectable adrenaline.',
            actions: [
              'Draw Serum Mast Cell Tryptase as soon as resuscitation allows (ideal 1–2h post-onset, repeat at ≥24h baseline).',
              'Observe in ICU/HDU for ≥12–24 hours after stopping IV adrenaline (refractory cases carry high biphasic reaction risk).',
            ],
            inlineCallRoles: ['icu'],
            disposition: {
              destination: 'Intensive Care Unit (ICU) / HDU',
              urgency: 'STAT Critical Care Admission',
              checklist: [
                'IV Adrenaline concentration (10 mcg/mL) & pump rate verified',
                'Mast cell tryptase sample drawn (time logged)',
                'Allergen culprit flagged in chart + discharge EpiPen/Allergy referral planned',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'toxic-alcohols',
    title: 'Toxic Alcohols (Methanol & Ethylene Glycol)',
    shortTitle: 'Toxic Alcohols',
    category: 'toxicology',
    defaultContactRoles: ['toxicology', 'icu'],
    commonPitfalls: [
      'DO NOT wait for serum Methanol/Ethylene Glycol levels (often send-out) before starting ADH blockade — treat immediately for unexplained Osmolar Gap > 10 mOsm/kg or HAGMA!',
      'DO NOT miss the Dialysis Clearance Trap: both Fomepizole and Ethanol are rapidly cleared by haemodialysis — increase Fomepizole dosing to q4h (or double Ethanol infusion rate) DURING haemodialysis!',
      'DO NOT confuse Ethylene Glycol’s false-positive "Lactate Gap" on point-of-care blood gas analyzers (glycolate cross-reacts with L-lactate oxidase) with true sepsis/hypoperfusion.',
    ],
    evidence: {
      society: 'TOXBASE / AACT / EXTRIP Workgroup',
      guidelineName: 'Management of Methanol & Ethylene Glycol Poisoning',
      year: 2024,
      evidenceLevel: 'Strong Recommendation · Extracorporeal Consensus',
      summary:
        'Mandates early Osmolar Gap (SI) + anion gap assessment, immediate ADH inhibition (Fomepizole preferred over Ethanol), metabolic cofactors (Folinic acid for Methanol; Thiamine + Pyridoxine for Ethylene Glycol), NaHCO3 for severe acidaemia, and urgent haemodialysis with intra-dialytic antidote adjustment.',
      citation: 'Roberts DM et al. (EXTRIP) Kidney Int 2015; Ghannoum M et al. Crit Care 2023; TOXBASE 2024.',
      url: 'https://www.toxbase.org/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Calculate SI Osmolar Gap immediately alongside VBG/ABG, electrolytes, serum glucose, urea, and ethanol level.',
        'Call Toxicology / Poison Control and Nephrology / ICU STAT if Osmolar Gap >10, pH <7.25, visual symptoms, or AKI.',
        'Verify local stock of Fomepizole vs 10% IV Ethanol (switchable in HALO Admin Hub) and initiate ADH blockade without delay.',
      ],
      stockAndEquipment:
        'Fomepizole 1.5 g/1.5 mL vials (or 10% IV Ethanol in D5W), Folinic acid (Leucovorin), Thiamine, Pyridoxine, 8.4% NaHCO3.',
      admissionCriteria:
        'ICU admission for all symptomatic/acidotic toxic alcohol exposures or haemodialysis candidates.',
    },
    algorithms: [
      {
        id: 'toxic-alcohols-algo',
        topicId: 'toxic-alcohols',
        title: 'Toxic Alcohol Osmolar Gap, ADH Blockade & Dialysis',
        shortTitle: 'Toxic Alcohols',
        presentationTrigger:
          'Unexplained high anion gap metabolic acidosis (HAGMA), high osmolar gap, visual snow/blindness (Methanol), or AKI/flank pain (Ethylene Glycol)',
        colorTag: 'amber',
        estimatedSteps: 3,
        startNodeId: 'alc-1',
        keywords: [
          'toxic alcohol',
          'methanol',
          'ethylene glycol',
          'osmolar gap',
          'fomepizole',
          'ethanol',
          'folinic acid',
          'haemodialysis',
        ],
        nodes: {
          'alc-1': {
            id: 'alc-1',
            phase: 'decision',
            title: 'SI Osmolar Gap Calculator & Toxidrome Screening',
            prompt:
              'Calculate Osmolar Gap in SI units (mmol/L) immediately. Remember a normal Osmolar Gap does NOT exclude late presentation after metabolism!',
            calculatorId: 'osmolar_gap',
            actions: [
              'DRAW STAT LABS: Measured serum osmolality (freezing-point depression), Na+, K+, Cl-, HCO3-, Urea, Glucose, Serum Ethanol, VBG/ABG, lactate, creatinine, and visual acuity / fundoscopy.',
              'METHANOL CLUES: "Snowfield" blurred vision, dilated sluggish pupils, optic disc hyperaemia, severe HAGMA (formic acid).',
              'ETHYLENE GLYCOL CLUES: Inebriation without ethanol smell, AKI, hypocalcaemia, urinary calcium oxalate crystals, and huge "Lactate Gap" (falsely high POC blood gas lactate vs normal lab lactate).',
            ],
            contextualPitfall:
              'If the patient also co-ingested Ethanol, subtract [Ethanol mmol/L × 1.25] from the Osmolar Gap — AND remember late presenters may have a NORMAL osmolar gap with severe HAGMA!',
            inlineCallRoles: ['toxicology'],
            branches: [
              {
                id: 'b-alc-treat',
                label: 'Osmolar Gap > 10 OR Unexplained HAGMA / Suspected Ingestion → Start ADH Blockade STAT',
                tone: 'critical',
                nextNodeId: 'alc-adh',
              },
            ],
          },
          'alc-adh': {
            id: 'alc-adh',
            phase: 'intervention',
            title: 'ADH Blockade (Fomepizole / Ethanol) + Cofactors + Alkalinization',
            prompt:
              'Halt formation of toxic formic/oxalic acid IMMEDIATELY with Fomepizole (or IV Ethanol if unstocked) and give pathway cofactors.',
            dosingItems: [
              {
                id: 'alc-fomepizole-load',
                drugName: 'Fomepizole Loading Dose (4-Methylpyrazole)',
                formulaType: 'per_kg',
                dosePerKg: 15,
                maxSingleDose: 1500,
                unit: 'mg',
                concMgPerMl: 1000,
                vialStrength: 1500,
                vialUnitLabel: '1.5 g/1.5 mL vial',
                concentrationLabel: 'Dilute in 100 mL NS or D5W',
                route: 'IV infusion over 30 min',
                rateOrFrequency: 'Then 10 mg/kg q12h ×4 doses, then 15 mg/kg q12h (OR q4h ON DIALYSIS!)',
                requiresStockToggle: 'fomepizoleStocked',
              },
              {
                id: 'alc-ethanol-load',
                drugName: 'Ethanol 10% IV in D5W Loading Dose (If Fomepizole Unstocked)',
                formulaType: 'per_kg',
                dosePerKg: 8,
                maxSingleDose: 800,
                unit: 'mL',
                concentrationLabel: '10% v/v Ethanol in D5W (~0.8 g/kg)',
                route: 'IV over 30–60 min (central line preferred)',
                rateOrFrequency: 'Followed by 1–2 mL/kg/hr maintenance (DOUBLE rate during haemodialysis!)',
                clinicalNote:
                  'Target serum ethanol 22–33 mmol/L (100–150 mg/dL). Monitor BG & CNS sedation hourly.',
                hideWhenStockToggle: 'fomepizoleStocked',
              },
              {
                id: 'alc-folinic',
                drugName: 'Methanol Cofactor: Folinic Acid (Leucovorin)',
                formulaType: 'fixed',
                fixedDoseText: '50 mg IV q6h (Folic acid 50 mg IV q6h if Leucovorin unavailable)',
                unit: 'mg',
                route: 'IV over 15–30 min',
                rateOrFrequency: 'Enhances hepatic clearance of toxic formic acid',
              },
              {
                id: 'alc-eg-cofactors',
                drugName: 'Ethylene Glycol Cofactors: Thiamine + Pyridoxine',
                formulaType: 'fixed',
                fixedDoseText: 'Thiamine 100 mg IV q6h + Pyridoxine 50 mg IV q6h',
                unit: 'mg',
                route: 'IV infusion',
                rateOrFrequency: 'Shunts glyoxylic acid away from toxic oxalate formation',
              },
              {
                id: 'alc-nahco3',
                drugName: 'Sodium Bicarbonate (If Arterial pH < 7.30)',
                formulaType: 'range_per_kg',
                minDosePerKg: 1,
                maxDosePerKg: 2,
                maxSingleDose: 150,
                unit: 'mEq',
                concMgPerMl: 1,
                vialStrength: 50,
                vialUnitLabel: '50 mL 8.4% bottle',
                concentrationLabel: '8.4% = 1 mEq/mL',
                route: 'IV push / infusion',
                rateOrFrequency: 'Target arterial pH > 7.30–7.35 (reduces CNS/retinal formate entry)',
              },
            ],
            actions: [
              'Keep Fomepizole active continuously (switch to Ethanol only if Fomepizole unavailable; adjust stock toggle in Admin Hub if needed).',
              'Correct severe symptomatic hypocalcaemia in Ethylene Glycol (only treat tetany/seizures/QTc prolongation — extra Ca2+ can precipitate renal oxalate stones).',
            ],
            contextualPitfall:
              'DIALYSIS CLEARANCE TRAP: Both Fomepizole and Ethanol are rapidly cleared by haemodialysis! Increase Fomepizole frequency to q4h (or double Ethanol infusion rate) DURING haemodialysis so ADH blockade is not lost mid-dialysis.',
            inlineCallRoles: ['toxicology', 'icu'],
            branches: [
              {
                id: 'b-alc-disp',
                label: 'Proceed to Haemodialysis Triage & ICU Disposition',
                tone: 'yes',
                nextNodeId: 'alc-disp',
              },
            ],
          },
          'alc-disp': {
            id: 'alc-disp',
            phase: 'disposition',
            title: 'EXTRIP Haemodialysis Indications & ICU Care',
            prompt:
              'Initiate urgent intermittent haemodialysis for severe acidemia, end-organ toxicity, or high alcohol levels.',
            actions: [
              'HAEMODIALYSIS TRIGGERS (EXTRIP): Arterial pH ≤ 7.15, persistent acidaemia despite NaHCO3, visual impairment (Methanol), AKI / coma / seizures, OR Methanol/Ethylene Glycol level > 50 mg/dL (Methanol >15.6 mmol/L; EG >8.1 mmol/L).',
              'MANDATORY DIALYSIS PROTOCOL: Increase Fomepizole dosing to every 4 hours (or double Ethanol infusion rate to ~2–4 mL/kg/hr) throughout the haemodialysis session.',
              'Continue ADH blockade + cofactors until serum toxic alcohol < 20 mg/dL (<3–6 mmol/L) AND anion gap acidosis resolves.',
            ],
            contextualPitfall:
              'DIALYSIS CLEARANCE TRAP: Do NOT leave Fomepizole on q12h during intermittent haemodialysis — sub-therapeutic levels mid-dialysis allow lethal formate/oxalate rebound!',
            inlineCallRoles: ['icu', 'toxicology'],
            disposition: {
              destination: 'Intensive Care Unit (ICU) / Urgent Haemodialysis',
              urgency: 'STAT Nephrology & Toxicology Intervention',
              checklist: [
                'ADH blockade (Fomepizole or Ethanol) running before/during dialysis',
                'Intra-dialytic q4h Fomepizole / 2× Ethanol rate order written explicitly',
                'Methanol (Folinic acid) / EG (Thiamine + Pyridoxine) cofactors ordered',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
  {
    id: 'organophosphate',
    title: 'Organophosphate & Carbamate Cholinergic Crisis',
    shortTitle: 'Organophosphate',
    category: 'toxicology',
    defaultContactRoles: ['toxicology', 'icu', 'anaesthesia'],
    commonPitfalls: [
      'DO NOT use Succinylcholine (Suxamethonium) for intubation — organophosphates inhibit plasma pseudocholinesterase and cause hours of prolonged paralysis! Use ROCURONIUM.',
      'DO NOT stop escalating Atropine because of tachycardia or dilated pupils — titrate Atropine strictly to DRY BRONCHIAL SECRETIONS (clear chest auscultation), SpO2, and SBP > 80 mmHg!',
      'DO NOT delay decontamination or fail to wear nitrile/butyl PPE — solvent-borne organophosphates (xylene) cause rapid secondary staff poisoning.',
    ],
    evidence: {
      society: 'TOXBASE / WHO / Eddleston Cholinergic Crisis Protocol',
      guidelineName: 'Acute Organophosphorus Pesticide & Nerve Agent Poisoning',
      year: 2024,
      evidenceLevel: 'Grade 1A · Randomized Trial Supported',
      summary:
        'Mandates staff PPE & immediate soap-water decontamination, aggressive Atropine doubling protocol (1–3 mg IV doubled q5min to clear bronchorrhoea) followed by infusion, early Pralidoxime (2-PAM) 30 mg/kg loading + infusion, benzodiazepines for seizures, and avoidance of Succinylcholine.',
      citation: 'Eddleston M et al. Lancet 2008; TOXBASE Organophosphate Insecticides 2024.',
      url: 'https://www.toxbase.org/',
    },
    defaultLocalWorkflow: {
      escalationSteps: [
        'Don double nitrile (or butyl) gloves, gown, and eye protection BEFORE touching contaminated clothing/patient.',
        'Initiate Atropine doubling protocol immediately using multi-vial Atropine Resus Box (often requires >20–100 mg total!).',
        'Call Toxicology / Poison Control and ICU STAT; request Pharmacy STAT supply of Atropine + Pralidoxime (2-PAM).',
      ],
      stockAndEquipment:
        'High-dose Atropine Resus Pack (multiple 1 mg or 3 mg/10 mL vials), Pralidoxime Chloride (2-PAM) 1 g vials, Diazepam/Midazolam, wall suction, decontamination wash.',
      admissionCriteria:
        'All symptomatic OP/carbamate ingestions require ICU admission (monitor 48–96h for Intermediate Syndrome respiratory failure!).',
    },
    algorithms: [
      {
        id: 'organophosphate-algo',
        topicId: 'organophosphate',
        title: 'Cholinergic Crisis: Decontamination, Atropine Doubling & Oximes',
        shortTitle: 'Organophosphate',
        presentationTrigger:
          'SLUDGE / DUMBELS cholinergic crisis: pinpoint pupils, profuse bronchorrhoea, wheeze, bradycardia, fasciculations, or coma',
        colorTag: 'red',
        estimatedSteps: 4,
        startNodeId: 'op-1',
        keywords: [
          'organophosphate',
          'carbamate',
          'cholinergic',
          'atropine',
          'pralidoxime',
          '2-pam',
          'sludge',
          'dumbels',
          'succinylcholine',
        ],
        nodes: {
          'op-1': {
            id: 'op-1',
            phase: 'immediate',
            title: 'Staff PPE, Decontamination, Suction & Airway Caution',
            prompt:
              'Protect staff first, strip & wash skin thoroughly, suction profuse airway secretions, and oxygenate.',
            actions: [
              'PPE FIRST: Wear double nitrile gloves, waterproof apron/gown, and eye shield (standard latex gloves are permeable to OP solvents!).',
              'DECONTAMINATION: Remove ALL clothing into sealed double bags; wash skin/hair/folds copiously with soap and water (avoid hot water).',
              'AIRWAY & OXYGEN: Suction oral/tracheal secretions continuously and apply 100% O2 via NRM (note hypoxic myocardium is prone to Atropine arrhythmias, though never delay Atropine in arrest/bronchorrhoea).',
              'IF INTUBATION NEEDED: Use ROCURONIUM (1.2 mg/kg IV) — NEVER Succinylcholine! (Note: high-dose Atropine often resolves bronchorrhoea and restores breathing rapidly without intubation.)',
            ],
            contextualPitfall:
              'DO NOT use Succinylcholine for RSI — inhibited pseudocholinesterase causes prolonged apnea lasting 4–12+ hours!',
            inlineCallRoles: ['toxicology', 'anaesthesia'],
            branches: [
              {
                id: 'b-op-atropine',
                label: 'Bronchorrhoea / Bradycardia / Hypotension Present → Start Atropine Doubling',
                tone: 'critical',
                nextNodeId: 'op-atropine',
              },
            ],
          },
          'op-atropine': {
            id: 'op-atropine',
            phase: 'intervention',
            title: 'Atropine Doubling Protocol (Titrate to Dry Chest)',
            prompt:
              'Escalate Atropine rapidly every 5 minutes by DOUBLING each dose until muscarinic bronchorrhoea clears.',
            dosingItems: [
              {
                id: 'op-atropine-bolus',
                drugName: 'Atropine Rapid Doubling Boluses (Eddleston Protocol)',
                formulaType: 'fixed',
                fixedDoseText:
                  'Start 1–3 mg IV bolus; reassess q5min and DOUBLE dose (2 → 4 → 8 → 16 → 32 mg...) until chest clear!',
                unit: 'mg',
                route: 'Rapid IV push',
                rateOrFrequency: 'Endpoints: (1) Clear lung auscultation (dry secretions), (2) SBP >80 mmHg, (3) HR >80 bpm',
                clinicalNote:
                  'Tachycardia & dilated pupils are NOT contraindications to further Atropine while pulmonary secretions/bronchorrhoea persist!',
              },
              {
                id: 'op-atropine-inf',
                drugName: 'Post-Atropinization Maintenance Infusion',
                formulaType: 'fixed',
                fixedDoseText: '10–20% of total Atropine loading dose per hour IV infusion',
                unit: 'mg/hr',
                route: 'Continuous IV infusion',
                rateOrFrequency: 'Monitor q15–30min for recurrent crackles (re-bolus) or anticholinergic delirium (reduce)',
              },
            ],
            actions: [
              'Have a dedicated team member rapidly drawing up Atropine vials in bulk (severe poisonings commonly require 30–100+ mg in the first hour).',
              'Send STAT VBG/ABG, electrolytes, CK, and plasma/RBC cholinesterase (if available — never delay treatment for lab results).',
            ],
            contextualPitfall:
              'DO NOT use pupil size to guide Atropine dosing (topical eye contamination or central effects dissociate pupils from lung drying).',
            inlineCallRoles: ['toxicology', 'icu'],
            branches: [
              {
                id: 'b-op-oxime',
                label: 'Lung Secretions Drying → Add Pralidoxime (2-PAM) + Benzodiazepines',
                tone: 'yes',
                nextNodeId: 'op-oxime',
              },
            ],
          },
          'op-oxime': {
            id: 'op-oxime',
            phase: 'intervention',
            title: 'Pralidoxime (2-PAM) Nicotinic Rescue & Seizure Control',
            prompt:
              'Atropine does NOT reverse nicotinic muscle weakness/paralysis — give Pralidoxime early before AChE "aging" occurs.',
            dosingItems: [
              {
                id: 'op-2pam-load',
                drugName: 'Pralidoxime Chloride (2-PAM) Loading Dose',
                formulaType: 'per_kg',
                dosePerKg: 30,
                maxSingleDose: 2000,
                unit: 'mg',
                concMgPerMl: 50,
                vialStrength: 1000,
                vialUnitLabel: '1,000 mg (1 g) vial',
                concentrationLabel: 'Reconstitute 1 g in 20 mL sterile water → dilute in 100 mL NS',
                route: 'IV infusion over 30 min',
                rateOrFrequency: 'Followed by 8–10 mg/kg/hr IV infusion (max ~500–650 mg/hr)',
                clinicalNote:
                  'Rapid 2-PAM bolus causes laryngospasm, hypertension & tachycardia — always infuse load over 30 min!',
              },
              {
                id: 'op-benzo',
                drugName: 'Diazepam (OR Midazolam) — Seizures & Fasciculations',
                formulaType: 'fixed',
                fixedDoseText: 'Diazepam 5–10 mg IV (or Midazolam 2–5 mg IV) q5–10min PRN',
                unit: 'mg',
                route: 'IV push',
                rateOrFrequency: 'Prevents excitotoxic CNS injury and reduces agitation',
              },
            ],
            actions: [
              'If confirmed pure CARBAMATE poisoning (e.g., Methomyl/Aldicarb) with mild symptoms, Atropine + Diazepam alone usually suffice; if mixed or unknown pesticide, ALWAYS give Pralidoxime empirically.',
              'Monitor closely for QTc prolongation and sudden respiratory muscle fatigue.',
            ],
            inlineCallRoles: ['toxicology', 'icu'],
            branches: [
              {
                id: 'b-op-disp',
                label: 'Proceed to ICU Admission & Intermediate Syndrome Watch',
                tone: 'yes',
                nextNodeId: 'op-disp',
              },
            ],
          },
          'op-disp': {
            id: 'op-disp',
            phase: 'disposition',
            title: 'ICU Monitoring (Intermediate Syndrome Watch 24–96h)',
            prompt:
              'Admit to ICU for Atropine/2-PAM infusions and close respiratory monitoring for delayed Intermediate Syndrome.',
            actions: [
              'INTERMEDIATE SYNDROME WATCH: At 24–96 hours post-exposure (even after cholinergic symptoms resolve), monitor neck flexion strength, cranial nerves, and negative inspiratory force — sudden respiratory paralysis requires prompt re-intubation.',
              'Continue Pralidoxime until Atropine is weaned and patient has been asymptomatic off Atropine for ≥12–24 hours.',
            ],
            inlineCallRoles: ['icu', 'toxicology'],
            disposition: {
              destination: 'Intensive Care Unit (ICU)',
              urgency: 'STAT Critical Care Admission',
              checklist: [
                'Atropine infusion titrated to clear lungs (dry secretions)',
                'Pralidoxime infusion running (if OP or unknown cholinesterase inhibitor)',
                'Daily neck-flexor / respiratory strength checks ordered for Intermediate Syndrome',
              ],
            },
            branches: [],
          },
        },
      },
    ],
  },
];
