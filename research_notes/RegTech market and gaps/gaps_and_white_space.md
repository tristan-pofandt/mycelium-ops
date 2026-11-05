# Gaps and open space in RegTech

Source notes for `reports/RegTech market and gaps.md`: which compliance niches are open or crowded for a small Australian team that already runs an ops hub (software, sites, people, rosters, CCTV, door access, Intune devices, Xero and MYOB), aiming first at large multi-site manufacturers. Research 4 Nov 2026 by Claude; needs human review.

**How sure:** about 19 searches. Mostly vendor blogs, law-firm notes and trade press, not regulators; no law text was read directly. Check every date and threshold with the regulator before building on it. A later check (physical file) changed some conclusions here; marked inline.

Words: **continuous control monitoring (CCM)** = checking controls automatically and often from live data, not a yearly questionnaire. **Reporting entity** = a business AUSTRAC regulates (must enrol, run an AML/CTF program, check customers, report suspicious matters). **SOCI / CIRMP** = Security of Critical Infrastructure Act 2018 and its written risk program covering cyber, personnel, supply-chain and physical hazards.

## Q1. Ranked gaps

Bottom line: the best fit is not another general GRC tool but **"evidence from operations"**: proof for physical security, people/licence and device controls pulled from systems the hub already watches (door access, CCTV health, rosters, Intune), mapped to ISO 27001 Annex A.7, SOCI CIRMP physical and personnel hazards, and WHS licence rules. Deadline-driven demand (Privacy automated decisions 10 Dec 2026, AASB S2 Groups 2-3, AML/CTF Tranche 2) is real but crowded or a poor fit. Sources: Q4 to Q14.

Ranking (our judgement, not a sourced ranking):

| Rank | Gap | Fit with hub | Crowding | Hard for a small entrant? |
|---|---|---|---|---|
| 1 | Physical and operational evidence for ISO 27001 A.7 / SOCI physical and personnel hazards (door access, CCTV uptime and retention, visitor logs, comms-room checks) | Very high: hub has these feeds | Sparse: no native GRC connectors found (but enterprise PIAM tools exist, physical file) | Medium: needs auditor acceptance; slow sales to big manufacturers |
| 2 | Multi-site licence, ticket and induction compliance linked to rosters and doors | Very high | Partly covered by roster tools (RosterElf, WorkPro, Lucidity); Gallagher already blocks doors (physical file) | Low-medium: WHS rules are public; no certification |
| 3 | CCM layer that exports evidence into existing GRC tools (Vanta, Drata, 6clicks, CISO Assistant) instead of competing | High | GRC crowded, but non-cloud evidence connectors missing | Medium: integration work per tool |
| 4 | Privacy Act APP 1.7-1.9 automated-decision inventory (due 10 Dec 2026) | Medium: hub knows apps and data stores | Mostly law firms and small vendors publishing guides | Low barrier; demand peaks then fades; very little time left |
| 5 | AI-use inventory (ISO 42001, shadow AI) from Intune and SaaS logs | Medium-high | Well-funded vendors (Credo AI, Modulos, WitnessAI, Cranium) | Medium: crowded at the top; less so in AU mid-market |
| 6 | Self-hosted, Australian-hosted compliance tools | High if hub is self-hostable | 6clicks has IRAP; CISO Assistant self-hosts | High if IRAP needed; low if "self-hostable, AU-hosted" is enough |
| 7 | OT/plant network compliance (IEC 62443, SOCI) | Low-medium: hub lacks OT visibility | Specialist OT vendors (e.g. Industrial Defender), consultancies | High: deep OT skills, safety-critical, most manufacturers not SOCI |
| 8 | Supplier evidence: Scope 3 requests and modern slavery checks for mid-market suppliers | Low-medium (Xero/MYOB spend helps spend-based Scope 3) | Many ESG vendors | Medium; slavery reform still proposed |
| 9 | Obligations registers mapped to Australian law for SMEs and non-finance industries | Low | LexisNexis dominates; Reguladar targets SMEs | High: needs legal content kept current |
| 10 | AML/CTF Tranche 2 tools for small professional firms | Low | Crowded with AU/NZ vendors | Medium-high: legal liability, AUSTRAC expectations |
| — | Psychosocial / right-to-disconnect monitoring | Risky: clashes with Mycelium's no-surveillance rule | HR consultants, wellbeing providers | High reputational risk; aggregate signals only |

Our reading: the hub's edge is live operational data. Gaps that need legal content (obligations registers, Tranche 2 programs) play to others' strengths. Being the incumbents' missing physical, OT or people evidence source is safer than fighting them.

Not found: analyst sizing (Gartner, IDC) for physical evidence in GRC, or for any gap here; VC theses on these niches (Blackbird, Square Peg, Airtree, a16z, Sequoia, Bessemer); whether Vanta, Drata, 6clicks or ServiceNow customers already use custom connectors for Gallagher or Genetec (ask vendors).

## Q2. AML/CTF Tranche 2 for small firms

Law and dates: fundamentals file section 2. Verdict: poor niche here.
- The Attorney-General estimates **89,557** new reporting entities; **39,520** had enrolled by 13 Aug 2026 (Real Estate Business, citing AUSTRAC). 17,970 real estate agencies had registered by 20 Aug 2026, against about 45,000 offices (agencies vs offices may not compare). AUSTRAC began sending section 167 information notices to businesses that seem to offer designated services without enrolling (reported 27 Aug 2026). — [FinCrime Agent](https://fincrimeagent.com/news/issue-14/austrac-section-167-notices-tranche-two-enrolment/)
- The enrolment portal opened 31 Mar 2026 for lawyers, accountants, real estate agents, buyers' agents and property developers. New providers must enrol within 28 days of starting a designated service. — [Legl](https://legl.com/articles/tranche-2-enrolment-open-australian-law-firms-july-2026); [CompareAML](https://www.compareaml.com.au/guides/austrac-enrolment); [EasyAML](https://easyaml.com/resources/blog/articles/latest-update-on-your-tranche-2-timeline-now-and-before-july-2026/)
- Vendors already serving small firms: easyAML (links to Actionstep, Unity, Clio), First AML (NZ; strong on complex structures), Clear AML, Duely, IntelliCompli; also Infinity BGL, TrustEasy, Ignition, VeriMe in comparisons; NameScan and Persona/ComplyCube for screening. — [NameScan](https://namescan.io/insights/select-the-right-tool-for-tranche-2-aml-compliance/); [Capterra](https://www.capterra.com/p/10045616/ClearAML/); [GetApp](https://www.getapp.com.au/software/2293463/duely-1); [ComplyCube](https://www.complycube.com/en/?p=34452); [Persona](https://withpersona.com/blog/tranche-2-australia)
- Screening software alone does not meet Tranche 2; firms still need their own policies, risk assessments and staff processes. — [NameScan](https://namescan.io/insights/select-the-right-tool-for-tranche-2-aml-compliance/)
- Earlier warning that Tranche 2 risked leaving SMEs behind. — [FinTech Global, Jun 2025](https://fintech.global/2025/06/03/australias-tranche-2-aml-reforms-risk-leaving-smes-behind)

Our reading: about 50,000 expected entities had not enrolled by mid-August (89,557 minus 39,520), a big late tail. But 8+ AU/NZ vendors already compete, and the work is customer checks and policy, not ops data. Reject as the main niche. A speculative narrow angle: multi-site Tranche 2 entities (property developers, big real estate groups) linking staff training and access records to their AML program.

Not found: an independent readiness survey (enrolment numbers are second-hand, not AUSTRAC's own); enrolment by sector; vendor prices (one affiliate page: from $179/month).

## Q3. AASB S2 climate reporting: the supplier side

Rules, groups and thresholds: enterprise file section 3.
- Suppliers to Group 1 and 2 reporters should expect Scope 3 data requests from 2026. — [Industry Queensland](https://industryqld.com.au/climate-ready-suppliers-can-gain-an-edge-under-aasb-s2/)
- Treasury's consultation on easing supplier data requests closed 2 Oct 2026. Budget 2026-27 changes would clarify the "undue cost or effort" exemption for Scope 3 categories that can't be measured. — [NetNada](https://www.netnada.com/post/budget-2026-27-climate-disclosures)
- Assurers prefer activity-based data; spend-based is also accepted. — [Terrascope](https://www.terrascope.com/blog/navigating-australia-mandatory-climate-reporting)
- Many vendors already sell readiness: Trace, NetNada, Terrascope, Eco-Shaper, Naturaliste and others. — [Trace](https://www.our-trace.com/blog/mid-market-readiness-assessment-dont-delay); [NetNada](https://www.netnada.com/post/budget-2026-27-climate-disclosures)

Our reading: the hub's site energy and device data plus Xero/MYOB spend could feed Scope 1-2 and spend-based Scope 3, but carbon vendors already do that. Narrower angle: helping a manufacturer's own small suppliers answer data requests cheaply. Medium crowding, medium fit.

Not found: number of Group 2 entities; the ESGI Group 2 briefing (Aug 2026) was found but not read — [ESGI (PDF)](https://esgandi.com.au/__l5e/assets-v1/b03c597c-a405-4874-9628-0b1a3af33d54/ESGI_Group_2_AASB_S2_Briefing_Paper_August_2026.pdf).

## Q4. Physical security evidence (door access, CCTV, visitor logs, comms rooms)

Bottom line: the clearest open space found in this pass. ISO 27001 A.7 and SOCI CIRMP physical hazards both need proof that physical access is monitored and reviewed, and auditors ask for log retention and review records. No GRC platform here had native door or CCTV connectors; evidence today is manual upload, custom integration or a SIEM bridge. **Later check (physical file): enterprise PIAM tools and ServiceNow apps already produce access evidence, so the gap is narrower.**
- **A.7.4:** premises should be continuously monitored for unauthorised access; CCTV is usual but not required; the choice must be justified by risk assessment. — [HighTable](https://hightable.io/iso-27001-annex-a-7-4-physical-security-monitoring/); [ISMS.online](https://www.isms.online/iso-27001/annex-a-2022/7-4-physical-security-monitoring-2022/)
- Auditors ask whether badge logs are kept and reviewed, how long CCTV is kept and who can see it. "Periodic" review must be defined and review evidence kept. — [HighTable](https://hightable.io/iso-27001-annex-a-7-4-physical-security-monitoring/); [ISMS.online](https://www.isms.online/iso-27001/annex-a-2022/7-4-physical-security-monitoring-2022/); [Copla](https://copla.com/blog/compliance-regulations/does-iso-27001-cover-physical-security-full-guide-with-checklist/); [TCSA](https://www.tcsa.in/frameworks/iso-27001/controls/7-4-physical-security-monitoring)
- A suggested pattern (vendor idea, not a rule): a weekly sample reconciling access logs against CCTV, with review records kept as primary evidence. — [HighTable](https://hightable.io/iso-27001-annex-a-7-4-physical-security-monitoring/)
- Practitioners suggest feeding badge anomalies and environmental alarms into a SIEM to link physical and digital events. — [GRC Solutions](https://grcsolutions.io/iso-27001-and-physical-security/)
- Monitoring evidence should also cover privacy notices, retention limits and restricted footage access. — [ISMS.online](https://www.isms.online/iso-27001/annex-a-2022/7-4-physical-security-monitoring-2022/)
- Documented GRC connectors are mostly cloud, identity, ERP, ITSM and HR (e.g. Drata: cloud and identity providers). — [Vanta enterprise GRC list](https://www.vanta.com/resources/best-grc-software-solutions-for-enterprises); [Mitratech](https://mitratech.com/resource-hub/blog/top-9-grc-software-platforms-for-global-risk-management-2026/); [Sprinto controls](https://sprinto.com/grc/controls/)
- The SOCI CIRMP must cover cyber, personnel, supply chain and physical hazards, not just cyber. — [CISC guidance (PDF)](https://www.cisc.gov.au/resources-subsite/Documents/guidance-for-the-critical-infrastructure-risk-management-program.pdf); [Invicti](https://www.invicti.com/blog/web-security/soci-act-explained-compliance-rules-and-requirements)

Our reading:
- Map hub signals to controls: door events and review sign-offs → A.7.2, A.7.4; camera uptime and retention settings → A.7.4; visitor log completeness → A.7.2; comms-room checklists and environment sensors → A.7.5, A.7.8; leaver badge removal vs HR records → A.5.18, A.7.2. Export dated evidence packs into existing GRC tools.
- Keep events metadata only (who, when, which door; no footage), matching the hub's own rules and the privacy point above.
- Buyers: security, facilities and compliance managers at multi-site manufacturers, data centres, logistics and SOCI entities. Barriers: proving auditors accept automated evidence; long enterprise sales.

Not found: market size. (Vendor overlap check: physical file.)

## Q5. OT / plant network compliance (IEC 62443, SOCI)

Bottom line: poor fit for a solo founder. Specialist OT vendors and consultancies hold it, and it needs deep OT network visibility.
- SOCI does not name IEC 62443; CIRMP requirements line up with it, but using it does not meet all of CIRMP. — [Industrial Defender](https://www.industrialdefender.com/ot-cybersecurity/iec-62443-australia); [ESIS](https://www.esis.com.au/iec-62443-guide-australian-manufacturers/)
- One vendor page claims the Act names IEC 62443; this contradicts the others and was not confirmed. — [operationaltechnology.au](https://operationaltechnology.au/ot-security.html)
- SOCI covers 11 critical infrastructure sectors; general manufacturing is not one of them. — [Invicti](https://www.invicti.com/blog/web-security/soci-act-explained-compliance-rules-and-requirements)
- AS IEC 62443 was adopted as an Australian standard in 2025. — [iec62443.au](https://iec62443.au/)
- From 2026-27 CISC is changing its compliance approach after the 2026 Independent Review of the SOCI Act. — [CISC](https://www.cisc.gov.au/legislation-regulation-and-compliance/soci-act-2018)

Our reading: OT itself is hard, but CIRMP's physical and personnel parts (Q4, Q6) sit next to it and are easier. The likely SOCI customer is a manufacturer running critical food, energy or water assets.

Not found: which OT vendors (Claroty, Nozomi, Dragos) offer compliance reports, and their Australian mid-market prices; outcome of the 2026 SOCI review.

## Q6. Multi-site licences and tickets linked to rosters

Bottom line: roster tools already link tickets to shifts and safety tools track licences, but contractor credentials across sites remain a reported gap. This pass found nothing linking tickets to door access; **the physical file later found Gallagher does (Rapid Global, Sine)**. Good fit; partly covered.
- RosterElf links certifications to rosters so staff only get shifts they hold tickets for, and blocks shifts when a cert expires (vendor claim; its own buying guide lists "no automatic expiry alerts" as a con, which conflicts). — [RosterElf](https://www.rosterelf.com/blog/staff-licence-permit-certification-tracking-australia); [RosterElf guide](https://www.rosterelf.com/reviews/buying-guides/best-licence-expiry-tracking-software-australia)
- Deputy reportedly needs manual steps or third-party add-ons for ticket tracking; Connecteam has no roster link for this (per competitor RosterElf). — [RosterElf guide](https://www.rosterelf.com/reviews/buying-guides/best-licence-expiry-tracking-software-australia)
- WorkPro from about $3/user/month; Lucidity (Australian, mid-market) about $10-20/user/month (unverified comparison page). — [TradieScaler](https://tradiescaler.pages.dev/safety-compliance)
- Contractor credentials are a common gap when outside workers sit outside internal systems; central systems keep sites consistent. — [WorkPro: mining](https://www.workpro.com.au/blog/the-hidden-cost-of-expired-tickets-in-mining-operations); [WorkPro: documents](https://www.workpro.com.au/blog/a-robust-document-management-system-for-licence-tickets-accreditations-and-certifications)
- Contractor management tools exist (e.g. LinkSafe). — [LinkSafe](https://linksafe.com.au/contractor-management/)

Our reading: the edge is one rule across rosters, doors and inductions ("no valid forklift ticket, no forklift-bay door and no forklift shift") with per-site compliance rates, as a by-product of systems already in the hub. Low barrier (no certification); the risk is roster vendors adding access-control links.

Not found: SafetyCulture and Cm3 contractor features (Rapid Global's door link: physical file).

## Q7. Continuous monitoring from operational data

Bottom line: investors fund "continuous compliance", and practitioners say SOC 2 tools give checkbox compliance and auditors push back on screenshots. But funded players draw evidence from cloud and identity systems. Non-cloud operations (sites, devices, people, physical security) are less served.
- **Comp AI:** USD 2.6M pre-seed Jul 2025 (OSS Capital, Grand Ventures); USD 34M Series A in Sep 2026 led by Roo Capital and Grand Ventures. Claims 1,000+ customers and 15x ARR growth. Positioned as a Vanta alternative for SOC 2 and ISO 27001, moving into continuous cybersecurity. — [Comp AI pre-seed](https://www.trycomp.ai/hub/comp-ai-pre-seed-round); [Comp AI Series A](https://www.trycomp.ai/press/series-a); [ValueAddVC](https://valueaddvc.com/pulse/comp-ai-34m-series-a-agentic-compliance-2026); [SiliconANGLE, 17 Sep 2026](https://siliconangle.com/2026/09/17/compliance-automation-startup-comp-ai-raises-34m-to-push-into-security/)
- Other 2026 raises: Haast USD 12M Series A (Peak XV, Apr 2026). One source here dates a USD 48M Norm AI round to April 2026, against March 2025 in the fundamentals file; figures conflict. — [Angel Investors Network](https://angelinvestorsnetwork.com/regulatory-compliance/ai-compliance-automation-raises-12m-series-a-in-2026); [ValueAddVC](https://valueaddvc.com/pulse/comp-ai-34m-series-a-agentic-compliance-2026)
- Hacker News comments (seen via mirrors) call Vanta/Drata SOC 2 a "b2b checkbox" and say small-company audits become rubber stamps because auditors rely on supplied evidence. — [HN mirror](https://remix-clone-hacker-news.flameddd1.workers.dev/item/47482042); [Margins: SOC2 Kabuki theater](https://www.readmargins.com/p/the-soc2-kabuki-theater)
- Renewal complaints (unverified user reports): "$7500 to $20,000" to add two frameworks; Drata renewals up over 150%. — [Cyber Sierra](https://cybersierra.co/blog/vanta-drata-review/)
- One Reddit comment says Vanta and Drata struggle in the mid-market (single anecdote). — [Reddit](https://reddit.sentinel-team.org/posts/1s1y8fs/snapshots/2026-03-25T03%3A40%3A19.565209Z)

Our reading: SOC 2 automation for SaaS startups is crowded; don't enter. The opening is evidence cloud-first tools can't see: physical sites, rosters, field devices, finance-system controls (e.g. Xero/MYOB user access reviews, segregation of duties). Price complaints suggest room for a cheaper add-on priced per site, not per framework.

Not found: analyst data on CCM outside cloud/IT; the original HN threads (mirrors only).

## Q8. Obligations registers for SMEs and non-finance industries

Bottom line: needs constant legal content work, a poor match for a technical founder.
- LexisNexis Regulatory Compliance publishes Australian obligations content and modules (e.g. whistleblowing, electronic transactions, aged care). — [LexisNexis RC](https://www.lexisnexis.com/en-au/products/regulatory-compliance); [LexisNexis credentials 2026 (PDF)](https://www.lexisnexis.com/assets/en-au/pdf/lexisnexis-regulatory-compliance-credentials-document-clear-path-to-compliance-au-2026.pdf)
- Ansarada TriLine GRC's Obligations Module is filled by a live LexisNexis feed. — [Ansarada help](https://grc.help.ansarada.com/intro_obligations.html)
- Reguladar is an Australian platform helping small firms track duties and law changes. — [SourceForge](https://sourceforge.net/software/product/Reguladar/); [Reguladar blog](https://reguladar.com.au/blog/psychosocial-hazards-small-business)

Our reading: an AI-drafted obligations register is tempting but legally risky. Better: use someone else's register (LexisNexis or open libraries) and attach live evidence. Reject building legal content.

Not found: SME register prices or market size; Reguladar's traction.

## Q9. Psychosocial hazards and right to disconnect, without surveillance

- Right to disconnect: larger employers from 26 Aug 2024; small business (under 15 staff) from 26 Aug 2025. It doesn't ban contact; it lets staff refuse unreasonable after-hours contact. — [Trusted HR](https://trustedhrsolutions.com.au/right-to-disconnect-employer-guide/); [Subscribe-HR](https://www.subscribe-hr.com.au/blog/right-to-disconnect-aus-2026)
- Psychosocial hazards must be found, assessed and controlled like physical ones; constant after-hours contact counts as one (secondary). — [CCIWA](https://cciwa.com/business-toolbox/employees/workplace-health-and-safety-risks-of-right-to-disconnect-a-guide-for-employers/); [eCompliance Central](https://www.ecompliancecentral.com.au/right-to-disconnect-whs-compliance-australia)
- Queensland has a psychosocial code of practice; a search summary said updates start 1 Sep 2026 (not confirmed). — [WorkSafe QLD](https://www.worksafe.qld.gov.au/laws-and-compliance/codes-of-practice/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice-2022)
- (State psychosocial rules: enterprise file section 2.)

Our reading: tools are mostly HR consultants and wellbeing vendors. Any product that watches individuals clashes with Mycelium's no-surveillance rule and staff trust. A safe angle: team-level totals only (roster overtime, shift length, after-hours paging per team) as a hazard indicator for the WHS risk register. A feature, not a product.

Not found: a sourced list of psychosocial-risk software.

## Q10. Privacy Act automated-decision disclosure (due 10 Dec 2026)

- From 10 Dec 2026, privacy policies must say when a computer program makes, or substantially informs, decisions that significantly affect people (new APP 1.7-1.9, from the Privacy and Other Legislation Amendment Act 2024). — [OAIC](https://www.oaic.gov.au/news/media-centre/new-resources-on-transparency-for-use-of-ai-and-automated-decision-making); [Certrak](https://certrak.com.au/ai-regulation-australia/privacy-act-reform-automated-decision-making-transparency/)
- Scope is wide: rule-based processes, machine learning, everyday business software and GenAI chatbots can count. It applies to decisions from that date, however old the system. — [Johnson Winter Slattery](https://jws.com.au/what-we-think/practical-implications-of-new-transparency-requirements-for-automated-decision-making/); [Corrs](https://www.corrs.com.au/insights/automated-decision-making-preparing-for-the-new-transparency-obligation)
- OAIC Issues Paper submissions closed 15 Jun 2026; final guidance may not be out yet. — [Lander & Rogers](https://landers.com.au/legal-insights-news/australian-privacy-law-update-what-app-entities-need-to-know-in-2026); [Corrs](https://www.corrs.com.au/insights/automated-decision-making-preparing-for-the-new-transparency-obligation)
- Readiness = list every system that makes decisions about people (the decision, human or system, personal data used, how significant). — [AW Labs](https://www.awlabs.com.au/guides/privacy-act-automated-decision-making); [Xcdit](https://xcdit.com.au/privacy-act-ai-disclosure-rules-december-2026/)
- (Other privacy reforms: enterprise file section 4.)

Our reading: the hub's live map of apps and data stores is the starting point for this list and for later privacy tranches (data mapping, retention). Product angle: "decision and data inventory kept current from telemetry", not a one-off policy edit. SMEs are underserved; enterprises use OneTrust-class tools (unverified). The deadline is five weeks away.

Not found: OAIC final guidance date.

## Q11. AI governance (ISO 42001, shadow AI)

Bottom line: a busy, well-funded category (Credo AI, Modulos, WitnessAI, Cranium, Lookout). The Australian mid-market seems underserved mostly on price and locality.
- Credo AI scans for unregistered AI tools and maps to ISO 42001. Modulos claims ISO 42001 product conformity and a shadow-AI inventory. Cranium offers an AI bill of materials and runtime blocking. WitnessAI claims network-level discovery of 4,000+ AI apps. — [Modulos guide](https://www.modulos.ai/best-ai-governance-platforms/); [ComplyJet](https://www.complyjet.com/blog/best-iso-42001-compliance-software); [WitnessAI](https://witness.ai/blog/how-to-implement-iso-42001-with-ai-governance-tools/)
- Shadow AI leaves ISO 42001 risk registers and Statements of Applicability incomplete; finding AI tools without a governance inventory is not enough. — [QL Security](https://qlsecurity.co.uk/blog/shadow-ai-discovery-governance/); [AI Sigil](https://aisigil.com/shadow-ai/)
- Australian MSPs sell shadow-AI discovery and deny-by-default policies as a service. — [Epic IT](https://www.epicit.com.au/ai-governance-australia/)

Our reading: Intune app lists plus SaaS sign-in logs can show which AI tools run on managed devices, feeding both ISO 42001 and the APP 1.7 inventory (Q10). Combining the two Australian deadlines is a plausible wedge, but this is not empty space.

Not found: status of Australia's voluntary AI safety standard in late 2026. (EU AI Act dates: fundamentals file.)

## Q12. Self-hosted, Australian-hosted tools (IRAP)

- 6clicks' Australian Government instance runs on Azure in Canberra, IRAP-assessed at OFFICIAL: Sensitive and PROTECTED; it also offers self-hosted and appliance options. — [6clicks IRAP](https://www.6clicks.com/resources/blog/6clicks-announces-successful-irap-assessment-for-its-australian-government-instance); [6clicks government](https://6clicks.com/solutions/australian-government-irap-protected-grc)
- An IRAP assessment covers one specific deployment; standard public SaaS may be unassessed; vendor-held keys undermine sovereignty. — [Salesforce AU](https://www.salesforce.com/au/data/irap-assessed-collaboration-platforms/)
- SOC 2, ISO 27001 and FedRAMP do not cover Australian sovereignty on their own. — [Glean](https://www.glean.com/perspectives/is-irap-certification-a-must-have-for-enterprise-ai-in-australia)
- Open-source CISO Assistant can be self-hosted (Q14).

Our reading: sovereignty buyers exist (government, defence supply chain), but IRAP is expensive for a solo founder (cost: plugin file section 5); "self-hostable and Australian-hosted" is the cheap version. Mycelium already runs privately (homelab, Tailscale), so an on-site compliance module with no data leaving is a credible pitch to manufacturers and defence suppliers without IRAP at first.

Not found: an independent list of IRAP-assessed GRC tools.

## Q13. Small suppliers, supplier risk and modern slavery

Reform facts (16 Jul 2026 announcement, Commissioner's paper): enterprise file section 4.

Our reading: if due diligence becomes mandatory for A$100m+ firms, evidence requests flow down to mid-market suppliers. A "supplier evidence pack" (one answer for Scope 3, modern slavery and security questionnaires) for small suppliers of big manufacturers is a possible later product, not a first move.

Not found: demand or price tolerance among small firms (1-50 staff).

## Q14. Open-source GRC as a sign of demand

- **CISO Assistant** (intuitem): 3,600+ GitHub stars, 80+ contributors (early 2026); earns from managed hosting and enterprise support; v4.1.2 (Oct 2026) added GDPR DPIA screening. Licence: AGPLv3 per its GitHub (plugin file section 2); one secondary source says MIT. — [InfosecFlow](https://infosecflow.com/blog/open-source-grc-comparison/); [Cyber Toolchain](https://cybertoolchain.io/tools/ciso-assistant/); [intuitem](https://intuitem.com/we-are-going-open-source)
- **Comp AI** calls itself open source and verifiable, inviting auditors to add control templates and mappings. — [Comp AI pre-seed](https://www.trycomp.ai/hub/comp-ai-pre-seed-round)
- Eramba and SimpleRisk are other open-source GRC options. — [InfosecFlow](https://infosecflow.com/blog/open-source-grc-comparison/)

Our reading: there is demand for open, cheaper, self-hostable tools. Being an evidence source for CISO Assistant and Comp AI (both open) is cheap distribution and avoids building framework libraries.

Not found: OSCAL adoption; Australian open control libraries (e.g. the ISM in OSCAL).

## Q15. Failed RegTech startups and traps

- No RegTech post-mortem was found.
- Startups generally fail from no market fit, poor business models and too little money (CB Insights, not RegTech-specific). — [CB Insights](https://www.cbinsights.com/research/startup-failure-post-mortem/)
- Data rules and procurement demands appear late and derail deals after months of work (engineering-software example). — [Mean CEO, Sep 2026](https://blog.mean.ceo/startup-post-mortems-news-september-2026/)
- Compliance was long seen as a slow, unglamorous niche most VCs ignored. — [ValueAddVC](https://valueaddvc.com/pulse/comp-ai-34m-series-a-agentic-compliance-2026)

Our reading (traps): building legal content you must update forever; chasing a one-off deadline whose demand collapses after the date; facing enterprise security reviews before having your own ISO 27001 or SOC 2; selling to a team without budget (compliance often needs an operations or IT sponsor).

Not found: named RegTech failures with reasons (search CB Insights or Crunchbase by company name).
