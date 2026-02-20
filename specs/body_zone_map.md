# VENKATRAMA CALENDAR — BODY ZONE MAP
## Zones Below Header (Y=346 to Y=1316)

**Source:** September 2025 page  
**Total body:** Y=346 → 1316 (970px)

---

## MASTER ZONE MAP (Body)

```
Y=346   ┌══════════════════════════════════════════════════════════════════════┐
        ║ B1: PANCHANGAM CREDIT BAR (~20px)                                    ║
        ║     Purple text on green-tinted white background                     ║
        ║     Same text as H8 but in different format                         ║
Y=366   ╠══════════════════════════════════════════════════════════════════════╣
        ║ B2: SUB-HEADER INFO PANEL (~140px)                                   ║
        ║ ┌──────────┬───────────────────┬──────────────────┐                 ║
        ║ │ B2-LEFT  │    B2-CENTER      │    B2-RIGHT      │                 ║
        ║ │ Telugu   │    YEAR "2025"    │    గులిక కాలం:    │                 ║
        ║ │ year     │    MONTH NAME     │    (Gulika kalam  │                 ║
        ║ │ info,    │    సెప్టెంబర్      │     table)        │                 ║
        ║ │ sunrise/ │    SEPTEMBER      │                   │                 ║
        ║ │ sunset   │    (RED+YELLOW    │    7 rows ×       │                 ║
        ║ │ table,   │     gradient)     │    3 columns      │                 ║
        ║ │ masam    │                   │                   │                 ║
        ║ └──────────┴───────────────────┴──────────────────┘                 ║
Y=505   ╠══════════════════════════════════════════════════════════════════════╣
        ║ B3: DAY GRID (7 rows × 5 columns + side panels)                     ║
        ║                                                                      ║
        ║ ┌──────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────┐   ║
        ║ │ DAY  │ DATE+   │ DATE+   │ DATE+   │ DATE+   │ DATE+   │FEST │   ║
        ║ │ NAME │ PANCHG  │ PANCHG  │ PANCHG  │ PANCHG  │ PANCHG  │LIST │   ║
        ║ │ SUN  │  7      │  14     │  21     │  28     │         │     │   ║
        ║ ├──────┼─────────┼─────────┼─────────┼─────────┼─────────┤     │   ║
        ║ │ MON  │  1      │  8      │  15     │  22     │  29     │     │   ║
        ║ │ సోమ  │         │         │         │         │         │     │   ║
        ║ ├──────┼─────────┼─────────┼─────────┼─────────┼─────────┤     │   ║
        ║ │ TUE  │  2      │  9      │  16     │  23     │  30     │     │   ║
        ║ ├──────┼─────────┼─────────┼─────────┼─────────┼─────────┤     │   ║
        ║ │ WED  │  3      │  10     │  17     │  24     │(FEST    │     │   ║
        ║ │ బుధ  │         │         │         │         │ LIST)   │     │   ║
        ║ ├──────┼─────────┼─────────┼─────────┼─────────┤         │     │   ║
        ║ │ THU  │  4      │  11     │  18     │  25     │         │     │   ║
        ║ ├──────┼─────────┼─────────┼─────────┼─────────┤         │     │   ║
        ║ │ FRI  │  5      │  12     │  19     │  26     │         │     │   ║
        ║ ├──────┼─────────┼─────────┼─────────┼─────────┤         │     │   ║
        ║ │ SAT  │  6      │  13     │  20     │  27     │         │     │   ║
        ║ └──────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────┘   ║
Y=1140  ╠══════════════════════════════════════════════════════════════════════╣
        ║ B4: FOOTER BAR                                                       ║
        ║     Yellow background with red text                                  ║
        ║     "5-ఉపాధ్యాయ దినోత్సవ శుభాకాంక్షలు"                               ║
        ║     Special occasion greetings / monthly promo                       ║
Y=1250  ╠══════════════════════════════════════════════════════════════════════╣
        ║ B5: BOTTOM BORDER (same gradient as header bottom)                   ║
        ║     Red → Orange → Yellow gradient                                   ║
Y=1316  └══════════════════════════════════════════════════════════════════════┘
```

---

## KEY STRUCTURAL OBSERVATIONS

### Grid Layout
- **7 day-rows** (SUN through SAT) — NOT Mon-Sun, it's **SUN first**
- **~5 date columns** per row (weeks of the month)
- **Left column**: Day name in English + Telugu + timing info (రాదు/ముదు)
- **Right panel** (last column area): Festivals list (పండుగలు)
- Some months may have 4 or 5 weeks → grid columns vary

### Color Coding (Day Rows)
| Day | Header BG | Cell BG | Text Color |
|-----|-----------|---------|------------|
| SUN | RED       | Pink/Light red | Red (holiday) |
| MON | GREEN     | Light yellow | Dark |
| TUE | YELLOW    | Cream | Dark |
| WED | YELLOW    | Cream | Dark |
| THU | YELLOW    | Cream | Dark |
| FRI | PINK      | Light pink | Dark |
| SAT | YELLOW    | Light yellow | Dark |

### Data Change Levels
| Zone | Changes | Data Source |
|------|---------|-------------|
| B1 (credit bar) | SAME all 12 pages | company_data |
| B2-LEFT (year/sunrise) | Per MONTH | monthly_data |
| B2-CENTER (month name) | Per MONTH | monthly_data |
| B2-RIGHT (gulika table) | Per MONTH | monthly_data |
| B3 grid structure | Per MONTH (28-31 days) | monthly_data |
| B3 each cell | Per DAY | monthly_data.days[] |
| B3-RIGHT festival list | Per MONTH | monthly_data.festivals[] |
| B4 footer text | Per MONTH (occasion varies) | monthly_data |
| B5 border | SAME all pages | design_template |

### Next Steps
1. **B2 deep dive** — exact pixel bounds for left/center/right panels
2. **B3 grid** — cell dimensions, internal layout of each day cell
3. **B3 day cell** — typography for date number, tithi, nakshatram, times
4. **Festival panel** — right-side layout
5. **B4 footer** — text positioning
