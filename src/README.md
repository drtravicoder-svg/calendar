# src/ — Renderer Implementation

This folder will contain the **HTML/CSS/JS calendar renderer**.

---

## 📂 Recommended File Structure

```
src/
├── index.html                 ← Main calendar page
├── styles/
│   ├── reset.css             ← CSS reset
│   ├── calendar.css          ← Main calendar styles
│   ├── header.css            ← Header zones (H1-H12)
│   ├── subheader.css         ← B1 + B2 sub-header
│   ├── grid.css              ← B3 calendar grid
│   └── footer.css            ← B4 + B5 footer
├── scripts/
│   ├── main.js               ← Entry point, JSON loader
│   ├── renderer.js           ← Main rendering logic
│   ├── header-renderer.js    ← Header zone renderer
│   ├── subheader-renderer.js ← B1+B2 renderer
│   ├── grid-renderer.js      ← B3 grid + date cells
│   ├── festival-renderer.js  ← Festival panel logic
│   └── export.js             ← PNG export (html2canvas)
└── fonts/
    └── (Telugu fonts if needed locally)
```

---

## 🎯 Implementation Approach

### 1. Start with HTML Structure

Create a fixed-size canvas (924×1316px) with absolute positioning for all zones:

```html
<div id="calendar-page">
  <!-- Header zones H1-H12 -->
  <div class="zone zone-h1"></div>
  <div class="zone zone-h2"></div>
  <!-- ... -->

  <!-- Body zones B1-B5 -->
  <div class="zone zone-b1"></div>
  <div class="zone zone-b2">
    <div class="b2-left"></div>
    <div class="b2-center"></div>
    <div class="b2-right"></div>
  </div>
  <div class="zone zone-b3">
    <!-- 7×6 grid -->
  </div>
  <!-- ... -->
</div>
```

### 2. Load JSON Data

```javascript
// main.js
async function loadData() {
  const design = await fetch('../data/design_template.json').then(r => r.json());
  const company = await fetch('../data/company_data.json').then(r => r.json());
  const monthly = await fetch('../data/monthly_data.json').then(r => r.json());

  return { design, company, monthly };
}
```

### 3. Render Each Zone

**Phase 1: Header (H1-H12)**
- Read `specs/header_deep_dive_spec.md`
- Create divs for each H1-H12 sub-zone
- Apply gradients, borders, text from JSON
- Place logo/badge images
- Render company name, contact info, credits

**Phase 2: Sub-Header (B1+B2)**
- Read `specs/B2_subheader_spec.md`
- Render B1 credit bar (green bg, centered text)
- Render B2 3-column panel:
  - LEFT: Telugu year + sunrise/sunset table
  - CENTER: Year + month name (side-by-side!)
  - RIGHT: Gulika kalam table

**Phase 3: Calendar Grid (B3)**
- Read `specs/B3_grid_spec.md`, `specs/date_cell_spec.md`
- Create 7×6 grid (rows = weekdays SUN-SAT)
- Column 0: Day name headers
- Columns 1-5: Date cells using placement algorithm:
  ```javascript
  for (let date = 1; date <= numDays; date++) {
    const weekday = (startDay + date - 1) % 7;
    const weekCol = Math.floor((date - 1 + startDay) / 7) + 1;
    placeDate(date, weekday, weekCol);
  }
  ```
- Render festival panels in empty cells (merge vertically)

**Phase 4: Footer (B4+B5)**
- Render red gradient bar
- Render yellow text bar with monthly greeting
- Bottom border

---

## 🔑 Critical Implementation Notes

### Telugu Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;700;900&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Noto Sans Telugu', sans-serif;
}
```

### Absolute Positioning Pattern

All zones use pixel-exact positioning from `design_template.json`:

```css
.zone-h1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 924px;
  height: 16px;
  background: #FDF800;
}
```

### Gradient Rendering

Use `linear-gradient()` with exact color stops from JSON:

```css
.zone-h2 {
  background: linear-gradient(to bottom,
    #FBDD12 0%,
    #C88700 33%,
    #BC4500 67%,
    #F78457 100%
  );
}
```

### Date Cell Layout

Each cell (130×105px) uses nested absolute positioning for:
- Top-left zone (masam/moon)
- Top-right zone (Telugu day number)
- Center date number (27pt bold)
- Info lines (4 lines at 5.5pt)

### Holiday Coloring

```javascript
const dateColor = day.is_holiday ? '#E62319' : '#28201C';
```

---

## 🧪 Testing Strategy

### Visual Comparison
1. Render September 2025
2. Open `assets/VenkatramaCoTeluguCalendarColour202509.png` in separate window
3. Compare zone-by-zone (use browser devtools to measure)

### Zone Validation Checklist
- [ ] Header gradients match (H2, H10, H11, H12)
- [ ] Logo/badge positioned correctly
- [ ] Company name centered, no overflow
- [ ] B2 center: year and month side-by-side (NOT stacked)
- [ ] Grid rows are weekdays (SUN first!)
- [ ] Date placement algorithm correct
- [ ] Festival panels merge vertically
- [ ] Holiday dates in RED
- [ ] Moon markers (○/●) display correctly

---

## 📤 Export Implementation

Use `html2canvas.js` for PNG export:

```javascript
async function exportPNG() {
  const canvas = await html2canvas(document.getElementById('calendar-page'), {
    width: 924,
    height: 1316,
    scale: 1
  });

  const link = document.createElement('a');
  link.download = `venkatrama-calendar-${monthName}-2025.png`;
  link.href = canvas.toDataURL();
  link.click();
}
```

---

## 🎨 Styling Guidelines

### No Hardcoded Values
❌ BAD:
```css
.company-name {
  color: #E61C21;
  font-size: 41pt;
}
```

✅ GOOD:
```javascript
const color = design.colors.primary_red;
const fontSize = design.header.H5_branding_area.company_name.font_size;
element.style.color = color;
element.style.fontSize = fontSize;
```

### CSS Custom Properties
Use CSS variables for colors from JSON:

```javascript
// Set colors as CSS variables
for (const [key, value] of Object.entries(design.colors)) {
  document.documentElement.style.setProperty(`--${key}`, value);
}
```

```css
.holiday-date {
  color: var(--date_holiday_red);
}
```

---

## 📊 Data Access Patterns

### Reading Design Template
```javascript
// Zone dimensions
const h1Height = design.header.H1.height;
const h1YStart = design.header.H1.y_start;

// Colors
const borderYellow = design.colors.border_yellow;

// Grid
const rowHeight = design.B3_grid.row_height;
```

### Reading Company Data
```javascript
const companyName = company.company.name_telugu;
const logoPath = `../assets/${company.company.logo_file}`;
const year = company.year;
```

### Reading Monthly Data
```javascript
// Select month (0-11)
const monthData = monthly.months[monthIndex];

const monthName = monthData.month_telugu;
const startDay = monthData.start_day;
const numDays = monthData.num_days;
const festivals = monthData.festivals;
const days = monthData.days;
```

---

## 🚀 Getting Started

1. Create `index.html` with basic structure
2. Load all 3 JSON files
3. Start with Phase 1: Header
4. Test against September reference image
5. Proceed zone-by-zone

---

**Remember:** This renderer is a **stateless layout engine**. All intelligence lives in the JSON data. Your code should be generic and data-driven.
