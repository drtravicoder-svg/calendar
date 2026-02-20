# VENKATRAMA TELUGU CALENDAR — PROJECT REQUIREMENTS & GOALS
## Complete Requirements Document for Claude Code Implementation

---

## 1. PROJECT VISION

**Build a data-driven, pixel-perfect HTML/CSS/JS renderer** that recreates the iconic Venkatrama & Co. Telugu Panchangam Calendar — the most widely used Telugu calendar in Andhra Pradesh and Telangana.

The renderer must produce output **visually indistinguishable** from the original print calendar (924×1316px at 103 DPI), driven entirely by 3 JSON data files, so that:
- Changing the **year** requires editing only `company_data.json` + `monthly_data.json`
- Changing the **company** requires editing only `company_data.json` + swapping logo/badge assets
- Changing the **visual design** requires editing only `design_template.json`
- **No code changes** are needed for any of the above

---

## 2. HIGH-LEVEL GOALS

### Goal 1: Faithful Visual Recreation
Produce a single-page HTML that, for any given month, renders a calendar page that matches the original Venkatrama print calendar at the pixel level — including all gradients, borders, Telugu text, color coding, and layout proportions.

### Goal 2: Complete Data-Design Separation
The renderer is a **dumb layout engine**. It reads positions, colors, fonts from `design_template.json`, company info from `company_data.json`, and monthly/daily content from `monthly_data.json`. The renderer contains ZERO hardcoded text, colors, or positions.

### Goal 3: 12-Month Generation
Given a complete `monthly_data.json` with all 12 months, the system can render any month on demand (via a month selector) or batch-export all 12 pages as PNG files.

### Goal 4: Telugu Script Excellence
All Telugu text must render correctly with proper font shaping, ligatures, and positioning — including the decorative company name, small panchangam info text, and tiny date cell content at 5-6pt equivalent.

---

## 3. DETAILED FUNCTIONAL REQUIREMENTS

### 3.1 Page Canvas
| Requirement | Specification |
|-------------|---------------|
| Canvas size | 924 × 1316 pixels |
| DPI | 103 (print standard for this calendar) |
| Content area | X: 42 → 882 (841px wide) |
| Left border | X: 0 → 41 (42px yellow) |
| Right border | X: 883 → 923 (41px yellow) |
| Color space | sRGB |

### 3.2 Zone Architecture (Top to Bottom)

The page is divided into these zones, each with specific rendering rules:

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

### 3.3 Header Zone (H1–H12) — SAME All 12 Pages
**Source spec:** `header_deep_dive_spec.md`

| Sub-zone | What to Render | Data Source |
|----------|---------------|-------------|
| H1 | Solid yellow fill | `design_template.json` |
| H2 | 4px vertical gradient (yellow→orange→red→peach) | `design_template.json` |
| H3 | Beveled frame with copyright text: "© 2025 Venkatrama & Co., Official Permission Website - https://venkatramacalendar.com" | `company_data.json` (year, name, website) |
| H5 Logo | V shield emblem at X=53, Y=50 | `FINAL_v_logo.png` |
| H5 Badge | JRRC publisher seal at right side | `FINAL_jrrc_badge.png` |
| H5 T0 | Small red "శ్రీ" symbol above company name | `company_data.json` |
| H5 T1 | Large Telugu company name "వేంకటరామ అండ్ కో.," (~41pt, red, decorative) | `company_data.json` |
| H5 T2 | Red inverted triangle (decorative separator) | Programmatic (from template) |
| H5 T3 | Contact info — tagline, phone, email (purple) | `company_data.json` |
| H5 T4 | Branch locations — bold purple | `company_data.json` |
| H5 T5 | App download text — green bold | `company_data.json` |
| H5 T6 | App URL — small green | `company_data.json` |
| H6 | 2px warm separator line | `design_template.json` |
| H7 | 10px solid red bar | `design_template.json` |
| H8 | 16px embossed text bar — left: white panchangam credit, right: yellow publisher credit | `company_data.json` |
| H9 | 11px solid red bar | `design_template.json` |
| H10 | 8px yellow gradient (orange→yellow) | `design_template.json` |
| H11 | 8px red gradient (orange→red→pink) | `design_template.json` |
| H12 | 6px pink→white transition | `design_template.json` |
| Side borders | Yellow strips on left/right | `design_template.json` |
| Watermarks | "venkatramacalendar.com" vertical red text on both sides (LAST overlay) | `company_data.json` |

**Key constraints:**
- Company name must auto-center between logo (X=200) and badge (X=690) zones
- Text must NEVER overlap into logo/badge zones
- If text overflows: reduce font 1pt at a time (min: default-3pt), then truncate with "..."

### 3.4 B1: Panchangam Credit Bar — SAME All 12 Pages
| Property | Value |
|----------|-------|
| Background | Green-tinted `#D2E6D7` |
| Text color | Purple-magenta `#A84B80` |
| Font size | ~7pt |
| Content | Full panchangam credit line from `company_data.json` |
| Alignment | Center |

### 3.5 B2: Sub-Header Panel — Changes MONTHLY
**Source spec:** `B2_subheader_spec.md`

Three columns separated by dark divider lines:

**B2-LEFT (X: 42→308):**
- Warm cream-pink background `#F8B9A0`
- Area 1 (top): Telugu year name + masam info (2 lines, brown text)
- Divider line at Y≈420
- Area 2 (bottom): Sunrise/sunset table — 4 rows × (date, sunrise, sunset)
- Side sub-column: Panchangam transition text

**B2-CENTER (X: 313→613):**
- Magenta background `#720F62`
- Year "2025" — large white bold (~46pt)
- Telugu month name — yellow bold (~30pt decorative)
- English month name — white uppercase (~18pt)
- Layout: Year on LEFT half, month names on RIGHT half (side-by-side, NOT stacked)

**B2-RIGHT (X: 616→866):**
- Green background `#D2E6C8`
- Title box: "గులిక కాలం :" in red-brown on bright green
- 7 weekday rows with start time → end time
- Row pitch: ~15px

### 3.6 B3: Main Calendar Grid — Changes MONTHLY
**Source specs:** `B3_grid_spec.md`, `date_cell_spec.md`, `B3_festival_analysis.md`

**Grid structure:**
- 7 rows × 6 columns
- Row order: SUN, MON, TUE, WED, THU, FRI, SAT (SUN-first!)
- Column 0: Day name header (colored background per day)
- Columns 1–5: Date cells or festival panels
- Double-line groove dividers (2 dark lines, ~6px gap)

**Column 0 — Day Name Headers:**
| Day | Background | English | Telugu | Text Color |
|-----|-----------|---------|--------|------------|
| SUN | `#EA4C52` (red) | SUN | ఆది | White |
| MON | `#9C5F92` (purple) | MON | సోమ | White |
| TUE | `#F18E4E` (orange) | TUE | మంగళ | White |
| WED | `#4EB07D` (green) | WED | బుధ | White |
| THU | `#4AC1EC` (blue) | THU | గురు | Dark |
| FRI | `#98568C` (purple) | FRI | శుక్ర | White |
| SAT | `#E63CA0` (pink) | SAT | శని | White |

Plus timing info below names: రా.దు (Rahu), మ.దు (Muhurtham), etc.

**Date Cell Internal Layout (130×105px each):**
```
┌──────────────────────────────────────────────┐
│  [Top-Left Zone]           [Top-Right Zone]  │
│  Masam name / Moon ○●      Telugu day "30"   │
│                                              │
│         DATE NUMBER (27pt bold)              │
│         (RED if holiday, DARK if normal)     │
│                                              │
│  Line 1: Tithi info         (centered, 5.5pt)│
│  Line 2: Nakshatram info                     │
│  Line 3: Timing line 1                       │
│  Line 4: Timing line 2 (optional)            │
└──────────────────────────────────────────────┘
```

**Cell background colors by day:**
| Day | Cell Background |
|-----|----------------|
| SUN | `#FFF800` (bright yellow) |
| MON–THU | `#F8F6AA` (pale yellow) |
| FRI | `#FFF014` (bright yellow) |
| SAT | `#FAFABE` (pale yellow-green) |

**Top-Left Zone types:**
- `none` → empty
- `masam` → Telugu month name in bold (e.g., "భాద్రపద")
- `moon` → Pournami ○ (empty circle) or Amavasya ● (filled circle) + label

**Holiday rendering:** When `is_holiday: true`, the date number renders in RED `#E62319`

**Festival Panels:**
- Empty grid cells (dates that don't exist for that month) become festival panels
- Adjacent empty cells in the same column merge vertically
- Title "పండుగలు" in red bold at top
- Festival list: "{date}.{name}" format, ~6pt
- Large merged blocks (4+ rows): pink background `#FBCDDC`
- Small blocks: inherit row background color
- Left block gets first festivals, right block gets remainder

**Date Placement Algorithm:**
```
Given: start_day (0=SUN..6=SAT), num_days (28-31)
For each date 1..num_days:
  weekday = (start_day + date - 1) % 7    → row index
  week_col = floor((date - 1 + start_day) / 7) + 1  → column 1-5
  Place date at grid[weekday][week_col]
Empty cells → festival panels
```

### 3.7 B4: Footer — Changes MONTHLY
| Sub-zone | Spec |
|----------|------|
| Red gradient bar | Y: 1248→1255 (8px), orange→red→pink gradient |
| White gap | Y: 1256→1257 (2px) |
| Yellow text bar | Y: 1258→1301 (44px), background `#FFF800` |
| Footer text | Red `#DC1E28`, bold Telugu ~14pt, centered |
| Content | Monthly greeting from `monthly_data.footer_text` |

Example: "5-ఉపాధ్యాయ దినోత్సవ శుభాకాంక్షలు"

### 3.8 B5: Bottom Border — SAME All Pages
- Y: 1302→1316 (15px)
- White/cream background
- Yellow side borders continue

---

## 4. NON-FUNCTIONAL REQUIREMENTS

### 4.1 Performance
- Single month render: < 500ms
- All 12 months batch: < 3 seconds
- No external API calls during render (all data local)

### 4.2 Browser Compatibility
- Chrome 90+ (primary target)
- Firefox 90+
- Safari 15+
- Edge 90+

### 4.3 Font Requirements
- Primary Telugu font: Noto Sans Telugu (Google Fonts) or Potti Sreeramulu (if available)
- Decorative company name: May need a special ornamental Telugu font or pre-rendered image
- Latin/numbers: System sans-serif as fallback
- Critical: Telugu ligatures and conjuncts must render correctly at all sizes (5pt to 41pt)

### 4.4 Export Capability
- View in browser at 1:1 scale
- Export as PNG at 924×1316px (103 DPI)
- Optional: PDF export for print

### 4.5 Accessibility
- Not a primary concern (this is a visual print reproduction)
- But: alt-text on images, semantic HTML where possible

---

## 5. DATA MODEL

### 5.1 design_template.json (FIXED — never changes between pages)
Contains ALL layout information:
- Page dimensions, content area bounds
- Zone Y-ranges and heights for every header/body/footer zone
- Gradient stop colors for all decorative borders
- Grid row heights, column widths, divider positions
- Cell backgrounds per day-of-week
- Date cell internal layout (font sizes, positions, colors)
- Festival panel styling (title, content, backgrounds, merge rules)
- Color palette (all hex values referenced by `_key` throughout)

### 5.2 company_data.json (SAME all 12 pages — changes yearly or per company)
Contains:
- Company name (Telugu + English)
- Logo file path, badge file path
- Decorative symbol
- Contact info (tagline, phone, email)
- Branch locations
- App promo text + URL
- Year (e.g., 2025)
- Panchangam credits
- Publisher credits
- Watermark text
- Copyright line template

### 5.3 monthly_data.json (Changes every month — 12 entries)
Each month entry contains:
- `month_number`, `month_telugu`, `month_english`
- `start_day` (weekday of the 1st) and `num_days`
- `b2_left` fields: Telugu year/masam info lines, panchangam text
- `sunrise_sunset`: 4 sample dates with sunrise/sunset times
- `gulika_kalam`: 7 weekday entries with start/end times
- `rahu_kalam` (for B2-RIGHT or day name column)
- `festivals[]`: array of {day, name, type}
- `footer_text`: monthly greeting
- `days[]`: array of 28-31 day objects, each containing:
  - `date`, `is_holiday`
  - `top_left` (none / masam with name / moon with phase+label)
  - `top_right_telugu_day` (superscript number)
  - `info_lines[]` (3-5 pre-formatted Telugu strings for tithi, nakshatram, timing)

---

## 6. CURRENT STATE & WHAT EXISTS

### Already Done ✅
- **All spec documents** written with pixel-level measurements
- **design_template.json** complete with all zone positions, gradients, colors
- **company_data.json** complete with Venkatrama & Co. details
- **monthly_data.json** has September 2025 sample (partial) + structure notes
- **V Logo** extracted clean (75×83px RGBA PNG)
- **JRRC Badge** extracted with minor artifacts on left side (162×123px RGBA PNG)
- **comparison_v3.html** — a previous WIP attempt at the header (1.6MB, for reference)
- **Reference images** — September original PNG + PDFs for Jan, Feb, Mar, Jul

### Still Needed 🔲
1. **Complete monthly_data.json** — fill all 12 months (currently only September sample exists; full day-by-day data for all months needs to be extracted from the reference PDFs)
2. **The actual renderer** — the HTML/CSS/JS code that reads the JSON and renders the calendar
3. **Telugu font selection** — test which font best matches the original at small sizes
4. **Company name rendering** — the decorative ornamental Telugu font for the big company name may need special handling (possibly a pre-rendered image)
5. **PNG export** — integrate html2canvas or similar for export
6. **Month selector UI** — dropdown or navigation to switch months
7. **Validation** — compare rendered output against reference images for pixel accuracy

---

## 7. BUILD PHASES

### Phase 1: Header (H1–H12)
**Input:** `design_template.json` + `company_data.json` + logo/badge PNGs
**Output:** Complete header rendering, identical all 12 pages
**Spec:** `header_deep_dive_spec.md`
**Validation:** Compare against September reference image header zone

### Phase 2: Sub-Header (B1 + B2)
**Input:** + `monthly_data.json` (September)
**Output:** 3-column panel with sunrise/sunset, month name, gulika kalam
**Spec:** `B2_subheader_spec.md`
**Validation:** Compare B1+B2 zone against September reference

### Phase 3: Calendar Grid (B3)
**Input:** `monthly_data.json` days array + festivals array
**Output:** 7×6 grid with all date cells rendered, festival panels populated
**Specs:** `B3_grid_spec.md` + `date_cell_spec.md` + `B3_festival_analysis.md`
**Validation:** Compare every date cell against September reference — check:
- Date number size/position/color
- Top-left masam/moon markers
- Top-right Telugu day superscript
- Info lines positioning and text
- Holiday red coloring
- Festival panel layout and content

### Phase 4: Footer + Borders (B4 + B5)
**Input:** `monthly_data.json` footer_text
**Output:** Yellow bar with monthly greeting + bottom border
**Spec:** `B3_grid_spec.md` (footer section)
**Validation:** Compare footer zone

### Phase 5: Polish & Multi-Month
- Add month selector dropdown
- Test with reference PDFs (Jan, Feb, Mar, Jul)
- Complete `monthly_data.json` for all 12 months
- Fix any rendering discrepancies
- Add PNG export button

### Phase 6: Reusability
- Test with different `company_data.json` (different company)
- Test with year change
- Test with `design_template.json` color modifications
- Ensure zero hardcoded values in renderer

---

## 8. ACCEPTANCE CRITERIA

### Must Have (P0)
- [ ] September 2025 renders pixel-accurately compared to reference image
- [ ] All zones (Header, B1, B2, B3, B4, B5) present and positioned correctly
- [ ] Telugu text renders with correct ligatures at all sizes
- [ ] Holiday dates appear in RED
- [ ] Moon symbols (○ / ●) display correctly
- [ ] Masam names appear in correct cells
- [ ] Festival panels merge correctly with proper backgrounds
- [ ] Gradients match (H2, H10, H11, H12, footer red bar)
- [ ] Side yellow borders + watermark overlay present
- [ ] Month selector switches between available months

### Should Have (P1)
- [ ] PNG export at 924×1316 matching screen render
- [ ] All 12 months populated in monthly_data.json
- [ ] Renders correctly in Chrome, Firefox, Safari
- [ ] Comparison mode: side-by-side with reference image

### Nice to Have (P2)
- [ ] Batch export all 12 months as PNGs
- [ ] PDF generation for print
- [ ] Dark mode or zoom controls
- [ ] Year/company swap without touching code

---

## 9. TECHNOLOGY STACK

| Layer | Recommended | Rationale |
|-------|------------|-----------|
| Renderer | HTML + CSS (absolute positioning) | Pixel-exact control, Telugu font support |
| Logic | Vanilla JavaScript | No framework overhead, simple JSON loading |
| Telugu font | Google Fonts: Noto Sans Telugu | Best free Telugu font with wide Unicode coverage |
| Export | html2canvas.js | Client-side PNG export |
| Layout engine | CSS `position: absolute` | Maps directly to pixel coordinates in design_template.json |

---

## 10. FILE MANIFEST

| File | Type | Role |
|------|------|------|
| `design_template.json` | Config | All layout positions, colors, gradients — the skeleton |
| `company_data.json` | Data | Company identity — same all 12 pages |
| `monthly_data.json` | Data | Monthly content — festivals, daily panchangam, sunrise/sunset |
| `FINAL_v_logo.png` | Asset | V shield logo, 75×83px RGBA |
| `FINAL_jrrc_badge.png` | Asset | JRRC publisher badge, 162×123px RGBA |
| `header_deep_dive_spec.md` | Spec | Pixel-exact header reference (44KB of detail) |
| `B2_subheader_spec.md` | Spec | Sub-header panel reference |
| `B3_grid_spec.md` | Spec | Grid structure reference |
| `date_cell_spec.md` | Spec | Cell internal layout reference |
| `B3_festival_analysis.md` | Spec | Festival panel behavior |
| `data_design_separation_spec.md` | Spec | Architecture overview |
| `config_model_reference.md` | Spec | JSON→Zone mapping guide |
| `body_zone_map.md` | Spec | Quick body zone reference |
| `asset_review_report.md` | Spec | Logo/badge quality notes |
| `comparison_v3.html` | Reference | Previous WIP attempt |
| `VenkatramaCoTeluguCalendarColour202509.png` | Reference | September original (ground truth) |
| `Venkatrama_Calendar_2025_January_*.pdf` | Reference | January page |
| `Venkatrama_Calendar_2025_February_*.pdf` | Reference | February page |
| `Venkatrama_Calendar_2025_March_*.pdf` | Reference | March page |
| `Venkatrama_Calendar_2025_July_*.pdf` | Reference | July page |
