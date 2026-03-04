import { LayoutDashboard } from 'lucide-react';
import { colors, themeMessaging } from '../theme';

export function Landing({ onEnter }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-full text-center px-6"
      style={{ backgroundColor: colors.primary }}
    >
      <LayoutDashboard className="w-20 h-20 mb-6 opacity-90" style={{ color: colors.target }} />
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight mb-2">
        Controllership
      </h1>
      <p className="text-white/80 text-lg mb-2 max-w-md">
        Target Operating Model & Capabilities Matrix
      </p>
      <p className="text-white/60 text-sm uppercase tracking-widest mb-8 max-w-md">
        {themeMessaging.tagline}
      </p>
      <button
        type="button"
        onClick={onEnter}
        className="px-6 py-3 rounded-xl font-bold text-primary transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-target"
        style={{ backgroundColor: colors.target }}
      >
        Enter
      </button>
    </div>
  );
}
