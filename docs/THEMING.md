# Theming

`tokens/*.json` is the only committed source of design values.
`src/styles/theme.css` is **generated** from it and is gitignored — never edit it.

Generation runs automatically from `predev` and `prebuild`, or manually with `npm run tokens`.

## How tokens map to Tailwind

Token paths become Tailwind v4 theme namespaces:

| Token path        | CSS variable        | Utility           |
| ----------------- | ------------------- | ----------------- |
| `color.brand.500` | `--color-brand-500` | `bg-brand-500`    |
| `color.ink.muted` | `--color-ink-muted` | `text-ink-muted`  |
| `font.sans`       | `--font-sans`       | `font-sans`       |
| `text.3xl`        | `--text-3xl`        | `text-3xl`        |
| `radius.lg`       | `--radius-lg`       | `rounded-lg`      |
| `shadow.md`       | `--shadow-md`       | `shadow-md`       |
| `spacing.section` | `--spacing-section` | `py-section`      |
| `container.page`  | `--container-page`  | `max-w-page`      |
| `breakpoint.md`   | `--breakpoint-md`   | `md:` / `max-md:` |

The generator emits `@theme static`, so every token reaches the stylesheet even if no utility class references it.

## Semantic aliases

Raw ramps (`brand`, `neutral`, `accent`) are referenced by semantic tokens:

- `surface.*` — band backgrounds (`Section`)
- `ink.*` — text colours
- `line.*` — borders
- `focus` — focus ring

A rebrand usually means editing the brand ramp in `tokens/color.json` and letting the aliases follow.

## There is no override stylesheet

If one place needs a value the tokens do not have, that is a component-level decision — a prop or a local class. Not a global escape hatch.
