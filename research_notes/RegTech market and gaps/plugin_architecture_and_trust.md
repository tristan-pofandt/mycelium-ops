# How the compliance plug-in should work, and what buyers need from the vendor

Source notes for `reports/RegTech market and gaps.md`: how existing products split work between a data host and a compliance layer, which control lists can legally be shipped, how continuous monitoring and tamper-evident logs work, what auditors accept, what a small vendor needs to sell, and Australian legal risks. Research 4 Nov 2026 by Claude; needs human review.

**How sure:** about 20 searches. Many sources are vendor or law-firm commentary, not primary legal text; flagged where it matters. **[K]** = from memory, not checked this session; check before use.

Words: **attestation** = a person states "I checked this" and attaches proof, for controls software can't test. **SOC 2 Type II** = an independent auditor's report on whether a company's controls worked over a period (usually 6-12 months); a common US-origin buying requirement. **IRAP** = ASD-endorsed assessors check a system against the ISM; asked for by Australian government buyers. **OSCAL** = NIST's open, machine-readable format for controls and assessment results.

## 1. How existing products split host and compliance layer

Bottom line: every mature product splits it the same way. The host (or connectors) collects raw data. A compliance layer maps data to controls, runs scheduled tests and takes human attestations for the rest. Reports and auditor access sit on top. All of them say the tool alone does not make you compliant. This matches Mycelium's plan: Mycelium collects; the compliance app maps, tests, takes attestations and exports.

**Vanta** (partner program and marketplace: vendors file section 4)
- The Build Integrations API is for "applications that send data into Vanta"; it powers marketplace integrations and private ones a customer builds for its own account. Data types: user accounts, devices, vulnerabilities, training records, background checks, and custom resources. — [Vanta: Build integrations](https://developer.vanta.com/reference/build-integrations/overview)
- For data with no Vanta connector, sync it as "custom resources" and add "Custom Tests". These work only in private integrations, not public marketplace ones. — [Vanta: Build integrations](https://developer.vanta.com/reference/build-integrations/overview); [Supported resources](https://developer.vanta.com/docs/supported-resources)
- File evidence (PDF, CSV) can be uploaded through the API; each file is tied to an evidence request. — [Supported resources](https://developer.vanta.com/docs/supported-resources)
- Integrations use OAuth-style scopes (e.g. `connectors.self:write-resource`). Vanta Gov has its own base URL (`api.vanta-gov.com`). — [Vanta: Build integrations](https://developer.vanta.com/reference/build-integrations/overview)
- Example: Ory's Vanta integration polls Ory's admin API on a schedule with a read-only key. — [Ory](https://www.ory.com/docs/integrates-with/compliance-audit/vanta)

**Drata**
- Open API access is reportedly only in higher tiers (not the entry "Essential" tier); "custom API connections and automated tests" are in the Advanced plan. (Prices: vendors file.) — [Sprinto (competitor)](https://sprinto.com/blog/drata-pricing/); [SmartSuite](https://smartsuite.com/blog/drata-pricing)

**Microsoft Defender for Cloud compliance dashboard**
- Mixes automated checks (about every 12 hours) with manual attestation: pick a manual check, click Attest, enter details, attach evidence. — [Microsoft Learn: dashboard](https://learn.microsoft.com/en-us/azure/defender-for-cloud/regulatory-compliance-dashboard)
- Each control shows "Your Actions" (customer's automated and manual checks) and "Microsoft Actions" (what the platform covers): shared responsibility shown per control. — [Microsoft Learn: dashboard](https://learn.microsoft.com/en-us/azure/defender-for-cloud/regulatory-compliance-dashboard); [Microsoft Learn: concepts](https://learn.microsoft.com/en-us/azure/defender-for-cloud/concept-regulatory-compliance)
- Greyed-out controls are usually procedural (e.g. awareness training), the platform's job (datacentre physical security), or not yet automated. — [Microsoft Learn training](https://learn.microsoft.com/en-us/training/modules/evaluate-regulatory-compliance/2-understand-compliance-standards-controls)
- Exported reports "might provide evidence to internal and external auditors" (note the hedge). — [Microsoft Learn: dashboard](https://learn.microsoft.com/en-us/azure/defender-for-cloud/regulatory-compliance-dashboard)

**ServiceNow IRM / GRC**
- Continuous monitoring uses "indicators": manual (for data outside ServiceNow), basic (automated; a table plus a collection frequency) and scripted (custom code). Templates create many indicators for similar controls. — [ServiceNow: indicators](https://www.servicenow.com/docs/r/Z61H6JNUJXKe8NNPQzK7MQ/5ny9iWZFGcgoawHLtnJZCw)
- Indicator results raise issues on controls, update risk scores and support audits and control testing. — [ServiceNow GRC (Xanadu)](https://www.servicenow.com/docs/r/xanadu/governance-risk-compliance/governance-risk-and-compliance/r_WhatIsGRC.html)
- GRC apps are separate installs from the ServiceNow Store; e.g. Continuous Authorization and Monitoring 21.x is "certified to work with" other GRC apps of the same version. — [SoftwareOne listing](https://platform.softwareone.com/product/continuous-authorization-and-monitoring/PCP-6169-9291); [Store: Risk Management](https://store.servicenow.com/store/app/d96927ee1be06a50a85b16db234bcb39)

**Wazuh (open-source SIEM; compliance by tagging)**
- Rules carry compliance tags (`pci_dss`, `gdpr`, HIPAA, NIST 800-53, TSC), so a matching alert carries them. — [Wazuh 3.13](https://documentation.wazuh.com/3.13/getting-started/use_cases/regulatory_compliance.html); [Wazuh 4.5](https://documentation.wazuh.com/4.5/compliance/index.html)
- Wazuh 5.0 (release candidate): each framework view has Dashboard, Controls and Findings tabs; rules use Sigma format with a `compliance` field of requirement IDs. — [Wazuh 5.0 PCI DSS](https://documentation.wazuh.com/5.0-rc/compliance/pci-dss/index.html); [Wazuh 5.0 GDPR](https://documentation.wazuh.com/5.0-rc/compliance/gdpr/index.html)
- Wazuh says deploying it does not by itself certify or guarantee compliance. — [Wazuh 5.0 compliance](https://documentation.wazuh.com/5.0-rc/compliance/index.html)

**Atlassian Marketplace (how a plug-in earns trust)**
- The Cloud Fortified badge is being phased out: no new submissions; ends 31 Dec 2026. — [Atlassian: Cloud Fortified](https://developer.atlassian.com/platform/marketplace/cloud-fortified-apps-program/)
- Its replacement, "Atlassian Enterprise Certified", is open to Forge cloud apps and needs public (or soon public) bug reporting through Atlassian's bug bounty, or a pen test by a CREST-accredited firm (self-managed route). — [Atlassian Enterprise Certified](https://developer.atlassian.com/platform/marketplace/atlassian-enterprise-certified-program/)
- Atlassian scans cloud apps continuously ("Ecoscanner") and enforces a Marketplace security policy. — [Enforcement policy](https://developer.atlassian.com/platform/marketplace/marketplace-security-enforcement-policy/); [Atlassian Marketplace trust](https://www.atlassian.com/trust/marketplace)

Our reading:
- **Host = pipes and storage; plug-in = meaning.** Vanta's "custom resource + custom test" and ServiceNow's "basic indicator over a table" are the same idea: a stored record type plus a scheduled pass/fail test per control. Mycelium's collectors already make the records; the compliance app would define the tests.
- Defender's "Your Actions / Microsoft Actions" split is a good UI model: per control, show what Mycelium checks automatically, what needs a person's attestation, and what a third party (e.g. a SaaS provider) owns.
- Wazuh-style tagging at ingest is cheapest but only proves "an event of this type happened", not that a control works. Tests over current state (Vanta, ServiceNow) are stronger evidence.
- Atlassian shows buyers expect a bug bounty or pen test from any plug-in vendor, even inside a host's ecosystem.
- [K] Microsoft Purview Compliance Manager uses the same split as Defender (Microsoft-managed vs customer "improvement actions", with a score it says is not a measure of compliance). Splunk splits collection add-ons (TAs) from dashboard apps: the same collect/interpret split.

Not checked: Splunk, Datadog, Elastic and Purview sources; ServiceNow Store rules for third-party GRC apps; Drata's own API docs (details above come from competitor and aggregator pages).

## 2. Formats and licences for control lists

Bottom line: OSCAL is the export format. Australian ASD content (Essential Eight, ISM) is CC BY 4.0 (commercial use with credit). The Secure Controls Framework (SCF) is CC BY-ND 4.0: you may ship it unchanged with credit, but not derivatives, which expressly includes AI-made policies, without a paid licence. CISO Assistant's code is AGPLv3 and some bundled frameworks have blocking licences. Don't copy ISO text.

**NIST OSCAL**
- The assessment layer has three models: Assessment Plan (what is planned for a periodic or continuous assessment of one system), Assessment Results (findings, always tied to a plan), and Plan of Action and Milestones (POA&M: open risks carried forward). Results and POA&M use the same syntax for findings and risks. — [OSCAL: assessment layer](https://pages.nist.gov/OSCAL/learn/concepts/layer/assessment); [Assessment Results](https://pages.nist.gov/OSCAL/learn/concepts/layer/assessment/assessment-results); [POA&M](https://pages.nist.gov/OSCAL/learn/concepts/layer/assessment/poam/)
- POA&M comes in XML, JSON and YAML; its root is `plan-action-milestones`. — [POA&M](https://pages.nist.gov/OSCAL/learn/concepts/layer/assessment/poam/)
- The implementation layer holds the System Security Plan and Component Definition; the control layer holds catalogues and profiles. — [OSCAL layers](https://pages.nist.gov/OSCAL/learn/concepts/layer); [NIST lecture (PDF)](https://csrc.nist.gov/csrc/media/Projects/open-security-controls-assessment-language/documents/oscal-lecture-2/The%20Anatomy%20of%20OSCAL%20Models-Control_Layer-2023.03.21.pdf)
- FedRAMP uses OSCAL for machine-readable authorisation packages. — [FedRAMP](https://automate.fedramp.gov/about/what-is-oscal)

**Secure Controls Framework (SCF)**
- Licensed CC BY-ND 4.0 since 22 Mar 2019 "to maintain the integrity of the SCF". — [SCF terms](https://securecontrolsframework.com/terms-conditions)
- Allowed: share all or part; make private adaptations. The credit examples explicitly cover a GRC platform that includes SCF content (it must credit the SCF). — [SCF terms](https://securecontrolsframework.com/terms-conditions)
- Not allowed without a commercial licence: sharing derivatives, expressly including "utilizing Artificial Intelligence (AI)" to generate policies, standards, procedures, metrics, risks or threats from SCF content. "An organization needs to purchase a commercial license to offer derivative SCF content." — [SCF terms](https://securecontrolsframework.com/terms-conditions); [SCF commercial licence](https://securecontrolsframework.com/commercial-license)
- Credit must keep the copyright notice, licence reference, disclaimer and a link, mark changes, and not imply SCF Council endorsement. — [SCF terms](https://securecontrolsframework.com/terms-conditions)
- The commercial licence has Tier 1 and Tier 2 (Licensed Content Provider), with GRC platforms as the example user; Tier 2 terms not retrieved. — [SCF commercial licence](https://securecontrolsframework.com/commercial-license)

**ASD Essential Eight / ISM**
- "Essential Eight explained": except the Coat of Arms, the ASD logo and where stated, material is CC BY 4.0. — [ASD (PDF)](https://www.cyber.gov.au/sites/default/files/2025-03/Essential%20Eight%20explained%20(November%202023).pdf)
- The Essential Eight Maturity Model is a separate document (last updated Nov 2023; a re-hosted copy is dated 2026-10); its own copyright page was not retrieved. — [ASD maturity model (PDF)](https://www.cyber.gov.au/sites/default/files/2026-10/Essential%20Eight%20maturity%20model%20%28November%202023%29.pdf)
- An unofficial site says ISM and Essential Eight content is CC BY 3.0 or 4.0 depending on release (check). — [ism-explorer](https://ism-explorer.pages.dev/licence.html)

**CISO Assistant** (open-source GRC with a framework library; traction: gaps file Q14)
- Community edition is AGPLv3; files in the `enterprise` folder are under a commercial licence; Pro and Enterprise editions are proprietary (an open-core model). — [GitHub](https://github.com/intuitem/ciso-assistant-community); [SourcePulse](https://www.sourcepulse.org/projects/1636962)
- Some frameworks need a manual download from the owner's site because "their license prevent direct usage". — [README](https://github.com/intuitem/ciso-assistant-community/blob/main/README.md)
- Covered as an open-source GRC tool in Jan 2026. — [Help Net Security](https://www.helpnetsecurity.com/2026/01/14/ciso-assistant-open-source-cybersecurity-management-grc/)

**CIS**
- CIS has Terms of Use and a separate "Commercial Use & CIS Supporters" program for commercial use of CIS Controls and Benchmarks. — [CIS Supporters](https://www.cisecurity.org/cis-controls-supporters); [CIS terms](https://cas.docs.cisecurity.org/en/latest/source/terms-of-use/)

Our reading:
- **OSCAL is the file format; SCF, NIST and Essential Eight are the content.** Export OSCAL Assessment Results + POA&M to auditors and GRC tools; it avoids lock-in and is a credible standards story.
- Safest content for an Australia-first product: Essential Eight and ISM (credit ASD; no logo; don't imply endorsement) and NIST SP 800-53/CSF ([K] US Government works have no US copyright, so commercial reuse is generally fine; NIST publishes 800-53 in OSCAL on GitHub).
- SCF can ship word-for-word with credit; its crosswalks are its main value. But "AI suggests" must not generate shipped policies or procedures from SCF text without a commercial licence. If AI drafts policies, base them on NIST/ASD content or buy the licence.
- ISO 27001/27002: use control IDs and your own short titles only; customers who own the standard can paste their own text. [K] ISO and national bodies such as Standards Australia sell and copyright these.
- CISO Assistant: reusing its code in a proprietary network-served product triggers AGPL source-sharing. Reading its framework files for ideas is fine, but each bundled framework keeps its own licence. It could even be the "compliance app" Mycelium feeds, if AGPL is acceptable.
- [K] CIS Benchmarks are CC BY-NC-SA (non-commercial); treat as needing membership or a licence before shipping. [K] Open Policy Agent / Rego (CNCF graduated, Apache 2.0) is a sensible engine for controls as tests.

Not checked: Common Controls Hub / UCF licensing and prices; the Maturity Model's own licence text; SCF prices and Tier 2 terms; OPA and CIS licences; whether SCF's ISO mappings raise ISO copyright issues.

## 3. Continuous monitoring and tamper-evident logs

Bottom line: controls become tests that run on a schedule over collected records and give dated pass/fail results (examples: section 1). Controls that can't be tested become human attestations with evidence. Log integrity needs layers. Auditor portals are normal; no guidance on sampling was found.

- "WORM storage gives you immutability but not completeness. Hash-chaining gives you verifiability but not retention." (WORM = write once, read many.) — [DEV Community](https://dev.to/beanstechbr/immutable-audit-trail-59fo)
- Checking a hash chain takes time proportional to its length; Merkle trees give short per-record proofs (log scale), useful for big reviews. — [scour.ing / dev.to](https://scour.ing/@matmat/p/https://dev.to/veritaschain/building-cryptographic-audit-trails-for-sec-rule-17a-4-a-technical-deep-dive-4hbp)
- A hash chain alone does not stop someone with write access rewriting entries and recomputing the chain, nor spot cut-off entries. External anchoring (e.g. a transparency log) is needed. — [Vapora ADR 0039](https://repo.jesusperez.pro/jesus/Vapora/raw/branch/main/docs/adrs/0039-merkle-audit-trail.md)
- Recommended layers: WORM or ledger storage, cryptographic chaining, separation of duties. Tools: S3 Object Lock compliance mode, Google Trillian, RFC 3161 trusted timestamps. — [archman.dev](https://archman.dev/docs/data-architecture-and-persistence/data-lifecycle-and-compliance/auditing-and-tamper-evident-logs); [Emergent Mind](https://www.emergentmind.com/topics/immutable-audit-log)
- Retention (secondary; check per rule): 7-10+ years for some regimes; FedRAMP AU-9/AU-11 a 3-year minimum; when rules overlap, the longest applies. — [Fabric best-practice repo](https://fgarofalo56.github.io/Suppercharge_Microsoft_Fabric/best-practices/security/audit-trail-immutability/)
- A secondary source says SEC Rule 17a-4 (2022 changes) accepts audit-trail alternatives to WORM, including cryptographic methods; rule text not checked. — [scour.ing / dev.to](https://scour.ing/@matmat/p/https://dev.to/veritaschain/building-cryptographic-audit-trails-for-sec-rule-17a-4-a-technical-deep-dive-4hbp)
- Auditors warn CSV reports "can be easily edited", so they need a way to confirm a report was not changed after it was made. Some tools give auditors direct read access to settings and evidence grouped for review. — [Linford & Co](https://linfordco.com/blog/soc-2-automation-tools-aicpa-faqs)

Our reading, a minimal credible design:
1. **Control** = ID + own plain-language summary + mapped framework IDs.
2. **Test** = a read-only query over Mycelium records (policy-as-code, e.g. Rego or Python), with its own version number, run on a schedule.
3. **Result** = control ID, test version, time, pass/fail/not-applicable, and links (IDs + hashes) to source records, not copies of sensitive data (fits Mycelium's metadata-only rule).
4. **Attestation** = person, time, statement, hash of attached file. AI may draft; a named person approves.
5. **Evidence log** = append-only; each entry holds the previous entry's hash. Publish the chain head daily somewhere the operator can't rewrite (an RFC 3161 timestamp service, a customer-held copy, or object-locked storage).
6. **Export** = OSCAL Assessment Results + POA&M, plus a signed bundle with the query and parameters, so an auditor can check completeness and accuracy.

Recording the query and parameters with each result answers the auditor's need to know how a report was made. Testing 100% of a population (all accounts, all devices) avoids sampling for those controls, though auditors will still sample to check the tool (unsourced). Make retention configurable per framework, defaulting to the longest the customer picks.

Not found: IIA continuous auditing guidance (GTAG 3); how auditors sample continuous evidence; SEC 17a-4 text; Australian retention periods ([K] e.g. Corporations Act 7 years for financial records).

## 4. What auditors and regulators accept

Bottom line: auditors can use tool output but not rely on it alone. They must understand how each integration and report is made, confirm it is current and unchanged, and check the source system for higher-risk controls. The tool vendor cannot also be the auditor. Every major vendor says its product does not certify compliance.

- Linford & Co (an audit firm), summarising the AICPA FAQ of 30 Jun 2021: the auditor "should not place undue reliance on the tool" and cannot rely only on data captured by a SOC 2 tool; "Due diligence must be performed to validate the data coming from the tool". — [Linford & Co: AICPA FAQs](https://linfordco.com/blog/soc-2-automation-tools-aicpa-faqs); [Linford & Co: SOC 2 tools](https://linfordco.com/blog/using-soc-2-software-tools-for-audit-compliance)
- Reliance needs the tool to be "properly designed, configured, implemented, and managed"; broken integrations can show stale data. — [Linford & Co: SOC 2 tools](https://linfordco.com/blog/using-soc-2-software-tools-for-audit-compliance)
- Auditors must understand the parameters behind a report; if they don't, they should not rely on it. — [Linford & Co: AICPA FAQs](https://linfordco.com/blog/soc-2-automation-tools-aicpa-faqs)
- Independence: "the SOC 2 automation tool company cannot also perform the SOC 2 audit". The author sees audit arms tied to tool vendors as failing independence in appearance. — [Linford & Co: AICPA FAQs](https://linfordco.com/blog/soc-2-automation-tools-aicpa-faqs)
- Tools don't fix control gaps; management relying on them too much is a risk. — [Linford & Co: AICPA FAQs](https://linfordco.com/blog/soc-2-automation-tools-aicpa-faqs)
- Disclaimers: Wazuh and Microsoft (section 1). A legal-tech vendor's terms: "The Service is software. It is not legal advice", and it doesn't replace the user's duties (vendor wording, not authority). — [LexBrief terms](https://lexbrief-marketing.pages.dev/terms)
- An AICPA 2026 conference session covers SOC 2 automation (title only seen). — [AICPA session TD2607](https://agenda.aicpastore.com/sessions/td2607)

Our reading:
- **The tool collects and organises; the auditor judges.** Position the app as "evidence preparation and monitoring". Word results like "test passed on 3 Nov 2026 for 412 of 412 accounts", never "compliant".
- Features that raise auditor reliance: last successful sync per control (stale-data worry); query and parameters with each result; hashed or signed exports (tampering worry); read-only auditor access to source records.
- Don't offer audits or certification, or pay auditors for referrals without disclosure, to avoid independence problems.
- Liability wording: "information tool, not legal, audit or professional advice; does not certify compliance; results depend on configured connectors; customer remains responsible for its compliance obligations". Put it in the terms, report footers and marketing.

Not found: the AICPA FAQ itself (only the audit firm's summary); what Australian regulators (APRA for CPS 234/230, OAIC, ASIC) say about tool evidence; anything on testing "information produced by the entity" (IPE).

## 5. What a small vendor needs to sell to enterprises

Bottom line: buyers judge the vendor, not just the app. Expect security questionnaires, a pen test report, and at some point SOC 2 Type II or ISO 27001. IRAP matters only for Australian government data. Self-hosting shrinks what the vendor must prove. The market already prices frameworks as add-ons (vendors file section 2), which supports a per-framework price.

**IRAP**
- A SaaS product that stores, processes or sends Australian Government information at OFFICIAL: Sensitive, PROTECTED or above almost certainly needs IRAP before an agency can use it. The need attaches to the system and the data; "There is no small business exemption". Assessments run on about a two-year cycle. Being assessed at PROTECTED when customers only handle OFFICIAL: Sensitive adds cost and clearance work. (Consultancy blogs.) — [Cybernion: do we need IRAP](https://cybernion-website.pages.dev/insights/do-we-need-an-irap-assessment/); [Cybernion: IRAP for SaaS](https://cybernion-website.pages.dev/insights/irap-for-saas-and-cloud-providers/)
- Only assessors on ASD's register can do a valid IRAP assessment. ASD publishes a common assessment framework and a 2026 Assessor Agreement. — [ASD framework (PDF)](https://cyber.gov.au/sites/default/files/2025-04/IRAP%20common%20assessment%20framework.pdf); [ASD Assessor Agreement 2026 (PDF)](https://www.cyber.gov.au/sites/default/files/2026-05/IRAP%20Assessor%20Agreement%202026.pdf)
- Cost estimate AUD 50,000-300,000 and 3-12 months (unverified aggregator). — [auditxyz](https://auditxyz.pages.dev/frameworks/security-governance/irap); [6clicks: IRAP cost](https://www.6clicks.com/resources/answers/how-much-does-an-irap-assessment-cost)
- ASD's older page (about 2020) advises getting at least three quotes. — [ASD IRAP page](https://www.cyber.gov.au/node/2080)
- An existing ISO 27001 system is said to cut IRAP preparation (vendor claim). — [Cybernion: IRAP vs ISO 27001](https://cybernion-website.pages.dev/insights/irap-vs-iso-27001/)
- Australian government GRC tenders: vendors file section 3. A plug-in trust gate example (Atlassian bug bounty or CREST pen test): section 1.

Our reading, order of trust investments for a tiny Australian vendor:
1. **Now, cheap:** a public security page; a filled-in standard questionnaire (e.g. CAIQ or SIG Lite); a vulnerability disclosure policy; an SBOM and signed releases; a data-flow diagram showing self-hosted means no vendor access.
2. **Early:** an independent pen test; professional indemnity and cyber insurance (buyers ask for certificates of currency).
3. **When deals need it:** SOC 2 Type II or ISO 27001 for the vendor. ISO 27001 is better known in Australia and also eases IRAP.
4. **Only for government buyers with OFFICIAL: Sensitive or higher data:** IRAP. For self-hosted software the agency's own system is assessed, which may reduce what the vendor must hold (verify).

Self-hosting is a strong pitch: data residency is solved by the customer's own location, the vendor's SOC 2 scope shrinks to development and release, and it makes "read-only first" visible. Packaging "Mycelium (host) + compliance app (separate licence) + framework packs (Essential Eight, ISO 27001 mapping, SOC 2 mapping)" matches what buyers expect. Open-core (open host or open tests; paid packs and support) builds trust with auditors who can read the tests. AGPL deters cloud copycats, but some enterprises ban AGPL internally.

Not found: SOC 2 Type II or ISO 27001 cost for a small Australian vendor in 2026; insurance limits buyers require (AUD 5m/10m common by anecdote, unverified); whether self-hosted software sold to government needs its own IRAP; Splunkbase and ServiceNow Store revenue share and listing rules.

## 6. Australian legal risks

Bottom line, three main risks:
1. **Practising law without a licence.** Only Australian lawyers may "engage in legal practice" under the Legal Profession Uniform Law (NSW, Victoria, WA). Give information and tools, not tailored legal opinions.
2. **Financial product advice.** Only relevant if the product recommends financial products; avoid that.
3. **Australian Consumer Law.** Business buyers spending AUD 100,000 or less are "consumers", so consumer guarantees apply and can't be excluded, only limited (s 64A).

- Uniform Law s10 bans unqualified entities from legal practice; s11 bans advertising or claiming they may practise. — [Law Society of NSW](https://www.lawsociety.com.au/practising-law-in-NSW/complaints-and-discipline/unqualified-practitioners); [Law Society NSW (PDF)](https://www.lawsociety.com.au/sites/default/files/2018-03/Unqualified.pdf)
- WA joined the Uniform Law scheme on 1 Jul 2022, alongside NSW and Victoria. — [Legal Practice Board WA](https://www.lpbwa.org.au/uniform-law); [Uniform Law (WA)](https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_46913.htm/$FILE/Legal%20Profession%20Uniform%20Law%20(WA)%20-%20%5B00-a0-01%5D.html)
- "Personal advice" is defined in s 766B(3) of the Corporations Act 2001. ASIC RG 255 (Aug 2016) on digital (robo) advice says firms providing technology or compliance services "may also find this guidance useful". — [ASIC RG 255](https://www.asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-255-providing-digital-financial-product-advice-to-retail-clients); [RG 255 (PDF)](https://download.asic.gov.au/media/vbnlotqw/rg255-published-30-august-2016-20220328.pdf)
- An academic paper discusses forecasting software under s 766B(1); its conclusion was not seen. — [Macquarie University](https://researchers.mq.edu.au/en/publications/financial-product-advice-s766b-1-the-case-of-computer-forecasting/)
- From 1 Jul 2021 the "consumer" threshold rose from AUD 40,000 to 100,000, so many business software buyers count as consumers. — [HWL Ebsworth](https://hwlebsworth.com.au/a-key-change-to-the-definition-of-consumer-under-the-australian-consumer-law-will-lead-to-more-business-customers-being-able-to-rely-on-consumer-guarantees/); [LegalVision](https://legalvision.com.au/consumer-definition-changing-business-implications)
- Under s 64A a business can limit liability for guarantee breaches to repair, replacement, resupply or their cost, but not for goods or services usually bought for personal or household use. — [Coleman Greig](https://colemangreig.com.au/insights/publications/consumer-guarantees-what-who-how/); [ACCC guide](https://www.accc.gov.au/about-us/publications/a-guide-to-consumer-guarantees-for-businesses-and-legal-practitioners)
- For SaaS, commentators advise using s 64A to limit liability to resupplying the service and keeping caps clear of the unfair contract terms rules; a B2B contract may still leave consequential-loss exposure. — [BSL](https://bsl-web.pages.dev/faq/commercial/completely-exclude-liability-in-my-saas-agreement/); [HWL Ebsworth](https://hwlebsworth.com.au/you-may-still-be-liable-for-consequential-loss-in-your-b2b-contract-heres-why/)

Our reading:
- **A compliance app may say what a public framework says and what the data shows; it must not tell a client what the law requires of them.** Safe: "Control E8-MFA-1 test failed: 3 admin accounts without MFA". Risky: "You are in breach of the Privacy Act and must notify the OAIC". Map to frameworks and standards, not statutes. If the product covers laws (Privacy Act, SOCI Act, CPS 234), have a lawyer review the content and frame it as general information.
- "AI suggests, people approve" and "never say compliant" both cut legal-practice and misleading-conduct risk. [K] ACL s18 (misleading or deceptive conduct) also covers marketing like "guarantees compliance".
- AFSL: a security or operations compliance tool that never recommends financial products is very unlikely to be financial product advice. Keep features away from investments, insurance or super; get specialist advice if financial clients want product-level outputs.
- Contracts: use s 64A wording for contracts of AUD 100,000 or less; avoid blanket exclusions that are void or unfair under the unfair contract terms rules ([K] penalties since Nov 2023); cap liability for bigger deals (commonly fees paid in the prior 12 months). Self-hosting helps: the customer controls the data and system, narrowing the vendor's duty.
- Have an Australian technology lawyer review the licence terms, disclaimers and marketing before the first paid sale; a small fixed cost next to the risk.

Not found: primary law text for Uniform Law ss 10-11, s 766B or ACL s 64A; any Australian case or regulator guidance on whether compliance software counts as legal practice; the effect of the 2023 unfair contract terms penalties on SaaS caps; legal profession Acts in Queensland, SA, Tasmania, ACT and NT (not under the Uniform Law).
