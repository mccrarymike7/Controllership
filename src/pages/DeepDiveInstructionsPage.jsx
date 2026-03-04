import { Users, BookOpen, Target, AlertCircle, Send } from 'lucide-react';
import { colors } from '../theme';

export function DeepDiveInstructionsPage() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="space-y-10 max-w-3xl" style={{ color: colors.primary }}>
        <div>
          <h2 className="text-2xl font-serif font-bold mb-2" style={{ color: colors.primary }}>
            How to contribute content to the Capabilities Matrix
          </h2>
          <p className="text-base opacity-90">
            This guide helps team members provide the right content so the matrix reflects our real capabilities, gaps, and risks. Your input is used to keep the matrix accurate and useful for planning.
          </p>
        </div>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.secondary + '44' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.action }}>
            <Users className="w-5 h-5" /> What we need from you
          </h3>
          <p className="text-sm mb-4">
            For your area (e.g. Reinsurance, Investment Accounting, Financial Reporting, Finance Systems), we need clear, practical descriptions that anyone on the team can understand. You don’t need to touch any systems or files—just provide the content; someone will add it to the matrix.
          </p>
          <ul className="text-sm space-y-2 list-disc pl-5 opacity-90">
            <li><strong>Competency names</strong> — Short labels for each capability (e.g. “Settlement Execution”, “Treaty Accounting”).</li>
            <li><strong>Level descriptions</strong> — What “good” looks like at each level (1–4) for that competency. Level 4 can describe where we’re heading in ~12 months (transactions and complexity we may not have yet).</li>
            <li><strong>Where the function operates today</strong> — For each competency, what level the function or group can deliver at and whether it’s mostly manual or automated.</li>
            <li><strong>Risks</strong> — A few bullets on what happens if we stay at the current state (e.g. key-person dependency, errors, delay).</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.secondary + '44' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
            <BookOpen className="w-5 h-5" /> How to describe each proficiency level
          </h3>
          <p className="text-sm mb-4">
            Levels describe the <strong>function or group’s ability to complete</strong> each competency—not individual capability alone. We think about “can the function deliver this?” (capacity, depth, coverage, controls). The scale is forward-looking: Level 4 often represents where we may be in <strong>about 12 months</strong>. When you write level descriptions, describe what the function/group can do at that level; it’s okay to include future state or complexity we’re scaling into.
          </p>
          <ul className="text-sm space-y-3 list-none pl-0">
            <li>
              <strong style={{ color: colors.secondary }}>Level 1 — Foundational</strong>
              <span className="block opacity-90 mt-1">The function has basic coverage; work gets done with significant supervision and guidance. Enough to run current routine work and establish a baseline as we grow.</span>
            </li>
            <li>
              <strong style={{ color: colors.action }}>Level 2 — Intermediate</strong>
              <span className="block opacity-90 mt-1">The function can deliver routine work with minimal review. Handles standard cases and knows when to escalate. Supports current volume and straightforward new work.</span>
            </li>
            <li>
              <strong style={{ color: colors.target }}>Level 3 — Advanced</strong>
              <span className="block opacity-90 mt-1">The function has the depth to handle complex cases, exceptions, and judgment calls; can improve process and develop others. Covers the complexity we have today and more as we scale.</span>
            </li>
            <li>
              <strong style={{ color: colors.primary }}>Level 4 — Expert / Strategic (often our 12‑month target)</strong>
              <span className="block opacity-90 mt-1">Target state: the function sets standards, designs solutions, owns policy and regulator liaison. Capability we’re building toward—not necessarily where we are today.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.secondary + '44' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
            <Target className="w-5 h-5" /> Describing “where we operate today”
          </h3>
          <p className="text-sm mb-4">
            For each competency, we show what level the <strong>function or group</strong> operates at today and whether that work is <strong>manual</strong> (spreadsheets, email, hand-offs) or <strong>automated</strong> (system-driven, straight-through). Think “the function’s ability to complete this competency today.” The scale is forward-looking—we may be at Level 2 or 3 today while Level 4 is where we’re heading in 12 months. That gap is what we use for planning and investment.
          </p>
          <p className="text-sm opacity-90">
            When you provide input, describe the function/group: e.g. “The function is at Level 2 today and it’s mostly manual” or “Level 3 and largely automated.” If different parts of the process differ, note that. It’s fine if the function isn’t at Level 4 yet—that’s the target we’re building toward.
          </p>
        </section>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.risk + '44', backgroundColor: colors.risk + '08' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.risk }}>
            <AlertCircle className="w-5 h-5" /> What to include in “Risks of maintaining current state”
          </h3>
          <p className="text-sm mb-4">
            For each deep-dive area, we list risks if we stay where we are. Your input here is critical. Think about:
          </p>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>Key-person or single-point-of-failure risk</li>
            <li>Error or control risk from manual steps or weak controls</li>
            <li>Delay or capacity risk (e.g. can’t scale, slow close)</li>
            <li>Regulatory or audit exposure</li>
            <li>Difficulty attracting or retaining people with the right skills</li>
          </ul>
          <p className="text-sm mt-4 opacity-90">
            Keep each risk to one or two short sentences. We’re looking for the 3–5 most important risks per area, not an exhaustive list.
          </p>
        </section>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.action + '66' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.action }}>
            <Send className="w-5 h-5" /> How to submit your content
          </h3>
          <p className="text-sm mb-2">
            Send your content to your area lead or the person coordinating the Capabilities Matrix (e.g. Controller, Director of Accounting Policy/Operations, or Director of Finance Systems). You can provide it in whatever format is easiest—Word, email, or a short document—as long as it’s clear which deep-dive area and competency each piece applies to.
          </p>
          <p className="text-sm opacity-90">
            If you’re not sure who owns your area, check the Team Assessment section on the Capabilities Matrix page; the matrix owner will make sure your input is reflected in the next update.
          </p>
        </section>
      </div>
    </div>
  );
}
