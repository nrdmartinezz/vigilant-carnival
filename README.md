# Next.js business starter

Next.js App Router + TypeScript + Tailwind CSS v4, with the same config-first setup as [Astro Business Starter](https://github.com/chuckwebpro/Astro-Business-Starter): one business file, one nav file, and token-driven theming.

## Populate before you build

| File | What goes in it |
| --- | --- |
| `src/config/site.ts` | Business name, NAP, hours, socials, schema.org type, analytics IDs |
| `src/config/navigation.ts` | Header tree, CTA, footer groups, legal links |
| `tokens/*.json` | Brand colors, type, spacing — theme regenerates on `dev` / `build` |
| `public/favicon.svg` | Client mark |
| `site.ts` → `url` | Production origin, no trailing slash |

Blank analytics / verification / form fields ship nothing. Fill them only when the client actually needs them.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Generates the theme, then starts Next.js |
| `npm run build` | Generates the theme, then production build |
| `npm run tokens` | Regenerates `src/styles/theme.css` from `tokens/*.json` |

## Layout model

Every block is `Section > Container > content`:

- **Section** — full viewport width. Owns background and vertical rhythm.
- **Container** — `max-w-page` (1350px), centred, with gutters.

Responsive is desktop-first using Tailwind `max-*` variants. Breakpoints live in `tokens/layout.json`.

See `docs/THEMING.md` for token rules.
