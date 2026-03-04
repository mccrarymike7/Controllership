import { Users, BookOpen, Target, AlertCircle, ListChecks, TrendingUp } from 'lucide-react';
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
            <li>
              <strong>Where the function operates today</strong> — For each competency: which level(s) the function delivers at, and at each of those levels whether the work is <strong>manual</strong> or <strong>automated</strong>. You can have both (e.g. automated at Level 1, manual at Level 2–3). Optionally add <em>how</em> manual work is done (reports, EUCs, paper, new spreadsheet each time) and whether it’s internal vs 3rd party—we use that for risk and roadmap even if it’s not shown in the grid yet.
            </li>
            <li><strong>Risks</strong> — A few bullets on what happens if we stay at the current state (e.g. key-person dependency, errors, delay).</li>
            <li><strong>Benefits of leveling up</strong> — For each competency (or for your top priorities): what we gain by moving to the next level—e.g. fewer manual hand-offs, faster close, better audit readiness, ability to support new products or jurisdictions, or reduced key-person dependency. Short bullets are enough; we use this in the matrix and for prioritization.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.secondary + '44' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
            <ListChecks className="w-5 h-5" /> How do we know what a competency is for our area?
          </h3>
          <p className="text-sm mb-4">
            A <strong>competency</strong> is a distinct capability the function needs to deliver—something you can assess at levels 1–4 and say “we operate here today” and “we’re aiming there in 12 months.” Use the following to decide what counts as a competency in your area:
          </p>
          <ul className="text-sm space-y-2 list-disc pl-5 opacity-90">
            <li><strong>Core processes and outputs</strong> — What does your area own end-to-end? (e.g. settlement execution, treaty accounting, regulatory filing production.) Each major process or output that has a “how well do we do this?” question is a candidate competency.</li>
            <li><strong>Where level really varies</strong> — If some work is routine and other work is complex or judgment-heavy, splitting into separate competencies (e.g. “Routine settlements” vs “Complex / exception settlements”) can make the matrix more useful.</li>
            <li><strong>Risks and dependencies</strong> — If you talk about “we don’t have enough depth in X” or “X is a key-person risk,” X is likely a competency worth naming.</li>
            <li><strong>Look at similar areas in the matrix</strong> — Check other deep-dive sections (e.g. Reinsurance, Investment Accounting, Financial Reporting). Use them as a pattern: 3–6 competencies per area is typical; each has a short name and clear level descriptions.</li>
            <li><strong>Not job titles—capabilities</strong> — Competencies are what the function can do, not roles. “Treaty Accounting” is a competency; “Reinsurance Manager” is a role. One role may cover several competencies.</li>
          </ul>
          <p className="text-sm mt-4 opacity-90">
            If you’re unsure, start with 3–5 competencies that matter most for close, controls, and audit—you can add or refine later. Your area lead or the matrix owner can help align with other areas.
          </p>
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
          <p className="text-sm mt-4 opacity-90">
            As you think about levels, it also helps to capture the <strong>benefits of moving up a level</strong>—especially from Level 3 to Level 4. For example: fewer manual hand-offs, faster close, better audit readiness, ability to support new products or jurisdictions, or reduced dependency on key individuals. A short note on “what we gain” at the next level makes it easier to prioritize where to invest.
          </p>
        </section>

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: colors.secondary + '44' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
            <Target className="w-5 h-5" /> “Where the function operates today” — and how it shows up in the matrix
          </h3>
          <p className="text-sm mb-4">
            For each competency we need to know: <strong>at which level(s) does the function actually operate today?</strong> and at each of those levels, is the work <strong>manual</strong> (spreadsheets, reports, EUCs, hand-offs) or <strong>automated</strong> (system-driven, straight-through)? The matrix is forward-looking—Level 4 is often our 12‑month target—so we may operate at Level 2 or 3 today. That gap is what we use for planning.
          </p>
          <p className="text-sm font-medium mb-2" style={{ color: colors.action }}>
            How this appears in the Capabilities Matrix
          </p>
          <p className="text-sm mb-4 opacity-90">
            In each deep-dive table, every cell shows what “good” looks like at that level (the level description). For competencies where we’ve captured operating state, we <strong>highlight the cell(s) where the function operates today</strong> and tag them <strong>M</strong> (manual) or <strong>A</strong> (automated). So you’ll see colored cells with an M or A badge on the levels we’re at; the other cells stay as reference for where we’re heading. That’s how “where we operate today” is shown in the grid.
          </p>
          <p className="text-sm font-medium mb-2" style={{ color: colors.primary }}>
            What to provide when you contribute
          </p>
          <ul className="text-sm space-y-1 list-disc pl-5 opacity-90 mb-4">
            <li><strong>Level + mode:</strong> e.g. “We operate at Level 2 and it’s manual” or “Level 1 is automated, Level 2 and 3 are manual.” (Hybrid is fine—different levels can have different modes.)</li>
            <li><strong>Optional but helpful:</strong> If it’s manual, <em>how</em> (system report + Excel, EUC, paper, new spreadsheet every time) and whether it’s done internally or by a 3rd party. This helps us judge how hard it is to move to the next level and feeds risk/roadmap; we may add it to the matrix later.</li>
          </ul>
          <p className="text-sm opacity-90">
            It’s fine if the function isn’t at Level 4 yet—that’s the target we’re building toward. Your input makes the matrix an honest picture of today so we can prioritize where to invest.
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

        <section className="bg-white rounded-2xl border-2 p-6" style={{ borderColor: '#86efac', backgroundColor: '#ecfdf5' }}>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#047857' }}>
            <TrendingUp className="w-5 h-5" /> Instructions for leveling up
          </h3>
          <p className="text-sm mb-4">
            For each deep-dive area, the matrix has a <strong>“Benefits of Leveling Up”</strong> box (green) below the risks. Use it to capture what the function gains by moving to the next level—especially from Level 3 to Level 4. This helps prioritize where to invest and makes the case for change.
          </p>
          <p className="text-sm font-medium mb-2" style={{ color: colors.primary }}>
            What to include
          </p>
          <ul className="text-sm space-y-2 list-disc pl-5 opacity-90 mb-4">
            <li><strong>Operational benefits</strong> — e.g. faster close, fewer manual hand-offs, less rework, better capacity to handle new volume or products.</li>
            <li><strong>Control and audit benefits</strong> — e.g. audit-ready evidence, stronger traceability, reduced restatement or finding risk.</li>
            <li><strong>Strategic benefits</strong> — e.g. ability to support new jurisdictions or products, reduced key-person dependency, clearer ownership and governance.</li>
          </ul>
          <p className="text-sm opacity-90">
            Keep each benefit to one short sentence. Aim for 3–5 benefits per area. If your area doesn’t have benefits filled in yet, add them when you contribute—they appear in the green box on the Capabilities Matrix page.
          </p>
        </section>
      </div>
    </div>
  );
}
