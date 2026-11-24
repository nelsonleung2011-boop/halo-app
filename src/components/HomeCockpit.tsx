import React, { useMemo, useState } from 'react';
import {
  Activity,
  ChevronDown,
  ChevronRight,
  Clock,
  FlaskConical,
  HeartPulse,
  Search,
  ShieldAlert,
  Star,
  Stethoscope,
  Wind,
  X,
} from 'lucide-react';
import { APP_GUIDELINE_VERSION, CATEGORIES } from '../data/contactsAndCategories';
import {
  ALL_ALGORITHMS,
  CLINICAL_TOPICS,
  DIRECT_HOME_ALGORITHMS,
  getTopicsByCategory,
  searchAlgorithms,
} from '../data/clinicalRegistry';
import { CategoryId, RecentAlgorithmEntry } from '../types/clinical';

interface HomeCockpitProps {
  favoriteAlgoIds: string[];
  recentAlgos: RecentAlgorithmEntry[];
  onLaunchAlgorithm: (topicId: string, algoId: string) => void;
  onToggleFavorite: (algoId: string) => void;
}

const CATEGORY_ICONS: Record<CategoryId, React.ReactNode> = {
  airway_devices: <Wind className="h-4 w-4 text-rose-600" />,
  cardiovascular: <HeartPulse className="h-4 w-4 text-amber-600" />,
  ent: <Stethoscope className="h-4 w-4 text-sky-600" />,
  endocrine: <Activity className="h-4 w-4 text-emerald-600" />,
  immunology_resus: <ShieldAlert className="h-4 w-4 text-teal-600" />,
  toxicology: <FlaskConical className="h-4 w-4 text-violet-600" />,
};

function formatTimeAgo(timestamp: number): string {
  const mins = Math.max(1, Math.floor((Date.now() - timestamp) / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export const HomeCockpit: React.FC<HomeCockpitProps> = ({
  favoriteAlgoIds,
  recentAlgos,
  onLaunchAlgorithm,
  onToggleFavorite,
}) => {
  const [query, setQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<CategoryId | null>(
    'airway_devices'
  );

  const searchResults = useMemo(() => searchAlgorithms(query), [query]);

  const recentResolved = useMemo(() => {
    return recentAlgos
      .map((entry) => {
        const match = ALL_ALGORITHMS.find(
          (item) => item.topic.id === entry.topicId && item.algorithm.id === entry.algoId
        );
        return match ? { ...match, timestamp: entry.timestamp } : null;
      })
      .filter((x): x is NonNullable<typeof x> => Boolean(x));
  }, [recentAlgos]);

  const favoriteResolved = useMemo(() => {
    return ALL_ALGORITHMS.filter(({ algorithm }) =>
      favoriteAlgoIds.includes(algorithm.id)
    );
  }, [favoriteAlgoIds]);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-3 pt-4 pb-24 sm:px-6">
      {/* Direct Algorithms Grid (Primary 1-Tap Bedside Entry) */}
      <section aria-labelledby="direct-algos-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h1
              id="direct-algos-heading"
              className="font-display text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl"
            >
              Direct Algorithms
            </h1>
            <p className="mt-0.5 font-mono text-[11px] font-semibold text-slate-500 tabular-nums">
              {APP_GUIDELINE_VERSION} · {CLINICAL_TOPICS.length} Clinical Modules ·{' '}
              {ALL_ALGORITHMS.length} Interactive Algorithms
            </p>
          </div>
          <span className="text-xs text-slate-500">1-tap bedside navigation</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {DIRECT_HOME_ALGORITHMS.map(({ topic, algorithm }) => {
            const isFav = favoriteAlgoIds.includes(algorithm.id);
            const cardBorder =
              algorithm.colorTag === 'green'
                ? 'border-emerald-300 bg-emerald-50/40 hover:border-emerald-500'
                : algorithm.colorTag === 'red'
                ? 'border-rose-300 bg-rose-50/40 hover:border-rose-500'
                : 'border-slate-200 bg-white hover:border-blue-500';
            return (
              <div
                key={algorithm.id}
                className={`group relative flex flex-col justify-between rounded-xl border p-3.5 transition-colors ${cardBorder}`}
              >
                <button
                  type="button"
                  onClick={() => onLaunchAlgorithm(topic.id, algorithm.id)}
                  className="flex min-h-[68px] w-full flex-col justify-between text-left"
                >
                  <div className="flex items-start justify-between gap-2 pr-6">
                    <span className="font-display text-sm font-bold leading-snug text-slate-900 group-hover:text-blue-700">
                      {algorithm.title}
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-slate-600">
                    <span className="truncate font-medium">{topic.shortTitle}</span>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-blue-600" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleFavorite(algorithm.id)}
                  aria-label={isFav ? 'Remove from favorites' : 'Pin to favorites'}
                  className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-amber-500"
                >
                  <Star
                    className={`h-3.5 w-3.5 ${
                      isFav ? 'fill-amber-500 text-amber-500' : ''
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Secondary Quick Search / Filter */}
      <section aria-label="Search algorithms">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter 28 modules, drugs, or alarms (e.g. CICO, hypothermia, PE, DSED, atropine, fomepizole)..."
            aria-label="Filter clinical algorithms"
            className="h-12 w-full rounded-xl border border-slate-200 bg-white pr-11 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute top-1/2 right-1.5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {query.trim().length > 0 && (
          <div className="mt-2.5 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {searchResults.length === 0 ? (
              <p className="p-4 text-sm text-slate-500">
                No matching algorithm found for &ldquo;{query}&rdquo;. Try browsing categories below.
              </p>
            ) : (
              searchResults.slice(0, 10).map(({ topic, algorithm, matchReason }) => (
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
                    <p className="mt-0.5 text-xs text-slate-500 truncate">
                      {topic.shortTitle} · {matchReason} · {algorithm.presentationTrigger}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                </button>
              ))
            )}
          </div>
        )}
      </section>

      {/* Primary Browsing: 6 Clinical Categories */}
      <section aria-labelledby="categories-heading">
        <div className="flex items-baseline justify-between gap-2">
          <h2
            id="categories-heading"
            className="font-display text-base font-bold text-slate-900 sm:text-lg"
          >
            Browse by Clinical Category
          </h2>
          <span className="font-mono text-xs text-slate-500 tabular-nums">
            {CATEGORIES.length} categories · {ALL_ALGORITHMS.length} pathways
          </span>
        </div>

        <div className="mt-3 space-y-2.5">
          {CATEGORIES.map((cat) => {
            const topics = getTopicsByCategory(cat.id);
            const algoCount = topics.reduce((sum, t) => sum + t.algorithms.length, 0);
            const isOpen = expandedCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`rounded-xl border bg-white transition-colors ${
                  isOpen ? cat.accentClass : 'border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedCategory(isOpen ? null : cat.id)}
                  className="flex min-h-[58px] w-full items-center justify-between gap-3 px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      {CATEGORY_ICONS[cat.id]}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold text-slate-900 sm:text-base">
                        {cat.title}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {topics.length} {topics.length === 1 ? 'module' : 'modules'} ·{' '}
                        {algoCount} {algoCount === 1 ? 'algorithm' : 'algorithms'}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-3 py-3 space-y-3 sm:px-4">
                    {topics.map((topic) => (
                      <div
                        key={topic.id}
                        className="rounded-lg border border-slate-200/70 bg-slate-50/70 p-3"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display text-xs font-bold uppercase tracking-wider text-slate-600">
                            {topic.title}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500 tabular-nums">
                            {topic.algorithms.length}{' '}
                            {topic.algorithms.length === 1 ? 'pathway' : 'pathways'}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {topic.algorithms.map((algo) => {
                            const subBorder =
                              algo.colorTag === 'green'
                                ? 'border-emerald-300 bg-emerald-50/50 hover:border-emerald-500'
                                : algo.colorTag === 'red'
                                ? 'border-rose-300 bg-rose-50/50 hover:border-rose-500'
                                : 'border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/30';
                            return (
                              <button
                                key={algo.id}
                                type="button"
                                onClick={() => onLaunchAlgorithm(topic.id, algo.id)}
                                className={`flex min-h-[48px] items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left transition-colors ${subBorder}`}
                              >
                                <div className="min-w-0">
                                  <p className="font-display text-xs font-bold text-slate-900 sm:text-sm">
                                    {algo.title}
                                  </p>
                                  <p className="mt-0.5 truncate text-[11px] text-slate-500">
                                    {algo.presentationTrigger}
                                  </p>
                                </div>
                                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Recently Opened & Pinned Favorites */}
      {(recentResolved.length > 0 || favoriteResolved.length > 0) && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {recentResolved.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                <Clock className="h-4 w-4 text-slate-400" />
                <span>Recently Navigated</span>
              </h3>
              <div className="mt-2.5 divide-y divide-slate-100">
                {recentResolved.slice(0, 4).map(({ topic, algorithm, timestamp }) => (
                  <button
                    key={algorithm.id}
                    type="button"
                    onClick={() => onLaunchAlgorithm(topic.id, algorithm.id)}
                    className="flex min-h-[48px] w-full items-center justify-between gap-2 py-2 text-left hover:text-blue-600"
                  >
                    <span className="text-sm font-semibold text-slate-800 truncate">
                      {algorithm.title}
                    </span>
                    <span className="font-mono text-xs text-slate-500 tabular-nums shrink-0">
                      {formatTimeAgo(timestamp)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {favoriteResolved.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span>Pinned Favorites</span>
              </h3>
              <div className="mt-2.5 divide-y divide-slate-100">
                {favoriteResolved.slice(0, 4).map(({ topic, algorithm }) => (
                  <button
                    key={algorithm.id}
                    type="button"
                    onClick={() => onLaunchAlgorithm(topic.id, algorithm.id)}
                    className="flex min-h-[48px] w-full items-center justify-between gap-2 py-2 text-left hover:text-blue-600"
                  >
                    <span className="text-sm font-semibold text-slate-800 truncate">
                      {algorithm.title}
                    </span>
                    <span className="text-xs text-slate-500 shrink-0">
                      {topic.shortTitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
