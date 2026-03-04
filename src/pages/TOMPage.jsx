import { useState } from 'react';
import {
  AlertTriangle,
  GraduationCap,
  Database,
  Activity,
  Zap,
  Shield,
  Link,
  ArrowRight,
} from 'lucide-react';
import { colors, themeMessaging } from '../theme';
import tomConfig from '../../content/tom-config.json';

export function TOMPage() {
  const [activePhase, setActivePhase] = useState(0);
  const { header, frictionPoints, frictionImpact, tomLayers, phases, footer } = tomConfig;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-16" style={{ color: colors.primary }}>
      {/* Header */}
      <header className="border-b pb-8" style={{ borderColor: colors.secondary + '44' }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-extrabold tracking-tight mb-2" style={{ color: colors.primary }}>
              {header.title.split(' ').slice(0, -1).join(' ')} <span style={{ color: colors.action }}>Institutional Maturity</span>
            </h1>
            <p className="text-base md:text-lg opacity-80 max-w-3xl">
              {header.subtitle}
            </p>
            <p className="text-sm mt-2 opacity-70 max-w-2xl" style={{ color: colors.secondary }}>
              {themeMessaging.full}
            </p>
          </div>
          <div
            className="px-4 py-2 text-white rounded-xl text-xs font-bold tracking-widest shadow-lg"
            style={{ backgroundColor: colors.primary }}
          >
            {header.badge}
          </div>
        </div>
      </header>

      {/* Friction map */}
      <section className="rounded-3xl p-8 border relative overflow-hidden bg-risk/8" style={{ borderColor: colors.risk + '33' }}>
        <div className="relative z-10">
          <h3 className="text-xl font-serif font-bold mb-2 flex items-center" style={{ color: colors.risk }}>
            <AlertTriangle className="mr-3 w-5 h-5" /> Current State Friction Map: Where the Risks Live
          </h3>
          <p className="text-sm opacity-90 mb-6">{themeMessaging.friction}</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {frictionPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border h-full" style={{ borderColor: colors.risk + '22' }}>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 rounded-lg bg-risk/10" />
                  <span className="text-[9px] font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: point.risk === 'Critical' ? colors.risk : colors.secondary }}>
                    {point.risk} RISK
                  </span>
                </div>
                <h5 className="font-bold text-sm mb-1">{point.label}</h5>
                <p className="text-[10px] font-semibold uppercase italic" style={{ color: colors.risk }}>{point.pain}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6" style={{ backgroundColor: colors.risk }}>
            <div className="text-3xl">⚠</div>
            <div className="text-sm">
              <p className="font-bold mb-1">Impact of &quot;Status Quo&quot;</p>
              <p className="opacity-90 italic text-sm">{frictionImpact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOM diagram */}
      <section>
        <div className="flex items-center mb-2">
          <div className="p-2 rounded-lg mr-4 bg-action/20">
            <GraduationCap style={{ color: colors.target }} className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-serif font-bold">Target Operating Model: The &quot;Golden Source&quot; Engine</h2>
        </div>
        <p className="text-sm opacity-80 mb-6 max-w-2xl">{themeMessaging.tom}</p>
        <div className="rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: colors.primary }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-3" style={{ color: colors.target }}>
                <Database className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">{tomLayers.layer1.label}</span>
              </div>
              <div className="space-y-3">
                {tomLayers.layer1.systems.map((s, i) => (
                  <div key={i} className="p-4 rounded-xl border text-center bg-secondary/40" style={{ borderColor: colors.secondary }}>
                    <p className="font-bold">{s.name}</p>
                    <p className="text-[10px] opacity-60">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-center space-x-3 opacity-90">
                <Activity className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">{tomLayers.layer2.label}</span>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-target to-action" />
              <div className="p-6 rounded-2xl shadow-xl w-full text-center border bg-action" style={{ borderColor: colors.target + '44' }}>
                <p className="text-xl font-extrabold italic tracking-tighter uppercase">{tomLayers.layer2.core.name}</p>
                <p className="text-xs opacity-70 mt-1 font-semibold uppercase tracking-widest">{tomLayers.layer2.core.sub}</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-action to-risk" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3" style={{ color: colors.risk }}>
                <Zap className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">{tomLayers.layer3.label}</span>
              </div>
              <div className="space-y-3">
                {tomLayers.layer3.systems.map((s, i) => (
                  <div key={i} className="p-4 rounded-xl border text-center bg-risk/20" style={{ borderColor: colors.risk }}>
                    <p className="font-bold uppercase" style={{ color: colors.risk }}>{s.name}</p>
                    <p className="text-[10px] opacity-60">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0 bg-secondary/20" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase, idx) => {
              const isActive = activePhase === idx;
              const icons = [Shield, Link, Zap];
              const Icon = icons[idx] ?? Zap;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhase(idx)}
                  className={`text-left transition-all duration-300 transform ${isActive ? 'scale-105' : 'opacity-80 hover:opacity-100'}`}
                >
                  <div className={`p-6 rounded-3xl bg-white border-2 shadow-sm transition-all h-full ${isActive ? 'shadow-xl' : 'border-slate-100'}`} style={{ borderColor: isActive ? colors.action : 'transparent' }}>
                    <div className="flex justify-between items-center mb-4">
                      <Icon className="w-8 h-8" style={{ color: colors.action }} />
                      <span className="text-[10px] font-bold opacity-60 px-2 py-1 rounded bg-primary/10">{phase.timing}</span>
                    </div>
                    <h4 className="text-lg font-extrabold mb-1" style={{ color: colors.primary }}>{phase.title}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: colors.action }}>{phase.subtitle}</p>
                    <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-60' : 'max-h-0'}`}>
                      <ul className="space-y-2 mb-4 border-t pt-4" style={{ borderColor: colors.secondary + '44' }}>
                        {phase.actions.map((action, i) => (
                          <li key={i} className="text-xs opacity-70 flex items-center">
                            <ArrowRight className="w-3 h-3 mr-2" style={{ color: colors.action }} /> {action}
                          </li>
                        ))}
                      </ul>
                      <div className="p-3 rounded-lg border bg-target/10" style={{ borderColor: colors.target + '44' }}>
                        <p className="text-[11px] font-bold italic text-center uppercase tracking-tighter" style={{ color: colors.secondary }}>Impact: {phase.outcome}</p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rounded-3xl p-12 text-white text-center shadow-2xl" style={{ backgroundColor: colors.primary }}>
        <p className="text-xs uppercase tracking-widest mb-4 opacity-70" style={{ color: colors.target }}>{themeMessaging.tagline}</p>
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold mb-6 tracking-tight italic">{footer.headline}</h2>
        <p className="opacity-80 max-w-3xl mx-auto mb-10 text-lg font-medium leading-relaxed">{footer.body}</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {footer.roi.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border backdrop-blur-sm bg-risk/20" style={{ borderColor: colors.risk + '44' }}>
              <p className="text-[10px] uppercase font-bold mb-2 opacity-70 tracking-widest">{item.label}</p>
              <p className="text-xl font-bold italic" style={{ color: colors.target }}>{item.value}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
