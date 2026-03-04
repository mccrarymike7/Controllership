import { useState, useEffect } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { AppShell } from './components/Layout/AppShell';
import { Landing } from './pages/Landing';
import { ComplexityPage } from './pages/ComplexityPage';
import { TOMPage } from './pages/TOMPage';
import { CapabilitiesMatrixPage } from './pages/CapabilitiesMatrixPage';
import { DeepDiveInstructionsPage } from './pages/DeepDiveInstructionsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ImplementationPlanPage } from './pages/ImplementationPlanPage';
import { colors } from './theme';

const VALID_VIEW_IDS = new Set([
  'complexity', 'tom', 'capabilities', 'capabilities-instructions',
  'roadmap', 'roadmap-reinsurance', 'roadmap-investment', 'roadmap-accounting-ops', 'roadmap-financial-reporting', 'roadmap-finance-systems',
  'implementation-plan',
]);

function viewFromHash() {
  const hash = window.location.hash.slice(1).replace(/^\/+/, '');
  return hash && VALID_VIEW_IDS.has(hash) ? hash : null;
}

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentView, setCurrentView] = useState(viewFromHash);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync URL hash with current view (shareable links + browser back/forward)
  useEffect(() => {
    const syncFromHash = () => setCurrentView(viewFromHash());
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);
  useEffect(() => {
    if (currentView) window.location.hash = currentView;
    else if (window.location.hash) window.location.hash = '';
  }, [currentView]);

  if (!hasEntered) {
    return <Landing onEnter={() => setHasEntered(true)} />;
  }

  return (
    <AppShell
      currentView={currentView}
      onSelectView={setCurrentView}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      {currentView === 'complexity' && <ComplexityPage />}
      {currentView === 'tom' && <TOMPage />}
      {currentView === 'capabilities' && <CapabilitiesMatrixPage />}
      {currentView === 'capabilities-instructions' && <DeepDiveInstructionsPage />}
      {(currentView === 'roadmap' || currentView?.startsWith('roadmap-')) && (
        <RoadmapPage currentView={currentView} />
      )}
      {currentView === 'implementation-plan' && <ImplementationPlanPage />}
      {!currentView && (
        <div
          className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6"
          style={{ backgroundColor: colors.primary }}
        >
          <LayoutDashboard className="w-16 h-16 mb-4 opacity-90" style={{ color: colors.target }} />
          <h2 className="text-2xl font-serif font-bold text-white tracking-tight">Controllership</h2>
          <p className="text-white/70 mt-2">Select a view from the sidebar to get started.</p>
        </div>
      )}
    </AppShell>
  );
}
