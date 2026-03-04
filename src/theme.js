/**
 * Design tokens — GENERAL PALETTE (overriding).
 * Only these six colors (or opacity/derived variants) are used across the app.
 */
export const colors = {
  primary: '#140F3C',   // Dark Navy Blue — headings, key surfaces, sidebar, top bar
  secondary: '#3B4F6B', // Muted Blue-Grey — supporting text, borders
  action: '#5C46A5',     // Medium Purple — CTAs, phase accents, active nav
  risk: '#EF426F',      // Pink/Rose — risk, friction, alerts
  neutral: '#0A0A0A',   // Deep Navy/Almost Black — footer, dark blocks
  target: '#5BC0BE',    // Light Teal/Aqua — target state, success, card headers (tint)
};

/** Light background for main content area (derived: very light grey from primary) */
export const bgContent = '#F8F9FB';

/** Border color (derived from secondary) */
export const borderColor = '#E2E8F0';

/**
 * Cross-cutting theme: data completeness and governance.
 * Use these snippets across the app to reinforce the theme.
 */
export const themeMessaging = {
  tagline: 'Data completeness & governance',
  short: 'Data completeness and governance',
  full: 'Data completeness and governance underpin reliable reporting and control.',
  complexity: 'Complete, governed data across jurisdictions, assets, segments, and reinsurance reduces risk and supports the close.',
  friction: 'Gaps in data completeness and governance amplify reporting and restatement risk.',
  tom: 'The target operating model is built on a single, governed source of truth with end-to-end data completeness.',
  capabilities: 'Capabilities are assessed with data completeness and governance in mind—from subledger to consolidation.',
  footer: 'Controllership TOM & Capabilities — anchored in data completeness and governance.',
};
