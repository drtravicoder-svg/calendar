# B3 FESTIVAL CELL ANALYSIS — CROSS-MONTH FINDINGS
## Analyzed: January, February, March, July, September 2025

---

## 1. FESTIVAL CELL PLACEMENT RULE

Festival lists fill EMPTY grid cells — cells with no calendar date.

- **Which cells are empty** depends on: start day + number of days in month
- Empty cells appear at **Col 1** (before first date) and/or **Col 5** (after last date)
- Empty cells in **adjacent rows** for the same column get **MERGED vertically**

### Examples:
| Month | Start Day | Left Block (Col1) | Right Block (Col5) |
|-------|-----------|-------------------|-------------------|
| January | WED | SUN+MON+TUE (3 rows) | SAT (1 row) |
| February | SAT | SUN-FRI (6 rows!) | SAT (1 row) |
| March | SAT | TUE+WED (2 rows) | TUE-FRI (4 rows) |
| July | TUE | SUN+MON (2 rows) | FRI+SAT (2 rows) |
| September | MON | SUN (1 row) | WED-SAT (4 rows) |

---

## 2. FESTIVAL TITLE "పండుగలు"

- **Appears ONCE per festival block** — at the TOP of each block
- If there are TWO blocks (left + right), BOTH get their own title
- **Title text**: RED ~RGB(210,40,30) → `#D22818`
- **Title font size**: ~12pt (17-18px at 103 DPI)
- **Title font style**: Bold Telugu
- **Title Y position**: Starts 5-8px below cell top edge
- **Title alignment**: LEFT-aligned within the cell

---

## 3. FESTIVAL CONTENT TEXT

### Format
```
{date}.{festival_name}
```
Where `{date}` is the **calendar date** (1-31), NOT a sequence number.

Example: "5.ఉపాధ్యాయ దినోత్సవం" = festival on the 5th

### Text Properties
| Property | Value |
|----------|-------|
| **Font size** | ~6pt (9px at 103 DPI) |
| **Font style** | Regular Telugu |
| **Text color (yellow bg)** | Dark olive ~RGB(71,60,0) `#463B00` |
| **Text color (pink bg)** | Dark maroon ~RGB(69,35,47) `#45232F` |
| **Line pitch** | ~14-15px (text height + gap) |
| **Line gap** | ~4-6px between lines |
| **Alignment** | LEFT-aligned, small left margin (~5px) |
| **Wrapping** | Long festival names wrap to next line (no number prefix on continuation) |

### Special Entries
- Some festivals have **parenthetical details**: "(శ్రీ)" or similar
- Some entries have **sub-text** on next line (not numbered, indented)
- Festival date numbers sometimes bold: "**5.**ఉపాధ్యాయ..."

---

## 4. FESTIVAL CELL BACKGROUNDS

### Two Background Patterns Observed

| Pattern | When | Color | Hex |
|---------|------|-------|-----|
| **Yellow/Cream** | Small blocks (1-3 rows), or when in SUN row | ~RGB(250,244,17) | `#FAF411` |
| **Pink/Magenta** | Large merged blocks (4+ rows) | ~RGB(251,205,220) | `#FBCDDC` |

### Detailed per-month backgrounds:
| Month | Left Block BG | Right Block BG |
|-------|--------------|----------------|
| Sep | Yellow (250,244,17) — SUN row | Pink (251,204,220) — WED-SAT |
| Jan | Yellow (249,237,23) — SUN-TUE | White (251,251,251) — SAT |
| Feb | Pink (242,206,199) — SUN-FRI | Light cream (251,248,209) — SAT |
| Jul | Pink (238,205,204) — SUN-MON | Yellow (252,246,84) — FRI-SAT |

**Note:** The pink/yellow assignment is NOT fully deterministic from row count alone.
It appears the background may be tied to which SIDE (left vs right) and the overall
aesthetic balance. More months needed to confirm the exact rule.

**Possible rule:** 
- Large LEFT blocks (4+ rows) → Pink
- Large RIGHT blocks (4+ rows) → Pink  
- Small blocks (1-2 rows) → Inherit nearby row's default bg
- SAT-only blocks → White/very light

---

## 5. MERGED CELL BEHAVIOR

When festival cells span multiple rows:
- **Row dividers DO NOT pass through** the merged festival block
- The block becomes **one continuous rectangle** 
- **Background is uniform** across the merged area (no per-row color change)
- **Text flows continuously** top to bottom, ignoring row boundaries
- **Only ONE title** appears at the very top

---

## 6. OPTIONAL DEITY IMAGES

In months where the festival list is SHORT relative to available space:
- **Remaining empty cells** may contain **deity images** (e.g., February THU col1 has Krishna)
- These are **optional decorative elements**
- They appear AFTER the festival text, in the bottom portion of merged blocks
- The images are **full-cell sized** (~130×105px each)
- This is an **optional feature** — can be omitted for programmatic generation

---

## 7. FESTIVAL CONTENT FLOW

The festival list flows across blocks in this order:
1. **LEFT block** (if exists) — gets first festivals  
2. **RIGHT block** (if exists) — gets remaining festivals

Both blocks combined should list ALL festivals for the month.
The date numbers provide the ordering naturally.

---

## 8. COLOR PALETTE (Festival-Specific)

| ID | Element | RGB | Hex |
|----|---------|-----|-----|
| F01 | Title text | (210,40,30) | `#D22818` |
| F02 | Content text (on yellow bg) | (71,60,0) | `#463B00` |
| F03 | Content text (on pink bg) | (69,35,47) | `#45232F` |
| F04 | Yellow festival bg | (250,244,17) | `#FAF411` |
| F05 | Pink festival bg | (251,205,220) | `#FBCDDC` |
| F06 | White/empty cell bg | (251,251,251) | `#FBFBFB` |
