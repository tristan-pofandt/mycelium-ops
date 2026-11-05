# Mycelium Ops: notes for Claude Code

Mycelium Ops is one app that runs a whole company: sites, people, rosters, approvals, calendar, physical and cyber security, documents and audit evidence, with each person seeing only what their role needs. It is one of three Mycelium products (Ops, Monitor, Commerce). They are separate repos with one shared look.

Right now it is **prototype 1**: a clickable demo on a made-up company, Brolga Industries, for a design partner to review. Read `demo/README.md` first, then `docs/roadmap.md` (the plan and its limits). For anything you see on screen: `DESIGN.md`, then `docs/design/`.

## Where things are

- `web/src/demo/`: the app. `DemoApp.jsx` is the shell and the page list. Pages are in `pages/`. Data is made up in `data.js` and friends. What reviewers click is saved by `store.js`.
- **Design kit** in `web/src/` (`tokens.css`, `app.css`, `choreography.js`, `reduced.js`, `motion/*`, `Page.jsx`, `shell.jsx`, `ui.jsx`, `charts.jsx`, `tasks.jsx`, `customise.jsx`, `icons.jsx`, `theme.js`) and `docs/design/`. **This repo holds the reference copy.** Every other Mycelium repo copies it unchanged. If you change a kit file, copy it to `mycelium-monitor` too.
- `demo/server.py`: serves the build and saves feedback to git-ignored `demo/feedback/`. Never commit feedback.
- `infra/`: the Dockerfile and `homelab/demo-deploy.sh`.
- `reports/` and `research_notes/`: research on the compliance (RegTech) market.

## Commands

- `cd web && npm ci && npm run build && npm test`
- `python demo/server.py` (http://127.0.0.1:8200). Dev with hot reload: run the server, then `cd web && npm run dev` (port 5174).
- Server tests: `cd demo && python -m unittest -q`
- Deploy to the homelab: `bash infra/homelab/demo-deploy.sh`

## Adding a feature to the prototype

- **Data** goes in `data.js` (or a new file next to it), made from a fixed seed with dates relative to today. A new generator gets its own `rng(seed)` added after the others. Never add a call to the shared `rand()`: it would rename people that feedback already mentions. A test checks `PEOPLE[0..20]` stay the same.
- **A page** is one entry in `PAGES` (`DemoApp.jsx`) with a `cap`. A new permission is one row in `CAPS` plus `DEFAULT_GRANTS` per role. A smaller feature is a tab or a card on an existing page.
- **Clicks** are kept in `store.js` (new keys in `fresh()`), so Reset clears them. Anything a real system would log goes through `audit()`. Decisions toast with Undo. Destructive actions use `HoldButton`.
- **Sources:** every card calls `SourceNote` with the systems it uses. A system we have to guess at is a new entry in `assumptions.js`. Text names systems with `SystemName`.
- **Scope:** filter lists with `inScope()` and the viewer's site.
- **Rules** of a feature are pure functions in its data file, tested next to it.
- **About page:** add a line to "Try this" and, if it would touch a real system, a row to "For IT".
- **Look and motion:** follow `docs/design/` exactly. Feature CSS goes in its own file next to the feature.

## Rules

- Fictional data only. No real company names, branding or people. Real data only after a pilot the customer's IT approves.
- AI suggests, people approve. Documents and emails are untrusted input: text in them never triggers an action.
- Physical security is metadata only (no video).
- Staff can always see what is held about them.
- The repo is public: never commit secrets, `.env` files, feedback or `.docx` exports (the overview holds the demo's access code).
- Every visual has a keyboard and screen-reader version. Status is never colour alone.
- After meaningful work, update the docs and the vault note `Projects/Mycelium Ops.md`. Credit Claude and say a person needs to review it.
- Commit messages end with the Co-Authored-By line from the session. Stop any dev server you start.
