# VENKATRAMA CALENDAR HEADER â€” PIXEL-PERFECT LAYOUT SPECIFICATION
## Complete Deep-Dive Design Document (v2.0)

---

## 1. IMAGE SPECIFICATIONS

| Property | Value |
|---|---|
| **Total Image** | 924 Ã— 1316 px |
| **Physical** | 9" Ã— 14" |
| **DPI** | ~103 |
| **Color Mode** | RGB |
| **Header Total** | Y: 0 â†’ 345 (346px, ~3.36") |
| **Full Width** | 924px |
| **Left Yellow Border** | X: 0â€“41 (42px) â€” uniform solid yellow |
| **Right Yellow Border** | X: 883â€“923 (41px) â€” uniform solid yellow |
| **Content Area** | X: 42â€“882 (841px, ~8.16") |

---

## 2. MASTER ZONE MAP

```
Y=0     â”Œâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â”
        â•‘ H1: YELLOW TOP BORDER (16px)                                        â•‘
Y=15    â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=16    â•‘ H2: ORANGEâ†’RED GRADIENT TOP BORDER (4px)                            â•‘
Y=19    â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=20    â•‘ H3: COPYRIGHT BAR WITH BEVELED FRAME (28px)                         â•‘
        â•‘   â”Œâ”€frame border (X=102-103 left, X=818-819 right)â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â•‘
        â•‘   â”‚  Text: "Â© 2025 Venkatrama..." Y=27-38                   â”‚      â•‘
        â•‘   â””â”€frame expands into beveled bottom border Y=42-48â”€â”€â”€â”€â”€â”€â”€â”€â”˜      â•‘
Y=48    â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=49    â•‘                                                                      â•‘
        â•‘ H5: MAIN BRANDING AREA (236px)                                      â•‘
        â•‘ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”       â•‘
        â•‘ â”‚ H5-LEFT  â”‚          H5-CENTER                  â”‚ H5-RIGHT â”‚       â•‘
        â•‘ â”‚ V LOGO   â”‚  [small red symbol] Y=63-69         â”‚ JRRC     â”‚       â•‘
        â•‘ â”‚ X:42-200 â”‚  Company Name (RED) Y=71-129        â”‚ BADGE    â”‚       â•‘
        â•‘ â”‚ Y:50-160 â”‚  â–¼ Red Triangle Y=142-157           â”‚ X:690-883â”‚       â•‘
        â•‘ â”‚ 158Ã—110  â”‚  Contact Info Y=167-203              â”‚ Y:50-160 â”‚       â•‘
        â•‘ â”‚          â”‚  Branches Y=222-235                  â”‚ 193Ã—110  â”‚       â•‘
        â•‘ â”‚          â”‚  App Text (GREEN) Y=248-271          â”‚          â”‚       â•‘
        â•‘ â”‚          â”‚  App URL Y=273-280                   â”‚          â”‚       â•‘
        â•‘ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜       â•‘
Y=284   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=285   â•‘ H6: WARM GRADIENT SEPARATOR (2px)                                   â•‘
Y=286   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=287   â•‘ H7: RED BAR 1 â€” solid red, no visible text (10px)                   â•‘
Y=296   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=297   â•‘ H8: 3D EMBOSSED TEXT BAR â€” white+yellow text on red (16px)          â•‘
Y=312   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=313   â•‘ H9: RED BAR 2 â€” solid red, no text (11px)                           â•‘
Y=323   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=324   â•‘ H10: YELLOW GRADIENT STRIP (8px)                                    â•‘
Y=331   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=332   â•‘ H11: ORANGEâ†’RED BOTTOM BORDER (8px)                                 â•‘
Y=339   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
Y=340   â•‘ H12: CREAM/WHITE TRANSITION (6px)                                   â•‘
Y=345   â””â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â”˜
```

---

## 3. DETAILED ZONE SPECIFICATIONS

---

### H1: YELLOW TOP BORDER
| Property | Value |
|---|---|
| **Y Range** | 0 â†’ 15 (16px) |
| **X Range** | 0 â†’ 923 (full width) |
| **Type** | Solid flat fill, NO rounded corners, NO border |
| **Color** | `RGB(253,248,0)` â€” `#FDF800` |
| **Variation** | Â±2 on each channel (JPEG noise) |
| **Corners** | Sharp 90Â° â€” yellow goes to absolute edge pixel |
| **Configurable** | `{border_color}` â€” default `#FDF800` |
| **Data** | NONE â€” static decoration |

---

### H2: ORANGEâ†’RED GRADIENT TOP BORDER
| Property | Value |
|---|---|
| **Y Range** | 16 â†’ 19 (4px) |
| **X Range** | Full width (side borders remain yellow) |
| **Gradient X Start** | X=101 (content starts) |
| **Gradient X End** | X=821 (content ends) |
| **Type** | Vertical 4-row gradient, each row a different shade |

**Row-by-row colors (content area only):**
| Row | Y | Avg Color | Hex | Description |
|---|---|---|---|---|
| 1 | 16 | `(251,221,18)` | `#FBDD12` | Dark yellow |
| 2 | 17 | `(200,135,0)` | `#C88700` | Orange-brown |
| 3 | 18 | `(188,69,0)` | `#BC4500` | Dark orange-red |
| 4 | 19 | `(247,132,87)` | `#F78457` | Light salmon/peach |

**Side behavior:** Yellow border continues through (X=0-100 and X=822-923 remain yellow `#FDF800`)

| **Configurable** | `{border_gradient_colors[]}` â€” 4-stop vertical gradient |
| **Data** | NONE â€” static decoration |

---

### H3: COPYRIGHT BAR WITH BEVELED FRAME
| Property | Value |
|---|---|
| **Y Range** | 20 â†’ 48 (29px) |
| **Background** | Near-white `RGB(250,250,250)` â€” `#FAFAFA` |
| **Type** | Framed text box with beveled 3D border |

#### H3 FRAME STRUCTURE:
```
Y=20  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
      â”‚  LEFT BORDER          RIGHT BORDER           â”‚
      â”‚  X=102-103 (2px)      X=818-819 (2px)       â”‚
      â”‚  Dark orange-brown     Dark reddish-brown     â”‚
      â”‚  ~RGB(180,65,0)       ~RGB(190,55,25)        â”‚
      â”‚                                               â”‚
      â”‚      TEXT CONTENT (Y=27-38)                   â”‚
      â”‚      X=115 â†’ 810                              â”‚
      â”‚                                               â”‚
Y=42  â””â”€â”€â”€â”€â”€BEVELED EXPANSIONâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
Y=43-48: Frame expands outward forming 3D beveled edge
         Left expands: X=98â†’103
         Right expands: X=818â†’876
         Color transitions: orange â†’ dark red â†’ red
         Y=47-48: Solid red line across full width
         RGB(162,45,46) transitioning to RGB(210,68,72)
```

**Frame border colors:**
| Element | Color |
|---|---|
| Left vertical border (X=102) | `RGB(180,65,0)` â€” `#B44100` |
| Left inner glow (X=103) | `RGB(200,90,45)` â€” `#C85A2D` |
| Right vertical border (X=819) | `RGB(195,55,20)` â€” `#C33714` |
| Right inner glow (X=818) | `RGB(177,55,55)` â€” `#B13737` |
| Bottom bevel (Y=43-46) | Gradient: orangeâ†’dark red |
| Bottom line (Y=47-48) | `RGB(210,68,72)` â€” `#D24448` |

**Text content:**
| Property | Value |
|---|---|
| **Text Y Range** | 27 â†’ 38 (12px height) |
| **Text X Range** | 115 â†’ 810 |
| **Font Size** | ~8pt (12px at 103 DPI) |
| **Font Color** | Purple-magenta `RGB(110,55,85)` â€” `#6E3755` |
| **Font Style** | Regular, mixed English + Telugu |
| **Alignment** | Center |
| **Content** | `"Â© {year} {company_name_en}, Official Permission Website - {website_url}"` |

**Variable Data:**
```json
{
  "year": "2025",
  "company_name_en": "Venkatrama & Co.",
  "website_url": "https://venkatramacalendar.com"
}
```

| **Configurable** | frame_colors, text_color, font_size, content text |

---

### H5: MAIN BRANDING AREA (Most Complex)
| Property | Value |
|---|---|
| **Y Range** | 49 â†’ 284 (236px, ~2.29") |
| **Background** | Cream `RGB(253,254,214)` â€” `#FDFED6` |
| **Content X** | 42 â†’ 882 (841px) |

---

#### H5-LEFT: V LOGO EMBLEM

| Property | Value |
|---|---|
| **TRUE Bounding Box** | X: 53â†’169, Y: 50â†’147 |
| **TRUE Size** | 117 Ã— 98px (1.14" Ã— 0.95") |
| **Shape** | Shield/badge with narrowing base stem |
| **Dominant Colors** | PURPLE (1977px), RED (990px), WARM (565px), OTHER (396px) |
| **Type** | Raster image, complex multi-color graphic |
| **Configurable** | `{logo_image}` â€” replaceable image file |

**âš  CONTAMINATION REMOVED (vs original naive crop):**
| Contamination | Location | Issue |
|---|---|---|
| LEFT WATERMARK | X=43-51 (9px band) | Red vertical text "venkatramacalendar.com" runs the ENTIRE image height. Constant 9 red pixels every row. |
| WATERMARK GLOW | X=52 | Anti-alias warm peach edge of watermark `RGB(255,210,185)`. Appears in every row. |
| COMPANY NAME TEXT | X=170-200 | Red Telugu text `RGB(230,28,33)` from company name bleeds into naive crop. Clear cream gap exists at X=170-195. |
| BOTTOM WATERMARK | Y=148-160+ | Sporadic dark pixels at X=52-67 are continuation of left-border watermark text, NOT logo. |
| H3 FRAME BLEED | Y=48-49 | Bottom border of H3 copyright frame runs across full width. |

**TRUE Shape Profile (width at Y, excluding watermark):**
```
Y=50-52:  Red top finial  (X=52-58, 7px wide)
Y=53-67:  Gap / very thin  (only edge pixels)
Y=68:     Body begins       (X=52-116, 65px)
Y=69-77:  Full body         (X=52-169, 118px) â€” main shield
Y=78-93:  Body with gaps    (varies 71-118px) â€” internal detail
Y=94-130: Widening base     (X=52-169, 82-118px)
Y=131-135: Narrowing        (X=52-155, ~104px)
Y=136-143: Narrow stem      (X=52-102, ~51px) â€” purple/dark only, no red
Y=144-147: Tapered tip      (X=52-98, ~46px) â€” fades to background
```

**Center of logo:** Xâ‰ˆ111 (shifted left from original estimate)

---

#### H5-RIGHT: JRRC PUBLISHER BADGE

| Property | Value |
|---|---|
| **TRUE Bounding Box** | X: 650â†’874, Y: 57â†’144 |
| **TRUE Size** | 225 Ã— 88px (2.18" Ã— 0.85") |
| **Shape** | Circular/seal-like badge |
| **Dominant Colors** | Mixed warm tones, Red (badge-internal), DARK (326px), GOLD (109px) |
| **Type** | Raster image, circular seal graphic |
| **Configurable** | `{publisher_badge_image}` â€” replaceable image file |

**âš  CONTAMINATION REMOVED (vs original naive crop):**
| Contamination | Location | Issue |
|---|---|---|
| RIGHT WATERMARK | X=875-882 (8px band) | Red vertical text "venkatramacalendar.com" runs the ENTIRE image height. Constant 5 red pixels (X=876-880) every row, with fade zone X=875 and X=881-882. |
| COMPANY NAME OVERLAP | X=650-749 (100px zone!) | **CRITICAL**: Company name RED Telugu text extends rightward to X=749 while badge content extends leftward to X=650. This creates a 100px overlap zone where both elements coexist. |
| MASKING APPLIED | 2,295 pure-red pixels masked | Pixels matching R>180, G<80, B<80 in X<750 were replaced with cream background. |
| RESIDUAL EDGES | ~288 anti-aliased reddish pixels | Red text edge pixels (e.g. R=160,G=90,B=90) survive the pure-red mask. These are company name text anti-aliasing, NOT badge content. |
| H3 FRAME BLEED | Y=48-49 | Bottom border of H3 copyright frame. |

**âš  RECREATION NOTE:** The badge cannot be perfectly extracted from this calendar image due to the 100px company-name overlap. For pixel-perfect recreation, the **original clean badge asset file** must be obtained from the publisher. The extracted image is the best approximation possible from the composite calendar.

**TRUE Shape Profile:**
```
Y=57-58:  Very narrow top  (X=740-754, ~14px)
Y=59-61:  Growing          (X=738-841, ~100px)
Y=62-68:  Widening         (X=650-855, ~190px) â€” badge left edge appears
Y=69-134: Full circle body (X=650-868, ~215px) â€” maximum extent
Y=135:    Narrowing         (X=706-859, ~154px)
Y=136-143: Rapid taper     (X=787-859, ~73px)
Y=144:    Bottom tip        (X=818-852, ~35px)
```

**Approximate center of badge circle:** Xâ‰ˆ760, Yâ‰ˆ96

---

#### H5-CENTER: TEXT CONTENT

**Overview of all text lines with spacing:**
```
Y=49  â”€â”€â”€ H5 top edge â”€â”€â”€
      9px padding
Y=58  â”Œâ”€â”€â”€ TEXT AREA START â”€â”€â”€â”
      â”‚
Y=63  â”‚  T0: Small Red Symbol (X=625-664, 7px tall)
      â”‚
Y=71  â”‚  T1: COMPANY NAME â€” Large Telugu (59px)
Y=129 â”‚
      â”‚  9px gap
Y=138 â”‚  T2: RED INVERTED TRIANGLE (decorative, 20px)
Y=157 â”‚
      â”‚  10px gap
Y=167 â”‚  T3: CONTACT INFO â€” Phone/Email (37px)
Y=203 â”‚
      â”‚  19px gap
Y=222 â”‚  T4: BRANCH LOCATIONS (14px)
Y=235 â”‚
      â”‚  13px gap
Y=248 â”‚  T5: APP DOWNLOAD TEXT â€” Green (24px)
Y=271 â”‚
      â”‚  2px gap
Y=273 â”‚  T6: APP URL â€” Small green (8px)
Y=280 â”‚
      â”‚  5px gap
Y=284 â””â”€â”€â”€ H5 bottom edge â”€â”€â”€â”˜
```

---

##### T0: SMALL RED DECORATIVE SYMBOL
| Property | Value |
|---|---|
| **Position** | X: 625â†’664, Y: 63â†’69 |
| **Size** | 40 Ã— 7px |
| **Color** | RED `RGB(225,30,35)` â€” `#E11E23` |
| **Location** | Above right portion of company name |
| **Type** | Small Telugu text/symbol (likely à°¶à±à°°à±€ or similar honorific) |
| **Configurable** | `{decorative_symbol}` or `{decorative_symbol_image}` |

---

##### T1: COMPANY NAME (Telugu â€” Largest Element)
| Property | Value |
|---|---|
| **Y Range** | 71 â†’ 129 (59px) |
| **X Span** | 200 â†’ 750 (center, avoiding logo/badge) |
| **Full X Span** | 140 â†’ 749 (including parts that overlap logo/badge zones) |
| **Font Size** | ~41pt (59px at 103 DPI) |
| **Font Color** | PRIMARY RED `RGB(230,28,33)` â€” `#E61C21` |
| **Font Style** | Bold, decorative/ornamental Telugu script with 3D shadow effect |
| **Alignment** | Center horizontally in content area |
| **Text Shadow** | Dark outline/shadow visible at edges |

**Density profile (showing peak text rows):**
```
Y=71-82:   Upper portion â€” moderate density, red text beginning
Y=83-129:  PEAK DENSITY â€” heavy red text, this is the main body
           Max red pixels: ~192/row at Y=117
Y=130-134: Lower descenders â€” dark non-red, fading
```

**Variable Data:**
```json
{
  "company_name_telugu": "à°µà±‡à°‚à°•à°Ÿà°°à°¾à°® à°…à°‚à°¡à± à°•à±‹.",
  "company_name_font": "Telugu decorative bold",
  "company_name_color": "#E61C21",
  "company_name_size_pt": 41
}
```

---

##### T2: RED INVERTED TRIANGLE (Decorative Separator)
| Property | Value |
|---|---|
| **Y Range** | 142 â†’ 157 (16px) |
| **X Center** | ~330 |
| **Shape** | Inverted triangle / downward arrow |
| **Top Width** | 57px (X=302â†’358) at Y=142 |
| **Bottom Width** | 8px (X=326â†’333) at Y=157 |
| **Color** | RED gradient â€” `RGB(230,28,35)` fading to `RGB(67,73,66)` at tip |
| **Type** | Decorative separator element pointing downward |
| **Configurable** | `{separator_shape}`, `{separator_color}` |
| **Note** | This narrows linearly creating a downward-pointing triangle |

---

##### T3: CONTACT INFORMATION
| Property | Value |
|---|---|
| **Y Range** | 167 â†’ 203 (37px) |
| **X Span** | 140 â†’ 738 |
| **Font Color** | Purple-magenta `RGB(90,35,70)` â€” `#5A2346` |
| **Font Style** | Bold, Telugu + English mixed |
| **Alignment** | Center |

**Sub-lines within T3:**
| Sub-line | Y Range | Height | X Span | Content | Font Size |
|---|---|---|---|---|---|
| 3a (light) | 167-176 | 10px | 176-724 | Header text / label | ~7pt |
| 3b (dense) | 177-194 | 18px | 140-738 | **Main contact line** â€” phone, cell, email | ~12pt BOLD |
| 3c (light) | 195-203 | 9px | 190-604 | Supplementary text | ~6pt |

**Variable Data:**
```json
{
  "contact_label": "à°Žà°¡à±à°¯à±à°•à±‡à°·à°¨à°²à± à°ªà°¬à±à°²à°¿à°·à°°à±à°¸à±, à°¬à±à°•à± à°¸à±†à°²à±à°²à°°à±à°¸à± - à°à°²à±‚à°°à± - 2",
  "phone": "08812-230098",
  "cell": "9491174515",
  "email": "venkatramacoweb@gmail.com",
  "contact_font_color": "#5A2346",
  "contact_font_size_pt": 12
}
```

---

##### T4: BRANCH LOCATIONS
| Property | Value |
|---|---|
| **Y Range** | 222 â†’ 235 (14px) |
| **X Span** | 104 â†’ 748 |
| **Font Size** | ~9pt (13px) |
| **Font Color** | Purple-magenta `RGB(88,34,68)` â€” `#582244` |
| **Font Style** | Bold Telugu |
| **Alignment** | Center |

**Variable Data:**
```json
{
  "branch_prefix": "à°¬à°¿à°œà°¿à°¨à±†à°¸à± :",
  "branches": ["à°¹à±ˆà°¦à°°à°¾à°¬à°¾à°¦à±", "à°µà°¿à°œà°¯à°µà°¾à°¡", "à°¤à°¾à°¡à±‡à°ªà°²à±à°²à°¿à°—à±‚à°¡à±†à°‚"],
  "branch_separator": ",",
  "branch_font_color": "#582244",
  "branch_font_size_pt": 9
}
```

---

##### T5: APP DOWNLOAD PROMOTIONAL TEXT
| Property | Value |
|---|---|
| **Y Range** | 248 â†’ 271 (24px) |
| **X Span** | 190 â†’ 736 |
| **Font Size** | ~13pt (19px) |
| **Font Color** | GREEN `RGB(33,136,71)` â€” `#218847` |
| **Green Range** | R: [0-98], G: [101-178], B: [39-99] |
| **Font Style** | Bold Telugu |
| **Alignment** | Center |
| **Content** | `"à°®à°¾ à°•à±à°¯à°¾à°²à±†à°‚à°¡à°°à± à°¯à°¾à°ªà± à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿"` |

**Variable Data:**
```json
{
  "app_promo_text": "à°®à°¾ à°•à±à°¯à°¾à°²à±†à°‚à°¡à°°à± à°¯à°¾à°ªà± à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿",
  "app_promo_color": "#218847",
  "app_promo_size_pt": 13
}
```

---

##### T6: APP URL
| Property | Value |
|---|---|
| **Y Range** | 273 â†’ 280 (8px) |
| **X Span** | 242 â†’ 662 |
| **Font Size** | ~6pt (8px) |
| **Font Color** | Green (similar to T5) `RGB(55,140,80)` â€” `#378C50` |
| **Font Style** | Regular, English |
| **Alignment** | Center |
| **Content** | `"@ venkatramacalendar.com/app"` |

**Variable Data:**
```json
{
  "app_url_text": "@ venkatramacalendar.com/app",
  "app_url_color": "#378C50",
  "app_url_size_pt": 6
}
```

---

### H6: WARM GRADIENT SEPARATOR
| Property | Value |
|---|---|
| **Y Range** | 285 â†’ 286 (2px) |
| **X Range** | 42 â†’ 882 (content area) |
| **Color** | Warm brown `RGB(222,173,140)` â€” `#DEAD8C` |
| **Type** | Solid warm-toned line, 2px |
| **Side borders** | Transition color visible in yellow border zone |
| **Configurable** | `{separator_warm_color}` |
| **Data** | NONE |

---

### H7: FIRST RED BAR
| Property | Value |
|---|---|
| **Y Range** | 287 â†’ 296 (10px) |
| **Background** | RED `RGB(230,28,34)` â€” `#E61C22` |
| **Text** | NO visible text content detected |
| **Side borders** | Yellow borders continue |
| **Type** | Solid red bar |
| **Configurable** | `{red_bar_1_color}`, optional `{red_bar_1_text}` |

---

### H8: 3D EMBOSSED TEXT BAR (Most Complex Decorative Element)
| Property | Value |
|---|---|
| **Y Range** | 297 â†’ 312 (16px) |
| **Background** | RED `RGB(239,23,31)` â€” `#EF171F` |
| **Text Style** | 3D embossed/raised effect with shadows and highlights |
| **Text X Span** | 100 â†’ 840 |

**TWO DISTINCT TEXT SECTIONS:**

| Section | X Range | Text Color | Description |
|---|---|---|---|
| LEFT section | X: 100 â†’ ~490 | WHITE/CREAM `RGB(255,245,235)` | Panchangam credit text (Telugu) |
| RIGHT section | X: ~500 â†’ 840 | YELLOW/GOLD `RGB(255,225,45)` â€” `#FFE12D` | Publisher/Siddhanti text (Telugu) |

**3D Effect Components:**
| Component | Description |
|---|---|
| **Highlight** | Bright white/yellow pixels above text strokes |
| **Body** | Main text in white (left) or yellow (right) |
| **Shadow** | Dark pixels `RGB(180,50,0)` below/right of text strokes |
| **Background** | Red bleeding through gaps |

**Peak text density:** Y=303-305 (most text pixels per row)

**Variable Data:**
```json
{
  "panchangam_credit_text": "à°ªà°‚à°šà°¾à°‚à°—à°•à°°à±à°¤à°²à±: à°•à±à°°à±€.à°¶à±‡|| à°¬à±à°°à°¹à±à°®à°¶à±à°°à±€ à°¤à°‚à°—à°¿à°°à°¾à°² à°ªà±‚à°°à±à°£à°¯à±à°¯ à°¸à°¿à°¦à±à°§à°¾à°‚à°¤à°¿ à°—à°¾à°°à°¿...",
  "panchangam_credit_color": "#FFF5EB",
  "publisher_text": "à°ªà°Ÿà±à°Ÿà°¾à°­à°¿à°°à°¾à°®à°¯à±à°¯ à°®à°°à°¿à°¯à± à°°à°¾à°®à°¨à°¾à°¥ à°¸à°¿à°¦à±à°§à°¾à°‚à°¤à°¿, à°°à±‡à°²à°‚à°—à°¿",
  "publisher_text_color": "#FFE12D",
  "emboss_shadow_color": "#B43200",
  "emboss_highlight_color": "#FFFFFF",
  "bar_background_color": "#EF171F"
}
```

---

### H9: SECOND RED BAR
| Property | Value |
|---|---|
| **Y Range** | 313 â†’ 323 (11px) |
| **Background** | RED `RGB(235,25,33)` â€” `#EB1921` |
| **Text** | NO visible text |
| **Type** | Solid red bar |
| **Configurable** | `{red_bar_2_color}` |

---

### H10: YELLOW GRADIENT STRIP
| Property | Value |
|---|---|
| **Y Range** | 324 â†’ 331 (8px) |
| **Type** | Vertical gradient, 8 rows |

**Row-by-row gradient:**
| Y | Avg Color | Hex |
|---|---|---|
| 324 | `(255,157,56)` | `#FF9D38` â€” Orange |
| 325 | `(255,223,60)` | `#FFDF3C` â€” Yellow-orange |
| 326 | `(255,240,21)` | `#FFF015` â€” Light yellow |
| 327 | `(248,246,0)` | `#F8F600` â€” Pure yellow |
| 328 | `(252,248,0)` | `#FCF800` â€” Pure yellow |
| 329 | `(254,250,0)` | `#FEFA00` â€” Pure yellow |
| 330 | `(251,243,5)` | `#FBF305` â€” Yellow |
| 331 | `(255,233,27)` | `#FFE91B` â€” Warm yellow |

---

### H11: ORANGEâ†’RED BOTTOM BORDER
| Property | Value |
|---|---|
| **Y Range** | 332 â†’ 339 (8px) |
| **Type** | Vertical gradient, 8 rows |

**Row-by-row gradient:**
| Y | Avg Color | Hex |
|---|---|---|
| 332 | `(234,143,0)` | `#EA8F00` â€” Deep orange |
| 333 | `(191,49,0)` | `#BF3100` â€” Dark red-orange |
| 334 | `(223,35,11)` | `#DF230B` â€” Red |
| 335 | `(238,24,31)` | `#EE181F` â€” Bright red |
| 336 | `(243,24,26)` | `#F3181A` â€” Bright red |
| 337 | `(241,22,27)` | `#F1161B` â€” Bright red |
| 338 | `(227,16,31)` | `#E3101F` â€” Red |
| 339 | `(237,75,88)` | `#ED4B58` â€” Fade-out |

---

### H12: TRANSITION TO BODY
| Property | Value |
|---|---|
| **Y Range** | 340 â†’ 345 (6px) |
| **Type** | Soft fade from pink-white to pure white |

| Y | Avg Color | Description |
|---|---|---|
| 340 | `(254,212,211)` | Light pink |
| 341 | `(254,244,239)` | Very light pink |
| 342 | `(254,248,251)` | Near white |
| 343 | `(254,249,253)` | Near white |
| 344 | `(254,252,253)` | Almost white |
| 345 | `(249,249,250)` | White |

---

## 4. SPACING & PADDING TABLE

| Gap | From | To | Distance |
|---|---|---|---|
| Top of H5 to first content | Y=49 | Y=58 | **9px** |
| Logo/name bottom â†’ triangle | Y=134 | Y=142 | **8px** |
| Triangle bottom â†’ contact | Y=157 | Y=167 | **10px** |
| Contact bottom â†’ branches | Y=203 | Y=222 | **19px** |
| Branches bottom â†’ app text | Y=235 | Y=248 | **13px** |
| App text bottom â†’ URL | Y=271 | Y=273 | **2px** |
| URL bottom â†’ H6 separator | Y=280 | Y=285 | **5px** |

---

## 5. COMPLETE COLOR PALETTE

| ID | Name | RGB | Hex | Usage |
|---|---|---|---|---|
| C01 | Bright Yellow | (253,248,0) | `#FDF800` | Borders (H1, side, H10) |
| C02 | Primary Red | (230,28,33) | `#E61C21` | Company name, bars |
| C03 | Bar Red | (239,23,31) | `#EF171F` | H7/H8/H9 background |
| C04 | Dark Orange-Red | (174,42,0) | `#AE2A00` | H2 gradient |
| C05 | Orange | (255,157,56) | `#FF9D38` | H10 gradient top |
| C06 | Deep Orange | (234,143,0) | `#EA8F00` | H11 gradient top |
| C07 | Cream Background | (253,254,214) | `#FDFED6` | H5 background |
| C08 | White Background | (250,250,250) | `#FAFAFA` | H3 background |
| C09 | Purple-Magenta Text | (90,35,70) | `#5A2346` | Contact/branch text |
| C10 | Frame Border Brown | (180,65,0) | `#B44100` | H3 frame border |
| C11 | Red Separator | (210,68,72) | `#D24448` | H3 bottom line |
| C12 | Green App Text | (33,136,71) | `#218847` | App promo text |
| C13 | Warm Separator | (222,173,140) | `#DEAD8C` | H6 line |
| C14 | 3D Shadow | (180,50,0) | `#B43200` | H8 text shadow |
| C15 | 3D Highlight White | (255,245,235) | `#FFF5EB` | H8 left text |
| C16 | 3D Gold/Yellow | (255,225,45) | `#FFE12D` | H8 right text |
| C17 | Copyright Text | (110,55,85) | `#6E3755` | H3 text |

---

## 6. CONFIGURABLE DATA MODEL (Full)

```json
{
  "header_config": {
    "dimensions": {
      "total_width_px": 924,
      "header_height_px": 346,
      "left_border_width_px": 42,
      "right_border_width_px": 41,
      "dpi": 103
    },

    "colors": {
      "border_yellow": "#FDF800",
      "primary_red": "#E61C21",
      "cream_background": "#FDFED6",
      "white_background": "#FAFAFA",
      "text_purple_magenta": "#5A2346",
      "text_green": "#218847",
      "frame_border": "#B44100",
      "warm_separator": "#DEAD8C",
      "bar_red": "#EF171F"
    },

    "H3_copyright": {
      "frame": {
        "left_x": 102,
        "right_x": 819,
        "border_width_px": 2,
        "bevel_style": "expanding_bottom",
        "border_color": "#B44100",
        "bottom_line_color": "#D24448"
      },
      "text": {
        "content": "Â© {year} {company_name_en}, Official Permission Website - {website_url}",
        "year": "2025",
        "company_name_en": "Venkatrama & Co.",
        "website_url": "https://venkatramacalendar.com",
        "font_size_pt": 8,
        "font_color": "#6E3755",
        "alignment": "center"
      }
    },

    "H5_branding": {
      "logo": {
        "image_file": "v_logo.png",
        "position": { "x": 53, "y": 50 },
        "size": { "w": 117, "h": 98 },
        "shape": "shield_badge_with_stem",
        "note": "Original X=43-52 is left watermark, NOT logo. Logo true left=53."
      },

      "badge": {
        "image_file": "jrrc_badge.png",
        "position": { "x": 650, "y": 57 },
        "size": { "w": 225, "h": 88 },
        "shape": "circular_seal",
        "note": "Original X=875+ is right watermark, NOT badge. Badge overlaps company name at X=650-749. Need original asset for clean recreation.",
        "overlap_warning": "Company name RED text extends to X=749. Badge starts at X=650. 100px overlap zone."
      },

      "decorative_symbol": {
        "position": { "x": 625, "y": 63 },
        "size": { "w": 40, "h": 7 },
        "color": "#E11E23",
        "content": "à°¶à±à°°à±€",
        "configurable": true
      },

      "company_name": {
        "content_telugu": "à°µà±‡à°‚à°•à°Ÿà°°à°¾à°® à°…à°‚à°¡à± à°•à±‹.",
        "y_range": [71, 129],
        "x_range": [200, 750],
        "font_size_pt": 41,
        "font_color": "#E61C21",
        "font_style": "bold_decorative_telugu",
        "has_shadow": true,
        "alignment": "center"
      },

      "decorative_triangle": {
        "y_range": [142, 157],
        "x_center": 330,
        "top_width_px": 57,
        "bottom_width_px": 8,
        "shape": "inverted_triangle",
        "color_top": "#E61C21",
        "color_tip": "#434946",
        "configurable": true
      },

      "contact_info": {
        "y_range": [167, 203],
        "x_range": [140, 738],
        "font_color": "#5A2346",
        "alignment": "center",
        "sub_lines": {
          "line_a": {
            "y_range": [167, 176],
            "font_size_pt": 7,
            "content": "{business_tagline}"
          },
          "line_b": {
            "y_range": [177, 194],
            "font_size_pt": 12,
            "font_style": "bold",
            "content": "{phone}, à°¸à±†à°²à± : {cell}, Email : {email}"
          },
          "line_c": {
            "y_range": [195, 203],
            "font_size_pt": 6,
            "content": "{supplementary_text}"
          }
        },
        "data": {
          "business_tagline": "à°Žà°¡à±à°¯à±à°•à±‡à°·à°¨à°²à± à°ªà°¬à±à°²à°¿à°·à°°à±à°¸à±, à°¬à±à°•à± à°¸à±†à°²à±à°²à°°à±à°¸à± - à°à°²à±‚à°°à± - 2",
          "phone": "08812-230098",
          "cell": "9491174515",
          "email": "venkatramacoweb@gmail.com",
          "supplementary_text": ""
        }
      },

      "branches": {
        "y_range": [222, 235],
        "x_range": [104, 748],
        "font_size_pt": 9,
        "font_color": "#582244",
        "font_style": "bold",
        "alignment": "center",
        "content": "{branch_prefix} {branches_joined}",
        "data": {
          "branch_prefix": "à°¬à°¿à°œà°¿à°¨à±†à°¸à± : à°¹à±ˆà°¦à°°à°¾à°¬à°¾à°¦à±, à°µà°¿à°œà°¯à°µà°¾à°¡, à°¤à°¾à°¡à±‡à°ªà°²à±à°²à°¿à°—à±‚à°¡à±†à°‚",
          "branches": ["à°¹à±ˆà°¦à°°à°¾à°¬à°¾à°¦à±", "à°µà°¿à°œà°¯à°µà°¾à°¡", "à°¤à°¾à°¡à±‡à°ªà°²à±à°²à°¿à°—à±‚à°¡à±†à°‚"]
        }
      },

      "app_promo": {
        "y_range": [248, 271],
        "x_range": [190, 736],
        "font_size_pt": 13,
        "font_color": "#218847",
        "font_style": "bold",
        "alignment": "center",
        "content": "{app_promo_text}",
        "data": {
          "app_promo_text": "à°®à°¾ à°•à±à°¯à°¾à°²à±†à°‚à°¡à°°à± à°¯à°¾à°ªà± à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿"
        }
      },

      "app_url": {
        "y_range": [273, 280],
        "x_range": [242, 662],
        "font_size_pt": 6,
        "font_color": "#378C50",
        "alignment": "center",
        "content": "@ {app_url}",
        "data": {
          "app_url": "venkatramacalendar.com/app"
        }
      }
    },

    "H8_embossed_bar": {
      "y_range": [297, 312],
      "background": "#EF171F",
      "left_section": {
        "x_range": [100, 490],
        "text_color": "#FFF5EB",
        "content": "{panchangam_credit}"
      },
      "right_section": {
        "x_range": [500, 840],
        "text_color": "#FFE12D",
        "content": "{publisher_credit}"
      },
      "effect": {
        "type": "3d_emboss",
        "shadow_color": "#B43200",
        "highlight_color": "#FFFFFF",
        "shadow_offset": {"x": 1, "y": 1}
      },
      "data": {
        "panchangam_credit": "à°ªà°‚à°šà°¾à°‚à°—à°•à°°à±à°¤à°²à±: à°•à±à°°à±€.à°¶à±‡|| à°¬à±à°°à°¹à±à°®à°¶à±à°°à±€ à°¤à°‚à°—à°¿à°°à°¾à°² à°ªà±‚à°°à±à°£à°¯à±à°¯ à°¸à°¿à°¦à±à°§à°¾à°‚à°¤à°¿...",
        "publisher_credit": "à°ªà°Ÿà±à°Ÿà°¾à°­à°¿à°°à°¾à°®à°¯à±à°¯ à°®à°°à°¿à°¯à± à°°à°¾à°®à°¨à°¾à°¥ à°¸à°¿à°¦à±à°§à°¾à°‚à°¤à°¿, à°°à±‡à°²à°‚à°—à°¿"
      }
    },

    "watermarks": {
      "left": {
        "x_range": [43, 51],
        "width_px": 9,
        "color": "#E61E23",
        "content": "venkatramacalendar.com",
        "orientation": "vertical_rotated_90",
        "render_layer": "top_overlay"
      },
      "right": {
        "x_range": [876, 880],
        "width_px": 5,
        "color": "#E61923",
        "content": "venkatramacalendar.com",
        "orientation": "vertical_rotated_90",
        "render_layer": "top_overlay"
      }
    },

    "gradient_definitions": {
      "H2_top_border": {
        "type": "vertical",
        "stops": [
          {"y": 16, "color": "#FBDD12"},
          {"y": 17, "color": "#C88700"},
          {"y": 18, "color": "#BC4500"},
          {"y": 19, "color": "#F78457"}
        ]
      },
      "H10_yellow_strip": {
        "type": "vertical",
        "stops": [
          {"y": 324, "color": "#FF9D38"},
          {"y": 327, "color": "#F8F600"},
          {"y": 331, "color": "#FFE91B"}
        ]
      },
      "H11_bottom_border": {
        "type": "vertical",
        "stops": [
          {"y": 332, "color": "#EA8F00"},
          {"y": 333, "color": "#BF3100"},
          {"y": 335, "color": "#EE181F"},
          {"y": 339, "color": "#ED4B58"}
        ]
      },
      "H12_transition": {
        "type": "vertical",
        "stops": [
          {"y": 340, "color": "#FED4D3"},
          {"y": 345, "color": "#F9F9FA"}
        ]
      }
    }
  }
}
```

---

## 7.5 VERTICAL WATERMARKS (Critical Discovery)

Both left and right yellow borders contain vertical red watermark text that runs the **entire height** of the image. These were previously counted as part of the logo/badge.

### LEFT WATERMARK
| Property | Value |
|---|---|
| **X Range** | 43 â†’ 51 (9px wide) |
| **Y Range** | 0 â†’ 1316 (FULL image height) |
| **Color** | Red `RGB(~230,~30,~35)` |
| **Content** | "venkatramacalendar.com" (rotated 90Â° vertical) |
| **Anti-alias glow** | X=52 â€” warm peach `RGB(255,210,185)` |

### RIGHT WATERMARK
| Property | Value |
|---|---|
| **X Range** | 876 â†’ 880 (5px core), with fade X=875 and X=881-882 |
| **Y Range** | 0 â†’ 1316 (FULL image height) |
| **Color** | Red `RGB(~230,~25,~35)` |
| **Content** | "venkatramacalendar.com" (rotated 90Â° vertical) |
| **Anti-alias glow** | X=874-875 â€” warm tones |

### Impact on Asset Extraction
| Asset | Contaminated Region | Resolution |
|---|---|---|
| V Logo | X=43-52 overlaps logo left edge | Exclude Xâ‰¤52; logo true left = X=53 |
| JRRC Badge | X=875-882 overlaps badge right edge | Exclude Xâ‰¥875; badge true right = X=874 |
| Both | Watermark colors counted as "logo/badge content" | Inflated RED pixel counts in earlier analysis |

### For Recreation
| Element | Action |
|---|---|
| Watermarks | Rendered as a separate layer AFTER all other content |
| Logo/Badge | Must be placed WITHOUT watermark overlap |
| Watermark text | Configurable: `{watermark_text}`, `{watermark_color}` |

---

## 8. STATIC vs CONFIGURABLE ELEMENTS SUMMARY

### STATIC (Design framework â€” never changes)
| Element | Zone | Notes |
|---|---|---|
| Yellow borders (all 4 sides) | H1, sides | Color configurable but always present |
| Gradient borders | H2, H10, H11 | Colors configurable |
| Frame structure | H3 | Shape fixed, colors configurable |
| Beveled bottom | H3 | Fixed 3D shape |
| Red bars structure | H7, H9 | Solid bars, color configurable |
| 3D emboss effect | H8 | Effect type fixed, colors configurable |
| Warm separator | H6 | Color configurable |
| Transition fade | H12 | Auto-generated |
| Inverted triangle | T2 | Shape fixed, color configurable |
| Spacing/gaps | All | Fixed pixel values |

### CONFIGURABLE (Data + Appearance)
| Element | Config Key | Type |
|---|---|---|
| Copyright year | `year` | Text |
| Company name (English) | `company_name_en` | Text |
| Website URL | `website_url` | Text |
| Logo image | `logo_image` | Image file |
| Badge image | `publisher_badge_image` | Image file |
| Decorative symbol | `decorative_symbol` | Text/Image |
| Company name (Telugu) | `company_name_telugu` | Text |
| Company name font size | `company_name_size_pt` | Number |
| Company name color | `company_name_color` | Color |
| Phone number | `phone` | Text |
| Cell number | `cell` | Text |
| Email | `email` | Text |
| Business tagline | `business_tagline` | Text |
| Branch locations | `branches[]` | Array of text |
| App promo text | `app_promo_text` | Text |
| App URL | `app_url` | Text |
| Panchangam credit | `panchangam_credit` | Text |
| Publisher credit | `publisher_credit` | Text |
| All colors | `colors.*` | Color hex values |
| All font sizes | `*_size_pt` | Numbers |

---

## 8. RENDERING NOTES

1. **All text elements are Telugu script** (except email, phone, URL) â€” requires Telugu font support
2. **The company name uses decorative/ornamental Telugu** â€” not a standard font; may need custom font or pre-rendered image
3. **The 3D emboss effect in H8** is a raster effect â€” best reproduced as a pre-rendered bar or using CSS/SVG emboss filters
4. **The H3 beveled frame** has a specific 3D look that expands at the bottom â€” needs careful corner rendering
5. **Side yellow borders contain NO watermark text** in the header area (watermarks appear only below the header)
6. **Logo and badge are complex raster images** â€” they cannot be reproduced from vector; must be supplied as image files
7. **The inverted triangle (T2)** is a simple geometric shape that can be drawn programmatically
8. **All measurements are at 103 DPI** â€” scale proportionally for higher DPI output
