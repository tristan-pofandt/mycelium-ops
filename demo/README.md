# Prototype 1: the Brolga Industries demo

A clickable demo of Mycelium Ops for a design partner and their IT team. It runs on a made-up company, **Brolga Industries**: 4 Queensland sites, a Brisbane office, 3 entities and about 600 generated staff. Nothing connects to a real system.

Written by Claude Code; a person needs to review it.

## What's in it

**Six people to view it as** ("Viewing as" in the header): GM Operations, Site Manager, Shift Supervisor, Employee, Security Coordinator, IT Administrator. What each sees follows the ticks on Roles and permissions, so unticking a box changes their view.

**Pages:**

| Page | What it shows |
|---|---|
| Home | Different for each role. Customise lets each person drag, resize, hide and add the cards their role allows. Admins set each role's default Home. |
| Sites | Each site at a glance. A site opens a floor plan with doors, cameras, alarms and machines, people per area from card reads, and a 24-hour replay. |
| People | A radial team map (drag a task onto a person), an outline, a directory, and Skills: who holds which machine ticket, when it runs out, and which shift will have nobody certified. |
| Work and approvals | Tasks, approvals and permits to work (hot work, confined space, isolation). |
| Rosters | Plan this week and next, checked live against rest, hours, leave, headcount, tickets and weather. "Fill gaps" only suggests. A supervisor's roster goes to the Site Manager before a pretend hand-off to the rostering system. |
| Calendar | Lock levels (Locked, Ask first, Anyone can move) with a legend, approval rules, change requests, and staff see their own shifts. |
| Security | Physical and Cyber tabs, each shown only to roles allowed. Door reads at restricted doors are Valid, None or Expired. Every alert has "Show on map". |
| Documents and tax | About 40 made-up invoices and receipts. Over 95% sure goes straight through; the rest wait for review. Duplicates and changed bank details are always flagged and never paid. A tax pack exports as CSV for a tax agent; nothing is lodged. |
| Assistant | A pretend chat (no AI). |
| Roles and permissions | Who can see what, a person search to give anyone a role, default Homes, and an audit trail of every change. |
| Setup wizard | Small and multi-site flows, including a pretend floor-plan step. |
| Audit evidence | ISO 9001, ISO 45001, ISO 27001 physical controls and the Essential Eight (numbers and short titles only). Each control shows Evidence found, Gap or Stale, worked out live. "An auditor is here" builds a summary and CSV with a SHA-256 hash per item. Guest auditor access for a set time. |
| Roll call | From the header. Counts everyone on site from door reads, visitors, permit holders and the roster. Wardens tick people off on a phone. The banner turns red for the people it matters to. Ending it writes a report. Drills only. |
| What we hold about you | Each part of a person's record: where it came from, who can see it, how long it's kept, who opened it, what is never collected, correction requests, a JSON download. |
| Your systems | 40 guesses about the real company's systems, answered one by one with a progress bar. |
| TV mode | `/tv?site=ips`: a full-screen floor display that changes every 15s (safety days, output, coverage, machines, weather, permits, an announcement). Nothing personal. A roll call takes it over. |
| How it works | A guide, and a "For IT" section on how a real deployment would run. |

**Weather and roads** show on Home, Sites, Rosters and TV, in the style of Bureau of Meteorology warnings and QLDTraffic closures. People who might be cut off are counted by home postcode, only if they agreed: the GM sees counts, a supervisor their own team, an employee only themselves.

**Guesses:** "Our guess" tags (dashed) mark what we guessed about the real company. Main pages keep tags out of the data: each page lists its sources once in a strip above the feedback box. Once someone answers a guess, text uses their answer.

**Feedback:** a one-line box under every page that grows when used, a Feedback button in the header, and a link on each wizard step. It says who reads it and thanks the person.

**Safety touches:** destructive actions use hold-to-confirm, decisions toast with Undo, and every change is in the audit trail.

## Decisions made for the demo (still open with the design partner)

1. No Finance persona: Documents and tax shows to the GM; the `finance` permission can be given to anyone.
2. Commute risk uses home postcodes only for people who opted in (about 70%), and anyone can turn it off.
3. Permits only alert. Changing door access groups is described as an approved action, not shown working.
4. Roll call runs drills only. "Real" shows but is turned off and explained.

## Where feedback goes

`demo/server.py` adds every piece of feedback and every answer to `demo/feedback/FEEDBACK.md` (newest last, with the page, the role viewed, and a name and team if given) and keeps the current answers in `demo/feedback/systems.json`. The folder is git-ignored, because feedback may name real systems and people. Input is trimmed, length-limited, rate-limited per address and HTML-escaped.

## Run it

```bash
cd web && npm ci && npm run build
python demo/server.py
```

Open http://127.0.0.1:8200. For hot reload, run the server and `cd web && npm run dev` (port 5174, sends `/api` to 8200).

Settings: `DEMO_HOST` and `DEMO_PORT` (default 127.0.0.1:8200); `DEMO_CODE` (an access code needed before feedback is accepted; always set it when the demo is online); `DEMO_FEEDBACK_DIR`.

## Installable

It installs as an app: on a PC with Chrome or Edge's install icon, on Android with "Install app", on iPhone with Share then "Add to Home Screen". Its manifest is `web/src/demo/manifest.webmanifest`. Icons and the service worker are in `web/public` (only the app shell is cached; feedback always goes to the server).

## On the homelab

- **Where:** container `mycelium-demo` in LXC 101, gunicorn on `127.0.0.1:8200`, public through Tailscale Funnel on port 10000. This is the only public Mycelium site: fictional data only, and feedback needs the access code.
- **Deploy or update** from this folder (no push needed): `bash infra/homelab/demo-deploy.sh`. It ships the source, builds `infra/demo.Dockerfile` in the LXC and restarts the container. The access code is made on the server the first time and kept in `/opt/mycelium-demo/demo.env` (root only), never in the repo.
- **Read feedback:** `bash demo/pull-feedback.sh` copies it into `demo/feedback/`. It lives in the Docker volume `mycelium-demo-feedback`. The server stops taking feedback once the file reaches 5 MB.
- **Take it down:** `pct exec 101 -- tailscale funnel --https=10000 off` and `pct exec 101 -- docker rm -f mycelium-demo`.

## Tests

`cd demo && python -m unittest -q` (server) and `cd web && npm test` (the rules behind rosters, permits, roll call, documents, weather, layouts and role scopes).
