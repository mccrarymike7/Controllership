import { Map, Target, AlertTriangle, ArrowRight, Calendar } from 'lucide-react';
import { colors, themeMessaging } from '../theme';
import roadmapConfig from '../../content/roadmap.json';

export function RoadmapPage() {
  const { title, subtitle, goldenState, phases } = roadmapConfig;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-12" style={{ color: colors.primary }}>
      {/* Header */}
      <header className="border-b pb-8" style={{ borderColor: colors.secondary + '44' }}>
        <div className="flex items-center gap-2 mb-4">
          <Map className="w-8 h-8" style={{ color: colors.action }} />
          <h1 className="text-3xl font-serif font-bold tracking-tight" style={{ color: colors.primary }}>{title}</h1>
        </div>
        <p className="text-base md:text-lg opacity-80 max-w-3xl">{subtitle}</p>
        <p className="text-sm mt-2 opacity-70 max-w-2xl" style={{ color: colors.secondary }}>
          Based on current operating state and risk sections in the Capabilities Matrix.
        </p>
      </header>

      {/* Golden state */}
      <section className="rounded-2xl border-2 overflow-hidden bg-white" style={{ borderColor: colors.target + '66' }}>
        <div className="px-6 py-4 border-b flex items-center gap-2" style={{ backgroundColor: colors.target + '18', borderColor: colors.target + '44' }}>
          <Target className="w-5 h-5" style={{ color: colors.target }} />
          <h2 className="text-lg font-serif font-bold" style={{ color: colors.primary }}>{goldenState.title}</h2>
        </div>
        <div className="p-6">
          <p className="text-base opacity-90 mb-6">{goldenState.description}</p>
          <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">Target outcomes</p>
          <ul className="space-y-3">
            {goldenState.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="shrink-0 w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: colors.target }} />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap timeline */}
      <section>
        <h2 className="text-xl font-serif font-bold mb-2 flex items-center gap-2" style={{ color: colors.primary }}>
          <Calendar className="w-6 h-6" style={{ color: colors.action }} />
          12-month prioritized roadmap
        </h2>
        <p className="text-sm opacity-70 mb-8">
          Initiatives are ordered by phase; priority (Critical / High) reflects capability gaps and risks from the matrix.
        </p>

        <div className="space-y-10">
          {phases.map((phase, phaseIdx) => (
            <div
              key={phaseIdx}
              className="rounded-2xl border-2 overflow-hidden bg-white"
              style={{ borderColor: colors.secondary + '44', borderLeftWidth: '6px', borderLeftColor: colors.action }}
            >
              <div className="px-6 py-4 border-b flex flex-wrap items-center gap-4" style={{ backgroundColor: colors.primary + '08', borderColor: colors.secondary + '33' }}>
                <span className="text-lg font-bold" style={{ color: colors.primary }}>{phase.period}</span>
                <span className="text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: colors.action + '22', color: colors.action }}>{phase.label}</span>
                <p className="text-sm opacity-80 w-full md:w-auto">{phase.focus}</p>
              </div>
              <ul className="divide-y" style={{ borderColor: colors.secondary + '22' }}>
                {phase.initiatives.map((init, i) => (
                  <li key={i} className="p-5 flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold" style={{ color: colors.primary }}>{init.title}</h4>
                        <span
                          className="text-[10px] font-bold uppercase px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: init.priority === 'Critical' ? colors.risk + '22' : colors.secondary + '22',
                            color: init.priority === 'Critical' ? colors.risk : colors.secondary
                          }}
                        >
                          {init.priority}
                        </span>
                      </div>
                      <p className="text-sm opacity-85">{init.description}</p>
                      <p className="text-xs mt-2 opacity-60" style={{ color: colors.secondary }}>
                        Capability area: {init.capabilityArea}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 shrink-0 opacity-40 hidden sm:block" style={{ color: colors.action }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer callout */}
      <div
        className="rounded-2xl p-6 border-2 flex flex-col md:flex-row items-start gap-4"
        style={{ backgroundColor: colors.risk + '0c', borderColor: colors.risk + '44' }}
      >
        <AlertTriangle className="w-10 h-10 shrink-0" style={{ color: colors.risk }} />
        <div>
          <h4 className="font-bold mb-1" style={{ color: colors.risk }}>Risks drive prioritization</h4>
          <p className="text-sm opacity-90">
            This roadmap is derived from the current state and risk sections in the Capabilities Matrix. Critical items address restatement risk, key-person dependency, and audit exposure; high-priority items support scalability and governance. {themeMessaging.tagline} is the thread through all phases.
          </p>
        </div>
      </div>
    </div>
  );
}
