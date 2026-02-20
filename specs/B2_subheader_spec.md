# VENKATRAMA CALENDAR — B2 SUB-HEADER DEEP DIVE
## Zone B1 (Credit Bar) + B2 (Sub-Header Info Panel)

**Source:** September 2025 page

---

## B1: PANCHANGAM CREDIT BAR

| Property | Value |
|----------|-------|
| **Y Range** | 346-374 (29px total with borders) |
| **Text Y Range** | 355-364 (10px text height) |
| **X Range** | 60-870 (full content width) |
| **Background** | Green-tinted `~RGB(210,230,215)` |
| **Text Color** | Purple-magenta `~RGB(168,75,128)` — `#A84B80` |
| **Font Size** | ~6-7pt (10px at 103 DPI) |
| **Content** | Same panchangam credit as H8 bar, in different format |
| **Alignment** | Center |
| **Border** | Dark green line at Y=348 `~RGB(113,130,116)` |
| **Changes** | SAME all 12 pages (company_data.credits) |

### B1 Content
```
"పంచాంగకర్తలు : క్రీ.శే|| బ్రహ్మశ్రీ తంగిరాల పూర్ణయ్య సిద్ధాంతి గారి పాత్రలు పట్టాభిరామయ్య మరియు రామనాథ సిద్ధాంతి, రేలంగి"
```

---

## B2 STRUCTURE OVERVIEW

| Property | Value |
|----------|-------|
| **Overall Y Range** | 375-498 (124px) |
| **Top green border** | Y=349-374 (shared with B1 bottom) |
| **Dark frame line** | Y=378-379 `~RGB(40,45,38)` |
| **Content area** | Y=380-495 (116px) |
| **Bottom dark frame** | Y=496-498 `~RGB(60,60,60)` |

```
Columns:
  B2-LEFT:   X=42-308  (267px) — Telugu year, sunrise/sunset table
  DIVIDER:   X=309-312 (4px dark line ~RGB(30,30,25))
  B2-CENTER: X=313-613 (301px) — Year "2025" + Month name
  DIVIDER:   X=614-615 (2px dark line ~RGB(50,13,46))  
  B2-RIGHT:  X=616-866 (251px) — Gulika Kalam table
  BORDER:    X=863-866 (4px green border, right)
```

---

## B2 BORDER FRAME

| Property | Value |
|----------|-------|
| **Type** | Green-tinted border with dark inner line |
| **Top green border** | Y=349-374 (~26px), greenish `~RGB(200,230,210)` |
| **Bottom dark border** | Y=496-498 (~3px), `~RGB(60,60,60)` |
| **Left/right green borders** | X=863-866, `~RGB(250,255,255)` |
| **Inner dark lines** | 1-2px dark separators between columns |

### Column Dividers
| Divider | X Range | Width | Color |
|---------|---------|-------|-------|
| LEFT-CENTER | X=309-312 | 4px | Dark `~RGB(30,30,25)` |
| CENTER-RIGHT | X=614-615 | 2px | Dark `~RGB(50,13,46)` |

---

## B2-LEFT: Telugu Year Info + Sunrise/Sunset Table

| Property | Value |
|----------|-------|
| **X Range** | 42-308 (267px) |
| **Y Range** | 380-495 (116px) |
| **Background** | Warm cream-pink `~RGB(248,185,160)` (tinted, not pure white) |

### Internal Layout

```
Y=380  ┌──────────────────────────────────────────────┐
       │ AREA 1: Telugu Year + Masam Info (2 lines)     │
       │ Y=384-413 (30px, brown text)                    │
       │                                                  │
       │ Line 1 (Y=384-392): శ్రీవిశ్వావసు నామ సంవర       │
       │                     భాద్రపద శు. నవమి            │
       │ Line 2 (Y=400-413): లగ్న ఆశ్వీయుజ              │
       │                     శు. అష్టమి పర్యంతం           │
Y=418  ├──────────────────────────────────────────────┤
       │ Dark divider line Y=419-422                      │
Y=422  ├──────────────────────────────────────────────┤
       │ AREA 2: Table (LEFT: Sunrise/Sunset,             │
       │                RIGHT: Panchangam/Masam)          │
       │                                                  │
       │  X=55-165         │    X=175-303                 │
       │  "సూ.ది.  అస్త"    │    కాలీచకం (పంచాంగం)         │
       │  Header: Y=425-433│    Text: Y=436-480           │
       │  Row 1:  Y=440-447│                              │
       │  Row 2:  Y=455-463│                              │
       │  Row 3:  Y=471-478│                              │
       │  Row 4:  Y=487-494│                              │
Y=495  └──────────────────────────────────────────────┘
```

### Area 1: Telugu Year/Masam Text
| Property | Value |
|----------|-------|
| **Y Range** | 384-413 (30px, 2 text lines) |
| **X Range** | 55-303 |
| **Text Color** | Dark brown `~RGB(80,40,30)` — `#50281E` |
| **Font Size** | ~6-7pt (small Telugu) |
| **Alignment** | Left-aligned |
| **Line 1** | Y=384-392 (9px): Year name + tithi |
| **Line 2** | Y=400-413 (14px): Lagnam info |
| **Data** | `monthly_data.telugu_year_name`, `monthly_data.masam` |
| **Changes** | MONTHLY |

### Area 2: Sunrise/Sunset Table (Left Sub-Column)
| Property | Value |
|----------|-------|
| **Y Range** | 425-494 |
| **X Range** | 55-165 |
| **Header** | "సూ.ది. అస్త" at Y=425-433 |
| **Text Color** | Purple-gray `~RGB(85,75,83)` — `#554B53` |
| **Font Size** | ~5pt (very small) |
| **Row Height** | ~8px text, ~16px pitch |
| **Row 1 (date 1)** | Y=440-447 |
| **Row 2 (date 11)** | Y=455-463 |
| **Row 3 (date 21)** | Y=471-478 |
| **Row 4 (date 30)** | Y=487-494 |
| **Data** | `monthly_data.sunrise_sunset` |
| **Changes** | MONTHLY |

### Area 2: Panchangam Text (Right Sub-Column)
| Property | Value |
|----------|-------|
| **Y Range** | 436-480 |
| **X Range** | 175-303 |
| **Text Color** | Purple-gray `~RGB(90,80,90)` — `#5A5058` |
| **Font Size** | ~5pt |
| **Content** | Masam transitions, nakshatra info |
| **Data** | `monthly_data` (panchangam details) |
| **Changes** | MONTHLY |

---

## B2-CENTER: Year + Month Name Display

| Property | Value |
|----------|-------|
| **X Range** | 313-613 (301px) |
| **Y Range** | 380-495 (116px) |
| **Background** | Deep magenta `~RGB(114,15,98)` — `#720F62` (nearly uniform) |

### Internal Layout

```
Y=380  ┌────────────────────────────────────────────────────┐
       │                                                      │
       │  ┌───LEFT HALF────┐  ┌───RIGHT HALF────────────┐    │
       │  │                 │  │                          │    │
       │  │  "2025"         │  │  "సెప్టెంబర్"             │    │
       │  │  (white)        │  │  (yellow, Y=384-427)    │    │
       │  │  Y=402-468      │  │                          │    │
       │  │  X=325-446      │  │  X=463-608              │    │
       │  │                 │  │                          │    │
       │  │                 │  │  ┌──────┐               │    │
       │  │                 │  │  │(dots)│ Y=430-447     │    │
       │  │                 │  │  │X=502 │ (yellow,small)│    │
       │  │                 │  │  └──────┘               │    │
       │  │                 │  │                          │    │
       │  │                 │  │  "SEPTEMBER"             │    │
       │  │                 │  │  (white, Y=452-477)     │    │
       │  │                 │  │  X=473-605              │    │
       │  │                 │  │                          │    │
       │  └─────────────────┘  └──────────────────────────┘    │
       │                                                      │
Y=495  └────────────────────────────────────────────────────┘
```

### Year "2025" Text
| Property | Value |
|----------|-------|
| **Y Range** | 402-468 (67px tall) |
| **X Range** | 325-446 (121px wide) |
| **Font Size** | ~46pt (67px at 103 DPI) |
| **Font Color** | White `~RGB(250,246,250)` — `#FAF6FA` |
| **Font Style** | Bold, English numerals |
| **Alignment** | Right-aligned in left half (digit "5" at X=414-445) |
| **Data** | `company_data.year` |
| **Changes** | YEARLY |

### Month Name Telugu "సెప్టెంబర్"
| Property | Value |
|----------|-------|
| **Y Range** | 384-427 (44px tall) |
| **X Range** | 463-608 (146px wide) |
| **Font Size** | ~30pt (44px at 103 DPI) |
| **Font Color** | Yellow/gold `~RGB(250,233,40)` — `#FAE928` |
| **Font Style** | Bold decorative Telugu |
| **3D shadow** | Slight dark edge visible below text |
| **Alignment** | Left-aligned in right half |
| **Data** | `monthly_data.month_telugu` |
| **Changes** | MONTHLY |

### Decorative Dots/Symbol
| Property | Value |
|----------|-------|
| **Y Range** | 430-447 (18px) |
| **X Range** | 502-522 (21px) |
| **Color** | Yellow `~RGB(250,235,45)` |
| **Type** | Small decorative element between Telugu and English month |

### Month Name English "SEPTEMBER"
| Property | Value |
|----------|-------|
| **Y Range** | 452-477 (26px tall) |
| **X Range** | 473-605 (133px wide) |
| **Font Size** | ~18pt (26px at 103 DPI) |
| **Font Color** | White/light lavender `~RGB(250,235,250)` — `#FAEBFA` |
| **Font Style** | Bold, uppercase English |
| **Alignment** | Center in right half |
| **Data** | `monthly_data.month_english` |
| **Changes** | MONTHLY |

### Spacing within B2-CENTER
| Gap | From | To | Distance |
|-----|------|----|----------|
| Top to year "2025" | Y=380 | Y=402 | 22px |
| Top to Telugu month | Y=380 | Y=384 | 4px |
| Telugu month → dots | Y=427 | Y=430 | 3px |
| Dots → English month | Y=447 | Y=452 | 5px |
| English month → bottom | Y=477 | Y=495 | 18px |

---

## B2-RIGHT: Gulika Kalam Table

| Property | Value |
|----------|-------|
| **X Range** | 616-866 (251px) |
| **Y Range** | 380-495 (116px) |
| **Background** | Light green/cream `~RGB(210,230,200)` |

### Title Box
| Property | Value |
|----------|-------|
| **Y Range** | 380-395 (16px green box) |
| **Title Text** | "గులిక కాలం :" |
| **Title Y** | 381-391 (11px text height) |
| **Title X** | 705-783 (79px wide, centered in box) |
| **Title Color** | Reddish-brown `~RGB(190,80,80)` — `#BE5050` |
| **Title Font** | ~7pt bold |
| **Box Background** | Bright green `~RGB(210,240,210)` |

### Table Structure
| Property | Value |
|----------|-------|
| **Rows** | 7 (one per weekday) |
| **Row text height** | ~8px |
| **Row pitch** | ~15px |
| **Content X** | 622-833 |
| **Text Color** | Dark green `~RGB(80,105,85)` — `#506955` |
| **Font Size** | ~5-6pt |
| **Changes** | MONTHLY |

### Row Y Positions
| Row | Weekday | Y Range |
|-----|---------|---------|
| 1 | ఆదివారము | 396-404 |
| 2 | సోమవారము | 411-419 |
| 3 | మంగళవారము | 426-434 |
| 4 | బుధవారము | 441-449 |
| 5 | గురువారము | 456-464 |
| 6 | శుక్రవారము | 471-479 |
| 7 | శనివారము | 487-495 |

### Column Layout
| Column | Content | X Range |
|--------|---------|---------|
| 1 | Weekday name | 622-700 |
| 2 | Start time | 705-770 |
| 3 | "ల" marker | 770-790 |
| 4 | End time | 800-833 |

### Gulika Kalam Data Format
```json
{
  "gulika_kalam": {
    "ఆదివారం": { "start": "మ.3-00", "end": "4-30" },
    "సోమవారం": { "start": "ల.1-30", "end": "3-00" },
    "మంగళవారం": { "start": "మ.12-00", "end": "1-30" },
    "బుధవారం": { "start": "ల.10-30", "end": "12-00" },
    "గురువారం": { "start": "ల.9-00", "end": "10-30" },
    "శుక్రవారం": { "start": "ల.7-30", "end": "9-00" },
    "శనివారం": { "start": "ల.6-00", "end": "7-30" }
  }
}
```

---

## B2 DATA CHANGE SUMMARY

| Element | Changes | Source |
|---------|---------|--------|
| B1 credit bar text | SAME all 12 pages | company_data.credits |
| B2 border/frame | NEVER | design_template |
| Column dividers | NEVER | design_template |
| Telugu year name | MONTHLY | monthly_data.telugu_year_name |
| Masam info | MONTHLY | monthly_data.masam |
| Sunrise/sunset table | MONTHLY | monthly_data.sunrise_sunset |
| Panchangam text | MONTHLY | monthly_data (panchangam details) |
| Year "2025" | YEARLY | company_data.year |
| Month name Telugu | MONTHLY | monthly_data.month_telugu |
| Month name English | MONTHLY | monthly_data.month_english |
| Gulika kalam title | NEVER | Static label |
| Gulika kalam table | MONTHLY | monthly_data.gulika_kalam |
| Background gradient (center) | NEVER | design_template |

---

## B2 COLOR PALETTE

| ID | Element | RGB | Hex |
|----|---------|-----|-----|
| B1 | Credit bar text (purple) | (168,75,128) | `#A84B80` |
| B2 | Green border frame | (200,230,210) | `#C8E6D2` |
| B3 | Dark column dividers | (30,30,25) | `#1E1E19` |
| B4 | B2-LEFT text (brown) | (80,40,30) | `#50281E` |
| B5 | B2-LEFT table text (purple-gray) | (85,75,83) | `#554B53` |
| B6 | Center background (magenta) | (114,15,98) | `#720F62` |
| B7 | Year "2025" (white) | (250,246,250) | `#FAF6FA` |
| B8 | Telugu month (yellow) | (250,233,40) | `#FAE928` |
| B9 | English month (white-lavender) | (250,235,250) | `#FAEBFA` |
| B10 | Gulika title (red-brown) | (190,80,80) | `#BE5050` |
| B11 | Gulika table text (dark green) | (80,105,85) | `#506955` |
| B12 | Gulika box bg (bright green) | (210,240,210) | `#D2F0D2` |

---

## RENDERING NOTES

1. **B2-CENTER layout**: "2025" occupies LEFT half (X=325-446), month names occupy RIGHT half (X=463-608) — side-by-side, NOT stacked
2. **B2-RIGHT title** is reddish-brown text on green box — easy to miss
3. **B2-LEFT** has two areas: top (year/masam, brown) + bottom (table, purple-gray)
4. **Gulika row pitch** = ~15px (consistent, data-driven rendering friendly)
5. **All B2 text is small** (5-7pt) — Telugu font hinting critical at this size
6. **Green frame** is shared between B1 and B2 (seamless connection)
