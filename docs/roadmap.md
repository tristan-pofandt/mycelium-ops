# Mycelium Ops roadmap

Written with Claude Code from Tristan's notes of 31 Oct and 4 Nov 2026; a person needs to review it. App monitoring is in Mycelium Monitor; shops and dropshipping are in Mycelium Commerce.

## Direction

One app that joins up a company's sites, people, schedules, physical and cyber security, money and compliance, set up by a wizard and an AI helper, and fitting anything from one site to many.

**First customers:** large organisations with many sites, regions and entities and hundreds of staff, starting with manufacturers. A design partner (a general operations manager over several factories at a large manufacturer) reviews each prototype.

**Better than single tools because:**
1. One picture of the whole company: sites, people, schedules, security and money together.
2. Setup is done for you: the wizard and helper find and connect the data.
3. Open and under the company's control: every check, data source and AI action can be seen and changed, and data can stay on the company's own servers.

**What the design partner asked for (4 Nov):** one app for everyone (staff see their own tickets, tasks and shifts; managers see everyone under them); easy handing out of permissions, tasks and access by role and place in the hierarchy; the company's own single sign-on; physical security (cameras, door cards such as Salto, visitors, alarms, fences, locked comms rooms, computers that lock when left); connectors (Xero, MYOB, Tanda, Deputy, Trello and more on request); a simple phone app; an optional email helper with sharing levels; and a shared calendar with business events taken from personal calendars, approvals for big changes and locks on senior staff's events.

## Limits

- **No remote control by free text.** Agents never take free-text commands from the website.
  - Read-only first: agents and site gateways only collect, connect outward and open no port.
  - Later, only a short list of named actions with fixed settings (revoke a card, apply a lock-screen rule).
  - Every action is approved in the site, signed by the server, checked by the agent and logged at both ends. The agent has a local off switch.
  - Admin rights only to install.
- **AI suggests, people approve.** Nothing changes a system, sends a message or posts without a person saying yes.
- **Documents and emails are untrusted.** The AI may read and summarise them, but text inside them never triggers an action.
- **Two kinds of data.** Monitoring events stay metadata only. Business records (people, rosters, invoices, door events, email summaries) are a separate store the company agrees to: limited by role, encrypted, sensitive fields (pay, tax file numbers, bank details) encrypted again, kept for a set time, exportable and deletable.
- **Fake data until a real pilot.** No real company data until that company's IT approves a pilot. No real company names or branding in the product, demos or the public repo.
- **Cameras: metadata only.** Health and events, never video. Links open the company's own camera system.
- **Use the company's own tools to enforce.** Screen lock and similar rules come from Intune or Group Policy. Ops checks and reports gaps.
- **Staff privacy.** Workload comes from tasks, tickets and rosters, never keystrokes or screen time. Staff can see what is held about them. Check state workplace surveillance laws (NSW and the ACT have their own) before turning on cameras, door logs or device data.
- **Self-hosted first.** Each company runs Ops in its own cloud or servers. A hosted service only once Ops meets the security bar a customer would ask for.
- **Compliance words.** "Evidence found" and "Gap", never "you are compliant". No copyrighted standard text (ISO numbers and short titles are fine; the Essential Eight is free).
- **Money and tax.** Insights only, not financial product advice (that needs an AFSL). Tax features prepare packs for the owner or their registered tax agent; they never lodge. Get legal advice before these ship.

## Decisions

1. **First customers:** large multi-site organisations, starting with manufacturers. *Decided 4 Nov.*
2. **Licence for the public repo** (MIT or AGPL). *Open*; needed before a real pilot.
3. **Do agents ever run actions,** or stay read-only? *Open*; the plan assumes a short allow-list later.
4. **First compliance framework.** *Open*; Essential Eight recommended, ISO 27001 physical controls likely.
5. **Compliance is a separate app** that Ops controls as a plug-in. Ops collects, read-only; the compliance app maps evidence to controls, runs tests, takes sign-offs and exports. *Decided 4 Nov.* Research: `reports/RegTech market and gaps.md`.
6. **Pilot hosting:** in the customer's cloud (recommended) or hosted by Tristan. *Open*; decide with the design partner.

## How it will be built

| Area | Prototype 1 | Real product |
|---|---|---|
| Data | Made up in the browser | Cloud connectors first (Microsoft Graph and Intune, Tanda, Xero, Gallagher, Salto). Then one outbound-only gateway per site for on-site systems. Per-machine agents only where nothing else works. |
| Back end | A small Flask server for feedback | Flask, Postgres with row-level security per organisation and scope, a job queue, object storage for documents, a live bus across workers. |
| Sign-in | None | Single sign-on (OIDC and SAML: Entra ID, Okta, Google), SCIM directory sync, passkeys. |
| Audit | Shown in the demo | A tamper-evident hash chain from the start. |
| Phone | Installable web app | Installable web app first, then a Capacitor wrapper for app stores and managed phones. |
| Installing | One container | Signed MSI and Intune packages, `.deb` and `.rpm`, a container image and a Helm chart, all with checksums. |

## Modules

Each module is a set of data sources plus pages, turned on by the setup profile and by the data that arrives.

- **People and roles.** A Home for each role (employee, manager, site and executive levels, specialists). Permissions are role × scope (organisation → region → entity → site → department → team → self). The hierarchy comes from the directory. Preset roles the owner can edit. "View as" and "why can this person see this?". Delegation with an end date, acting roles, access reviews, break-glass access with an alert, and hiding fields (pay only for HR and Finance).
- **Calendar.** Layers (organisation to personal, rosters, maintenance, audits, training, leave). Import personal calendars but keep business events only, with private events shown as busy. Approval rules as policies. Lock levels on events. Two-way sync with Outlook and Google; Ops flags when someone deletes their copy.
- **Tasks.** A built-in board plus Trello, Jira, Planner and ServiceNow. Assign to a person, role or team. Workload feeds the team map.
- **Operations (manufacturing first).** Site comparison: OEE, downtime, safety incidents, maintenance backlog, quality, on-time delivery, roster coverage. Data from CSV drops, maintenance systems or plant historians through the site gateway. Exact contents decided with the design partner.
- **Physical security.** Door cards (Gallagher, Salto, Inner Range): forced and held-open doors, cards still active for leavers, restricted areas. Visitors (SwipedOn, Envoy or built-in). Camera health and events. Alarms, fences, guard patrols. Comms rooms: door-open-too-long, temperature, photo inspections. Screen lock and disk encryption from Intune. A policies view with evidence and gaps.
- **Cyber security.** A ledger of checks, each showing what, why, how, when, result and evidence, with its own settings. Checks: code, website (TLS, domains, email records), sign-ins, SaaS accounts (MFA, leavers), devices (mapped to the Essential Eight), public sharing links, lookalike domains, changed supplier bank details, AI agent permissions.
- **Connectors.** Each declares the data it gives, and modules light up when it arrives. First: Microsoft 365, Tanda, Deputy, Trello, Jira, Xero, MYOB, Gallagher, Salto, SwipedOn. Later: SAP, Workday, ServiceNow. Generic: REST with OAuth, webhooks, CSV and SFTP, read-only database views. A request-a-connector page. A self-hosted OAuth sync layer (such as Nango).
- **Setup wizard.** Size picks the flow. Enterprise: connect sign-on and the directory, confirm the structure, set policies, then hand each site's section to its manager and watch progress. Templates (manufacturing site, office, warehouse, retail). A setup score; every step says what it unlocks.
- **AI helper.** Chat over the company's own records with sources for every answer. Scheduled tasks. Agents are read-only, then drafts, then allow-listed actions. Each agent's history, cost and pause switch are visible, with a spend cap.
- **Email helper (opt-in).** Levels: off, metadata only, subject plus summary, full message for chosen folders. Labelled sensitive mail is always skipped. Pulls out tasks, deadlines and events with a link to the source. Stores summaries, not bodies. Needs the company IT's consent.
- **Phone.** Approvals, alerts, a daily brief, my shifts and tasks, incident reports with photos, inspection checklists, visitor sign-in, revoking a lost card, receipt capture. Desktop only: permission grids, connector setup, the full map, reports. A bottom tab bar (Home, Approvals, Tasks, Alerts, Chat), one decision per screen.
- **Map views.** One graph, many views: team (people, roles, tasks; tree or radial), sites (doors, cameras, rooms), integrations, money (a Sankey). `force-graph` already does tree and radial layouts; only the Sankey needs `d3-sankey`. Each view has a list or table version.
- **Later.** Documents and money (capture, extraction with confidence, review queue, matching receipts to bank lines, cash flow, GST set-aside); tax and finance packs; CO₂ estimates (scope 1, 2 and 3 from bills and spend); compliance packs (Essential Eight, ISO 27001, WHS, IEC 62443, Privacy Act) and a calendar of due dates.

## Plan

Effort: S about a day, M a few days, L a week or more of evenings.

| Phase | Steps | Status |
|---|---|---|
| **A. Discovery** | A.1 Interviews with the design partner (systems per site, morning routine, hand-built reports, approvals, site differences, security incidents, what IT needs); notes keep no names or quotes. A.2 Personas with top tasks. A.3 Demo company. | A.3 done: **prototype 1** (4-5 Nov). Waiting on feedback for A.1 and A.2. |
| **B. Foundation** | B.1 Postgres and jobs. B.2 Organisation model with row-level security. B.3 Roles and scopes, "view as", "why can they see this". B.4 Single sign-on and SCIM. B.5 Delegation and tamper-evident audit. B.6 Staff see their own data. | B.6 shown in prototype 1. |
| **C. Role-based app** | C.1 Home per role with admin default layouts. C.2 Tasks and approvals. C.3 Calendar with locks and change requests. C.4 Phone: installable (done), bottom tab bar and web push. C.5 Screen-reader pass. C.6 First walkthrough with the design partner. C.7 Customisable Home and TV mode. | C.1, C.7 shown in prototype 1. |
| **D. Connectors** | D.1 Framework (catalogue, OAuth sync, REST, webhooks, CSV). D.2 Microsoft 365. D.3 Rosters and tasks. D.4 Xero and MYOB, read-only. D.5 A written protocol spec. | Not started. |
| **E. Operations** | E.1 Site comparison. E.2 Data in. E.3 Daily brief and alerts. E.4 Rosters and skills with hand-off after approval. E.5 Weather and roads (check the sources' terms of reuse). | E.4, E.5 shown in prototype 1. |
| **F. Physical security** | F.1 Site gateway. F.2 Door cards. F.3 Visitors. F.4 Cameras and alarms. F.5 Inspections and policies. F.6 Sites map. F.7 Permits to work. F.8 Emergency roll call. | F.6, F.7, F.8 shown in prototype 1. |
| **G. Setup wizard** | G.1 Small flow. G.2 Enterprise flow handed out per site. G.3 Templates and score. | Shown in prototype 1 (pretend). |
| **H. AI** | H.1 Helper with sources and permission-filtered answers (check model and price at build time). H.2 Scheduled tasks and agents. H.3 Email and calendar extraction. H.4 Wizard gap questions and map view edits. | Not started. |
| **I. Packaging** | I.1 Container, Helm, installer, signed releases. I.2 Gateway packages through Intune. I.3 Phone app wrapper. | Not started. |
| **J. Later modules** | J.1 Cyber security centre. J.2 Compliance app (shown in prototype 1 as Audit evidence). J.3 Documents and money (shown as Documents and tax). J.4 CO₂. | |
| **K. Ready to sell** | K.1 Ops' own security (pen test, `SECURITY.md`). K.2 Licence and legal review. K.3 A one-month pilot at one real site, approved by its IT. | |

## Design to-do (from the 5 Nov review, 28/40)

- Long pages (Security, My data on phones) need in-page links or more folding.
- Escape should leave Customise mode.
- No search across people or questions yet.
- Money columns in tables are left-aligned.
- About 275px of header and banner before content for the GM on a phone.

## How this fits Tristan's goals

The security parts (physical and cyber, the gateway, Essential Eight and ISO 27001 evidence) double as cybersecurity portfolio work, and the homelab is the first place to run them. Working with a design partner on a real problem is product experience. See the vault note `Career/Career and Cybersecurity.md`.
