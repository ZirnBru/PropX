# PropX Design System

## Company & product context
PropX is a proptech / real-estate analytics platform. This design system was authored from a written specification (no Figma file, codebase, or slide deck was attached) directing an NVIDIA-inspired visual language: minimal, technical, enterprise, premium, black & white with a single green accent, hairline borders, flat design, 2px radius, structured grid, dense information layout. No logo, product screenshots, or copy samples were provided — everything below was designed from that brief plus standard proptech-dashboard conventions (portfolio overview, listings, property detail, settings).

**Sources**: none attached (text specification only). If a Figma file, GitHub repo, or product screenshots become available, re-run this system against them to replace the from-scratch assumptions below.

## Substitutions & flags
- **Typeface**: no font files were supplied. Substituted **Manrope** (geometric grotesk, closest open match to NVIDIA Sans) for UI/display text and **JetBrains Mono** for tabular/financial figures, loaded from Google Fonts. Please attach real brand font files if PropX has licensed ones.
- **Logo**: no logo file was supplied. Every mark placement renders the plain wordmark "PropX" in Manrope Extrabold instead of a logo — do not treat this as the real logo.
- **Component inventory**: no Figma/codebase defined an inventory, so a standard enterprise dashboard set was authored (see Components below), sized to a proptech analytics product.

## Content fundamentals
- **Tone**: plain, factual, financial-analyst register — no marketing hype, no emoji, no exclamation points.
- **Voice**: second person ("Your portfolio", "Add Property") for the product; no first-person plural.
- **Casing**: sentence case for body copy and buttons ("Add property"), uppercase only for overline labels and column headers (small, letterspaced).
- **Numbers**: currency and metrics render in mono type, right-aligned in tables — never truncate precision on financial figures.
- **Emoji**: never used.

## Visual foundations
- **Color**: near-white canvas, white/near-black surfaces, a single saturated brand green (`--brand-green-500 #76b900`) as the only accent — used for primary actions, focus rings, active nav state, and positive deltas. Semantic red/amber/blue exist only for danger/warning/info, never as decoration.
- **Type**: Manrope for all UI text (headings tight/negative tracking, body relaxed), JetBrains Mono for any financial or tabular numeral.
- **Backgrounds**: flat solid fills only. No gradients, no illustration, no photography, no texture/grain, no blur except a light overlay blur behind modals.
- **Borders**: 1px hairline borders (`--border-hairline`) are the primary separator — used instead of shadows for cards and tables in the default (flat) state.
- **Radius**: 2px default radius everywhere (buttons, inputs, cards, badges) — deliberately not rounded; this is a structural, technical system, not a soft one.
- **Elevation**: flat by default. Shadows are reserved for things that float above content — tooltips, dropdowns, modals, the drag state of a row.
- **Motion**: fast, functional transitions only (120–260ms), standard/emphasized easing curves — no bounce, no springy overshoot, no decorative motion.
- **Hover / press**: hover = subtle 4% dark overlay or a one-step-darker fill; press = one step further/darker. No scale/shrink on press.
- **Density**: dense — dashboard/table rows favor compact 8–12px vertical padding; a `dense` table mode is available for very long lists.
- **Imagery**: none in this system (no photography was supplied); avatars fall back to solid-dark initials chips.

## Iconography
No icon font, SVG sprite, or icon library was supplied with the source brief. Text labels and minimal typographic glyphs (×, ‹, ›, ⌕, ▲/▼, ⟳) stand in for icons in this version. **Recommended follow-up**: adopt a CDN icon set with a thin/technical stroke weight (e.g. Lucide, 1.5px stroke) to match the hairline visual language — flag this to the team before shipping real product screens.

## Dark mode
`[data-theme="dark"]` tokens are defined alongside the light (default/primary) theme in `tokens/colors.css` — surfaces invert to near-black, hairlines lighten, and semantic "subtle" backgrounds become low-opacity tints of their color instead of pastel fills.

## Index
- `styles.css` — root stylesheet, `@import`s everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `layout.css` (breakpoints/z-index/opacity), `fonts.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.
- `components/core/` — **Button**, **IconButton**
- `components/forms/` — **Field**, **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `components/feedback/` — **Badge**, **Tag**, **Alert**, **Tooltip**, **Progress**
- `components/data/` — **Card**, **StatCard**, **Avatar**, **Table**
- `components/navigation/` — **Tabs**, **Breadcrumb**, **Sidebar**, **Pagination**
- `ui_kits/dashboard/` — click-through recreation of the PropX analytics dashboard (Overview, Listings, Property Detail with tabs, Settings), composed entirely from the components above.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — portable skill file for use in Claude Code.

## Caveats — please help me iterate
1. **No brand assets exist yet.** Every color, font substitute, icon glyph, and the dashboard's content is an original construction from a text brief, not a recreation of anything real. If PropX has a live product, brand guidelines PDF, Figma file, or codebase, attach it and I will rebuild this system against ground truth.
2. **No logo** — confirm whether one exists before this ships anywhere external.
3. **Icons are placeholder glyphs**, not a real icon system — pick a CDN icon set (or supply your own SVGs) and I'll wire it through every component.
4. **Font substitution** (Manrope + JetBrains Mono) needs sign-off, or real license files if PropX already has chosen faces.
