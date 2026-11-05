# Can physical security data be compliance evidence? A check on the gap

Source notes for `reports/RegTech market and gaps.md`: whether door, camera and visitor systems, PIAM tools, GRC tools and SIEMs already turn physical security data into audit evidence, and what is still missing. Research 4 Nov 2026 by Claude; needs human review.

**How sure:** about 16 searches and fetches. Some vendor pages blocked fetching (RightCrowd 403; a Genetec note came back empty), so some findings rest on search snippets. Most sources are vendor marketing: feature claims are the vendor's own. **[K]** = from memory, not checked.

Words:
- **PACS** = door and badge system (Gallagher Command Centre, Genetec Synergis, Lenel OnGuard, C-CURE 9000, Inner Range Integriti).
- **VMS** = CCTV software (Milestone XProtect, Genetec Security Center/Omnicast, Verkada Command).
- **PIAM** = a layer above one or more PACS that manages who should hold which badge access, with approvals, joiner/mover/leaver steps and regular access reviews.
- **Access review** (also recertification or attestation) = a manager confirms on a schedule that a person still needs a door or zone, or removes it. Auditors want proof this happens (ISO 27001 A.5.18 and A.7.2; SOC 2 CC6.x).

## Verdict

- "No product turns physical security data into compliance evidence" is **false**. Enterprise PIAM tools (AlertEnterprise, HID SAFE, RightCrowd, Genetec ClearID) already run access reviews and make audit-ready reports, and AlertEnterprise runs inside ServiceNow.
- "Startup GRC tools (Vanta, Drata) don't pull evidence from door or camera systems" **looks true** on what was found.
- What still looks open: (1) mid-market prices across many vendors and sites; (2) evidence beyond "who holds which badge": camera recording uptime, door forced/held alarms and response times, visitor logs; (3) physical evidence joined with roster, people and cyber evidence per control; (4) Australian frameworks built in (SOCI CIRMP physical hazards, PSPF, ISM) alongside ISO 27001 and SOC 2; (5) pushing evidence into GRC tools customers already own (Vanta, Drata, 6clicks).
- Main risks: RightCrowd or Genetec moving down-market; Vanta or Drata quickly adding a Verkada or Brivo connector (both have cloud APIs).

## 1. Door and camera vendors

Bottom line: they give raw audit trails, event and cardholder reports and (ClearID) scheduled access reviews. No vendor found maps its reports to ISO 27001 A.7, SOC 2, SOCI or PCI DSS. Their own SOC 2 and ISO certificates cover their cloud service, not the customer's controls.

- **Genetec ClearID:** owners schedule or launch access reviews; approvers check area or role access; revoked access is removed when the review ends; a report covers completed reviews for all sites on the account. Marketed as audit readiness, but no source maps it to an ISO 27001 control (our reading of the snippet). — [ClearID access reviews](https://resources.genetec.com/en-feature-notes/genetec-clearid-access-reviews); [Genetec video](https://resources.genetec.com/videos/how-to-schedule-and-complete-an-identity-access-review-in-clearid)
- Genetec's ISO 27001 (six years running in 2023), ISO 27017 and SOC 2 Type 2 cover its cloud products, ClearID included, as a supplier. — [Genetec, Feb 2023](https://rss.globenewswire.com/news-release/2023/02/01/2600009/0/en/Genetec-achieves-stringent-certifications-through-commitment-to-cybersecurity-and-privacy.html)
- **Gallagher Command Centre** reports cover "events, cardholders and their access"; no compliance report or framework mapping is described. It sells separate optional Competencies and Compliance licences (e.g. "2A8959 Competencies License"). — [Command Centre datasheet](https://sourcesecurity.com/datasheets/gallagher-c201311-access-control-software/co-723-ga/Command%20Centre%20Datasheet.pdf); [Gallagher Competency and Compliance](https://sourcesecurity.com/gallagher-competency-and-compliance-access-control-software-technical-details.html)
- **Verkada Command** keeps an audit log of user and device activity, with an Access Control event category, exportable as CSV by Org Admins. Legacy logs record time, IP, username, email and action. No Verkada Splunk app found. — [Verkada audit logs](https://help.verkada.com/command/organization-settings/manage-your-admin-page-settings/manage-and-view-audit-logs); [Legacy audit logs](https://help.verkada.com/en/articles/5488687-legacy-audit-logs)
- Verkada's integration partners are hardware (ASSA ABLOY, Schlage, Suprema) plus video export to Axon Evidence, not GRC tools. — [Verkada partners](https://www.verkada.com/integrations/partners/)
- **Brivo** holds SOC 2 Type II (report under NDA) and has an open API; no customer compliance reports found. — [Brivo](https://brivo.com/about/security-and-compliance/)
- **Salto Systems** (door locks): its legal TOMs document covers its own data protection. (Search also returned salto.io, an unrelated SaaS firm; ignore it.) — [Salto TOMs (PDF)](https://saltosystems.com/sites/default/files/downloads/legal/2029_TechnicalandOrganizationalMeasures_Legal_vi.pdf)

Our reading: door and camera vendors treat compliance as "you can export the logs". Turning logs into control evidence (who reviewed, what was removed, which ISO clause it meets) is left to the customer or a PIAM layer. ClearID covers only Genetec's own ecosystem, so a mixed-vendor site gets no single review.

Not checked: Milestone XProtect, LenelS2 OnGuard, Avigilon/Avigilon Alta (Openpath), Inner Range Integriti, ICT Protege, Salto KS/Space (no compliance feature seen; that is absence of evidence, not proof); whether Gallagher's Compliance licence includes framework reports; camera-health evidence (proof cameras recorded, retention met) as an audit artefact: no source either way.

## 2. PIAM vendors

Bottom line: **for large enterprises this gap is already filled.** None found links to Vanta or Drata.

- **AlertEnterprise Guardian** calls itself "the only native ServiceNow application" for the full physical identity lifecycle. Guardian Hybrid uses ServiceNow for requests, approvals, tracking and reports. A Guardian AI Agent is on ServiceNow's AI Agent Marketplace. It targets ServiceNow customers. — [ServiceNow partner finder](https://servicenow.com/partners/partner-finder/alertenterprise-inc.html); [ServiceNow Store](https://apprepo.service-now.com/store/app/c81d27a21b646a50a85b16db234bcb95)
- Guardian applies identity-style recertification to doors, zones and facility access, and advises including contractors and visitors in recertification and offboarding. — [NHIMG (based on AlertEnterprise content)](https://nhimg.org/articles/physical-identity-and-access-governance-is-moving-to-automation/)
- Its listing covers access certification, compliance management and governance (Capterra's "$1.00" price and 3.0 rating look unreliable). G2 Leader, Spring 2026 (vendor-publicised). CSA STAR Level 1 self-assessment listed 27 Mar 2026. — [Capterra](https://www.capterra.com/p/199385/Enterprise-Guardian/); [G2](https://www.g2.com/products/alert-enterprise-guardian); [CSA STAR](https://cloudsecurityalliance.org/star/registry/services/alertenterprise-guardian-piam-saas-platform)
- **HID SAFE**: a PIAM "superhub" for "governed and auditable access management". Its Attestation Audit removes access no longer needed. The government edition keeps a full audit trail and makes "evidence-ready reports" aligned to HIPAA, NIST/FIPS and CJIS physical access rules. Price "varies by deployment scope, integrations, and organizational requirements" (no list price). — [HID SAFE](https://www.hidglobal.com/products/software/hid-safe); [HID SAFE Government](https://www.hidglobal.com/ja/products/hid-safe-government); [Adoption guide](https://securitytoday.com/whitepapers/2025/09/hidglobal-hid-safe-adoption-guide.aspx)
- **RightCrowd Access Audit** (inside SmartAccess): scheduled, policy-based reviews; digital sign-off; escalation of overdue items; auto-flags expired, out-of-scope or orphaned access; "audit-ready reports with full history and attribution", filterable by contractor, company, location or credential type and exportable for inspections. — [RightCrowd Access Audit](https://www.rightcrowd.com/solutions/access-audit-management/)
- RightCrowd SmartAccess links PACS to business processes and automates access audits and attestation. Case studies target hyperscale data centres (one runs it above C-CURE 9000). A "ServiceNow + RightCrowd" page exists (blocked, 403). — [SmartAccess datasheet](https://rightcrowd.com/srv/htdocs/wp-content/uploads/2024/07/SmartAccess-Datasheet.pdf); [Hyperscale case study](https://engage.rightcrowd.com/hubfs/Case%20Studies/Tech%20and%20Data%20Center/Governing%20Physical%20Access%20at%20Hyperscale%20-%20RightCrowd%20Case%20Study.pdf); [RightCrowd ServiceNow](https://www.rightcrowd.com/?p=30299)
- RightCrowd's 2026 trends blog (snippet only) says the 2026 shift is expecting "physical access data should be usable as security evidence", through automated access reviews, tamper-resistant logs and repeatable evidence packs. — [RightCrowd 2026 trends](https://www.rightcrowd.com/resources/blog/2026-security-and-compliance-trends-a-forward-looking-guide-for-physical-security-leaders/)

Our reading: the product exists and is sold with almost the founder's own pitch words. Don't pitch "nobody does this"; big buyers will have heard it from RightCrowd, AlertEnterprise or HID. These are enterprise, contact-sales, ServiceNow-centred products (data centres, government), which leaves mid-market and non-ServiceNow multi-site operators underserved. They focus on who can open which door; none treats camera health, alarm response, visitor logs and cyber controls as one evidence set.

Not checked: whether RightCrowd, AlertEnterprise or HID link to Archer, OneTrust, Vanta or Drata; Viscount (Freedom/Liberty) PIAM; which PACS each supports (Gallagher and Inner Range especially); [K] RightCrowd was founded in Brisbane and has Gallagher integrations, which would make it the closest local competitor; any PIAM pricing (needs sales talks or analysts); Gartner/Omdia PIAM market size; independent PIAM adoption data for Australia.

## 3. GRC tools (Vanta, Drata, Secureframe, ServiceNow)

Bottom line: no physical access or camera connector found for Vanta or Drata. ServiceNow is the exception, but through third-party PIAM apps (AlertEnterprise, RightCrowd), not IRM itself.

- Vanta's integrations page (page 1 of 21 checked) shows no physical security, door, badge, camera or visitor integration; none of Verkada, Brivo, Envoy, Kisi, Openpath, Genetec, Gallagher, HID or Salto. — [Vanta integrations](https://www.vanta.com/integrations)
- Drata's Envoy integration imports "Envoy user account data" to review who has Envoy accounts, not visitor logs or door events. — [Drata Envoy guide](https://help.drata.com/en/articles/9769744-envoy-integration-guide)
- No Kisi or Secureframe physical-security connector found; comparisons note manual evidence for specialised tools. — [rfp.wiki](https://www.rfp.wiki/legal-compliance/governance-risk-compliance-tools/compliance-monitoring-solutions/drata/secureframe)
- Usual SOC 2 / ISO 27001 physical-security evidence is a policy plus records kept by hand and mapped to controls. — [SecureSlate](https://getsecureslate.com/blog/physical-security-policy)
- Compliance automation tools mostly pull from cloud, identity, HR and code systems (Comp AI's 2026 raise: gaps file Q7).

Our reading: in Vanta and Drata today, the physical controls (A.7.1 to A.7.14) are met with uploaded documents and screenshots. A connector that pushes door reviews, visitor logs and camera uptime into them (Vanta's custom-resource API supports this: plugin file section 1) seems unbuilt. Their core buyers are single-office SaaS firms, so demand for physical connectors sits with multi-site operators (data centres, critical infrastructure, health, mining).

Not checked: Vanta integration pages 2-21; 6clicks (most important for an Australian founder), AuditBoard, Archer, OneTrust; the ServiceNow Store beyond AlertEnterprise.

## 4. SIEM and converged security platforms

- Microsoft Sentinel sends devices without their own connector through Syslog, CEF or Custom Logs via AMA; no Verkada or Genetec connector came up. — [Sentinel connectors](https://learn.microsoft.com/en-us/azure/sentinel/data-connectors-reference)
- No Verkada Splunk app found; Verkada audit data exports as CSV (section 1).

Our reading: a SIEM can hold door and camera logs, but someone still has to build the compliance view. Today that is consulting work, which supports a product.

Not checked: Splunkbase and Sentinel Content Hub directly (a Genetec or Verkada app may exist); Everbridge and Genetec Mission Control reports.

## 5. Contractor licences and inductions linked to doors

Bottom line: **mature on Gallagher sites in Australia.** Gallagher competencies plus Rapid Global (contractor compliance) and Sine (visitors) already grant or deny doors by induction and licence status. The gap is cross-vendor coverage and turning it into audit evidence, not the link itself.

- Gallagher's Rapid Induct integration uses Command Centre competencies to grant or deny site access from a person's status in Rapid; needs Command Centre v8.60+ and a licence per competency. — [Gallagher: Rapid Induct](https://products.security.gallagher.com/security/uk/en_UK/c/rapid-induct/p/INT158)
- Gallagher's mining brochure: import competencies from HR or contractor systems; random cardholder checks for competencies, licences, and drug and alcohol tests. — [Gallagher mining (PDF)](https://security.gallagher.com/-/media/Bynder/Security/Document/Brochure/Mining-Solutions-Brochure-original.pdf)
- Sine (by Honeywell) creates and removes visitor credentials in Command Centre automatically (v8.30+; needs a Sine Core large or enterprise plan). — [Gallagher: Sine](https://products.security.gallagher.com/security/global/en/products/sine-by-honeywell-integration/p/C13078); [Sine: Gallagher](https://www.sine.co/integrations/gallagher)
- An Australian dashboard on Command Centre checks inductions, licences and certifications on arrival (article date not confirmed). Sign In App also markets a Gallagher integration. — [sen.news](https://sen.news/?p=76451); [Sign In App](https://signinapp.com/gallagher-access-control)

Our reading: "licence expired, door stops working" is solved on Gallagher; pitching it as new would lose trust with Australian security integrators. Not seen anywhere: one report showing, across sites and door vendors, that everyone who badged in held valid inductions at that moment, joined to roster data. That is what an auditor or a SOCI/WHS regulator would want, and it is still a plausible gap.

Not checked: SignOnSite, Cm3, Linkt (no results within budget); Inner Range Integriti competency or contractor links. No vendor found with SOCI or PCI DSS Requirement 9 mappings.
