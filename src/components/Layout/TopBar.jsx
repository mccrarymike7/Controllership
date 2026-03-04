import { useState } from 'react';
import { Menu, Link2, Check } from 'lucide-react';
import { colors } from '../../theme';

const viewTitles = {
  complexity: 'Complexity Multiplier',
  tom: 'Target Operating Model',
  capabilities: 'Capabilities Matrix',
  'capabilities-instructions': 'Instructions for updating deep dives',
  roadmap: 'Roadmap',
};

export function TopBar({ currentView, onMenuClick, title }) {
  const [copied, setCopied] = useState(false);
  const displayTitle = title ?? (currentView ? viewTitles[currentView] ?? 'Controllership' : 'Controllership');

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers or non-HTTPS
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header
      className="h-12 flex items-center justify-between px-4 flex-shrink-0 border-b"
      style={{ backgroundColor: colors.primary, borderColor: `${colors.secondary}44` }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          className="md:hidden p-2 rounded hover:opacity-80 text-white"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-xs uppercase tracking-widest opacity-60 hidden sm:inline">Current view</span>
        <h1 className="font-bold truncate text-white">{displayTitle}</h1>
      </div>
      <div className="flex items-center gap-2 text-xs opacity-70">
        {currentView && (
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            title="Copy link to this view"
            aria-label={copied ? 'Link copied' : 'Copy link to share'}
          >
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy link'}</span>
          </button>
        )}
        <span className="hidden sm:inline">Status</span>
        <span className="w-2 h-2 rounded-full bg-target" style={{ backgroundColor: colors.target }} title="Optimal" />
      </div>
    </header>
  );
}
