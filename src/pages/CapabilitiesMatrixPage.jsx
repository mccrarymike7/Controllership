import { GraduationCap, AlertTriangle } from 'lucide-react';
import { colors, themeMessaging } from '../theme';
import matrixConfig from '../../content/capabilities-matrix.json';

const levelColors = [colors.secondary, colors.action, colors.target, colors.primary];

export function CapabilitiesMatrixPage() {
  const { matrixIntro, proficiencyLevels, deepDives, coreDomains, teamAssessment, gapAnalysis } = matrixConfig;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-12" style={{ color: colors.primary }}>
      {/* Intro */}
      <div className="flex flex-col gap-2">
        <p className="text-base opacity-90 max-w-3xl">{matrixIntro}</p>
        <p className="text-sm opacity-80 max-w-2xl" style={{ color: colors.secondary }}>{themeMessaging.capabilities}</p>
      </div>

      {/* Proficiency levels */}
      <section>
        <div className="flex items-center mb-6">
          <div className="p-2 rounded-lg mr-4 bg-target/20">
            <GraduationCap style={{ color: colors.target }} className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-serif font-bold">1. Proficiency Level Definitions</h2>
        </div>
        {matrixConfig.proficiencyLevelContext && (
          <p className="text-sm opacity-85 mb-4 max-w-3xl" style={{ color: colors.secondary }}>
            {matrixConfig.proficiencyLevelContext}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {proficiencyLevels.map((p) => (
            <div
              key={p.level}
              className="bg-white p-5 rounded-xl shadow-sm border overflow-hidden"
              style={{ borderColor: colors.secondary + '44', borderTopWidth: '4px', borderTopColor: levelColors[p.level - 1] }}
            >
              <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Level {p.level}</div>
              <h4 className="font-bold mb-2" style={{ color: colors.primary }}>{p.name}</h4>
              <p className="text-sm opacity-80">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating state legend — sticky at top when scrolling */}
      <section
        className="sticky top-0 z-10 flex flex-wrap items-center gap-6 p-4 rounded-xl border-2 bg-white shadow-sm"
        style={{ borderColor: colors.secondary + '44' }}
      >
        <span className="text-xs font-bold uppercase tracking-widest opacity-70">Operating state (level + mode)</span>
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded border-2 shrink-0" style={{ backgroundColor: colors.risk + '35', borderColor: colors.risk }} />
          <span className="text-sm font-medium">Manual</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded border-2 shrink-0" style={{ backgroundColor: colors.target + '35', borderColor: colors.target }} />
          <span className="text-sm font-medium">Automated</span>
        </div>
        <p className="text-xs opacity-70">Cells show where the function operates today; color indicates manual vs automated at that level.</p>
      </section>

      {/* Deep-dive tables */}
      {deepDives.map((dive, diveIdx) => {
        const operatingState = dive.operatingState;
        const getMode = (compIdx, level) => {
          if (!operatingState || !operatingState[compIdx]) return null;
          const entry = operatingState[compIdx].find((e) => e.level === level);
          return entry ? entry.mode : null;
        };
        return (
          <section key={diveIdx}>
            <h3 className="text-xl font-serif font-bold mb-2" style={{ color: colors.primary }}>{diveIdx + 2}. Deep Dive: {dive.title}</h3>
            <p className="text-sm opacity-70 mb-6">{dive.subtitle}</p>
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-white text-left" style={{ backgroundColor: colors.primary }}>
                      <th className="p-3 font-bold">Competency</th>
                      <th className="p-3 font-bold w-[22%]">Level 1: Foundational</th>
                      <th className="p-3 font-bold w-[22%]">Level 2: Intermediate</th>
                      <th className="p-3 font-bold w-[22%]">Level 3: Advanced</th>
                      <th className="p-3 font-bold w-[22%]">Level 4: Expert / Strategic (12‑mo target)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dive.competencies.map((c, compIdx) => (
                      <tr key={compIdx} className="border-b hover:bg-primary/5" style={{ borderColor: colors.secondary + '22' }}>
                        <td className="p-3 font-semibold align-top">{c.name}</td>
                        {[1, 2, 3, 4].map((level) => {
                          const mode = getMode(compIdx, level);
                          const levelKey = `level${level}`;
                          const text = c[levelKey];
                          const bg = mode === 'manual' ? colors.risk + '22' : mode === 'automated' ? colors.target + '22' : undefined;
                          const border = mode ? (mode === 'manual' ? colors.risk + '88' : colors.target + '88') : undefined;
                          return (
                            <td
                              key={level}
                              className="p-3 align-top relative"
                              style={{ backgroundColor: bg, borderLeft: border ? `3px solid ${border}` : undefined }}
                            >
                              {mode && (
                                <span
                                  className="absolute top-2 right-2 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded text-white"
                                  style={{ backgroundColor: mode === 'manual' ? colors.risk : colors.target }}
                                >
                                  {mode === 'manual' ? 'M' : 'A'}
                                </span>
                              )}
                              <span className={mode ? 'opacity-95' : 'opacity-90'}>{text}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {dive.riskSection && dive.riskSection.items && dive.riskSection.items.length > 0 && (
              <div
                className="mt-6 rounded-2xl border-2 overflow-hidden"
                style={{ backgroundColor: colors.risk + '0c', borderColor: colors.risk + '44' }}
              >
                <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: colors.risk + '44' }}>
                  <AlertTriangle className="w-5 h-5 shrink-0" style={{ color: colors.risk }} />
                  <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: colors.risk }}>
                    Risks of maintaining current state
                  </h4>
                </div>
                <ul className="p-5 space-y-2 list-none">
                  {dive.riskSection.items.map((item, k) => (
                    <li key={k} className="text-sm flex items-start gap-2" style={{ color: colors.primary }}>
                      <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.risk }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        );
      })}

      {/* Core domains */}
      <section>
        <h3 className="text-xl font-serif font-bold mb-6" style={{ color: colors.primary }}>4. Core Capability Domains (General)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreDomains.map((domain, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
              <div className="p-4 border-b" style={{ backgroundColor: colors.target + '15', borderColor: colors.target + '44' }}>
                <h4 className="font-bold" style={{ color: colors.primary }}>{domain.groupName}</h4>
              </div>
              <div className="p-4 space-y-4">
                {domain.competencies.map((c, j) => (
                  <div key={j}>
                    <div className="font-semibold text-sm mb-1">{c.name}</div>
                    <ul className="text-xs opacity-80 space-y-1 pl-4 list-disc">
                      {c.focusAreas.map((fa, k) => (
                        <li key={k}>{fa}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team assessment */}
      <section>
        <h3 className="text-xl font-serif font-bold mb-6" style={{ color: colors.primary }}>5. Team Assessment Summary (Illustrative)</h3>
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: colors.secondary + '44' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white text-left" style={{ backgroundColor: colors.primary }}>
                  <th className="p-3 font-bold">Team Member</th>
                  {teamAssessment.dimensionColumns.map((col) => (
                    <th key={col} className="p-3 font-bold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teamAssessment.rows.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-primary/5" style={{ borderColor: colors.secondary + '22' }}>
                    <td className="p-3 font-semibold">{row.label}</td>
                    {teamAssessment.dimensionColumns.map((col) => {
                      const level = row.levels[col];
                      return (
                        <td key={col} className="p-3">
                          <span
                            className="inline-flex w-8 h-8 items-center justify-center rounded-full text-white text-xs font-bold"
                            style={{ backgroundColor: levelColors[level - 1] }}
                          >
                            {level}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gap analysis */}
      <section>
        <h3 className="text-xl font-serif font-bold mb-6 flex items-center" style={{ color: colors.risk }}>
          <AlertTriangle className="mr-2 w-5 h-5" /> 6. Strategic Gap Analysis & Recommendations
        </h3>
        <div className="space-y-4">
          {gapAnalysis.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border"
              style={{ backgroundColor: colors.risk + '12', borderColor: colors.risk + '44' }}
            >
              <h4 className="font-bold mb-2" style={{ color: colors.risk }}>{item.title}</h4>
              <p className="text-sm opacity-90">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

