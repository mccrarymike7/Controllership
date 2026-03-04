import { ClipboardList, Clock, Users, CheckCircle } from 'lucide-react';
import { colors } from '../theme';

const steps = [
  {
    text: '30 min meeting with team leaders to overview',
    context: 'Introduce the matrix, the deep-dive areas, and how levels and operating state work. Set expectations for who contributes what and the timeline.',
    icon: Clock,
  },
  {
    text: 'Team members review individually to determine communication and plan to their respective groups',
    context: 'Each person reads the Instructions and their area’s deep-dive so they can explain it clearly and gather input from their group in a consistent way.',
    icon: Users,
  },
  {
    text: 'Team leads to meet with functional team to refine matrix',
    context: 'Use the content from individual reviews to update competencies, level descriptions, where the function operates today, and risks. Refine until the matrix reflects reality.',
    icon: ClipboardList,
  },
  {
    text: 'Once matrix is updated, meet with controller for 30 minutes to review',
    context: 'Walk through the updated matrix with the Controller so priorities, gaps, and roadmap alignment are agreed before the final group session.',
    icon: Clock,
  },
  {
    text: 'Final meeting with group to align on each area for future state & benefits — 1 hour',
    context: 'Present the refined matrix and, for each area, the target future state and benefits of leveling up. Get alignment so the roadmap and next steps are clear.',
    icon: CheckCircle,
  },
  {
    text: 'Help align all staff for each area on future and their role in developing the function. This is the most important step.',
    context: 'Ensure everyone understands where the function is heading and how their role contributes. This builds ownership and makes the matrix a living tool, not a one-time exercise.',
    icon: Users,
    highlight: true,
  },
];

export function ImplementationPlanPage() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-10" style={{ color: colors.primary }}>
      <header className="border-b pb-8" style={{ borderColor: colors.secondary + '44' }}>
        <div className="flex items-center gap-2 mb-4">
          <ClipboardList className="w-8 h-8" style={{ color: colors.action }} />
          <h1 className="text-3xl font-serif font-bold tracking-tight" style={{ color: colors.primary }}>
            Implementation Plan
          </h1>
        </div>
        <p className="text-base opacity-80 max-w-2xl" style={{ color: colors.secondary }}>
          Phased rollout for the Capabilities Matrix and future-state alignment.
        </p>
      </header>

      <section className="space-y-4">
        <ol className="list-none pl-0 space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={i}
                className={`
                  flex items-start gap-4 p-5 rounded-xl border-2
                  ${step.highlight ? 'border-action/60' : ''}
                `}
                style={{
                  backgroundColor: step.highlight ? colors.action + '12' : 'white',
                  borderColor: step.highlight ? colors.action + '66' : colors.secondary + '44',
                }}
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: step.highlight ? colors.action : colors.secondary }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`text-base ${step.highlight ? 'font-semibold' : 'opacity-90'}`} style={{ color: colors.primary }}>
                    {step.text}
                  </p>
                  {step.context && (
                    <p className="text-sm mt-2 opacity-80" style={{ color: colors.secondary }}>
                      {step.context}
                    </p>
                  )}
                  {step.highlight && (
                    <p className="text-sm mt-2 font-medium" style={{ color: colors.action }}>
                      Most important step
                    </p>
                  )}
                </div>
                <Icon className="w-5 h-5 flex-shrink-0 opacity-70" style={{ color: colors.secondary }} />
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
