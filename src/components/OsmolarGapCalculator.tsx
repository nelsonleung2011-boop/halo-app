import React, { useMemo, useState } from 'react';
import { AlertTriangle, Calculator, CheckCircle2 } from 'lucide-react';

export const OsmolarGapCalculator: React.FC = () => {
  const [measuredOsm, setMeasuredOsm] = useState<string>('320');
  const [sodium, setSodium] = useState<string>('140');
  const [glucose, setGlucose] = useState<string>('5.5');
  const [urea, setUrea] = useState<string>('5.0');

  const result = useMemo(() => {
    const m = Number(measuredOsm);
    const na = Number(sodium);
    const glu = Number(glucose);
    const ur = Number(urea);
    if (![m, na, glu, ur].every((v) => Number.isFinite(v) && v >= 0)) {
      return null;
    }
    const calculated = 2 * na + glu + ur;
    const gap = m - calculated;
    return {
      calculated: Math.round(calculated * 10) / 10,
      gap: Math.round(gap * 10) / 10,
      elevated: gap > 10,
    };
  }, [measuredOsm, sodium, glucose, urea]);

  return (
    <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50/60 p-3.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-violet-700" />
          <span className="font-display text-xs font-extrabold uppercase tracking-wider text-violet-950">
            SI Osmolar Gap Calculator (mmol/L)
          </span>
        </div>
        <span className="font-mono text-[11px] font-semibold text-violet-800">
          Measured − [2×Na⁺ + Glu + Urea]
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <label className="block">
          <span className="text-[11px] font-semibold text-slate-700">
            Measured Osm (mOsm/kg)
          </span>
          <input
            type="number"
            step="0.1"
            value={measuredOsm}
            onChange={(e) => setMeasuredOsm(e.target.value)}
            className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-2.5 font-mono text-sm font-bold text-slate-900 tabular-nums focus:border-violet-600 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold text-slate-700">
            Na⁺ (mmol/L)
          </span>
          <input
            type="number"
            step="0.5"
            value={sodium}
            onChange={(e) => setSodium(e.target.value)}
            className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-2.5 font-mono text-sm font-bold text-slate-900 tabular-nums focus:border-violet-600 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold text-slate-700">
            Glucose (mmol/L)
          </span>
          <input
            type="number"
            step="0.1"
            value={glucose}
            onChange={(e) => setGlucose(e.target.value)}
            className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-2.5 font-mono text-sm font-bold text-slate-900 tabular-nums focus:border-violet-600 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold text-slate-700">
            Urea (mmol/L)
          </span>
          <input
            type="number"
            step="0.1"
            value={urea}
            onChange={(e) => setUrea(e.target.value)}
            className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-2.5 font-mono text-sm font-bold text-slate-900 tabular-nums focus:border-violet-600 focus:outline-none"
          />
        </label>
      </div>

      {result && (
        <div
          className={`mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3 ${
            result.elevated
              ? 'border-rose-300 bg-rose-50 text-rose-950'
              : 'border-emerald-300 bg-emerald-50 text-emerald-950'
          }`}
        >
          <div className="flex items-center gap-2">
            {result.elevated ? (
              <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
            ) : (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            )}
            <span className="text-xs font-bold">
              {result.elevated
                ? 'ELEVATED (>10 mOsm/kg) — Unmeasured Toxic Alcohol Likely'
                : 'Normal Osmolar Gap (≤10 mOsm/kg) — Does NOT exclude late toxic alcohol + HAGMA'}
            </span>
          </div>
          <div className="font-mono text-xs font-extrabold tabular-nums">
            Calc {result.calculated} · Gap {result.gap > 0 ? `+${result.gap}` : result.gap} mOsm/kg
          </div>
        </div>
      )}
    </div>
  );
};
