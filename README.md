# Personal portfolio — jaikrishnan.in

Single-page portfolio site for Jaikrishnan Ganeshan, engineering and product leader
(embedded systems, robotics and IoT).

## What's here

React + Vite + TypeScript, styled with Tailwind and shadcn/ui, with Supabase behind it.
The page is composed from section components in `src/components/portfolio/`:

| Section | What it covers |
|---|---|
| `Hero` | Headline and positioning |
| `Experience` | Roles, with what was owned at each |
| `Capabilities` | Skills grouped by discipline |
| `Products` | Shipped products and what they do |
| `Patents` | Granted IP |
| `Education` | Degrees |
| `Languages` | Spoken languages |
| `Philosophy` | How I approach building |
| `JourneyInfographic` | Career arc as a visual |

`ThemeProvider` handles light/dark. `src/pages/` holds the route shells (`Index`, `NotFound`).

## Running it

```bash
npm install
npm run dev
```

Supabase configuration is read from `VITE_SUPABASE_*` environment variables.

## Note on `.env`

A `.env` is currently committed to this repo. The values in it are `VITE_`-prefixed, which
means Vite inlines them into the client bundle at build time — the publishable (anon) key is
public by design and is not a leak on its own. It is still the wrong place for them: the day a
`service_role` key or any server-side secret goes into that file it would be committed too.
Move them to an untracked `.env.local`, add `.env` to `.gitignore`, and confirm Row Level
Security is enabled on every Supabase table before making this repository public.
