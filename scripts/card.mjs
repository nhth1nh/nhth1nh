/**
 * Renders the Engineering Activity card as a standalone SVG.
 * Direction A: GitHub Primer Design System
 *
 * Form: a KPI row of stat tiles with Primer Octicons and gradients.
 * Follows GitHub's Primer dark & light design tokens.
 *
 * Constraints:
 *  - GitHub renders README images through its camo image pipeline, so <a> is inert
 *    and webfonts do not load. Generic system fonts only.
 *  - Elements anchored via fixed coordinates or text-anchor="middle" to prevent cross-OS drift.
 *  - No timestamps inside the SVG so git diff only fires when metrics actually change.
 */

/** Primer design tokens per theme */
const THEMES = {
  light: {
    surface: '#ffffff',
    border: '#d0d7de',
    primary: '#1f2328',
    secondary: '#656d76',
    rule: '#d0d7de',
    headerRule: '#eaeef2',
    accent: '#0969da',
    gradStart: '#0969da',
    gradMid: '#8250df',
    gradEnd: '#1a7f37',
    activeYearBg: '#ddf4ff',
    activeYearBorder: '#54aeff',
    tiles: [
      { color: '#8250df', bg: '#fbefff' }, // Merged PRs - Primer purple
      { color: '#1a7f37', bg: '#dafbe1' }, // Code reviews - Primer green
      { color: '#0969da', bg: '#ddf4ff' }, // Public repos - Primer blue
    ],
  },
  dark: {
    surface: '#161b22',
    border: '#30363d',
    primary: '#f0f6fc',
    secondary: '#8b949e',
    rule: '#21262d',
    headerRule: '#21262d',
    accent: '#58a6ff',
    gradStart: '#2f81f7',
    gradMid: '#a371f7',
    gradEnd: '#3fb950',
    activeYearBg: 'rgba(56, 139, 253, 0.15)',
    activeYearBorder: 'rgba(56, 139, 253, 0.4)',
    tiles: [
      { color: '#bc8cff', bg: 'rgba(188, 140, 255, 0.15)' }, // Purple
      { color: '#3fb950', bg: 'rgba(63, 185, 80, 0.15)' },   // Green
      { color: '#58a6ff', bg: 'rgba(88, 166, 255, 0.15)' },  // Blue
    ],
  },
};

/** Categorical series tokens for history chart */
const SERIES = {
  light: {
    merged: '#8250df',
    mergedDark: '#6639ba',
    reviews: '#1a7f37',
    reviewsDark: '#116329',
  },
  dark: {
    merged: '#bc8cff',
    mergedDark: '#8957e5',
    reviews: '#3fb950',
    reviewsDark: '#238636',
  },
};

/** Octicons 16px vector paths */
const ICONS = [
  // git-merge (16px)
  'M5 3.25a2.25 2.25 0 1 0-1.5 2.122v5.256a2.251 2.251 0 1 0 1.5 0V8.25A2.25 2.25 0 0 0 7.25 6h1.878a2.25 2.25 0 1 0 0-1.5H7.25A3.75 3.75 0 0 0 3.5 8.25V5.372A2.25 2.25 0 0 0 5 3.25Zm6.5 2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-8 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 7.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z',
  // check-circle (16px)
  'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L7.5 8.44 5.78 6.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l3.75-3.75Z',
  // repo (16px)
  'M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v1.25a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25Z',
];

const W = 760;
const H = 196;
const SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * @param {{value:number,label:string}[]} tiles exactly three headline metrics
 * @param {'light'|'dark'} mode
 */
export const renderCard = (tiles, mode) => {
  const t = THEMES[mode];
  const col = W / tiles.length;
  const centers = tiles.map((_, i) => col * i + col / 2);

  const cells = tiles
    .map(
      (tile, i) => `
    <circle cx="${centers[i].toFixed(1)}" cy="66" r="14" fill="${t.tiles[i].bg}" />
    <path d="${ICONS[i]}" fill="${t.tiles[i].color}" transform="translate(${(centers[i] - 8).toFixed(1)}, 58)" />
    <text class="v" x="${centers[i].toFixed(1)}" y="118">${esc(tile.value.toLocaleString('en-US'))}</text>
    <text class="l" x="${centers[i].toFixed(1)}" y="144">${esc(tile.label)}</text>`
    )
    .join('');

  // Hairline separators sit between columns
  const rules = centers
    .slice(1)
    .map(
      (_, i) =>
        `<line class="r" x1="${(col * (i + 1)).toFixed(1)}" y1="56" x2="${(col * (i + 1)).toFixed(1)}" y2="154" />`
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">
  <title>Thinh Nguyen (@nhth1nh) - Engineering Activity</title>
  <desc>Public contributions for Thinh Nguyen (@nhth1nh, formerly @nhthinh-axonivy)</desc>
  <defs>
    <clipPath id="card"><rect x="0" y="0" width="${W}" height="${H}" rx="8" /></clipPath>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${t.gradStart}" />
      <stop offset="50%" stop-color="${t.gradMid}" />
      <stop offset="100%" stop-color="${t.gradEnd}" />
    </linearGradient>
  </defs>
  <style>
    .card  { fill: ${t.surface}; stroke: ${t.border}; }
    .t     { font: 600 12px ${SANS}; fill: ${t.secondary}; letter-spacing: 1.2px; }
    .u     { font: 500 12px ${SANS}; fill: ${t.secondary}; text-anchor: end; }
    .v     { font: 700 42px ${SANS}; fill: ${t.primary}; text-anchor: middle; font-feature-settings: 'tnum'; }
    .l     { font: 500 14px ${SANS}; fill: ${t.secondary}; text-anchor: middle; letter-spacing: .2px; }
    .f     { font: 400 12px ${SANS}; fill: ${t.secondary}; text-anchor: middle; }
    .r     { stroke: ${t.rule}; stroke-width: 1; }
    .hr    { stroke: ${t.headerRule}; stroke-width: 1; }
  </style>
  <rect class="card" x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="8" />
  <rect x="0" y="0" width="${W}" height="3" fill="url(#brandGrad)" clip-path="url(#card)" />
  <text class="t" x="28" y="28">ENGINEERING ACTIVITY</text>
  <text class="u" x="${W - 28}" y="28">@nhth1nh</text>
  <line class="hr" x1="28" y1="38" x2="${W - 28}" y2="38" />
  ${rules}${cells}
  <text class="f" x="${W / 2}" y="178">Public repositories only · recalculated weekly by GitHub Actions</text>
</svg>
`;
};

/**
 * Grouped column chart: merged PRs and reviews per year.
 *
 * @param {{year:string,merged:number,reviews:number,partial:boolean}[]} years
 * @param {'light'|'dark'} mode
 */
export const renderHistory = (years, mode) => {
  const t = THEMES[mode];
  const c = SERIES[mode];
  const w = 760;
  const h = 252;
  const base = 196;      // baseline y
  const top = 76;        // top of plot
  const padX = 46;

  const max = Math.max(...years.flatMap((y) => [y.merged, y.reviews]));
  const scale = (v) => (v / max) * (base - top);
  const band = (w - padX * 2) / years.length;
  const bw = 26;

  const bar = (x, v, fillId) => {
    if (!v) return `<rect x="${x.toFixed(1)}" y="${base - 2}" width="${bw}" height="2" rx="1" fill="url(#${fillId})" opacity="0.35" />`;
    const bh = scale(v);
    return `<rect x="${x.toFixed(1)}" y="${(base - bh).toFixed(1)}" width="${bw}" height="${(bh + 6).toFixed(1)}" rx="4" fill="url(#${fillId})" clip-path="url(#plot)" />`;
  };

  const groups = years
    .map((y, i) => {
      const cx = padX + band * i + band / 2;
      const xa = cx - bw - 1;
      const xb = cx + 1;
      const lbl = (x, v) =>
        v ? `<text class="n" x="${(x + bw / 2).toFixed(1)}" y="${(base - scale(v) - 6).toFixed(1)}">${v}</text>` : '';
      const yearLabel = y.partial
        ? `<rect x="${(cx - 27).toFixed(1)}" y="${base + 7}" width="54" height="20" rx="10" fill="${t.activeYearBg}" stroke="${t.activeYearBorder}" stroke-width="1" />
           <text class="x active" x="${cx.toFixed(1)}" y="${base + 21}">${esc(y.year)}*</text>`
        : `<text class="x" x="${cx.toFixed(1)}" y="${base + 21}">${esc(y.year)}</text>`;

      return `
    ${bar(xa, y.merged, 'barGradMerged')}${bar(xb, y.reviews, 'barGradReviews')}
    ${lbl(xa, y.merged)}${lbl(xb, y.reviews)}
    ${yearLabel}`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
  <title>Thinh Nguyen (@nhth1nh) - Contribution History</title>
  <desc>Public contribution history for Thinh Nguyen (@nhth1nh, formerly @nhthinh-axonivy)</desc>
  <defs>
    <clipPath id="histCard"><rect x="0" y="0" width="${w}" height="${h}" rx="8" /></clipPath>
    <clipPath id="plot"><rect x="0" y="0" width="${w}" height="${base}" /></clipPath>
    <linearGradient id="brandGradHist" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${t.gradStart}" />
      <stop offset="50%" stop-color="${t.gradMid}" />
      <stop offset="100%" stop-color="${t.gradEnd}" />
    </linearGradient>
    <linearGradient id="barGradMerged" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c.merged}" />
      <stop offset="100%" stop-color="${c.mergedDark}" />
    </linearGradient>
    <linearGradient id="barGradReviews" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c.reviews}" />
      <stop offset="100%" stop-color="${c.reviewsDark}" />
    </linearGradient>
  </defs>
  <style>
    .card   { fill: ${t.surface}; stroke: ${t.border}; }
    .t      { font: 600 12px ${SANS}; fill: ${t.secondary}; letter-spacing: 1.2px; }
    .n      { font: 600 11px ${SANS}; fill: ${t.primary}; text-anchor: middle; font-feature-settings: 'tnum'; }
    .x      { font: 500 12px ${SANS}; fill: ${t.secondary}; text-anchor: middle; }
    .active { fill: ${t.accent}; font-weight: 600; }
    .lg     { font: 500 12px ${SANS}; fill: ${t.secondary}; }
    .f      { font: 400 11px ${SANS}; fill: ${t.secondary}; }
    .ax     { stroke: ${t.rule}; stroke-width: 1; }
    .hr     { stroke: ${t.headerRule}; stroke-width: 1; }
    .grid   { stroke: ${t.rule}; stroke-width: 1; stroke-dasharray: 3 3; opacity: 0.5; }
  </style>
  <rect class="card" x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="8" />
  <rect x="0" y="0" width="${w}" height="3" fill="url(#brandGradHist)" clip-path="url(#histCard)" />
  <text class="t" x="28" y="28">CONTRIBUTION HISTORY</text>
  <rect x="${w - 190}" y="19" width="10" height="10" rx="3" fill="url(#barGradMerged)" />
  <text class="lg" x="${w - 174}" y="28">Merged</text>
  <rect x="${w - 110}" y="19" width="10" height="10" rx="3" fill="url(#barGradReviews)" />
  <text class="lg" x="${w - 94}" y="28">Reviews</text>
  <line class="hr" x1="28" y1="38" x2="${w - 28}" y2="38" />
  <line class="grid" x1="${padX - 10}" y1="116" x2="${w - padX + 10}" y2="116" />
  <line class="grid" x1="${padX - 10}" y1="156" x2="${w - padX + 10}" y2="156" />
  <line class="ax" x1="${padX - 10}" y1="${base}" x2="${w - padX + 10}" y2="${base}" />
  ${groups}
  <text class="f" x="28" y="${h - 12}">* current year (to date) · public repositories only</text>
</svg>
`;
};
