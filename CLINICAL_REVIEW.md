# HALO Emergency — Complete Clinical Content Review

- **Version**: v2026.3
- **Last Reviewed**: 2026-11-23
- **Total Clinical Modules**: 28
- **Total Interactive Algorithms**: 37

---

## Table of Contents

### Airway & Thoracic Procedures
- **Tracheostomy Emergency** (RCEM Green: Tracheostomy (Patent Upper Airway); RCEM Red: Laryngectomy (Neck-Only Breather); BJA 2020 ICU Tracheostomy Emergency; Tracheostomy Dislodgement (<7d vs ≥7d); Bleeding Around Tracheostomy (Utley Manoeuvre))
- **Total Laryngectomy Emergency** (RCEM Red: Emergency Laryngectomy Management)
- **LVAD Emergency** (UK Adult Implantable LVAD Emergency; LVAD Algorithm 1: Initial Assessment; LVAD Algorithm 2: Troubleshooting; LVAD Algorithm 3: Adequate Circulation)
- **Pacemaker Malfunction** (Pacemaker Failure to Capture / Pace; Pacemaker-Mediated Tachycardia)
- **ICD Malfunction / Shocks** (Inappropriate vs Appropriate ICD Shocks)
- **Can't Intubate, Can't Oxygenate (CICO) — eFONA** (CICO Declaration & Scalpel-Bougie-Tube eFONA)
- **Resuscitative Thoracotomy (Traumatic Arrest)** (ED Resuscitative Thoracotomy (Clamshell / Left Anterolateral))
- **Finger Thoracostomy & Massive Haemothorax** (Finger Thoracostomy & Massive Haemothorax Triage)

### Cardiovascular
- **Acute Aortic Dissection (Type A & Complicated Type B)** (Anti-Impulse Sequence & Stanford A/B Triage)
- **Massive Pulmonary Embolism (Obstructive Shock)** (High-Risk / Massive PE Resuscitation & Reperfusion)
- **Refractory VF / pVT** (Refractory VF (Vector Change & DSED))
- **Electrical Storm** (Electrical Storm (≥3 VT/VF in 24h))
- **Major Anticoagulant Bleeding** (DOAC Major Bleeding Reversal; Warfarin / Heparin Reversal)

### ENT, Airway & GI Bleeds
- **Massive Epistaxis** (Massive Epistaxis Escalation)
- **Massive Haemoptysis** (Massive Haemoptysis Airway & BAE)
- **Catastrophic Variceal Bleed & Balloon Tamponade** (Catastrophic Variceal Bleed & Sengstaken-Blakemore Rescue)

### Endocrine & Environmental
- **Thyroid Storm** (Thyroid Storm Sequential Blockade)
- **Myxoedema Coma** (Myxoedema Coma Resuscitation)
- **Hyperthermia Syndromes** (Hyperthermia Cooling & Differentiation)
- **Severe Accidental Hypothermia (<28°C) & Hypothermic Arrest** (Swiss Staging, Hypothermic Arrest Guard & ECLS Triage)

### Immunology & Resuscitation
- **Refractory Anaphylaxis (Adrenaline-Resistant)** (Refractory Anaphylaxis — Low-Dose IV Adrenaline & Rescue)

### Toxicology (HALO)
- **Beta Blocker Overdose** (Beta Blocker Shock & Bradycardia)
- **Calcium Channel Blocker Overdose** (CCB Cardiogenic & Vasodilatory Shock)
- **TCA Overdose** (TCA Sodium-Channel & CNS Toxicity)
- **Paraquat Poisoning** (Paraquat O2-Restriction & Decontamination)
- **Carbon Monoxide Poisoning** (CO Toxicity & Hyperbaric Triage)
- **Toxic Alcohols (Methanol & Ethylene Glycol)** (Toxic Alcohol Osmolar Gap, ADH Blockade & Dialysis)
- **Organophosphate & Carbamate Cholinergic Crisis** (Cholinergic Crisis: Decontamination, Atropine Doubling & Oximes)

---

# Category: Airway & Thoracic Procedures

## 1. Tracheostomy Emergency

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: anaesthesia, ent, icu
- **Evidence Source**: RCEM / NTSP / BJA (Paulich, Cook, Hall, Churchill, Kelly) — *Emergency Tracheostomy Management (Green & Red) & BJA 2020 ICU Algorithms* (2020) [Expert Consensus · Level B]
- **Citation**: Paulich S, Cook TM, Hall H, Churchill H, Kelly FE. Br J Anaesth 2020;125(1):e164–e165 (doi:10.1016/j.bja.2020.02.001); NTSP/RCEM Guidelines.
- **Evidence Summary**: Integrates the RCEM/NTSP Green (Patent Upper Airway) and Red (Laryngectomy) color-coded pathways alongside the BJA 2020 ICU tracheostomy emergency algorithms emphasizing waveform capnography, Mapleson C ("Waters circuit"), dual-route O2, inner-tube/suction check, cuff deflation, and staged oral/stomal rescue.
- **Reference URL**: https://www.bjanaesthesia.org/article/S0007-0912(20)30072-6/fulltext

### Common Clinical Pitfalls (DO NOT)
- DO NOT confuse a Patent Upper Airway Tracheostomy (GREEN) with a Total Laryngectomy End-Stoma (RED) — check bedside signage and anatomy immediately.
- DO NOT remove a tracheostomy tube blindly without airway rescue equipment and backup plan ready.
- DO NOT force a suction catheter or bougie against resistance — risk of creating a false paratracheal passage.
- DO NOT forget: some inner tubes must be re-inserted to connect standard 15 mm breathing circuits / Mapleson C.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call Airway / Anaesthesia and ENT Surgical Registrar immediately via emergency switchboard.
2. Bring Difficult Airway Trolley, Mapleson C ("Waters") circuit, waveform capnography, and Spare Tracheostomy Box to bedside.
3. Escalate to ICU for post-event airway observation and bronchoscopy clearance.

- **Stock & Equipment**: Tracheostomy emergency box (size 6.0, 7.0, 8.0 cuffed tubes, tracheal dilators, bougie, paediatric face mask, LMA) stored in Resus Bay Airway Cart Drawer 2.
- **Admission / Transfer Criteria**: All emergency tracheostomy obstructions, tube replacements, or herald bleeds require ICU/HDU admission and ENT airway evaluation.

### Algorithm: RCEM Green: Tracheostomy (Patent Upper Airway)

- **Presentation Trigger**: Tracheostomy patient with intact upper airway — distress, obstruction, or absent ETCO2
- **Pathway Color Tag**: GREEN
- **Start Node**: `trg-1`
- **Keywords**: tracheostomy, green algorithm, rcem, ntsp, patent upper airway, mapleson c, waters circuit, inner tube, suction

#### Node `trg-1` — Call Airway Expert · Look, Listen & Feel · Capnography [IMMEDIATE]
> **Prompt**: Call for airway expert help. Look, listen & feel at BOTH the mouth and tracheostomy. Is the patient breathing?

**Inline Anatomical / Vector SVG**: `trach_vs_laryngectomy`

**Clinical Actions:**
- [ ] Call for airway expert help immediately.
- [ ] Look, listen & feel at the mouth AND tracheostomy.
- [ ] Use a Mapleson C system (e.g. "Waters circuit") to assist assessment if available.
- [ ] Attach waveform capnography immediately — exhaled CO2 indicates a patent or partially patent airway.

**Recommended Immediate Calls**: anaesthesia, ent

**Decision Branches:**
- **YES — Patient is Breathing** (Apply high flow oxygen to BOTH the face AND the tracheostomy.) → `trg-o2-both`
- **NO — Patient is NOT Breathing** (Call Resuscitation Team + CPR if no pulse / signs of life.) → `trg-cpr-1`

#### Node `trg-o2-both` — High-Flow O2 to BOTH Face & Tracheostomy [IMMEDIATE]
> **Prompt**: Apply high-flow oxygen masks to BOTH the face AND the tracheostomy, then assess patency.

**Clinical Actions:**
- [ ] Apply high-flow O2 to face (non-rebreather) AND high-flow O2 over tracheostomy stoma simultaneously.

**Decision Branches:**
- **Assess Tracheostomy Patency** → `trg-2`

#### Node `trg-cpr-1` — Call Resuscitation Team & Start CPR if No Signs of Life [IMMEDIATE]
> **Prompt**: Call Resuscitation Team. Commence CPR if no pulse / signs of life, then immediately assess tracheostomy patency.

**Recommended Immediate Calls**: anaesthesia, icu

**Decision Branches:**
- **Assess Tracheostomy Patency** → `trg-2`

#### Node `trg-2` — Assess Tracheostomy Patency (Inner Tube & Suction) [DECISION]
> **Prompt**: Remove speaking valve/cap & inner tube. Can you pass a suction catheter freely?

**Clinical Actions:**
- [ ] Remove speaking valve or cap (if present).
- [ ] Remove INNER TUBE (note: some inner tubes need re-inserting to connect to breathing circuits).
- [ ] Attempt gentle passage of a flexible suction catheter down the tracheostomy.

**Contextual Pitfall Warning**: DO NOT force a suction catheter against resistance — if it will not pass, move immediately to cuff deflation.

**Decision Branches:**
- **YES — Suction Catheter Passes Freely** (The tracheostomy tube is patent.) → `trg-patent`
- **NO — Cannot Pass Suction Catheter** (Proceed immediately to deflate the cuff.) → `trg-3`

#### Node `trg-patent` — Tracheostomy Tube is Patent [DISPOSITION]
> **Prompt**: Tube is patent. Perform tracheal suction, ventilate via tracheostomy if apnoeic, and continue ABCDE.

**Clinical Actions:**
- [ ] Perform tracheal suction.
- [ ] Consider partial obstruction (secretions, bronchospasm, blood clot).
- [ ] Ventilate via tracheostomy if not breathing.
- [ ] Continue full ABCDE assessment.

**Disposition**: ABCDE Stabilization → ICU / ENT Review (Patent Airway Confirmed)
- [x] Waveform capnography continuously monitored
- [x] Re-insert clean spare inner cannula if required

#### Node `trg-3` — DEFLATE THE CUFF & Reassess [DECISION]
> **Prompt**: Deflate the cuff (if present). Look, listen & feel at mouth and tracheostomy (capnography / Mapleson C). Is the patient stable or improving?

**Clinical Actions:**
- [ ] Completely deflate the cuff using a 10 mL syringe.
- [ ] Look, listen & feel at BOTH the mouth and tracheostomy.
- [ ] Check waveform capnography or Mapleson C circuit movement.

**Decision Branches:**
- **YES — Patient Stable or Improving** (Tracheostomy tube partially obstructed or displaced.) → `trg-partial`
- **NO — Not Stable / Not Improving** (REMOVE THE TRACHEOSTOMY TUBE immediately!) → `trg-4`

#### Node `trg-partial` — Partially Obstructed or Displaced Tube [DISPOSITION]
> **Prompt**: Airflow restored around deflated cuff. Continue ABCDE assessment and arrange controlled ENT/Anaesthesia tube exchange.

**Recommended Immediate Calls**: ent, anaesthesia

**Disposition**: Controlled Tube Evaluation / ICU (Urgent Specialist Airway Assessment)
- [x] Maintain high-flow O2 to face and stoma
- [x] Prepare replacement tube + fibreoptic/bougie before any exchange

#### Node `trg-4` — REMOVE THE TRACHEOSTOMY TUBE [DECISION]
> **Prompt**: REMOVE the tracheostomy tube. Look, listen & feel at mouth and tracheostomy; re-apply O2 to face & stoma. Is the patient breathing?

**Clinical Actions:**
- [ ] Remove the tracheostomy tube completely.
- [ ] Look, listen & feel at the mouth AND tracheostomy.
- [ ] Ensure oxygen is re-applied to BOTH face and stoma.
- [ ] Use waveform capnography or Mapleson C if available.

**Decision Branches:**
- **YES — Patient is Breathing** → `trg-rem-abcde`
- **NO — Not Breathing → Emergency Oxygenation** → `trg-5`

#### Node `trg-rem-abcde` — Breathing Restored Post-Removal — ABCDE Assessment [DISPOSITION]
> **Prompt**: Maintain O2 to face and stoma, monitor capnography, and prepare controlled airway plan with ENT/Anaesthesia.

**Recommended Immediate Calls**: anaesthesia, ent

**Disposition**: ICU / ENT Airway Management (Urgent Airway Plan)
- [x] Continue ABCDE assessment and continuous waveform ETCO2

#### Node `trg-5` — Primary Emergency Oxygenation (Oral & Stoma) [INTERVENTION]
> **Prompt**: Call Resuscitation Team (CPR if no signs of life). Oxygenate via BOTH standard oral manoeuvres and stoma.

**Clinical Actions:**
- [ ] Standard ORAL airway manoeuvres: Cover the stoma (swabs / gloved hand). Use Bag-Valve-Mask, oral/nasal airway adjuncts, or supraglottic airway (LMA).
- [ ] Tracheostomy STOMA ventilation: Apply a paediatric face mask directly to the stoma OR an LMA applied over the stoma.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Decision Branches:**
- **Escalate to Secondary Emergency Oxygenation (Intubation)** → `trg-6`

#### Node `trg-6` — Secondary Emergency Oxygenation (Oral / Stoma Intubation) [DISPOSITION]
> **Prompt**: Attempt definitive ORAL intubation (uncut ETT past stoma) OR intubate the STOMA.

**Clinical Actions:**
- [ ] 1. Attempt ORAL intubation: Prepare for difficult intubation; use uncut ETT advanced beyond the stoma level.
- [ ] 2. Attempt intubation of STOMA: Small tracheostomy tube or 6.0 mm cuffed ETT; consider Aintree catheter + fibreoptic scope / Bougie / Airway exchange catheter.
- [ ] Confirm tracheal placement strictly with waveform capnography.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Disposition**: ICU / Operating Theatre Definitive Airway (Code Airway STAT)
- [x] Waveform capnography trace confirmed
- [x] CXR ordered to check ETT depth and rule out pneumothorax

### Algorithm: RCEM Red: Laryngectomy (Neck-Only Breather)

- **Presentation Trigger**: Total laryngectomy / end-stoma patient — zero mouth-to-trachea connection
- **Pathway Color Tag**: RED
- **Start Node**: `trr-1`
- **Keywords**: laryngectomy, red algorithm, rcem, ntsp, neck breather, end stoma, tep, paediatric mask

#### Node `trr-1` — Call Airway Expert · Look, Listen & Feel at Stoma [IMMEDIATE]
> **Prompt**: Call airway expert help. Look, listen & feel at mouth and laryngectomy stoma (Mapleson C / capnography). Is the patient breathing?

**Inline Anatomical / Vector SVG**: `trach_vs_laryngectomy`

**Clinical Actions:**
- [ ] Call for airway expert help immediately.
- [ ] Look, listen & feel at the mouth and laryngectomy stoma.
- [ ] Use Mapleson C ("Waters circuit") and waveform capnography whenever available.

**Contextual Pitfall Warning**: Laryngectomy patients have an END STOMA and CANNOT be oxygenated via the mouth or nose!

**Recommended Immediate Calls**: anaesthesia, ent

**Decision Branches:**
- **YES — Patient is Breathing** (Apply high flow oxygen to LARYNGECTOMY STOMA (and face if ANY doubt).) → `trr-o2`
- **NO — Patient is NOT Breathing** (Call Resuscitation Team + CPR if no pulse / signs of life.) → `trr-cpr`

#### Node `trr-o2` — High-Flow O2 to Laryngectomy Stoma [IMMEDIATE]
> **Prompt**: Apply high-flow O2 directly to the laryngectomy stoma (*if any doubt whether laryngectomy vs tracheostomy, apply O2 to face also).

**Clinical Actions:**
- [ ] Deliver high-flow O2 directly over the neck stoma.
- [ ] If ANY doubt about surgical anatomy, apply O2 to face as well.

**Decision Branches:**
- **Assess Laryngectomy Stoma Patency** → `trr-2`

#### Node `trr-cpr` — Call Resuscitation Team & Start CPR if No Signs of Life [IMMEDIATE]
> **Prompt**: Call Resuscitation Team and start CPR if no pulse / signs of life, then immediately assess laryngectomy stoma patency.

**Recommended Immediate Calls**: anaesthesia, icu

**Decision Branches:**
- **Assess Laryngectomy Stoma Patency** → `trr-2`

#### Node `trr-2` — Assess Laryngectomy Stoma Patency [DECISION]
> **Prompt**: Not all laryngectomy stomas have a tube in situ. Remove cover/button/inner tube. Can you pass a suction catheter?

**Clinical Actions:**
- [ ] Remove humidification cover or button (if present).
- [ ] Remove inner tube (if present; some inner tubes need re-inserting to connect to breathing circuits).
- [ ] DO NOT remove a tracheoesophageal puncture (TEP) voice prosthesis!
- [ ] Pass a soft suction catheter into stoma/tube.

**Contextual Pitfall Warning**: DO NOT pull out a small TEP voice prosthesis on the posterior tracheal wall.

**Decision Branches:**
- **YES — Suction Catheter Passes Freely** → `trr-patent`
- **NO — Cannot Pass Suction Catheter** → `trr-3`

#### Node `trr-patent` — Laryngectomy Stoma is Patent [DISPOSITION]
> **Prompt**: Perform tracheal suction, ventilate via stoma if not breathing, and continue ABCDE assessment.

**Clinical Actions:**
- [ ] Perform tracheal suction and consider partial obstruction.
- [ ] Ventilate via STOMA ONLY if not breathing.
- [ ] Continue ABCDE assessment and humidified oxygen.

**Disposition**: ABCDE Stabilization → ENT / ICU Review (Patent Stoma Confirmed)
- [x] Humidified O2 at stoma
- [x] Continuous capnography

#### Node `trr-3` — Deflate Cuff (if present) & Reassess [DECISION]
> **Prompt**: Deflate the cuff (if present). Look, listen & feel at laryngectomy stoma/tube (capnography/Mapleson C). Is patient stable or improving?

**Decision Branches:**
- **YES — Stable or Improving** → `trr-patent`
- **NO — Still Obstructed / Deteriorating** → `trr-4`

#### Node `trr-4` — REMOVE Tube from Laryngectomy Stoma (if present) [DECISION]
> **Prompt**: Remove the tube from the laryngectomy stoma (if present). Re-apply O2 to stoma and assess breathing.

**Clinical Actions:**
- [ ] Remove any tube/button from the laryngectomy stoma.
- [ ] Look, listen & feel at the laryngectomy stoma.
- [ ] Ensure oxygen is re-applied directly to the STOMA; check waveform capnography / Mapleson C.

**Decision Branches:**
- **YES — Breathing Restored** → `trr-patent`
- **NO — Apnoeic / Failing → Stoma-Only Emergency Oxygenation** → `trr-5`

#### Node `trr-5` — Primary Emergency Oxygenation (STOMA ONLY) [INTERVENTION]
> **Prompt**: Call Resuscitation Team (CPR if no pulse/signs of life). Ventilate LARYNGECTOMY STOMA ONLY.

**Clinical Actions:**
- [ ] Apply a PAEDIATRIC FACE MASK directly over the laryngectomy stoma to ventilate.
- [ ] OR apply an LMA directly over the laryngectomy stoma to form a seal.

**Contextual Pitfall Warning**: DO NOT attempt oral BVM or oral laryngoscopy — laryngectomy patients have zero anatomical connection between mouth/nose and lungs.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Decision Branches:**
- **Escalate to Secondary Oxygenation (Stoma Intubation)** → `trr-6`

#### Node `trr-6` — Secondary Emergency Oxygenation — Intubate Laryngectomy Stoma [DISPOSITION]
> **Prompt**: Intubate directly through the laryngectomy stoma using a small tracheostomy tube or 6.0 mm cuffed ETT.

**Clinical Actions:**
- [ ] Insert a small tracheostomy tube or 6.0 mm cuffed ETT directly into the stoma (advance just until cuff passes stoma — carina is shallow!).
- [ ] Consider Aintree catheter + fibreoptic scope / Bougie / Airway exchange catheter.
- [ ] Confirm ventilation with waveform capnography.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Disposition**: ICU / ENT Definitive Airway Management (Code Airway STAT)
- [x] Waveform capnography confirmed
- [x] CXR to exclude right mainstem intubation

### Algorithm: BJA 2020 ICU Tracheostomy Emergency

- **Presentation Trigger**: Ventilated / ICU tracheostomy patient with high airway pressures, circuit loss, or desaturation
- **Pathway Color Tag**: BLUE
- **Start Node**: `bja-1`
- **Keywords**: bja, 2020, paulich, cook, kelly, icu, ventilator, mapleson c, capnography, circuit

#### Node `bja-1` — Check Bedside Sign (Green vs Red) & Disconnect to Mapleson C [IMMEDIATE]
> **Prompt**: Call ICU airway expert. Check Green (Patent Upper Airway) vs Red (Laryngectomy) bedside sign & verify waveform capnography.

**Clinical Actions:**
- [ ] Call airway expert / ICU senior and bring Difficult Airway Trolley.
- [ ] Identify patient airway type from bedhead sign: GREEN (Tracheostomy, patent upper airway) vs RED (Laryngectomy).
- [ ] If mechanically ventilated with rising peak pressures or absent/flat ETCO2: disconnect ventilator briefly (pause ventilation if aerosol precautions needed) and attach Mapleson C ("Waters") circuit with waveform capnography.
- [ ] If pulse/signs of life absent: call Resuscitation Team & commence CPR.

**Contextual Pitfall Warning**: BJA 2020 emphasizes differentiating ventilator/circuit faults from true tube obstruction early using a Mapleson C circuit + capnography.

**Recommended Immediate Calls**: icu, anaesthesia, ent

**Decision Branches:**
- **Circuit / Ventilator Issue Only (Easy Hand-Bagging & Good ETCO2)** (Tube is patent; troubleshoot ventilator tubing/HME/ventilator.) → `bja-vent-fault`
- **High Resistance / Poor or Absent ETCO2 on Mapleson C** (Suspect blocked or displaced tracheostomy tube.) → `bja-2`

#### Node `bja-vent-fault` — Tube Patent — Resolve Ventilator / HME / Secretions [DISPOSITION]
> **Prompt**: Continue hand ventilation via Mapleson C while replacing blocked HME filter or faulty ventilator circuit.

**Clinical Actions:**
- [ ] Inspect and replace wet/occluded HME filter or kinked ventilator tubing.
- [ ] Suction tracheal secretions and check cuff pressure (20–30 cmH2O).

**Disposition**: ICU / Resuscitation Continued Ventilation (Airway Patency Verified)
- [x] Square-wave ETCO2 restored on ventilator

#### Node `bja-2` — Inner Tube Removal & Suction Catheter Check [DECISION]
> **Prompt**: Remove speaking valve/cap/HME and remove INNER CANNULA. Can a suction catheter pass freely?

**Clinical Actions:**
- [ ] Remove inner tube (keep circuit-compatible spare inner tube ready if needed to re-attach Mapleson C).
- [ ] Attempt passage of a flexible suction catheter.

**Decision Branches:**
- **YES — Suction Catheter Passes & Ventilation Improves** → `bja-vent-fault`
- **NO — Suction Blocked → Deflate Cuff & Reassess** → `bja-3`

#### Node `bja-3` — Deflate Cuff (Pause Ventilation if Aerosol Risk) & Reassess [DECISION]
> **Prompt**: Deflate cuff completely. Look, listen & feel at mouth and stoma. Is oxygenation/ventilation improving?

**Clinical Actions:**
- [ ] Deflate cuff fully with 10 mL syringe.
- [ ] Check for upper-airway gas leak / improved oxygenation (in GREEN patent upper airway patients).

**Decision Branches:**
- **YES — Improving Around Deflated Cuff** → `bja-exchange`
- **NO — Persistent Failure → REMOVE TUBE & Execute Green/Red Rescue** → `bja-4`

#### Node `bja-exchange` — Controlled ICU Exchange Over Guide / Oral Securing [DISPOSITION]
> **Prompt**: Maintain oxygenation and perform controlled replacement with airway exchange catheter or fibreoptic scope.

**Recommended Immediate Calls**: icu, anaesthesia, ent

**Disposition**: ICU Airway Stabilization (Urgent Controlled Exchange)
- [x] Post-exchange CXR and capnography verified

#### Node `bja-4` — Remove Tracheostomy Tube & Staged Rescue (Green vs Red) [DISPOSITION]
> **Prompt**: Remove occluded/displaced tube and oxygenate per patient anatomy (Oral + Stoma for GREEN; Stoma-Only for RED).

**Clinical Actions:**
- [ ] GREEN (Patent Upper Airway): Occlude stoma with gauze/hand + oral BVM/LMA OR paediatric mask over stoma → Secondary: Oral intubation (uncut ETT past stoma) OR stoma 6.0 ETT.
- [ ] RED (Laryngectomy): Paediatric mask or LMA over stoma ONLY → Secondary: 6.0 cuffed ETT into stoma.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Disposition**: ICU / Operating Theatre (STAT Airway Rescue)
- [x] Waveform ETCO2 verified
- [x] Correct bedhead airway sign updated

### Algorithm: Tracheostomy Dislodgement (<7d vs ≥7d)

- **Presentation Trigger**: Partially or completely dislodged tracheostomy tube, sudden loss of ETCO2, neck crepitus
- **Start Node**: `trach-dis-1`
- **Keywords**: tracheostomy, dislodgement, decannulation, fell out, false passage, immature stoma

#### Node `trach-dis-1` — Stop Positive Pressure & Check Stoma Maturity [IMMEDIATE]
> **Prompt**: Do NOT bag forcefully into a potentially displaced tube. Remove displaced tube if uncertain & oxygenate face + stoma. How old is the stoma?

**Clinical Actions:**
- [ ] If no waveform ETCO2 or neck crepitus present, deflate cuff & remove the displaced tube.
- [ ] Apply high-flow O2 to BOTH face and stoma (stoma only if laryngectomy).
- [ ] Call Anaesthesia and ENT immediately.

**Contextual Pitfall Warning**: DO NOT keep bagging through a partially dislodged tube — causes massive subcutaneous emphysema and tension pneumomediastinum.

**Recommended Immediate Calls**: anaesthesia, ent

**Decision Branches:**
- **Stoma < 7 Days Old (OR Unknown Age)** (Immature tract — DO NOT blindly push tube back in.) → `trach-dis-immature`
- **Stoma ≥ 7 Days Old (Mature Tract)** (Tract epithelialized; gentle bougie/catheter-guided reinsertion possible.) → `trach-dis-mature`

#### Node `trach-dis-immature` — Immature Stoma (<7 Days) — Oral Intubation Preferred [DISPOSITION]
> **Prompt**: Cover stoma and ventilate orally via BVM/LMA, then perform standard ORAL intubation (uncut ETT past stoma).

**Clinical Actions:**
- [ ] Cover stoma lightly with sterile gauze and ventilate via bag-valve-mask over nose & mouth (for Green patent upper airway).
- [ ] Perform standard ORAL endotracheal intubation (advance cuff distal to stoma site).
- [ ] If laryngectomy (Red) or oral intubation impossible: ENT/Anaesthesia performs fibreoptic or surgical stoma re-cannulation.

**Contextual Pitfall Warning**: DO NOT attempt blind bedside reinsertion into a <7-day tracheostomy tract.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Disposition**: OR (ENT Revision) or ICU (STAT Airway Transfer)
- [x] Waveform ETCO2 verified
- [x] CXR for subcutaneous air or pneumothorax

#### Node `trach-dis-mature` — Mature Stoma (≥7 Days) — Guided Reinsertion [DECISION]
> **Prompt**: Attempt ONE gentle reinsertion using same-size or 1-size-smaller tube over suction catheter/bougie.

**Clinical Actions:**
- [ ] Position neck slightly extended; illuminate stoma.
- [ ] Pass soft suction catheter gently into visible tracheal lumen (never force).
- [ ] Slide lubricated tube (same size or 1 size smaller, or 6.0 cuffed ETT) into trachea.

**Decision Branches:**
- **Success — Square-Wave ETCO2 Confirmed** → `trach-dis-success`
- **Failed / Resistance / No ETCO2 → Oral Rescue** → `trach-dis-immature`

#### Node `trach-dis-success` — Reinsertion Confirmed — Stabilize & Admit [DISPOSITION]
> **Prompt**: Inflate cuff (20–30 cmH2O), secure flange ties, and confirm anatomical position.

**Disposition**: ICU / HDU Airway Observation (Urgent Follow-Up)
- [x] Continuous capnography maintained
- [x] CXR & ENT check arranged

### Algorithm: Bleeding Around Tracheostomy (Utley Manoeuvre)

- **Presentation Trigger**: Active haemorrhage, haemoptysis, or pulsatile tube/sentinel bleed
- **Start Node**: `trach-bld-1`
- **Keywords**: tracheostomy, bleeding, tracheoinnominate, fistula, hemorrhage, utley

#### Node `trach-bld-1` — Assess Haemorrhage Severity (Tracheo-Innominate Fistula) [DECISION]
> **Prompt**: Is bleeding massive, bright-red arterial, or preceded by a pulsating tube / sentinel bleed?

**Clinical Actions:**
- [ ] Activate Massive Transfusion Protocol & call ENT + Vascular/Thoracic Surgery STAT.
- [ ] Establish 2 large-bore IV lines; crossmatch 4–6 units PRBC; give TXA 1 g IV.

**Contextual Pitfall Warning**: DO NOT ignore a small "sentinel bleed" 1–3 weeks post-tracheostomy — 50% precede catastrophic tracheo-innominate artery fistula (TIF).

**Recommended Immediate Calls**: ent, anaesthesia, haematology

**Decision Branches:**
- **YES — Massive / Pulsatile / Suspected TIF** (Cuff over-inflation + Oral ETT + Utley Manoeuvre STAT.) → `trach-bld-tif`
- **NO — Slow Stomal Ooze (Haemodynamically Stable)** → `trach-bld-minor`

#### Node `trach-bld-tif` — Cuff Hyper-Inflation & Utley Manoeuvre [INTERVENTION]
> **Prompt**: Over-inflate cuff (35–50 mL), place distal ORAL ETT, and apply anterior digital compression (Utley manoeuvre) against sternum.

**Inline Anatomical / Vector SVG**: `utley`

**Clinical Actions:**
- [ ] Step 1: OVER-INFLATE tracheostomy cuff slowly up to 35–50 mL air to tamponade innominate artery.
- [ ] Step 2: Anaesthesia performs ORAL intubation (advance cuff distal to tracheostomy stoma).
- [ ] Step 3 (Utley Manoeuvre — Diagram below): If bleeding continues, remove tracheostomy tube once oral ETT is secure and insert gloved index finger through stoma anteriorly to compress innominate artery directly against the posterior sternum/manubrium.

**Contextual Pitfall Warning**: DO NOT release Utley digital pressure until surgical clamp control is achieved in the Operating Theatre.

**Recommended Immediate Calls**: ent, anaesthesia, icu

**Decision Branches:**
- **Proceed to Emergency OR Transfer** → `trach-bld-or`

#### Node `trach-bld-or` — Immediate Operating Theatre Transfer [DISPOSITION]
> **Prompt**: STAT transfer to OR maintaining continuous Utley compression or hyper-inflated cuff.

**Disposition**: Emergency Operating Theatre (Vascular / Thoracic + ENT) (Code Crimson — Immediate OR)
- [x] Distal oral ETT confirmed via ETCO2
- [x] 1:1:1 MTP blood products accompanying patient

#### Node `trach-bld-minor` — Local Control & Sentinel Bleed Evaluation [DISPOSITION]
> **Prompt**: Apply topical TXA-soaked gauze/Kaltostat and arrange urgent ENT endoscopic inspection.

**Disposition**: ENT Observation / HDU (never discharge sentinel bleed uninvestigated) (Urgent ENT Review)
- [x] Coag profile checked; ENT nasendoscopy/bronchoscopy arranged

---

## 2. Total Laryngectomy Emergency

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: anaesthesia, ent, icu
- **Evidence Source**: RCEM / National Tracheostomy Safety Project (NTSP) — *Emergency Laryngectomy Management (RED Algorithm)* (2023) [Expert Consensus · Level B]
- **Citation**: NTSP / RCEM Emergency Laryngectomy Management Algorithm.
- **Evidence Summary**: RED Algorithm for end-stoma breathers: stoma-only high-flow O2, remove humidification cover/button/inner tube (preserve TEP), paediatric mask or LMA over stoma, and 6.0 cuffed ETT stoma intubation.
- **Reference URL**: https://www.tracheostomy.org.uk/

### Common Clinical Pitfalls (DO NOT)
- DO NOT attempt oral/nasal intubation — a total laryngectomy has ZERO anatomical connection between mouth/nose and trachea (RED Algorithm).
- DO NOT apply oxygen only to the face or perform oral BVM — it cannot reach the lungs.
- DO NOT remove a tracheoesophageal puncture (TEP) voice prosthesis.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Announce "RED ALGORITHM — TOTAL LARYNGECTOMY (STOMA ONLY)" to entire Resus team.
2. Call Anaesthesia and ENT Surgical Registrar STAT.
3. Place bedside "NECK ONLY — NO ORAL INTUBATION" alert card above patient head.

- **Stock & Equipment**: Paediatric facemask (size 1–2), LMA size 2, and cuffed 6.0 mm ETT kept in Difficult Airway Cart.
- **Admission / Transfer Criteria**: ICU/HDU admission for any laryngectomy airway obstruction, stomal bleeding, or tube replacement.

### Algorithm: RCEM Red: Emergency Laryngectomy Management

- **Presentation Trigger**: Hypoxia or airway obstruction in a total laryngectomy (neck-only breather)
- **Pathway Color Tag**: RED
- **Start Node**: `lar-red-1`
- **Keywords**: laryngectomy, red algorithm, rcem, ntsp, neck breather, stoma, tep, paediatric mask

#### Node `lar-red-1` — Call Airway Expert · Assess Breathing at Stoma [IMMEDIATE]
> **Prompt**: Call airway expert help. Look, listen & feel at mouth and laryngectomy stoma (Mapleson C / capnography). Is the patient breathing?

**Inline Anatomical / Vector SVG**: `trach_vs_laryngectomy`

**Clinical Actions:**
- [ ] Call airway expert help immediately.
- [ ] Look, listen & feel at mouth and laryngectomy stoma.
- [ ] Use Mapleson C ("Waters circuit") & waveform capnography if available.

**Contextual Pitfall Warning**: Laryngectomy patients have an END STOMA and CANNOT be oxygenated via mouth or nose.

**Recommended Immediate Calls**: anaesthesia, ent

**Decision Branches:**
- **YES — Breathing (Apply High-Flow O2 to Stoma)** (If ANY doubt whether laryngectomy vs tracheostomy, apply O2 to face also.) → `lar-red-2`
- **NO — Not Breathing (Call Resus Team & CPR if No Signs of Life)** → `lar-red-2`

#### Node `lar-red-2` — Assess Laryngectomy Stoma Patency [DECISION]
> **Prompt**: Remove humidification cover/button & inner tube (preserve TEP!). Can you pass a suction catheter?

**Clinical Actions:**
- [ ] Apply high-flow O2 to laryngectomy stoma (or start CPR + stoma O2 if not breathing).
- [ ] Remove humidification cover or button (if present) and inner tube (if present; note some inner tubes need re-inserting for circuits).
- [ ] DO NOT remove a tracheoesophageal puncture (TEP) prosthesis.
- [ ] Pass flexible suction catheter into stoma.

**Decision Branches:**
- **YES — Suction Catheter Passes Freely** → `lar-red-disp`
- **NO — Cannot Pass → Deflate Cuff (if present) & Reassess** → `lar-red-3`

#### Node `lar-red-3` — Deflate Cuff & Remove Tube from Stoma if Unstable [DECISION]
> **Prompt**: Deflate cuff (if present). If NOT stable/improving, REMOVE tube from laryngectomy stoma and re-apply O2 to stoma. Is patient breathing?

**Decision Branches:**
- **YES — Stable / Breathing Restored** → `lar-red-disp`
- **NO — Apnoeic / Failing → Primary & Secondary Stoma Oxygenation** → `lar-red-4`

#### Node `lar-red-4` — Primary & Secondary Laryngectomy Stoma Rescue [DISPOSITION]
> **Prompt**: Ventilate STOMA ONLY (Paediatric mask or LMA over stoma), then intubate STOMA with small trach or 6.0 cuffed ETT.

**Clinical Actions:**
- [ ] Primary emergency oxygenation: Paediatric face mask applied to stoma OR LMA applied to stoma.
- [ ] Secondary emergency oxygenation: Attempt intubation of laryngectomy stoma with small tracheostomy tube or 6.0 mm cuffed ETT (consider Aintree catheter + fibreoptic scope / Bougie / Airway exchange catheter).
- [ ] Confirm ventilation strictly with waveform capnography.

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Disposition**: ICU / ENT Airway Unit (Code Airway STAT)
- [x] Waveform ETCO2 confirmed
- [x] CXR to exclude mainstem intubation

#### Node `lar-red-disp` — Stoma Patent / Breathing — Humidification & ABCDE [DISPOSITION]
> **Prompt**: Perform tracheal suction, ventilate via stoma if apnoeic, and continue ABCDE assessment.

**Disposition**: ENT / ICU Observation (Urgent Specialist Review)
- [x] Heated humidified O2 to stoma
- [x] TEP integrity confirmed

---

## 3. LVAD Emergency

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: vad_team, icu, cardiology
- **Evidence Source**: Resuscitation Council UK / ICS / BACCN / BSHF / SCTS / BCS — *UK Adult Implantable LVAD Emergency Algorithm & Algorithms 1–3* (2023) [Class I · Level B-NR]
- **Citation**: Resuscitation Council UK / BSHF / ICS Adult Implantable LVAD Emergency Algorithm & Joint Royal Colleges LVAD Algorithms 1–3.
- **Evidence Summary**: Provides dual-responder initial management (max 2-min CPR delay while troubleshooting controller screen, batteries, driveline, and VT/VF), 8-point Circulatory Failure check (Doppler MAP 60–90 mmHg, flow >3.0 L/min, ETCO2 >2 kPa / >15 mmHg), and <10-day post-op chest reopening vs >10-day CPR/4H-4T pathways.
- **Reference URL**: https://www.resus.org.uk/

### Common Clinical Pitfalls (DO NOT)
- DO NOT start chest compressions immediately — delay for a MAXIMUM of 2 minutes while checking controller, power, driveline, and humming!
- DO NOT expect or try to feel a pulse, automated NIBP, or standard pulse oximeter reading in a continuous-flow LVAD patient.
- DO NOT shock VF/VT if the LVAD patient is RESPONSIVE — transfer urgently for cardioversion under sedation/GA.
- DO NOT disconnect both batteries/power sources simultaneously.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Activate Hospital Emergency / Resuscitation Team ("CARDIAC ARREST" + Location) AND contact 24/7 VAD Coordinator immediately.
2. Delay chest compressions for a MAXIMUM of 2 minutes while Lone Responder checks LVAD controller/power/hum and Team establishes A, B, ECG/Defib (AP pads preferred).
3. Keep Vascular Doppler probe + manual cuff + patient’s spare LVAD bag (backup controller, batteries, mains adapter, charger) at bedside.

- **Stock & Equipment**: Vascular Doppler probe + gel + AP defibrillation pads stationed in Resus Bay 1.
- **Admission / Transfer Criteria**: Transfer all LVAD emergencies to Cardiac ICU / VAD Centre accompanied by spare controller, batteries, mains adapter, and battery charger.

### Algorithm: UK Adult Implantable LVAD Emergency

- **Presentation Trigger**: Implantable LVAD patient unresponsive +/- not breathing normally
- **Pathway Color Tag**: RED
- **Start Node**: `lvad-uk-1`
- **Keywords**: lvad, cardiac arrest, resus, blank controller, driveline, high watts, low flow, circulatory failure, chest re-opening

#### Node `lvad-uk-1` — Activate Resus Team · Delay CPR Max 2 Min · Check LVAD [IMMEDIATE]
> **Prompt**: DO NOT start chest compressions immediately (delay MAX 2 minutes). Lone responder checks LVAD; Team manages A, B, ECG/Defib.

**Bedside Timer / Guard**: `2:00 MAX CPR DELAY` (countdown, 120s, auto-start)

**Clinical Actions:**
- [ ] Call Hospital Cardiac Arrest / Resuscitation Team — State "CARDIAC ARREST" + exact location.
- [ ] Lone / Initial Responder: STEP 1 — Check is LVAD working? (Listen for hum, inspect controller screen).
- [ ] Second Responder / Team: A — Ensure patent airway, give O2; B — Assess breathing, start BVM if needed; C — Attach ECG leads / Defibrillator (AP pad position preferred).

**Contextual Pitfall Warning**: DO NOT start chest compressions before spending up to 2 minutes troubleshooting LVAD power/driveline/controller.

**Recommended Immediate Calls**: vad_team, icu, cardiology

**Decision Branches:**
- **Select What LVAD Screen / ECG Displays (Troubleshooting)** (Blank controller, Driveline disconnect, Low battery, High watts, Low flow, or VT/VF.) → `lvad-uk-screen`
- **Controller Normal / Interventions Done → STEP 2: Circulatory Failure Check** → `lvad-uk-step2`

#### Node `lvad-uk-screen` — STEP 1: LVAD Screen & ECG Troubleshooting [DECISION]
> **Prompt**: Select the active LVAD screen message or ECG finding (perform interventions, then proceed to Step 2):

**Clinical Actions:**
- [ ] BLANK CONTROLLER: Push any button → Check/change power source → Change controller if display stays blank.
- [ ] CONTROLLER FAILURE: Change controller (connect charged battery/mains to spare controller first).
- [ ] HIGH WATTS: Suspect pump thrombus!
- [ ] DRIVELINE DISCONNECTION: Reconnect driveline & examine entire length; if fractured, manipulate & secure with tape.
- [ ] LOW / CRITICAL BATTERY: Change battery OR attach to mains power.
- [ ] LOW FLOW ALARM: Passive leg raise → if effective give fluid bolus (e.g. 250 mL) → Aim MAP >60 and <90 mmHg → Consider bleeding (e.g. GI, check Hb).
- [ ] ECG SHOWS VT/VF (AP pad position preferred): Unresponsive → Defibrillation (attempt 3 stacked shocks). Responsive → Consider Amiodarone or Lignocaine; DC cardioversion with sedation.

**Recommended Immediate Calls**: vad_team, cardiology

**Decision Branches:**
- **Interventions Performed → STEP 2: Check Circulatory Failure** → `lvad-uk-step2`

#### Node `lvad-uk-step2` — STEP 2: Is the Patient in Circulatory Failure? [DECISION]
> **Prompt**: Check ALL 8 perfusion & pump criteria (and Echo if available: RV failure, Suction, Tamponade, Thrombus):

**Clinical Actions:**
- [ ] 1. Patient responsive?
- [ ] 2. Patient not cyanosed?
- [ ] 3. Capillary refill < 3 seconds?
- [ ] 4. Doppler MAP 60–90 mmHg?
- [ ] 5. LVAD humming?
- [ ] 6. Controller display normal?
- [ ] 7. LVAD flow rate > 3.0 L/min?
- [ ] 8. Endotracheal ETCO2 > 2 kPa (> 15 mmHg)?
- [ ] Once Echo available: Look for RV Failure, Suction, Tamponade, or Thrombus.

**Decision Branches:**
- **NO — Circulation Adequate (Not in Circulatory Failure)** (Proceed to STEP 3: Non-LVAD related assessment.) → `lvad-uk-step3`
- **YES — Circulatory Failure & < 10 Days Post-Op** (Chest re-opening pathway!) → `lvad-uk-reopen`
- **YES — Circulatory Failure & > 10 Days Post-Op** (Start CPR & standard ALS + 4Hs/4Ts.) → `lvad-uk-cpr`

#### Node `lvad-uk-step3` — STEP 3: Non-LVAD Related — Complete A to E [DISPOSITION]
> **Prompt**: Circulation is supported. Complete A to E assessment; if low GCS, exclude STROKE as priority.

**Clinical Actions:**
- [ ] Perform complete A to E assessment.
- [ ] If low GCS: STAT CT Head + CTA (exclude haemorrhagic or ischaemic stroke immediately).
- [ ] Examine for bleeding (GI bleed), sepsis, hypoxia, or metabolic derangement.

**Recommended Immediate Calls**: vad_team, icu

**Disposition**: CT Scanner / ICU / VAD Centre (High Priority A–E Assessment)
- [x] Doppler MAP 60–90 mmHg maintained
- [x] Spare LVAD equipment accompanying patient

#### Node `lvad-uk-reopen` — < 10 Days Post-Op: Chest Re-Opening [DISPOSITION]
> **Prompt**: STAT Cardiothoracic surgical activation for emergency chest re-opening / re-sternotomy.

**Clinical Actions:**
- [ ] Call Cardiothoracic Surgery + VAD Team STAT for emergency sternotomy / tamponade relief.
- [ ] Start CPR while preparing surgical re-opening team if full arrest.
- [ ] Consider temporary mechanical circulatory support (VA-ECMO).

**Recommended Immediate Calls**: vad_team, icu, cardiology

**Disposition**: Emergency Re-Sternotomy / Cardiothoracic ICU (Code Crimson STAT)
- [x] Surgical re-opening tray at bedside

#### Node `lvad-uk-cpr` — > 10 Days Post-Op: Start CPR & Standard ALS [DISPOSITION]
> **Prompt**: Start manual CPR & standard ALS. Correct 4Hs & 4Ts; consider temporary mechanical circulatory support.

**Clinical Actions:**
- [ ] Start high-quality CPR and follow standard ALS guidelines (defibrillate VT/VF safely; give Adrenaline per ALS).
- [ ] Consider & correct 4Hs: Hypoxia, Hypovolaemia, Hypo/hyperkalaemia, Hypothermia.
- [ ] Consider & correct 4Ts: Thrombosis (pump/coronary/PE), Tamponade, Tension pneumothorax, Toxin.
- [ ] Consider temporary mechanical circulatory support (VA-ECMO).

**Recommended Immediate Calls**: vad_team, cardiology, icu

**Disposition**: Cardiac ICU / VA-ECMO / VAD Centre (Code Blue STAT)
- [x] POCUS performed for Tamponade / RV Failure / Suction
- [x] 4Hs & 4Ts systematically addressed

### Algorithm: LVAD Algorithm 1: Initial Assessment

- **Presentation Trigger**: Collapse or sudden deterioration in an adult LVAD patient (Pre-hospital / ED Arrival)
- **Start Node**: `la1-1`
- **Keywords**: lvad, algorithm 1, initial assessment, signs of life, humming, alarm

#### Node `la1-1` — A · Rapid Assessment (Do NOT Feel for a Pulse) [ARRIVAL]
> **Prompt**: Check for signs of life. Do NOT expect or try to feel a pulse. Contact VAD centre (do not delay emergency treatment).

**Clinical Actions:**
- [ ] Refer to patient-specific protocol (if available) and obtain relevant info from patient/family/bystanders.
- [ ] Try to contact VAD centre before/on arrival — NEVER delay emergency treatment.
- [ ] Check for signs of life and normal breathing.

**Contextual Pitfall Warning**: Do NOT expect or try to feel a pulse.

**Recommended Immediate Calls**: vad_team

**Decision Branches:**
- **Unresponsive & NOT Breathing Normally (or Agonal Gasps)** → `la1-notbreathing`
- **Unresponsive OR Responsive & Breathing Normally** (Breathing normally includes breathlessness, rapid breathing, and wheezing.) → `la1-breathing`

#### Node `la1-notbreathing` — C · Loud Alarm from External Controller? [DECISION]
> **Prompt**: Check external controller for a loud alarm. If NO loud alarm, place stethoscope over heart — is humming audible?

**Clinical Actions:**
- [ ] Listen for a loud alarm from the external controller.
- [ ] If no alarm, place stethoscope directly over left chest/heart and listen for mechanical hum.

**Decision Branches:**
- **Loud Alarm YES — OR No Humming Sound Audible → Algo 2** (Assume LVAD failure! Start ventilation 10–12 breaths/min (no CPR yet) — launches Troubleshooting.) → `la1-goto-2` [Cross-Route: `lvad/lvad-algo-2`]
- **No Alarm AND Humming Sound Audible → Algo 3** (Pump is spinning — launches Adequate Circulation assessment.) → `la1-goto-3` [Cross-Route: `lvad/lvad-algo-3`]

#### Node `la1-breathing` — Treat Breathing Problems · Check Alarm & Heart Hum [DECISION]
> **Prompt**: Assess & treat breathing (hypoxia, pneumothorax, wheezing). Check for loud alarm or absent heart hum.

**Clinical Actions:**
- [ ] Assess and treat problems with breathing (O2 for hypoxia, rule out pneumothorax, bronchodilators for wheezing).
- [ ] Check external controller for loud alarm; if none, auscultate heart for humming sound.

**Decision Branches:**
- **Loud Alarm YES — OR No Humming Sound Audible → Algo 2** (Assume LVAD failure — transitions immediately to Troubleshooting (Algo 2).) → `la1-goto-2` [Cross-Route: `lvad/lvad-algo-2`]
- **No Alarm AND Humming Sound Audible → Algo 3** (Pump running — transitions immediately to Adequate Circulation (Algo 3).) → `la1-goto-3` [Cross-Route: `lvad/lvad-algo-3`]

#### Node `la1-goto-2` — Assume LVAD Failure → Launch Algorithm 2 [INTERVENTION]
> **Prompt**: Start ventilation at 10–12 breaths/min if not breathing. Do NOT start chest compressions yet.

**Clinical Actions:**
- [ ] Ensure patient is ventilated at 10–12 breaths/min if apnoeic while troubleshooting external hardware.

**Decision Branches:**
- **Continue Immediately to LVAD Troubleshooting (Algo 2)** → `la2-1` [Cross-Route: `lvad/lvad-algo-2`]

#### Node `la1-goto-3` — Pump Spinning (Hum Present) → Launch Algorithm 3 [INTERVENTION]
> **Prompt**: LVAD is spinning. Proceed immediately to verify adequate circulation and manage VT/VF.

**Decision Branches:**
- **Continue Immediately to Adequate Circulation (Algo 3)** → `la3-1` [Cross-Route: `lvad/lvad-algo-3`]

### Algorithm: LVAD Algorithm 2: Troubleshooting

- **Presentation Trigger**: No humming sound heard in chest OR loud alarm from LVAD
- **Start Node**: `la2-1`
- **Keywords**: lvad, algorithm 2, troubleshooting, driveline, battery, spare controller, cable fracture

#### Node `la2-1` — Expose Hardware · Check Driveline & Power Connections [INTERVENTION]
> **Prompt**: Assume LVAD not working — try to restart. Secure driveline and replace discharged batteries/connect mains.

**Clinical Actions:**
- [ ] Expose controller, power source, and driveline.
- [ ] Ensure driveline is firmly attached to controller.
- [ ] Ensure all connections between controller and working power source (charged battery or mains power) are secure.
- [ ] Assess battery charge by pressing charge indicator button on battery; replace discharged batteries with charged battery or mains power adaptor.

**Recommended Immediate Calls**: vad_team

**Decision Branches:**
- **YES — LVAD Restarted (Humming Sound Audible)** → `la2-goto-3`
- **NO — Still Silent / Not Restarted → Swap Controller** → `la2-2`

#### Node `la2-2` — Swap to Spare Controller [INTERVENTION]
> **Prompt**: Attach charged battery (or mains power) to SPARE controller. Detach driveline from old controller and connect to new controller.

**Clinical Actions:**
- [ ] Connect charged battery or mains power to the SPARE controller FIRST.
- [ ] Detach driveline from the failed controller and immediately lock it into the new spare controller.
- [ ] Auscultate chest again: Is humming sound audible?

**Decision Branches:**
- **YES — LVAD Restarted (Humming Audible)** → `la2-goto-3`
- **NO — Still Silent → Check Cable Fracture** → `la2-3`

#### Node `la2-3` — Suspect Driveline Cable Fracture → Go to Algorithm 3 [INTERVENTION]
> **Prompt**: Quickly but gently manipulate driveline to try to restore broken contact. If successful, stabilise driveline with tape, then verify circulation in Algorithm 3.

**Clinical Actions:**
- [ ] Gently flex/manipulate driveline segments near strain relief/exit while listening for pump restart.
- [ ] If contact restored, tape driveline securely in that position.

**Recommended Immediate Calls**: vad_team, icu

**Decision Branches:**
- **Proceed Immediately to Adequate Circulation (Algo 3)** → `la3-1` [Cross-Route: `lvad/lvad-algo-3`]

#### Node `la2-goto-3` — LVAD Restarted → Verify Circulation in Algorithm 3 [INTERVENTION]
> **Prompt**: Humming sound restored! Transition immediately to Adequate Circulation (Algo 3) to assess perfusion & VT/VF.

**Decision Branches:**
- **Continue Immediately to Adequate Circulation (Algo 3)** → `la3-1` [Cross-Route: `lvad/lvad-algo-3`]

### Algorithm: LVAD Algorithm 3: Adequate Circulation

- **Presentation Trigger**: Verify circulation, manage VT/VF, hypovolaemia, CPR decision & VAD transfer
- **Start Node**: `la3-1`
- **Keywords**: lvad, algorithm 3, adequate circulation, vt, vf, passive leg raise, cpr, transfer

#### Node `la3-1` — Patient Now Responsive? · Check Rhythm (VF / VT) [DECISION]
> **Prompt**: Do NOT expect to measure standard BP or use a pulse oximeter. Check responsiveness and ECG rhythm.

**Clinical Actions:**
- [ ] Check patient responsiveness (AVPU).
- [ ] Assess ECG monitor for Ventricular Fibrillation (VF) or Ventricular Tachycardia (VT).

**Decision Branches:**
- **UNRESPONSIVE + VF / VT → Defibrillation / DC Cardioversion** (Shock immediately, then assess circulation.) → `la3-shock`
- **RESPONSIVE + VF / VT → DO NOT Shock** (Arrange urgent transfer to ED/VAD centre for treatment under sedation or GA.) → `la3-noshock`
- **NO VF / VT → Check Expected Circulation** → `la3-2`

#### Node `la3-shock` — Defibrillate / Cardiovert Unresponsive VT/VF [INTERVENTION]
> **Prompt**: Deliver defibrillation / DC cardioversion (AP pad position preferred), then evaluate Expected Circulation.

**Clinical Actions:**
- [ ] Deliver biphasic shock immediately (do not place pad over driveline site).

**Decision Branches:**
- **Assess Expected Circulation** → `la3-2`

#### Node `la3-noshock` — Responsive VT/VF — Do NOT Shock Awake Patient [INTERVENTION]
> **Prompt**: Do NOT shock! Arrange urgent transfer/treatment under sedation or GA, and evaluate Expected Circulation.

**Contextual Pitfall Warning**: Awake LVAD patients can tolerate VT/VF temporarily — shocking without sedation causes severe distress.

**Decision Branches:**
- **Assess Expected Circulation** → `la3-2`

#### Node `la3-2` — Is Expected Circulation Adequate? [DECISION]
> **Prompt**: Check Expected Circulation: Cap refill < 2–3 sec, no cyanosis/pallor, Mean BP (if recordable) 60–90 mmHg, LVAD flow > 3.0 L/min.

**Clinical Actions:**
- [ ] Capillary refill < 2–3 seconds.
- [ ] No cyanosis or pallor.
- [ ] Mean BP (Doppler/arterial line) 60–90 mmHg.
- [ ] LVAD flow rate (where displayed) > 3.0 L/min.

**Contextual Pitfall Warning**: Persistently low LVAD flow or a "HIGH POWER" alarm message on controller can indicate LVAD thrombosis.

**Decision Branches:**
- **YES — Circulation Adequate → D & E Assessment & VAD Transfer** → `la3-de`
- **NO (Unresponsive) → Consider CPR + Passive Leg Raise / IV Fluid** → `la3-cpr-hypo`
- **NO (Responsive) → Assess Hypovolaemia (Passive Leg Raise / IV Fluid)** → `la3-hypo`

#### Node `la3-cpr-hypo` — Consider CPR + Hypovolaemia Resuscitation [DISPOSITION]
> **Prompt**: Consider CPR (Adrenaline may be given per standard ALS guidelines) AND perform passive leg raise / IV fluid if preload-responsive.

**Clinical Actions:**
- [ ] Start manual CPR if circulation remains inadequate in unresponsive patient (give Adrenaline per ALS).
- [ ] Assess for hypovolaemia: perform PASSIVE LEG RAISE and maintain if LVAD flow or clinical condition improves; consider IV fluid bolus.
- [ ] Proceed to D & E (stroke, bleeding, infection) and VAD centre transfer.

**Recommended Immediate Calls**: vad_team, icu, cardiology

**Disposition**: Cardiac ICU / VAD Centre Transfer (Code Blue + MCS STAT)
- [x] Transfer spare controller, batteries, mains adapter & battery charger

#### Node `la3-hypo` — Hypovolaemia & Low-Flow Assessment → D & E [DISPOSITION]
> **Prompt**: Perform passive leg raise; maintain if LVAD flow/clinical state improves and consider IV fluid, then complete D & E.

**Clinical Actions:**
- [ ] Perform passive leg raise; give cautious IV fluid bolus (e.g. 250 mL) if responsive.
- [ ] D: Assess AVPU, pupils, evidence of stroke, blood glucose, drugs.
- [ ] E: Examine further, especially for GI bleeding or driveline/systemic infection.

**Recommended Immediate Calls**: vad_team, icu

**Disposition**: VAD Centre / ICU Transfer (Urgent Specialist Transfer)
- [x] Bring spare controller, batteries, mains adapter & charger; continually reassess (return to Algo 1)

#### Node `la3-de` — D & E Assessment · Transfer to VAD Centre [DISPOSITION]
> **Prompt**: Complete neurological (D) and bleeding/infection (E) exams, transfer with all spare LVAD equipment, and continually reassess.

**Clinical Actions:**
- [ ] D: Assess disabilities (AVPU, pupils, evidence of stroke, blood glucose, drugs); treat in standard manner.
- [ ] E: Examine patient further, looking especially for evidence of bleeding or infection.
- [ ] Make transfer arrangements with VAD centre; transfer spare LVAD equipment (controller, batteries, mains adapter, battery charger).
- [ ] Continually reassess patient (return to Algorithm 1 if deterioration recurs).

**Recommended Immediate Calls**: vad_team

**Disposition**: VAD Centre / Cardiac ICU (Urgent VAD Transfer)
- [x] Spare controller + batteries + mains adapter + charger packed with patient

---

## 4. Pacemaker Malfunction

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: cardiology, icu
- **Evidence Source**: ESC / Heart Rhythm Society (HRS) — *Cardiac Pacing & Emergency Device Troubleshooting* (2023) [Class I · Level B]
- **Citation**: Glikson M et al. Eur Heart J 2021; HRS Device Troubleshooting Update 2023.
- **Evidence Summary**: Differentiates failure to pace (oversensing) vs failure to capture (threshold rise); magnet treats oversensing while transcutaneous pacing + electrolyte correction treat failure to capture.
- **Reference URL**: https://www.escardio.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT place defibrillation/pacing pads directly over the pacemaker generator (stay ≥8 cm away or use AP position).
- DO NOT assume a magnet fixes failure to capture — a magnet forces asynchronous pacing (DOO/VOO) at fixed rate, which will NOT overcome high capture thresholds.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Apply AP transcutaneous pacing pads immediately on unstable bradycardic pacemaker patients.
2. Call Cardiology On-Call for emergency device programmer interrogation.
3. If refractory to external pacing, prepare transvenous pacing kit in Resus.

- **Stock & Equipment**: Clinical ring magnet stored in Resus Defibrillator Cart; Transvenous pacing kit in Procedure Room Cabinet C.
- **Admission / Transfer Criteria**: All pacemaker failures to capture, output loss, or symptomatic PMT require CCU/Cardiology admission.

### Algorithm: Pacemaker Failure to Capture / Pace

- **Presentation Trigger**: Symptomatic bradycardia, syncope, or pauses with pacing spikes without QRS (or absent spikes)
- **Start Node**: `pm-1`
- **Keywords**: pacemaker, failure to capture, failure to pace, bradycardia, magnet, transcutaneous, hyperkalaemia

#### Node `pm-1` — Pads On & Check 12-Lead ECG Pattern [IMMEDIATE]
> **Prompt**: Apply transcutaneous pacing pads (AP position, ≥8 cm from generator). Inspect spikes vs QRS.

**Clinical Actions:**
- [ ] Place defibrillator/pacing pads in Anteroposterior (AP) position.
- [ ] Start transcutaneous pacing immediately if unstable (hypotension, altered mental status, shock).
- [ ] Send STAT K+, Mg2+, troponin, digoxin level, and CXR (check for lead fracture/dislodgement).

**Contextual Pitfall Warning**: DO NOT delay transcutaneous pacing while hunting for a magnet in an unstable bradycardic patient.

**Recommended Immediate Calls**: cardiology

**Decision Branches:**
- **NO Pacing Spikes Visible (Failure to Output / Oversensing)** → `pm-oversensing`
- **Spikes Visible, NO QRS Capture (Failure to Capture)** → `pm-capture`

#### Node `pm-oversensing` — Magnet Application for Oversensing [INTERVENTION]
> **Prompt**: Apply clinical magnet directly over pacemaker pocket to force asynchronous pacing (VOO/DOO).

**Clinical Actions:**
- [ ] Place clinical magnet securely over generator pocket.
- [ ] If asynchronous pacing resumes with good haemodynamics, tape magnet in place until Cardiology interrogation.
- [ ] If NO spikes even with magnet: commence transcutaneous pacing.

**Recommended Immediate Calls**: cardiology

**Decision Branches:**
- **Proceed to Cardiology Disposition** → `pm-disp`

#### Node `pm-capture` — Transcutaneous Pacing & Reversible Threshold Causes [INTERVENTION]
> **Prompt**: A magnet will NOT fix failure to capture. Pace externally and reverse hyperkalaemia/ischemia.

**Clinical Actions:**
- [ ] Titrate transcutaneous pacing mA until consistent electrical AND mechanical pulse capture.
- [ ] Correct HYPERKALAEMIA STAT (Calcium Chloride 10% 10 mL IV + Insulin/Dextrose).
- [ ] Consider Isoproterenol infusion (2–10 mcg/min) if external pacing fails; prepare transvenous wire.

**Contextual Pitfall Warning**: Confirm mechanical pulse capture (arterial line/femoral pulse), not just electrical pacing spikes on monitor.

**Recommended Immediate Calls**: cardiology, icu

**Decision Branches:**
- **Proceed to CCU / Cath Lab Disposition** → `pm-disp`

#### Node `pm-disp` — Cardiology Interrogation & CCU Admission [DISPOSITION]
> **Prompt**: Maintain pacing stability until Cardiology reprograms or revises lead/generator.

**Disposition**: CCU / Electrophysiology Lab (STAT Cardiology Admission)
- [x] Confirmed consistent mechanical capture
- [x] Electrolytes & CXR reviewed

### Algorithm: Pacemaker-Mediated Tachycardia

- **Presentation Trigger**: Rapid wide-complex paced tachycardia at upper tracking rate
- **Start Node**: `pm-pmt-1`
- **Keywords**: pacemaker, pmt, tachycardia, magnet, upper rate

#### Node `pm-pmt-1` — Break Reentry Loop with Clinical Magnet [INTERVENTION]
> **Prompt**: Confirm paced tachycardia on 12-lead ECG and place clinical magnet over generator.

**Clinical Actions:**
- [ ] Apply clinical magnet over pacemaker generator — switches mode to asynchronous (DOO), interrupting retrograde VA conduction loop.
- [ ] Once rhythm reverts to baseline paced rate, remove magnet and observe.

**Recommended Immediate Calls**: cardiology

**Decision Branches:**
- **Proceed to Device Interrogation** → `pm-pmt-disp`

#### Node `pm-pmt-disp` — Cardiology Reprogramming (PVARP Adjustment) [DISPOSITION]
> **Prompt**: Arrange Cardiology interrogation to adjust post-ventricular atrial refractory period.

**Disposition**: Cardiology / Telemetry Unit (Urgent Device Interrogation)
- [x] 12-lead ECG before and after magnet recorded

---

## 5. ICD Malfunction / Shocks

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: cardiology, icu
- **Evidence Source**: HRS / ESC — *Management of Cardiac Implantable Electronic Devices in Acute Care* (2023) [Class I · Level B]
- **Citation**: HRS/EHRA Consensus Statement on CIED Emergencies 2023.
- **Evidence Summary**: Differentiates inappropriate shocks (tape magnet to suspend tachy-therapy) from appropriate VT/VF storm (treat arrhythmia aggressively while placing external pads).
- **Reference URL**: https://www.hrsonline.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT leave a magnet off an awake patient receiving repeated inappropriate shocks (e.g., rapid AF or lead fracture noise).
- DO NOT forget: placing a magnet over an ICD suspends SHOCK therapies ONLY — it does NOT turn off bradycardia pacing.
- DO NOT leave external defibrillator pads off once an ICD is disabled with a magnet!

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Apply external defibrillator pads (AP position) immediately whenever managing an ICD shock patient.
2. Call Cardiology On-Call for emergency ICD interrogation.
3. Keep clinical ring magnet taped in place ONLY under continuous ECG monitoring.

- **Stock & Equipment**: Clinical ring magnet stored in Resus Defibrillator Cart.
- **Admission / Transfer Criteria**: All ICD shock clusters (appropriate or inappropriate) require CCU admission and device interrogation.

### Algorithm: Inappropriate vs Appropriate ICD Shocks

- **Presentation Trigger**: Patient receiving recurrent ICD shocks in ED
- **Start Node**: `icd-1`
- **Keywords**: icd, shocks, magnet, lead fracture, inappropriate shock, storm

#### Node `icd-1` — Attach External Pads & Verify True Rhythm [DECISION]
> **Prompt**: Place continuous ECG + external defib pads. Are shocks triggered by true VT/VF or inappropriate (AF/SVT/noise)?

**Clinical Actions:**
- [ ] Apply external defibrillator pads (AP position, ≥8 cm from generator).
- [ ] Assess rhythm strip: true VT/VF vs rapid AF, SVT, or baseline electrical noise (lead fracture).
- [ ] Call Cardiology for urgent interrogation.

**Recommended Immediate Calls**: cardiology

**Decision Branches:**
- **INAPPROPRIATE Shocks (AF / SVT / Artifact / Lead Noise)** → `icd-inappropriate`
- **APPROPRIATE Shocks (True Recurrent VT / VF)** → `icd-appropriate`

#### Node `icd-inappropriate` — Tape Magnet Over ICD & Treat Trigger [DISPOSITION]
> **Prompt**: Place and tape clinical magnet directly over ICD generator to disable tachy-therapies.

**Clinical Actions:**
- [ ] Tape clinical magnet directly over ICD pocket.
- [ ] Verify external defibrillator pads remain attached and staff stay at bedside.
- [ ] Treat underlying cause: rate-control rapid AF/SVT or immobilize arm if lead fracture noise.

**Contextual Pitfall Warning**: ICD magnet suspends SHOCKS ONLY — bradycardia pacing continues normally.

**Recommended Immediate Calls**: cardiology

**Disposition**: CCU / Telemetry for Device Interrogation & Lead Check (Urgent Cardiology Interrogation)
- [x] CXR ordered to check lead integrity
- [x] External pads maintained

#### Node `icd-appropriate` — Electrical Storm Protocol [DISPOSITION]
> **Prompt**: Sedate patient, give IV beta-blockade + Amiodarone, correct electrolytes, and treat ischemia.

**Clinical Actions:**
- [ ] Provide IV analgesia/sedation (Fentanyl + Midazolam or Propofol if intubated).
- [ ] Give IV Propranolol or Esmolol + IV Amiodarone 300 mg bolus.
- [ ] Correct K+ > 4.0 mmol/L and MgSO4 2 g IV.

**Recommended Immediate Calls**: cardiology, icu

**Disposition**: CCU / Urgent Cath Lab or Ablation Suite (STAT Cardiology Escalation)
- [x] Troponin, electrolytes, and bedside echo ordered

---

## 6. Can't Intubate, Can't Oxygenate (CICO) — eFONA

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: anaesthesia, ent, icu
- **Evidence Source**: Difficult Airway Society (DAS) / Vortex Approach — *DAS Guidelines for Management of Unanticipated Difficult Intubation (Plan D: eFONA)* (2024) [Strong Recommendation · Expert Consensus]
- **Citation**: Frerk C et al. Br J Anaesth 2015; DAS/Vortex CICO Implementation Update 2024.
- **Evidence Summary**: Mandates immediate declaration of CICO after failed Plan A/B/C, 100% O2 nasal/face attempt, and standardized Scalpel-Bougie-Tube (size 6.0 cuffed ETT) emergency front-of-neck access through the cricothyroid membrane.
- **Reference URL**: https://das.uk.com/guidelines/

### Common Clinical Pitfalls (DO NOT)
- DO NOT perform needle cricothyroidotomy with high-pressure jet ventilation in complete upper airway obstruction — high risk of catastrophic barotrauma, tension pneumothorax, and surgical emphysema.
- DO NOT attempt more than ONE rescue Supraglottic Airway (SGA) insertion once CICO is declared — move straight to scalpel-bougie-tube eFONA.
- DO NOT advance the bougie forcefully past 10–15 cm or hit resistance — risks tracheal/carinal perforation.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Declare "THIS IS A CICO EMERGENCY — PROCEEDING TO eFONA" loudly so the entire team transitions.
2. Call Anaesthesia Senior and ENT On-Call STAT while opening the eFONA Scalpel-Bougie-6.0 ETT pack.
3. Assign one nurse exclusively to continuous waveform capnography and external neck stabilization.

- **Stock & Equipment**: Pre-packaged eFONA Kit in every Airway Trolley: No. 10 broad-blade scalpel, coudé-tip bougie, size 6.0 cuffed ETT, and 10 mL syringe.
- **Admission / Transfer Criteria**: All eFONA survivors require immediate ICU admission, ENT surgical airway conversion/inspection, and CXR for pneumothorax/barotrauma.

### Algorithm: CICO Declaration & Scalpel-Bougie-Tube eFONA

- **Presentation Trigger**: Failed tracheal intubation, failed bag-mask ventilation, and failed 2nd-generation SGA with falling SpO2
- **Pathway Color Tag**: RED
- **Start Node**: `cico-1`
- **Keywords**: cico, efona, cricothyroidotomy, scalpel, bougie, can not intubate, vortex, front of neck

#### Node `cico-1` — Declare CICO & Execute Max 1 SGA Attempt [IMMEDIATE]
> **Prompt**: Failed intubation + failed BVM oxygenation. Stop repeated laryngoscopy immediately and declare CICO aloud.

**Clinical Actions:**
- [ ] Call aloud: "THIS IS A CICO SITUATION — OPEN THE eFONA KIT NOW!"
- [ ] Maintain continuous 100% O2 attempt via upper airway (2-person jaw thrust + Guedel/NPA) OR max 1 rapid 2nd-generation SGA attempt while eFONA kit is opened.
- [ ] Ensure full neuromuscular blockade (confirm Rocuronium given) so laryngospasm/muscle tone does not obstruct rescue.
- [ ] Position patient supine with maximal neck extension (pillow under shoulders, head dropped back).

**Contextual Pitfall Warning**: DO NOT waste critical hypoxic minutes repeating direct/video laryngoscopy or multiple SGA swaps — prepare scalpel immediately.

**Recommended Immediate Calls**: anaesthesia, ent

**Decision Branches:**
- **SGA Restored Oxygenation (SpO2 & ETCO2 Recovering)** (Pause eFONA, maintain oxygenation, plan controlled awakening or fibreoptic/ENT airway.) → `cico-disp`
- **SpO2 Falling / No ETCO2 → Proceed STAT to Scalpel eFONA** (Zero delay — cut now before hypoxic cardiac arrest.) → `cico-2`

#### Node `cico-2` — Scalpel–Bougie–6.0 ETT Technique (DAS Plan D) [INTERVENTION]
> **Prompt**: Perform the "Laryngeal Handshake" and execute standardized Scalpel-Bougie-Tube cricothyroidotomy.

**Inline Anatomical / Vector SVG**: `cico_efona`

**Clinical Actions:**
- [ ] 1. LARYNGEAL HANDSHAKE: Stabilize thyroid/cricoid cartilages with non-dominant hand; identify cricothyroid membrane (CTM) with index finger.
- [ ] 2. STAB (PALPABLE CTM): Make a transverse stab incision with No. 10 scalpel through skin and CTM, cutting edge facing you; turn blade 90° (sharp edge caudally toward feet).
- [ ]    • IMPALPABLE NECK (Obesity/Trauma): Make an 8–10 cm vertical midline skin incision first, blunt-dissect with fingers to palpate CTM, then transverse stab.
- [ ] 3. BOUGIE: Slide coudé-tip bougie along flat of scalpel blade into trachea (remove scalpel); advance gently ≤ 10–15 cm (feel tracheal clicks or gentle hold-up — DO NOT force).
- [ ] 4. TUBE: Railroad lubricated size 6.0 cuffed ETT over bougie into trachea until cuff is just below skin; remove bougie, inflate cuff, ventilate, and confirm WAVEFORM ETCO2.

**Contextual Pitfall Warning**: DO NOT use needle cricothyroidotomy + high-pressure jet ventilation in total upper airway obstruction — fatal barotrauma/tension pneumothorax!

**Recommended Immediate Calls**: anaesthesia, ent, icu

**Decision Branches:**
- **Waveform Capnography Confirmed → Post-eFONA Stabilization** → `cico-disp`

#### Node `cico-disp` — Post-eFONA Stabilization, CXR & ENT Handover [DISPOSITION]
> **Prompt**: Secure the ETT/airway firmly against dislodgement, check for barotrauma, and transfer to ICU/Theatre.

**Clinical Actions:**
- [ ] Hold tube manually until sutured or firmly tied around neck (false-passage dislodgement happens easily if unsecured).
- [ ] Obtain portable CXR STAT to rule out pneumothorax/pneumomediastinum and confirm tube depth above carina.
- [ ] Arrange urgent ENT / Anaesthesia definitive airway plan (formal tracheostomy or controlled oral intubation once oedema resolves).

**Recommended Immediate Calls**: icu, ent, anaesthesia

**Disposition**: ICU / Operating Theatre (ENT Definitive Airway) (STAT Critical Airway Handover)
- [x] Continuous waveform capnography active
- [x] Size 6.0 ETT secured by tie/suture and depth documented
- [x] Post-procedure CXR completed

---

## 7. Resuscitative Thoracotomy (Traumatic Arrest)

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: cardiothoracic, anaesthesia, icu
- **Evidence Source**: EAST / European Resuscitation Council (ERC) — *Practice Management Guidelines for Emergency Department Thoracotomy* (2024) [Strong Recommendation · Trauma Consensus]
- **Citation**: Seamon MJ et al. J Trauma Acute Care Surg 2015; ERC Special Circumstances 2021/2024.
- **Evidence Summary**: Targets reversible tamponade, intrathoracic haemorrhage, and subdiaphragmatic exsanguination via Clamshell or Left Anterolateral Thoracotomy (4th–5th ICS) in penetrating (<15 min CPR) or selected blunt (<10 min) arrest.
- **Reference URL**: https://www.east.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT incise the pericardium posteriorly or transversely — you will transect the left phrenic nerve running vertically down the lateral pericardium.
- DO NOT cross-clamp the oesophagus instead of the descending thoracic aorta — palpate the pre-placed NG/OG tube anteriorly and clamp the vessel hugging the anterior vertebral column.
- DO NOT perform resuscitative thoracotomy in blunt trauma with >10 minutes of arrest/asystole and no signs of life (futile survival <1%).

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Activate Massive Transfusion Protocol (1:1:1 PRBC:FFP:Platelets) and Cardiothoracic/Trauma Surgery STAT.
2. Open Resuscitative Thoracotomy Tray immediately alongside bilateral Finger Thoracostomy.
3. Pre-warm rapid infuser (Belmont / Level 1) and alert Operating Theatre to stand by for immediate damage-control repair.

- **Stock & Equipment**: Thoracotomy Tray (No. 10/20 scalpel, Gigli saw / trauma shears, Finochietto rib spreader, Satinsky/DeBakey aortic clamps, internal defib paddles, 3-0 Prolene + skin stapler).
- **Admission / Transfer Criteria**: Immediate transfer to Operating Theatre (ROSC achieved) → ICU.

### Algorithm: ED Resuscitative Thoracotomy (Clamshell / Left Anterolateral)

- **Presentation Trigger**: Traumatic cardiac arrest with penetrating thoracic trauma (<15 min CPR) or witnessed blunt arrest (<10 min)
- **Pathway Color Tag**: RED
- **Start Node**: `thor-1`
- **Keywords**: thoracotomy, clamshell, tamponade, traumatic arrest, aortic cross clamp, pericardiotomy, hilar twist

#### Node `thor-1` — Candidacy Check & Clamshell / Left Anterolateral Incision [DECISION]
> **Prompt**: Confirm time since loss of signs of life, execute bilateral finger thoracostomies, and open chest if eligible.

**Clinical Actions:**
- [ ] VERIFY INDICATION: Penetrating torso trauma with CPR <15 min (or signs of life in ED/EMS) OR blunt trauma with witnessed arrest <10 min + electrical activity/POCUS cardiac motion.
- [ ] Start MTP (1:1:1 warmed blood), intubate, and place large-bore IV/IO above the diaphragm + OG/NG tube (landmark for oesophagus).
- [ ] CHEST ACCESS (4th–5th ICS, inframammary crease in men / under breast fold in women): Start with bilateral finger thoracostomies, then connect across sternum using trauma shears/Gigli saw for CLAMSHELL exposure (preferred for trauma exposure) or wide Left Anterolateral incision.
- [ ] Insert Finochietto retractor (ratchet/handle pointing laterally/axilla) and open ribs maximally.

**Contextual Pitfall Warning**: DO NOT waste time with small superficial cuts or wrong intercostal space (above 4th ICS hits pectoralis/axillary vessels). Pause chest compressions briefly during rib spreading for operator safety.

**Recommended Immediate Calls**: cardiothoracic, anaesthesia, icu

**Decision Branches:**
- **Chest Open → Pericardiotomy & Direct Cardiac Control** → `thor-2`
- **Blunt Trauma > 10–15 min Asystole & Zero POCUS Cardiac Motion** (Consider termination of resuscitation per institutional trauma policy.) → `thor-disp`

#### Node `thor-2` — Pericardiotomy, Cardiac Repair & Internal Defibrillation [INTERVENTION]
> **Prompt**: Open pericardium longitudinally ANTERIOR to the left phrenic nerve, evacuate clot, control cardiac wounds, and massage.

**Clinical Actions:**
- [ ] 1. IDENTIFY LEFT PHRENIC NERVE: Runs superior-to-inferior along lateral pericardium.
- [ ] 2. LONGITUDINAL PERICARDIOTOMY: Pinch pericardium anteriorly with forceps, incise vertically anterior & parallel to phrenic nerve; deliver heart out and scoop all clot.
- [ ] 3. CONTROL MYOCARDIAL BLEEDING: Digital finger occlusion (do NOT push finger inside enlarging tear) or Foley catheter balloon gently inflated inside defect, OR rapid skin stapler / 3-0 Prolene pledgeted horizontal mattress sutures.
- [ ] 4. TWO-HANDED INTERNAL CARDIAC MASSAGE: Hinge wrists together with flat palms compressing ventricles from apex toward base (never poke tips of fingers through myocardium!).
- [ ] 5. INTERNAL DEFIBRILLATION (if VF/pVT): Apply internal paddles directly to heart at 10–20 Joules (biphasic).

**Contextual Pitfall Warning**: DO NOT injure the coronary arteries when placing cardiac sutures (use horizontal mattress sutures passing underneath major coronary vessels).

**Decision Branches:**
- **Empty Heart / Subdiaphragmatic or Pulmonary Bleed → Cross-Clamp Aorta** → `thor-clamp`
- **ROSC Achieved (Palpable Pulse / ETCO2 Rise >20 mmHg) → OR STAT** → `thor-disp`

#### Node `thor-clamp` — Descending Aorta Cross-Clamp & Pulmonary Hilar Control [INTERVENTION]
> **Prompt**: Maximise coronary/cerebral perfusion and arrest infradiaphragmatic or pulmonary hilar haemorrhage.

**Clinical Actions:**
- [ ] AORTIC CROSS-CLAMP: Sweep left lung anteriorly/superiorly; incise mediastinal pleura over descending thoracic aorta immediately anterior to thoracic vertebral bodies.
- [ ] Identify oesophagus anteriorly (feel NG/OG tube!) and slide curved Satinsky/DeBakey vascular clamp across aorta just above diaphragm.
- [ ] PULMONARY HILAR BLEEDING: Divide inferior pulmonary ligament with scissors, then perform 180° pulmonary hilar twist OR apply large vascular clamp across pulmonary hilum to stop massive lung bleed / air embolism.
- [ ] Resume warm MTP resuscitation + internal cardiac massage + internal defibrillation if needed.

**Contextual Pitfall Warning**: Once ROSC is achieved, SBP will surge markedly — prepare Operating Theatre STAT and avoid prolonged (>30 min) aortic clamp ischaemia.

**Recommended Immediate Calls**: cardiothoracic

**Decision Branches:**
- **Proceed to Operating Theatre Transfer / Outcome** → `thor-disp`

#### Node `thor-disp` — Operating Theatre Damage Control (or Termination) [DISPOSITION]
> **Prompt**: If ROSC achieved (SBP >70 mmHg / ETCO2 surge), transfer directly to Operating Theatre with clamps/pack in situ.

**Clinical Actions:**
- [ ] If ROSC: Administer broad-spectrum IV antibiotics (e.g., Cefazolin 2 g IV), maintain warmed MTP 1:1:1, and keep sterile moist laparotomy pads over open chest en route to OR.
- [ ] Log exact aortic cross-clamp time for surgical team.

**Recommended Immediate Calls**: cardiothoracic, anaesthesia, icu

**Disposition**: Operating Theatre STAT → Cardiothoracic / Trauma ICU (Immediate Damage-Control Surgery)
- [x] Aortic clamp time documented
- [x] Warmed MTP 1:1:1 running continuously
- [x] IV antibiotics administered for open chest

---

## 8. Finger Thoracostomy & Massive Haemothorax

- **Category**: Airway & Thoracic Procedures
- **Escalation Roles**: cardiothoracic, icu, anaesthesia
- **Evidence Source**: ATLS 10th Ed / European Resuscitation Council (ERC) — *Traumatic Cardiac Arrest & Thoracic Decompression Protocol* (2024) [Class I · Trauma Resuscitation Standard]
- **Citation**: ATLS Subcommittee, ACS 10th Ed; ERC Guidelines on Trauma Cardiac Arrest 2021/2024.
- **Evidence Summary**: Mandates bilateral finger thoracostomy in the Triangle of Safety (4th/5th ICS, anterior-to-midaxillary line) as first-line decompression in traumatic arrest/PPV tension pneumothorax, followed by non-trocar large-bore drain placement on ROSC.
- **Reference URL**: https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/

### Common Clinical Pitfalls (DO NOT)
- DO NOT insert a chest drain using a metal trocar — high risk of fatal myocardial, hepatic, splenic, or pulmonary laceration.
- DO NOT rely on 2nd ICS mid-clavicular needle decompression in adult traumatic arrest — failure rate exceeds 40% due to chest wall thickness and kinking.
- DO NOT clamp a chest drain when active air leak or pneumothorax is present — risks immediate iatrogenic tension pneumothorax.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Perform bilateral finger thoracostomy simultaneously with airway & warmed volume/MTP in traumatic arrest.
2. Notify Cardiothoracic/Trauma Surgery STAT if initial chest drain output ≥ 1,500 mL OR ongoing output > 200 mL/hr for 2–4 hours.
3. Prepare Autotransfusion (Cell Saver / Atrium Oasis) if available and massive haemothorax occurs.

- **Stock & Equipment**: Sterile Finger Thoracostomy Packs (No. 10 scalpel, Roberts/Kelly curved clamp), 28–32 Fr chest tubes (NO trocars), underwater seal drains.
- **Admission / Transfer Criteria**: All thoracostomy/massive haemothorax patients require ICU/Trauma HDU or immediate Operating Theatre thoracotomy.

### Algorithm: Finger Thoracostomy & Massive Haemothorax Triage

- **Presentation Trigger**: Tension pneumothorax with shock/arrest, ventilated trauma arrest, or massive pleural blood accumulation
- **Pathway Color Tag**: AMBER
- **Start Node**: `ft-1`
- **Keywords**: finger thoracostomy, tension pneumothorax, massive haemothorax, hemothorax, chest drain, triangle of safety, 1500 ml

#### Node `ft-1` — Bilateral Finger Thoracostomy (Triangle of Safety) [IMMEDIATE]
> **Prompt**: Decompress the pleural space rapidly via blunt dissection at the 4th–5th ICS anterior-to-midaxillary line.

**Clinical Actions:**
- [ ] LANDMARK (Triangle of Safety): 4th or 5th intercostal space (nipple line / inframammary crease), just ANTERIOR to the mid-axillary line, posterior to lateral border of pectoralis major.
- [ ] PREP & INCISION: Chlorhexidine prep (local anaesthetic 1% lidocaine if conscious); 3–4 cm transverse incision parallel to rib.
- [ ] BLUNT DISSECTION: Advance closed curved Kelly/Roberts forceps onto SUPERIOR border of the lower rib (avoids neurovascular bundle under upper rib); push firmly through intercostal muscle & parietal pleura and spread jaws wide.
- [ ] FINGER SWEEP: Insert gloved index finger (avoid sharp rib fractures!) 360° inside pleural cavity to confirm lung expansion/adhesions and vent air/blood freely.

**Contextual Pitfall Warning**: DO NOT place a chest tube immediately during ongoing CPR/arrest — leaving the thoracostomy stoma open allows instant repeated finger re-sweeps and never kinks!

**Recommended Immediate Calls**: cardiothoracic, anaesthesia

**Decision Branches:**
- **ROSC / Surviving Patient or Massive Blood Output → Place Drain & Measure** → `ft-drain`

#### Node `ft-drain` — 28–32 Fr Drain Placement (NO Trocar) & Massive Haemothorax Check [DECISION]
> **Prompt**: Insert large-bore drain without trocar upon ROSC/ventilation and measure immediate & hourly blood loss.

**Clinical Actions:**
- [ ] DRAIN INSERTION: Remove trocar completely! Guide 28–32 Fr chest tube with curved clamp along finger tract posteriorly and superiorly until all side holes are well inside pleural space.
- [ ] Connect to underwater seal suction (-20 cmH2O), secure with heavy 0/1-0 silk mattress suture + occlusive dressing, and note EXACT time-zero fluid level on chamber.
- [ ] Give Tranexamic Acid (TXA) 1 g IV over 10 min (if trauma < 3 hours) + activate MTP 1:1:1 if hypotensive.

**Weight-Based Dosing Guidance:**
- **Tranexamic Acid (TXA — Trauma < 3h)**: `1,000 mg (1 g) IV over 10 min` (IV infusion, Followed by 1,000 mg IV over 8 hours)

**Contextual Pitfall Warning**: DO NOT clamp a massive haemothorax drain to "tamponade" bleeding unless directed by Thoracic Surgery — clamping causes lethal tension haemopneumothorax.

**Decision Branches:**
- **MASSIVE HAEMOTHORAX (> 1,500 mL Immediate OR > 200 mL/hr × 2–4h)** (Operative thoracotomy trigger — call Cardiothoracic STAT!) → `ft-disp`
- **Drain Output < 1,500 mL & Haemodynamically Stable** → `ft-disp`

#### Node `ft-disp` — Surgical Thoracotomy Triage & Post-Drain CXR [DISPOSITION]
> **Prompt**: Verify tube position on CXR and expedite Operating Theatre if massive haemothorax criteria are met.

**Clinical Actions:**
- [ ] IF >1,500 mL initial blood OR >200 mL/hr for 2–4h OR persistent shock despite blood: Activate Cardiothoracic/Trauma Surgery STAT for urgent operative thoracotomy.
- [ ] Obtain portable AP Chest X-ray to verify drain position, sentinel hole inside rib margin, and lung re-expansion.
- [ ] Administer single-dose IV antibiotic prophylaxis (e.g., Cefazolin 2 g IV) per trauma protocol if contamination present.

**Recommended Immediate Calls**: cardiothoracic, icu

**Disposition**: Operating Theatre (if Massive Haemothorax) OR Trauma ICU / HDU (STAT Surgical / ICU Evaluation)
- [x] Exact initial mL output & hourly trend marked on drain
- [x] CXR confirms all drainage holes inside chest wall
- [x] Underwater seal oscillating / bubbling documented

---

# Category: Cardiovascular

## 9. Acute Aortic Dissection (Type A & Complicated Type B)

- **Category**: Cardiovascular
- **Escalation Roles**: cardiothoracic, icu, cardiology
- **Evidence Source**: ACC / AHA & European Society of Cardiology (ESC) — *Guidelines for the Diagnosis and Management of Aortic Disease* (2024) [Class I · Level B]
- **Citation**: Isselbacher EM et al. Circulation 2022; ESC Aortic Diseases Guidelines 2024.
- **Evidence Summary**: Enforces strict anti-impulse therapy sequence (IV Opioid analgesia → Beta-Blocker to HR <60 bpm FIRST → Vasodilator to SBP 100–120 mmHg SECOND), STAT ECG-gated CTA Aorta, and emergent surgical repair for Stanford Type A.
- **Reference URL**: https://www.ahajournals.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT start IV vasodilators (Nicardipine, Nitroprusside, GTN) BEFORE beta-blockade — reflex tachycardia increases aortic wall shear stress (dP/dt) and extends the dissection flap!
- DO NOT perform aggressive full pericardiocentesis for Type A haemopericardium tamponade — sudden rise in arterial pressure blows out the aortic tear; aspirate max 10–20 mL ONLY if peri-arrest.
- DO NOT administer Heparin, Aspirin, P2Y12 inhibitors, or Thrombolytics when aortic dissection is on the differential (e.g., RCA ostial STEMI mimic).

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call Cardiothoracic Surgery and ICU STAT the moment Stanford Type A dissection is confirmed or strongly suspected.
2. Place two large-bore IVs, radial arterial line (in the arm with the HIGHER blood pressure), and ECG-gated CTA chest/abdomen/pelvis.
3. Crossmatch 6 units PRBC STAT and stop/avoid all antiplatelets and anticoagulants.

- **Stock & Equipment**: Esmolol / Labetalol infusions, Nicardipine / GTN infusions, Fentanyl IV, and invasive arterial line kit in Resus Bay.
- **Admission / Transfer Criteria**: Type A: Immediate Operating Theatre → Cardiothoracic ICU. Type B: Cardiac/Vascular ICU (or urgent TEVAR if complicated).

### Algorithm: Anti-Impulse Sequence & Stanford A/B Triage

- **Presentation Trigger**: Sudden tearing chest/back pain, pulse/BP deficit (>20 mmHg), new AR murmur, syncope, or stroke + chest pain
- **Pathway Color Tag**: RED
- **Start Node**: `aad-1`
- **Keywords**: aortic dissection, type a, type b, esmolol, labetalol, nicardipine, anti-impulse, tamponade

#### Node `aad-1` — STAT Workup, Bilateral Arm BPs & Opioid Analgesia (T=0) [IMMEDIATE]
> **Prompt**: Relieve pain immediately (stops sympathetic surge), check bilateral BPs, and obtain bedside POCUS + CTA.

**Clinical Actions:**
- [ ] ANALGESIA FIRST: Give Fentanyl 25–100 mcg IV (or Morphine 2–5 mg IV) STAT to blunt catecholamine-driven HR/BP spikes.
- [ ] Measure blood pressure in BOTH arms (use the HIGHER reading arm for arterial line and targets).
- [ ] Bedside POCUS (without delaying CTA): check aortic root >4 cm, intimal flap, acute aortic regurgitation, or pericardial effusion.
- [ ] Order STAT ECG-gated CTA Chest/Abdomen/Pelvis + Type & Crossmatch 6 units PRBC (or TOE/TEE if too unstable for CT).

**Weight-Based Dosing Guidance:**
- **Fentanyl IV (Sympathetic Pain Control)**: `0.5–1.5 mcg/kg (max 100 mcg)` (IV slow push, Titrate q5–10min to pain relief (avoid hypotension)) [50 mcg/mL]

**Contextual Pitfall Warning**: DO NOT give thrombolytics or dual antiplatelets for inferior ST-elevation until Type A dissection involving the RCA ostium is excluded!

**Recommended Immediate Calls**: cardiothoracic, icu

**Decision Branches:**
- **Hypertensive / Normotensive → Start Strict Anti-Impulse Sequence** → `aad-antiimpulse`
- **Hypotensive / Shock + Pericardial Effusion → Type A Tamponade Protocol** (Avoid aggressive pericardiocentesis unless peri-arrest!) → `aad-type-a`

#### Node `aad-antiimpulse` — Anti-Impulse Therapy: HR < 60 FIRST, SBP 100–120 SECOND [INTERVENTION]
> **Prompt**: Control heart rate (<60 bpm) BEFORE adding vasodilators to suppress dP/dt aortic wall shear.

**Weight-Based Dosing Guidance:**
- **1st Line: Esmolol Loading Dose (HR Control FIRST)**: `0.5 mg/kg (max 50 mg)` (IV over 1 min, Followed by 0.05–0.2 mg/kg/min (50–200 mcg/kg/min) infusion; target HR < 60 bpm) [10 mg/mL] — *Note: Hard-capped at 50 mg single bolus load; ultra-short t1/2 (~9 min) ideal before surgery.*
- **Alternative: Labetalol IV Bolus (Dual Alpha/Beta)**: `20 mg IV over 2 min, then 20–80 mg q10min (max 300 mg) or 0.5–2 mg/min` (IV push / infusion, Target HR < 60 bpm and SBP 100–120 mmHg)
- **2nd Line (AFTER HR < 60): Nicardipine Infusion**: `Start 5 mg/hr IV, titrate by 2.5 mg/hr q5–15min (max 15 mg/hr)` (IV infusion, Add ONLY after beta-blocker reaches HR < 60 bpm to bring SBP to 100–120 mmHg)

**Contextual Pitfall Warning**: NEVER start Nicardipine or GTN before beta-blockade — unopposed vasodilator reflex tachycardia increases aortic shear stress!

**Decision Branches:**
- **CTA / TOE Shows Stanford Type A (Involves Ascending Aorta)** (Absolute Surgical Emergency — Operating Theatre STAT!) → `aad-type-a`
- **CTA Shows Stanford Type B (Distal to Left Subclavian Only)** → `aad-type-b`

#### Node `aad-type-a` — Stanford Type A — Emergent Cardiothoracic Surgery [INTERVENTION]
> **Prompt**: Immediate transfer to Operating Theatre. Manage tamponade or malperfusion strictly without raising shear stress.

**Clinical Actions:**
- [ ] Call Cardiothoracic Surgery & Cardiac Anaesthesia STAT for emergency ascending aortic repair.
- [ ] IF CARDIAC TAMPONADE + PERI-ARREST / SEVERE SHOCK: Perform POCUS-guided limited pericardiocentesis removing ONLY 10–20 mL just to restore perfusing BP (SBP 70–80 mmHg) en route to OR — DO NOT drain completely!
- [ ] Hold all anticoagulants/antiplatelets; keep 6 units PRBC crossmatched and follow anti-impulse targets if normo/hypertensive.

**Recommended Immediate Calls**: cardiothoracic, anaesthesia, icu

**Decision Branches:**
- **Confirm OR Handover & Disposition** → `aad-disp`

#### Node `aad-type-b` — Stanford Type B — Complicated vs Uncomplicated Triage [INTERVENTION]
> **Prompt**: Screen immediately for malperfusion, rupture, or refractory pain/hypertension requiring TEVAR.

**Clinical Actions:**
- [ ] SCREEN FOR COMPLICATED TYPE B: Visceral/renal/limb/spinal malperfusion, pleural effusion/haemothorax (impending rupture), aortic diameter ≥55 mm, or refractory pain/BP despite maximal IV therapy.
- [ ] If COMPLICATED: Consult Vascular / Cardiothoracic Surgery STAT for emergency TEVAR (Thoracic Endovascular Aortic Repair).
- [ ] If UNCOMPLICATED: Continue strict IV anti-impulse therapy (HR <60 bpm, SBP 100–120 mmHg) in ICU and transition to oral agents after 24–48h.

**Recommended Immediate Calls**: cardiothoracic, icu, interventional_rad

**Decision Branches:**
- **Confirm ICU / TEVAR Disposition** → `aad-disp`

#### Node `aad-disp` — Immediate Theatre / TEVAR or Cardiothoracic ICU [DISPOSITION]
> **Prompt**: Ensure arterial line monitoring, continuous anti-impulse infusions, and blood products accompany transfer.

**Recommended Immediate Calls**: cardiothoracic, icu

**Disposition**: Operating Theatre (Type A / Complicated Type B TEVAR) OR Cardiothoracic ICU (STAT Surgical / Vascular Rescue)
- [x] Beta-blocker started prior to vasodilator (HR <60 bpm, SBP 100–120 mmHg)
- [x] Higher-BP arm arterial line active
- [x] 6 units PRBC crossmatched; zero anticoagulants given

---

## 10. Massive Pulmonary Embolism (Obstructive Shock)

- **Category**: Cardiovascular
- **Escalation Roles**: icu, cardiology, ecmo_team
- **Evidence Source**: European Society of Cardiology (ESC) / AHA — *Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism* (2024) [Class I · Level B]
- **Citation**: Konstantinides SV et al. Eur Heart J 2020; AHA/PERT Massive PE Update 2024.
- **Evidence Summary**: Recommends cautious fluid management (≤250–500 mL), early Norepinephrine for RV coronary perfusion, immediate systemic thrombolysis (Alteplase 100 mg/2h or 50 mg bolus in arrest), and PERT activation for VA-ECMO / embolectomy when thrombolysis fails or is contraindicated.
- **Reference URL**: https://www.escardio.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give aggressive >500 mL crystalloid fluid boluses — RV over-distension shifts the interventricular septum into the LV, collapsing cardiac output and precipitating arrest!
- DO NOT delay systemic thrombolysis waiting for CTPA in a peri-arrest patient with bedside POCUS showing severe RV strain / McConnell sign.
- DO NOT rush to intubate unless refractory hypoxaemia or cardiac arrest — positive-pressure induction abruptly drops RV preload and triggers immediate arrest.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Perform immediate bedside POCUS (parasternal short-axis D-sign, RV > LV, McConnell sign, IVC plethora) + leg compression DVT scan.
2. Call ICU, Cardiology (PERT), and ECMO Team STAT if SBP <90 mmHg or peri-arrest.
3. Retrieve Alteplase (100 mg) from Resus/Emergency Pharmacy immediately.

- **Stock & Equipment**: Alteplase (50 mg vials ×2), Norepinephrine infusion, high-flow nasal cannula / NRM, and bedside ultrasound.
- **Admission / Transfer Criteria**: All high-risk / massive PE patients require ICU admission (or Cath Lab / Theatre if catheter-directed or surgical embolectomy).

### Algorithm: High-Risk / Massive PE Resuscitation & Reperfusion

- **Presentation Trigger**: Acute obstructive shock (SBP <90 mmHg), syncope, severe hypoxaemia, or PEA arrest with RV strain on POCUS
- **Pathway Color Tag**: RED
- **Start Node**: `mpe-1`
- **Keywords**: massive pe, pulmonary embolism, alteplase, thrombolysis, pert, ecmo, rv strain, mcconnell

#### Node `mpe-1` — RV Protection, Cautious Fluid & Early Norepinephrine [IMMEDIATE]
> **Prompt**: Confirm RV strain on POCUS, avoid RV over-distension, and restore aortic root pressure to perfuse the RV.

**Clinical Actions:**
- [ ] OXYGENATION: Apply High-Flow Nasal Oxygen (HFNO) or tight NRM (target SpO2 >90–94%); AVOID intubation if at all possible.
- [ ] CAUTIOUS FLUIDS: Give max 250–500 mL crystalloid ONLY if clear preload deficit/collapsed IVC (stop immediately if no improvement).
- [ ] EARLY VASOPRESSOR: Start Norepinephrine infusion STAT (0.05–0.5 mcg/kg/min) to maintain MAP ≥65 mmHg & RV coronary perfusion.
- [ ] BEDSIDE POCUS: Check RV:LV ratio >1.0, septal flattening (D-sign), McConnell sign, mobile RA/RV thrombus, and proximal DVT.

**Contextual Pitfall Warning**: DO NOT flood an already failing right ventricle with 1–2 L of saline — fluid boluses worsen septal bowing into the LV!

**Recommended Immediate Calls**: icu, cardiology

**Decision Branches:**
- **No Absolute Bleeding Contraindication (or Arrest/Peri-Arrest) → Systemic Thrombolysis** → `mpe-lyse`
- **Absolute Contraindication to Thrombolysis OR Refractory Post-Lysis → PERT / VA-ECMO** → `mpe-pert`

#### Node `mpe-lyse` — Systemic Thrombolysis + Anticoagulation [INTERVENTION]
> **Prompt**: Administer full-dose or arrest-bolus Alteplase immediately; do NOT delay for CTPA in peri-arrest.

**Clinical Actions:**
- [ ] If peri-arrest and CTPA not yet obtained: give thrombolysis immediately based on POCUS RV strain + high clinical probability.
- [ ] Start IV Unfractionated Heparin infusion (allows rapid reversal/titration if bleeding or embolectomy needed).

**Weight-Based Dosing Guidance:**
- **Alteplase (tPA) — Perfusing Massive PE**: `100 mg IV over 2 hours (or 10 mg bolus + 90 mg over 2h)` (IV infusion, Start unfractionated Heparin (80 U/kg bolus + 18 U/kg/hr) once aPTT < 2× ULN)
- **Alteplase (tPA) — Cardiac Arrest / Peri-Arrest**: `50 mg IV rapid bolus (repeat 50 mg in 15 min if still in arrest)` (Rapid IV push, Continue high-quality CPR for ≥ 60–90 min after bolus in PE arrest!)

**Recommended Immediate Calls**: icu, cardiology

**Decision Branches:**
- **Shock Persists >30–60 min Post-tPA → Activate PERT / VA-ECMO Rescue** → `mpe-pert`
- **Haemodynamics Improving → Admit ICU** → `mpe-disp`

#### Node `mpe-pert` — PERT Activation: VA-ECMO, Catheter or Surgical Embolectomy [INTERVENTION]
> **Prompt**: Activate multidisciplinary PERT / ECMO team STAT for mechanical clot extraction or VA-ECMO circulatory bypass.

**Clinical Actions:**
- [ ] ACTIVATE ECMO TEAM STAT: VA-ECMO immediately offloads the dilated RV and restores systemic perfusion as bridge to recovery or embolectomy.
- [ ] INTERVENTIONAL RADIOLOGY / CARDIOLOGY: Urgent mechanical catheter-directed thrombectomy (e.g., FlowTriever / Indigo) if available.
- [ ] CARDIOTHORACIC SURGERY: Surgical pulmonary embolectomy if clot-in-transit or refractory failure.
- [ ] Start IV Unfractionated Heparin (unless active intracranial/fatal haemorrhage prohibits all anticoagulation).

**Recommended Immediate Calls**: ecmo_team, cardiology, interventional_rad, cardiothoracic

**Decision Branches:**
- **Proceed to ICU / Cath Lab / Theatre Disposition** → `mpe-disp`

#### Node `mpe-disp` — ICU / PERT Critical Care & Bleeding Surveillance [DISPOSITION]
> **Prompt**: Monitor continuously for post-thrombolytic haemorrhage, RV recovery, and anticoagulation titration.

**Clinical Actions:**
- [ ] Strict neuro-checks every 15–30 min for 24h post-thrombolysis; avoid unnecessary arterial punctures.
- [ ] If major post-tPA haemorrhage occurs: transition immediately to Anticoagulant/tPA Bleeding Reversal module (Cryoprecipitate + TXA).

**Recommended Immediate Calls**: icu, cardiology

**Disposition**: Intensive Care Unit (ICU) / Cath Lab / Theatre (STAT Critical Care Admission)
- [x] Norepinephrine titrated to MAP ≥65 mmHg
- [x] Reperfusion therapy (tPA or PERT embolectomy/ECMO) executed
- [x] Post-thrombolysis neuro & bleeding surveillance active

---

## 11. Refractory VF / pVT

- **Category**: Cardiovascular
- **Escalation Roles**: cardiology, icu, anaesthesia
- **Evidence Source**: AHA / ERC / DOSE-VF Trial — *Adult Advanced Life Support Focused Update (DSED & Vector Change)* (2024) [Class IIa · Level B-R]
- **Citation**: Cheskes S et al. N Engl J Med 2022; AHA/ILCOR CoSTR 2023–2024.
- **Evidence Summary**: DOSE-VF RCT demonstrated higher ROSC and survival to discharge with Dual Sequential External Defibrillation (DSED) and Vector Change (VC) after 3 failed standard shocks.
- **Reference URL**: https://www.nejm.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT continue repeating identical standard defibrillation pad positions beyond 3 failed shocks without changing vector or applying DSED.
- DO NOT delay ECPR/Cath Lab notification past 10–15 minutes of arrest if patient meets criteria.
- DO NOT deliver DSED shocks simultaneously from both defibrillators onto overlapping pads — stagger by <1 second or follow local dual-pad spacing.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call Cardiology / ECPR Team immediately at Shock #3 if patient is an ECPR candidate.
2. Bring Second Defibrillator to Resus Bay after Shock #2 to prepare AP + AL pads without interrupting CPR.
3. Verify airway, ETCO2 >15 mmHg, and reversible H&T causes (STEMI, K+, Tamponade).

- **Stock & Equipment**: Second biphasic defibrillator stationed in Resus Bay 2; IV Esmolol ampoules in Resus Drug Box.
- **Admission / Transfer Criteria**: ROSC patients go STAT to Cath Lab (if coronary cause suspected) or ICU for post-arrest targeted temperature management.

### Algorithm: Refractory VF (Vector Change & DSED)

- **Presentation Trigger**: Persistent VF / pulseless VT after ≥ 3 standard biphasic shocks
- **Start Node**: `rvf-1`
- **Keywords**: refractory vf, dsed, double sequential, vector change, esmolol, ecpr, dose-vf

#### Node `rvf-1` — Confirm Refractory VF (≥3 Shocks) & Optimize ACLS [IMMEDIATE]
> **Prompt**: Maintain uninterrupted CPR while preparing second pad set. Verify standard ACLS drugs given.

**Clinical Actions:**
- [ ] Confirm ≥3 standard anterior-lateral (AL) shocks delivered with high-quality CPR.
- [ ] Ensure Epinephrine 1 mg IV/IO q3–5min and Amiodarone 300 mg IV/IO (or Lidocaine 1–1.5 mg/kg) given.
- [ ] Evaluate ECPR candidacy early (age, witnessed arrest, initial shockable rhythm, no-flow <5 min, ETCO2 >10).
- [ ] Place second set of defibrillation pads in ANTEROPOSTERIOR (AP) position during chest compressions.

**Contextual Pitfall Warning**: DO NOT pause chest compressions to apply the second set of AP pads — apply between compressions smoothly.

**Recommended Immediate Calls**: cardiology, icu

**Decision Branches:**
- **2 Defibrillators Available → Dual Sequential (DSED)** (Preferred if second defibrillator at bedside (Cheskes DOSE-VF).) → `rvf-dsed`
- **1 Defibrillator Only → Vector Change (AP Pads)** (Switch defibrillator cable from AL pads to AP pads.) → `rvf-vc`

#### Node `rvf-dsed` — Deliver Dual Sequential Defibrillation (DSED) [INTERVENTION]
> **Prompt**: Charge BOTH defibrillators to maximum energy (200J biphasic) and deliver rapid sequential shocks.

**Inline Anatomical / Vector SVG**: `dsed_pads`

**Device Settings:**
- `Defib 1: Anterior-Lateral 200J`
- `Defib 2: Anteroposterior 200J`
- `Sequence delay < 1 sec`

**Clinical Actions:**
- [ ] Ensure AL pads (Defib 1) and AP pads (Defib 2) do NOT touch each other.
- [ ] Clear patient; deliver Shock 1 (AL) followed within <1 second by Shock 2 (AP) by single operator or synchronized count.
- [ ] Resume CPR immediately for 2 minutes.

**Decision Branches:**
- **ROSC Achieved** → `rvf-rosc`
- **Still in VF → Add Beta-Blockade & ECPR Escalation** → `rvf-esmolol`

#### Node `rvf-vc` — Deliver Vector Change Shock (AP Position) [INTERVENTION]
> **Prompt**: Disconnect AL cable, plug in AP pads, and deliver maximum-energy shock.

**Clinical Actions:**
- [ ] Ensure AP pads sit left precordium + left infrascapular region (avoiding direct contact with AL pads).
- [ ] Deliver 200J biphasic shock and immediately resume CPR for 2 minutes.

**Decision Branches:**
- **ROSC Achieved** → `rvf-rosc`
- **Still in VF → Beta-Blockade & ECPR Escalation** → `rvf-esmolol`

#### Node `rvf-esmolol` — Sympathetic Blockade (Esmolol) & ECPR / Cath Lab [DISPOSITION]
> **Prompt**: Blunt endogenous/exogenous catecholamine surge and activate ECPR cannulation if eligible.

**Clinical Actions:**
- [ ] Administer Amiodarone 150 mg 2nd dose (if not given) + MgSO4 2 g IV if polymorphic/Torsades features.
- [ ] Check POCUS during rhythm check for pericardial effusion, massive PE, or profound LV standstill.
- [ ] Prepare femoral vessels for VA-ECMO cannulation if ECPR criteria met.

**Weight-Based Dosing Guidance:**
- **Esmolol IV Bolus**: `0.5 mg/kg (max 50 mg)` (IV/IO push, Over 1 min, then 0.05 mg/kg/min infusion) [10 mg/mL] — *Note: Consider pausing further Epinephrine boluses once Esmolol given.*

**Recommended Immediate Calls**: cardiology, icu, anaesthesia

**Disposition**: ECPR Cannulation / Cath Lab / ICU (STAT Code Resus Escalation)
- [x] Intra-arrest POCUS performed
- [x] ECPR team at bedside (<60 min low-flow target)

#### Node `rvf-rosc` — Post-ROSC Stabilization & Coronary Triage [DISPOSITION]
> **Prompt**: Obtain immediate 12-lead ECG, optimize haemodynamics, and avoid hyperoxia.

**Clinical Actions:**
- [ ] Target SpO2 94–98%, ETCO2 35–45 mmHg, MAP ≥65 mmHg.
- [ ] Perform immediate 12-lead ECG — STEMI or shock activates Cath Lab STAT.

**Recommended Immediate Calls**: cardiology, icu

**Disposition**: Cardiac Cath Lab → ICU (Immediate Post-ROSC Care)
- [x] 12-lead ECG reviewed by Cardiology
- [x] Temperature control initiated (prevent fever >37.7°C)

---

## 12. Electrical Storm

- **Category**: Cardiovascular
- **Escalation Roles**: cardiology, icu, anaesthesia
- **Evidence Source**: ESC / AHA / HRS — *Management of Ventricular Arrhythmias & Sudden Cardiac Death* (2023) [Class I · Level B]
- **Citation**: Zeppenfeld K et al. Eur Heart J 2022; ESC/AHA Electrical Storm Guidance 2023.
- **Evidence Summary**: Recommends non-selective beta-blockers (Propranolol superior to Metoprolol) + Amiodarone, deep sedation, electrolyte optimization, and stellate ganglion block / catheter ablation for refractory storm.
- **Reference URL**: https://www.escardio.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT treat Torsades de Pointes (polymorphic VT with long QT) with Amiodarone — it worsens QT prolongation! Give MgSO4 + overdrive pacing/isoproterenol.
- DO NOT withhold sedation in an awake patient getting repeated shocks — pain triggers extreme sympathetic drive.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call Cardiology On-Call STAT for urgent CCU admission and EP/Cath Lab evaluation.
2. Notify Anaesthesia early if patient requires intubation for refractory storm sedation.
3. Ensure K+ > 4.0 mmol/L and Mg2+ > 1.0 mmol/L using central/large-bore access.

- **Stock & Equipment**: IV Amiodarone, Esmolol/Propranolol, Magnesium Sulfate, and Isoproterenol in Resus Drug Cart.
- **Admission / Transfer Criteria**: 100% of Electrical Storm patients (≥3 sustained VT/VF episodes in 24h) require CCU / ICU admission.

### Algorithm: Electrical Storm (≥3 VT/VF in 24h)

- **Presentation Trigger**: ≥ 3 distinct episodes of sustained VT, VF, or appropriate ICD shocks in 24 hours
- **Start Node**: `es-1`
- **Keywords**: electrical storm, vt storm, torsades, propranolol, amiodarone, stellate ganglion

#### Node `es-1` — Differentiate Monomorphic VT vs Polymorphic (Torsades) [DECISION]
> **Prompt**: Apply external defib pads. Inspect baseline QT & arrhythmia morphology. Is QT prolonged (Torsades)?

**Clinical Actions:**
- [ ] Cardiovert/defibrillate immediately if pulseless or haemodynamically unstable.
- [ ] Draw STAT K+, Mg2+, Ca2+, troponin, lactate.
- [ ] Call Cardiology STAT.

**Recommended Immediate Calls**: cardiology

**Decision Branches:**
- **Monomorphic VT / Normal-QT Polymorphic VT** (Sympathetic blockade + Amiodarone pathway.) → `es-mono`
- **Polymorphic VT with Long QT (Torsades de Pointes)** (Pause-dependent — needs MgSO4, K+, and heart rate acceleration!) → `es-torsades`

#### Node `es-mono` — Sympathetic Blockade + Amiodarone + Sedation [INTERVENTION]
> **Prompt**: Blunt adrenergic surge immediately with beta-blockade, sedation, and antiarrhythmic load.

**Clinical Actions:**
- [ ] 1. Sedate aggressively (Midazolam/Fentanyl; consider intubation + Propofol if refractory).
- [ ] 2. Beta-blocker: Propranolol 1 mg IV q5min (up to 0.1 mg/kg) OR Esmolol 0.5 mg/kg bolus + infusion.
- [ ] 3. Amiodarone 150–300 mg IV over 10–20 min, then 1 mg/min infusion (or Lidocaine 1–1.5 mg/kg if ischemia suspected).
- [ ] 4. Replete K+ to 4.0–4.5 mmol/L and MgSO4 2 g IV.

**Contextual Pitfall Warning**: Propranolol (non-selective beta-1/beta-2) is more effective than selective metoprolol for electrical storm.

**Decision Branches:**
- **Refractory Storm → Escalate to Intubation / Stellate Block / ECMO** → `es-refractory`
- **Rhythm Controlled → Proceed to CCU Disposition** → `es-disp`

#### Node `es-torsades` — Torsades de Pointes — MgSO4 & Overdrive Pacing [DISPOSITION]
> **Prompt**: STOP all QT-prolonging drugs (including Amiodarone). Speed up baseline heart rate!

**Clinical Actions:**
- [ ] Magnesium Sulfate 2 g IV over 2–5 min (repeat once if needed) + infusion 1–2 g/hr.
- [ ] Replete K+ aggressively to 4.5–5.0 mmol/L.
- [ ] Prevent pauses: start Isoproterenol infusion (2–10 mcg/min, target HR 90–110 bpm) OR overdrive pacing (transcutaneous/transvenous/ICD rate increase to 90–100 bpm).

**Contextual Pitfall Warning**: DO NOT give Amiodarone or Procainamide in acquired long-QT Torsades.

**Recommended Immediate Calls**: cardiology, icu

**Disposition**: CCU / Temporary Overdrive Pacing (STAT Cardiology)
- [x] All QT-prolonging meds stopped
- [x] K+ >4.5 and Mg2+ >1.2 maintained

#### Node `es-refractory` — Refractory Storm Rescue & Ablation [DISPOSITION]
> **Prompt**: Deep general anaesthesia, stellate ganglion block, and mechanical circulatory support evaluation.

**Clinical Actions:**
- [ ] Intubate and sedate deeply with Propofol (suppresses sympathetic outflow).
- [ ] Arrange ultrasound-guided left Stellate Ganglion Block (Bupivacaine/Ropivacaine) with Anaesthesia/Pain/Critical Care.
- [ ] Evaluate for emergent coronary angiography (acute ischemia), catheter ablation, or VA-ECMO.

**Expandable Procedure Micro-Card**: Procedural Micro-Card: US-Guided Left C6 Stellate Ganglion Block
- Position supine with head turned slightly right; high-frequency linear ultrasound probe at left C6 level (Chassaignac tubercle / anterior tubercle).
- Identify longus colli muscle deep to carotid artery & internal jugular vein, plus prevertebral fascia.
- In-plane lateral-to-medial needle approach; advance tip anterior to longus colli muscle (subfascial), lateral to oesophagus.
- Confirm negative aspiration for blood or CSF, then inject 5–8 mL 0.25% Bupivacaine or 0.5% Ropivacaine slowly.
- Avoid vertebral artery, inferior thyroid artery, phrenic nerve, and intrathecal space.

**Recommended Immediate Calls**: anaesthesia, cardiology, icu, ecmo_team

**Disposition**: Cath Lab / EP Ablation / Cardiac ICU (Code Critical Care STAT)
- [x] Anaesthesia + Cardiology aligned on ECMO/ablation plan

#### Node `es-disp` — CCU Admission & Precipitant Workup [DISPOSITION]
> **Prompt**: Stabilize in CCU and investigate ischemia, heart failure, or ICD triggers.

**Disposition**: Coronary Care Unit (CCU) (Urgent Admission)
- [x] Serial troponins, echo, and ICD interrogation scheduled

---

## 13. Major Anticoagulant Bleeding

- **Category**: Cardiovascular
- **Escalation Roles**: haematology, icu, neurosurgery
- **Evidence Source**: EHRA / ACC / ESC — *EHRA Practical Guide on NOAC/DOAC Reversal & Major Bleeding* (2024) [Class I · Level B-NR]
- **Citation**: Steffel J et al. Europace 2021; ACC/EHRA Bleeding Reversal Consensus 2023–2024.
- **Evidence Summary**: Prioritizes immediate anticoagulant cessation, local/TXA haemostasis, specific reversal (Idarucizumab for dabigatran; Andexanet alfa or 50 U/kg 4F-PCC for Xa inhibitors), and 4F-PCC + Vitamin K for warfarin.
- **Reference URL**: https://academic.oup.com/europace

### Common Clinical Pitfalls (DO NOT)
- DO NOT wait for coagulation lab results (INR, anti-Xa, dTT) before reversing life-threatening bleeding (ICH, GI shock, airway bleed).
- DO NOT give Idarucizumab for Rivaroxaban/Apixaban (it ONLY binds Dabigatran).
- DO NOT forget Vitamin K 10 mg IV alongside 4F-PCC in Warfarin bleeds — PCC wears off in 6–8 hours!

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Activate Blood Bank / Haematology STAT for 4-Factor PCC, Idarucizumab, or Massive Transfusion.
2. Notify Neurosurgery immediately if Intracranial Haemorrhage (ICH) on CT.
3. Endoscopy / IR / Surgical team notified concurrently with medical reversal.

- **Stock & Equipment**: Idarucizumab (Praxbind 2×2.5 g) and 4-Factor PCC stocked in Emergency Pharmacy / Blood Bank STAT fridge.
- **Admission / Transfer Criteria**: All reversed major bleeds require ICU/HDU monitoring for rebound coagulopathy and thromboembolic risk.

### Algorithm: DOAC Major Bleeding Reversal

- **Presentation Trigger**: Life-threatening bleed (ICH, shock, critical organ) on Dabigatran, Apixaban, Rivaroxaban, or Edoxaban
- **Start Node**: `doac-1`
- **Keywords**: doac, noac, apixaban, rivaroxaban, dabigatran, idarucizumab, pcc, andexanet, bleeding

#### Node `doac-1` — Identify DOAC Class & Start Haemostasis [DECISION]
> **Prompt**: Stop DOAC, start resuscitation + TXA, and identify the exact oral anticoagulant.

**Clinical Actions:**
- [ ] Establish 2 large-bore IVs; send CBC, group & crossmatch, CrCl, PT/aPTT, fibrinogen, and last-dose time.
- [ ] Give Tranexamic Acid (TXA) 1 g IV over 10 min (avoid in isolated urinary tract bleeding).
- [ ] Apply mechanical compression / endoscopic / surgical control concurrently.

**Recommended Immediate Calls**: haematology

**Decision Branches:**
- **Dabigatran (Pradaxa) — Direct Thrombin Inhibitor** (Specific reversal: Idarucizumab 5 g IV.) → `doac-dabigatran`
- **Apixaban / Rivaroxaban / Edoxaban (Factor Xa Inhibitor)** (Reversal: Andexanet alfa (if stocked) OR 4-Factor PCC 50 units/kg.) → `doac-xa`

#### Node `doac-dabigatran` — Idarucizumab 5 g IV (Dabigatran Reversal) [DISPOSITION]
> **Prompt**: Administer Idarucizumab 5 g IV immediately (two consecutive 2.5 g vials).

**Clinical Actions:**
- [ ] Give Idarucizumab 2.5 g IV bolus + second 2.5 g IV bolus within 15 minutes (total 5 g).
- [ ] If Idarucizumab unavailable: give 4-Factor PCC 50 units/kg IV (or activated PCC / FEIBA 50 U/kg).
- [ ] If ingestion < 2 hours and airway protected: consider Activated Charcoal 50 g PO.
- [ ] Consider urgent haemodialysis if renal failure + massive rebound Dabigatran level.

**Recommended Immediate Calls**: haematology, icu

**Disposition**: ICU / Urgent Definitive Source Control (OR / GI / Neuro) (STAT Reversal & Source Control)
- [x] Both 2.5 g Idarucizumab vials infused
- [x] Check repeat aPTT/thrombin time at 12–24h for rebound

#### Node `doac-xa` — Factor Xa Reversal (Universal 4F-PCC 50 U/kg) [DISPOSITION]
> **Prompt**: Administer 4-Factor PCC (50 units/kg, max 5,000 units) immediately. Andexanet alfa displays only if enabled in local pharmacy stock settings.

**Clinical Actions:**
- [ ] Infuse 4-Factor PCC 50 units/kg IV STAT (capped at 5,000 units) without waiting for anti-Xa assays.
- [ ] If oral dose < 2–4 hours ago: Activated Charcoal 50 g PO if airway protected.
- [ ] Control blood pressure strictly (target SBP < 140 mmHg if ICH).

**Weight-Based Dosing Guidance:**
- **4-Factor PCC (Primary Universal Reversal)**: `50 units/kg (max 5000 units)` (IV slow infusion, Single STAT dose (max 5,000 units)) [25 units/mL reconstituted] — *Note: Wait-free administration in ICH or haemorrhagic shock.*
- **Andexanet Alfa (Institutional Stocked Option)**: `Low: 400 mg bolus + 4 mg/min × 120m | High: 800 mg bolus + 8 mg/min × 120m` (IV bolus + 2h infusion, High-dose if Rivaroxaban >10 mg or Apixaban >5 mg within <8h / unknown) (Requires andexanetAlfaStocked) — *Note: Shown because Andexanet alfa is toggled Stocked in Admin. Do NOT co-administer with 4F-PCC.*

**Contextual Pitfall Warning**: DO NOT co-administer Andexanet alfa AND 4F-PCC together (catastrophic thrombosis risk).

**Recommended Immediate Calls**: haematology, icu, neurosurgery

**Disposition**: ICU / Neurosurgery / Interventional Control (STAT Critical Care)
- [x] Exact dose & time of last DOAC documented
- [x] Target SBP <140 mmHg if ICH

### Algorithm: Warfarin / Heparin Reversal

- **Presentation Trigger**: Major bleeding on Warfarin (VKA), Unfractionated Heparin, or LMWH
- **Start Node**: `vka-1`
- **Keywords**: warfarin, vka, inr, pcc, vitamin k, heparin, protamine, lmwh, enoxaparin

#### Node `vka-1` — Select Anticoagulant Class [DECISION]
> **Prompt**: Which anticoagulant is the patient receiving?

**Recommended Immediate Calls**: haematology

**Decision Branches:**
- **Warfarin (Vitamin K Antagonist)** → `vka-warfarin`
- **Unfractionated Heparin (UFH) or LMWH (Enoxaparin)** → `vka-heparin`
- **Thrombolytic-Associated Major Bleeding (Post-tPA / Tenecteplase)** (STAT CT Head + Cryoprecipitate / Fibrinogen + TXA.) → `vka-tpa`

#### Node `vka-warfarin` — Warfarin Reversal: 4F-PCC + IV Vitamin K [DISPOSITION]
> **Prompt**: Administer weight-based 4-Factor PCC AND Vitamin K 10 mg IV immediately.

**Clinical Actions:**
- [ ] Give Vitamin K 10 mg IV in 50 mL D5W over 10–20 min (never omit!).
- [ ] If 4F-PCC unavailable: FFP 15–20 mL/kg IV.
- [ ] Repeat INR 15–30 minutes after PCC infusion.

**Weight-Based Dosing Guidance:**
- **4F-PCC (INR 2.0–3.9)**: `25 units/kg (max 2500 units)` (IV, STAT)
- **4F-PCC (INR 4.0–6.0)**: `35 units/kg (max 3500 units)` (IV, STAT)
- **4F-PCC (INR > 6.0 or Unknown in ICH)**: `50 units/kg (max 5000 units)` (IV, STAT)

**Contextual Pitfall Warning**: DO NOT rely on Vitamin K alone (takes 6–12h to normalize INR) and DO NOT rely on FFP if 4F-PCC is available.

**Recommended Immediate Calls**: haematology, neurosurgery, icu

**Disposition**: ICU / Neurosurgery / GI Suite (STAT Reversal)
- [x] Repeat INR < 1.4 verified post-PCC
- [x] Vitamin K 10 mg IV infused

#### Node `vka-heparin` — Heparin / LMWH Reversal with Protamine [DISPOSITION]
> **Prompt**: Stop heparin infusion and give Protamine Sulfate slowly IV.

**Clinical Actions:**
- [ ] For UFH: Protamine 1 mg IV per 100 units heparin given in last 2–3 hours (max 50 mg over 10 min).
- [ ] For LMWH (<8h since dose): Protamine 1 mg IV per 1 mg Enoxaparin (partially reverses ~60% anti-Xa).
- [ ] Give slowly over ≥10 min to avoid severe hypotension and anaphylactoid reaction (higher risk in fish allergy / NPH insulin users).

**Recommended Immediate Calls**: haematology, icu

**Disposition**: ICU / Vascular / Surgical Control (Urgent Reversal)
- [x] Repeat aPTT 15 min post-protamine

#### Node `vka-tpa` — Post-tPA / Tenecteplase Major Bleeding Reversal [DISPOSITION]
> **Prompt**: STOP thrombolytic infusion immediately, obtain STAT CT Head (if CNS change), and replete Fibrinogen STAT.

**Clinical Actions:**
- [ ] STOP Alteplase (tPA) or Tenecteplase infusion immediately.
- [ ] Perform STAT non-contrast CT Head if headache, vomiting, neurological deterioration, or acute hypertension.
- [ ] Infuse Cryoprecipitate 10 units IV (or Fibrinogen concentrate 3–4 g IV) + Tranexamic Acid (TXA) 1 g IV.
- [ ] Send STAT fibrinogen, CBC, PT/aPTT, and Group & Crossmatch; repeat Cryoprecipitate if fibrinogen < 1.5–2.0 g/L.
- [ ] Consult Haematology and Neurosurgery STAT (avoid antiplatelets/anticoagulants).

**Weight-Based Dosing Guidance:**
- **Cryoprecipitate (or Fibrinogen Concentrate 3–4 g IV)**: `Cryoprecipitate 10 units IV STAT (or Fibrinogen concentrate 3–4 g IV)` (IV rapid infusion, Target serum Fibrinogen > 1.5–2.0 g/L)
- **Tranexamic Acid (TXA)**: `1,000 mg (1 g) IV over 10 minutes` (IV, STAT antifibrinolytic)

**Contextual Pitfall Warning**: DO NOT give Protamine or Vitamin K for alteplase/tenecteplase — thrombolytics cause profound hypofibrinogenaemia requiring Cryoprecipitate + TXA.

**Recommended Immediate Calls**: haematology, neurosurgery, icu

**Disposition**: Neuro-ICU / Neurosurgery / Intensive Care (Code Thrombolytic Bleed STAT)
- [x] Thrombolytic stopped & time logged
- [x] Cryoprecipitate 10 U (or Fibrinogen 3–4 g) + TXA 1 g infused
- [x] Target Fibrinogen > 1.5–2.0 g/L confirmed

---

# Category: ENT, Airway & GI Bleeds

## 14. Massive Epistaxis

- **Category**: ENT, Airway & GI Bleeds
- **Escalation Roles**: ent, anaesthesia, interventional_rad
- **Evidence Source**: ENT UK / RCEM — *Adult Acute Epistaxis Management Consensus* (2023) [Grade B · Level II]
- **Citation**: ENT UK Epistaxis Multidisciplinary Consensus; RCEM Best Practice 2023.
- **Evidence Summary**: Escalates systematically from direct alar compression + topical TXA/vasoconstrictor to anterior packing, dual-balloon/Foley posterior tamponade, and ENT OR / IR embolization.
- **Reference URL**: https://www.entuk.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT tilt the patient’s head backward — causes aspiration of blood and obscures posterior bleeding severity.
- DO NOT blindly inflate a Foley catheter without securing it anteriorly against a padded clamp — pressure necrosis of the alar rim occurs rapidly.
- DO NOT forget bilateral packing or posterior packing requires telemetry/continuous SpO2 monitoring (nasopulmonary reflex & hypoxia risk).

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call ENT On-Call immediately if bleeding persists after anterior packing.
2. Notify Anaesthesia early if airway threatened by massive posterior clots.
3. Coordinate IR embolization vs ENT theatre (SPA ligation) if posterior balloon fails.

- **Stock & Equipment**: RapidRhino 7.5 cm packs, Foley 12–14 Fr catheters, TXA ampoules, and headlight stored in ENT Procedure Trolley.
- **Admission / Transfer Criteria**: All patients requiring posterior packing, bilateral packs, blood transfusion, or anticoagulated persistent bleeding require ENT inpatient/HDU admission.

### Algorithm: Massive Epistaxis Escalation

- **Presentation Trigger**: Uncontrolled nasal/posterior pharyngeal haemorrhage with haemodynamic or airway threat
- **Start Node**: `epi-1`
- **Keywords**: epistaxis, nosebleed, rapidrhino, foley, txa, posterior packing, sphenopalatine

#### Node `epi-1` — Position, Suction, Direct Compression & Topical TXA [IMMEDIATE]
> **Prompt**: Protect airway (lean forward), clear clots, and apply 15-min bilateral alar pressure with topical TXA/vasoconstrictor.

**Bedside Timer / Guard**: `15:00 Direct Alar Compression Timer` (countdown, 900s)

**Clinical Actions:**
- [ ] Sit patient upright leaning FORWARD (if alert); have Yankauer suction ready.
- [ ] Gently clear clots; insert cotton pledgets soaked in Tranexamic Acid (TXA 500 mg) + topical vasoconstrictor (Oxymetazoline or 1:10,000 Epinephrine).
- [ ] Apply firm continuous bilateral pinching over soft lower cartilaginous nose for 15 minutes.
- [ ] Establish IV access, send CBC/Coag/Group & Hold; give IV TXA 1 g if severe.

**Contextual Pitfall Warning**: DO NOT pinch the bony nasal bridge — compress the soft cartilaginous alae firmly against the septum.

**Recommended Immediate Calls**: ent

**Decision Branches:**
- **Bleeding Controlled after 15 Minutes** → `epi-controlled`
- **Still Bleeding → Anterior Nasal Packing** → `epi-anterior`

#### Node `epi-anterior` — Anterior Nasal Packing (RapidRhino / Merocel) [DECISION]
> **Prompt**: Insert anterior inflatable balloon pack along floor of nasal cavity. Check posterior pharynx!

**Clinical Actions:**
- [ ] Soak RapidRhino (7.5 cm) in sterile water (NEVER saline/gel) and insert parallel to hard palate.
- [ ] Inflate pilot cuff slowly with air until bleeding stops and cuff feels tense.
- [ ] Inspect open mouth with tongue depressor and torch — is fresh blood still pouring down the posterior pharynx?

**Decision Branches:**
- **Posterior Pharynx Clear — Bleeding Stopped** → `epi-disp-pack`
- **Active Posterior Bleeding Continues → Posterior Tamponade** → `epi-posterior`

#### Node `epi-posterior` — Posterior Balloon / Foley Tamponade & ENT STAT [DISPOSITION]
> **Prompt**: Insert dual-balloon posterior pack or 12–14 Fr Foley catheter and call ENT + Anaesthesia STAT.

**Clinical Actions:**
- [ ] Pass lubricated 12–14 Fr Foley catheter along nasal floor until tip visible in oropharynx; fill balloon with 5 mL sterile water, pull firmly forward against posterior choana, then add 5–10 mL more water.
- [ ] Pack anterior nares tightly around catheter with ribbon gauze/RapidRhino; secure Foley anteriorly with padded umbilical clamp (protecting skin from pressure necrosis!).
- [ ] Alternatively use commercial dual-chamber posterior epistaxis balloon.
- [ ] Correct coagulopathy / reverse anticoagulants if unstable.

**Contextual Pitfall Warning**: DO NOT let an unpadded clamp compress the nostril rim — rapid alar necrosis occurs within hours.

**Recommended Immediate Calls**: ent, anaesthesia, interventional_rad

**Disposition**: ENT Theatre (SPA Ligation) / Interventional Radiology / HDU (STAT ENT Admission)
- [x] Continuous SpO2 & ECG monitoring applied
- [x] Check haemoglobin & reverse anticoagulants if shock present

#### Node `epi-disp-pack` — Anterior Pack Placed — ENT Evaluation [DISPOSITION]
> **Prompt**: Observe for 1 hour to confirm haemostasis; check posterior pharynx again before disposition.

**Clinical Actions:**
- [ ] Verify blood pressure control (avoid severe pain-driven hypertension with gentle analgesia).
- [ ] Discuss bilateral packs / elderly / anticoagulated patients with ENT for admission.

**Disposition**: ENT Admission (if bilateral/posterior/anticoagulated) or ENT Clinic 24–48h (Urgent ENT Review)
- [x] Re-examined oropharynx at 30–60 min for occult posterior drip

#### Node `epi-controlled` — Controlled — Cautery / Discharge or Coag Workup [DISPOSITION]
> **Prompt**: Inspect Little’s area for visible bleeding vessel; cauterize if localized and stable.

**Disposition**: Home with Naseptin/petroleum ointment OR Observation if coagulopathic (Standard ENT Follow-Up)
- [x] BP, Hb, and anticoagulant status reviewed

---

## 15. Massive Haemoptysis

- **Category**: ENT, Airway & GI Bleeds
- **Escalation Roles**: anaesthesia, icu, interventional_rad
- **Evidence Source**: BTS / CHEST — *Management of Life-Threatening Haemoptysis* (2023) [Grade B · Expert Consensus]
- **Citation**: Davidson K, Shojaee S. Chest 2020; BTS Acute Haemoptysis Consensus 2023.
- **Evidence Summary**: Mandates lateral decubitus positioning bleeding-side DOWN, early large-bore (≥8.0 mm) single-lumen intubation or selective mainstem intubation of the non-bleeding lung, TXA, and urgent CT angiography → Bronchial Artery Embolization (BAE).
- **Reference URL**: https://journal.chestnet.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT lay the patient flat or bleeding-side UP — blood will flood and drown the healthy lung!
- DO NOT intubate with a narrow (<8.0 mm) ETT — therapeutic bronchoscopy requires ≥8.0 mm internal diameter.
- Patients die from ASPHYXIATION, not exsanguination — airway protection takes absolute priority.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call Anaesthesia, ICU, and Interventional Radiology (BAE) STAT.
2. Bring Video Laryngoscope + size 8.0 / 8.5 mm ETTs + Bougie to bedside immediately.
3. Notify Respiratory / Bronchoscopy team for rigid or flexible clot evacuation.

- **Stock & Equipment**: Large-bore 8.0/8.5 mm ETTs, Nebulized/IV TXA, and wide-bore Yankauer suction in Resus Bay.
- **Admission / Transfer Criteria**: 100% ICU admission after emergency bronchial artery embolization or bronchoscopy control.

### Algorithm: Massive Haemoptysis Airway & BAE

- **Presentation Trigger**: Expectoration >100–200 mL/24h OR acute respiratory compromise / clot asphyxiation
- **Start Node**: `haem-1`
- **Keywords**: haemoptysis, hemoptysis, coughing blood, lateral decubitus, bae, bronchial artery, 8.0 ett

#### Node `haem-1` — Position Bleeding-Side DOWN & Oxygenate [IMMEDIATE]
> **Prompt**: Immediately roll patient into lateral decubitus with KNOWN/SUSPECTED BLEEDING LUNG DOWN.

**Clinical Actions:**
- [ ] Position BLEEDING SIDE DOWN immediately (use prior CXR/CT or unilateral auscultation/chest pain clues).
- [ ] High-flow O2 via non-rebreather mask; have two wide-bore suction lines active.
- [ ] Give TXA 1 g IV bolus (plus nebulized TXA 500 mg if spontaneously breathing) and reverse any anticoagulants.
- [ ] Call Anaesthesia, ICU, and Interventional Radiology STAT.

**Contextual Pitfall Warning**: DO NOT put bleeding lung uppermost — gravity floods the contralateral healthy alveoli.

**Recommended Immediate Calls**: anaesthesia, icu, interventional_rad

**Decision Branches:**
- **Hypoxic / Exhausted / Airway Flooded → Intubate STAT** (Requires immediate ≥8.0 mm ETT or selective healthy-lung intubation.) → `haem-intubate`
- **Alert & Maintaining SpO2 → Rapid CT Angiogram / BAE** (Maintain bleeding-side-down posture; urgent CT chest angiography.) → `haem-bae`

#### Node `haem-intubate` — Large-Bore (≥8.0 mm) or Selective Mainstem Intubation [INTERVENTION]
> **Prompt**: Intubate with ≥8.0 mm single-lumen ETT. If ongoing flooding of healthy lung, advance selectively into non-bleeding bronchus.

**Clinical Actions:**
- [ ] Insert ≥8.0 mm (ideally 8.5 mm) single-lumen ETT (allows therapeutic bronchoscopy & clot suctioning; avoid double-lumen ETTs in emergency ED due to tiny lumens!).
- [ ] If RIGHT lung bleeding: advance ETT deeply (~27–29 cm at teeth) while turning head right to selectively intubate LEFT mainstem bronchus.
- [ ] If LEFT lung bleeding: advance ETT deeply (~26–28 cm) into RIGHT mainstem bronchus (monitor RUL ventilation).
- [ ] Urgent bedside flexible bronchoscopy (ice-cold saline lavage, topical epinephrine, bronchial blocker).

**Contextual Pitfall Warning**: DO NOT use a 7.0 mm ETT or double-lumen tube in ED — clots instantly plug small lumens and prevent therapeutic bronchoscopy.

**Recommended Immediate Calls**: anaesthesia, icu, interventional_rad

**Decision Branches:**
- **Airway Secured → Proceed to BAE / Bronchoscopy** → `haem-bae`

#### Node `haem-bae` — Bronchial Artery Embolization (BAE) & ICU [DISPOSITION]
> **Prompt**: Arrange urgent CT Chest Angiography (if not yet localized) → Interventional Radiology BAE.

**Clinical Actions:**
- [ ] Send Type & Crossmatch (4 units PRBC), CBC, Coag, renal function.
- [ ] Activate Interventional Radiology for urgent Bronchial Artery Embolization (first-line definitive control, >85% immediate success).
- [ ] If BAE fails or massive parenchymal rupture: Thoracic Surgery consult.

**Recommended Immediate Calls**: interventional_rad, icu

**Disposition**: Interventional Radiology (BAE) → ICU (STAT Interventional Control)
- [x] Bleeding-side-down positioning maintained during transport
- [x] Reversal of anticoagulants & blood products ready

---

## 16. Catastrophic Variceal Bleed & Balloon Tamponade

- **Category**: ENT, Airway & GI Bleeds
- **Escalation Roles**: gi_endoscopy, icu, haematology, anaesthesia
- **Evidence Source**: Baveno VII Consensus / BSG / AASLD — *Portal Hypertension & Acute Variceal Haemorrhage Emergency Management* (2024) [Grade 1A · Strong Recommendation]
- **Citation**: de Franchis R et al. J Hepatol (Baveno VII) 2022; BSG Variceal Haemorrhage Update 2024.
- **Evidence Summary**: Mandates restrictive PRBC transfusion (Hb 7–8 g/dL), immediate vasoactive splanchnic therapy (Terlipressin or Octreotide), IV Ceftriaxone 1 g, Erythromycin pre-endoscopy, airway protection for massive haematemesis, and rescue balloon tamponade / SEMS bridge to urgent endoscopy or TIPS.
- **Reference URL**: https://www.bsg.org.uk/

### Common Clinical Pitfalls (DO NOT)
- DO NOT over-transfuse PRBCs (target Hb 7–8 g/dL [70–80 g/L]) — over-transfusion increases portal venous pressure and precipitates catastrophic re-bleeding!
- DO NOT inflate the Sengstaken-Blakemore gastric balloon with the full 250–300 mL BEFORE confirming sub-diaphragmatic placement with a 50 mL test inflation + STAT CXR/POCUS — oesophageal inflation causes fatal oesophageal rupture.
- DO NOT forget an NG tube above the oesophageal balloon when using a standard 3-lumen Sengstaken-Blakemore tube (it lacks an oesophageal aspiration port, unlike a 4-lumen Minnesota tube) — prevents fatal aspiration.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call GI Endoscopy / Hepatology On-Call and ICU STAT while activating Massive Transfusion Protocol (restrictive target Hb 7–8 g/dL).
2. Give vasoactive agent + IV Ceftriaxone 1 g at T=0 before endoscopy.
3. Pull Sengstaken-Blakemore / Minnesota tube + 500 mL saline traction setup + manometer from Resus GI Cart early if shock persists.

- **Stock & Equipment**: Sengstaken-Blakemore (3-lumen) or Minnesota (4-lumen) tube (kept chilled/firm in fridge), 50 mL catheter-tip syringes, Kelly padded clamps, pressure manometer, 500 g traction weight, dual Yankauer suction.
- **Admission / Transfer Criteria**: 100% ICU admission post-endoscopy / tamponade; early TIPS evaluation (<72h) for Child-Pugh B/C active bleed.

### Algorithm: Catastrophic Variceal Bleed & Sengstaken-Blakemore Rescue

- **Presentation Trigger**: Massive haematemesis, cirrhosis / known portal hypertension with haemorrhagic shock
- **Pathway Color Tag**: RED
- **Start Node**: `var-1`
- **Keywords**: variceal bleed, sengstaken, blakemore, minnesota tube, terlipressin, octreotide, tips, haematemesis

#### Node `var-1` — Resuscitation, Vasoactives & Antibiotics (T=0) [IMMEDIATE]
> **Prompt**: Start splanchnic vasoconstrictor + IV Ceftriaxone immediately and transfuse restrictively to Hb 7–8 g/dL.

**Clinical Actions:**
- [ ] Place 2 large-bore IVs; transfuse PRBCs restrictively to target Hb 7–8 g/dL (70–80 g/L) — avoid over-transfusion.
- [ ] Correct platelets <50 × 10^9/L and fibrinogen <1.0–1.5 g/L during active massive bleeding (note INR is unreliable in cirrhosis; avoid routine FFP overload).
- [ ] Call GI Endoscopy STAT for emergency band ligation (OGD within 12h, or immediately if unstable).

**Weight-Based Dosing Guidance:**
- **Octreotide (Preferred if Severe CAD / Ischaemic Heart Disease)**: `50 mcg IV bolus, then 50 mcg/hr IV infusion` (IV bolus + infusion, Continue for 2–5 days) — *Note: Choose Octreotide OVER Terlipressin if patient has severe coronary/ischaemic heart disease, peripheral vascular disease, or arrhythmias.*
- **OR Terlipressin (If No Severe IHD/CAD)**: `2 mg IV slow bolus q4h (reduce to 1 mg q4h once bleed controlled)` (IV push, Check ECG/ischaemia history & serum Na+ closely)
- **Ceftriaxone (SBP & Mortality Reduction)**: `1,000 mg (1 g) IV once daily` (IV infusion, Give STAT at T=0 (7-day course))
- **Erythromycin (Pre-Endoscopy Prokinetic)**: `250 mg IV over 20–30 min (30–120 min before OGD)` (IV infusion, Clears gastric blood clot for endoscopic visualization)

**Contextual Pitfall Warning**: Flag Octreotide over Terlipressin in patients with severe coronary/ischaemic heart disease. Avoid routine TXA in chronic liver variceal bleeding (HALT-IT showed increased VTE without mortality benefit).

**Recommended Immediate Calls**: gi_endoscopy, icu, haematology

**Decision Branches:**
- **Exsanguinating Haematemesis / Shock / Encephalopathy → Intubate & Tamponade** (Protect airway BEFORE placing balloon tamponade!) → `var-intubate`
- **Haemodynamics Stabilized on Vasoactives → Urgent Endoscopy (OGD)** → `var-disp`

#### Node `var-intubate` — Airway Protection (Massive Haemorrhage RSI) [INTERVENTION]
> **Prompt**: Secure cuffed ETT BEFORE attempting balloon tamponade — balloon placement in an unprotected airway causes fatal aspiration.

**Clinical Actions:**
- [ ] Have 2 wide-bore Yankauer suction catheters running at maximum vacuum + videolaryngoscope ready.
- [ ] Pre-resuscitate with blood/vasopressors (Norepinephrine/push-dose Epinephrine) before induction; consider Ketamine + Rocuronium.
- [ ] Keep head slightly elevated (20–30°) or prepare SALAD (Suction Assisted Laryngoscopy Airway Decontamination) if flooding.

**Recommended Immediate Calls**: anaesthesia, gi_endoscopy

**Decision Branches:**
- **Airway Secured & Bleeding Uncontrolled → Insert Sengstaken-Blakemore / Minnesota Tube** → `var-balloon`

#### Node `var-balloon` — Balloon Tamponade Protocol (Sengstaken-Blakemore / Minnesota) [INTERVENTION]
> **Prompt**: Bridge to urgent OGD or TIPS: verify sub-diaphragmatic gastric balloon placement before full inflation.

**Clinical Actions:**
- [ ] 1. CHECK EQUIPMENT: Test both balloons underwater before insertion; confirm whether tube is a 3-lumen Sengstaken-Blakemore (lacks oesophageal suction) or 4-lumen Minnesota tube.
- [ ] 2. INSERT TO 50 cm: Lubricate generously and pass orally (preferred) or nasally to ≥50 cm mark; aspirate gastric port.
- [ ] 3. 50 mL TEST + STAT CXR/POCUS: Inflate GASTRIC balloon with 50 mL air, clamp, and obtain STAT portable CXR (or POCUS) to confirm balloon sits BELOW diaphragm in stomach!
- [ ] 4. FULL GASTRIC INFLATION + TRACTION: Add remaining 200–250 mL air (total 250–300 mL; double-clamp port with padded Kelly clamps). Pull tube gently until resistance at GE junction (~35–45 cm at teeth) and hang 500 g traction (e.g., 500 mL saline bag over IV pole pulley).
- [ ] 5. OESOPHAGEAL ASPIRATION PORT CHECK: Standard 3-lumen Sengstaken-Blakemore lacks an oesophageal aspiration port — INSERT AN NG TUBE above the oesophageal balloon to continuously suction secretions and prevent aspiration (not needed if using a 4-lumen Minnesota tube).
- [ ] 6. OESOPHAGEAL BALLOON (ONLY IF BLEEDING CONTINUES): Inflate to 30–40 mmHg via manometer (NEVER exceed 45 mmHg; deflate for 5 min every 6–12h; max total tamponade 24h).

**Contextual Pitfall Warning**: DO NOT inflate 250–300 mL until 50 mL X-ray/POCUS confirms gastric position — oesophageal rupture carries >50% mortality!

**Recommended Immediate Calls**: gi_endoscopy, icu, interventional_rad

**Decision Branches:**
- **Tamponade Secured → Transfer to Endoscopy / IR TIPS / ICU** → `var-disp`

#### Node `var-disp` — Emergent Endoscopy (EVL), Rescue TIPS & ICU [DISPOSITION]
> **Prompt**: Proceed to emergency endoscopic variceal band ligation or rescue TIPS (IR) within 12–24 hours.

**Clinical Actions:**
- [ ] Balloon tamponade (or self-expanding metal oesophageal stent / Danis stent) is strictly a temporary <24h bridge.
- [ ] Alert Interventional Radiology early for rescue TIPS if re-bleeding occurs or Child-Pugh B/C high-risk varices.

**Recommended Immediate Calls**: gi_endoscopy, icu, interventional_rad

**Disposition**: Endoscopy Suite / IR TIPS → ICU (STAT GI / Critical Care Intervention)
- [x] Vasoactive (Octreotide/Terlipressin) & Ceftriaxone 1 g IV running
- [x] Hb target 7–8 g/dL (avoid portal pressure rebound)
- [x] If 3-lumen Sengstaken used: supra-oesophageal NG suction active & traction/pressure logged

---

# Category: Endocrine & Environmental

## 17. Thyroid Storm

- **Category**: Endocrine & Environmental
- **Escalation Roles**: icu, anaesthesia
- **Evidence Source**: American Thyroid Association (ATA) — *Hyperthyroidism & Thyrotoxicosis Management Guidelines* (2023) [Strong Recommendation · Moderate Quality]
- **Citation**: Ross DS et al. Thyroid 2016; ATA Endocrine Emergency Update 2023.
- **Evidence Summary**: Enforces strict sequential blockade: Beta-blocker → Thionamide (PTU preferred initially for T4→T3 block) → Wait ≥1 hour → Iodine → Hydrocortisone + aggressive cooling & precipitant therapy.
- **Reference URL**: https://www.thyroid.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give Iodine (Lugol’s / SSKI) BEFORE or WITH the first dose of PTU/Methimazole — iodine fuels new thyroid hormone synthesis unless blocked for ≥1 hour first!
- DO NOT give Aspirin or Salicylates for fever — they displace T4/T3 from TBG and spike free hormone levels.
- DO NOT give non-selective beta-blockers blindly in severe decompensated systolic heart failure — use titratable short-acting Esmolol carefully.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call ICU Senior early for multi-organ monitoring, cooling, and IV beta-blocker titration.
2. Consult Endocrinology On-Call after initiating sequential blockade.
3. Order STAT TSH, Free T4/T3, blood cultures, ECG, and CXR to hunt precipitants (infection, DKA, amiodarone, surgery).

- **Stock & Equipment**: PTU 50 mg tablets (crushed for NG), Lugol’s iodine solution, Propranolol/Esmolol, and Hydrocortisone in ED Resus Pharmacy.
- **Admission / Transfer Criteria**: All confirmed or strongly suspected Thyroid Storm cases (Burch-Wartofsky ≥45) require ICU admission.

### Algorithm: Thyroid Storm Sequential Blockade

- **Presentation Trigger**: Fever, extreme tachycardia/AF, delirium/agitation, or heart failure in thyrotoxicosis
- **Start Node**: `ts-1`
- **Keywords**: thyroid storm, thyrotoxicosis, ptu, lugol, iodine, propranolol, hydrocortisone, burch wartofsky

#### Node `ts-1` — Step 1: Supportive Resus + Beta-Blockade (T=0 min) [IMMEDIATE]
> **Prompt**: Cool actively (no aspirin!), treat hypoxia/volume deficit, and blunt adrenergic storm.

**Clinical Actions:**
- [ ] Start evaporative cooling / cooling blankets + Paracetamol (DO NOT give Aspirin/NSAIDs).
- [ ] Beta-blocker: Propranolol 1 mg IV q5–10min (or 60–80 mg PO/NG q4–6h) OR Esmolol 0.25–0.5 mg/kg IV load then 0.05 mg/kg/min if bronchospasm/CHF risk.
- [ ] Draw labs (TSH, fT4, fT3, CBC, LFTs, blood cultures) — do NOT delay treatment for TSH results.
- [ ] Alert ICU immediately.

**Contextual Pitfall Warning**: DO NOT give Aspirin (increases free thyroid hormone). Monitor closely for acute pulmonary oedema when initiating beta-blockers.

**Recommended Immediate Calls**: icu

**Decision Branches:**
- **Step 2: Block Synthesis (PTU / Methimazole)** → `ts-2`

#### Node `ts-2` — Step 2: Thionamide + Hydrocortisone (T=0 to 15 min) [INTERVENTION]
> **Prompt**: Block new hormone synthesis FIRST, plus block peripheral T4→T3 conversion with steroids.

**Bedside Timer / Guard**: `60-Min PTU → Iodine Safety Timer` (countdown, 3600s)

**Clinical Actions:**
- [ ] Propylthiouracil (PTU) 500–1000 mg PO/NG loading dose, then 250 mg q4h (preferred in storm because it also inhibits peripheral T4→T3 conversion).
- [ ] (Alternative if PTU unavailable or severe hepatotoxicity: Methimazole 20–40 mg PO/NG q6–8h).
- [ ] Hydrocortisone 100 mg IV STAT, then 100 mg IV q8h (blocks T4→T3 + treats relative adrenal insufficiency).

**Contextual Pitfall Warning**: START THE 60-MINUTE TIMER NOW — DO NOT give Iodine until 1 full hour after PTU/Methimazole!

**Decision Branches:**
- **Confirm ≥ 1 Hour Elapsed → Step 3: Give Iodine** (Unlocks automatically at 60 min (or confirm pre-hospital PTU ≥60m ago).) → `ts-3`

#### Node `ts-3` — Step 3: Iodine Blockade (≥1h post-PTU) & Precipitant Care [DISPOSITION]
> **Prompt**: Administer iodine solution ≥1 hour after PTU to halt preformed hormone release, and admit to ICU.

**Clinical Actions:**
- [ ] ≥ 1 HOUR AFTER PTU: Give Lugol’s Iodine 8–10 drops PO/NG q6–8h OR Saturated Solution of Potassium Iodide (SSKI) 5 drops PO/NG q6h.
- [ ] Consider Cholestyramine 4 g PO/NG q6h to reduce enterohepatic T4 recirculation.
- [ ] Treat precipitating trigger aggressively (broad-spectrum antibiotics if sepsis cannot be excluded, DKA care, etc.).

**Recommended Immediate Calls**: icu

**Disposition**: Intensive Care Unit (ICU) (STAT Critical Care Admission)
- [x] Exact time of PTU and 1-hour delayed Iodine logged
- [x] Precipitating infection/trigger treated

---

## 18. Myxoedema Coma

- **Category**: Endocrine & Environmental
- **Escalation Roles**: icu, anaesthesia
- **Evidence Source**: American Thyroid Association (ATA) — *Hypothyroidism Emergency Task Force Recommendations* (2023) [Strong Recommendation · Low-Moderate Quality]
- **Citation**: Jonklaas J et al. Thyroid 2014; ATA Myxoedema Emergency Update 2023.
- **Evidence Summary**: Prioritizes airway/ventilation for hypercapnia, passive rewarming, empirical Hydrocortisone BEFORE IV Levothyroxine loading, and cautious correction of hyponatraemia.
- **Reference URL**: https://www.thyroid.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give Levothyroxine BEFORE Hydrocortisone — restoring thyroid metabolism precipitates fatal adrenal crisis!
- DO NOT use rapid active core rewarming — causes peripheral vasodilation and sudden cardiovascular collapse.
- DO NOT delay airway management — severe hypercapnic respiratory failure and airway oedema are major killers.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call ICU Senior for ventilatory support and vasopressor monitoring.
2. Request Emergency Pharmacy STAT release of IV Levothyroxine (and IV Liothyronine if available).
3. Start empirical broad-spectrum antibiotics after blood/urine cultures (fever is often masked by hypothermia).

- **Stock & Equipment**: IV Levothyroxine vials stocked in Central/Emergency Pharmacy; warming blankets in Resus.
- **Admission / Transfer Criteria**: 100% ICU admission for respiratory monitoring, vasopressors, and gradual sodium correction.

### Algorithm: Myxoedema Coma Resuscitation

- **Presentation Trigger**: Hypothermia, altered consciousness/coma, bradycardia, hypercapnia, or hyponatraemia
- **Start Node**: `myx-1`
- **Keywords**: myxoedema, myxedema, hypothermia, levothyroxine, hydrocortisone, hyponatraemia

#### Node `myx-1` — Airway, Passive Rewarming & Hydrocortisone FIRST [IMMEDIATE]
> **Prompt**: Support ventilation, warm passively, and give IV Hydrocortisone BEFORE thyroid hormone.

**Clinical Actions:**
- [ ] Check ABG/VBG immediately — intubate early if hypercapnia (PaCO2 rising), respiratory acidosis, or GCS ≤8.
- [ ] Use PASSIVE external rewarming (warm blankets, warm room) — avoid active vasodilating blankets if hypotensive.
- [ ] Draw STAT TSH, Free T4, random Cortisol, glucose, Na+, blood cultures.
- [ ] Give HYDROCORTISONE 100 mg IV STAT (q8h) FIRST before any Levothyroxine.

**Contextual Pitfall Warning**: DO NOT give Levothyroxine prior to Hydrocortisone — risk of acute adrenal crisis!

**Recommended Immediate Calls**: icu, anaesthesia

**Decision Branches:**
- **Hydrocortisone Given → Administer IV Thyroid Hormone** → `myx-2`

#### Node `myx-2` — IV Levothyroxine Loading & Supportive ICU Care [DISPOSITION]
> **Prompt**: Give IV Levothyroxine loading dose, correct hypoglycaemia/hyponatraemia cautiously, and treat sepsis.

**Clinical Actions:**
- [ ] Levothyroxine (T4) 200–400 mcg IV slow bolus (use lower end 200 mcg in elderly or coronary disease to avoid ischemia/arrhythmia), then 50–100 mcg IV daily.
- [ ] Consider adding Liothyronine (T3) 5–10 mcg IV q8h ONLY in profound shock/coma if available (avoid high doses in elderly).
- [ ] If severe symptomatic hyponatraemia (<120 mmol/L or seizures): 3% hypertonic saline 100 mL IV (do NOT exceed 6–8 mmol/L rise in 24h).
- [ ] Give empirical broad-spectrum IV antibiotics (occult sepsis is the #1 precipitant).

**Recommended Immediate Calls**: icu

**Disposition**: Intensive Care Unit (ICU) (STAT Critical Care)
- [x] Hydrocortisone given prior to T4
- [x] Continuous core temp, ECG, and Na+ monitoring

---

## 19. Hyperthermia Syndromes

- **Category**: Endocrine & Environmental
- **Escalation Roles**: icu, toxicology, anaesthesia
- **Evidence Source**: RCEM / TOXBASE / EM Critical Care — *Severe Drug-Induced & Environmental Hyperthermia Consensus* (2024) [Grade B · Level II]
- **Citation**: RCEM Environmental & Drug-Induced Hyperthermia Guidance; TOXBASE 2024.
- **Evidence Summary**: Mandates immediate ice-water immersion / evaporative cooling to <39°C, avoidance of antipyretics, and targeted antidotes by toxidrome (Benzos + Cyproheptadine for SS; Dantrolene for MH/severe NMS).
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give antipyretics (Paracetamol/NSAIDs) for non-infectious hyperthermia — they do not lower set-point and worsen liver/renal injury.
- DO NOT delay rapid cooling (>40°C) while waiting for labs — neurotoxicity correlates directly with time above 40.5°C.
- DO NOT give Succinylcholine if Malignant Hyperthermia or severe hyperkalaemia/rhabdomyolysis is suspected — use Rocuronium!

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Initiate immediate cooling in Resus Bay (ice packs to groin/axilla/neck + wet mist + fans OR ice-water tarp immersion).
2. Call ICU and Toxicology early if Temp > 40°C, rigidity, or altered mental status.
3. Notify Anaesthesia immediately if Malignant Hyperthermia triggered post-intubation/volatile agent.

- **Stock & Equipment**: Dantrolene vials (20 mg/vial with sterile water) stocked in Operating Theatre / Emergency Malignant Hyperthermia Cart.
- **Admission / Transfer Criteria**: ICU admission for all hyperthermia >40°C, rhabdomyolysis, coagulopathy, or antidote therapy.

### Algorithm: Hyperthermia Cooling & Differentiation

- **Presentation Trigger**: Core temperature ≥ 40°C with CNS dysfunction, rigidity, clonus, or anaesthetic trigger
- **Start Node**: `hyp-1`
- **Keywords**: hyperthermia, heatstroke, serotonin syndrome, nms, malignant hyperthermia, dantrolene, cyproheptadine

#### Node `hyp-1` — Cool First (< 39°C Target) & Differentiate Syndromes [IMMEDIATE]
> **Prompt**: Start aggressive physical cooling immediately. Identify neuromuscular exam & trigger.

**Clinical Actions:**
- [ ] Target core temp < 38.5–39.0°C within 30 minutes (stop active cooling at 38.5°C to prevent overshoot hypothermia).
- [ ] Use cold-water immersion (tarp/ice bath — gold standard for heatstroke) OR continuous tepid mist + high-speed fans + ice packs to neck/axillae/groin.
- [ ] Give Benzodiazepines FIRST-LINE to stop shivering/agitation and neuromuscular heat generation: Diazepam 5–10 mg IV OR Midazolam 2–5 mg IV (IV Lorazepam 2–4 mg only if cold-chain stock is immediately available on cart).
- [ ] Send STAT CK, K+, Cr, LFTs, coagulation/D-dimer, blood gas.

**Contextual Pitfall Warning**: DO NOT give Paracetamol/Ibuprofen — futile in environmental/drug hyperthermia and hepatotoxic/nephrotoxic.

**Recommended Immediate Calls**: icu, toxicology

**Decision Branches:**
- **Post-Succinylcholine / Volatile Anaesthetic + Rising ETCO2 (MH)** → `hyp-mh`
- **Hyperreflexia + Inducible/Ocular Clonus + SSRI/MDMA (Serotonin)** → `hyp-ss`
- **Lead-Pipe Rigidity + Bradyreflexia + Antipsychotic (NMS)** → `hyp-nms`
- **Exertional / Heat Exposure + Flaccid / No Drug Trigger (Heatstroke)** → `hyp-heat`

#### Node `hyp-mh` — Malignant Hyperthermia — STAT Dantrolene [DISPOSITION]
> **Prompt**: STOP volatile anaesthetic immediately and infuse weight-based Dantrolene 2.5 mg/kg IV!

**Clinical Actions:**
- [ ] Switch to 100% O2 at high fresh gas flow (>10 L/min) and hyperventilate.
- [ ] Treat hyperkalaemia STAT (Calcium Chloride, Insulin/Dextrose, NaHCO3).

**Weight-Based Dosing Guidance:**
- **Dantrolene IV Loading Dose**: `2.5 mg/kg` (Rapid IV push, Repeat q5–10min until ETCO2 & temp normalize (up to 10 mg/kg)) [20 mg per vial (0.33 mg/mL once reconstituted)]

**Recommended Immediate Calls**: anaesthesia, icu

**Disposition**: ICU (Continuous Dantrolene & Rhabdomyolysis Care) (Code Malignant Hyperthermia STAT)
- [x] Reconstitute multiple vials in parallel with dedicated team member

#### Node `hyp-ss` — Serotonin Syndrome Protocol [DISPOSITION]
> **Prompt**: Titrate Benzodiazepines aggressively + consider Cyproheptadine; intubate/paralyze if Temp >41°C.

**Clinical Actions:**
- [ ] Titrate Diazepam/Lorazepam/Midazolam IV until agitation & clonus subside.
- [ ] If Temp > 40.5–41°C or severe rigidity: rapid sequence intubation with ROCURONIUM (avoid succinylcholine!) to stop muscle thermogenesis immediately.
- [ ] Consider Cyproheptadine 12 mg PO/NG load, then 2 mg q2h until clinical response.

**Recommended Immediate Calls**: toxicology, icu

**Disposition**: ICU / HDU Monitoring (Urgent Critical Care)
- [x] CK & urine output monitored for rhabdomyolysis

#### Node `hyp-nms` — Neuroleptic Malignant Syndrome (NMS) [DISPOSITION]
> **Prompt**: Stop all dopamine antagonists, give IV benzodiazepines, and add Bromocriptine / Dantrolene if severe.

**Clinical Actions:**
- [ ] Stop antipsychotics/metoclopramide immediately; restart dopaminergic drug if caused by Parkinson’s med withdrawal.
- [ ] Aggressive IV hydration for rhabdomyolysis + IV Lorazepam/Midazolam.
- [ ] Bromocriptine 2.5–5 mg PO/NG q8h (takes 24h+ to act) + Dantrolene IV for immediate rigidity control.

**Weight-Based Dosing Guidance:**
- **Dantrolene (for severe rigidity/hyperthermia)**: `1–2.5 mg/kg` (IV, q6h as needed)

**Recommended Immediate Calls**: icu, toxicology

**Disposition**: ICU Admission (Urgent Critical Care)
- [x] Monitor CK, renal function, and VTE prophylaxis

#### Node `hyp-heat` — Heatstroke — Ice Immersion & Organ Protection [DISPOSITION]
> **Prompt**: Continue rapid cooling to 38.5°C, then monitor for multi-organ injury (DIC, AKI, hepatic, cerebral).

**Clinical Actions:**
- [ ] Cold-water tarp immersion or ice + mist/fan until core temp 38.5°C.
- [ ] Hydrate cautiously (assess for cerebral/pulmonary oedema); treat seizures with benzodiazepines.
- [ ] Screen for DIC (coags/fibrinogen), rhabdomyolysis (CK), and acute liver failure (LFTs at 24h).

**Recommended Immediate Calls**: icu

**Disposition**: ICU / HDU (24–48h Organ Surveillance) (Urgent Critical Care)
- [x] Core rectal/oesophageal probe continuous monitoring

---

## 20. Severe Accidental Hypothermia (<28°C) & Hypothermic Arrest

- **Category**: Endocrine & Environmental
- **Escalation Roles**: icu, ecmo_team, anaesthesia
- **Evidence Source**: European Resuscitation Council (ERC) / Wilderness Medical Society (WMS) — *Accidental Hypothermia & ECLS Rewarming Guidelines* (2024) [Class I · International Resuscitation Standard]
- **Citation**: Lott C et al. Resuscitation (ERC Special Circumstances) 2021; Pasquier M / HOPE Score Update 2024.
- **Evidence Summary**: Mandates low-reading oesophageal/bladder thermistor, 60-second pulse/breathing check, gentle horizontal handling, max 3 shocks + withheld IV drugs <30°C, 2× Adrenaline dosing intervals between 30–34.9°C, and urgent VA-ECMO/CPB rewarming for HT III–IV arrest.
- **Reference URL**: https://www.erc.edu/

### Common Clinical Pitfalls (DO NOT)
- DO NOT declare death in hypothermia ("not dead until warm and dead") unless there is obvious lethal injury, completely frozen/incompressible chest wall, or serum K+ > 12 mmol/L (avalanche/asphyxia).
- DO NOT deliver > 3 defibrillation shocks OR give IV Adrenaline/Amiodarone when core temperature is < 30°C — drugs accumulate in hypothermic tissues and cause toxicity upon rewarming.
- DO NOT handle the patient roughly or stand them upright — sudden cold venous return causes afterdrop and immediate VF cardiac arrest.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Obtain accurate core temperature immediately using a low-reading oesophageal probe (distal third) or bladder/epitympanic thermistor.
2. Activate ECMO Team & Cardiothoracic/ICU STAT for ANY hypothermic arrest (HT IV) or unstable HT III (<28°C).
3. Use gentle horizontal extrication, strip wet clothes with scissors, insulate head/body, and start warmed (40–42°C) IV fluids & humidified O2.

- **Stock & Equipment**: Low-reading oesophageal temperature probe (<25°C capable), forced-air warming blanket (Bair Hugger), Level-1/fluid warmer (42°C), and pleural/peritoneal lavage sets if ECMO delayed.
- **Admission / Transfer Criteria**: HT IV / HT III unstable: Direct VA-ECMO / CPB centre transfer. HT II–III stable: ICU active core & external rewarming.

### Algorithm: Swiss Staging, Hypothermic Arrest Guard & ECLS Triage

- **Presentation Trigger**: Exposure/immersion hypothermia (<32°C or <28°C), sluggish bradycardia, rigidity, or apparent cardiac arrest
- **Pathway Color Tag**: BLUE
- **Start Node**: `hypo-1`
- **Keywords**: hypothermia, swiss staging, afterdrop, hope score, ecmo, rewarming, 30 degrees, shocks

#### Node `hypo-1` — Core Temperature, Swiss Staging & 60-Second Life Check [DECISION]
> **Prompt**: Handle strictly horizontally, check pulse + breathing for a FULL 60 seconds (with POCUS if available), and measure core temp.

**Clinical Actions:**
- [ ] CORE TEMP: Place low-reading oesophageal probe (distal 1/3; wait if intubation pending, use epitympanic thermistor or bladder/rectal probe as interim). Standard oral/tympanic IR thermometers fail <34°C!
- [ ] 60-SECOND CHECK: Palpate carotid + check ECG + bedside POCUS for up to 60 FULL SECONDS — severe bradycardia (e.g., 10–15/min) and faint respirations can sustain life at <28°C.
- [ ] SWISS STAGING: HT I (35–32°C, conscious/shivering) · HT II (32–28°C, impaired consciousness/no shivering) · HT III (<28°C, unconscious, vital signs present) · HT IV (<24–28°C, no vital signs/arrest).
- [ ] REMOVE WET CLOTHING by cutting (keep horizontal!), wrap in vapour-barrier + blankets, and start warmed 40–42°C isotonic crystalloids.

**Contextual Pitfall Warning**: DO NOT start chest compressions if a perfusing rhythm or cardiac contraction is seen on POCUS/ECG (bradycardia at 12 bpm is physiological at 26°C — compressions may trigger VF!).

**Recommended Immediate Calls**: icu, ecmo_team

**Decision Branches:**
- **HT IV — Confirmed Cardiac Arrest (No Vital Signs / Asystole / VF)** (Triggers <30°C Shock & Drug Interval Guard + VA-ECMO Activation!) → `hypo-arrest`
- **HT II / HT III — Perfusing Rhythm Present (Vital Signs Intact)** → `hypo-perfusing`

#### Node `hypo-arrest` — Hypothermic Cardiac Arrest — Shock & Drug Guard + VA-ECMO [INTERVENTION]
> **Prompt**: Continuous CPR (mechanical CPR device ideal for transfer) while strictly enforcing <30°C shock/drug holds and activating VA-ECMO.

**Bedside Timer / Guard**: `Hypothermic Arrest Shock & Drug Guard` (hypothermia_guard, 480s)

**Clinical Actions:**
- [ ] ACTIVATE VA-ECMO / CPB STAT: ECLS is gold standard for HT IV arrest (even after hours of CPR!). Calculate HOPE score (age, sex, mechanism, CPR duration, core temp, K+); check arterial/venous K+ immediately (K+ >12 mmol/L suggests asphyxial irreversibility).
- [ ] TEMP < 30°C: Deliver MAX 3 defibrillation shocks for VF/pVT, then pause shocks until core temp ≥ 30°C. WITHHOLD IV Adrenaline & Amiodarone until ≥ 30°C.
- [ ] TEMP 30–34.9°C: Resume standard defibrillation and give IV Adrenaline 1 mg at DOUBLE intervals (every 6–10 minutes) until core temp ≥ 35°C.
- [ ] AIRWAY & BREATHING: Intubate gently (normoventilate based on uncorrected alpha-stat ABG) and ventilate with heated humidified O2 (40–42°C). If ECMO unavailable/delayed >60 min, initiate active internal rewarming (warmed bilateral pleural/peritoneal lavage + bladder lavage).

**Contextual Pitfall Warning**: DO NOT terminate CPR in hypothermic arrest before core temp reaches ≥ 32–35°C unless K+ > 12 mmol/L or obvious lethal trauma!

**Recommended Immediate Calls**: ecmo_team, icu, anaesthesia

**Decision Branches:**
- **Proceed to ECLS Rewarming & ICU Disposition** → `hypo-disp`

#### Node `hypo-perfusing` — HT II / HT III — Active External & Minimally Invasive Core Rewarming [INTERVENTION]
> **Prompt**: Rewarm trunk first to minimize afterdrop; escalate to VA-ECMO if HT III (<28°C) becomes unstable.

**Clinical Actions:**
- [ ] TRUNK-FIRST FORCED-AIR WARMING: Apply forced-air warming blanket (40–43°C) to trunk/axillae/groin (leave extremities insulated until trunk warms to avoid cold peripheral vasodilation afterdrop).
- [ ] WARMED IV FLUIDS + O2: Infuse 40–42°C crystalloids cautiously + heated humidified O2.
- [ ] WATCH FOR REWARMING SHOCK / ARRHYTHMIA: Treat severe hypotension with low-dose Norepinephrine; atrial fibrillation / Osborne J-waves usually resolve spontaneously with rewarming (avoid antiarrhythmics).
- [ ] HT III (<28°C) OR CO-MORBID CARDIAC INSTABILITY: Alert VA-ECMO / ICU team early on standby in case of peri-arrest collapse.

**Recommended Immediate Calls**: icu, ecmo_team

**Decision Branches:**
- **Rewarming Underway → ICU Disposition** → `hypo-disp`

#### Node `hypo-disp` — VA-ECMO / CPB Rewarming or ICU Critical Care [DISPOSITION]
> **Prompt**: Rewarm at ~2–5°C/hr on ECLS (avoid hyperthermia >36–37°C!) and monitor for post-rewarming rhabdomyolysis/oedema.

**Clinical Actions:**
- [ ] Target gradual rewarming to 36.0°C (avoid hyperthermia after ROSC; maintain targeted temperature management 32–36°C if post-arrest encephalopathy).
- [ ] Screen for hypoglycaemia, hyperkalaemia during rewarming, DIC, rhabdomyolysis, and frostbite injuries.

**Recommended Immediate Calls**: ecmo_team, icu

**Disposition**: VA-ECMO / CPB Suite → ICU (STAT Critical Care / ECLS Rewarming)
- [x] Continuous oesophageal core temp probe active
- [x] Serum K+ & HOPE score documented if arrest
- [x] Warming target ≤ 36.0–37.0°C (avoid rebound hyperthermia)

---

# Category: Immunology & Resuscitation

## 21. Refractory Anaphylaxis (Adrenaline-Resistant)

- **Category**: Immunology & Resuscitation
- **Escalation Roles**: icu, anaesthesia
- **Evidence Source**: Resuscitation Council UK (RCUK) / ASCIA — *Emergency Treatment of Anaphylaxis & Refractory Anaphylaxis Algorithm* (2024) [Strong Recommendation · Resuscitation Standard]
- **Citation**: Resuscitation Council UK Anaphylaxis Guidelines 2021; ASCIA Acute Management Update 2024.
- **Evidence Summary**: Defines Refractory Anaphylaxis as persistent ABC compromise after 2 doses of IM Adrenaline 0.5 mg, mandating immediate transition to Low-Dose IV Adrenaline Infusion (1 mg in 100 mL NS at 0.5–1.0 mL/kg/hr), rapid crystalloid boluses, Glucagon for beta-blocked patients, and early airway support.
- **Reference URL**: https://www.resus.org.uk/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give IV Adrenaline undiluted (1:1,000) or as rapid full-mg IV boluses in a perfusing patient — precipitates fatal VF, myocardial infarction, and cerebral haemorrhage!
- DO NOT sit a hypotensive anaphylaxis patient upright — causes "empty ventricle syndrome" and sudden PEA cardiac arrest.
- DO NOT rely on Antihistamines (Chlorphenamine) or Corticosteroids (Hydrocortisone) to treat acute airway oedema or shock — they are strictly secondary/delayed.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call ICU and Anaesthesia STAT as soon as a 2nd IM Adrenaline dose fails to reverse shock or stridor.
2. Mix Low-Dose IV Adrenaline Infusion immediately: 1 mg (1 mL of 1:1,000) in 100 mL Normal Saline = 10 mcg/mL.
3. Place 2 large-bore IVs for rapid 20 mL/kg crystalloid boluses and monitor continuous ECG + NIBP q1–2min.

- **Stock & Equipment**: Adrenaline 1:1,000 ampoules, 100 mL 0.9% NaCl minibags, Glucagon 1 mg vials, Norepinephrine, Vasopressin, videolaryngoscope + 6.0/6.5 ETTs.
- **Admission / Transfer Criteria**: All Refractory Anaphylaxis / IV Adrenaline infusion cases require ICU/HDU admission for ≥12–24h observation.

### Algorithm: Refractory Anaphylaxis — Low-Dose IV Adrenaline & Rescue

- **Presentation Trigger**: Persistent anaphylactic shock, severe bronchospasm, or airway oedema after ≥ 2 doses of IM Adrenaline
- **Pathway Color Tag**: RED
- **Start Node**: `ana-1`
- **Keywords**: anaphylaxis, refractory anaphylaxis, adrenaline infusion, epinephrine, glucagon, beta blocker, kounis, empty ventricle

#### Node `ana-1` — Trigger Removal, Posture, 2nd IM Adrenaline & Crystalloid [IMMEDIATE]
> **Prompt**: Stop suspected allergen/infusion, lay flat with legs elevated, give 2nd IM Adrenaline + 20 mL/kg fluid while mixing IV infusion.

**Clinical Actions:**
- [ ] STOP trigger immediately (e.g., IV antibiotic, contrast, blood product, colloids — leave cannula in place!).
- [ ] POSTURE: Lie flat with legs raised (or recovery position if vomiting/airway risk; NEVER sit upright).
- [ ] Apply 15 L/min 100% O2 via NRM and call ICU + Anaesthesia STAT if not rapidly improving after 2nd IM dose.

**Weight-Based Dosing Guidance:**
- **Adrenaline (Epinephrine) 1:1,000 IM (Anterolateral Thigh)**: `0.5 mg (0.5 mL of 1:1,000) IM — repeat after 5 min if no response` (IM anterolateral thigh, Max 2 IM doses before starting IV infusion)
- **Rapid Crystalloid Bolus (0.9% NaCl or Balanced)**: `20 mL/kg (max 2000 mL)` (Wide-open IV push / pressure bag, May need 2–4 L total due to massive capillary leak)

**Contextual Pitfall Warning**: DO NOT sit a hypotensive anaphylactic patient upright to "help them breathe" — sudden loss of venous return causes empty-ventricle cardiac arrest!

**Recommended Immediate Calls**: icu, anaesthesia

**Decision Branches:**
- **Refractory After 2 IM Doses → Start Low-Dose IV Adrenaline Infusion** (RCUK Refractory Anaphylaxis trigger!) → `ana-infusion`
- **Resolved Completely After 2nd IM Dose + Fluid** → `ana-disp`

#### Node `ana-infusion` — Low-Dose IV Adrenaline Infusion (Dual Rate mL/hr & mcg/min) [INTERVENTION]
> **Prompt**: Prepare standardized 10 mcg/mL bag (1 mg in 100 mL NS) and run via dedicated pump with continuous ECG.

**Clinical Actions:**
- [ ] If severe stridor, tongue/uvular swelling, or failing oxygenation: call Anaesthesia STAT for early awake/videolaryngoscopy intubation (have smaller ETT 6.0/6.5 + CICO kit ready).
- [ ] Repeat rapid crystalloid boluses (up to 50–60 mL/kg) if hypovolaemic shock persists.

**Weight-Based Dosing Guidance:**
- **Low-Dose IV Adrenaline Infusion (1 mg in 100 mL NS = 10 mcg/mL)**: `0.5–1 mL/hr/kg (max 100 mL/hr) [dual mL/hr + mcg/min]` (Dedicated IV infusion pump (peripheral or central), Titrate q2–3min to MAP ≥65 mmHg / relief of bronchospasm & stridor) [1 mg (1 mL of 1:1,000) in 100 mL 0.9% NaCl = 10 mcg/mL] — *Note: Continue IM Adrenaline q5min ONLY while mixing/priming pump. Never bolus undiluted 1:1,000 IV!*

**Contextual Pitfall Warning**: Verify pump concentration is 10 mcg/mL (1 mg in 100 mL) — confusing 10 mcg/mL with standard 100 mcg/mL ICU bags causes a 10× overdose!

**Recommended Immediate Calls**: icu, anaesthesia

**Decision Branches:**
- **On Beta-Blockers, Persistent Vasoplegia, or Severe Bronchospasm → Second-Line Adjuncts** → `ana-adjuncts`
- **Haemodynamics Stabilized on IV Adrenaline → ICU Admission** → `ana-disp`

#### Node `ana-adjuncts` — Beta-Blocker Glucagon Rescue, Second Pressors & Kounis Screen [INTERVENTION]
> **Prompt**: Bypass beta-blockade with IV Glucagon, add Norepinephrine/Vasopressin for vasoplegia, and check ECG for Kounis syndrome.

**Clinical Actions:**
- [ ] BRONCHOSPASM: Give nebulized Salbutamol 5 mg + Ipratropium 500 mcg (or nebulized Adrenaline 5 mg for upper airway stridor).
- [ ] KOUNIS SYNDROME CHECK: Obtain 12-lead ECG if chest pain or arrhythmias occur (allergic coronary vasospasm/plaque rupture — treat carefully with cardiology).
- [ ] SECONDARY MEDS (only after ABCs): Hydrocortisone 200 mg IV (if refractory wheeze/biphasic risk) + Chlorphenamine 10 mg IV / Cetirizine 10 mg PO (urticaria only).

**Weight-Based Dosing Guidance:**
- **Glucagon (If Patient Takes Beta-Blockers)**: `1–2 mg IV slow push q5min until response, then 1–5 mg/hr infusion` (IV over 5 min, Bypasses blocked beta-receptors via direct cAMP activation (expect vomiting!))
- **Norepinephrine OR Vasopressin (Refractory Vasoplegia)**: `Norepinephrine 0.05–0.5 mcg/kg/min OR Vasopressin 0.03–0.04 U/min IV` (IV infusion, Run alongside Adrenaline infusion if SBP remains <90 mmHg)

**Recommended Immediate Calls**: icu, anaesthesia

**Decision Branches:**
- **Proceed to ICU Admission & Tryptase Sampling** → `ana-disp`

#### Node `ana-disp` — ICU Monitoring, Mast Cell Tryptase & Allergy Plan [DISPOSITION]
> **Prompt**: Admit for continuous weaning of IV Adrenaline, draw timed tryptase levels, and prescribe self-injectable adrenaline.

**Clinical Actions:**
- [ ] Draw Serum Mast Cell Tryptase as soon as resuscitation allows (ideal 1–2h post-onset, repeat at ≥24h baseline).
- [ ] Observe in ICU/HDU for ≥12–24 hours after stopping IV adrenaline (refractory cases carry high biphasic reaction risk).

**Recommended Immediate Calls**: icu

**Disposition**: Intensive Care Unit (ICU) / HDU (STAT Critical Care Admission)
- [x] IV Adrenaline concentration (10 mcg/mL) & pump rate verified
- [x] Mast cell tryptase sample drawn (time logged)
- [x] Allergen culprit flagged in chart + discharge EpiPen/Allergy referral planned

---

# Category: Toxicology (HALO)

## 22. Beta Blocker Overdose

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu, cardiology
- **Evidence Source**: TOXBASE / AHA Toxicology Focused Update — *Management of Severe Beta-Blocker Poisoning* (2023) [Class I · Level B-NR]
- **Citation**: Lavonas EJ et al. Circulation 2023; TOXBASE Beta-Adrenoceptor Antagonist Monograph.
- **Evidence Summary**: Prioritizes Glucagon bolus/infusion, High-Dose Insulin Euglycaemic Therapy (HIET: 1 U/kg bolus + 1–10 U/kg/hr), vasopressors, Sodium Bicarbonate for Propranolol QRS widening, and Lipid Emulsion / VA-ECMO for refractory arrest.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT waste time waiting for Glucagon alone to save profound shock — start High-Dose Insulin Euglycaemic Therapy (HIET) EARLY (takes 15–30 min to peak)!
- DO NOT overlook wide QRS (>100 ms) in Propranolol overdose — give Sodium Bicarbonate + consider Intralipid!
- DO NOT forget fingerstick blood glucose & K+ checks every 15–30 min during HIET.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call Toxicology / Poison Control and ICU Senior on presentation of symptomatic BB overdose.
2. Order high-concentration Regular Insulin bags from Pharmacy STAT (10 units/mL concentration prevents fluid overload!).
3. Alert VA-ECMO / Cardiac team early if Propranolol or refractory cardiogenic shock.

- **Stock & Equipment**: Glucagon 1 mg vials (need 5–10 vials for bolus!), Intralipid 20%, and D50W stocked in Resus Drug Cart.
- **Admission / Transfer Criteria**: ICU admission for all patients requiring Glucagon, HIET, vasopressors, or sustained-release preparations.

### Algorithm: Beta Blocker Shock & Bradycardia

- **Presentation Trigger**: Refractory bradycardia, hypotension, AV block, or QRS widening after beta-blocker ingestion
- **Start Node**: `bb-1`
- **Keywords**: beta blocker, propranolol, metoprolol, atenolol, glucagon, hiet, insulin, intralipid

#### Node `bb-1` — Resuscitation, ECG Check & Early Atropine/Glucagon [IMMEDIATE]
> **Prompt**: Check 12-lead ECG (QRS width!), give Atropine + fluids, and administer Glucagon if bradycardic/hypotensive.

**Clinical Actions:**
- [ ] Give Atropine 0.5–1 mg IV + cautious 500 mL crystalloid bolus (rarely sufficient alone).
- [ ] Obtain 12-lead ECG: check for QRS >100 ms (Propranolol Na-channel blockade) or QTc prolongation (Sotalol!).
- [ ] Administer Glucagon 5–10 mg IV slow push (pre-treat with Ondansetron 4 mg IV for severe vomiting; note 1 mg/vial stock will rapidly deplete).
- [ ] If Glucagon improves MAP/HR, start Glucagon infusion 3–5 mg/hr while priming HIET.

**Contextual Pitfall Warning**: 5–10 mg Glucagon bolus will exhaust ED Resus vial stock — order 10–20 vials from Pharmacy STAT at T=0 while priming HIET immediately.

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **QRS > 100 ms (Propranolol) OR Severe Hypotension → HIET + NaHCO3** → `bb-hiet`
- **Responded to Fluids / Glucagon Alone (Stable)** → `bb-disp`

#### Node `bb-hiet` — High-Dose Insulin (HIET) + Weight-Based Dosing [INTERVENTION]
> **Prompt**: Start HIET immediately (takes 15–30 min for peak inotropy). Give NaHCO3 if QRS > 100 ms.

**Clinical Actions:**
- [ ] Start D10W or D50W infusion concurrently to maintain euglycaemia; monitor capillary glucose q15–30min.
- [ ] Monitor K+ q30–60min (replete only if K+ < 2.8–3.0 mmol/L — HIET shifts K+ intracellularly rather than causing true depletion).
- [ ] Add Norepinephrine or Epinephrine infusion concurrently for blood pressure support while HIET takes effect.

**Weight-Based Dosing Guidance:**
- **Regular Insulin Bolus (HIET)**: `1 units/kg` (IV push, Check glucose first (give 25–50 g D50W if BG < 11 mmol/L or < 200 mg/dL))
- **Regular Insulin Infusion**: `1–10 units/hr/kg` (IV infusion, Start at 1 U/kg/hr; titrate up q20–30min to MAP ≥65) [Use concentrated 10 units/mL solution]
- **Sodium Bicarbonate (if QRS > 100 ms)**: `1–2 mEq/kg (max 150 mEq)` (IV push, Repeat q5min until QRS narrows) [8.4% = 1 mEq/mL]

**Decision Branches:**
- **Shock Refractory to HIET + Vasopressors → Intralipid / VA-ECMO** → `bb-refractory`
- **MAP ≥ 65 mmHg Stabilized → Admit ICU** → `bb-disp`

#### Node `bb-refractory` — Lipid Emulsion (Propranolol) & VA-ECMO Rescue [DISPOSITION]
> **Prompt**: Administer Intralipid 20% for lipophilic agents (Propranolol) and activate VA-ECMO.

**Clinical Actions:**
- [ ] Activate VA-ECMO team immediately for refractory cardiogenic shock or arrest.
- [ ] If Sotalol Torsades de Pointes: MgSO4 2 g IV + overdrive pacing / Isoproterenol.

**Weight-Based Dosing Guidance:**
- **Intralipid 20% Emulsion Bolus**: `1.5 mL/kg (max 100 mL)` (IV over 1–3 min, Followed by 0.25 mL/kg/min for 30–60 min (max initial bolus 100 mL))

**Recommended Immediate Calls**: icu, cardiology, toxicology

**Disposition**: ICU / VA-ECMO Cannulation (STAT Critical Care Rescue)
- [x] Hourly glucose & K+ orders active for 24h post-HIET

#### Node `bb-disp` — ICU Monitoring (Delayed Hypoglycaemia Watch) [DISPOSITION]
> **Prompt**: Continue HIET/Dextrose monitoring in ICU; monitor for late hypoglycaemia after HIET is weaned.

**Disposition**: Intensive Care Unit (ICU) (Critical Care Admission)
- [x] Continue dextrose infusion and q30–60min glucose checks for ≥12h after stopping HIET

---

## 23. Calcium Channel Blocker Overdose

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu, cardiology
- **Evidence Source**: TOXBASE / AHA / Goldfrank’s Toxicology — *Expert Consensus on Calcium Channel Blocker Poisoning* (2023) [Class I · Level B-NR]
- **Citation**: St-Onge M et al. Crit Care Med 2017; AHA Toxicology Focused Update 2023.
- **Evidence Summary**: Recommends first-line IV Calcium, early High-Dose Insulin Euglycaemic Therapy (HIET) + Norepinephrine/Epinephrine, Methylene Blue for refractory vasoplegia (Amlodipine/Nifedipine), and VA-ECMO.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT underestimate sustained-release Verapamil/Diltiazem/Nifedipine — patients can appear well initially then crash catastrophically 6–12h later.
- DO NOT administer excessive IV crystalloid boluses — CCB overdose impairs both contractility and vascular tone, leading to rapid pulmonary oedema.
- DO NOT delay High-Dose Insulin (HIET) — it is first-line alongside Calcium and Vasopressors for CCB cardiogenic shock.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Call ICU and Toxicology STAT on any symptomatic CCB or sustained-release ingestion.
2. Place central venous access & arterial line early for high-dose vasopressors + calcium chloride + concentrated insulin.
3. Alert VA-ECMO service early if shock persists on 2 vasopressors + HIET.

- **Stock & Equipment**: Calcium Chloride 10%, concentrated Regular Insulin, D50W, and Methylene Blue in Resus/Pharmacy.
- **Admission / Transfer Criteria**: All symptomatic CCB overdoses require ICU admission; asymptomatic sustained-release ingestions require ≥24h monitored observation.

### Algorithm: CCB Cardiogenic & Vasodilatory Shock

- **Presentation Trigger**: Hypotension, bradycardia/AV block (Verapamil/Diltiazem), or vasoplegic shock (Amlodipine)
- **Start Node**: `ccb-1`
- **Keywords**: ccb, calcium channel blocker, amlodipine, verapamil, diltiazem, hiet, calcium, methylene blue

#### Node `ccb-1` — IV Calcium + Decontamination Check [IMMEDIATE]
> **Prompt**: Start IV Calcium immediately and establish arterial/central access. Check sustained-release ingestion.

**Clinical Actions:**
- [ ] Give Atropine 0.5–1 mg IV if bradycardic (often minimal response).
- [ ] If early (<2h) or massive sustained-release ingestion & airway safe: Activated Charcoal 50 g PO (consult Tox for whole-bowel irrigation).
- [ ] Perform bedside POCUS: hyperdynamic empty LV (dihydropyridines like Amlodipine) vs depressed hypokinetic LV (Verapamil/Diltiazem).

**Weight-Based Dosing Guidance:**
- **Calcium Chloride 10% (Central Line preferred)**: `0.2 mL/kg (max 20 mL)` (IV slow over 5–10 min, Repeat q10–20min ×3 or start 0.2–0.5 mL/kg/hr infusion) [100 mg/mL (3× more Ca2+ than gluconate)]
- **OR Calcium Gluconate 10% (Peripheral IV safe)**: `0.6 mL/kg (max 60 mL)` (IV slow over 5–10 min, Target ionized Ca2+ up to 2.0 mmol/L)

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **Shock / Bradycardia Persists → Start HIET + Vasopressors** → `ccb-hiet`

#### Node `ccb-hiet` — High-Dose Insulin (HIET) + Targeted Vasopressors [INTERVENTION]
> **Prompt**: Start HIET AND Norepinephrine concurrently. Titrate HIET rapidly every 20–30 minutes.

**Clinical Actions:**
- [ ] Start Norepinephrine (first-line for dihydropyridine vasoplegia) ± Epinephrine (for cardiogenic shock/bradycardia).
- [ ] Check capillary glucose q15–30min and K+ q30–60min.
- [ ] Consider Vasopressin (0.03–0.04 U/min) as second vasopressor.

**Weight-Based Dosing Guidance:**
- **Regular Insulin Bolus (HIET)**: `1 units/kg` (IV push, Give 25–50 g D50W first if glucose < 11 mmol/L (<200 mg/dL))
- **Regular Insulin Infusion**: `1–10 units/hr/kg` (IV infusion, Titrate up by 1–2 U/kg/hr q20–30min until perfusion restored) [10 units/mL concentrated bag]

**Contextual Pitfall Warning**: DO NOT give large normal saline boluses for Amlodipine vasoplegia — causes fatal ARDS/pulmonary oedema.

**Decision Branches:**
- **Refractory Shock → Methylene Blue / Intralipid / VA-ECMO** → `ccb-refractory`
- **Haemodynamics Stabilized → ICU Admission** → `ccb-disp`

#### Node `ccb-refractory` — Refractory CCB Rescue (Methylene Blue / VA-ECMO) [DISPOSITION]
> **Prompt**: Use Methylene Blue for dihydropyridine vasoplegia; activate VA-ECMO early before arrest.

**Clinical Actions:**
- [ ] Activate VA-ECMO team IMMEDIATELY for refractory shock (do not wait for full cardiac arrest).
- [ ] Transvenous pacing can capture heart rate, though mechanical contractility still depends on HIET/catecholamines.

**Weight-Based Dosing Guidance:**
- **Methylene Blue (Vasoplegic Shock)**: `1–2 mg/kg` (IV over 10–15 min, Single rescue dose (± 0.25–1 mg/kg/hr infusion)) — *Note: Avoid in G6PD deficiency or concurrent SSRIs (serotonin syndrome risk).*
- **Intralipid 20% (Lipophilic CCB arrest/peri-arrest)**: `1.5 mL/kg (max 100 mL)` (IV bolus, Followed by 0.25 mL/kg/min infusion (max initial bolus 100 mL))

**Recommended Immediate Calls**: icu, cardiology, toxicology

**Disposition**: ICU / VA-ECMO Cannulation (STAT Critical Care Rescue)
- [x] Central + arterial lines secured
- [x] Continuous HIET + dextrose protocol active

#### Node `ccb-disp` — ICU Admission & Whole-Bowel Follow-up [DISPOSITION]
> **Prompt**: Transfer to ICU for sustained-release clearance and prolonged HIET weaning.

**Disposition**: Intensive Care Unit (ICU) (Critical Care Admission)
- [x] Hourly glucose/K+ and ionized Ca2+ checks active

---

## 24. TCA Overdose

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu, anaesthesia
- **Evidence Source**: TOXBASE / Goldfrank’s / AHA — *Sodium-Channel Blocker & Tricyclic Antidepressant Toxicity* (2023) [Class I · Level B]
- **Citation**: AHA Resuscitation Toxicology Update 2023; Goldfrank’s Toxicologic Emergencies.
- **Evidence Summary**: Triggers IV Sodium Bicarbonate boluses (1–2 mEq/kg) for QRS >100 ms, hypotension, or VT; benzodiazepines for seizures; hyperventilation (pH 7.50–7.55) if intubated; and Lipid Emulsion for refractory arrest.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give Flumazenil (precipitates refractory status epilepticus) or Phenytoin (worsens Na-channel cardiotoxicity).
- DO NOT give Physostigmine in TCA overdose — precipitates fatal asystole!
- DO NOT wait for serum drug levels — ECG QRS >100 ms or terminal R in aVR >3 mm is the immediate trigger for Sodium Bicarbonate!

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Perform immediate 12-lead ECG at triage on every suspected TCA ingestion.
2. Stock 8.4% Sodium Bicarbonate 50 mL vials/prefilled syringes in Resus Bay prior to deterioration.
3. Call ICU and Toxicology immediately if QRS ≥ 100 ms, seizures, or GCS drop.

- **Stock & Equipment**: 8.4% Sodium Bicarbonate (1 mEq/mL) 50 mL bottles & Intralipid 20% stored in Resus Drug Cart.
- **Admission / Transfer Criteria**: ICU admission for any QRS >100 ms, seizures, hypotension, or arrhythmia; minimum 6h cardiac monitoring if completely asymptomatic.

### Algorithm: TCA Sodium-Channel & CNS Toxicity

- **Presentation Trigger**: Anticholinergic delirium, coma, seizures, hypotension, or wide QRS / R-wave in aVR
- **Start Node**: `tca-1`
- **Keywords**: tca, amitriptyline, qrs, avr, sodium bicarbonate, seizure, intralipid

#### Node `tca-1` — Immediate 12-Lead ECG & Airway Assessment [DECISION]
> **Prompt**: Check QRS duration, terminal R wave in aVR (>3 mm), and CNS status. Are Na-channel toxicity signs present?

**Clinical Actions:**
- [ ] Obtain 12-lead ECG immediately (repeat every 10–15 min for first 2 hours).
- [ ] Assess airway & seizure risk (TCA coma/seizures progress very rapidly!).

**Contextual Pitfall Warning**: DO NOT give Physostigmine, Flumazenil, or Class Ia/Ic/III antiarrhythmics (Amiodarone/Procainamide).

**Decision Branches:**
- **YES — QRS > 100 ms, R in aVR > 3 mm, VT, or Hypotension** → `tca-bicarb`
- **Seizures / Severe Agitation (Before or With Wide QRS)** → `tca-seizure`
- **NO — Normal ECG (QRS < 100 ms) & Alert** → `tca-observe`

#### Node `tca-bicarb` — STAT Sodium Bicarbonate (Weight-Based) [INTERVENTION]
> **Prompt**: Administer 8.4% Sodium Bicarbonate 1–2 mEq/kg IV bolus and repeat until QRS narrows.

**Clinical Actions:**
- [ ] Start isotonic NaHCO3 infusion after bolus (150 mEq in 1 L D5W at 150–250 mL/hr); do NOT exceed serum pH 7.55.
- [ ] If hypotensive despite NaHCO3 + fluids: start Norepinephrine infusion.
- [ ] Monitor serum K+ closely (alkalinization drives hypokalaemia).

**Weight-Based Dosing Guidance:**
- **8.4% Sodium Bicarbonate Bolus**: `1–2 mEq/kg (max 150 mEq)` (Rapid IV push, Repeat q3–5min until QRS < 100 ms & pH 7.50–7.55) [8.4% = 1 mEq per 1 mL]

**Recommended Immediate Calls**: icu, toxicology

**Decision Branches:**
- **Refractory Wide-Complex VT / Arrest → Intralipid + Lidocaine** → `tca-refractory`
- **QRS Narrowed & BP Restored → ICU** → `tca-disp`

#### Node `tca-seizure` — Seizure Control + Early Intubation [INTERVENTION]
> **Prompt**: Stop seizures IMMEDIATELY with benzodiazepines (acidosis worsens TCA binding to myocardium!).

**Clinical Actions:**
- [ ] Give Lorazepam 2–4 mg IV or Midazolam 5–10 mg IV (repeat if needed; Propofol if refractory).
- [ ] Intubate early for airway protection / recurrent seizures — hyperventilate gently to target pH 7.50–7.55!
- [ ] Check ECG immediately post-seizure and give NaHCO3 if QRS >100 ms.

**Contextual Pitfall Warning**: DO NOT give Phenytoin — worsens sodium channel blockade!

**Recommended Immediate Calls**: anaesthesia, icu

**Decision Branches:**
- **Proceed to NaHCO3 / ECG Check** → `tca-bicarb`

#### Node `tca-refractory` — Intralipid 20% + Lidocaine Rescue [DISPOSITION]
> **Prompt**: For refractory VT/arrest despite NaHCO3: give Lidocaine (Class Ib) and Intralipid 20%.

**Clinical Actions:**
- [ ] Lidocaine 1–1.5 mg/kg IV (Class Ib antiarrhythmic — safe alternative when NaHCO3 insufficient for VT).
- [ ] Continue CPR for prolonged period in TCA arrest if pH 7.50–7.55 maintained; consider VA-ECMO.

**Weight-Based Dosing Guidance:**
- **Intralipid 20% Bolus**: `1.5 mL/kg (max 100 mL)` (IV push, Repeat up to 3× or infuse 0.25 mL/kg/min (max initial bolus 100 mL))

**Recommended Immediate Calls**: icu, toxicology

**Disposition**: ICU / VA-ECMO Escalation (STAT Critical Care)
- [x] Arterial pH (7.50–7.55) & K+ tracked hourly

#### Node `tca-observe` — 6-Hour Cardiac & Neurological Observation [DISPOSITION]
> **Prompt**: Monitor continuously for 6 hours. Any QRS widening or CNS decline moves immediately to NaHCO3.

**Clinical Actions:**
- [ ] If <1–2h post-ingestion and fully alert/protected airway: Activated Charcoal 50 g PO.
- [ ] Continuous telemetry + repeat ECGs at 1h, 2h, 4h, 6h.

**Disposition**: Monitored ED Observation (≥6h) → Psychiatry / Ward if cleared (Monitored Observation)
- [x] Normal QRS <100 ms, normal HR, normal mental status at 6 hours

#### Node `tca-disp` — ICU Admission & Alkalinization Taper [DISPOSITION]
> **Prompt**: Admit to ICU with continuous ECG and arterial pH/potassium monitoring.

**Disposition**: Intensive Care Unit (ICU) (Critical Care Admission)
- [x] Maintain pH 7.45–7.55 until QRS remains <100 ms off bicarbonate

---

## 25. Paraquat Poisoning

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu
- **Evidence Source**: TOXBASE / Regional Poison Centre Consensus — *Acute Paraquat Poisoning Management* (2024) [Grade B · Observational Consensus]
- **Citation**: Gawarammana IB, Buckley NA. Br J Clin Pharmacol 2011; TOXBASE Paraquat 2024.
- **Evidence Summary**: Mandates urgent oral adsorbent decontamination (<1–2h), strict avoidance of supplemental oxygen unless SpO2 <88–90% (hypoxic strategy), early Toxicology/Nephrology consult, and consideration of pulse immunosuppression.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT give routine supplemental oxygen! High FiO2 accelerates catastrophic free-radical pulmonary fibrosis.
- DO NOT perform aggressive gastric lavage if severe oral/oesophageal caustic burns are present.
- DO NOT omit early urine dithionite test or plasma paraquat level — prognosis & renal/immunosuppressive urgency depend on it.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Place a bright bedside sign: "NO OXYGEN UNLESS SpO2 < 90%".
2. Call Toxicology / Poison Control and ICU STAT for plasma paraquat assay & immunosuppression protocol.
3. Arrange urgent Nephrology consult if early haemoperfusion/haemodialysis indicated (<4h).

- **Stock & Equipment**: Activated Charcoal (50–100 g) or Fuller’s Earth in ED Decontamination Bay.
- **Admission / Transfer Criteria**: All confirmed/suspected Paraquat ingestions require inpatient admission (HDU/ICU for systemic toxicity).

### Algorithm: Paraquat O2-Restriction & Decontamination

- **Presentation Trigger**: Suspected or confirmed Paraquat herbicide ingestion or cutaneous/mucosal exposure
- **Start Node**: `pq-1`
- **Keywords**: paraquat, herbicide, oxygen, hypoxia, charcoal, fullers earth, pulmonary fibrosis

#### Node `pq-1` — Decontamination & STRICT Oxygen Check [IMMEDIATE]
> **Prompt**: Turn OFF routine O2! Decontaminate skin/GI immediately and measure baseline SpO2.

**Clinical Actions:**
- [ ] Remove contaminated clothing; wash skin/eyes copiously with soap and water.
- [ ] If within 1–2 hours of ingestion and airway intact: give Activated Charcoal 50–100 g PO (or Fuller’s Earth if stocked).
- [ ] Assess oral/pharyngeal caustic burns; give IV analgesia + PPI + cautious IV fluids for AKI prevention.
- [ ] Call Toxicology / Poison Control STAT.

**Contextual Pitfall Warning**: DO NOT place nasal cannula or mask O2 by reflex — oxygen drives lethal superoxide pulmonary damage!

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **SpO2 ≥ 90% on Room Air** (Maintain room air! Zero supplemental O2.) → `pq-no-o2`
- **SpO2 < 88–90% (Severe Hypoxaemia)** (Low-flow titrated O2 strictly to 88–90% ONLY.) → `pq-low-o2`

#### Node `pq-no-o2` — Maintain Room Air + Early Toxicology Protocol [DISPOSITION]
> **Prompt**: Keep off O2. Obtain urine dithionite test / plasma paraquat level and start specialist protocol.

**Clinical Actions:**
- [ ] Send STAT urine sodium dithionite test (blue/dark green confirms significant paraquat absorption), renal/hepatic panel, ABG, CXR.
- [ ] Discuss early pulse immunosuppression (Methylprednisolone + Cyclophosphamide) & N-acetylcysteine / Vitamin C antioxidants with Toxicology & ICU.

**Recommended Immediate Calls**: toxicology, icu

**Disposition**: HDU / ICU (Strict Room-Air Bedside Protocol) (STAT Toxicology Admission)
- [x] "NO SUPPLEMENTAL O2 UNLESS SpO2 < 90%" sign taped at wall O2 port

#### Node `pq-low-o2` — Permissive Hypoxaemia (Target SpO2 88–90%) [DISPOSITION]
> **Prompt**: Titrate minimum possible O2 ONLY to relieve severe distress / keep SpO2 88–90%.

**Clinical Actions:**
- [ ] Discuss goals of care and prognosis early with ICU, Toxicology, and family if massive ingestion + early hypoxia/multi-organ failure.
- [ ] Avoid high-flow FiO2 unless transitioning to palliative comfort oxygenation.

**Recommended Immediate Calls**: icu, toxicology

**Disposition**: ICU / Palliative & Toxicology Co-Management (STAT Critical Care Review)
- [x] Senior Toxicology & ICU consult documented

---

## 26. Carbon Monoxide Poisoning

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu
- **Evidence Source**: ACEP / TOXBASE / UHMS — *Clinical Policy on Acute Carbon Monoxide Poisoning* (2023) [Level B Recommendation]
- **Citation**: Wolf SJ et al. Ann Emerg Med 2017; TOXBASE Carbon Monoxide Monograph 2023.
- **Evidence Summary**: Mandates immediate 100% FiO2 via tight non-rebreather mask (halves COHb t1/2 to ~75 min), venous/arterial co-oximetry, cyanide co-toxicity check in fires, and Hyperbaric Oxygen (HBO2) triage for neuro/cardiac/pregnancy risk.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT trust standard pulse oximetry (SpO2) — it reads falsely normal (98–100%) despite lethal COHb!
- DO NOT miss co-ingestion of CYANIDE in enclosed-space house/industrial fires (check lactate ≥ 8–10 mmol/L → give Hydroxocobalamin!).
- DO NOT discharge a pregnant patient without assessing foetal COHb vulnerability (lower threshold for HBO2).

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Apply 15 L/min 100% FiO2 tight-fitting non-rebreather mask immediately at triage.
2. Run STAT blood gas with CO-OXIMETRY + serum lactate + troponin + 12-lead ECG.
3. Call Toxicology / Hyperbaric Oxygen (HBO2) Chamber Unit immediately if any high-risk criteria met.

- **Stock & Equipment**: Hydroxocobalamin (Cyanokit 5 g) in Resus Drug Cart for smoke-inhalation fire victims.
- **Admission / Transfer Criteria**: Admit/transfer for HBO2 if syncope, coma, neuro deficit, ischemia, pregnancy with COHb >15%, or COHb >25%.

### Algorithm: CO Toxicity & Hyperbaric Triage

- **Presentation Trigger**: Fire smoke exposure, charcoal burning, faulty heater, headache, syncope, or coma
- **Start Node**: `co-1`
- **Keywords**: carbon monoxide, cohb, hyperbaric, hbo2, cyanide, hydroxocobalamin, pregnancy

#### Node `co-1` — 100% FiO2 + Co-Oximetry + Cyanide Check [IMMEDIATE]
> **Prompt**: Apply 100% O2 via tight NRM (or ETT) immediately. Check VBG/ABG COHb & Lactate.

**Clinical Actions:**
- [ ] Apply 15 L/min 100% O2 via tight-fitting non-rebreather mask (or intubate at FiO2 1.0 if GCS ≤8 / airway burns).
- [ ] Measure COHb via blood gas CO-oximetry (venous or arterial correlate well; ignore standard SpO2).
- [ ] Obtain 12-lead ECG, troponin, serum lactate, and pregnancy test in childbearing-age females.

**Contextual Pitfall Warning**: Pulse oximetry CANNOT distinguish carboxyhaemoglobin from oxyhaemoglobin — always obtain blood gas co-oximetry.

**Decision Branches:**
- **Enclosed-Space Fire + Lactate ≥ 8–10 mmol/L or Shock?** (Suspect concurrent CYANIDE poisoning!) → `co-cyanide`
- **Isolated CO Exposure → Evaluate HBO2 Criteria** → `co-hbo-check`

#### Node `co-cyanide` — Treat Concurrent Cyanide Toxicity STAT [INTERVENTION]
> **Prompt**: Administer Hydroxocobalamin 5 g IV immediately in fire-smoke victims with severe lactic acidosis/shock.

**Clinical Actions:**
- [ ] Give Hydroxocobalamin (Cyanokit) 5 g IV over 15 minutes (repeat 5 g if arrest/refractory shock).
- [ ] Continue 100% FiO2 and proceed to Hyperbaric Oxygen (HBO2) evaluation.

**Contextual Pitfall Warning**: Hydroxocobalamin turns blood/urine bright red and interferes with colorimetric labs & co-oximetry — draw baseline labs first if possible!

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **Proceed to HBO2 Triage** → `co-hbo-check`

#### Node `co-hbo-check` — Hyperbaric Oxygen (HBO2) Criteria Check [DECISION]
> **Prompt**: Does the patient meet ANY high-risk indication for Hyperbaric Oxygen?

**Clinical Actions:**
- [ ] Check: (1) Loss of consciousness / syncope? (2) Altered mental status, confusion, seizure, or focal neuro deficit?
- [ ] Check: (3) Myocardial ischemia / troponin rise / arrhythmia? (4) Severe acidosis (pH < 7.1)?
- [ ] Check: (5) Pregnancy with COHb ≥ 15% or foetal distress? (6) COHb > 25%?

**Decision Branches:**
- **YES — ≥ 1 High-Risk Criterion Met** (Arrange Hyperbaric Oxygen (HBO2) within 6–24h!) → `co-hbo-yes`
- **NO — Mild Symptoms Only & Normal ECG/Neuro/Not Pregnant** (Continue 100% normobaric O2 until asymptomatic & COHb < 5%.) → `co-normobaric`

#### Node `co-hbo-yes` — Activate Hyperbaric Oxygen (HBO2) / ICU [DISPOSITION]
> **Prompt**: Continue 100% O2 uninterrupted and contact Toxicology / HBO2 Unit immediately.

**Clinical Actions:**
- [ ] Maintain 100% FiO2 continuously during transfer.
- [ ] If pregnant: arrange Obstetric/foetal monitoring alongside HBO2.

**Recommended Immediate Calls**: toxicology, icu

**Disposition**: Hyperbaric Oxygen Chamber / ICU (Urgent HBO2 Referral (Ideal < 6h))
- [x] Continuous 100% O2
- [x] ECG, troponin, lactate, and neuro exam documented

#### Node `co-normobaric` — Normobaric 100% O2 & Safe Discharge Criteria [DISPOSITION]
> **Prompt**: Continue 100% O2 via NRM for 4–6 hours until symptoms resolve and COHb < 3–5%.

**Clinical Actions:**
- [ ] Ensure safe source mitigation (fire/gas inspection or self-harm psychiatry evaluation) before discharge.

**Disposition**: ED Observation (4–6h) → Safe Discharge / Psych Review (Standard Observation)
- [x] Repeat COHb < 5% and normal neurological exam

---

## 27. Toxic Alcohols (Methanol & Ethylene Glycol)

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu
- **Evidence Source**: TOXBASE / AACT / EXTRIP Workgroup — *Management of Methanol & Ethylene Glycol Poisoning* (2024) [Strong Recommendation · Extracorporeal Consensus]
- **Citation**: Roberts DM et al. (EXTRIP) Kidney Int 2015; Ghannoum M et al. Crit Care 2023; TOXBASE 2024.
- **Evidence Summary**: Mandates early Osmolar Gap (SI) + anion gap assessment, immediate ADH inhibition (Fomepizole preferred over Ethanol), metabolic cofactors (Folinic acid for Methanol; Thiamine + Pyridoxine for Ethylene Glycol), NaHCO3 for severe acidaemia, and urgent haemodialysis with intra-dialytic antidote adjustment.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT wait for serum Methanol/Ethylene Glycol levels (often send-out) before starting ADH blockade — treat immediately for unexplained Osmolar Gap > 10 mOsm/kg or HAGMA!
- DO NOT miss the Dialysis Clearance Trap: both Fomepizole and Ethanol are rapidly cleared by haemodialysis — increase Fomepizole dosing to q4h (or double Ethanol infusion rate) DURING haemodialysis!
- DO NOT confuse Ethylene Glycol’s false-positive "Lactate Gap" on point-of-care blood gas analyzers (glycolate cross-reacts with L-lactate oxidase) with true sepsis/hypoperfusion.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Calculate SI Osmolar Gap immediately alongside VBG/ABG, electrolytes, serum glucose, urea, and ethanol level.
2. Call Toxicology / Poison Control and Nephrology / ICU STAT if Osmolar Gap >10, pH <7.25, visual symptoms, or AKI.
3. Verify local stock of Fomepizole vs 10% IV Ethanol (switchable in HALO Admin Hub) and initiate ADH blockade without delay.

- **Stock & Equipment**: Fomepizole 1.5 g/1.5 mL vials (or 10% IV Ethanol in D5W), Folinic acid (Leucovorin), Thiamine, Pyridoxine, 8.4% NaHCO3.
- **Admission / Transfer Criteria**: ICU admission for all symptomatic/acidotic toxic alcohol exposures or haemodialysis candidates.

### Algorithm: Toxic Alcohol Osmolar Gap, ADH Blockade & Dialysis

- **Presentation Trigger**: Unexplained high anion gap metabolic acidosis (HAGMA), high osmolar gap, visual snow/blindness (Methanol), or AKI/flank pain (Ethylene Glycol)
- **Pathway Color Tag**: AMBER
- **Start Node**: `alc-1`
- **Keywords**: toxic alcohol, methanol, ethylene glycol, osmolar gap, fomepizole, ethanol, folinic acid, haemodialysis

#### Node `alc-1` — SI Osmolar Gap Calculator & Toxidrome Screening [DECISION]
> **Prompt**: Calculate Osmolar Gap in SI units (mmol/L) immediately. Remember a normal Osmolar Gap does NOT exclude late presentation after metabolism!

**Inline Bedside Calculator**: `osmolar_gap`

**Clinical Actions:**
- [ ] DRAW STAT LABS: Measured serum osmolality (freezing-point depression), Na+, K+, Cl-, HCO3-, Urea, Glucose, Serum Ethanol, VBG/ABG, lactate, creatinine, and visual acuity / fundoscopy.
- [ ] METHANOL CLUES: "Snowfield" blurred vision, dilated sluggish pupils, optic disc hyperaemia, severe HAGMA (formic acid).
- [ ] ETHYLENE GLYCOL CLUES: Inebriation without ethanol smell, AKI, hypocalcaemia, urinary calcium oxalate crystals, and huge "Lactate Gap" (falsely high POC blood gas lactate vs normal lab lactate).

**Contextual Pitfall Warning**: If the patient also co-ingested Ethanol, subtract [Ethanol mmol/L × 1.25] from the Osmolar Gap — AND remember late presenters may have a NORMAL osmolar gap with severe HAGMA!

**Recommended Immediate Calls**: toxicology

**Decision Branches:**
- **Osmolar Gap > 10 OR Unexplained HAGMA / Suspected Ingestion → Start ADH Blockade STAT** → `alc-adh`

#### Node `alc-adh` — ADH Blockade (Fomepizole / Ethanol) + Cofactors + Alkalinization [INTERVENTION]
> **Prompt**: Halt formation of toxic formic/oxalic acid IMMEDIATELY with Fomepizole (or IV Ethanol if unstocked) and give pathway cofactors.

**Clinical Actions:**
- [ ] Keep Fomepizole active continuously (switch to Ethanol only if Fomepizole unavailable; adjust stock toggle in Admin Hub if needed).
- [ ] Correct severe symptomatic hypocalcaemia in Ethylene Glycol (only treat tetany/seizures/QTc prolongation — extra Ca2+ can precipitate renal oxalate stones).

**Weight-Based Dosing Guidance:**
- **Fomepizole Loading Dose (4-Methylpyrazole)**: `15 mg/kg (max 1500 mg)` (IV infusion over 30 min, Then 10 mg/kg q12h ×4 doses, then 15 mg/kg q12h (OR q4h ON DIALYSIS!)) [Dilute in 100 mL NS or D5W] (Requires fomepizoleStocked)
- **Ethanol 10% IV in D5W Loading Dose (If Fomepizole Unstocked)**: `8 mL/kg (max 800 mL)` (IV over 30–60 min (central line preferred), Followed by 1–2 mL/kg/hr maintenance (DOUBLE rate during haemodialysis!)) [10% v/v Ethanol in D5W (~0.8 g/kg)] (Shown if !fomepizoleStocked) — *Note: Target serum ethanol 22–33 mmol/L (100–150 mg/dL). Monitor BG & CNS sedation hourly.*
- **Methanol Cofactor: Folinic Acid (Leucovorin)**: `50 mg IV q6h (Folic acid 50 mg IV q6h if Leucovorin unavailable)` (IV over 15–30 min, Enhances hepatic clearance of toxic formic acid)
- **Ethylene Glycol Cofactors: Thiamine + Pyridoxine**: `Thiamine 100 mg IV q6h + Pyridoxine 50 mg IV q6h` (IV infusion, Shunts glyoxylic acid away from toxic oxalate formation)
- **Sodium Bicarbonate (If Arterial pH < 7.30)**: `1–2 mEq/kg (max 150 mEq)` (IV push / infusion, Target arterial pH > 7.30–7.35 (reduces CNS/retinal formate entry)) [8.4% = 1 mEq/mL]

**Contextual Pitfall Warning**: DIALYSIS CLEARANCE TRAP: Both Fomepizole and Ethanol are rapidly cleared by haemodialysis! Increase Fomepizole frequency to q4h (or double Ethanol infusion rate) DURING haemodialysis so ADH blockade is not lost mid-dialysis.

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **Proceed to Haemodialysis Triage & ICU Disposition** → `alc-disp`

#### Node `alc-disp` — EXTRIP Haemodialysis Indications & ICU Care [DISPOSITION]
> **Prompt**: Initiate urgent intermittent haemodialysis for severe acidemia, end-organ toxicity, or high alcohol levels.

**Clinical Actions:**
- [ ] HAEMODIALYSIS TRIGGERS (EXTRIP): Arterial pH ≤ 7.15, persistent acidaemia despite NaHCO3, visual impairment (Methanol), AKI / coma / seizures, OR Methanol/Ethylene Glycol level > 50 mg/dL (Methanol >15.6 mmol/L; EG >8.1 mmol/L).
- [ ] MANDATORY DIALYSIS PROTOCOL: Increase Fomepizole dosing to every 4 hours (or double Ethanol infusion rate to ~2–4 mL/kg/hr) throughout the haemodialysis session.
- [ ] Continue ADH blockade + cofactors until serum toxic alcohol < 20 mg/dL (<3–6 mmol/L) AND anion gap acidosis resolves.

**Contextual Pitfall Warning**: DIALYSIS CLEARANCE TRAP: Do NOT leave Fomepizole on q12h during intermittent haemodialysis — sub-therapeutic levels mid-dialysis allow lethal formate/oxalate rebound!

**Recommended Immediate Calls**: icu, toxicology

**Disposition**: Intensive Care Unit (ICU) / Urgent Haemodialysis (STAT Nephrology & Toxicology Intervention)
- [x] ADH blockade (Fomepizole or Ethanol) running before/during dialysis
- [x] Intra-dialytic q4h Fomepizole / 2× Ethanol rate order written explicitly
- [x] Methanol (Folinic acid) / EG (Thiamine + Pyridoxine) cofactors ordered

---

## 28. Organophosphate & Carbamate Cholinergic Crisis

- **Category**: Toxicology (HALO)
- **Escalation Roles**: toxicology, icu, anaesthesia
- **Evidence Source**: TOXBASE / WHO / Eddleston Cholinergic Crisis Protocol — *Acute Organophosphorus Pesticide & Nerve Agent Poisoning* (2024) [Grade 1A · Randomized Trial Supported]
- **Citation**: Eddleston M et al. Lancet 2008; TOXBASE Organophosphate Insecticides 2024.
- **Evidence Summary**: Mandates staff PPE & immediate soap-water decontamination, aggressive Atropine doubling protocol (1–3 mg IV doubled q5min to clear bronchorrhoea) followed by infusion, early Pralidoxime (2-PAM) 30 mg/kg loading + infusion, benzodiazepines for seizures, and avoidance of Succinylcholine.
- **Reference URL**: https://www.toxbase.org/

### Common Clinical Pitfalls (DO NOT)
- DO NOT use Succinylcholine (Suxamethonium) for intubation — organophosphates inhibit plasma pseudocholinesterase and cause hours of prolonged paralysis! Use ROCURONIUM.
- DO NOT stop escalating Atropine because of tachycardia or dilated pupils — titrate Atropine strictly to DRY BRONCHIAL SECRETIONS (clear chest auscultation), SpO2, and SBP > 80 mmHg!
- DO NOT delay decontamination or fail to wear nitrile/butyl PPE — solvent-borne organophosphates (xylene) cause rapid secondary staff poisoning.

### Editable Local Department Workflow (Default Template)
**Escalation Steps:**
1. Don double nitrile (or butyl) gloves, gown, and eye protection BEFORE touching contaminated clothing/patient.
2. Initiate Atropine doubling protocol immediately using multi-vial Atropine Resus Box (often requires >20–100 mg total!).
3. Call Toxicology / Poison Control and ICU STAT; request Pharmacy STAT supply of Atropine + Pralidoxime (2-PAM).

- **Stock & Equipment**: High-dose Atropine Resus Pack (multiple 1 mg or 3 mg/10 mL vials), Pralidoxime Chloride (2-PAM) 1 g vials, Diazepam/Midazolam, wall suction, decontamination wash.
- **Admission / Transfer Criteria**: All symptomatic OP/carbamate ingestions require ICU admission (monitor 48–96h for Intermediate Syndrome respiratory failure!).

### Algorithm: Cholinergic Crisis: Decontamination, Atropine Doubling & Oximes

- **Presentation Trigger**: SLUDGE / DUMBELS cholinergic crisis: pinpoint pupils, profuse bronchorrhoea, wheeze, bradycardia, fasciculations, or coma
- **Pathway Color Tag**: RED
- **Start Node**: `op-1`
- **Keywords**: organophosphate, carbamate, cholinergic, atropine, pralidoxime, 2-pam, sludge, dumbels, succinylcholine

#### Node `op-1` — Staff PPE, Decontamination, Suction & Airway Caution [IMMEDIATE]
> **Prompt**: Protect staff first, strip & wash skin thoroughly, suction profuse airway secretions, and oxygenate.

**Clinical Actions:**
- [ ] PPE FIRST: Wear double nitrile gloves, waterproof apron/gown, and eye shield (standard latex gloves are permeable to OP solvents!).
- [ ] DECONTAMINATION: Remove ALL clothing into sealed double bags; wash skin/hair/folds copiously with soap and water (avoid hot water).
- [ ] AIRWAY & OXYGEN: Suction oral/tracheal secretions continuously and apply 100% O2 via NRM (note hypoxic myocardium is prone to Atropine arrhythmias, though never delay Atropine in arrest/bronchorrhoea).
- [ ] IF INTUBATION NEEDED: Use ROCURONIUM (1.2 mg/kg IV) — NEVER Succinylcholine! (Note: high-dose Atropine often resolves bronchorrhoea and restores breathing rapidly without intubation.)

**Contextual Pitfall Warning**: DO NOT use Succinylcholine for RSI — inhibited pseudocholinesterase causes prolonged apnea lasting 4–12+ hours!

**Recommended Immediate Calls**: toxicology, anaesthesia

**Decision Branches:**
- **Bronchorrhoea / Bradycardia / Hypotension Present → Start Atropine Doubling** → `op-atropine`

#### Node `op-atropine` — Atropine Doubling Protocol (Titrate to Dry Chest) [INTERVENTION]
> **Prompt**: Escalate Atropine rapidly every 5 minutes by DOUBLING each dose until muscarinic bronchorrhoea clears.

**Clinical Actions:**
- [ ] Have a dedicated team member rapidly drawing up Atropine vials in bulk (severe poisonings commonly require 30–100+ mg in the first hour).
- [ ] Send STAT VBG/ABG, electrolytes, CK, and plasma/RBC cholinesterase (if available — never delay treatment for lab results).

**Weight-Based Dosing Guidance:**
- **Atropine Rapid Doubling Boluses (Eddleston Protocol)**: `Start 1–3 mg IV bolus; reassess q5min and DOUBLE dose (2 → 4 → 8 → 16 → 32 mg...) until chest clear!` (Rapid IV push, Endpoints: (1) Clear lung auscultation (dry secretions), (2) SBP >80 mmHg, (3) HR >80 bpm) — *Note: Tachycardia & dilated pupils are NOT contraindications to further Atropine while pulmonary secretions/bronchorrhoea persist!*
- **Post-Atropinization Maintenance Infusion**: `10–20% of total Atropine loading dose per hour IV infusion` (Continuous IV infusion, Monitor q15–30min for recurrent crackles (re-bolus) or anticholinergic delirium (reduce))

**Contextual Pitfall Warning**: DO NOT use pupil size to guide Atropine dosing (topical eye contamination or central effects dissociate pupils from lung drying).

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **Lung Secretions Drying → Add Pralidoxime (2-PAM) + Benzodiazepines** → `op-oxime`

#### Node `op-oxime` — Pralidoxime (2-PAM) Nicotinic Rescue & Seizure Control [INTERVENTION]
> **Prompt**: Atropine does NOT reverse nicotinic muscle weakness/paralysis — give Pralidoxime early before AChE "aging" occurs.

**Clinical Actions:**
- [ ] If confirmed pure CARBAMATE poisoning (e.g., Methomyl/Aldicarb) with mild symptoms, Atropine + Diazepam alone usually suffice; if mixed or unknown pesticide, ALWAYS give Pralidoxime empirically.
- [ ] Monitor closely for QTc prolongation and sudden respiratory muscle fatigue.

**Weight-Based Dosing Guidance:**
- **Pralidoxime Chloride (2-PAM) Loading Dose**: `30 mg/kg (max 2000 mg)` (IV infusion over 30 min, Followed by 8–10 mg/kg/hr IV infusion (max ~500–650 mg/hr)) [Reconstitute 1 g in 20 mL sterile water → dilute in 100 mL NS] — *Note: Rapid 2-PAM bolus causes laryngospasm, hypertension & tachycardia — always infuse load over 30 min!*
- **Diazepam (OR Midazolam) — Seizures & Fasciculations**: `Diazepam 5–10 mg IV (or Midazolam 2–5 mg IV) q5–10min PRN` (IV push, Prevents excitotoxic CNS injury and reduces agitation)

**Recommended Immediate Calls**: toxicology, icu

**Decision Branches:**
- **Proceed to ICU Admission & Intermediate Syndrome Watch** → `op-disp`

#### Node `op-disp` — ICU Monitoring (Intermediate Syndrome Watch 24–96h) [DISPOSITION]
> **Prompt**: Admit to ICU for Atropine/2-PAM infusions and close respiratory monitoring for delayed Intermediate Syndrome.

**Clinical Actions:**
- [ ] INTERMEDIATE SYNDROME WATCH: At 24–96 hours post-exposure (even after cholinergic symptoms resolve), monitor neck flexion strength, cranial nerves, and negative inspiratory force — sudden respiratory paralysis requires prompt re-intubation.
- [ ] Continue Pralidoxime until Atropine is weaned and patient has been asymptomatic off Atropine for ≥12–24 hours.

**Recommended Immediate Calls**: icu, toxicology

**Disposition**: Intensive Care Unit (ICU) (STAT Critical Care Admission)
- [x] Atropine infusion titrated to clear lungs (dry secretions)
- [x] Pralidoxime infusion running (if OP or unknown cholinesterase inhibitor)
- [x] Daily neck-flexor / respiratory strength checks ordered for Intermediate Syndrome

---
