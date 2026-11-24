import React, { useMemo } from 'react';
import { ChevronRight, Clock, Star } from 'lucide-react';
import { ALL_ALGORITHMS } from '../data/clinicalRegistry';
import { RecentAlgorithmEntry } from '../types/clinical';

interface SavedAlgorithmsViewProps {
  favoriteAlgoIds: string[];
  recentAlgos: RecentAlgorithmEntry[];
  onLaunchAlgorithm: (topicId: string, algoId: string) => void;
  onToggleFavorite: (algoId: string) => void;
}

export const SavedAlgorithmsView: React.FC<SavedAlgorithmsViewProps> = ({
  favoriteAlgoIds,
  recentAlgos,
  onLaunchAlgorithm,
  onToggleFavorite,
}) => {
  const favorites = useMemo(
    () => ALL_ALGORITHMS.filter(({ algorithm }) => favoriteAlgoIds.includes(algorithm.id)),
    [favoriteAlgoIds]
  );

  const recents = useMemo(
    () =>
      recentAlgos
        .map((r) => {
          const match = ALL_ALGORITHMS.find(
            (item) => item.topic.id === r.topicId && item.algorithm.id === r.algoId
          );
          return match ? { ...match, timestamp: r.timestamp } : null;
        })
        .filter((x): x is NonNullable<typeof x> => Boolean(x)),
    [recentAlgos]
  );

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-3 pt-4 pb-24 sm:px-6">
      <div>
        <h1 className="font-display text-lg font-extrabold text-slate-900 sm:text-xl">
          Saved &amp; Recent Algorithms
        </h1>
        <p className="mt-0.5 text-xs text-slate-500">
          One-tap resumption of pinned bedside pathways
        </p>
      </div>

      <section className="space-y-2.5">
        <h2 className="flex items-center gap-2 font-display text-sm font-bold text-slate-800">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span>Pinned Favorites</span>
        </h2>

        {favorites.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
            No pinned algorithms yet. Tap the star icon inside any algorithm to pin it here.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {favorites.map(({ topic, algorithm }) => (
              <div
                key={algorithm.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white p-3"
              >
                <button
                  type="button"
                  onClick={() => onLaunchAlgorithm(topic.id, algorithm.id)}
                  className="flex min-h-[48px] flex-1 items-center justify-between gap-2 text-left"
                >
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-slate-900">
                      {algorithm.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-slate-500">
                      {topic.title}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                </button>
                <button
                  type="button"
                  onClick={() => onToggleFavorite(algorithm.id)}
                  aria-label="Unpin favorite"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-amber-500 hover:bg-slate-100"
                >
                  <Star className="h-4 w-4 fill-current" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-2.5">
        <h2 className="flex items-center gap-2 font-display text-sm font-bold text-slate-800">
          <Clock className="h-4 w-4 text-slate-400" />
          <span>Recently Navigated</span>
        </h2>

        {recents.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
            Algorithms you open during clinical navigation appear here automatically.
          </div>
        ) : (
          <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {recents.map(({ topic, algorithm, timestamp }) => (
              <button
                key={algorithm.id}
                type="button"
                onClick={() => onLaunchAlgorithm(topic.id, algorithm.id)}
                className="flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-slate-900">
                    {algorithm.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {topic.shortTitle} · {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
