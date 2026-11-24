import React, { useCallback, useEffect, useState } from 'react';
import { GitBranch, Settings2, Star } from 'lucide-react';
import { AdminHubView } from './components/AdminHubView';
import { AlgorithmCockpit } from './components/AlgorithmCockpit';
import { HomeCockpit } from './components/HomeCockpit';
import {
  PWAConnectivityAndUpdateBanner,
  PWAInstallButton,
} from './components/PWAInstallButton';
import { SavedAlgorithmsView } from './components/SavedAlgorithmsView';
import { APP_GUIDELINE_VERSION } from './data/contactsAndCategories';
import {
  ALL_ALGORITHMS,
  CLINICAL_TOPICS,
  getAlgorithmEntry,
} from './data/clinicalRegistry';
import { useClinicalStore } from './hooks/useClinicalStore';

type ActiveRoute =
  | { view: 'home' }
  | { view: 'saved' }
  | { view: 'admin'; topicId?: string }
  | { view: 'algorithm'; topicId: string; algoId: string; nodeId?: string };

function parseHashRoute(): ActiveRoute {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash.startsWith('algo=')) {
    const [topicId, algoId, nodeId] = hash.slice(5).split('/');
    const entry = getAlgorithmEntry(topicId, algoId);
    if (entry) {
      return {
        view: 'algorithm',
        topicId: entry.topic.id,
        algoId: entry.algorithm.id,
        nodeId: nodeId || undefined,
      };
    }
  }
  if (hash === 'saved') return { view: 'saved' };
  if (hash.startsWith('admin')) {
    const [, topicId] = hash.split('/');
    return { view: 'admin', topicId: topicId || undefined };
  }
  return { view: 'home' };
}

export default function App() {
  const [route, setRoute] = useState<ActiveRoute>(() => parseHashRoute());
  const store = useClinicalStore();

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateHome = useCallback(() => {
    window.location.hash = '';
    setRoute({ view: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateSaved = useCallback(() => {
    window.location.hash = 'saved';
    setRoute({ view: 'saved' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateAdmin = useCallback((topicId?: string) => {
    window.location.hash = topicId ? `admin/${topicId}` : 'admin';
    setRoute({ view: 'admin', topicId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const launchAlgorithm = useCallback(
    (topicId: string, algoId: string, targetNodeId?: string) => {
      const entry = getAlgorithmEntry(topicId, algoId);
      if (!entry) return;
      store.recordRecentAlgorithm(entry.topic.id, entry.algorithm.id);
      window.location.hash = targetNodeId
        ? `algo=${entry.topic.id}/${entry.algorithm.id}/${targetNodeId}`
        : `algo=${entry.topic.id}/${entry.algorithm.id}`;
      setRoute({
        view: 'algorithm',
        topicId: entry.topic.id,
        algoId: entry.algorithm.id,
        nodeId: targetNodeId,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [store]
  );

  const activeEntry =
    route.view === 'algorithm'
      ? getAlgorithmEntry(route.topicId, route.algoId)
      : undefined;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Compact 52px Top Navigation Bar */}
      <header className="sticky top-0 z-30 h-[52px] border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-3 sm:px-6">
          <button
            type="button"
            onClick={navigateHome}
            className="font-display text-base font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            HALO Emergency
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <button
              type="button"
              onClick={navigateHome}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
                route.view === 'home' || route.view === 'algorithm'
                  ? 'font-bold text-slate-900'
                  : ''
              }`}
            >
              Algorithms
            </button>
            <button
              type="button"
              onClick={navigateSaved}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
                route.view === 'saved' ? 'font-bold text-slate-900' : ''
              }`}
            >
              Saved
            </button>
            <button
              type="button"
              onClick={() => navigateAdmin()}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
                route.view === 'admin' ? 'font-bold text-slate-900' : ''
              }`}
            >
              Local &amp; Admin
            </button>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline font-mono text-[11px] font-semibold text-slate-500 tabular-nums whitespace-nowrap">
              {APP_GUIDELINE_VERSION} · {CLINICAL_TOPICS.length} Clinical Modules ·{' '}
              {ALL_ALGORITHMS.length} Interactive Algorithms
            </span>
            <PWAInstallButton />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {route.view === 'home' && (
          <HomeCockpit
            favoriteAlgoIds={store.favoriteAlgoIds}
            recentAlgos={store.recentAlgos}
            onLaunchAlgorithm={launchAlgorithm}
            onToggleFavorite={store.toggleFavorite}
          />
        )}

        {route.view === 'algorithm' && activeEntry && (
          <AlgorithmCockpit
            topic={activeEntry.topic}
            algorithm={activeEntry.algorithm}
            initialNodeId={route.nodeId}
            isFavorite={store.favoriteAlgoIds.includes(activeEntry.algorithm.id)}
            onToggleFavorite={store.toggleFavorite}
            onSelectAlgorithm={launchAlgorithm}
            onBack={navigateHome}
            onOpenAdminWorkflow={(topicId) => navigateAdmin(topicId)}
            patientWeightKg={store.patientWeightKg}
            onWeightChange={store.setPatientWeightKg}
            localWorkflow={store.getEffectiveWorkflow(activeEntry.topic.id)}
            contacts={store.contacts}
            institutionalSettings={store.institutionalSettings}
            resusLog={store.resusLog}
            onLogEvent={store.appendResusLog}
          />
        )}

        {route.view === 'saved' && (
          <SavedAlgorithmsView
            favoriteAlgoIds={store.favoriteAlgoIds}
            recentAlgos={store.recentAlgos}
            onLaunchAlgorithm={launchAlgorithm}
            onToggleFavorite={store.toggleFavorite}
          />
        )}

        {route.view === 'admin' && (
          <AdminHubView
            initialTopicId={route.topicId}
            getEffectiveWorkflow={store.getEffectiveWorkflow}
            saveLocalWorkflow={store.saveLocalWorkflow}
            resetLocalWorkflow={store.resetLocalWorkflow}
            localWorkflowOverrides={store.localWorkflows}
            contacts={store.contacts}
            onUpdateContact={store.updateContact}
            onResetContacts={store.resetAllContacts}
            institutionalSettings={store.institutionalSettings}
            onUpdateInstitutionalSettings={store.updateInstitutionalSettings}
            exportConfigJson={store.exportConfigJson}
            importConfigJson={store.importConfigJson}
          />
        )}
      </main>

      {/* Offline & SW Update Toast Banner */}
      <PWAConnectivityAndUpdateBanner />

      {/* Mobile Bottom Thumb-Zone Navigation (56px, 3 tabs) */}
      <nav
        aria-label="Mobile bottom navigation"
        className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur-md pb-safe md:hidden"
      >
        <div className="grid h-14 grid-cols-3 items-center">
          <button
            type="button"
            onClick={navigateHome}
            className={`flex h-full flex-col items-center justify-center gap-0.5 text-[11px] font-semibold ${
              route.view === 'home' || route.view === 'algorithm'
                ? 'text-blue-600'
                : 'text-slate-500'
            }`}
          >
            <GitBranch className="h-5 w-5" />
            <span>Algorithms</span>
          </button>

          <button
            type="button"
            onClick={navigateSaved}
            className={`flex h-full flex-col items-center justify-center gap-0.5 text-[11px] font-semibold ${
              route.view === 'saved' ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            <Star className="h-5 w-5" />
            <span>Saved</span>
          </button>

          <button
            type="button"
            onClick={() => navigateAdmin()}
            className={`flex h-full flex-col items-center justify-center gap-0.5 text-[11px] font-semibold ${
              route.view === 'admin' ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            <Settings2 className="h-5 w-5" />
            <span>Admin</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
