# VENKATRAMA CALENDAR â€” B3 DAY GRID DEEP DIVE
## Zone B3 (Day Grid) + B4 (Footer) + B5 (Bottom Border)

**Source:** September 2025 page

---

## B3: MAIN CALENDAR GRID

| Property | Value |
|----------|-------|
| **Y Range** | 503-1241 (738px total including borders) |
| **Content Y** | 504-1240 (736px) |
| **X Range** | 42-869 (827px) |
| **Rows** | 7 (SUN first, SAT last) |
| **Columns** | 6 (Day name + 5 week columns) |
| **Changes** | Grid structure MONTHLY (28-31 days, different start day) |

---

## GRID STRUCTURE

### Row Dividers (Horizontal dark lines ~1-3px)

| Divider | Y Position | Separates |
|---------|-----------|-----------|
| Grid top | Y=503 | B2â†’SUN |
| SUNâ†’MON | Y=609 | Row 1â†’Row 2 |
| MONâ†’TUE | Y=715 | Row 2â†’Row 3 |
| TUEâ†’WED | Y=821 | Row 3â†’Row 4 |
| WEDâ†’THU | Y=927 | Row 4â†’Row 5 |
| THUâ†’FRI | Y=1029 | Row 5â†’Row 6 |
| FRIâ†’SAT | Y=1135 | Row 6â†’Row 7 |
| Grid bottom | Y=1241 | SATâ†’B4 |

### Row Content Areas

| Row | Day | Y Start | Y End | Height | Notes |
|-----|-----|---------|-------|--------|-------|
| 1 | SUN | 504 | 608 | 105px | Red header bg |
| 2 | MON | 610 | 714 | 105px | Purple/magenta header bg |
| 3 | TUE | 716 | 820 | 105px | Orange header bg |
| 4 | WED | 822 | 926 | 105px | Green header bg |
| 5 | THU | 928 | 1028 | 101px | Blue header bg (slightly shorter) |
| 6 | FRI | 1030 | 1134 | 105px | Purple/magenta header bg |
| 7 | SAT | 1136 | 1240 | 105px | Pink/magenta header bg |

### Column Dividers (Vertical double dark lines with light gap)

Each vertical divider is two dark lines (~1px each) with a ~6px light gap between them.

| Divider | Left Line | Gap | Right Line | Separates |
|---------|-----------|-----|------------|-----------|
| DayNameâ†’Col1 | X=175 | 176-182 | X=183 | Day names â†’ Week 1 |
| Col1â†’Col2 | X=314 | 315-320 | X=321 | Week 1 â†’ Week 2 |
| Col2â†’Col3 | X=453 | 454-459 | X=460 | Week 2 â†’ Week 3 |
| Col3â†’Col4 | X=592 | 593-598 | X=599 | Week 3 â†’ Week 4 |
| Col4â†’Col5 | X=730 | 731-737 | X=738 | Week 4 â†’ Week 5 |

### Column Content Areas

| Column | Purpose | X Start | X End | Width |
|--------|---------|---------|-------|-------|
| Col 0 | Day names | 42 | 175 | 133px |
| Col 1 | Week 1 dates | 184 | 314 | 130px |
| Col 2 | Week 2 dates | 321 | 453 | 132px |
| Col 3 | Week 3 dates | 460 | 592 | 132px |
| Col 4 | Week 4 dates | 599 | 730 | 131px |
| Col 5 | Week 5 / Festivals | 739 | 869 | 130px |

---

## DAY NAME COLUMN (Col 0)

Each day name cell contains:
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  "SUN" (English, bold)       â”‚  â† ~10pt, white/dark text
â”‚  "à°†à°¦à°¿" (Telugu, large bold)  â”‚  â† ~16pt, white/dark text
â”‚                              â”‚
â”‚  à°°à°¾.à°¦à±: 4-25à°²5-14           â”‚  â† ~5pt, timing info
â”‚  à°®à±.à°¦à±: ...                  â”‚  â† ~5pt, timing info
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Day Name Header Colors

| Day | English | Telugu | Header BG Color | Header BG Hex |
|-----|---------|--------|----------------|---------------|
| SUN | SUN | à°†à°¦à°¿ | Red | ~RGB(234,76,82) `#EA4C52` |
| MON | MON | à°¸à±‹à°® | Purple/Magenta | ~RGB(156,95,146) `#9C5F92` |
| TUE | TUE | à°®à°‚à°—à°³ | Orange | ~RGB(241,142,78) `#F18E4E` |
| WED | WED | à°¬à±à°§ | Green | ~RGB(78,176,125) `#4EB07D` |
| THU | THU | à°—à±à°°à± | Blue | ~RGB(74,193,236) `#4AC1EC` |
| FRI | FRI | à°¶à±à°•à±à°° | Purple/Magenta | ~RGB(152,86,140) `#98568C` |
| SAT | SAT | à°¶à°¨à°¿ | Pink/Magenta | ~RGB(230,60,160) `#E63CA0` |

### Timing Info in Day Name Cell
| Property | Value |
|----------|-------|
| **Content** | à°°à°¾à°¹à± à°•à°¾à°²à°‚ (Rahu kalam) and à°®à±à°¦à± (Yamagandam) times |
| **Font Size** | ~5pt |
| **Color** | Dark text on colored bg |
| **Data** | Static per weekday (from daily data) |

---

## DATE CELL INTERNAL LAYOUT

Each date cell (~130Ã—105px) has this internal structure:

```
cell_y= 0     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
               â”‚ 5px top margin                    â”‚
cell_y= 5     â”‚                                   â”‚
               â”‚ â”Œâ”€SPECIAL MARKER (top-left)â”€â”€â”    â”‚
               â”‚ â”‚ à°¤à°¿à°¥à°¿ name (small, ~6pt)     â”‚    â”‚
               â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜    â”‚
               â”‚                                   â”‚
cell_y=10-50  â”‚     â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  â† DATE NUMBER          â”‚  ~29pt bold
               â”‚     â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  (large, centered)      â”‚  ~40px tall
               â”‚     â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ                         â”‚
               â”‚                  â”Œâ”€SUPERSCRIPTâ”€â”   â”‚
               â”‚                  â”‚ "30" etc.    â”‚   â”‚
               â”‚                  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â”‚
cell_y=55     â”‚                                   â”‚
               â”‚  Line 2: à°¨à°•à±à°·à°¤à±à°°à°‚/info (~5pt)      â”‚
cell_y=65     â”‚                                   â”‚
               â”‚  Line 3: sunrise/time (~5pt)       â”‚
cell_y=75     â”‚                                   â”‚
               â”‚  Line 4: rahu kalam (~5pt)         â”‚
cell_y=90     â”‚                                   â”‚
               â”‚  Line 5: rahu time (~5pt)          â”‚
cell_y=100    â”‚ 5px bottom margin                 â”‚
cell_y=105    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Date Number
| Property | Value |
|----------|-------|
| **Size** | ~29pt (40px at 103 DPI) |
| **Style** | Bold |
| **Color** | Dark/black for weekdays, RED for holidays (SUN, festivals) |
| **Position** | Center-right of cell (leaves room for tithi name at left) |
| **Changes** | Per DAY |

### Tithi Name (Top-Left of Date)
| Property | Value |
|----------|-------|
| **Size** | ~6pt (small) |
| **Color** | Dark/brown |
| **Position** | Top-left, above and left of date number |
| **Content** | Telugu tithi name (e.g., "à°­à°¾à°¦à±à°°à°ªà°¦", "à°¶à±.à°¨à°µ") |
| **Changes** | Per DAY |

### Superscript Marker (Top-Right of Date)
| Property | Value |
|----------|-------|
| **Size** | ~4pt (very small) |
| **Color** | Dark |
| **Position** | Top-right of date number |
| **Content** | Day-of-Telugu-month number (e.g., "30") |
| **Changes** | Per DAY |

### Info Lines (Below Date)
| Line | Content | Font Size | Color |
|------|---------|-----------|-------|
| Line 2 | à°¨à°•à±à°·à°¤à±à°°à°‚ info + time | ~5pt | Dark/purple-gray |
| Line 3 | Additional time/info | ~5pt | Dark/purple-gray |
| Line 4 | à°°à°¾à°¹à± à°•à°¾à°²à°‚ time | ~5pt | Dark/purple-gray |
| Line 5 | Additional rahu info | ~5pt | Dark/purple-gray |

### Special Markers
| Marker | Position | Display |
|--------|----------|---------|
| **à°ªà±‚à°°à±à°£** (Full moon) | Top-left icon | â—‹ circle symbol |
| **à°…à°®à°¾** (New moon) | Top-left icon | â— filled circle |
| **Holiday** | Entire cell | Red date number |
| **Festival day** | Cell top | Festival name in small text |

### Date Cell Background Colors
| Row | Cell BG Color | Cell BG Hex |
|-----|--------------|-------------|
| SUN | Yellow-gold | ~RGB(255,248,0) `#FFF800` |
| MON | Light cream | ~RGB(227,226,157) `#E3E29D` |
| TUE | Light cream | ~RGB(215,214,153) `#D7D699` |
| WED | Light cream | ~RGB(224,224,156) `#E0E09C` |
| THU | Light cream | ~RGB(202,200,141) `#CAC88D` |
| FRI | Yellow-gold | ~RGB(224,206,24) `#E0CE18` |
| SAT | Light cream | ~RGB(210,209,148) `#D2D194` |

---

## FESTIVAL PANELS

Festivals appear in **empty cells** where there is no date for that weekday.

### Festival Placement Logic
```
FOR each weekday row:
  count = number of occurrences of this weekday in the month
  IF count < 5:
    empty_col = (count < 5) ? col5 : col1
    Render festival list in the empty column
  IF count < 4:
    Two empty columns available for festivals
```

### For September 2025:
| Row | Dates | Filled Cols | Empty Col | Festival Content |
|-----|-------|-------------|-----------|-----------------|
| SUN | 7,14,21,28 | 2,3,4,5 | **Col 1** | "à°ªà°‚à°¡à±à°—à°²à±" header + festivals 1-5 |
| MON | 1,8,15,22,29 | 1,2,3,4,5 | none | No festivals |
| TUE | 2,9,16,23,30 | 1,2,3,4,5 | none | No festivals |
| WED | 3,10,17,24 | 1,2,3,4 | **Col 5** | "à°ªà°‚à°¡à±à°—à°²à±" header + festivals 6-22 |
| THU | 4,11,18,25 | 1,2,3,4 | **Col 5** | â† festivals continue (merged) |
| FRI | 5,12,19,26 | 1,2,3,4 | **Col 5** | â† festivals continue (merged) |
| SAT | 6,13,20,27 | 1,2,3,4 | **Col 5** | â† festivals continue (merged) |

### Festival Panel Block 1 (SUN Col 1)
| Property | Value |
|----------|-------|
| **Position** | X=184-314, Y=504-608 |
| **Background** | Yellow-green (same as SUN row) |
| **Title** | "à°ªà°‚à°¡à±à°—à°²à±" (bold, red, ~8pt) |
| **Content** | Numbered festival list |
| **Font** | ~5pt Telugu |
| **Changes** | MONTHLY |

### Festival Panel Block 2 (WED-SAT Col 5, MERGED)
| Property | Value |
|----------|-------|
| **Position** | X=739-869, Y=822-1240 |
| **Background** | Pink/light magenta ~RGB(255,210,225) |
| **Title** | "à°ªà°‚à°¡à±à°—à°²à±" (bold, red, ~8pt) at top |
| **Content** | Numbered festival list (continuation from block 1) |
| **Font** | ~5pt Telugu |
| **Vertical merge** | YES â€” spans WED through SAT (4 rows, no internal dividers) |
| **Changes** | MONTHLY |

**Note:** The festival panel does NOT have horizontal row dividers where date cells do. It's one continuous merged block.

---

## B4: FOOTER BAR

| Property | Value |
|----------|-------|
| **Y Range** | 1248-1255 (red bar) + 1258-1301 (yellow bar) |
| **Structure** | Red gradient bar â†’ white gap â†’ yellow text bar |

### Red Bar (Top of Footer)
| Property | Value |
|----------|-------|
| **Y Range** | 1248-1255 (8px) |
| **Color** | Red gradient similar to header H11 |

### Yellow Text Bar
| Property | Value |
|----------|-------|
| **Y Range** | 1258-1301 (44px) |
| **Background** | Bright yellow `~RGB(255,248,0)` |
| **Text Color** | Red `~RGB(220,30,40)` |
| **Font Size** | ~14pt bold Telugu |
| **Alignment** | Center |
| **Content** | Monthly greeting (e.g., "5-à°‰à°ªà°¾à°§à±à°¯à°¾à°¯ à°¦à°¿à°¨à±‹à°¤à±à°¸à°µ à°¶à±à°­à°¾à°•à°¾à°‚à°•à±à°·à°²à±") |
| **Data** | `monthly_data.footer_text` |
| **Changes** | MONTHLY |

---

## B5: BOTTOM BORDER

| Property | Value |
|----------|-------|
| **Y Range** | 1302-1316 (15px) |
| **Type** | White/cream â€” page bottom margin |
| **Side borders** | Yellow continues from sides |

---

## GRID COLOR PALETTE

| ID | Element | RGB | Hex |
|----|---------|-----|-----|
| G01 | Grid divider lines | (50,50,35) | `#323223` |
| G02 | SUN header bg | (234,76,82) | `#EA4C52` |
| G03 | MON header bg | (156,95,146) | `#9C5F92` |
| G04 | TUE header bg | (241,142,78) | `#F18E4E` |
| G05 | WED header bg | (78,176,125) | `#4EB07D` |
| G06 | THU header bg | (74,193,236) | `#4AC1EC` |
| G07 | FRI header bg | (152,86,140) | `#98568C` |
| G08 | SAT header bg | (230,60,160) | `#E63CA0` |
| G09 | SUN cell bg | (255,248,0) | `#FFF800` |
| G10 | Weekday cell bg | (220,220,155) | `#DCDC9B` |
| G11 | Festival pink bg | (255,210,225) | `#FFD2E1` |
| G12 | Date number (normal) | (40,40,30) | `#28281E` |
| G13 | Date number (holiday) | (220,30,30) | `#DC1E1E` |
| G14 | Info text | (80,75,50) | `#504B32` |
| G15 | Footer yellow | (255,248,0) | `#FFF800` |
| G16 | Footer red text | (220,30,40) | `#DC1E28` |

---

## DATA CHANGE SUMMARY

| Element | Changes | Source |
|---------|---------|--------|
| Grid dividers | NEVER | design_template |
| Row heights | NEVER (fixed ~105px) | design_template |
| Column widths | NEVER (fixed ~131px) | design_template |
| Day name text | NEVER | design_template (static labels) |
| Day name colors | NEVER | design_template |
| Day name timing info | MONTHLY | monthly_data |
| Date numbers | MONTHLY (different day placement) | monthly_data.days[] |
| Date cell content | Per DAY | monthly_data.days[].tithi, nakshatram, etc. |
| Holiday markers | Per DAY | monthly_data.days[].is_holiday |
| Moon markers | Per DAY | monthly_data.days[].special_markers |
| Festival placement | MONTHLY (depends on which cells empty) | Computed from month structure |
| Festival content | MONTHLY | monthly_data.festivals[] |
| Footer text | MONTHLY | monthly_data.footer_text |
| Bottom border | NEVER | design_template |

---

## DATE PLACEMENT ALGORITHM

```
FOR each month:
  first_day = day_of_week of date 1 (0=SUN, 1=MON, ... 6=SAT)
  num_days = 28|29|30|31
  
  FOR date = 1 to num_days:
    weekday = (first_day + date - 1) % 7
    week_number = (date - 1 + first_day_offset) / 7 + 1   â†’ gives col 1-5
    row = weekday (0=SUN row ... 6=SAT row)
    col = week_number
    
    Place date in grid[row][col]
  
  FOR each row:
    FOR each col 1-5:
      IF grid[row][col] is empty:
        Mark as "festival cell"
    
  Collect all festival cells
  Place festival list across festival cells (merged vertically if adjacent)
```

### September 2025 Example:
- Sept 1 = Monday â†’ first_day = 1 (MON)
- SUN has no date in week 1 â†’ col1 is festival cell
- WED-SAT have no date in week 5 â†’ col5 is festival cell (merged block)

---

## RENDERING NOTES

1. **Grid row order is SUN-first** (NOT Monday-first like Western calendars)
2. **Column dividers are double-line** with ~6px gap â€” renders as a 3D groove effect
3. **Festival panel merges vertically** â€” no row dividers pass through merged festival cells
4. **THU row is ~4px shorter** (101px vs 105px) â€” likely JPEG compression artifact or intentional
5. **Date number positioning** varies by digit count: "1" is centered, "28" shifts slightly left
6. **Tithi text** appears top-left of date number, creating an asymmetric layout
7. **Cell backgrounds** are slightly different shades per row â€” subtle but consistent
8. **Footer bar** is always yellow bg with red Telugu text â€” monthly greeting
