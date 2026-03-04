import { useState } from 'react';
import { Menu, X, LayoutDashboard, Users, GitBranch, Network, Map, FileText } from 'lucide-react';
import { colors, themeMessaging } from '../../theme';

const navItems = [
  { id: 'complexity', label: 'Complexity Multiplier', icon: Network },
  {
    id: 'capabilities',
    label: 'Capabilities Matrix',
    icon: Users,
    children: [
      { id: 'capabilities-instructions', label: 'Instructions for updating deep dives', icon: FileText },
    ],
  },
  { id: 'tom', label: 'Target Operating Model', icon: GitBranch },
  { id: 'roadmap', label: 'Roadmap', icon: Map },
];

export function Sidebar({ currentView, onSelectView, isOpen, onClose }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-40 w-60 flex flex-col
          bg-primary text-white
          transform transition-transform duration-200 ease-out
          md:transform-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ backgroundColor: colors.primary }}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: `${colors.secondary}44` }}>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6" style={{ color: colors.target }} />
            <span className="font-bold tracking-tight">Controllership</span>
          </div>
          <button
            type="button"
            className="md:hidden p-2 rounded hover:opacity-80"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-3 overflow-auto">
          <div className="text-[10px] font-bold uppercase tracking-widest px-3 py-2 opacity-60">
            Strategy & People
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectView(item.id);
                    onClose?.();
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm font-medium
                    transition-colors
                    ${isActive ? 'text-white' : 'opacity-80 hover:opacity-100'}
                  `}
                  style={{
                    backgroundColor: isActive ? colors.action : 'transparent',
                  }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </button>
                {item.children?.map((child) => {
                  const ChildIcon = child.icon;
                  const isChildActive = currentView === child.id;
                  return (
                    <button
                      key={child.id}
                      type="button"
                      onClick={() => {
                        onSelectView(child.id);
                        onClose?.();
                      }}
                      className={`
                        w-full flex items-center gap-3 pl-8 pr-3 py-2 rounded-lg text-left text-sm
                        transition-colors opacity-90 hover:opacity-100
                        ${isChildActive ? 'text-white font-medium' : 'opacity-75'}
                      `}
                      style={{
                        backgroundColor: isChildActive ? colors.action : 'transparent',
                      }}
                    >
                      <ChildIcon className="w-3.5 h-3.5 flex-shrink-0 opacity-80" />
                      {child.label}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </nav>
        <div className="p-3 border-t text-[10px] uppercase tracking-widest opacity-50 space-y-1" style={{ borderColor: `${colors.secondary}44` }}>
          <div>{themeMessaging.tagline}</div>
          <div>TOM & Capabilities v0.1</div>
        </div>
      </aside>
    </>
  );
}
