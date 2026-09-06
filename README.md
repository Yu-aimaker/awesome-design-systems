# AwesomeDS

A living design-system canon, internal Plugin skills, Knowledge references, and a documentation app that uses the same tokens it demonstrates.

- `AwesomeDS/`: design rules, semantic tokens, foundations, and a standalone `preview.html`.
- `Knowledge/`: design reasoning and reference notes for typography, color, interaction, and component systems.
- `Plugin/skills/`: internal agent workflows for thinking, applying, creating, and verifying a design system. Future open-source distribution is planned.
- `apps/web/`: Next.js App Router documentation and interactive component gallery.

## Run the documentation

```sh
cd apps/web
pnpm install
pnpm dev
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Redirects to `/docs` |
| `/docs` | Introduction and canon workflow |
| `/docs/principles` | Purpose, control, feedback, and craft |
| `/docs/tokens` | Reference → semantic → component |
| `/docs/color` | White, dark, and blue semantic roles |
| `/docs/typography` | Geist, Noto Sans JP, and Geist Mono |
| `/docs/spacing` | Spacing scale and radius rules |
| `/docs/motion` | STA-19 C hybrid motion strategy |
| `/docs/plugin` | Use the internal Plugin skills |
| `/docs/knowledge` | Design references and source notes |
| `/gallery` | Component preview directory |
| `/gallery/buttons` | Action priority, save, and undo |
| `/gallery/forms` | Validation, simulated failure, and retry |
| `/gallery/chat` | assistant-ui thread and composer; local replies |
| `/gallery/color` | Copy semantic variables and compare themes |
| `/gallery/typography` | Latin and Japanese type specimens |
| `/gallery/spacing` | Interactive spacing scale |
| `/gallery/motion` | CSS tokens, Motion layout, and Lottie completion |
| `/sources/...` | Generated copies of canon, Knowledge, and Plugin source files |

Docs and gallery use a shared sidebar, a modal mobile drawer, visible focus, and a persistent light/dark theme. Every detail surface includes a short rationale, an interactive preview, and source links.

## Change the canon

Edit `AwesomeDS/tokens.json`, update the relevant foundation document, then run:

```sh
cd apps/web
pnpm sync:canon
pnpm lint
pnpm build
```

`sync:canon` resolves token references into the generated section of `src/app/globals.css`, generates `AwesomeDS/preview.html`, and copies source documents to `public/sources`. It runs before development and production builds. The token gallery imports the canon directly. Generated source copies are ignored by Git.

STA-19 C: simple motion uses owned duration/easing tokens in CSS. Complex layout uses `motion/react`; completion illustration uses lazy-loaded `lottie-react`. All motion previews start still, expose controls, and honor reduced motion. `three` remains an optional installed dependency for a future spatial demonstration with a concrete purpose.

All form and chat examples run locally. No model API, database, or external account is required.

Build tooling uses Webpack with the TypeScript compiler API and an in-process build worker. This supports constrained environments where Turbopack’s CSS worker cannot open a local port. Geist font assets are self-hosted; Noto Sans JP loads at runtime with local fallbacks. See `apps/web/src/fonts/README.md`.
