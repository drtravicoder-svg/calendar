# Asset Contamination Review Report
## V Logo & JRRC Badge Extraction Analysis

**Source:** VenkatramaCoTeluguCalendarColour202509.png (924Ã—1316px)  
**Header zone:** Y=48-190 (branding area)

---

## 1. CONTAMINATION SOURCES IDENTIFIED

The header branding zone contains **5 overlapping layers** that make clean asset extraction difficult:

| Layer | Description | Location |
|-------|------------|----------|
| **Yellow border** | 17px wide solid yellow strips | X=25-42 (left), X=882-900 (right) |
| **Red border edge** | 9px red inner border | X=43-51 (left), X=876-881 (right) |
| **V Logo** | Purple shield with warm interior | X=55-130, Y=65-148 |
| **Telugu company name** | Large red "à°µà±‡à°‚à°•à°Ÿà°°à°¾à°® à°…à°‚à°¡à± à°•à±‹.," text | X=130-794, Y=71-130 |
| **JRRC Badge** | Green/olive oval seal | Center=(796,106), ~162Ã—124px |
| **Watermark** | "venkatramacalendar.com" vertical text | X=52-57 (left side), X=858-875 (right side) |

### Critical Overlap Zone
**X=715 to X=795, Y=60-135**: Telugu text and JRRC badge are **fully interleaved**. Red text characters ("à°•à±‹.,") render directly on top of the badge's left portion. These cannot be separated by pixel color alone because:
- The badge has its own red border elements
- Text anti-aliasing creates warm tones that blend with badge colors
- Pixels are physically mixed at this resolution

---

## 2. V LOGO ASSESSMENT

### Status: âœ… CLEAN EXTRACTION ACHIEVED

| Property | Value |
|----------|-------|
| True bounds | X=55-130, Y=65-148 |
| Extracted size | 75Ã—83 px (RGBA with transparency) |
| Shape | Shield/badge (pointed bottom) |
| Colors | Purple outline, warm cream/pink interior |
| Contamination | **None** â€” border and text are safely outside bounds |

The V logo sits between the left yellow border (ending X=51) and the start of the Telugu text (beginning X=130+). There is a clean cream gap on both sides.

### Pixel Profile (purple shield outline):
- Top: starts at Y=69, width ~54px
- Widest: Y=79, X=58-126 (69px)
- Narrows progressively downward
- Bottom point: Y=145, X=88-94 (7px)

**File:** `FINAL_v_logo.png` (75Ã—83, RGBA)

---

## 3. JRRC BADGE ASSESSMENT

### Status: âš ï¸ PARTIALLY CLEAN â€” LEFT 40% DAMAGED

| Property | Value |
|----------|-------|
| Fitted shape | Ellipse: center=(796, 106), semi-axes=81Ã—62 |
| Full size | ~162Ã—124 px |
| Clean region | Right 60% (X>795 in original) |
| Contaminated region | Left 40% (X=715-795) â€” Telugu text overlap |

### Contamination Details:
1. **Red Telugu text "à°•à±‹.,"** â€” bright red (R>200, G<55, B<55) scattered through left portion from Y=60-130
2. **Text anti-aliasing** â€” warm pinkish/brown pixels that blend with badge edge tones
3. **Three red decorative dots** â€” below badge at Y=143-155
4. **Dark text shadows** â€” near-black pixels from text rendering

### Cleanup Attempted:
- Removed bright red pixels (R-G>60, R>140) in left 65% zone
- Removed pinkish warm tones in text area
- Removed dark (<80) pixels in left/upper zone
- Result: Red text removed but **ghost outlines** and **cream-filled gaps** remain where text was

### Recommendation:
The JRRC badge **cannot be cleanly extracted** from this source image at this resolution. Options:

1. **Best:** Obtain original vector/high-res asset from Venkatrama & Co.
2. **Fallback:** Use the right-half crop (clean portion) and mirror/reconstruct
3. **Accept:** Use the text-removed version knowing left side has artifacts

**Files:**
- `FINAL_jrrc_badge.png` (162Ã—123, RGBA) â€” text removed, artifacts on left
- `FINAL_jrrc_preview.png` â€” preview on white background

---

## 4. IMPACT ON RECREATION

### V Logo: Low Impact
- Clean extraction available
- Can be placed directly in recreated header
- Position: X=55 from content edge, Y=65 from header top

### JRRC Badge: HIGH Impact
- Left portion will show artifacts or missing detail
- For pixel-perfect recreation, need clean source file
- Position: centered at X=796, Y=106 (elliptical, 162Ã—124px)

### Other Contamination Notes:
- **No watermark** in the V logo extraction zone
- **Watermark present** on right side near JRRC badge (X=858-875) â€” falls within the ellipse mask but is mostly in the cream background area, so it's masked out by the alpha channel
- **Border elements** are fully excluded from both extractions

---

## 5. FILES PRODUCED

| File | Size | Description |
|------|------|-------------|
| `FINAL_v_logo.png` | 75Ã—83 RGBA | Clean V logo with transparency |
| `FINAL_jrrc_badge.png` | 162Ã—123 RGBA | JRRC badge, text removed (artifacts on left) |
| `FINAL_jrrc_preview.png` | 162Ã—123 RGB | Preview on white background |
| `asset_contamination_report.png` | 800Ã—500 | Visual comparison |
| `contamination_zones_overlay.png` | 924Ã—148 | Annotated header with zone markers |
