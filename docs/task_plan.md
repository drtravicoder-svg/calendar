 # Venkatrama Calendar — Build Task Plan

> **Goal**: Build a pixel-perfect renderer that produces an exact replica of the Venkatrama Telugu Calendar for **any year, any month**, driven entirely by user-provided JSON data.

---

## TASK 1: Project Scaffold + HTML Canvas + CSS Foundation

### What we build
- `src/index.html` — single HTML file with a fixed **924×1316px** container
- `src/styles/reset.css` — minimal CSS reset
- `src/styles/calendar.css` — master layout: page container, side borders, CSS variables
- `src/scripts/main.js` — entry point that loads all 3 JSON files via `fetch()`

### What it does
- Creates the 924×1316px "page" div with `position: relative`
- Renders the **yellow side borders** (left 42px, right 41px) — these frame the entire page
- Sets up **CSS custom properties** from `design_template.json` colors
- Loads Google Fonts: **Noto Sans Telugu** (weights 400, 700, 900)
- Loads all 3 JSON files and passes them to a render function

### Key specs
- Page: `width: 924px; height: 1316px`
- Left border: `x: 0-41, color: #FDF800`
- Right border: `x: 883-923, color: #FDF800`
- Content area: `x: 42-882 (841px wide)`

### Validation
- Open in browser → see a 924×1316 yellow-bordered white rectangle
- Console shows all 3 JSON objects loaded successfully
- Noto Sans Telugu font is loaded and available

---

## TASK 2: Header Zones H1–H6 (Top Borders + Branding Area)

### What we build
- `src/styles/header.css`
- `src/scripts/header-renderer.js` — reads `design_template` + `company_data`, builds header DOM

### Zone-by-zone details

| Zone | Y Range | What it renders |
|------|---------|-----------------|
| **H1** | 0–15 (16px) | Solid yellow fill `#FDF800`, full width |
| **H2** | 16–19 (4px) | Vertical gradient: `#FBDD12 → #C88700 → #BC4500 → #F78457` (content area only, yellow on sides) |
| **H3** | 20–48 (29px) | White background, beveled frame (border `#B44100`), copyright text 8pt centered: "© {year} {company_name_en}..." |
| **H5** | 49–284 (236px) | **Main branding** — cream background `#FDFED6` — the big area with all company info |
| **H6** | 285–286 (2px) | Solid warm separator line `#DEAD8C` |

### H5 Branding Area internals (most complex part of header)

```
┌──────────┬──────────────────────────────────────┬──────────┐
│ V LOGO   │  శ్రీ (red decorative symbol)          │ JRRC     │
│ (53,50)  │  వేంకటరామ అండ్ కో. (41pt RED bold)     │ BADGE    │
│ 117×98px │  ▼ inverted triangle                  │ (650,57) │
│          │  contact tagline (7pt purple)          │ 225×88px │
│          │  phone/email (12pt bold purple)        │          │
│          │  branches (9pt bold)                   │          │
│          │  app download text (13pt GREEN bold)   │          │
│          │  app URL (6pt green)                   │          │
└──────────┴──────────────────────────────────────┴──────────┘
```

- Logo image: `assets/FINAL_v_logo.png` at position (53, 50), max 117×98px
- Badge image: `assets/FINAL_jrrc_badge.png` at position (650, 57), max 225×88px
- Company name: 41pt bold red `#E61C21`, centered, with text shadow
- Decorative triangle: inverted triangle shape, red tip fading to dark, Y: 142-157
- Contact info: 3 sub-lines (tagline 7pt, main 12pt bold, supplement 6pt), color `#5A2346`
- Branches: 9pt bold `#582244`, center-aligned
- App promo: 13pt bold green `#218847`
- App URL: 6pt green `#378C50`

### Data sources
- `design_template.json` → all positions, sizes, colors
- `company_data.json` → all text content, image paths

### Validation
- Compare header area (Y: 0–286) against reference image
- Logo and badge visible and correctly positioned
- Company name in Telugu, red, centered between logo and badge
- All text lines present, correctly colored and sized

---

## TASK 3: Header Zones H7–H12 (Red Bars + Bottom Borders)

### Zone-by-zone details

| Zone | Y Range | What it renders |
|------|---------|-----------------|
| **H7** | 287–296 (10px) | Solid red fill `#EF171F` |
| **H8** | 297–312 (16px) | Red background with **3D embossed text**: left section (panchangam credit, white `#FFF5EB`) + right section (publisher credit, yellow `#FFE12D`). Shadow: `#B43200`, offset (1,1) |
| **H9** | 313–323 (11px) | Solid red fill `#EF171F` |
| **H10** | 324–331 (8px) | Yellow gradient: 8 exact color stops from `#FF9D38` through `#FFF015` to `#FFE91B` |
| **H11** | 332–339 (8px) | Red-orange gradient: 8 stops from `#EA8F00` through `#EE181F` to `#ED4B58` |
| **H12** | 340–345 (6px) | Cream transition gradient: `#FED4D3 → #FEF8FB → #F9F9FA` |

### H8 embossed text detail
- Left section X: 100–490, text from `company_data.credits.panchangam`
- Right section X: 500–840, text from `company_data.credits.publisher`
- 3D effect: white highlight at (-1,-1), dark shadow at (1,1) relative to text

### Data sources
- `design_template.json` → gradient stops, positions
- `company_data.json` → H8 credit text

### Validation
- Red bars are solid, correct height
- H8 text has visible 3D emboss effect
- Yellow and red gradient strips look smooth
- H12 provides a soft transition from header to body
- Full header (Y: 0–345) matches reference image

---

## TASK 4: B1 Credit Bar + B2 Sub-header Frame

### What we build
- `src/styles/subheader.css`
- `src/scripts/subheader-renderer.js`

### B1 Credit Bar (Y: 346–374, 29px)
- Top border line at Y=348, color `#718274`
- Background: light green `#D2E6D7`
- Green padding top (Y: 349–354) and bottom (Y: 365–374)
- Centered text Y: 355–364, font 7pt, color `#A84B80`
- Text: panchangam credit + "పాత్రలు" + publisher credit from `company_data`

### B2 Frame (Y: 375–498, 124px)
- Top dark line: Y 378–379, color `#282D26`
- Bottom dark line: Y 496–498, color `#3C3C3C`
- **3 columns** separated by dark vertical dividers:
  - Left: X 42–308 (267px)
  - Divider 1: X 309–312 (4px), color `#1E1E19`
  - Center: X 313–613 (301px)
  - Divider 2: X 614–615 (2px), color `#320D2E`
  - Right: X 616–866 (251px)
- Right green border: X 863–866, color `#C8E6D2`

### Validation
- Green credit bar with readable purple text
- 3-column frame visible with dark divider lines
- Columns are correctly sized and positioned

---

## TASK 5: B2 Left Panel (Year/Masam + Sunrise Table)

### What it renders
Background: salmon/peach `#F8B9A0`

#### Area 1: Year/Masam text (Y: 384–413)
- 2 lines of Telugu text, 7pt, color `#50281E`, left-aligned
- Line 1 (Y: 384–392): `monthly_data.b2_left.year_masam_line1`
- Line 2 (Y: 400–413): `monthly_data.b2_left.year_masam_line2`

#### Divider line (Y: 419–422, color `#5F3E34`)

#### Area 2: Sunrise/Sunset table (Y: 425–487)
- Header "సూ.ది.  అస్త" at Y: 425–433
- 4 data rows at Y positions: 440, 455, 471, 487
- Left sub-column (X: 55–165): sunrise times + sample dates
- Right sub-column (X: 175–303): sunset times
- Font: 5pt, left color `#554B53`, right color `#5A5058`
- Data from `monthly_data.sunrise_sunset`

### Data sources
- `monthly_data.b2_left` → year/masam text
- `monthly_data.sunrise_sunset` → 4 sample dates with sunrise/sunset times

### Validation
- Peach/salmon background fills left column
- 2 lines of year/masam text readable
- Sunrise/sunset table shows 4 rows with correct alignment

---

## TASK 6: B2 Center Panel (Year + Month Display)

### What it renders
Background: deep purple `#720F62`

#### Year number
- Position: left half of center panel (X: 325–446)
- Font: 46pt bold white `#FAF6FA`
- Right-aligned within the left half
- Content: `company_data.year` (e.g. "2025")

#### Month name Telugu
- Position: right half (X: 463–608)
- Font: 30pt bold decorative yellow `#FAE928`, with text shadow
- Left-aligned within the right half
- Content: `monthly_data.month_telugu` (e.g. "సెప్టెంబర్")

#### Decorative dots
- Position: Y 430–447, X 502–522
- Color: yellow `#FAE928`

#### Month name English
- Position: below Telugu name (X: 473–605, Y: 452–477)
- Font: 18pt bold uppercase white `#FAEBFA`
- Center-aligned
- Content: `monthly_data.month_english` (e.g. "SEPTEMBER")

### Layout
```
┌────────────────────────────────────┐
│                                    │  Purple bg #720F62
│   2025          సెప్టెంబర్           │  Year: 46pt white, Month: 30pt yellow
│                   :::              │  Decorative dots
│                SEPTEMBER           │  18pt white uppercase
│                                    │
└────────────────────────────────────┘
```

### Validation
- Deep purple background
- Year and month name are side-by-side (NOT stacked vertically)
- Yellow Telugu month name with shadow effect
- White English month name below, uppercase

---

## TASK 7: B2 Right Panel (Gulika Kalam Table)

### What it renders
Background: light green `#D2E6C8`

#### Title box (Y: 380–395)
- Background: slightly lighter green `#D2F0D2`
- Text: "గులిక కాలం :" at (X: 705–783, Y: 381–391)
- Font: 7pt bold red `#BE5050`, centered

#### 7-row table (Y: 396–487)
- Content X: 622–833
- Font: 6pt, color `#506955`
- Row pitch: 15px
- 4 columns per row:
  - Weekday name (X: 622–700) — e.g. "ఆదివారము"
  - Start time (X: 705–770) — e.g. "మ.3-00"
  - Marker (X: 770–790) — "ల"
  - End time (X: 800–833) — e.g. "4-30"
- Internal green border lines at X: 783–798 and X: 833–847
- Data from `monthly_data.gulika_kalam[]` (7 entries)

### Validation
- Light green background
- Title "గులిక కాలం :" in red, centered in title box
- 7 rows of weekday data, columns aligned
- All 7 weekdays from ఆదివారము to శనివారము

---

## TASK 8: B3 Grid Structure (7×6 Frame + Day Name Column)

### What we build
- `src/styles/grid.css`
- `src/scripts/grid-renderer.js`

### Grid frame (Y: 503–1241)
- 7 rows (SUN → SAT), ~105px each
- 6 columns: Col 0 (day names, 133px) + Cols 1–5 (date cells, ~130px each)
- **Horizontal dividers** (dark lines ~1-3px) at: Y = 503, 609, 715, 821, 927, 1029, 1135, 1241
- **Vertical dividers** (double-line with 6px gap) at: X = 175/183, 314/321, 453/460, 592/599, 730/738

### Day Name Column (Col 0, X: 42–175)
Each row has a colored header background:

| Row | Day | English | Telugu | BG Color |
|-----|-----|---------|--------|----------|
| 0 | SUN | SUN | ఆది | `#EA4C52` (red) |
| 1 | MON | MON | సోమ | `#9C5F92` (purple) |
| 2 | TUE | TUE | మంగళ | `#F18E4E` (orange) |
| 3 | WED | WED | బుధ | `#4EB07D` (green) |
| 4 | THU | THU | గురు | `#4AC1EC` (blue) |
| 5 | FRI | FRI | శుక్ర | `#98568C` (purple) |
| 6 | SAT | SAT | శని | `#E63CA0` (pink) |

Each day name cell contains:
- English day abbreviation (~10pt, white/light, bold)
- Telugu day name (~16pt, white/light, bold)
- Rahu kalam timing info (~5pt, 2 lines)

### Date cell backgrounds per row

| Row | BG Color |
|-----|----------|
| SUN | `#FFF800` (bright yellow) |
| MON–SAT | `#DCDC9B` (light cream/olive) — subtle per-row variations |

### Validation
- 7×6 grid visible with correct proportions
- Day name column on left with 7 colored headers
- Each day name shows English + Telugu + timing
- Grid dividers are double-line with gap (groove effect)
- Row 0 is SUN (not MON)

---

## TASK 9: Date Placement Algorithm + Date Cell Rendering

### Date placement algorithm
```
Input: days[] array from monthly_data (user provides day_of_week for each date)

For each day in days[]:
  row = map day_of_week to row index (SUN=0, MON=1, ... SAT=6)
  col = computed week number (1-5)

  Place date cell at grid[row][col]
```

The week column is derived from the position: the first occurrence of each weekday goes to col 1, second to col 2, etc.

### Date cell internal layout (130×105px)

```
┌──────────────────────────────────────────┐
│ 5px top margin                            │
│                                           │
│  [Moon ○/●]     DATE        [superscript] │
│  [Masam name]  NUMBER                     │
│  [Moon label]  (27-29pt bold)             │
│                                           │
│  Line 1: tithi info            (cell_y 55)│
│  Line 2: nakshatram info       (cell_y 69)│
│  Line 3: timing line 1         (cell_y 84)│
│  Line 4: timing line 2 (opt)   (cell_y 93)│
│                                           │
│ 3px bottom margin                         │
└──────────────────────────────────────────┘
```

### Date number rendering
- Font: 27-29pt bold
- Color: `#E62319` (RED) if `is_holiday === true`, else `#28281E` (dark)
- Single digit: center-right of cell
- Double digit: center of cell
- Corner radius on cells: ~8-10px

### Info lines (below date)
- Font: ~5-6pt, color `#504B32` (dark olive)
- Line 1: tithi from `days[].tithi`
- Line 2: nakshatram from `days[].nakshatram`
- Line 3: sunrise + timing from `days[].sunrise`
- Line 4: rahu kalam from `days[].rahu_kalam`

### Special markers
- `special_markers: ["పూర్ణ"]` → full moon symbol ○ top-left
- `special_markers: ["అమా"]` → new moon symbol ● top-left
- `is_second_saturday: true` → special formatting

### Data sources
- `monthly_data.days[]` — complete array of all days for the month

### Validation
- Dates placed in correct row (weekday) and column (week number)
- Holiday dates (Sundays, festivals) render in RED
- All 4 info lines visible in each cell
- Moon symbols appear on correct dates
- Date numbers are properly sized and positioned

---

## TASK 10: Festival Panel Logic + Rendering

### What we build
- `src/scripts/festival-renderer.js`

### Festival placement algorithm
```
1. After placing all dates in grid, identify EMPTY cells
2. Empty cells = cells in cols 1-5 where no date was placed
3. Group adjacent empty cells in the same column (vertical merge)
4. Each group becomes a festival panel
5. Split festival list across panels: LEFT block first, RIGHT block second
```

### Panel backgrounds

| Condition | Background |
|-----------|------------|
| Small block (1-3 rows) OR in SUN row | Yellow `#FAF411` |
| Large block (4+ rows) | Pink `#FBCDDC` |

### Panel content
- Title: "పండుగలు" — 12pt bold red `#D22818`, once per block, at top
- Festival entries: `{date}.{festival_name}` format
- Font: 6pt regular Telugu
- Color on yellow bg: `#463B00` (dark olive)
- Color on pink bg: `#45232F` (dark maroon)
- Line pitch: 14-15px
- Left-aligned with ~5px margin

### Merged cell behavior
- Row dividers DO NOT pass through merged blocks
- One continuous rectangle with uniform background
- Text flows top-to-bottom ignoring row boundaries
- Only ONE title at the very top

### Festival flow
1. LEFT block (col 1 empties) gets first festivals
2. RIGHT block (col 5 empties) gets remaining festivals

### Data sources
- `monthly_data.festivals[]` — array of `{day, name, type}`

### Validation
- Empty cells correctly identified and merged
- Festival title "పండుగలు" appears once per block
- Festival entries numbered by date, not sequence
- Pink background on large merged blocks
- No row dividers cutting through merged panels
- Compare against September reference: SUN col1 (yellow) + WED-SAT col5 (pink)

---

## TASK 11: B4 Footer + B5 Bottom Border

### B4 Footer

#### Red gradient bar (Y: 1248–1255, 8px)
- Similar gradient to H11
- Spans content area width

#### Yellow text bar (Y: 1258–1301, 44px)
- Background: bright yellow `#FFF800`
- Text: monthly greeting from `monthly_data.footer_text`
- Font: 14pt bold Telugu, color red `#DC1E28`
- Alignment: center

### B5 Bottom Border (Y: 1302–1316, 15px)
- White/cream page bottom margin
- Yellow side borders continue from H1 sides

### Validation
- Red gradient bar visible below grid
- Yellow bar with red Telugu greeting text, centered
- Bottom of page has white margin with yellow side borders
- Footer text matches monthly_data

---

## TASK 12: Vertical Watermarks

### What it renders
- Left watermark: X 43–51, vertical text rotated 90°, color `#E61C21`
- Right watermark: X 876–880, vertical text rotated 90°, color `#E61C21`
- Text: `company_data.watermark_text` ("venkatramacalendar.com")
- Render layer: top overlay (on top of everything else)

### Validation
- Watermark text visible on left and right edges
- Text is rotated 90° (reads bottom-to-top or top-to-bottom)
- Does not obscure main content significantly

---

## TASK 13: Month Selector UI + Multi-Month Support

### What we build
- A simple control panel (outside the 924×1316 page) with:
  - Month dropdown (1–12) or clickable buttons
  - Year display (from company_data)
- When user selects a month:
  - Re-render B2 (sub-header content), B3 (entire grid), B4 (footer text)
  - Header (H1-H12) + B1 stay the same (company data doesn't change)

### How it works
```
User selects month →
  monthData = monthly.months[selectedIndex] →
  clearB2Content() + clearB3Grid() + clearB4Footer() →
  renderB2(monthData) + renderB3(monthData) + renderB4(monthData)
```

### Data requirement
- `monthly_data.json` must contain entries for all 12 months (user provides)
- Each month entry has the same structure (days[], festivals[], etc.)

### Validation
- Switching months re-renders grid correctly
- No artifacts from previous month remain
- Header stays unchanged across months

---

## TASK 14: PNG Export

### What we build
- Export button (outside the 924×1316 page)
- Uses **html2canvas** library to capture the page div as a canvas
- Downloads as PNG: `Venkatrama-Calendar-{MONTH}-{YEAR}.png`

### Implementation
```javascript
async function exportPNG(monthName, year) {
  const page = document.getElementById('calendar-page');
  const canvas = await html2canvas(page, {
    width: 924,
    height: 1316,
    scale: 1,            // exact pixel match
    useCORS: true,       // for cross-origin images (Google Fonts)
    backgroundColor: null
  });

  const link = document.createElement('a');
  link.download = `Venkatrama-Calendar-${monthName}-${year}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
```

### Validation
- Exported PNG is exactly 924×1316px
- All Telugu text renders correctly (no missing glyphs)
- Gradients and colors match on-screen rendering
- Logo and badge images are included

---

## TASK 15: Pixel-Perfect Validation Against Reference

### What we do
- Render September 2025 with the provided data
- Overlay/compare against `assets/VenkatramaCoTeluguCalendarColour202509.png`
- Fix any misalignments, color differences, font sizing issues

### Zone-by-zone checklist
- [ ] H1-H2: Top borders and gradients
- [ ] H3: Copyright bar position, frame beveling
- [ ] H5: Logo position, company name size/shadow, contact lines
- [ ] H7-H9: Red bars correct height
- [ ] H10-H12: Gradient strips match
- [ ] B1: Green bar text positioning
- [ ] B2-LEFT: Year/masam text, sunrise table
- [ ] B2-CENTER: Year + month side-by-side, colors correct
- [ ] B2-RIGHT: Gulika kalam table alignment
- [ ] B3 Grid: Row heights, column widths, divider positions
- [ ] B3 Day names: Colors, text positioning
- [ ] B3 Date cells: Number size, info line positions, holiday colors
- [ ] B3 Festivals: Correct cells, merge behavior, backgrounds
- [ ] B4: Footer text position and color
- [ ] B5: Bottom border
- [ ] Watermarks: Position and rotation

### Tuning areas
- Font size fine-tuning (pt to px conversion at 103 DPI)
- Gradient smoothness
- Text shadow/emboss effects
- Cell border radius rendering
- Telugu ligature rendering

---

## Summary: Task Dependency Map

```
TASK 1  (Scaffold)
  ↓
TASK 2  (Header H1-H6)
  ↓
TASK 3  (Header H7-H12)
  ↓
TASK 4  (B1 + B2 Frame)
  ↓
TASK 5  (B2 Left)  ──┐
TASK 6  (B2 Center) ──┼── can be parallel after Task 4
TASK 7  (B2 Right)  ──┘
  ↓
TASK 8  (B3 Grid Frame + Day Names)
  ↓
TASK 9  (Date Cells)
  ↓
TASK 10 (Festival Panels)
  ↓
TASK 11 (Footer B4 + B5)
  ↓
TASK 12 (Watermarks)
  ↓
TASK 13 (Month Selector)
  ↓
TASK 14 (PNG Export)
  ↓
TASK 15 (Pixel-Perfect Validation)
```

**Total: 15 tasks. Tasks 5/6/7 can run in parallel. All others are sequential.**