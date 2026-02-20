# VENKATRAMA CALENDAR — DATA & DESIGN SEPARATION SPEC
## Input Format, Alignment Rules & Multi-Page Architecture

---

## 1. ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────┐
│                 12-PAGE CALENDAR                 │
├─────────────────────────────────────────────────┤
│                                                  │
│  LAYER 1: DESIGN TEMPLATE (Fixed)               │
│  ├── Borders, gradients, spacing, effects       │
│  ├── Zone positions (H1-H12, body zones)        │
│  └── Font styles, colors, layout rules          │
│                                                  │
│  LAYER 2: COMPANY DATA (Same all 12 pages)      │
│  ├── Company name, logo, badge                  │
│  ├── Contact info, branches                     │
│  ├── Copyright, credits, watermarks             │
│  └── App promo                                  │
│                                                  │
│  LAYER 3: MONTHLY DATA (Changes per month)      │
│  ├── Month name (Telugu + English)              │
│  ├── Year                                       │
│  ├── Panchangam info bar                        │
│  ├── Festivals list for the month               │
│  ├── Sunrise/sunset times                       │
│  └── Rahu kalam, gulika kalam tables            │
│                                                  │
│  LAYER 4: DAILY DATA (Changes per day)          │
│  ├── Date number                                │
│  ├── Tithi, Nakshatram                          │
│  ├── Sunrise, sunset times                      │
│  ├── Rahu kalam time                            │
│  ├── Special day / festival markers             │
│  └── Color coding (holiday=red, etc.)           │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 2. DATA INPUT FORMAT

### 2.1 Company Data (JSON) — ONE FILE, used for all 12 pages

**File:** `company_data.json`

```json
{
  "company": {
    "name_telugu": "వేంకటరామ అండ్ కో.",
    "name_english": "Venkatrama & Co.",
    "logo_file": "v_logo.png",
    "badge_file": "jrrc_badge.png",
    "decorative_symbol": "శ్రీ",
    "website": "https://venkatramacalendar.com",
    "app_url": "venkatramacalendar.com/app"
  },

  "contact": {
    "tagline": "ఎడ్యుకేషనల్ పబ్లిషర్స్, బుక్ సెల్లర్స్ - ఏలూరు - 2",
    "phone": "08812-230098",
    "cell": "9491174515",
    "email": "venkatramacoweb@gmail.com"
  },

  "branches": ["హైదరాబాద్", "విజయవాడ", "తాడేపల్లిగూడెం"],

  "credits": {
    "panchangam": "పంచాంగకర్తలు: క్రీ.శే|| బ్రహ్మశ్రీ తంగిరాల పూర్ణయ్య సిద్ధాంతి గారి...",
    "publisher": "పట్టాభిరామయ్య మరియు రామనాథ సిద్ధాంతి, రేలంగి"
  },

  "promo": {
    "app_text": "మా క్యాలెండర్ యాప్ డౌన్‌లోడ్ చేయండి"
  },

  "watermark": "venkatramacalendar.com",
  "year": 2025,
  "copyright_text": "© {year} {name_english}, Official Permission Website - {website}"
}
```

### 2.2 Monthly Data (JSON) — ONE FILE per month OR single file with 12 entries

**File:** `monthly_data.json`

```json
{
  "months": [
    {
      "month_number": 1,
      "month_telugu": "జనవరి",
      "month_english": "JANUARY",
      "year": 2025,
      "telugu_year_name": "శ్రీ విశ్వావసు నామ సంవత్సర",
      "masam": "పుష్యమాసం / మాఘమాసం",

      "sunrise_sunset": {
        "dates": [1, 11, 21, 30],
        "sunrise": ["6-49", "6-51", "6-52", "6-54"],
        "sunset": ["5-49", "5-51", "5-56", "5-49"]
      },

      "rahu_kalam": {
        "ఆదివారం": "4-30",
        "సోమవారం": "3-00"
      },

      "gulika_kalam": {
        "ఆదివారం": "మ.3-00",
        "సోమవారం": "ఉ.1-30"
      },

      "festivals": [
        {
          "day": 1,
          "name": "నూతన సంవత్సర దినోత్సవం",
          "type": "general"
        },
        {
          "day": 14,
          "name": "భోగి పండుగ",
          "type": "major_festival"
        },
        {
          "day": 15,
          "name": "మకర సంక్రాంతి",
          "type": "major_festival"
        },
        {
          "day": 26,
          "name": "గణతంత్ర దినోత్సవం",
          "type": "national_holiday"
        }
      ],

      "days": [
        {
          "date": 1,
          "day_of_week": "WED",
          "tithi": "శు.చతుర్ధి",
          "nakshatram": "ధనిష్ఠ",
          "sunrise": "రా.1.07",
          "other_info": "వర్జ్యము లేదు.",
          "is_holiday": false,
          "is_second_saturday": false,
          "special_markers": []
        }
      ]
    }
  ]
}
```

---

## 3. DESIGN TEMPLATE (Fixed layout rules)

**File:** `design_template.json` — This is what WE build from the analysis. User does NOT edit this.

```json
{
  "template_version": "1.0",
  "page_size": { "width": 924, "height": 1316, "dpi": 103 },

  "header": {
    "height": 346,
    "zones": "... (all H1-H12 from spec) ...",
    "same_all_pages": true
  },

  "sub_header": {
    "height": "TBD",
    "changes": "monthly",
    "contains": ["telugu_year", "masam", "month_name", "sunrise_table", "rahu_kalam_table"]
  },

  "day_grid": {
    "height": "TBD",
    "changes": "monthly",
    "rows": 7,
    "columns": 5,
    "contains": ["day_name_header", "daily_cells"],
    "daily_cell_changes": "daily"
  },

  "footer": {
    "height": "TBD",
    "changes": "monthly",
    "contains": ["festivals_list", "footer_promo"]
  },

  "alignment_rules": "... (see section 4) ..."
}
```

---

## 4. ALIGNMENT RULES (Critical for Text Rendering)

### 4.1 The Core Problem

Text length varies. "హైదరాబాద్" is shorter than "హైదరాబాద్, విజయవాడ, తాడేపల్లిగూడెం". 
If we hardcode X positions, longer text overflows and shorter text looks off-center.

### 4.2 Alignment Strategies Per Element

| Element | Alignment | Anchor | Overflow Rule |
|---------|-----------|--------|---------------|
| **Company name (T1)** | CENTER | X=462 (page center) | SCALE font down if exceeds X=200-750 |
| **Copyright (H3)** | CENTER | X=462 | Truncate or reduce font if > frame width |
| **Contact line (T3b)** | CENTER | X=462 | Wrap to 2 lines if too long |
| **Branches (T4)** | CENTER | X=462 | Add "..." if > 4 branches |
| **App promo (T5)** | CENTER | X=462 | Scale font down |
| **App URL (T6)** | CENTER | X=462 | Fixed, rarely changes |
| **H8 Left text** | LEFT | X=100 | Truncate at X=490 |
| **H8 Right text** | RIGHT | X=840 | Truncate at X=500 |
| **Month name** | CENTER | Content area center | Scale font |
| **Day numbers** | CENTER | Cell center | Fixed size |
| **Day text (tithi etc.)** | LEFT | Cell left + padding | Truncate or reduce font |

### 4.3 Safe Zones (text must stay within)

```
HEADER TEXT SAFE ZONE:
┌─────────────────────────────────────────────┐
│  Left limit    Center anchor   Right limit  │
│  X=140         X=462           X=780        │
│                                              │
│  Company name: X=200 ←───────→ X=750       │
│  Contact info: X=140 ←───────→ X=738       │
│  Branches:     X=104 ←───────→ X=748       │
│  App promo:    X=190 ←───────→ X=736       │
│  App URL:      X=242 ←───────→ X=662       │
└─────────────────────────────────────────────┘
```

### 4.4 Auto-Fit Algorithm

For each text element:
```
1. Render text at default font_size_pt
2. Measure rendered width in pixels
3. IF width > (right_limit - left_limit):
   a. Try reducing font_size by 1pt, re-measure
   b. Repeat until it fits OR minimum font reached
   c. IF still too wide at min font → truncate with "..."
4. Calculate X_start = center_anchor - (rendered_width / 2)
5. Place text at (X_start, Y_position)
```

### 4.5 Multi-Line Rules

Some elements may need line wrapping:

| Element | Max Lines | Line Height | Wrap Behavior |
|---------|-----------|-------------|---------------|
| Company name | 1 | 59px | Scale down, never wrap |
| Contact tagline | 1 | 10px | Truncate |
| Contact main (phone/email) | 2 | 18px total | Wrap at comma if needed |
| Branches | 1 | 14px | Truncate with "..." |
| H8 credit text | 1 each | 16px | Truncate |

---

## 5. THREE-LEVEL CHANGE MATRIX

### Level 0: NEVER CHANGES (Design Template)
- All border structures, gradients, spacing
- Zone positions, heights
- Font styles, effect types
- Color palette (unless rebranded)

### Level 1: SAME ALL 12 PAGES (Company Data)
| Element | Zone | Notes |
|---------|------|-------|
| Yellow borders | H1, sides | Fixed |
| Gradient borders | H2, H10, H11 | Fixed |
| Copyright bar | H3 | Year changes annually only |
| Company name | H5-T1 | Same all pages |
| V Logo | H5-LEFT | Same all pages |
| JRRC Badge | H5-RIGHT | Same all pages |
| Decorative symbol | H5-T0 | Same all pages |
| Inverted triangle | H5-T2 | Same all pages |
| Contact info | H5-T3 | Same all pages |
| Branches | H5-T4 | Same all pages |
| App promo text | H5-T5 | Same all pages |
| App URL | H5-T6 | Same all pages |
| Warm separator | H6 | Fixed |
| Red bars | H7, H9 | Fixed |
| Embossed credit bar | H8 | Same all pages |
| Yellow/red gradient | H10, H11 | Fixed |
| Watermarks | Both sides | Same all pages |

### Level 2: CHANGES MONTHLY
| Element | Notes |
|---------|-------|
| Month name (Telugu + English) | "సెప్టెంబర్ / SEPTEMBER" |
| Telugu year name | "శ్రీ విశ్వావసు..." |
| Masam name | Changes with Telugu month |
| Sunrise/sunset table | 4 sample dates per month |
| Rahu kalam table | Fixed per weekday but may vary |
| Gulika kalam table | Same as above |
| Festivals list | Different set per month |
| Day grid layout | 28-31 days, different start day |

### Level 3: CHANGES DAILY (within month)
| Element | Notes |
|---------|-------|
| Date number | 1-31 |
| Day of week | Determines row position |
| Tithi | శు.చతుర్ధి, etc. |
| Nakshatram | ధనిష్ఠ, etc. |
| Sunrise/sunset for that day | Specific time |
| Rahu kalam time | Specific time |
| Holiday marker | Red color for Sundays/festivals |
| Second Saturday marker | Special formatting |
| Festival name in cell | If applicable |

---

## 6. INPUT VALIDATION RULES

### 6.1 Required Fields (cannot be empty)
```
company.name_telugu    — must have company name
company.name_english   — for copyright line
company.logo_file      — image must exist
contact.phone          — at least one contact
year                   — numeric, 4 digits
months[].month_number  — 1-12
months[].days[]        — at least 28 entries per month
```

### 6.2 Length Limits
```
company.name_telugu    — max 30 Telugu chars (fits at 41pt)
contact.tagline        — max 60 chars
contact.phone          — max 15 chars
contact.email          — max 40 chars
branches[]             — max 5 entries, max 15 chars each
credits.panchangam     — max 80 chars (fits in H8 left)
credits.publisher      — max 60 chars (fits in H8 right)
```

### 6.3 Text Overflow Handling
```
IF text exceeds safe zone:
  Step 1: Reduce font by 1pt (min: default - 3pt)
  Step 2: If still overflow → truncate with "..."
  Step 3: Log warning for manual review

NEVER: Let text overlap into logo/badge zones
NEVER: Let text overflow outside content area (X=42-882)
ALWAYS: Maintain minimum 10px gap between text and logo/badge
```

---

## 7. RENDERING PIPELINE (How to generate a page)

```
FOR each month (1-12):

  1. LOAD design_template.json (fixed layout)
  2. LOAD company_data.json (same all pages)
  3. LOAD monthly_data.json → select current month
  
  4. RENDER HEADER (Layers bottom-up):
     a. Fill background (yellow borders, cream)
     b. Draw gradient borders (H2, H10, H11, H12)
     c. Draw H3 frame structure
     d. Render H3 copyright text (auto-centered)
     e. Place V Logo image at position
     f. Place JRRC Badge image at position
     g. Render T0 decorative symbol
     h. Render T1 company name (auto-centered, check overflow)
     i. Draw T2 inverted triangle
     j. Render T3 contact info (auto-centered, check overflow)
     k. Render T4 branches (auto-centered, check overflow)
     l. Render T5 app promo (auto-centered)
     m. Render T6 app URL (auto-centered)
     n. Draw H6 separator
     o. Fill H7, H9 red bars
     p. Render H8 embossed text (left=white, right=yellow)
     q. LAST: Render watermarks as overlay
  
  5. RENDER SUB-HEADER (monthly data)
     [TO BE SPECIFIED]
  
  6. RENDER DAY GRID (daily data)
     [TO BE SPECIFIED]
  
  7. RENDER FOOTER (monthly festivals)
     [TO BE SPECIFIED]
  
  8. EXPORT as PNG at 103 DPI
  9. VALIDATE: check no text overflow warnings
```

---

## 8. SUMMARY

| Concern | Status |
|---------|--------|
| **Data separated from design?** | ✅ YES — 3 layers: template (fixed), company (annual), monthly/daily |
| **Input format defined?** | ✅ YES — JSON files for company + monthly data |
| **Alignment rules?** | ✅ YES — Center-anchored, auto-fit with font scaling |
| **Overflow handling?** | ✅ YES — Scale → truncate → warn |
| **12-page architecture?** | ✅ YES — Header same, body changes monthly, cells change daily |
| **Rendering pipeline?** | ✅ YES — Layer-by-layer bottom-up with validation |

### What's Left to Analyze:
1. **Sub-header zone** — panchangam info, month name, tables
2. **Day grid** — cell layout, typography, color coding
3. **Footer** — festivals list, bottom promo
4. **Font identification** — exact Telugu fonts used
5. **Day cell template** — internal layout of each daily cell
