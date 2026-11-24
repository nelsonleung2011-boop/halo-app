import React, { useState } from 'react';
import { Download, RefreshCw, Share, WifiOff, X } from 'lucide-react';
import { useOnlineStatus, usePWAInstall, usePWAUpdates } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) return null;

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:scale-[0.98] whitespace-nowrap shrink-0"
      >
        <Download className="h-3.5 w-3.5" />
        <span>Install</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0"
        >
          <Share className="h-3.5 w-3.5" />
          <span>Install App</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base font-bold text-slate-900">
                  Install HALO on iPhone / iPad
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label="Close install instructions"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ol className="mt-3 space-y-2.5 text-sm text-slate-600">
                <li>1. Tap the <strong>Share</strong> icon in Safari&apos;s toolbar.</li>
                <li>2. Scroll down and tap <strong>Add to Home Screen</strong>.</li>
                <li>3. Launch HALO directly from your home screen for full offline bedside access.</li>
              </ol>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full min-h-[44px] rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export const PWAConnectivityAndUpdateBanner: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { needRefresh, applyUpdate, dismissUpdate } = usePWAUpdates();

  if (isOnline && !needRefresh) return null;

  return (
    <div className="fixed bottom-16 left-3 right-3 z-40 mx-auto max-w-xl space-y-2 sm:bottom-4">
      {needRefresh && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-white px-4 py-3 text-xs text-slate-900 shadow-xl">
          <div className="flex items-center gap-2.5 min-w-0">
            <RefreshCw className="h-4 w-4 shrink-0 text-blue-600" />
            <span className="font-medium truncate">
              Updated clinical algorithms ready
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={applyUpdate}
              className="min-h-[36px] rounded-lg bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700 whitespace-nowrap"
            >
              Update Now
            </button>
            <button
              type="button"
              onClick={dismissUpdate}
              aria-label="Dismiss update"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {!isOnline && (
        <div className="flex items-center justify-between gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs font-medium text-amber-900 shadow-md">
          <div className="flex items-center gap-2">
            <WifiOff className="h-3.5 w-3.5 shrink-0 text-amber-600" />
            <span>Offline Mode — All algorithms &amp; local pathways cached on device</span>
          </div>
        </div>
      )}
    </div>
  );
};
