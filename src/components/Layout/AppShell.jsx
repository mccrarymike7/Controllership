import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { colors, themeMessaging } from '../../theme';

export function AppShell({ currentView, onSelectView, sidebarOpen, setSidebarOpen, children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-secondary/5">
      <Sidebar
        currentView={currentView}
        onSelectView={onSelectView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          currentView={currentView}
          onMenuClick={() => setSidebarOpen((o) => !o)}
        />
        <main
          className="flex-1 overflow-auto"
          style={{ backgroundColor: 'var(--main-bg, #F0F2F7)' }}
        >
          {children}
        </main>
        {currentView && (
          <footer
            className="flex-shrink-0 px-4 py-3 border-t text-[10px] uppercase tracking-widest opacity-60"
            style={{ borderColor: colors.secondary + '44', color: colors.secondary }}
          >
            {themeMessaging.footer}
          </footer>
        )}
      </div>
    </div>
  );
}
