# VENKATRAMA CALENDAR — DATE CELL DEEP DIVE SPEC
## Complete Internal Layout for Rendering Any Date

**Source:** September 2025 + January, February, March, July cross-verification  
**Purpose:** Given user-provided daily data, render any date cell pixel-perfect

---

## 1. CELL DIMENSIONS

| Property | Value |
|----------|-------|
| **Width** | ~130px (varies 130-132px by column) |
| **Height** | ~105px (consistent across rows) |
| **Corner radius** | ~8-10px rounded corners |
| **Border** | Double-line groove (2 dark lines ~1px each, ~6px gap) |

---

## 2. CELL INTERNAL LAYOUT MAP

```
┌──────────────────────────────────────────────────────────────────┐
│ ~5px top margin                                                  │
│                                                                  │
│  ┌─TOP-LEFT──────────┐              ┌─TOP-RIGHT────┐            │
│  │ [Moon symbol ○/●]  │              │  Telugu day   │            │
│  │ [Masam name]       │   DATE       │  superscript  │            │
│  │ [Moon label]       │  NUMBER      │  (e.g. "30")  │            │
│  └────────────────────┘  (LARGE)     └───────────────┘            │
│                                                                  │
│                                                                  │
│  ─────────── date area ends ──────────────────────               │
│                                                                  │
│  Line 1: {tithi_info}                              (~cell_y 55)  │
│  Line 2: {nakshatram_info}                         (~cell_y 70)  │
│  Line 3: {timing_info_1}                           (~cell_y 85)  │
│  Line 4: {timing_info_2} (OPTIONAL)                (~cell_y 95)  │
│                                                                  │
│ ~5px bottom margin                                               │
└──────────────────────────────────────────────────────────────────┘
```

### Vertical Zone Map (within cell, cell_y = pixels from cell top)

| Zone | cell_y Start | cell_y End | Height | Content |
|------|-------------|-----------|--------|---------|
| Top margin | 0 | 4 | 5px | Empty (border transition) |
| Date area | 5 | 50 | 46px | Date number + top-left + top-right |
| Gap | 51 | 54 | 4px | Empty |
| Line 1 | 55 | 63 | 9px | Tithi info |
| Gap | 64 | 68 | 5px | Empty |
| Line 2 | 69 | 77 | 9px | Nakshatram info |
| Gap | 78 | 83 | 6px | Empty |
| Line 3 | 84 | 92 | 9px | Timing line 1 |
| Line 4 (opt) | 93 | 101 | 9px | Timing line 2 or extra |
| Bottom margin | 102 | 104 | 3px | Empty (border transition) |

**When 4 lines:** Lines compress slightly (~13px pitch instead of ~15px)  
**When 3 lines:** Lines have more spacing (~15px pitch, centered in info zone)

---

## 3. DATE NUMBER

### Position & Size

| Property | Single Digit (1-9) | Double Digit (10-31) |
|----------|-------------------|---------------------|
| **Font height** | ~39px (~27pt) | ~39-42px (~27-29pt) |
| **Vertical position** | cell_y 8-46 | cell_y 8-48 |
| **Horizontal** | Center-right of cell | Center of cell |
| **Style** | Bold | Bold |
| **Width** | ~25-30px | ~55-70px |

### Color Rule

| Condition | Color | RGB | Hex |
|-----------|-------|-----|-----|
| **is_holiday = true** | RED | (230, 35, 25) | `#E62319` |
| **is_holiday = false** | DARK/BLACK | (40, 32, 28) | `#28201C` |

**is_holiday applies to:** All Sundays, national holidays, festival days, 2nd Saturdays, or any date the user marks as holiday.

The user provides `is_holiday: true/false` for each date. The renderer just follows the flag.

---

## 4. TOP-LEFT AREA (Optional Content)

Three possible states — user provides which one applies:

### State A: MASAM NAME (Telugu month start)
| Property | Value |
|----------|-------|
| **Appears when** | A new Telugu month begins on this date |
| **Content** | Telugu masam name (e.g., "భాద్రపద", "ఆశ్వీయు") |
| **Font size** | ~7-8pt bold |
| **Color** | RED ~RGB(210, 40, 30) for holiday dates; Dark brown for weekdays |
| **Position** | Top-left of cell, cell_x=3-70, cell_y=8-24 |
| **Layout** | Text sits LEFT of and ABOVE the date number |

### State B: MOON PHASE MARKER
| Property | Value |
|----------|-------|
| **Appears when** | Pournami (full moon) or Amavasya (new moon) date |
| **Circle icon** | ○ hollow (Pournami) or ● filled (Amavasya) |
| **Icon size** | ~12-14px diameter |
| **Icon position** | cell_x=5-18, cell_y=3-16 |
| **Label text** | "పౌర్ణ" (Pournami) or "అమా" (Amavasya) |
| **Label font** | ~6pt bold |
| **Label color** | Same as date number color (RED if holiday, DARK if not) |
| **Label position** | Below icon, cell_x=3-35, cell_y=18-30 |

### State C: EMPTY
Most dates have nothing in the top-left area.

---

## 5. TOP-RIGHT SUPERSCRIPT

| Property | Value |
|----------|-------|
| **Content** | Telugu panchangam day number within the Telugu month |
| **Font size** | ~4pt (very small, ~6px) |
| **Color** | Dark, same palette as info text |
| **Position** | Top-right corner, cell_x=110-128, cell_y=5-14 |
| **Appears** | On ALL date cells |
| **Data** | User provides as `telugu_day_number` per date |
| **Format** | Numeric, 1-2 digits, often with a small Telugu character |

---

## 6. INFO LINES (Below Date Number)

### Content Structure

Each date has 3 mandatory lines + 1 optional line:

| Line | Content Type | Abbreviation Key | Example |
|------|-------------|-------------------|---------|
| **Line 1** | Tithi info | {paksha}.{tithi}.{time_ref}.{time} | "శు.నవ.రా.11.23" |
| **Line 2** | Nakshatram info | {nakshatram}.{time_ref}.{time} | "క్షేష్ట.రా.6.03" |
| **Line 3** | Timing info (varjyam/durmuhurtam) | Varies | "ఉప 6.28 ల 8.02" |
| **Line 4** | Additional timing OR extra note | Optional | "రావ 5.12 ల" or "నవమి తిథి" |

### Common Abbreviations in Info Lines
| Telugu Abbr | Meaning |
|-------------|---------|
| శు | Shukla (bright half) |
| బ | Bahula/Krishna (dark half) |
| రా | Ratri (night) |
| ఉ | Udayam (morning) |
| పూ | Punnami |
| ల | to (separator in time ranges) |
| వ | Varaku (until) |
| ఉప | Upayanam? / Timing marker |
| రావ | Rahu kalam |
| మప | Mandi panchaka? |
| శెప | Sega? / Another timing marker |
| వర్జము లేదు | No varjyam (nothing unfavorable) |

### Font Properties

| Property | Value |
|----------|-------|
| **Font size** | ~5-6pt (~7-8px at 103 DPI) |
| **Style** | Regular Telugu |
| **Color** | Dark olive-gray ~RGB(60, 55, 35) `#3C3723` |
| **Alignment** | CENTER-aligned within cell width |
| **Line pitch** | ~14-15px (3 lines), ~12-13px (4 lines) |

### Adaptive Layout
- **3 info lines:** 15px pitch, comfortable spacing, vertically centered in info zone
- **4 info lines:** 12-13px pitch, compressed, fills available space
- **5+ lines:** Seen in special cases (Jan 8 has 5 lines including parenthetical note) — text compresses to ~11px pitch

---

## 7. CELL BACKGROUND COLORS

The cell background is determined by the **row** (day of week):

| Row | Day | Background Color | RGB | Hex |
|-----|-----|-----------------|-----|-----|
| 1 | SUN | Bright Yellow | (255, 248, 0) | `#FFF800` |
| 2 | MON | Light Cream | (248, 246, 170) | `#F8F6AA` |
| 3 | TUE | Light Cream | (248, 246, 170) | `#F8F6AA` |
| 4 | WED | Light Cream | (248, 246, 170) | `#F8F6AA` |
| 5 | THU | Light Cream | (248, 246, 170) | `#F8F6AA` |
| 6 | FRI | Golden Yellow | (248, 240, 20) | `#F8F014` |
| 7 | SAT | Very Light Cream | (250, 250, 190) | `#FAFABE` |

**Note:** SUN and FRI rows have noticeably YELLOW backgrounds; MON-THU are cream; SAT is very light.

---

## 8. DATA MODEL — What User Provides Per Date

```json
{
  "date": 24,
  "is_holiday": false,
  "top_left": {
    "type": "none",
    "masam_name": null,
    "moon_phase": null,
    "moon_label": null
  },
  "top_right_telugu_day": "30",
  "info_lines": [
    "శు.తదివి.4.18",
    "చిత్తవ3.11", 
    "రావ 9.22 ల 11.08"
  ]
}
```

### Example — Date with Masam label:
```json
{
  "date": 1,
  "is_holiday": false,
  "top_left": {
    "type": "masam",
    "masam_name": "భాద్రపద"
  },
  "top_right_telugu_day": "02",
  "info_lines": [
    "శు.నవ.రా.11.23",
    "క్షేష్ట.రా.6.03",
    "రావ 2.43 ల 4.27"
  ]
}
```

### Example — Date with Moon marker:
```json
{
  "date": 7,
  "is_holiday": true,
  "top_left": {
    "type": "moon",
    "moon_phase": "pournami",
    "moon_label": "పౌర్ణ"
  },
  "top_right_telugu_day": "03",
  "info_lines": [
    "రా.11.57",
    "శత.రా.10.59",
    "ఉప 6.28 ల 8.02",
    "శెప 5.12 ల"
  ]
}
```

### Example — Date with New Moon:
```json
{
  "date": 21,
  "is_holiday": true,
  "top_left": {
    "type": "moon",
    "moon_phase": "amavasya",
    "moon_label": "అమా"
  },
  "top_right_telugu_day": "ల",
  "info_lines": [
    "రా.12.06",
    "పుబ్బ.ఉ.9.58",
    "సెప 5.33 ల 7.14"
  ]
}
```

---

## 9. RENDERING ALGORITHM

```
function renderDateCell(cell_data, row_day, cell_x, cell_y, cell_w, cell_h):
    
    # 1. Draw rounded rectangle background
    bg_color = getRowBackground(row_day)
    drawRoundedRect(cell_x, cell_y, cell_w, cell_h, radius=8, fill=bg_color)
    
    # 2. Determine text color
    if cell_data.is_holiday:
        date_color = RED  # (230, 35, 25)
    else:
        date_color = DARK  # (40, 32, 28)
    
    info_color = OLIVE_DARK  # (60, 55, 35)
    
    # 3. Draw TOP-LEFT content (if any)
    if cell_data.top_left.type == "masam":
        drawText(cell_data.top_left.masam_name, 
                 x=cell_x+5, y=cell_y+10, 
                 font_size=7pt, bold=true, color=date_color)
    
    elif cell_data.top_left.type == "moon":
        if cell_data.top_left.moon_phase == "pournami":
            drawCircle(cell_x+12, cell_y+10, r=6, fill=none, stroke=date_color)
        else:  # amavasya
            drawCircle(cell_x+12, cell_y+10, r=6, fill=date_color)
        drawText(cell_data.top_left.moon_label,
                 x=cell_x+3, y=cell_y+22,
                 font_size=6pt, bold=true, color=date_color)
    
    # 4. Draw DATE NUMBER (large, center-right or center)
    date_str = str(cell_data.date)
    date_font_size = 27pt  # ~39px height
    
    if cell_data.top_left.type != "none":
        # Shift date right when top-left has content
        date_x = cell_x + cell_w * 0.55
    else:
        date_x = cell_x + cell_w * 0.5  # centered
    
    drawText(date_str, x=date_x, y=cell_y+8, 
             font_size=date_font_size, bold=true, 
             color=date_color, align=center)
    
    # 5. Draw TOP-RIGHT superscript
    drawText(cell_data.top_right_telugu_day,
             x=cell_x+cell_w-15, y=cell_y+6,
             font_size=4pt, color=info_color)
    
    # 6. Draw INFO LINES
    num_lines = len(cell_data.info_lines)
    info_zone_start = cell_y + 55
    
    if num_lines <= 3:
        line_pitch = 15
    elif num_lines == 4:
        line_pitch = 12
    else:
        line_pitch = 11
    
    for i, line in enumerate(cell_data.info_lines):
        line_y = info_zone_start + i * line_pitch
        drawText(line, x=cell_x+cell_w/2, y=line_y,
                 font_size=5.5pt, color=info_color, align=center)
```

---

## 10. SPECIAL CASES

### Jan 8 — Extra Line with Parenthetical
Some dates have a 5th line with explanatory text in parentheses:
```
"(సుకేళి+ద-అం) లగ్ర రిమలం"
```
This appears compressed at the bottom of the info zone.

### "వర్జము లేదు" (No Varjyam)
When there's no unfavorable timing period, line 3 shows this text instead of a time range.

### Masam + Moon on Same Date
If a Telugu month change AND a moon phase fall on the same date, both appear in the top-left area. The moon icon goes at the very top, masam name below it. (Rare case.)

### Long Info Text
When line content exceeds cell width, text automatically wraps or abbreviations are used. The font may compress to ~5pt.

---

## 11. CROSS-MONTH VALIDATION

| Property | Jan | Feb | Mar | Jul | Sep | Consistent? |
|----------|-----|-----|-----|-----|-----|-------------|
| Cell dimensions | ✓ | ✓ | ✓ | ✓ | ✓ | YES — same across all months |
| Date font size | ✓ | ✓ | ✓ | ✓ | ✓ | YES — same ~27pt |
| Red = holiday | ✓ | ✓ | ✓ | ✓ | ✓ | YES — user flag drives color |
| Info lines count | 3-5 | 3-4 | 3-4 | 3-4 | 3-4 | Varies per day |
| Superscript present | ✓ | ✓ | ✓ | ✓ | ✓ | YES — on every date |
| Row bg colors | ✓ | ✓ | ✓ | ✓ | ✓ | YES — same per day-of-week |
| Masam labels | ✓ | ✓ | ✓ | ✓ | ✓ | YES — on month-change dates |
| Moon markers | ✓ | ✓ | ✓ | ✓ | ✓ | YES — on full/new moon dates |
