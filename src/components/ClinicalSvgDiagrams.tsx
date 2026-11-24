import React from 'react';
import { SvgDiagramId } from '../types/clinical';

interface ClinicalSvgDiagramsProps {
  diagramId: SvgDiagramId;
}

const DIAGRAM_META: Record<SvgDiagramId, { title: string; caption: string }> = {
  trach_vs_laryngectomy: {
    title: 'Tracheostomy (GREEN) vs. Total Laryngectomy (RED) Airway Anatomy',
    caption:
      'GREEN tracheostomy retains a patent mouth/nose connection (apply O2 to BOTH face & stoma). RED total laryngectomy terminates in a blind pharyngeal pouch (O2/ventilation STOMA ONLY — DO NOT remove posterior TEP voice prosthesis).',
  },
  utley: {
    title: 'Utley Manoeuvre — Digital Compression of Tracheo-Innominate Fistula',
    caption:
      'After placing a distal oral ETT, insert gloved index finger through the stoma anteriorly to compress the innominate artery directly against the posterior manubrium/sternum. Hold continuously until OR clamping.',
  },
  dsed_pads: {
    title: 'DSED Non-Overlapping Dual Pad Vectors (AL + AP)',
    caption:
      'Apply Defib 1 Anterior-Lateral (AL) and Defib 2 Anteroposterior (AP) pads with clear skin separation so pad edges never touch. Fire sequentially (<1 s stagger).',
  },
  cico_efona: {
    title: 'CICO eFONA — Laryngeal Handshake & Cricothyroid Membrane Landmarks',
    caption:
      'Stabilize larynx with non-dominant hand (laryngeal handshake). Palpable CTM: horizontal No. 10 scalpel stab → flip blade/finger → bougie → 6.0 mm cuffed ETT. Impalpable neck: 8–10 cm vertical midline skin incision first.',
  },
};

export const ClinicalSvgDiagram: React.FC<ClinicalSvgDiagramsProps> = ({ diagramId }) => {
  const meta = DIAGRAM_META[diagramId];

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-3.5 py-2">
        <p className="font-display text-xs font-bold text-slate-900">{meta.title}</p>
      </div>

      <div className="p-3 bg-white">
        {diagramId === 'trach_vs_laryngectomy' && (
          <svg
            viewBox="0 0 640 280"
            className="mx-auto w-full max-w-xl"
            role="img"
            aria-label={meta.title}
          >
            {/* Left Panel: Patent Upper Airway Tracheostomy (GREEN) */}
            <rect
              x="10"
              y="10"
              width="295"
              height="260"
              rx="12"
              fill="#ECFDF5"
              stroke="#059669"
              strokeWidth="2"
            />
            <text x="26" y="34" fontSize="13" fontWeight="700" fill="#065F46">
              GREEN · Tracheostomy (Patent Upper)
            </text>
            {/* Sagittal Head/Neck Outline */}
            <path
              d="M70,58 C125,52 162,72 165,112 L175,148 C176,158 164,164 155,166 L155,212 C155,235 162,250 175,258 L65,258 L65,180 C55,142 52,85 70,58 Z"
              fill="#FFFFFF"
              stroke="#475569"
              strokeWidth="2"
            />
            {/* Continuous Upper Airway to Trachea */}
            <path
              d="M163,115 C145,115 128,125 128,150 L128,254 L106,254 L106,146 C106,112 125,95 160,96"
              fill="#BAE6FD"
              stroke="#0284C7"
              strokeWidth="2"
            />
            {/* Oral / Nasal O2 Arrows */}
            <path d="M188,105 L154,105" stroke="#059669" strokeWidth="3" />
            <polygon points="154,105 162,100 162,110" fill="#059669" />
            <text x="192" y="109" fontSize="11" fontWeight="700" fill="#065F46">
              O2 Mouth/Nose
            </text>
            {/* Tracheostomy Tube */}
            <path
              d="M168,195 L122,195 C115,195 113,200 113,210 L113,234 L125,234 L125,208 L168,208 Z"
              fill="#0F172A"
            />
            <path d="M202,201 L170,201" stroke="#059669" strokeWidth="3" />
            <polygon points="170,201 178,196 178,206" fill="#059669" />
            <text x="206" y="205" fontSize="11" fontWeight="700" fill="#065F46">
              + O2 Stoma
            </text>
            <text x="26" y="246" fontSize="11" fontWeight="600" fill="#047857">
              Continuous oral-tracheal lumen
            </text>

            {/* Right Panel: Total Laryngectomy End-Stoma (RED) */}
            <rect
              x="335"
              y="10"
              width="295"
              height="260"
              rx="12"
              fill="#FFF1F2"
              stroke="#DC2626"
              strokeWidth="2"
            />
            <text x="351" y="34" fontSize="13" fontWeight="700" fill="#991B1B">
              RED · Total Laryngectomy (End-Stoma)
            </text>
            {/* Sagittal Head/Neck Outline */}
            <path
              d="M395,58 C450,52 487,72 490,112 L500,148 C501,158 489,164 480,166 L480,212 C480,235 487,250 500,258 L390,258 L390,180 C380,142 377,85 395,58 Z"
              fill="#FFFFFF"
              stroke="#475569"
              strokeWidth="2"
            />
            {/* Blind Pharynx / Closed Esophageal Track */}
            <path
              d="M488,115 C470,115 452,126 452,155 C452,168 446,174 440,174 C434,174 430,166 430,152 C430,118 448,96 485,96"
              fill="#E2E8F0"
              stroke="#64748B"
              strokeWidth="2"
            />
            {/* Red X at Blind Pouch */}
            <line x1="428" y1="168" x2="454" y2="180" stroke="#DC2626" strokeWidth="3" />
            <line x1="454" y1="168" x2="428" y2="180" stroke="#DC2626" strokeWidth="3" />
            <text x="500" y="109" fontSize="11" fontWeight="700" fill="#B91C1C">
              NO Lung Link
            </text>
            {/* End-Stoma Trachea */}
            <path
              d="M480,194 L446,194 L446,254 L424,254 L424,184 L480,184 Z"
              fill="#BAE6FD"
              stroke="#0284C7"
              strokeWidth="2"
            />
            {/* Oesophagus + Posterior TEP Valve */}
            <rect x="404" y="182" width="14" height="72" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
            <rect x="415" y="200" width="12" height="7" rx="2" fill="#7C3AED" />
            <line x1="415" y1="204" x2="352" y2="218" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="346" y="232" fontSize="10" fontWeight="700" fill="#6D28D9">
              TEP Valve (Keep!)
            </text>
            {/* Stoma Only O2 Arrow */}
            <path d="M525,190 L484,190" stroke="#DC2626" strokeWidth="3" />
            <polygon points="484,190 492,185 492,195" fill="#DC2626" />
            <text x="529" y="194" fontSize="11" fontWeight="700" fill="#991B1B">
              STOMA ONLY
            </text>
            <text x="351" y="256" fontSize="11" fontWeight="600" fill="#991B1B">
              Oral BVM/ETT CANNOT reach lungs
            </text>
          </svg>
        )}

        {diagramId === 'utley' && (
          <svg
            viewBox="0 0 600 260"
            className="mx-auto w-full max-w-lg"
            role="img"
            aria-label={meta.title}
          >
            <rect x="8" y="8" width="584" height="244" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Trachea */}
            <rect x="290" y="24" width="56" height="214" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
            <text x="356" y="42" fontSize="11" fontWeight="700" fill="#0369A1">
              Trachea + Distal Oral ETT
            </text>
            {/* Oral ETT passing below fistula */}
            <rect x="307" y="24" width="22" height="196" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <ellipse cx="318" cy="204" rx="22" ry="12" fill="#93C5FD" fillOpacity="0.65" stroke="#2563EB" strokeWidth="2" />
            <text x="356" y="208" fontSize="11" fontWeight="700" fill="#1D4ED8">
              Inflated Oral ETT Cuff Distal
            </text>

            {/* Manubrium / Anterior Sternum */}
            <path
              d="M175,135 L208,135 L198,238 L165,238 Z"
              fill="#E2E8F0"
              stroke="#475569"
              strokeWidth="2.5"
            />
            <text x="72" y="192" fontSize="11" fontWeight="700" fill="#334155">
              Posterior Manubrium
            </text>
            <text x="72" y="206" fontSize="11" fontWeight="600" fill="#475569">
              (Sternum Backstop)
            </text>

            {/* Innominate Artery sandwiched anteriorly */}
            <path
              d="M214,238 C214,175 218,135 232,102"
              fill="none"
              stroke="#DC2626"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <text x="26" y="128" fontSize="11" fontWeight="700" fill="#B91C1C">
              Innominate Artery
            </text>

            {/* Gloved Finger inserted through stoma compressing anteriorly */}
            <path
              d="M410,96 C375,96 300,96 266,118 C242,134 226,155 224,186 C223,200 245,204 252,188 C258,168 272,148 294,136 L410,136 Z"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="2.5"
            />
            {/* Anterior Compression Arrows */}
            <path d="M262,158 L224,158" stroke="#DC2626" strokeWidth="3.5" />
            <polygon points="214,158 226,151 226,165" fill="#DC2626" />
            <text x="418" y="114" fontSize="12" fontWeight="800" fill="#92400E">
              Gloved Index Finger
            </text>
            <text x="418" y="130" fontSize="11" fontWeight="600" fill="#B45309">
              Pull ANTERIORLY against sternum
            </text>
            <text x="22" y="42" fontSize="12" fontWeight="800" fill="#DC2626">
              DO NOT RELEASE UNTIL SURGICAL CONTROL
            </text>
          </svg>
        )}

        {diagramId === 'dsed_pads' && (
          <svg
            viewBox="0 0 600 245"
            className="mx-auto w-full max-w-lg"
            role="img"
            aria-label={meta.title}
          >
            {/* Left: Anterior Torso (AL Pads) */}
            <rect x="10" y="10" width="275" height="225" rx="12" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
            <text x="24" y="34" fontSize="13" fontWeight="700" fill="#1E40AF">
              Defib 1 · Anterior-Lateral (AL)
            </text>
            <path
              d="M105,65 L190,65 L212,115 L198,215 L97,215 L83,115 Z"
              fill="#FFFFFF"
              stroke="#64748B"
              strokeWidth="2"
            />
            {/* R Infraclavicular Pad */}
            <rect x="102" y="82" width="32" height="44" rx="5" fill="#2563EB" />
            <text x="108" y="108" fontSize="10" fontWeight="700" fill="#FFFFFF">
              AL1
            </text>
            {/* L Mid-Axillary Apex Pad */}
            <rect x="172" y="136" width="32" height="44" rx="5" fill="#2563EB" />
            <text x="178" y="162" fontSize="10" fontWeight="700" fill="#FFFFFF">
              AL2
            </text>
            <line x1="134" y1="112" x2="172" y2="148" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="5 3" />

            {/* Right: Anteroposterior (AP Pads) */}
            <rect x="315" y="10" width="275" height="225" rx="12" fill="#FFF1F2" stroke="#DC2626" strokeWidth="2" />
            <text x="329" y="34" fontSize="13" fontWeight="700" fill="#991B1B">
              Defib 2 · Anteroposterior (AP)
            </text>
            <path
              d="M410,65 L495,65 L517,115 L503,215 L402,215 L388,115 Z"
              fill="#FFFFFF"
              stroke="#64748B"
              strokeWidth="2"
            />
            {/* Anterior Precordial Pad */}
            <rect x="444" y="102" width="34" height="44" rx="5" fill="#DC2626" />
            <text x="451" y="128" fontSize="10" fontWeight="700" fill="#FFFFFF">
              AP1
            </text>
            {/* Posterior Left Infrascapular Outline */}
            <rect
              x="466"
              y="112"
              width="34"
              height="44"
              rx="5"
              fill="#FCA5A5"
              fillOpacity="0.6"
              stroke="#991B1B"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text x="330" y="205" fontSize="11" fontWeight="700" fill="#991B1B">
              AP2: Left Infrascapular (Back)
            </text>
            <text x="330" y="221" fontSize="11" fontWeight="700" fill="#B91C1C">
              Zero pad overlap · Fire AL → AP (&lt;1s)
            </text>
          </svg>
        )}

        {diagramId === 'cico_efona' && (
          <svg
            viewBox="0 0 600 250"
            className="mx-auto w-full max-w-lg"
            role="img"
            aria-label={meta.title}
          >
            <rect x="8" y="8" width="584" height="234" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Neck Silhouette */}
            <path
              d="M120,30 L270,30 L285,220 L105,220 Z"
              fill="#FFFFFF"
              stroke="#475569"
              strokeWidth="2"
            />
            {/* Thyroid Cartilage */}
            <path
              d="M158,64 L195,52 L232,64 L224,104 L195,96 L166,104 Z"
              fill="#E2E8F0"
              stroke="#334155"
              strokeWidth="2"
            />
            <text x="312" y="78" fontSize="12" fontWeight="700" fill="#0F172A">
              1. Thyroid Cartilage (Laryngeal Handshake)
            </text>

            {/* Cricothyroid Membrane + Horizontal Incision */}
            <rect x="172" y="106" width="46" height="24" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <line x1="176" y1="118" x2="214" y2="118" stroke="#DC2626" strokeWidth="4" />
            <text x="312" y="114" fontSize="12" fontWeight="800" fill="#DC2626">
              2. Cricothyroid Membrane (CTM)
            </text>
            <text x="312" y="130" fontSize="11" fontWeight="600" fill="#991B1B">
              Palpable: Transverse No.10 scalpel stab → 90° rotate
            </text>

            {/* Cricoid Ring & Tracheal Rings */}
            <rect x="164" y="134" width="62" height="18" rx="6" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            <rect x="172" y="158" width="46" height="14" rx="4" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
            <rect x="172" y="178" width="46" height="14" rx="4" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />

            {/* Impalpable Vertical Midline Cut */}
            <line
              x1="195"
              y1="62"
              x2="195"
              y2="188"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeDasharray="5 3"
            />
            <text x="312" y="166" fontSize="12" fontWeight="700" fill="#1D4ED8">
              3. Impalpable Anatomy: 8–10 cm Vertical Skin Cut
            </text>
            <text x="312" y="182" fontSize="11" fontWeight="600" fill="#334155">
              Blunt finger dissection → palpate CTM → stab → Bougie → 6.0 ETT
            </text>
            <text x="312" y="212" fontSize="11" fontWeight="700" fill="#059669">
              Advance 6.0 mm cuffed ETT only until cuff passes (~12–14 cm)
            </text>
          </svg>
        )}
      </div>

      <p className="border-t border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-600">
        {meta.caption}
      </p>
    </div>
  );
};
