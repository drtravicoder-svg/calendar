# Aldol Reaction — Motion-Graphic Explainer

An 85-second, 1920×1080, 30 fps HyperFrames video explaining the base-catalysed aldol addition of propanal, for undergraduate chemistry students.

Rendered output: `renders/aldol-reaction.mp4`

## Scenes

| Time | Scene |
| --- | --- |
| 0–6 s | Title; propanal draws itself bond by bond |
| 6–14 s | Zoom; carbonyl C glows; α-carbon labelled, one α-H shown (pKa ≈ 17) |
| 14–28 s | Step 1: hydroxide deprotonates the α-carbon → carbanion + H₂O (⇌) |
| 28–38 s | Resonance: carbanion ↔ enolate in brackets; enolate turns blue, tagged “Nucleophile” |
| 38–55 s | Step 2: enolate α-C attacks the red carbonyl C; new C–C bond grows with a yellow glow; alkoxide forms |
| 55–68 s | Step 3: water protonates the alkoxide; OH⁻ regenerated (⇌) |
| 68–85 s | Product 3-hydroxy-2-methylpentanal, “ald + ol”, three-line summary, overall equation |

## How it is built

- `index.html` holds the whole composition. A small SVG “molecule” helper places atoms, bonds, lone pairs and charges in one shared frame, so atoms stay put between scenes. Molecules only move, rotate or bend (sp² → sp³), and are never redrawn.
- Colour code: electrophile `#D62828`, nucleophile `#1D4ED8`, arrows `#22A447`, new C–C glow `#FFD60A`.
- Each curved arrow starts at a lone pair or bond, is drawn tail to head, and then the timeline holds 0.5 s before the bond change it describes.
- Breaking bonds fade and retract. Forming bonds grow from the nucleophile toward the electrophile. Charges appear or vanish only when electrons move.

## Audio

- Narration: `assets/audio/n1–n7.mp3`, generated locally with Kokoro TTS (voice `af_heart`, speed 0.92), one clip per scene.
- Music: `assets/audio/music.mp3`, a synthesized ambient pad played at −20 dB (`data-volume="0.1"`).
- SFX: `assets/sfx/pop.mp3` (bond formation) and `whoosh-short.mp3` (arrow draws), from the HyperFrames bundled library (Pixabay Content License). Resonance has no sound.

## Commands

```bash
npx hyperframes preview      # live preview
npx hyperframes check        # lint + layout + motion + contrast
npx hyperframes render -q high -o renders/aldol-reaction.mp4
```
