# Venkatrama Telugu Calendar — Data-Driven Renderer

> **Pixel-perfect HTML/CSS/JS renderer for the iconic Venkatrama & Co. Telugu Panchangam Calendar**

---

## 📁 Project Structure

```
calendar/
├── data/                          ← Configuration & Content (JSON)
│   ├── design_template.json      ← Layout rules (pixel positions, colors, gradients)
│   ├── company_data.json         ← Company info (same all 12 pages)
│   └── monthly_data.json         ← Month-specific data (festivals, daily panchangam)
│
├── assets/                        ← Visual Assets
│   ├── FINAL_v_logo.png          ← V shield logo (75×83, RGBA)
│   ├── FINAL_jrrc_badge.png      ← JRRC publisher badge (162×123, RGBA)
│   └── VenkatramaCoTeluguCalendarColour202509.png  ← Reference image (Sept 2025)
│
├── specs/                         ← **Build Specifications** (READ THESE!)
│   ├── data_design_separation_spec.md   ← Architecture overview & data layers
│   ├── config_model_reference.md        ← How JSON maps to visual zones
│   ├── header_deep_dive_spec.md         ← Header zone pixel-level spec (H1-H12)
│   ├── B2_subheader_spec.md             ← Sub-header 3-column panel spec
│   ├── B3_grid_spec.md                  ← Main 7×6 calendar grid spec
│   ├── date_cell_spec.md                ← Individual date cell internal layout
│   ├── B3_festival_analysis.md          ← How festival panels work
│   ├── body_zone_map.md                 ← Body zone layout overview
│   └── asset_review_report.md           ← Logo/badge extraction notes
│
├── reference/                     ← Ground Truth Images & Prior Work
│   ├── comparison_v3.html               ← Existing WIP comparison (side-by-side)
│   ├── header_wireframe.png             ← Header layout wireframe
│   ├── asset_contamination_report.png   ← Asset extraction analysis
│   └── Venkatrama_Calendar_2025_*.pdf   ← Reference PDFs (Jan, Feb, Mar, Jul)
│
├── src/                           ← **Renderer Code (TO BE BUILT)**
│   └── (HTML/CSS/JS implementation goes here)
│
└── docs/                          ← Project Documentation
    ├── Venkatrama_Calendar_PRD.md       ← Complete Product Requirements Document
    └── PROJECT_REQUIREMENTS_AND_GOALS.md ← Implementation guide
```

---

## 🎯 What This Project Does

This is a **data-driven calendar renderer** that:

1. **Reads 3 JSON files** (design template, company data, monthly data)
2. **Generates pixel-perfect calendar pages** (924×1316px at 103 DPI)
3. **Requires ZERO code changes** for:
   - Changing years (edit `monthly_data.json`)
   - White-labeling for different companies (swap `company_data.json` + assets)
   - Reskinning the design (modify `design_template.json` colors)

---

## 🚀 Quick Start Guide

### 1. Read the Documentation (Essential!)

| Document | Purpose | When to Read |
|----------|---------|-------------|
| `docs/Venkatrama_Calendar_PRD.md` | Full product requirements | **Start here** — overview of entire project |
| `specs/data_design_separation_spec.md` | Architecture overview | Understand the 3-layer data model |
| `specs/config_model_reference.md` | JSON ↔ Visual zone mapping | Before coding — how data drives layout |

### 2. Understand the Page Structure

The calendar page (924×1316px) is divided into zones:

```
Y=0     ┌─────────────────────────────────────────────┐
        │ HEADER (H1-H12) — Y: 0→345                  │ ← Same all 12 pages
        │   Logo + Company name + Badge + Gradients   │
Y=346   ├─────────────────────────────────────────────┤
        │ B1: Credit bar — Y: 346→374                 │ ← Same all 12 pages
Y=375   ├─────────────────────────────────────────────┤
        │ B2: SUB-HEADER — Y: 375→498                 │ ← Changes monthly
        │   Sunrise/Sunset | Month Name | Gulika Kalam│
Y=503   ├─────────────────────────────────────────────┤
        │ B3: CALENDAR GRID — Y: 503→1241             │ ← Changes monthly
        │   7 rows (SUN→SAT) × 6 cols                 │    Changes daily
        │   Date cells + Festival panels              │
Y=1241  ├─────────────────────────────────────────────┤
        │ B4: FOOTER — Y: 1248→1301                   │ ← Changes monthly
Y=1316  └─────────────────────────────────────────────┘
```

### 3. Build Phases (Recommended Order)

| Phase | What to Build | Primary Spec | Validation |
|-------|--------------|--------------|------------|
| **Phase 1** | Header (H1-H12) | `specs/header_deep_dive_spec.md` | Compare vs September reference |
| **Phase 2** | Sub-Header (B1+B2) | `specs/B2_subheader_spec.md` | Compare B1+B2 zone |
| **Phase 3** | Calendar Grid (B3) | `specs/B3_grid_spec.md` + `date_cell_spec.md` | Verify every date cell |
| **Phase 4** | Footer (B4+B5) | `specs/B3_grid_spec.md` (footer) | Compare footer zone |
| **Phase 5** | Multi-month + Export | — | Test all 12 months |

---

## 📊 Data Model (3 JSON Layers)

### Layer 1: `data/design_template.json`
**Purpose:** Layout skeleton — all pixel positions, colors, gradients
**Changes:** Never (unless redesigning the calendar)
**Contains:** Zone Y-ranges, gradient stops, cell dimensions, color palette

### Layer 2: `data/company_data.json`
**Purpose:** Company identity — logo, name, contacts, year
**Changes:** Yearly or per company
**Contains:** Company name (Telugu/English), logo/badge paths, credits, watermark

### Layer 3: `data/monthly_data.json`
**Purpose:** Monthly content — festivals, daily panchangam
**Changes:** Every month (12 entries)
**Contains:** Month names, start_day, num_days, sunrise/sunset, gulika kalam, festivals, daily info

---

## 🔑 Critical Technical Notes

### Telugu Font Rendering
- Use **Noto Sans Telugu** (Google Fonts) for best Unicode coverage
- Must support ligatures and conjuncts at **5pt–41pt** range
- Decorative company name may need pre-rendered image fallback

### Grid Layout (IMPORTANT!)
- Grid is **TRANSPOSED**: Rows are weekdays (SUN-SAT), NOT weeks
- Date placement algorithm:
  ```
  weekday = (start_day + date - 1) % 7        → row index (0-6)
  week_col = floor((date - 1 + start_day) / 7) + 1  → column (1-5)
  ```

### Festival Panels
- Empty grid cells (non-existent dates) become festival panels
- Adjacent empty cells in same column **merge vertically**
- Large blocks (4+ rows): pink background `#FBCDDC`

### Holiday Rendering
- When `is_holiday: true` → date number renders in **RED** `#E62319`
- Moon markers: ○ (Pournami) / ● (Amavasya) in top-left zone

---

## 🎨 Color Palette Quick Reference

| Usage | Hex | Key |
|-------|-----|-----|
| Border yellow | `#FDF800` | `border_yellow` |
| Primary red (company name) | `#E61C21` | `primary_red` |
| Holiday date red | `#E62319` | `date_holiday_red` |
| Normal date dark | `#28201C` | `date_normal_dark` |
| Info text olive | `#3C3723` | `info_text_olive` |
| Festival pink bg | `#FBCDDC` | `festival_pink_bg` |
| Footer yellow | `#FFF800` | `footer_yellow` |

See `data/design_template.json` → `colors` section for complete palette.

---

## ✅ Acceptance Criteria (MVP)

- [ ] September 2025 renders pixel-accurately vs reference image
- [ ] All zones (Header, B1, B2, B3, B4, B5) positioned correctly
- [ ] Telugu text renders with correct ligatures at all sizes
- [ ] Holiday dates appear in RED
- [ ] Moon symbols (○/●) display correctly
- [ ] Festival panels merge vertically with proper backgrounds
- [ ] Gradients match reference (H2, H10, H11, H12, footer)
- [ ] Month selector switches between months
- [ ] PNG export at 924×1316px

---

## 📚 Reference Materials

- **Ground truth:** `assets/VenkatramaCoTeluguCalendarColour202509.png` (September 2025 original)
- **Test months:** `reference/Venkatrama_Calendar_2025_*.pdf` (Jan, Feb, Mar, Jul)
- **Prior work:** `reference/comparison_v3.html` (1.6MB WIP attempt — use as reference)

---

## 🛠 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Renderer | HTML + CSS (absolute positioning) | Pixel-exact control |
| Logic | Vanilla JavaScript (ES6+) | Simple JSON loading, no framework overhead |
| Telugu Font | Noto Sans Telugu (Google Fonts) | Best free Telugu font, wide Unicode coverage |
| Export | html2canvas.js | Client-side PNG export |

---

## 📝 Current Status

### ✅ Complete
- All spec documents (9 files, pixel-level detail)
- All 3 JSON config files (September sample for monthly_data)
- Logo/badge assets extracted
- Reference images available

### 🔲 To Build
- **Primary deliverable:** HTML/CSS/JS renderer (`src/`)
- Complete `monthly_data.json` for all 12 months
- PNG export integration
- Month selector UI

---

## 📖 For Developers

### Before You Code
1. Read `docs/Venkatrama_Calendar_PRD.md` (comprehensive overview)
2. Read `specs/data_design_separation_spec.md` (architecture)
3. Study `specs/config_model_reference.md` (JSON structure)
4. Review `assets/VenkatramaCoTeluguCalendarColour202509.png` (visual reference)

### While Coding
- **No hardcoded values** — everything comes from JSON
- **Use absolute positioning** — CSS maps directly to pixel coordinates
- **Test with September first** — it has the most complete sample data
- **Validate frequently** — compare against reference images zone-by-zone

### Key Specs by Zone
| Zone | Read This Spec |
|------|---------------|
| Header (H1-H12) | `specs/header_deep_dive_spec.md` |
| Sub-header (B1+B2) | `specs/B2_subheader_spec.md` |
| Calendar grid (B3) | `specs/B3_grid_spec.md` |
| Date cells | `specs/date_cell_spec.md` |
| Festival panels | `specs/B3_festival_analysis.md` |

---

## 🎯 Vision

**Zero-code updates:**
- Change year → edit JSON
- White-label → swap JSON + assets
- Reskin → edit colors in JSON

**This renderer is a dumb layout engine.** All intelligence lives in the data.

---

**Project Goal:** Pixel-perfect, data-driven calendar that matches the original Venkatrama print calendar with ZERO manual layout work.

---

## 🎬 Video Rendering (Remotion)

[Remotion](https://github.com/remotion-dev/remotion) is installed for making videos from the calendar pages.

```bash
npm install                 # install dependencies
npm run remotion:studio     # open the Remotion Studio preview
npm run remotion:render     # render CalendarIntro to out/calendar-intro.mp4
```

- Entry point: `remotion/index.ts`, compositions in `remotion/Root.tsx`
- `assets/` is the public dir, so files there load with `staticFile('name.png')`
- Video frames are 924×1316 to match the calendar page size

---

## 🎞️ HTML Video (HyperFrames)

[HyperFrames](https://github.com/heygen-com/hyperframes) turns HTML/CSS + GSAP animations into MP4. Since the calendar renderer is already HTML, this is a natural fit. The project lives in `hyperframes/` (entry: `hyperframes/index.html`).

Requirements: Node.js >= 22 and FFmpeg.

```bash
npm install                # installs the hyperframes CLI (dev dependency)
npm run hf:browser         # one-time: download Chrome Headless Shell for rendering
npm run hf:doctor          # check the environment
npm run hf:preview         # live preview studio
npm run hf:check           # lint the composition
npm run hf:render          # render to out/hyperframes.mp4
```

Optional: install the HyperFrames agent skills for Claude Code with
`claude plugin marketplace add heygen-com/hyperframes && claude plugin install hyperframes@hyperframes`
(or `npx hyperframes skills update` for the standalone core skills).
