# RegTech: the market and the gap Ops could fill

Research done 4 Nov 2026 by Claude. Sources, quotes and links are in `research_notes/RegTech market and gaps/`. Many sources are vendor marketing or estimates: check dates, limits and penalties with the regulator before telling a customer. A person needs to review this.

## The answer in one paragraph

RegTech is software that helps a company follow the rules and prove it. It is a big, busy market (about USD 18-26 billion in 2026, growing about 20% a year). Most corners already have a strong leader. The gap that is still open is narrow but real: **one evidence pack that joins door, camera, visitor and inspection data from different vendors with rosters, people records and Intune device data, per site and per control**, mapped to the free Essential Eight, SOCI hazards and ISO 27001 numbers, and sent into the risk tools a company already owns. Big enterprises can already buy door-access evidence (AlertEnterprise, HID SAFE, RightCrowd, Genetec ClearID), and Gallagher sites can already block a door when a licence runs out, so do not pitch those as new. Nobody has measured this niche, and nobody has asked an auditor if they would accept it. **First step: a read-only pack of about 12 checks for one design-partner site, on demo data, with AI drafting and a named person approving, worded as "test results", never "compliant".**

## Words

- **Regulation:** a rule set by a government body (the **regulator**).
- **Compliance:** following the rules and keeping the proof.
- **Control:** one promise, like "only badge holders enter the comms room".
- **Framework:** a published list of controls (ISO 27001, the Essential Eight).
- **Evidence:** proof an auditor accepts.
- **Attestation:** a person saying "I checked this" with proof attached.
- **GRC:** governance, risk and compliance software: a register of risks, controls, audits and owners.
- **PIAM:** software above door systems that manages who should hold which badge.

## The market

- **Size:** USD 17.5-26 billion in 2026 depending on who counts. Australia: about USD 0.3-0.9 billion.
- **Money in:** about USD 5-8.5 billion invested in 2025. Australia's figure is mostly one deal (Protecht, USD 280 million).
- **Where money goes:** AI that does compliance work, cyber evidence, identity and fraud checks.
- **Exits are buyouts.** Big platforms buy specialists that have data or connectors they lack (ServiceNow bought Armis for about USD 7.75 billion). Being "the connector the platform is missing" is a real end goal.
- **Australian deadlines in 2026:** ransomware payment reports within 72 hours (from 1 Jan), money-laundering rules for lawyers and accountants (1 Jul), climate reporting for "Group 2" companies (1 Jul), privacy rules on automated decisions (10 Dec).

## What buyers want and hate

- **Want:** evidence gathered automatically, one control counted for many frameworks, clear board reports, and AI doing the legwork while people decide.
- **Hate:** shallow integrations (the top complaint about Vanta and Drata), tools that take over a year to roll out, reports built by hand from spreadsheets.
- **AI trust:** 65% of compliance leaders don't trust generic AI for decisions; about 56% want a person to check first. So "AI suggests, people approve" is a selling point.

## What a big manufacturer must do

Six kinds of duty: safety, cyber, climate and environment, people and privacy, product quality, honest business. Almost every duty is **a register** (what you have), **a record** (what you did) and **a report** (sent on a schedule or after an event). Ops already holds registers and records, so the job is joining them to the right control and deadline.

- **Safety (WHS):** the heaviest daily load. Each state has its own regulator. Registers of chemicals, plant and licences (a forklift licence lasts five years).
- **Cyber:** ransomware payments reported within 72 hours (turnover over A$3 million). SOCI rules only for listed critical assets. ISO 27001 and the Essential Eight are voluntary unless customers or insurers ask.
- **Climate:** most big manufacturers are Group 2: scope 1 and 2 emissions from year one (from 1 Jul 2026), scope 3 from year two.
- **People and privacy:** CCTV, visitor logs and biometrics are covered by privacy law. NSW needs 14 days' written notice before camera surveillance.
- **Physical security:** no single law. Evidence comes from ISO 27001's physical controls (A.7), SOCI where it applies, and defence rules for defence suppliers.

**Clocks clash.** One cyber attack that injures someone can start a safety notice ("immediately"), a ransomware report (72 hours), a SOCI report (12 or 72 hours) and a privacy check (30 days), each owned by a different team.

**Where it breaks:** only about one in five manufacturers has one safety system for all plants; one duty has many owners (a forklift licence is safety's rule, HR's record, security's gate check and operations' roster); evidence is still screenshots.

## Where not to go

SOC 2 automation for software companies (Vanta has 16,000+ customers), money-laundering tools, carbon accounting, AI governance, legal content feeds, plant network security (IEC 62443), and anything that watches individual workers (against Ops' own rules).

## What is still open

1. **Mixed door vendors across many sites at mid-market prices.** PIAM tools are enterprise, sales-led, and often single-vendor.
2. **Evidence beyond "who holds which badge":** camera uptime, door alarms and response times, visitor logs and inspections as one set.
3. **Joining physical, people and cyber evidence per control:** for example, everyone who entered a licensed area held a valid licence then and was rostered.
4. **Australian frameworks built in** (no vendor maps to SOCI physical hazards).
5. **Sending evidence into the GRC tool the customer already has**, instead of being another tool.

Also: Essential Eight maturity per site, live, from Intune.

**How sure are we?** Weak in places. "Vanta has no physical connectors" was checked on one page of 21. "No PIAM vendor does SOCI or camera health" is "searched and found nothing". Auditor acceptance is untested. The niche is unmeasured.

## How the plug-in should work

- **Ops collects, read-only. The compliance app judges:** it maps data to controls, runs tests, takes sign-offs and exports.
- **Each test** is a read-only query with a version number, run on a schedule.
- **Each result** records the control, test version, time, pass or fail, and links to source records (ids and fingerprints, not copies).
- **Each sign-off** records who, when and what, with a fingerprint of the file. AI may draft; a named person approves.
- **Results go in a hash chain** (each entry holds a fingerprint of the one before). Publish the latest fingerprint somewhere the operator can't change it.
- **Export as OSCAL** (NIST's open format) plus a signed PDF or Markdown pack.
- **Show each source's last sync next to each control.** Stale data is the first thing an auditor checks.

## Content you may ship

- **Essential Eight:** CC BY 4.0, free with credit (not the Coat of Arms or ASD logo).
- **Secure Controls Framework:** CC BY-ND. You may ship it unchanged, but AI-made policies built from it need a paid licence.
- **ISO:** copyrighted. Use control numbers and your own short titles only.
- **CISO Assistant** (open-source GRC): AGPL. Export into it; don't copy its code.

## Legal limits on wording

- Only lawyers may say what the law requires of a specific client. "Test failed: 3 admin accounts without MFA" is fine; "you are in breach and must notify the OAIC" is not.
- Business customers spending A$100,000 or less count as consumers, so consumer guarantees apply.
- Ops' own cameras and door logs fall under surveillance law, so it should also show that notices and consultation happened per site.

## Buyers check the vendor too

Expect security questionnaires, a pen test, and later ISO 27001 or SOC 2 for Ops itself. Self-hosting helps: if data never leaves the customer, there's less to prove. IRAP is only for government data; not a first-year cost. Manufacturers more often use ServiceNow, Archer, Protecht, Riskonnect or spreadsheets than Vanta, so ship OSCAL and signed exports before specific connectors.

## Ranked ideas

| Rank | Idea | Main risk |
|---|---|---|
| 1 | Cross-vendor, multi-site site evidence pack (ISO 27001 A.7.2, A.7.4, A.5.18; camera uptime; door alarms; visitor logs; comms-room checks; SOCI hazards) | PIAM vendors moving down-market; auditors may not accept it |
| 2 | Essential Eight maturity per site from Intune | Not unique on its own |
| 3 | Licence-at-time-of-entry evidence across door vendors | Must be sold as evidence, not blocking (Gallagher already blocks) |
| 4 | Duty-to-evidence map per site, with a board of incident deadlines | Drifts into legal advice |
| 5 | List of automated decisions and AI use | Deadline is close; crowded at the top end |
| 6 | Proof of surveillance notices per site | Small alone; Victorian law may change |
| 7 | Energy and fuel spend tagged for scope 1 and 2 | A feature, not a product |

## First step

1. Build a read-only pack for one site on demo data: 4-5 Essential Eight checks from Intune (patch age, macros, MFA, admin accounts) and 6-7 physical checks (comms-room badges against an approved list, leavers' active badges, camera uptime, door alarm response, visitor-log completeness, monthly comms-room inspection).
2. Show it to one ISO 27001 auditor and ask if they would rely on it.
3. Ask RightCrowd, Genetec and the partner's door vendor what they already cover.
4. Ask the design partner which GRC tool the evidence should land in.

If the auditor says yes and the vendors say no, rank 1 is real. If not, only a few weeks are lost.

## The lesson

The value is not a framework library or legal content (others own those). It's **the joins**: the same person, door, shift, device and site seen together across vendors. Incumbents each own only one of those systems. The rules Ops already chose (read-only, metadata only, self-hosted, AI suggests and people approve, never say "compliant") are exactly what auditors, regulators and buyers ask for.
