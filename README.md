# Mission Accomplished — website

One site, two audiences: the parent experience at `/` (from *Mission accomplished
web statics*, 14pp) and the Kids experience at `/kids` (from the approved Kids
asset pack). Next.js 15 · React 19 · TypeScript · CSS Modules over a shared token
layer. Both routes prerender statically.

```bash
npm run dev     # http://localhost:3200
npm run build   # static prerender
```

## Structure

One scrolling page. The PDF's 14 pages are 9 sections — several PDF pages are
alternate states of one module, not separate sections.

| Section | Component | PDF |
|---|---|---|
| Hero | `Hero` | p.1 |
| Summit journey | `SummitJourney` | p.2 |
| "How did you know that?" carousel | `InsightCarousel` | pp.3–5 (3 states) |
| Parent → reframe → child | `HowItWorks` | p.6 |
| Your Compass | `ParentCompass` | p.7 |
| Try one tonight | `TryTonight` | pp.8–12 (5 states) |
| The whole program | `WholeProgram` | p.13 |
| Pricing | `Pricing` / `PricingCard` | p.14 |
| Footer | `Footer` / `MountainLine` | p.14 |

Shared: `Header`, `AudienceToggle`, `PrimaryCTA`, `ProductMedia`, `Reveal`, `Icons`.
Kids-shared: `kids/KidsChips`, `kids/MissionVideo`, `kids/useScrollableRegion`.

## The CTA system

The assessment-vs-app-download funnel decision is unresolved. The statics are
assessment-first, so that ships. **No component hardcodes a CTA.** Everything
reads `primaryCta` from `src/data/site.ts`:

```ts
export const PRIMARY_ACTION: ActionKey = "assessment"; // -> "appDownload"
```

Flipping that constant changes every CTA label, destination and microcopy site-wide.
App-store badges stay secondary in pricing and are unaffected.

Each action carries three labels — `label` (body sections), `shortLabel` (header)
and `navLabel` (the footer's link row) — so no component ever hardcodes CTA text.

**The app is a real secondary path (V3.1).** It surfaces in five places — hero
text link, How It Works badges, Try One Tonight text link, the Pricing panel and
the footer — all rendered by one `AppDownload` component reading `appAccess` in
`data/site.ts`. There is no second set of store URLs anywhere, so wiring the real
listings is a one-place change. Every variant is deliberately quiet (underlined
link or official badges): the assessment stays the only solid orange button on
the page. The Pricing panel is framed "Want to start in the app?" rather than
"Already part of Mission Accomplished?", which implied the app was members-only.
`PrimaryCTA` also takes `anchorClassName` and `bare`, which let a section style or
place the link itself without re-deriving the `href` and the
`external → target/rel` pair; that spread lives in `PrimaryCTA` and nowhere else.

## Content as data

`src/data/content.ts` holds `milestones`, `insightCarouselData`, `reframeSteps`,
`tryTonightScenarios`, `programPillars`, `pricingPlans`, `pricingPath`.
`src/data/site.ts` holds `navigationItems`, `legalItems`, `audiences`, `founder`, `brand`.
Header and footer share one navigation array so the IA cannot drift.

## Design tokens

All in `src/app/globals.css` under `:root` — colour, type scale, spacing, radius,
shadow, control heights, max widths. No one-off values in components.

Orange is split three ways because the exact static orange fails WCAG AA as text:

| Token | Value | Use |
|---|---|---|
| `--color-orange` | `#E04A00` | graphics only — routes, flags, dots, rules (no contrast minimum applies) |
| `--color-orange-cta` | `#D34600` | button fill; white label = 4.52:1 |
| `--color-orange-text` | `#BE4208` | small orange text; ≥4.5:1 on cream, blue, mist and white |
| `--color-orange-on-navy` | `#F08A4B` | orange text on the navy footer = 6.6:1 |

One token per role — there are no section-by-section variants of cream, blue or
orange. The grid is a single system too: `.container` is
`min(1440px, 100% - gutters)` and full-bleed sections use a matching
`--page-inset` track, so every section's content starts on the same line.

Type: Playfair Display (display serif) + Inter (UI/body), both via `next/font`.
Kids headlines use Inter 800 (`.kids-display`), with the serif kept for the two
emotional statements (`.kids-serif`).

## Environments

The page alternates grounds on purpose so no two adjacent sections read as the
same place. `.env-cream`, `.env-sky` and `.env-dawn` (the continuous cream→pale
blue field) are the only section grounds — a section picks one rather than
inventing its own gradient. `.env-dawn` uses wide overlapping stops plus an
off-centre radial bloom specifically so cream and blue meet as one field instead
of two regions with a seam. `.env-feather-b` masks a ground's bottom edge where
photography would otherwise end on a hard line.

Parent: dawn hero → mountain → sky → cream+atmosphere → cream compass → sky →
cream program → cream pricing → navy footer.
Kids: dawn hero → cream picker → sky demo → **mountain** → dawn close → navy.

Vertical rhythm is three steps and no more: `--section-y` (standard),
`--section-y-lg` (cinematic), `--section-y-sm` (transition), plus
`--head-to-body` for the gap between a headline block and the composition it
introduces — the one that kept drifting to 120–180px.

## Media swap

`ProductMedia` takes `{ poster, mp4?, webm?, alt }`. Adding `mp4`/`webm` later
swaps a still for a screen recording with no layout change; the poster becomes the
fallback and is what shows under `prefers-reduced-motion`. `frame="device"` renders
a CSS tablet bezel around the media for flat, front-facing captures — the frame is
never baked into the asset.

The tablets currently supplied are photographed at an angle, so they ship as
complete product shots (`frame="bare"`).

## Assets

`public/assets/` — extracted from the supplied PDF at native resolution. No app UI
was redesigned or regenerated; every product screen and Maddy come from the statics.

The p.2 mountain had its milestone labels baked into the photograph. They were
removed from the image and are rendered as real text, sized in `cqw` so they stay
proportional to the photo at every width.

## Motion

Section reveals, carousel crossfade, tab underline, accordion expand, sticky header.
Reveals are progressive enhancement: hidden state only applies once an inline script
adds `js-motion`, so a script failure can never blank a section. Everything is
neutralised under `prefers-reduced-motion: reduce`.

## Accessibility

axe-core: 0 violations on both routes at 1728 / 1440 / 768 / 390. Tabs follow the ARIA tab pattern with
roving tabindex and arrow/Home/End keys; inactive panels are `inert`. Accordions use
`aria-expanded` + `aria-controls`. One `h1`, no skipped heading levels, all images
have `alt`, all targets ≥24px, visible outline focus on every surface.

## The Kids experience (`/kids`)

One site, two audiences. The Parents/Kids control is real navigation between
`/` and `/kids`; both routes share the same `Header`, `Footer`, grid and design
tokens, and both prerender statically.

| Section | Component | Kids reference |
|---|---|---|
| Ready for your next mission? | `kids/KidsHero` | 01 |
| Pick your mission | `kids/PickYourMission` | 02 |
| One step at a time | `kids/OneStepAtATime` | 03 |
| Every mission moves you forward | `kids/ClimbYourMountain` | 04 |
| Mission accomplished + hand-off | `kids/MissionComplete` | 05 |

**Audience state** — derived from the route via `usePathname()`, so there is no
duplicated client state. The header swaps only its primary action
(`Try a Mission` on Kids, `Start Free Assessment` on Parents) and points its nav
back at the parent page anchors. The footer takes an `audience` prop and drops
the pricing-led navigation for Kids.

**The hand-off** — "Show my parents" reveals a parent-facing panel and moves
focus to it. That panel's action is the shared `primaryCta` from `data/site.ts`
— the same assessment configuration the parent site uses. There is exactly one
assessment CTA constant in the codebase. The panel's copy is generic and never
assumes the child's name; real session personalization may replace it later, but
the fallback has to read correctly on its own.

**Product imagery** — every Kids product screen is a real capture from the
approved asset pack (`public/assets/kids/app-*.webp`), cropped to its content
but never redrawn. Maddy appears only inside those supplied assets. Kids uses
`summit-mountain-portrait.jpg` and the parent site `summit-mountain.jpg` — two
crops of the same summit photography, so the two audiences share one mountain
language without either being stretched into the other's aspect.

**The mountain (V3.1)** — exactly ONE Kids section owns the full mountain
photograph: *Every mission moves you forward* (reference 04), at
`--mountain-opacity: 1`, `--mountain-w: clamp(380px, 38vw, 620px)` and
`--mountain-fade: 30%`. Through V3 it sat behind four of the five sections and
that section had none at all, which flattened the page into one place; Kids now
reads as a journey through changing environments.

| Section | Ground | Mountain |
|---|---|---|
| `KidsHero` | `.env-dawn` | faint silhouette, `--mountain-opacity: 0.14` |
| `PickYourMission` | `.env-cream` | none |
| `OneStepAtATime` | `.env-sky` | none |
| `ClimbYourMountain` | `.env-cream` | **full plate — the page's one mountain moment** |
| `MissionComplete` | `.env-dawn` | none |

The hero keeps its silhouette so the summit language survives without the
photograph competing with the product screenshot, which is the hero's subject
now. The other three run flat or gradient colour grounds only.

The crop, filter and left+bottom mask still live once as `.kids-mountain` in
`globals.css`; a section varies only through
`--mountain-h / --mountain-w / --mountain-opacity / --mountain-fade`, read as
`var()` fallbacks so a module rule never fights the shared one in the cascade.
Below 980px it is dropped rather than dimmed — orange waypoints under body copy
is a contrast failure, not a styling choice.

**Wide product sheets** — the challenge sheets are wider than the column on
small screens and scroll sideways rather than compressing their step rows to
hairlines. `useScrollableRegion` gives those scrollers a tab stop (plus a
labelled `role="group"`) while they actually overflow, and removes it again
once they don't, so keyboard users can reach them without a permanent dead tab
stop on desktop.

**Media swap** — `kids/MissionVideo` renders the demo container: as of V3.1 one
large stage, not a paired before/after. Passing `sources={{ mp4, webm }}`
replaces the poster with a real screen recording with no layout change; video is
muted, `playsInline`, and falls back to the poster under
`prefers-reduced-motion`. The still is capped at its own declared width
(`--shot-max`) so a fixed-resolution capture is never stretched past its pixels
— a higher-resolution poster simply fills more of the stage with no CSS change.

## Not built

Missions other than Room Reset. Selecting one marks the card as chosen and says
plainly that those missions are coming soon rather than faking product
behaviour that does not exist yet.

## Before launch

See the handoff notes — the assessment URL, App Store / Google Play URLs, the
`/privacy`, `/terms`, `/accessibility` pages and an "Our Story" section all need
real destinations, and production-resolution photography would replace the
PDF-extracted imagery.

**Needs the asset owner:** `room_reset_laundry_basket.png` ships as saturated
stock clipart while the other four mission illustrations are a pale line-art
family — measured mean chroma 0.305 against 0.039–0.051, over roughly 2.3x the
ink coverage — and it is also the default selection. A `saturate(0.65)` in
`PickYourMission.module.css` holds it at about the level of
`something_else_question.png`, the most saturated brand-native item in the set,
which is as far as CSS can go before the basket turns muddy. It cannot fix the
heavy black outlines or the different illustration language; the real fix is a
redrawn asset, and that rule should be deleted when one arrives.
