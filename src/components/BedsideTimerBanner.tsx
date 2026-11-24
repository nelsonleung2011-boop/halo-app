import React, { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Pause,
  Play,
  RotateCcw,
  ShieldAlert,
  Timer,
  Zap,
} from 'lucide-react';
import { TimerConfig } from '../types/clinical';

interface BedsideTimerBannerProps {
  config: TimerConfig;
  isUnlocked: boolean;
  onUnlock: (timerId: string, reason: string) => void;
  onLogEvent: (label: string, detail?: string) => void;
}

function formatClock(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function playGentleAlertChime() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    [660, 880].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.16);
      gain.gain.setValueAtTime(0.08, now + idx * 0.16);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.16 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.16);
      osc.stop(now + idx * 0.16 + 0.26);
    });
  } catch {
    // Web Audio may be blocked in restricted browser contexts
  }
}

export const BedsideTimerBanner: React.FC<BedsideTimerBannerProps> = ({
  config,
  isUnlocked,
  onUnlock,
  onLogEvent,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(config.durationSec);
  const [running, setRunning] = useState<boolean>(Boolean(config.autoStart));
  const [completed, setCompleted] = useState<boolean>(false);

  // Hypothermia Guard specific state
  const [tempBand, setTempBand] = useState<'under30' | '30to34'>('under30');
  const [shockCount, setShockCount] = useState<number>(0);

  const startedLoggedRef = useRef(false);

  useEffect(() => {
    setSecondsLeft(config.durationSec);
    setRunning(Boolean(config.autoStart));
    setCompleted(false);
    setShockCount(0);
    setTempBand('under30');
    startedLoggedRef.current = false;
    if (config.autoStart) {
      startedLoggedRef.current = true;
      onLogEvent(`Timer auto-started: ${config.label}`);
    }
  }, [config.id, config.durationSec, config.autoStart, config.label, onLogEvent]);

  useEffect(() => {
    if (!running || secondsLeft <= 0) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setRunning(false);
          setCompleted(true);
          playGentleAlertChime();
          onUnlock(config.id, 'Timer completed');
          onLogEvent(`Timer elapsed: ${config.label}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running, secondsLeft, config.id, config.label, onUnlock, onLogEvent]);

  const handleToggleRun = () => {
    if (secondsLeft === 0) return;
    if (!running && !startedLoggedRef.current) {
      startedLoggedRef.current = true;
      onLogEvent(`Timer started: ${config.label}`);
    }
    setRunning((r) => !r);
  };

  const handleReset = () => {
    setRunning(false);
    setCompleted(false);
    setSecondsLeft(config.durationSec);
    onLogEvent(`Timer reset: ${config.label}`);
  };

  if (config.kind === 'hypothermia_guard') {
    const isSevere = tempBand === 'under30';
    const maxShocksReached = isSevere && shockCount >= 3;

    return (
      <div className="mb-4 rounded-xl border border-amber-300 bg-amber-50 p-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-700" />
            <span className="font-display text-xs font-extrabold uppercase tracking-wider text-amber-900">
              {config.label}
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-amber-300 bg-white p-1">
            <button
              type="button"
              onClick={() => {
                setTempBand('under30');
                setRunning(false);
                onLogEvent('Hypothermia Guard band selected: < 30°C');
              }}
              className={`min-h-[40px] rounded-md px-2.5 font-mono text-xs font-bold transition-colors whitespace-nowrap ${
                isSevere ? 'bg-rose-700 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Core &lt; 30°C
            </button>
            <button
              type="button"
              onClick={() => {
                setTempBand('30to34');
                onLogEvent('Hypothermia Guard band selected: 30–34.9°C');
              }}
              className={`min-h-[40px] rounded-md px-2.5 font-mono text-xs font-bold transition-colors whitespace-nowrap ${
                !isSevere ? 'bg-amber-700 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Core 30–34.9°C
            </button>
          </div>
        </div>

        {isSevere ? (
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div
              className={`rounded-lg border p-3 ${
                maxShocksReached
                  ? 'border-rose-400 bg-rose-100 text-rose-950'
                  : 'border-amber-200 bg-white text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Defibrillation Guard (&lt;30°C)
                </span>
                <span className="font-mono text-sm font-extrabold tabular-nums">
                  {shockCount} / 3 MAX
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                {maxShocksReached
                  ? '3 shocks delivered — WITHHOLD further shocks until core temp ≥ 30°C!'
                  : 'Deliver max 3 shocks if VF/pVT persists below 30°C.'}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  disabled={shockCount >= 3}
                  onClick={() => {
                    const next = shockCount + 1;
                    setShockCount(next);
                    onLogEvent(`Hypothermic shock #${next} logged (<30°C)`);
                  }}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 text-xs font-bold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
                >
                  <Zap className="h-4 w-4" />
                  <span>Log Shock ({shockCount}/3)</span>
                </button>
                {shockCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setShockCount(0)}
                    aria-label="Reset shock counter"
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-lg border border-rose-300 bg-rose-50 p-3 text-rose-950">
              <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                IV Resuscitation Drugs (&lt;30°C)
              </p>
              <p className="mt-1 text-xs font-semibold leading-relaxed">
                WITHHOLD Adrenaline &amp; Amiodarone until core temp reaches ≥30°C (drugs accumulate in hypothermic tissues and cause toxicity on rewarming).
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-300 bg-white p-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                2× Adrenaline Dosing Interval (30–34.9°C: q6–10 min)
              </p>
              <p className="mt-0.5 text-xs text-slate-600">
                Double standard ALS intervals (e.g. 8:00 timer) until core temp ≥35°C.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-extrabold text-amber-800 tabular-nums">
                {formatClock(secondsLeft)}
              </span>
              <button
                type="button"
                onClick={handleToggleRun}
                className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1.5 rounded-lg bg-amber-700 px-3 text-xs font-bold text-white hover:bg-amber-800"
              >
                {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{running ? 'Pause' : 'Start 8:00'}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset interval timer"
                className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const isCriticalExpiry = completed || secondsLeft === 0;
  const requiresUnlock = Boolean(config.unlocksBranchIds && config.unlocksBranchIds.length > 0);
  const bannerStyle = isCriticalExpiry
    ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
    : config.autoStart
    ? 'border-rose-400 bg-rose-50 text-rose-950'
    : 'border-amber-300 bg-amber-50 text-amber-950';

  return (
    <div className={`mb-4 rounded-xl border p-3.5 ${bannerStyle}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {isCriticalExpiry ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
            ) : (
              <Timer className="h-4 w-4 shrink-0" />
            )}
            <span className="font-display text-xs font-extrabold uppercase tracking-wider">
              {config.label}
            </span>
          </div>
          {config.alertText && (
            <p className="mt-1 text-xs font-medium leading-snug opacity-90">
              {isCriticalExpiry
                ? 'TIMER COMPLETE — Proceed immediately to next clinical action.'
                : config.alertText}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-2xl font-extrabold tabular-nums">
            {formatClock(secondsLeft)}
          </span>
          <button
            type="button"
            onClick={handleToggleRun}
            disabled={secondsLeft === 0}
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 text-xs font-bold text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:text-slate-600 whitespace-nowrap"
          >
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>
              {secondsLeft === 0
                ? 'Done'
                : running
                ? 'Pause'
                : config.id === 'ts-ptu-60m'
                ? 'Start 60m Timer'
                : 'Start'}
            </span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset timer"
            className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {requiresUnlock && !isUnlocked && (
        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-amber-300/70 pt-2.5 text-xs">
          <span className="flex items-center gap-1.5 font-semibold text-amber-900">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            <span>Step 3 Iodine locked until 60 min post-PTU elapse</span>
          </span>
          <button
            type="button"
            onClick={() => {
              onUnlock(config.id, 'Pre-hospital PTU ≥60m override');
              onLogEvent(`Override unlocked ${config.label}: PTU given ≥60 min pre-arrival`);
            }}
            className="min-h-[40px] rounded-lg border border-amber-400 bg-white px-2.5 py-1 text-xs font-bold text-amber-900 hover:bg-amber-100 whitespace-nowrap"
          >
            Confirm PTU Given ≥60m Ago
          </button>
        </div>
      )}
    </div>
  );
};
