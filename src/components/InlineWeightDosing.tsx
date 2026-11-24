import React from 'react';
import { AlertTriangle, Calculator } from 'lucide-react';
import { DosingItem, InstitutionalSettings } from '../types/clinical';

interface InlineWeightDosingProps {
  items: DosingItem[];
  weightKg: number;
  institutionalSettings: InstitutionalSettings;
}

function formatNum(val: number): string {
  if (val >= 100) return Math.round(val).toLocaleString();
  if (val >= 10) return (Math.round(val * 10) / 10).toString();
  return (Math.round(val * 100) / 100).toString();
}

export const InlineWeightDosing: React.FC<InlineWeightDosingProps> = ({
  items,
  weightKg,
  institutionalSettings,
}) => {
  const visibleItems = items.filter((item) => {
    if (item.requiresStockToggle && !institutionalSettings[item.requiresStockToggle]) {
      return false;
    }
    if (item.hideWhenStockToggle && institutionalSettings[item.hideWhenStockToggle]) {
      return false;
    }
    return true;
  });

  if (visibleItems.length === 0) return null;

  const computeDetails = (item: DosingItem) => {
    if (item.formulaType === 'fixed') {
      return {
        primaryText: item.fixedDoseText ?? '',
        formulaText: 'Fixed standard adult dose',
        volumeText: null as string | null,
        vialsText: null as string | null,
        dualRateText: null as string | null,
        capAlert: null as string | null,
      };
    }

    if (item.formulaType === 'per_kg' && item.dosePerKg !== undefined) {
      const raw = item.dosePerKg * weightKg;
      let effective = raw;
      let capAlert: string | null = null;

      if (item.maxSingleDose !== undefined && raw > item.maxSingleDose) {
        effective = item.maxSingleDose;
        capAlert = `Exceeds max single-dose cap — capped at ${formatNum(item.maxSingleDose)} ${item.unit}`;
      }

      let volumeText: string | null = null;
      if (item.concMgPerMl && item.concMgPerMl > 0) {
        let vol = effective / item.concMgPerMl;
        if (item.maxVolumeMl !== undefined && vol > item.maxVolumeMl) {
          vol = item.maxVolumeMl;
          capAlert =
            capAlert ??
            `Exceeds max single-dose cap — capped at ${formatNum(item.maxVolumeMl)} mL`;
        }
        volumeText = `${formatNum(vol)} mL draw volume`;
      }

      let vialsText: string | null = null;
      if (item.vialStrength && item.vialStrength > 0) {
        const vials = Math.ceil(effective / item.vialStrength);
        vialsText = `${vials} ${vials === 1 ? 'vial' : 'vials'} (${item.vialUnitLabel ?? `${item.vialStrength} ${item.unit}`})`;
      }

      return {
        primaryText: `${formatNum(effective)} ${item.unit}`,
        formulaText: `Formula: ${item.dosePerKg} ${item.unit}/kg × ${weightKg} kg${
          item.maxSingleDose ? ` (max ${formatNum(item.maxSingleDose)} ${item.unit})` : ''
        }`,
        volumeText,
        vialsText,
        dualRateText: null,
        capAlert,
      };
    }

    if (
      item.formulaType === 'range_per_kg' &&
      item.minDosePerKg !== undefined &&
      item.maxDosePerKg !== undefined
    ) {
      const rawMin = item.minDosePerKg * weightKg;
      const rawMax = item.maxDosePerKg * weightKg;
      let minVal = rawMin;
      let maxVal = rawMax;
      let capAlert: string | null = null;

      if (item.maxSingleDose !== undefined && rawMax > item.maxSingleDose) {
        minVal = Math.min(rawMin, item.maxSingleDose);
        maxVal = item.maxSingleDose;
        capAlert = `Exceeds max single-dose cap — capped at ${formatNum(item.maxSingleDose)} ${item.unit}`;
      }

      let volumeText: string | null = null;
      if (item.concMgPerMl && item.concMgPerMl > 0) {
        const minVol = minVal / item.concMgPerMl;
        const maxVol = maxVal / item.concMgPerMl;
        volumeText = `${formatNum(minVol)}–${formatNum(maxVol)} mL`;
      }

      let vialsText: string | null = null;
      if (item.vialStrength && item.vialStrength > 0) {
        const minVials = Math.ceil(minVal / item.vialStrength);
        const maxVials = Math.ceil(maxVal / item.vialStrength);
        vialsText =
          minVials === maxVials
            ? `${minVials} ${minVials === 1 ? 'vial' : 'vials'} (${item.vialUnitLabel ?? `${item.vialStrength} ${item.unit}`})`
            : `${minVials}–${maxVials} vials (${item.vialUnitLabel ?? `${item.vialStrength} ${item.unit}`})`;
      }

      // Dual mL/hr + mcg/min rate for 1 mg in 100 mL NS (10 mcg/mL) IV Adrenaline
      let dualRateText: string | null = null;
      if (item.dualRateAdrenaline) {
        const mcgPerMinMin = (minVal * 10) / 60;
        const mcgPerMinMax = (maxVal * 10) / 60;
        dualRateText = `[${formatNum(mcgPerMinMin)}–${formatNum(mcgPerMinMax)} mcg/min]`;
      }

      const rangePrimary =
        minVal === maxVal
          ? `${formatNum(maxVal)} ${item.unit}`
          : `${formatNum(minVal)}–${formatNum(maxVal)} ${item.unit}`;

      return {
        primaryText: dualRateText ? `${rangePrimary} ${dualRateText}` : rangePrimary,
        formulaText: `Formula: ${item.minDosePerKg}–${item.maxDosePerKg} ${item.unit}/kg × ${weightKg} kg${
          item.maxSingleDose ? ` (max ${formatNum(item.maxSingleDose)} ${item.unit})` : ''
        }`,
        volumeText,
        vialsText,
        dualRateText,
        capAlert,
      };
    }

    return {
      primaryText: '',
      formulaText: '',
      volumeText: null,
      vialsText: null,
      dualRateText: null,
      capAlert: null,
    };
  };

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-blue-600" />
          <span className="font-display text-xs font-extrabold uppercase tracking-wider text-blue-900">
            Weight-Based Dosing Guidance ({weightKg} kg)
          </span>
        </div>
        <span className="text-[11px] font-medium text-blue-800">
          Adjust weight in sticky bar above
        </span>
      </div>

      <div className="mt-2.5 space-y-2.5">
        {visibleItems.map((item) => {
          const calc = computeDetails(item);
          return (
            <div
              key={item.id}
              className="rounded-lg border border-blue-200 bg-white p-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-display text-sm font-bold text-slate-900">
                  {item.drugName}
                </span>
                <span className="font-mono text-base font-extrabold text-blue-700 tabular-nums">
                  {calc.primaryText}
                </span>
              </div>

              {(calc.volumeText || calc.vialsText) && (
                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs font-semibold text-slate-800 font-mono tabular-nums">
                  {calc.volumeText && <span>{calc.volumeText}</span>}
                  {calc.volumeText && calc.vialsText && (
                    <span aria-hidden="true" className="text-slate-400">
                      ·
                    </span>
                  )}
                  {calc.vialsText && <span>{calc.vialsText}</span>}
                </div>
              )}

              <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-slate-600">
                <span className="font-medium text-slate-700">{item.route}</span>
                <span aria-hidden="true">·</span>
                <span>{item.rateOrFrequency}</span>
                {item.concentrationLabel && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px]">{item.concentrationLabel}</span>
                  </>
                )}
              </div>

              <p className="mt-1 font-mono text-[11px] text-slate-500 tabular-nums">
                {calc.formulaText}
              </p>

              {calc.capAlert && (
                <div className="mt-1.5 flex items-center gap-1.5 rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-900">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-700" />
                  <span>{calc.capAlert}</span>
                </div>
              )}

              {item.clinicalNote && (
                <p className="mt-1.5 text-xs font-medium text-amber-800">
                  {item.clinicalNote}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
