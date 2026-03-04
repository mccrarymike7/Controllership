import { Network, ChevronRight, ArrowRight, Shield, Layers, PieChart, Repeat, Currency } from 'lucide-react';
import { colors, themeMessaging } from '../theme';
import tomConfig from '../../content/tom-config.json';

function DriverPill({ label, icon: Icon }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-semibold text-sm"
      style={{ borderColor: colors.secondary + '66', backgroundColor: 'white', color: colors.primary }}
    >
      <Icon className="w-4 h-4" style={{ color: colors.action }} />
      {label}
    </span>
  );
}

export function ComplexityPage() {
  const { complexity } = tomConfig;
  const { jurisdictions, assetMix, segments, reinsurance } = complexity;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-16" style={{ color: colors.primary }}>
      {/* Page title */}
      <header className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest bg-action/15" style={{ color: colors.action }}>
          <Network className="w-4 h-4" /> {complexity.title}
        </div>
        <p className="text-base opacity-80">
          These dimensions <strong>interconnect</strong>—jurisdictions, asset mix, segments, and reinsurance—so the overall complexity of the operating model is compounded.
        </p>
        <p className="text-sm mt-3 opacity-70 max-w-xl mx-auto" style={{ color: colors.secondary }}>
          {themeMessaging.complexity}
        </p>
      </header>

      {/* Architectural view of complexity model */}
      <section
        className="rounded-2xl p-6 md:p-10 border-2 overflow-hidden"
        style={{ backgroundColor: colors.primary + '0c', borderColor: colors.action + '44' }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70 text-center" style={{ color: colors.action }}>
          Architectural view
        </p>
        <h3 className="text-xl font-serif font-bold text-center mb-2" style={{ color: colors.primary }}>
          Complexity model
        </h3>
        <p className="text-sm text-center opacity-80 mb-8 max-w-2xl mx-auto">
          Four interconnected dimensions drive reporting and control scope. The connections between them compound the overall complexity.
        </p>

        <div className="bg-white rounded-xl border-2 p-6 md:p-8 max-w-4xl mx-auto" style={{ borderColor: colors.secondary + '44' }}>
          <svg viewBox="0 0 520 340" className="w-full h-auto" aria-hidden="true">
            {/* Foundation layer */}
            <rect x="40" y="280" width="440" height="44" rx="6" fill={colors.target + '18'} stroke={colors.target} strokeWidth="1.5" />
            <text x="260" y="306" textAnchor="middle" className="text-[11px] font-bold" fill={colors.primary}>Data completeness &amp; governance</text>

            {/* Central outcome */}
            <rect x="185" y="155" width="150" height="70" rx="6" fill={colors.risk + '18'} stroke={colors.risk} strokeWidth="2" />
            <text x="260" y="188" textAnchor="middle" className="text-[12px] font-bold" fill={colors.primary}>Operating model</text>
            <text x="260" y="205" textAnchor="middle" className="text-[10px]" fill={colors.secondary}>complexity</text>

            {/* Connectors from dimensions to center (vertical) */}
            <line x1="120" y1="130" x2="230" y2="155" stroke={colors.action + '66'} strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="400" y1="130" x2="290" y2="155" stroke={colors.action + '66'} strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="120" y1="250" x2="230" y2="225" stroke={colors.action + '66'} strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="400" y1="250" x2="290" y2="225" stroke={colors.action + '66'} strokeWidth="1.5" strokeDasharray="5 3" />

            {/* Interconnection lines between the four dimension blocks */}
            <path d="M 160 130 L 360 130" stroke={colors.secondary + '55'} strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 160 250 L 360 250" stroke={colors.secondary + '55'} strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 120 165 L 120 215" stroke={colors.secondary + '55'} strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 400 165 L 400 215" stroke={colors.secondary + '55'} strokeWidth="1" strokeDasharray="3 2" />

            {/* Four dimension blocks (architectural) */}
            {[
                { x: 50, y: 95, w: 140, h: 75, label: 'Jurisdictions', sub: 'EBS / STAT / CIMA' },
                { x: 330, y: 95, w: 140, h: 75, label: 'Asset mix', sub: 'Structured / Derivatives / Loans' },
                { x: 50, y: 215, w: 140, h: 75, label: 'Segments', sub: 'Retail / Reins / Institutional' },
                { x: 330, y: 215, w: 140, h: 75, label: 'Reinsurance', sub: 'Ceded / Assumed / Retro / JPY' },
              ].map((block, i) => (
                <g key={i}>
                  <rect x={block.x} y={block.y} width={block.w} height={block.h} rx="6" fill="white" stroke={colors.action} strokeWidth="2" />
                  <text x={block.x + block.w / 2} y={block.y + 28} textAnchor="middle" className="text-[11px] font-bold" fill={colors.primary}>{block.label}</text>
                  <text x={block.x + block.w / 2} y={block.y + 48} textAnchor="middle" className="text-[8px]" fill={colors.secondary}>{block.sub}</text>
                </g>
              ))}

            {/* Connector from center to foundation */}
            <path d="M 260 225 L 260 280" stroke={colors.target + '99'} strokeWidth="1.5" strokeDasharray="4 2" />
          </svg>
        </div>

        <p className="text-sm opacity-80 mt-6 max-w-2xl mx-auto text-center">
          Each dimension affects the others; together they define the scope of the operating model. <span className="font-medium" style={{ color: colors.action }}>{themeMessaging.tagline}</span> underpins the whole architecture.
        </p>
      </section>

      {/* Jurisdictions — visual flow */}
      <section className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
        <div className="px-6 py-4 border-b flex items-center gap-2" style={{ backgroundColor: colors.primary + '08', borderColor: colors.secondary + '33' }}>
          <Shield className="w-5 h-5" style={{ color: colors.action }} />
          <h2 className="text-lg font-serif font-bold">Jurisdictions & reporting frameworks</h2>
        </div>
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4">
            {jurisdictions.map((j, i) => (
              <div key={j.name} className="flex-1 flex flex-col items-center text-center">
                <div
                  className="w-full max-w-[200px] rounded-2xl p-6 border-2 transition-shadow hover:shadow-lg"
                  style={{ borderColor: colors.action + '66', backgroundColor: colors.primary + '06' }}
                >
                  <span className="block text-lg font-bold mb-2" style={{ color: colors.primary }}>{j.name}</span>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    {j.tag}
                  </span>
                </div>
                {i < jurisdictions.length - 1 && (
                  <div className="hidden md:flex flex-1 max-w-[80px] items-center justify-center shrink-0">
                    <ArrowRight className="w-6 h-6 opacity-40" style={{ color: colors.action }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs opacity-60 mt-6 uppercase tracking-widest">
            Three regulatory regimes — EBS/BSCR (Bermuda), STAT/GAAP (US), CIMA (Cayman)
          </p>
        </div>
      </section>

      {/* Asset mix — visual grid */}
      <section className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
        <div className="px-6 py-4 border-b flex items-center gap-2" style={{ backgroundColor: colors.target + '12', borderColor: colors.target + '44' }}>
          <Layers className="w-5 h-5" style={{ color: colors.target }} />
          <h2 className="text-lg font-serif font-bold">Complex asset mix</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {assetMix.map((item) => (
              <div
                key={item}
                className="aspect-square rounded-xl border-2 flex items-center justify-center p-3 text-center text-xs font-bold uppercase leading-tight transition-transform hover:scale-105"
                style={{ backgroundColor: colors.target + '08', borderColor: colors.target + '44', color: colors.secondary }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments — stacked list with context */}
      <section className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
        <div className="px-6 py-4 border-b flex items-center gap-2" style={{ backgroundColor: colors.risk + '10', borderColor: colors.risk + '33' }}>
          <PieChart className="w-5 h-5" style={{ color: colors.risk }} />
          <h2 className="text-lg font-serif font-bold">Core segments</h2>
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4 italic">
            Each requires unique Adjusted Operating Income views
          </p>
          <div className="space-y-3">
            {segments.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border-l-4"
                style={{ backgroundColor: colors.primary + '04', borderLeftColor: colors.risk }}
              >
                <ChevronRight className="w-5 h-5 shrink-0" style={{ color: colors.risk }} />
                <span className="font-semibold">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reinsurance — flow + funds withheld + JPY */}
      {reinsurance && (
        <section className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
          <div className="px-6 py-4 border-b flex items-center gap-2" style={{ backgroundColor: colors.action + '12', borderColor: colors.action + '44' }}>
            <Repeat className="w-5 h-5" style={{ color: colors.action }} />
            <h2 className="text-lg font-serif font-bold">{reinsurance.title}</h2>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-sm opacity-80">{reinsurance.subtitle}</p>

            {/* Contract types flow */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">Contract types</h3>
              <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
                {reinsurance.contractTypes.map((ct, i) => (
                  <div key={ct.id} className="flex-1 flex flex-col">
                    <div
                      className="rounded-xl p-5 border-2 flex flex-col flex-1"
                      style={{ borderColor: colors.action + '55', backgroundColor: colors.primary + '06' }}
                    >
                      <span className="block text-sm font-bold mb-1" style={{ color: colors.action }}>{ct.label}</span>
                      <span className="text-xs opacity-80">{ct.description}</span>
                    </div>
                    {i < reinsurance.contractTypes.length - 1 && (
                      <div className="hidden md:flex justify-center py-2">
                        <ArrowRight className="w-5 h-5 opacity-50" style={{ color: colors.action }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Funds withheld */}
            {reinsurance.fundsWithheld && (
              <div
                className="rounded-xl p-5 border-2 flex items-center gap-4"
                style={{ backgroundColor: colors.target + '10', borderColor: colors.target + '55' }}
              >
                <div className="p-2 rounded-lg bg-target/20">
                  <Shield className="w-5 h-5" style={{ color: colors.target }} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">Basis</span>
                  <p className="font-semibold mt-0.5" style={{ color: colors.primary }}>{reinsurance.fundsWithheldLabel}</p>
                </div>
              </div>
            )}

            {/* JPY complexity */}
            {reinsurance.jyComplexity && (
              <div
                className="rounded-xl p-5 border-2 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ backgroundColor: colors.risk + '0c', borderColor: colors.risk + '55' }}
              >
                <div className="p-2 rounded-lg bg-risk/20 shrink-0">
                  <Currency className="w-5 h-5" style={{ color: colors.risk }} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">Currency & accounting</span>
                  <p className="font-semibold mt-0.5" style={{ color: colors.primary }}>{reinsurance.jyComplexity.label}</p>
                  <p className="text-sm opacity-80 mt-1">Requires: {reinsurance.jyComplexity.requirements.join(' and ')}.</p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {reinsurance.jyComplexity.requirements.map((req) => (
                    <span
                      key={req}
                      className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                      style={{ backgroundColor: colors.risk }}
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
