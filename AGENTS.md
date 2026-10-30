# AGENTS.md

Guidance for AI agents working in this repo.

## What this is

A Japanese-manga-style space-opera comic retelling of *Journey to the West*. The repo holds character design anchors, the design bible, and (as it grows) finished comic pages.

## Hard rules

1. **`assets/characters/*.png` are the canon.** Never redesign, recolor or restyle an existing character without explicit user approval. A changed design ships as a new versioned sheet (e.g. `wukong-v2.png`) and an update to `assets/characters/design-bible.md`.
2. **Match the locked art direction** in the design bible for every new image. Reuse the style block verbatim.
3. **Keep the never-change list intact** for each character: signature props, hair, eyes, silhouette, palette.
4. **No text baked into generated images.** Lettering, sound effects and titles are added in post. Image models render text unreliably.
5. **One generation pass per asset.** Do not loop, do not regenerate for minor taste differences. Accept the result, note deviations, move on. Token/credit budget matters here.
6. **Don't overwrite an anchor.** Add a versioned file instead.

## Image workflow

- Tool: `ImageGen`. Use a character sheet as a reference image for identity; label it in the prompt ("the first image is the identity reference; keep face, hair, costume and palette unchanged").
- New character sheets: 1024x1536, same reference-sheet layout as the existing five.
- Comic pages: 1024x1536 portrait (or 1536x1024 for wide establishing shots), same ink/screentone style.
- Save to `assets/characters/<slug>.png` for sheets, `comic/chNN/pNN.png` for pages (2-digit chapter, 2-digit page). `ch01` = chapter 1.
- After generating, copy the final file into the repo; do not commit the raw `vibe_images/` output folder.

## Character slugs

`wukong`, `red-boy`, `nezha`, `erlang`, `guanyin`, `bajie`, `wujing`, `sanzang`. New characters get a kebab-case slug and an entry in the design bible.

`lineup-bajie-wujing-sanzang.png` is a derived composite (Pigsy / Sandy / Sanzang, left to right) for panels that need all three and hit the 3-reference limit. Regenerate it from the individual sheets if any of them change.

## Writing tone

- Story text: cinematic, terse, present tense. Chinese prose with English character names in the docs where useful.
- No lore dumps in the README; the README is a pitch, the design bible is the spec.

## Commits

- Conventional-ish messages: `docs: ...`, `art: add <character> sheet`, `comic: add ch01 p01`.
- Commits from this machine use `test@test.com` (set locally, not globally).
