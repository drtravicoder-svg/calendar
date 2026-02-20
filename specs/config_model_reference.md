# VENKATRAMA CALENDAR â€” CONFIG MODEL REFERENCE
## How the 3 JSON files map to visual zones

---

## FILE OVERVIEW

| File | Purpose | Changes when... |
|------|---------|-----------------|
| `design_template.json` | Pixel positions, gradients, spacing, colors, layout rules | Redesigning the calendar layout |
| `company_data.json` | Company name, logo, contacts, credits, year | Different company or new year |
| `monthly_data.json` | Month names, sunrise/sunset, gulika kalam, festivals, daily panchangam | Every month (12 entries) |

---

## ZONE â†’ DATA SOURCE MAP

### HEADER (Y=0â†’345) â€” Reads: design_template + company_data

| Zone | What renders | Data source | Key path |
|------|-------------|-------------|----------|
| H1 | Yellow top border | design_template | `header.H1_yellow_top_border` |
| H2 | Orangeâ†’Red gradient | design_template | `header.H2_gradient_top_border.stops[]` |
| H3 frame | Beveled box border | design_template | `header.H3_copyright_bar.frame` |
| H3 text | "Â© 2025 Venkatrama..." | company_data | `year`, `company.name_english`, `company.website` |
| H5 logo | V shield emblem | company_data | `company.logo_file` |
| H5 badge | JRRC publisher seal | company_data | `company.badge_file` |
| H5 symbol | "à°¶à±à°°à±€" | company_data | `company.decorative_symbol` |
| H5 company name | "à°µà±‡à°‚à°•à°Ÿà°°à°¾à°® à°…à°‚à°¡à± à°•à±‹." | company_data | `company.name_telugu` |
| H5 triangle | â–¼ red separator | design_template | `header.H5_branding_area.elements.decorative_triangle` |
| H5 contact | Phone, email | company_data | `contact.phone`, `contact.cell`, `contact.email` |
| H5 tagline | "à°Žà°¡à±à°¯à±à°•à±‡à°·à°¨à°²à± à°ªà°¬à±à°²à°¿à°·à°°à±à°¸à±..." | company_data | `contact.tagline` |
| H5 branches | "à°¹à±ˆà°¦à°°à°¾à°¬à°¾à°¦à±, à°µà°¿à°œà°¯à°µà°¾à°¡..." | company_data | `branches[]` |
| H5 app promo | "à°®à°¾ à°•à±à°¯à°¾à°²à±†à°‚à°¡à°°à± à°¯à°¾à°ªà±..." | company_data | `promo.app_text_telugu` |
| H5 app URL | "@ venkatramacalendar.com/app" | company_data | `promo.app_url_display` |
| H6 | Warm brown line | design_template | `header.H6_warm_separator` |
| H7 | Red bar (no text) | design_template | `header.H7_red_bar_1` |
| H8 left text | Panchangam credit (white) | company_data | `credits.panchangam` |
| H8 right text | Publisher credit (yellow) | company_data | `credits.publisher` |
| H9 | Red bar (no text) | design_template | `header.H9_red_bar_2` |
| H10 | Yellow gradient | design_template | `header.H10_yellow_gradient_strip.stops[]` |
| H11 | Orangeâ†’Red gradient | design_template | `header.H11_bottom_border.stops[]` |
| H12 | Pinkâ†’White fade | design_template | `header.H12_transition.stops[]` |
| Watermarks | "venkatramacalendar.com" | company_data | `watermark_text` |

### B1 CREDIT BAR (Y=346â†’374) â€” Reads: design_template + company_data

| Zone | What renders | Data source | Key path |
|------|-------------|-------------|----------|
| B1 frame | Green box + border | design_template | `B1_credit_bar` |
| B1 text | "à°ªà°‚à°šà°¾à°‚à°—à°•à°°à±à°¤à°²à± : à°•à±à°°à±€.à°¶à±‡||..." | company_data | `credits.b1_full_text` |

### B2 SUB-HEADER (Y=375â†’498) â€” Reads: design_template + company_data + monthly_data

| Zone | What renders | Data source | Key path |
|------|-------------|-------------|----------|
| B2 frame | Green borders, dark lines, column dividers | design_template | `B2_subheader.frame`, `.columns` |
| **B2-LEFT** | | | |
| Year/masam line 1 | "à°¶à±à°°à±€à°µà°¿à°¶à±à°µà°¾à°µà°¸à± à°¨à°¾à°® à°¸à°‚à°µà°° à°­à°¾à°¦à±à°°à°ªà°¦ à°¶à±. à°¨à°µà°®à°¿" | monthly_data | `months[i].b2_left.year_masam_line1` |
| Year/masam line 2 | "à°²à°—à±à°¨ à°†à°¶à±à°µà±€à°¯à±à°œ à°¶à±. à°…à°·à±à°Ÿà°®à°¿ à°ªà°°à±à°¯à°‚à°¤à°‚" | monthly_data | `months[i].b2_left.year_masam_line2` |
| Sunrise/sunset table | 4 rows Ã— (date, sunrise, sunset) | monthly_data | `months[i].sunrise_sunset` |
| Panchangam side text | Masam transitions | monthly_data | `months[i].b2_left.panchangam_text` |
| **B2-CENTER** | | | |
| Year "2025" | Large white text | company_data | `year` |
| Month Telugu | "à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±" (yellow) | monthly_data | `months[i].month_telugu` |
| Month English | "SEPTEMBER" (white) | monthly_data | `months[i].month_english` |
| Magenta background | Solid fill | design_template | `B2_subheader.center_panel.background` |
| **B2-RIGHT** | | | |
| Title "à°—à±à°²à°¿à°• à°•à°¾à°²à°‚ :" | Static label | design_template | `B2_subheader.right_panel.title_box.text` |
| 7 weekday rows | Times per day | monthly_data | `months[i].gulika_kalam[]` |

---

## RENDERING PIPELINE

```
FOR each month_index (0..11):

  month = monthly_data.months[month_index]
  company = company_data
  template = design_template

  â”€â”€ HEADER (same all pages, render once or cache) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  1. Draw borders & gradients         â† template.header.H1..H12
  2. Draw H3 frame                    â† template.header.H3_copyright_bar.frame
  3. Render H3 text                   â† company.year, company.company.name_english, ...
  4. Place logo image                 â† company.company.logo_file
  5. Place badge image                â† company.company.badge_file
  6. Render company name              â† company.company.name_telugu (auto-center)
  7. Draw triangle separator          â† template (static shape)
  8. Render contact info              â† company.contact.* (auto-center)
  9. Render branches                  â† company.branches[] (auto-center, join with comma)
  10. Render app promo                â† company.promo.* (auto-center)
  11. Fill H7/H9 red bars             â† template (solid color)
  12. Render H8 embossed text         â† company.credits.* (3D effect)

  â”€â”€ B1 CREDIT BAR (same all pages) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  13. Draw green box                  â† template.B1_credit_bar
  14. Render credit text              â† company.credits.b1_full_text

  â”€â”€ B2 SUB-HEADER (changes per month) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  15. Draw B2 frame + dividers        â† template.B2_subheader.frame, .columns
  16. B2-LEFT: Render year/masam      â† month.b2_left.year_masam_line1, line2
  17. B2-LEFT: Render sunrise table   â† month.sunrise_sunset
  18. B2-CENTER: Fill magenta bg      â† template.B2_subheader.center_panel.background
  19. B2-CENTER: Render year "2025"   â† company.year
  20. B2-CENTER: Render month Telugu  â† month.month_telugu
  21. B2-CENTER: Render month English â† month.month_english
  22. B2-RIGHT: Draw title box        â† template (static label)
  23. B2-RIGHT: Render gulika table   â† month.gulika_kalam[]

  â”€â”€ B3 DAY GRID (changes per month) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  24. [TO BE SPECIFIED]               â† month.days[]

  â”€â”€ B4 FOOTER (changes per month) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  25. Render footer greeting          â† month.footer_text

  â”€â”€ B5 BOTTOM BORDER (same all pages) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  26. Draw gradient                   â† template (mirrors H10/H11)

  â”€â”€ OVERLAY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  27. Render watermarks (LAST)        â† company.watermark_text

  28. EXPORT page as PNG
```

---

## HOW TO USE FOR A DIFFERENT YEAR

### Minimum changes for 2026 calendar:
1. **company_data.json**: Change `"year": 2026`
2. **monthly_data.json**: Replace all 12 month entries with 2026 panchangam data
3. **Assets**: Keep logo/badge unless rebranded

### For a different company:
1. **company_data.json**: Change all company/contact/branch/credit fields
2. **Assets**: Supply new `v_logo.png` and `jrrc_badge.png`
3. **design_template.json**: Usually no changes (unless rebranding colors)

### To reskin colors:
1. **design_template.json** â†’ `colors` object: change hex values
2. All `_key` references will pick up new colors automatically

---

## VALIDATION CHECKLIST

| Check | Rule |
|-------|------|
| âœ… company.name_telugu | Max 30 Telugu chars (fits at 41pt in X=200-750) |
| âœ… contact.tagline | Max 60 chars |
| âœ… contact.phone | Max 15 chars |
| âœ… contact.email | Max 40 chars |
| âœ… branches[] | Max 5 entries, 15 chars each |
| âœ… credits.panchangam | Max 80 chars (fits H8 left X=100-490) |
| âœ… credits.publisher | Max 60 chars (fits H8 right X=500-840) |
| âœ… months[] | Exactly 12 entries |
| âœ… months[i].days[] | 28-31 entries per month |
| âœ… months[i].gulika_kalam[] | Exactly 7 entries (Sun-Sat) |
| âœ… months[i].sunrise_sunset | Exactly 4 sample dates |
| âœ… Logo file | RGBA PNG, ~117Ã—98px |
| âœ… Badge file | RGBA PNG, ~225Ã—88px |
