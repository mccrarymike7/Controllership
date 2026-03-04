import { useState, useEffect } from 'react';
import { X, LayoutDashboard, Users, GitBranch, Network, Map, FileText, ChevronDown, ChevronRight, ClipboardList } from 'lucide-react';
import { colors, themeMessaging } from '../../theme';

const navItems = [
  { id: 'complexity', label: 'Complexity Multiplier', icon: Network },
  {
    id: 'capabilities',
    label: 'Capabilities Matrix',
    icon: Users,
    children: [
      { id: 'capabilities-instructions', label: 'Instructions for updating deep dives', icon: FileText },
      { id: 'implementation-plan', label: 'Implementation Plan', icon: ClipboardList },
    ],
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    icon: Map,
    children: [
      { id: 'roadmap-reinsurance', label: 'Reinsurance Administration', icon: Map },
      { id: 'roadmap-investment', label: 'Investment Accounting', icon: Map },
      { id: 'roadmap-accounting-ops', label: 'Accounting Ops & Technical', icon: Map },
      { id: 'roadmap-financial-reporting', label: 'Financial Reporting', icon: Map },
      { id: 'roadmap-finance-systems', label: 'Finance Systems', icon: Map },
    ],
  },
  { id: 'tom', label: 'Target Operating Model', icon: GitBranch },
];

export function Sidebar({ currentView, onSelectView, isOpen, onClose }) {
  const [expandedIds, setExpandedIds] = useState(() => new Set());

  useEffect(() => {
    if (!currentView) return;
    const next = new Set();
    navItems.forEach((item) => {
      if (item.children && (item.id === currentView || item.children.some((c) => c.id === currentView))) {
        next.add(item.id);
      }
    });
    setExpandedIds(next);
  }, [currentView]);

  const isExpanded = (id) => expandedIds.has(id);
  const toggleExpanded = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
            const hasChildren = item.children?.length;
            const expanded = hasChildren ? isExpanded(item.id) : false;
            return (
              <div key={item.id}>
                <div
                  className={`
                    w-full flex items-center gap-1 px-3 py-2.5 rounded-lg text-left text-sm font-medium
                    transition-colors
                    ${isActive ? 'text-white' : 'opacity-80 hover:opacity-100'}
                  `}
                  style={{
                    backgroundColor: isActive ? colors.action : 'transparent',
                  }}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={(e) => toggleExpanded(e, item.id)}
                      className="p-0.5 rounded hover:bg-white/10 flex-shrink-0"
                      aria-label={expanded ? 'Collapse' : 'Expand'}
                    >
                      {expanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    <span className="w-5 flex-shrink-0" aria-hidden />
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      onSelectView(item.id);
                      onClose?.();
                    }}
                    className="flex-1 flex items-center gap-3 min-w-0 text-left"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                </div>
                {hasChildren && expanded && (
                  <div className="ml-6 border-l-2 border-white/20 pl-3" style={{ borderColor: colors.secondary + '44' }}>
                    {item.children.map((child) => {
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
                            w-full flex items-center gap-3 pl-5 pr-3 py-2 rounded-lg text-left text-sm
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
                )}
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
