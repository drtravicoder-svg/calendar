# Venkatrama Telugu Calendar — Product Requirements Document

**Document:** PRD-VTC-2025-001  
**Version:** 1.0  
**Date:** February 20, 2026  
**Status:** In Development  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [System Architecture](#4-system-architecture)
5. [Page Zone Specifications](#5-page-zone-specifications)
6. [Data Specifications](#6-data-specifications)
7. [Technology Stack](#7-technology-stack)
8. [Build Phases & Milestones](#8-build-phases--milestones)
9. [Current Project State](#9-current-project-state)
10. [Acceptance Criteria](#10-acceptance-criteria)
11. [File Manifest](#11-file-manifest)
12. [Risks & Mitigations](#12-risks--mitigations)
13. [Appendix A: Color Palette](#appendix-a-color-palette-reference)

---

## 1. Executive Summary

> **PROJECT VISION**  
> Build a data-driven, pixel-perfect HTML/CSS/JS renderer that recreates the iconic Venkatrama & Co. Telugu Panchangam Calendar — the most widely used Telugu calendar in Andhra Pradesh and Telangana. The renderer produces output visually indistinguishable from the original print calendar (924×1316px at 103 DPI), driven entirely by 3 JSON data files.

The Venkatrama Calendar is a cultural institution serving millions of Telugu-speaking households. This project digitizes the calendar production pipeline, enabling:

- **Instant year-to-year updates** by editing JSON data only — zero code changes
- **Company white-labeling** by swapping `company_data.json` and logo assets
- **Design reskinning** by modifying color values in `design_template.json`
- **12-month batch generation** from a single data set
- **Web viewing and PNG/PDF export** for print production

---

## 2. Problem Statement

The traditional Venkatrama Calendar production relies on manual desktop publishing for each of the 12 monthly pages. Every year, designers must:

1. Manually position 30+ text elements per page across header, sub-header, grid, and footer zones
2. Place daily panchangam data (tithi, nakshatram, rahu kalam) into 150+ individual date cells
3. Ensure correct color coding for holidays, moon phases, and festival markers
4. Maintain pixel-perfect consistency across all 12 pages
5. Repeat this entire process for each year and each client company

This is error-prone, time-consuming, and does not scale. A data-driven renderer eliminates manual layout work entirely.

---

## 3. Goals & Success Metrics

### 3.1 Primary Goals

| Goal | Description | Success Metric |
|------|-------------|----------------|
| **G1: Visual Fidelity** | Rendered output matches original print calendar at pixel level | < 5% pixel deviation when overlaid on reference image |
| **G2: Data Separation** | Renderer contains zero hardcoded text, colors, or positions | Pass: change `company_data.json` → all 12 pages update correctly |
| **G3: 12-Month Gen** | Generate any/all months from `monthly_data.json` | All 12 months render in < 3 seconds total |
| **G4: Telugu Excellence** | All Telugu text renders with correct ligatures and shaping | Zero broken ligatures across all 12 months at all font sizes (5pt–41pt) |
| **G5: Export Ready** | Output can be exported as print-ready PNG/PDF | PNG export at 924×1316px matches on-screen render |

### 3.2 Non-Goals (Out of Scope)

- Interactive date picker or event scheduling
- Mobile-responsive layout (this is a fixed-size print reproduction)
- Real-time panchangam calculation (data is pre-computed and provided via JSON)
- Localization to other languages (Telugu + English only)
- CMS or admin panel for data entry

---

## 4. System Architecture

### 4.1 Three-Layer Data Model

> **CORE PRINCIPLE**  
> The system separates concerns into three JSON layers. The renderer is a stateless layout engine that reads these layers and produces visual output. No business logic lives in the renderer.

| Layer | File | Changes When | Content |
|-------|------|-------------|---------|
| **Layer 1: Design Template** | `design_template.json` | Redesigning the calendar | Pixel positions, gradients, colors, spacing, font sizes, layout rules for every zone |
| **Layer 2: Company Data** | `company_data.json` | New company or new year | Company name, logo, badge, contacts, branches, credits, year, watermark |
| **Layer 3: Monthly Data** | `monthly_data.json` | Every month (12 entries) | Month names, sunrise/sunset, gulika kalam, festivals, daily panchangam for each day |

### 4.2 Rendering Pipeline

For each month page, the renderer executes this pipeline:

| Step | Action | Data Source | Zone |
|------|--------|------------|------|
| 1 | Load design template (fixed layout skeleton) | `design_template.json` | All |
| 2 | Load company data (same all pages) | `company_data.json` | Header |
| 3 | Select current month from monthly data | `monthly_data.json` | Body |
| 4–17 | Render header zones H1–H12 (borders, gradients, logos, text) | Template + Company | Y: 0→345 |
| 18–19 | Render B1 credit bar + B2 sub-header panel | Template + Monthly | Y: 346→498 |
| 20–24 | Render B3 calendar grid (7×6 cells + festivals) | Monthly + Daily | Y: 503→1241 |
| 25 | Render B4 footer greeting bar | Monthly | Y: 1248→1301 |
| 26 | Render B5 bottom border | Template | Y: 1302→1316 |
| 27 | Overlay watermarks (LAST) | Company | Both sides |
| 28 | Export page as PNG | — | Full page |

---

## 5. Page Zone Specifications

The calendar page (924×1316px) is divided into precisely measured zones. Each zone has a dedicated spec document with pixel-level measurements.

### 5.1 Zone Map Overview

```
Y=0     ┌─────────────────────────────────────────────────────┐
        │ H1: Yellow top border (16px)                         │
Y=16    │ H2: Orange→Red gradient (4px)                        │
Y=20    │ H3: Copyright bar with beveled frame (29px)          │
Y=49    │                                                       │
        │ H5: BRANDING AREA (236px)                            │
        │   ├─ LEFT:  V Logo (shield emblem)                   │
        │   ├─ CENTER: Company name, contact, app promo        │
        │   └─ RIGHT: JRRC Publisher badge                     │
Y=285   │ H6: Warm separator line (2px)                        │
Y=287   │ H7: Red bar (10px)                                   │
Y=297   │ H8: Embossed text bar — credits (16px)               │
Y=313   │ H9: Red bar (11px)                                   │
Y=324   │ H10: Yellow gradient strip (8px)                     │
Y=332   │ H11: Red gradient border (8px)                       │
Y=340   │ H12: Pink→White transition (6px)                     │
Y=346   ├─────────────────────────────────────────────────────┤
        │ B1: Panchangam credit bar — green bg (29px)          │
Y=375   ├─────────────────────────────────────────────────────┤
        │ B2: SUB-HEADER (124px) — 3 columns:                 │
        │   ├─ LEFT:  Telugu year + Sunrise/Sunset table       │
        │   ├─ CENTER: Year "2025" + Month name                │
        │   └─ RIGHT: Gulika Kalam table                       │
Y=503   ├─────────────────────────────────────────────────────┤
        │ B3: MAIN CALENDAR GRID (738px)                       │
        │   7 rows (SUN→SAT) × 6 columns                      │
        │   Col 0 = Day name headers                           │
        │   Cols 1-5 = Date cells or Festival panels           │
Y=1241  ├─────────────────────────────────────────────────────┤
        │ B4: FOOTER (54px)                                    │
        │   Red gradient bar + Yellow text bar                 │
Y=1302  ├─────────────────────────────────────────────────────┤
        │ B5: Bottom border (15px)                             │
Y=1316  └─────────────────────────────────────────────────────┘
```

| Zone | Y Range | Height | Content | Changes? | Spec File |
|------|---------|--------|---------|----------|-----------|
| H1 | 0–15 | 16px | Yellow top border | Never | `header_deep_dive_spec.md` |
| H2 | 16–19 | 4px | Orange→Red gradient | Never | `header_deep_dive_spec.md` |
| H3 | 20–48 | 29px | Copyright bar with beveled frame | Yearly | `header_deep_dive_spec.md` |
| H5 | 49–284 | 236px | Branding: logo + company name + badge + contacts | Per company | `header_deep_dive_spec.md` |
| H6–H12 | 285–345 | 61px | Separator, red bars, embossed credits, gradient borders | Never/Yearly | `header_deep_dive_spec.md` |
| B1 | 346–374 | 29px | Panchangam credit bar (green bg) | Never | `B2_subheader_spec.md` |
| B2 | 375–498 | 124px | Sub-header: sunrise/sunset + month name + gulika kalam | Monthly | `B2_subheader_spec.md` |
| B3 | 503–1241 | 738px | Main 7×6 calendar grid with date cells & festivals | Monthly/Daily | `B3_grid_spec.md` |
| B4 | 1248–1301 | 54px | Footer: red bar + yellow greeting bar | Monthly | `B3_grid_spec.md` |
| B5 | 1302–1316 | 15px | Bottom border | Never | `design_template.json` |

### 5.2 Header Zone (H1–H12)

The header occupies Y=0→345 (346px) and is **identical across all 12 pages**. It is the most visually complex zone, containing:

- Decorative gradient borders (H1, H2, H10, H11, H12) with per-pixel color stops
- A beveled copyright frame (H3) expanding at bottom corners
- The V Logo shield emblem (75×83px, positioned at X=53, Y=50)
- The JRRC Publisher badge (162×123px, right side)
- Large decorative Telugu company name (~41pt with 3D shadow effect)
- Contact info, branch locations, and app promo text in purple and green
- Embossed credit text bar (H8) with 3D bevel effect
- Side yellow borders and vertical watermark text overlay

**Header text elements (top to bottom):**

| Element | Y Range | Content | Font | Color |
|---------|---------|---------|------|-------|
| T0: Symbol | 63–69 | శ్రీ (honorific) | ~5pt | RED `#E11E23` |
| T1: Company Name | 71–129 | వేంకటరామ అండ్ కో., | ~41pt bold decorative | RED `#E61C21` + shadow |
| T2: Triangle | 142–157 | Inverted triangle separator | Programmatic | Red→dark gradient |
| T3: Contact Info | 167–203 | Tagline + Phone + Email | 7–12pt | Purple `#5A2346` |
| T4: Branches | 222–235 | Hyderabad, Vijayawada, Tadepalligudem | 9pt bold | Purple `#582244` |
| T5: App Promo | 248–271 | మా క్యాలెండర్ యాప్ డౌన్‌లోడ్ చేయండి | 13pt bold | Green `#218847` |
| T6: App URL | 273–280 | @ venkatramacalendar.com/app | 6pt | Green `#378C50` |

> ⚠️ **TEXT OVERFLOW PROTECTION**  
> All header text elements follow this algorithm: (1) Render at default font size → (2) If overflow, reduce by 1pt (min: default – 3pt) → (3) If still overflow, truncate with "...". Text must NEVER overlap into logo/badge zones or outside the content area (X: 42→882).

### 5.3 Sub-Header (B1 + B2)

**B1: Panchangam Credit Bar** — Green background `#D2E6D7`, purple-magenta text `#A84B80`, ~7pt, centered. Same all 12 pages.

**B2: Three-Column Panel** — Changes monthly:

| Column | X Range | Width | Background | Content |
|--------|---------|-------|-----------|---------|
| **B2-LEFT** | 42→308 | 267px | `#F8B9A0` (cream-pink) | Telugu year/masam info (2 lines) + Sunrise/Sunset table (4 rows) |
| **B2-CENTER** | 313→613 | 301px | `#720F62` (magenta) | Year "2025" (white 46pt) + Telugu month (yellow 30pt) + English month (white 18pt) |
| **B2-RIGHT** | 616→866 | 251px | `#D2E6C8` (green) | గులిక కాలం title + 7 weekday rows with start/end times |

**Key layout note:** B2-CENTER places the year and month names **side-by-side** (year on left half, month on right half), NOT stacked vertically.

### 5.4 Calendar Grid (B3)

The main grid occupies 738px (Y: 503→1241) and is the core functional element.

- **Grid structure:** 7 rows × 6 columns
- **Row order:** SUN, MON, TUE, WED, THU, FRI, SAT (**SUN first!**)
- **Column 0:** Day name headers (colored backgrounds)
- **Columns 1–5:** Date cells or festival panels
- **Dividers:** Double-line groove effect (2 dark lines with ~6px gap)

> ⚠️ **CRITICAL:** The grid is **TRANSPOSED** from typical calendars. Rows are weekdays, NOT weeks.

#### 5.4.1 Day Name Headers (Column 0)

| Day | Background | Telugu | English | Text Color |
|-----|-----------|--------|---------|------------|
| SUN | `#EA4C52` (red) | ఆది | SUN | White |
| MON | `#9C5F92` (purple) | సోమ | MON | White |
| TUE | `#F18E4E` (orange) | మంగళ | TUE | White |
| WED | `#4EB07D` (green) | బుధ | WED | White |
| THU | `#4AC1EC` (blue) | గురు | THU | Dark |
| FRI | `#98568C` (purple) | శుక్ర | FRI | White |
| SAT | `#E63CA0` (pink) | శని | SAT | White |

Each header cell also contains timing info below the day names (రా.దు, మ.దు, etc.).

#### 5.4.2 Date Cell Layout (130×105px)

```
┌──────────────────────────────────────────────────┐
│  [Top-Left Zone]               [Top-Right Zone]  │
│  Masam name / Moon ○/●         Telugu day "30"    │
│                                                    │
│           DATE NUMBER (27pt bold)                  │
│           (RED if holiday, DARK if normal)         │
│                                                    │
│  Line 1: Tithi info              (centered, 5.5pt) │
│  Line 2: Nakshatram info                           │
│  Line 3: Timing line 1                             │
│  Line 4: Timing line 2 (optional)                  │
└──────────────────────────────────────────────────┘
```

| Zone | Position | Content | Font | Color Rule |
|------|----------|---------|------|------------|
| Top-Left | cell (3,8)→(70,24) | Masam name OR Moon ○/● + label | 7pt bold | Inherits date color |
| Top-Right | cell (110,5)→(128,14) | Telugu day superscript (e.g. "30") | 4pt | `#3C3723` |
| Center | cell (8,8)→(48) | **DATE NUMBER** | 27pt bold | Holiday: `#E62319` / Normal: `#28201C` |
| Line 1 | cell_y ~55 | Tithi info | 5.5pt | `#3C3723` |
| Line 2 | cell_y ~70 | Nakshatram info | 5.5pt | `#3C3723` |
| Line 3 | cell_y ~85 | Timing line 1 | 5.5pt | `#3C3723` |
| Line 4 | cell_y ~95 | Timing line 2 (optional) | 5.5pt | `#3C3723` |

**Cell backgrounds by day:**

| Day | Background |
|-----|-----------|
| SUN | `#FFF800` (bright yellow) |
| MON–THU | `#F8F6AA` (pale yellow) |
| FRI | `#FFF014` (bright yellow) |
| SAT | `#FAFABE` (pale yellow-green) |

**Top-Left Zone types:**
- `none` → empty
- `masam` → Telugu month name in bold (e.g., "భాద్రపద")
- `moon` → Pournami ○ (empty circle) or Amavasya ● (filled circle) + Telugu label

**Holiday rendering:** When `is_holiday: true`, the date number renders in **RED** `#E62319`.

#### 5.4.3 Festival Panels

Empty grid cells (dates that don't exist for that month) become festival panels:

- **Title:** "పండుగలు" (festivals) in red bold at top
- **Content:** "{date}.{name}" format, ~6pt, listed by date
- Adjacent empty cells in same column **merge vertically** (row dividers removed)
- Large merged blocks (4+ rows): **pink background** `#FBCDDC`
- Small blocks: inherit the row's default background color
- Left block gets first festivals; right block gets remainder

**Date Placement Algorithm:**

```
Given: start_day (0=SUN..6=SAT), num_days (28-31)

For each date 1..num_days:
  weekday = (start_day + date - 1) % 7     → row index
  week_col = floor((date - 1 + start_day) / 7) + 1  → column 1-5

Place date at grid[weekday][week_col]
Empty cells → festival panels
```

### 5.5 Footer (B4) + Bottom Border (B5)

| Sub-zone | Y Range | Spec |
|----------|---------|------|
| Red gradient bar | 1248→1255 (8px) | Orange→red→pink gradient (mirrors header H11) |
| White gap | 1256→1257 (2px) | Separator |
| Yellow text bar | 1258→1301 (44px) | Background `#FFF800` |
| Footer text | — | Red `#DC1E28`, bold Telugu ~14pt, centered |
| B5 bottom border | 1302→1316 (15px) | White/cream with yellow side borders |

**Content:** Monthly greeting from `monthly_data.footer_text`  
**Example:** "5-ఉపాధ్యాయ దినోత్సవ శుభాకాంక్షలు"

---

## 6. Data Specifications

### 6.1 design_template.json

The design template is the visual skeleton — it defines every pixel position, gradient stop, color value, and layout rule.

| Section | Content | Example |
|---------|---------|---------|
| `page` | Canvas dimensions (924×1316), content area (X: 42→882) | `dpi: 103` |
| `header.H1–H12` | Y-ranges, gradient stops, border colors for each header sub-zone | H2: `#FBDD12` → `#C88700` → `#BC4500` → `#F78457` |
| `header.H5_branding_area` | Logo/badge positions, text element positions (T0–T6), safe zones | Company name: Y 71→129, X 200→750 |
| `B2_subheader` | 3-column panel dimensions, backgrounds, font specs | Center panel bg: `#720F62` |
| `B3_grid` | Row heights, column widths, divider positions, cell layout | Row height: ~105px, cell width: ~130px |
| `B4_footer` | Gradient stops, yellow bar dimensions, text specs | Yellow bar bg: `#FFF800` |
| `colors` | Master color palette — all hex values referenced by `_key` elsewhere | `primary_red: #E61C21` |

### 6.2 company_data.json

Company identity data, same across all 12 pages:

| Field | Example Value | Used In |
|-------|-------------|---------|
| `company.name_telugu` | వేంకటరామ అండ్ కో., | H5 company name (41pt red) |
| `company.name_english` | Venkatrama & Co. | H3 copyright line |
| `company.logo_file` | FINAL_v_logo.png | H5 left (75×83px) |
| `company.badge_file` | FINAL_jrrc_badge.png | H5 right (162×123px) |
| `contact.phone` | 08812-230098 | H5 contact info |
| `contact.email` | venkatramacoweb@gmail.com | H5 contact info |
| `branches[]` | ["Hyderabad", "Vijayawada", "Tadepalligudem"] | H5 branches line |
| `year` | 2025 | H3 copyright + B2-CENTER |
| `credits.panchangam` | Tangirala Poornayya Siddhanti... | H8 left (white embossed) |
| `watermark_text` | venkatramacalendar.com | Side watermarks |

### 6.3 monthly_data.json

Contains 12 month entries. Each month includes:

| Field | Description | Used In |
|-------|-------------|---------|
| `month_telugu` / `month_english` | Month name in Telugu and English (UPPERCASE) | B2-CENTER panel |
| `start_day` | Weekday of the 1st (SUN–SAT) | Grid date placement algorithm |
| `num_days` | 28–31 | Grid date placement |
| `b2_left` (year_masam_line1, line2) | Telugu samvatsara name + masam transition info | B2-LEFT area 1 |
| `sunrise_sunset` (4 sample dates) | Sunrise/sunset times for dates 1, 11, 21, last | B2-LEFT area 2 table |
| `gulika_kalam[]` (7 entries) | Start/end times per weekday | B2-RIGHT table |
| `festivals[]` (10–30 entries) | {day, name, type} for each festival | Festival panels in grid |
| `footer_text` | Monthly greeting string | B4 yellow bar |
| `days[]` (28–31 entries) | Per-day: date, is_holiday, top_left, top_right, info_lines[] | B3 date cells |

### 6.4 Validation Rules

| Field | Rule |
|-------|------|
| `company.name_telugu` | Max 30 Telugu characters (fits at 41pt in X: 200→750) |
| `contact.tagline` | Max 60 characters |
| `contact.phone` / `email` | Max 15 / 40 characters |
| `branches[]` | Max 5 entries, 15 chars each |
| `credits.panchangam` | Max 80 chars (fits H8 left X: 100→490) |
| `months[]` | Exactly 12 entries |
| `months[i].days[]` | 28–31 entries per month |
| `months[i].gulika_kalam[]` | Exactly 7 entries (Sun→Sat) |
| `months[i].sunrise_sunset` | Exactly 4 sample dates |
| Logo file | RGBA PNG, ~75×83px |
| Badge file | RGBA PNG, ~162×123px |

---

## 7. Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Renderer** | HTML + CSS (absolute positioning) | Pixel-exact control; maps directly to `design_template.json` coordinates |
| **Logic** | Vanilla JavaScript (ES6+) | No framework overhead; simple JSON loading and DOM manipulation |
| **Telugu Font** | Noto Sans Telugu (Google Fonts) | Best free Telugu font with wide Unicode coverage and ligature support |
| **Export** | html2canvas.js | Client-side PNG export without server dependency |
| **Layout** | CSS `position: absolute` | Direct mapping from JSON pixel coordinates to screen positions |

---

## 8. Build Phases & Milestones

| Phase | Deliverable | Spec Files | Validation |
|-------|------------|-----------|------------|
| **Phase 1: Header** | Complete H1–H12 rendering with logos, gradients, all text | `header_deep_dive_spec.md` | Compare against September reference image header zone |
| **Phase 2: Sub-Header** | B1 credit bar + B2 three-column panel | `B2_subheader_spec.md` | Compare B1+B2 against September reference |
| **Phase 3: Grid** | 7×6 grid with all date cells + festival panels | `B3_grid_spec.md`, `date_cell_spec.md`, `B3_festival_analysis.md` | Verify every date cell, holiday colors, moon markers, festivals |
| **Phase 4: Footer** | B4 greeting bar + B5 bottom border + side borders | `B3_grid_spec.md` (footer section) | Compare footer zone |
| **Phase 5: Multi-Month** | Month selector + all 12 months data + PNG export | — | Test Jan, Feb, Mar, Jul against reference PDFs |
| **Phase 6: Reusability** | Different company/year/color swap with zero code changes | — | Change each JSON → verify all 12 pages update |

---

## 9. Current Project State

### 9.1 Completed Work

| Item | Status | Notes |
|------|--------|-------|
| Pixel-level spec documents (9 files) | ✅ Complete | Header, sub-header, grid, cell, festival, body, config, architecture |
| `design_template.json` | ✅ Complete | All zone positions, gradients, 30+ color definitions |
| `company_data.json` | ✅ Complete | Venkatrama & Co. details for 2025 |
| `monthly_data.json` (September sample) | ✅ Partial | Full structure defined; September has sample data with day entries |
| V Logo extraction | ✅ Clean | 75×83px RGBA PNG, no contamination |
| JRRC Badge extraction | ⚠️ Partial | 162×123px RGBA, left 40% has artifacts from text overlap |
| Reference images | ✅ Available | September PNG + Jan/Feb/Mar/Jul PDFs |
| `comparison_v3.html` (WIP) | ✅ Reference | Previous attempt at header — 1.6MB HTML for learning from |

### 9.2 Remaining Work

| Item | Priority | Effort Estimate |
|------|----------|----------------|
| Build the renderer (HTML/CSS/JS) | **P0 — Critical** | Primary deliverable — Phases 1–4 |
| Complete `monthly_data.json` (all 12 months) | **P0 — Critical** | Extract data from reference PDFs for each month |
| Telugu font selection & testing | **P0 — Critical** | Test Noto Sans Telugu at 5pt–41pt range |
| Company name rendering | P1 — High | Decorative font may need pre-rendered image fallback |
| PNG export integration | P1 — High | Integrate html2canvas for 924×1316 export |
| Month selector UI | P1 — High | Dropdown to switch months |
| Obtain clean JRRC badge asset | P2 — Medium | Contact publisher for original vector/hi-res file |
| Pixel-accuracy validation tool | P2 — Medium | Side-by-side overlay comparison mode |

---

## 10. Acceptance Criteria

### 10.1 Must Have (P0)

- [ ] September 2025 renders pixel-accurately compared to reference image
- [ ] All zones (Header, B1, B2, B3, B4, B5) present and positioned correctly
- [ ] Telugu text renders with correct ligatures at all sizes (5pt to 41pt)
- [ ] Holiday dates appear in RED (`#E62319`)
- [ ] Moon symbols (○ Pournami / ● Amavasya) display correctly with Telugu labels
- [ ] Masam names appear in correct cells with proper positioning
- [ ] Festival panels merge correctly with proper backgrounds (yellow/pink)
- [ ] All gradients match reference (H2, H10, H11, H12, footer red bar)
- [ ] Side yellow borders and watermark overlay present
- [ ] Month selector switches between available months

### 10.2 Should Have (P1)

- [ ] PNG export at 924×1316px matching on-screen render
- [ ] All 12 months populated in `monthly_data.json`
- [ ] Renders correctly in Chrome, Firefox, and Safari
- [ ] Side-by-side comparison mode with reference image

### 10.3 Nice to Have (P2)

- [ ] Batch export all 12 months as individual PNGs
- [ ] PDF generation for print production
- [ ] Year/company swap demonstrated with zero code changes

---

## 11. File Manifest

| File | Type | Size | Role |
|------|------|------|------|
| `design_template.json` | Config | 13 KB | Layout skeleton — all positions, colors, gradients |
| `company_data.json` | Data | 3 KB | Company identity — same all 12 pages |
| `monthly_data.json` | Data | 9 KB | Monthly content — festivals, daily panchangam |
| `FINAL_v_logo.png` | Asset | 13 KB | V shield logo (75×83px RGBA) |
| `FINAL_jrrc_badge.png` | Asset | 32 KB | JRRC publisher badge (162×123px RGBA) |
| `header_deep_dive_spec.md` | Spec | 44 KB | Pixel-exact header reference |
| `B2_subheader_spec.md` | Spec | 15 KB | Sub-header panel reference |
| `B3_grid_spec.md` | Spec | 16 KB | Grid structure reference |
| `date_cell_spec.md` | Spec | 14 KB | Cell internal layout reference |
| `B3_festival_analysis.md` | Spec | 5 KB | Festival panel behavior |
| `data_design_separation_spec.md` | Spec | 15 KB | Architecture overview |
| `config_model_reference.md` | Spec | 11 KB | JSON-to-zone mapping guide |
| `body_zone_map.md` | Spec | 8 KB | Quick body zone reference |
| `asset_review_report.md` | Spec | 5 KB | Logo/badge quality notes |
| `comparison_v3.html` | Ref | 1.6 MB | Previous WIP attempt |
| `VenkatramaCoTeluguCalendarColour202509.png` | Ref | 311 KB | September original (ground truth) |
| `Venkatrama_Calendar_2025_*.pdf` (4 files) | Ref | ~1 MB | Jan, Feb, Mar, Jul references |

---

## 12. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|-----------|
| Telugu font rendering at small sizes (5–6pt) | High — illegible text | Medium | Test multiple Telugu fonts; fall back to slightly larger sizes if needed |
| Decorative company name font unavailable | Medium — visual mismatch | High | Use pre-rendered image of company name as fallback |
| JRRC badge left-side artifacts | Low — cosmetic | Certain | Obtain original asset from publisher; current extraction is usable |
| Browser rendering differences | Medium — inconsistent output | Low | Use absolute positioning; test in Chrome/Firefox/Safari |
| `monthly_data.json` extraction errors | High — wrong dates/info | Medium | Cross-validate against reference PDFs for each month |
| html2canvas export quality | Medium — blurry PNG | Low | Set devicePixelRatio to 1; render at exact 924×1316 |

---

## Appendix A: Color Palette Reference

Master color palette from `design_template.json`:

| Key | Hex | Usage |
|-----|-----|-------|
| `border_yellow` | `#FDF800` | Side borders, H1 top border |
| `primary_red` | `#E61C21` | Company name, watermarks |
| `bar_red` | `#EF171F` | H7, H9 solid red bars |
| `cream_background` | `#FDFED6` | H5 branding area background |
| `text_purple_magenta` | `#5A2346` | Contact info text |
| `branch_text` | `#582244` | Branch locations text |
| `text_green` | `#218847` | App promo text |
| `app_url_green` | `#378C50` | App URL text |
| `copyright_text` | `#6E3755` | H3 copyright bar text |
| `date_holiday_red` | `#E62319` | Holiday date numbers |
| `date_normal_dark` | `#28201C` | Normal date numbers |
| `info_text_olive` | `#3C3723` | Date cell info lines |
| `festival_title_red` | `#D22818` | Festival panel title |
| `festival_pink_bg` | `#FBCDDC` | Large festival panel background |
| `footer_yellow` | `#FFF800` | Footer bar background |
| `footer_red_text` | `#DC1E28` | Footer greeting text |
| `grid_divider_line` | `#323223` | Grid groove divider lines |

---

*END OF DOCUMENT*
