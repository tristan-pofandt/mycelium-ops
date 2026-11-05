# RegTech vendors, buyers and prices

Source notes for `reports/RegTech market and gaps.md`: who leads each segment, what they charge, who buys, and how products plug into each other. Research 4 Nov 2026 by Claude; needs human review.

**How sure:** about 15 searches. Almost no vendor publishes prices, so most prices come from aggregators (Vendr, SpendHound, CostBench, ERPResearch, G2, Capterra). Vendor blogs and lead-generation sites often disagree; that is flagged. **[K]** = from memory, not checked this session.

Words: **compliance automation** = software that links to cloud, HR and code tools, checks settings and gathers audit evidence (SOC 2, ISO 27001). **EHS/WHS** = environment, health and safety / work health and safety. IRAP rules: plugin file section 5.

## 1. Who leads each segment

Seven segments, each with its own buyers and price shape. The 2024-2026 story is **consolidation**: private-equity-backed platforms (Regnology, CUBE, Riskonnect, Archer, Diligent, Entrust) buying specialists, including Melbourne's Camms. (Prices: section 2.)

**AML / KYC / ID checks**
- **ComplyAdvantage** charges per monitored customer, not per check. Its data layer ("Mesh") reportedly powers Sumsub's AML screening, so the two supply each other as well as compete. — [G2](https://www.g2.com/compare/complyadvantage-vs-sumsub); [Brokerage Atlas](https://brokerage-atlas.pages.dev/setup/kyc-aml/reviews/complyadvantage/)
- **Entrust bought Onfido** (London). Exclusive talks in early 2024; press said over USD 400m (not official). Done April 2024, terms not given. — [FinTech Futures](https://www.fintechfutures.com/biometrics-id-verification/entrust-in-exclusive-talks-to-acquire-id-verification-solutions-provider-onfido); [Fintechnews SG](https://fintechnews.sg/84791/regtech/entrust-in-talks-to-acquire-ai-powered-regtech-firm-onfido-for-over-us400-million/); [IBS Intelligence](https://ibsintelligence.com/ibsi-news/entrust-completes-acquisition-of-id-verification-provider-onfido)
- **Silent Eight** (founded in Singapore; often listed with Australian RegTechs but not Australian): AI (product "Iris") that clears false alarms in bank name screening and transaction monitoring. ICA Compliance AI Solution of the Year (Europe) 2025. Funding about USD 55M or 40M depending on source. — [Silent Eight awards](https://www.silenteight.com/award-and-accreditations); [CB Insights](https://www.cbinsights.com/investor/silent-eight); [Silent Eight](https://www.silenteight.com/why-silent-eight); [Fintechnews SG](https://fintechnews.sg/40627/fintech-startup-of-the-week/silent-eight-uses-ai-to-fight-financial-crime/)
- **Arctic Intelligence** (Sydney, 2015, CEO Anthony Quinn): AML Accelerate, Risk Assessment and Health Check, used to write and maintain AML/CTF risk assessments and programs. Australian-founded RegTech of the Year 2020; Finnies 2024 finalist. Founding RegTech Association member; alliance with FrankieOne. — [Stone & Chalk](https://www.stoneandchalk.com.au/articles/how-arctic-intelligence-is-revolutionising-regtech); [Arctic Intelligence](https://arctic-intelligence.com/insights/blog/arctic-intelligence-named-finalist-for-excellence-in-regtech-at-finnies-2024); [FinTech Global](https://fintech.global/?p=66743)
- A 2026 listing names Arctic Intelligence, Global Data and FrankieOne (KYC orchestration) among leading Australian RegTechs. — [MarkNtel](https://www.marknteladvisors.com/query/report-enquiry/regtech-market-australia.html)

**Regulatory reporting (banks, insurers)**
- **Regnology** (owned by Nordic Capital) bought Wolters Kluwer's Finance, Risk and Regulatory Reporting unit (OneSumX), done by late 2025; Wolters Kluwer's pages now redirect to Regnology. It also bought Vermeg's AGILE division and in May 2026 agreed to buy Moody's Regulatory Reporting & ALM business (price not found), reaching 50+ jurisdictions. — [Wolters Kluwer / Chartis](https://www.wolterskluwer.com/en/know/chartis-regulatory-reporting-solutions); [PrivSource](https://www.privsource.com/firms/regnology-aorg_rW0fUzbR8q); [FF News](https://ffnews.com/newsarticle/fintech/regnology-acquires-vermegs-regtech-division-agile-to-solidify-position-as-global-market-leader/); [Windsor Drake index](https://windsordrake.com/market-intelligence/transactions/regology-bloomberg-industry-group-2026)
- Wolters Kluwer had launched a cloud (SaaS) OneSumX; Regnology calls its range SaaS. — [A-Team Insight](https://a-teaminsight.com/blog/wolters-kluwer-launches-onesumx-saas-regulatory-reporting-solution)
- **AxiomSL** (Adenza brand) was a common reporting vendor in a 2023 survey (aggregator; treat with caution). — [airframe.ai](https://www.airframe.ai/product/wolterskluwer-com-en-solutions-onesumx-for-finance-risk-and-regulatory-reporting/analysis)
- So the field is now Regnology vs Nasdaq's AxiomSL. [K] Nasdaq bought Adenza (AxiomSL + Calypso) from Thoma Bravo in 2023 for about USD 10.5B.

**Regulatory change / horizon scanning**
- **CUBE** (owned by Hg) collects rules from regulators worldwide and maps them to a client's duties. It bought Thomson Reuters Regulatory Intelligence and Oden (May 2024, so that TR product now lives in CUBE), Reg-Room (New York, May 2024), Acin (operational-risk analytics, Jun 2025), 4CRisk.ai (Silicon Valley, Feb 2026; maps rule changes to policies and controls), plus Kodex AI and The Hub. — [PrivSource](https://www.privsource.com/acquisitions/deal/7YSLxm); [Hg](https://hgcapital.com/insights/cube-acquires-reg-room-to-further-extend-its-regulatory-intelligence-and/); [A-Team: Acin](https://a-teaminsight.com/blog/cubes-acquisition-of-acin-integrates-ai-powered-compliance-and-operational-risk-management/?brand=rti); [A-Team: 4CRisk](https://a-teaminsight.com/briefs/cube-acquires-silicon-valley-regtech-4crisk-delivering-next-generation-compliance-and-risk-mapping-automation/); [RegTech Analyst](https://regtechanalyst.com/?p=83277); [A-Team: Kodex AI](https://a-teaminsight.com/briefs/cube-expands-ai-capability-with-acquisition-of-kodex-ai/?brand=rti); [Finance Magnates: The Hub](https://www.financemagnates.com/fintech/cube-extends-ai-regtech-capabilities-by-acquiring-the-hub/amp/)
- CUBE also sells inside other platforms: horizon scanning in IBM watsonx.governance, after tie-ups with Microsoft and ServiceNow. Revolut is a named customer. — [FinTech Global](https://fintech.global/?p=256443); [IBS Intelligence](https://ibsintelligence.com/ibsi-news/cube-to-supply-global-regulatory-compliance-intelligence-services-to-revolut)
- **Compliance.ai** (San Francisco, ~50 staff) was bought by Archer on 20 Feb 2024, terms not given. — [Archer](https://www.archerirm.com/press-releases/archer-acquires-compliance-ai-to-drive-ai-powered-regulatory-compliance-and-risk-management); [Business Wire](https://businesswire.com/news/home/20240220502745/en/Archer-Acquires-Compliance.ai-to-Drive-AI-Powered-Regulatory-Compliance-and-Risk-Management)
- **Ascent RegTech** still trades (Mortgage Bankers Association exhibitor): AI plus human experts. Only funding found: USD 6M Series A (2018). — [MBA](https://www.mba.org/detail-pages/exhibitor/ascent-regtech-74536-9745359); [Built In](https://builtin.com/articles/ascent-raises-6m-series-rd)

**Enterprise GRC**
- **Archer:** Cinven agreed to buy it from RSA Security (owned by Clearlake and STG) in April 2023, terms not given. Verdantix says Archer is moving from IT GRC to enterprise risk. — [Cinven](https://www.cinven.com/news-insights/cinven-agrees-to-acquire-archer/); [CB Insights](https://www.cbinsights.com/company/archer-3/financials); [Verdantix](https://www.verdantix.com/vantage/report/green-quadrant-grc-software-2025)
- Verdantix's 2025 Green Quadrant profiles Archer, Diligent, MetricStream, Riskonnect and others. — [Verdantix](https://www.verdantix.com/vantage/report/green-quadrant-grc-software-2025)
- **Diligent** (board portal + GRC) bought 3rdRisk (AI third-party risk) on 14 Jan 2026. — [Pulse](https://www.pulse.bot/b2b-growth/news/diligent-acquires-3rdrisk-to-deliver-ai-native-third-party-risk-management-at-scale-d4ade95f-8ff2-4025-953f-4c6ea5a67e82)
- **MetricStream:** Clearlake is an investor; last round Sep 2024. — [CB Insights](https://www.cbinsights.com/company/metricstream/financials)
- **Riskonnect** (backed by TA Associates) bought **Camms** (Melbourne, cloud GRC) on 18 Jun 2024, terms not given, to grow in Australia, NZ and Asia Pacific. Both products are still sold; Camms runs under the Riskonnect brand. Riskonnect also bought Sword GRC. — [Riskonnect](https://riskonnect.com/press/riskonnect-acquires-camms-grc/); [TA](https://www.ta.com/news/riskonnect-acquires-camms-to-fuel-grc-innovation-and-global-growth/); [PrivSource](https://www.privsource.com/acquisitions/deal/x7SVL3)
- **ServiceNow** sells GRC/IRM as apps on its own platform in Standard, Professional and Enterprise tiers, all by quote. — [FitGap](https://us.fitgap.com/products/servicenow-integrated-risk-management)
- **AuditBoard** (renamed Optro; buyer file section 5) and **LogicGate** are mid-to-large GRC and audit platforms. — [G2](https://www.g2.com/compare/auditboard-vs-logicgate-risk-cloud)
- **6clicks** (Melbourne, ex-KPMG founders): AI GRC, IRAP-assessed for Australian government (details: gaps file Q12). Sells mostly through MSPs and consultancies, which resell and run it as a managed service. Funding: USD 17.2M over three rounds, including a $10M raise (date not confirmed). — [SmartCompany](https://www.smartcompany.com.au/startupsmart/cyber-regtech-startup-6clicks-capital-raise/); [StartupIntros](https://startupintros.com/orgs/6clicks); [6clicks IRAP blog](https://www.6clicks.com/resources/blog/an-overview-of-the-irap-assessed-grc-platform-for-australian-government); [6clicks MSP guide](https://www.6clicks.com/resources/blog/msp-guide-selling-cyber-grc-managed-service)
- **Protecht** (Sydney; risk, ERM, compliance; funding in fundamentals file): compared with SafetyCulture on G2. One review says full risk features need higher plans. — [G2](https://www.g2.com/compare/protecht-protecht-vs-safetyculturehq); [IntelliPermit](https://www.intellipermit.com/blog/best-risk-management-software-in-australia-2025-review/)

**Compliance automation (SOC 2, ISO 27001, Essential Eight)**
- **Vanta:** about USD 300M yearly recurring revenue (ARR) in April 2026 (Fortune; Sacra estimates ~69% yearly growth). 16,000+ customers including Snowflake, Atlassian, Duolingo, Ramp, Cursor and Harvey; net revenue retention above 100%. Growth in 2026 came from AI companies and "shadow AI" governance: fast-growing startups buy it to pass their own customers' security reviews. — [Fortune, 29 Apr 2026](https://fortune.com/2026/04/29/exclusive-vanta-arr-300-million-sequoia-shadow-ai-claude-cursor/); [Sacra](https://sacra.com/research/vanta-at-300m-year/)
- Vanta's last priced round: USD 150M Series D, July 2025, USD 4.15B valuation, led by Wellington Management. — [Sacra](https://sacra.com/research/vanta-at-300m-year/); [TechStackIPO](https://techstackipo.com/company/vanta); [RegTech Analyst](https://regtechanalyst.com/?p=82030)
- **Drata:** about USD 100M ARR in Feb 2025 (up 61%), 7,000-8,000 customers; last reported valuation USD 2B (Series C, Dec 2022). — [geo.sig.ai](https://geo.sig.ai/brands/drata); [PremierAlts](https://www.premieralts.com/companies/drata/funding-history)
- YipitData (to Feb 2026): Vanta leads mid-market; Drata leads enterprise (45 vs 31 observed enterprise customers). — [YipitData](https://www.yipitdata.com/resources/vanta-vs-drata-compliance-software-2026)
- A 2025 benchmark covers Centraleyes, CyberSaint, Drata, LogicGate, Scytale, Sprinto, Strike Graph, Thoropass and Vanta. — [GlobeNewswire](https://www.globenewswire.com/news-release/2025/09/02/3142533/28124/en/Compliance-Automation-Company-Benchmark-Report-2025-Featuring-Centraleyes-CyberSaint-Drata-LogicGate-Scytale-Sprinto-Strike-Graph-Thoropass-and-Vanta.html)

**ESG / carbon**
- **Workiva** (listed; financial and ESG reporting) and **Sphera** (EHS, product stewardship, sustainability; SpheraCloud) publish no prices. — [ERPResearch](https://erpresearch.com/erp-add-ons/esg-sustainability/persefoni-vs-workiva); [SpendHound](https://www.spendhound.com/marketplace/sphera-pricing)
- **Persefoni** (carbon accounting): free "Pro" tier can build CSRD, ISSB and CDP reports. — [G2](https://www.g2.com/compare/persefoni-vs-workiva-workiva); [Socious](https://socious-marketing-astro.pages.dev/blog/sustainability-reporting-software-2026)

**EHS / WHS**
- **SafetyCulture** (Sydney, once iAuditor; renamed Mitti in Aug 2026, enterprise file section 8): mobile inspections and checklists, free version plus per-user plans. — [Capterra AU](https://capterra.com.au/software/141080/iauditor)
- **Donesafe** (now HSI Donesafe) is aimed at medium businesses. — [Capterra AU](https://www.capterra.com.au/alternatives/155487/cammsrisk)

**Other Australian names**
- **Daisee** (Sydney, 2017): AI speech analytics that scores contact-centre calls for compliance (e.g. were mandatory scripts read) and flags calls to review. Sells to banks and insurers; product "Lisa". On AWS Marketplace, so buyers can pay through their AWS bill. — [Insurance Business](https://insurancebusinessmag.com/au/news/technology/how-ai-can-predict-a-claim-outcome-from-a-callers-voice-314295.aspx); [Capterra AU](https://www.capterra.com.au/software/196948/lisa); [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-rls3n2uc5j73e)

Our reading:
- Fix the brief's vendor list: Onfido is now Entrust; Thomson Reuters Regulatory Intelligence is CUBE; Compliance.ai is Archer; Wolters Kluwer reporting is Regnology; Camms is Riskonnect. "Kinetic IT" and "CyberCX GRC" look like IT service firms, not software vendors (no source found either way).
- Two market shapes. Top-down: big PE-backed platforms selling six-figure deals to banks and enterprises (Regnology, CUBE, Archer, MetricStream, ServiceNow, NICE Actimize). Bottom-up: product-led SaaS for scale-ups and mid-market (Vanta, Drata, Sumsub, SafetyCulture, Persefoni free tier).
- Australian vendors either get bought (Camms) or win a niche: AML risk assessment (Arctic), IRAP-assessed GRC sold through MSPs (6clicks), safety inspections (SafetyCulture).

Not checked [K]: Quantexa valuation and funding; NICE Actimize and LexisNexis Risk details; Jumio in 2026; Napier funding; Intelex (Fortive?) and Cority owners; Sphera owner (Blackstone?); OneTrust's 2026 owner and funding; a reported 2024 Hg deal for AuditBoard; Thoropass and Sprinto funding and prices; Protecht's owner and 2026 news; Gartner Magic Quadrant / Forrester Wave 2026 (paywalled).

## 2. Prices

Only self-serve products publish prices. Everything else is "contact sales"; the best public guides are Vendr and SpendHound deal data.

How each segment charges: **AML/ID** per check or per monitored customer, plus monthly minimums. **Compliance automation** yearly, by number of frameworks and company size, with framework add-ons. **GRC** yearly platform fee, by licensed "power users" and modules. **ESG** yearly, with enterprise tiers. **EHS** per user or per worker, plus setup fees.

| Product | Price (USD unless noted) | Source |
|---|---|---|
| Sumsub | Basic $1.35/check (min ~$149/month); Compliance $1.85/check (min ~$299/month; another source says $300); Enterprise by quote. Under ~5,000 checks a month pay nearer $1.50 (estimate). Add-ons: ongoing AML monitoring ~$0.08 per first check plus per match; email check ~$0.04 per person | [Sumsub](https://sumsub.com/pricing/); [xpay.sh, May 2026](https://www.xpay.sh/saas-pricing/sumsub); [Brokerage Atlas](https://brokerage-atlas.pages.dev/setup/kyc-aml/reviews/sumsub/); [CostBench](https://costbench.com/software/kyc-aml/sumsub/); [CostBench hidden costs](https://costbench.com/software/kyc-aml/sumsub/hidden-costs/) |
| ID checks (Sumsub, Onfido, Jumio, Veriff) | ~$0.80-3.80 per check (2026 estimate, iGaming) | [Tech-Insider](https://tech-insider.org/igt-sumsub-vs-onfido-vs-jumio-vs-veriff-for-igaming-kyc-202-en-d169/) |
| ComplyAdvantage | Starter $99.99 for 1,000 monitored customers | [G2](https://www.g2.com/compare/complyadvantage-vs-sumsub) |
| Vanta | Quote only, no free trial; median ~$20,000/year (320 purchases); framework add-ons $5k+ | [Vendr](https://www.vendr.com/marketplace/vanta%23what-does-each-vanta-plan-cost); [Tech-Insider](https://tech-insider.org/?p=19984) |
| Drata | Quote only. Mid-size SOC 2 Type II $20-45k/year (Vendr); average ~$25k; median ~$25k, range 10,250-42,750 (Vendr via Orbiq). Framework add-ons from ~$1.5k; other estimates $1.5-3k or $3-10k each. Custom integrations ~$5-10k each. 2-3 year terms give 15-25% off. All third-party | [Vendr](https://www.vendr.com/marketplace/Drata); [Tech-Insider](https://tech-insider.org/?p=19984); [Orbiq](https://orbiqhq.com/comparisons/drata-pricing); [UnderDefense, Aug 2026](https://underdefense.com/blog/drata-pricing/); [Compliance Stronghold](https://compliancestronghold.pages.dev/reviews/drata) |
| Secureframe | 3 plans $7,500-50,000/year; others say $8,000-70,000+ | [UnderDefense, Jul 2026](https://underdefense.com/blog/secureframe-pricing/); [CostBench](https://costbench.com/software/compliance-management/secureframe/); [Vendr](https://vendr.com/marketplace/secureframe) |
| Any tool, one framework | ~$7,500-15,000/year; sources disagree | [soc2auditors](https://soc2auditors.pages.dev/insights/soc-2-software-pricing-comparison/) |
| AuditBoard | Vendr guide: average ~$97,000/year, max ~$650,000. Vendr marketplace: median $39,548. ERPResearch: median ~$46,000, range $21,000-150,000 | [Vendr guide](https://vendr.com/buyer-guides/auditboard); [Vendr](https://vendr.com/marketplace/auditboard); [ERPResearch](https://erpresearch.com/erp-add-ons/audit-management/auditboard/pricing) |
| LogicGate | Vendr median $52,567 (17 purchases), max ~$270,000; priced by Power User licences; buyers save ~17-18.6% off list | [Vendr](https://www.vendr.com/buyer-guides/logicgate); [SmartSuite](https://www.smartsuite.com/blog/logicgate-pricing) |
| ServiceNow IRM | Quote only; no reliable figure | [FitGap](https://us.fitgap.com/products/servicenow-integrated-risk-management) |
| Workiva | SpendHound average $149,887/year SMB, $388,260 enterprise (estimate) | [SpendHound](https://www.spendhound.com/marketplace/sphera-pricing); [ERPResearch](https://erpresearch.com/erp-add-ons/esg-sustainability/persefoni-vs-workiva) |
| Sphera | SpendHound average $13,454/year SMB, $248,112 enterprise | [SpendHound](https://www.spendhound.com/marketplace/sphera-pricing) |
| Persefoni | Free Pro tier (one user); enterprise not disclosed | [G2](https://www.g2.com/compare/persefoni-vs-sphera); [PricingSaaS](https://pricingsaas.com/companies/persefoni) |
| SafetyCulture | From $29/user/month plus a free version (Capterra); another 2026 source says ~$37 (maybe currency or tier) | [Capterra AU](https://capterra.com.au/software/141080/iauditor); [TradieScaler](https://tradiescaler.pages.dev/safety-compliance) |
| Donesafe | Per worker plus setup fee | [IntelliPermit](https://www.intellipermit.com/blog/best-risk-management-software-in-australia-2025-review/) |
| Protecht, Camms | Price on application | [IntelliPermit](https://www.intellipermit.com/blog/best-risk-management-software-in-australia-2025-review/); [G2](https://www.g2.com/compare/protecht-protecht-vs-safetyculturehq) |

Our reading: setup fees are common in enterprise GRC, EHS and regulatory reporting, but no source gave numbers; buyers should budget for a services fee. AuditBoard's average ($97k) vs median ($39.5k) shows a few big contracts pull the average up, so the median is the better guide. Per-check pricing grows with sign-ups (suits fintechs); per-seat and per-module pricing grows with company complexity.

Not found: prices for NICE Actimize, LexisNexis Risk, Quantexa, Napier, Jumio (list), Regnology, AxiomSL, CUBE, MetricStream, Archer, OneTrust, Diligent, Riskonnect, Cority, Intelex, Arctic Intelligence, 6clicks; any AUD prices for Australian vendors; setup fee ranges.

## 3. Who buys, and how hard it is to sell

| Segment | Budget holder | Daily users |
|---|---|---|
| Compliance automation | CISO, CTO or founder | Engineers, a GRC lead |
| AML/KYC | Chief Compliance Officer or MLRO, plus fraud and onboarding teams | AML analysts |
| Regulatory reporting | CFO, head of regulatory reporting | Reporting analysts |
| Regulatory change | CCO and legal | Compliance officers |
| Enterprise GRC | CRO, Chief Audit Executive, sometimes company secretary (Diligent's board roots) | Risk and audit teams, control owners |
| ESG | CFO, Chief Sustainability Officer | Sustainability analysts |
| EHS/WHS | HSE manager | Frontline workers on mobile |

(Table is our reading from what each product does.)

- In GRC deals the CISO owns and evaluates the program, a risk or compliance officer runs it daily, and the CFO or COO approves the budget (6clicks). — [6clicks MSP guide](https://www.6clicks.com/resources/blog/msp-guide-selling-cyber-grc-managed-service)
- Cyber buyer roles: CISO, VP Security, Head of IT, CTO, Compliance Officer. — [DevCommX](https://www.devcommx.com/fractional-revops/canberra/cybersecurity)
- Sales cycles (thin, vendor claims): mid-market GRC about 4-8 weeks (6clicks); Australian cybersecurity 60-180 days (a marketing agency). — [6clicks](https://www.6clicks.com/resources/blog/msp-guide-selling-cyber-grc-managed-service); [DevCommX](https://www.devcommx.com/demand-generation/adelaide/cybersecurity)
- G2's 2023 GRC report (US): average contract 22 months; only 57% of users actually use the platform. — [G2](https://www.g2.com/articles/g2-grid-report-grc-platforms)
- Multi-year terms (2-3 years) and rival quotes are common bargaining levers. — [Vendr](https://www.vendr.com/marketplace/Drata)
- Australian government GRC tenders prefer SaaS and require a current IRAP assessment at PROTECTED. — [AustralianTenders](https://www.australiantenders.com.au/tenders/597633/governance-risk-and-compliance-grc-system)
- OneTrust sells to the UK public sector through G-Cloud (a government buying framework). — [UK Digital Marketplace](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/660488860974899)

Our reading: selling compliance software means passing compliance yourself: the vendor must show its own SOC 2 or ISO 27001 (plus IRAP for Australian government, and APRA CPS 230/234 supplier checks for Australian banks and insurers). Low adoption (57%) suggests people outside the risk team rarely log in, so new tools work inside tools people already use (ServiceNow, Jira, Slack).

Not found: independent sales-cycle data by segment (enterprise bank deals are said to take 6-18 months; no source); how CPS 230 changes buying; how many vendors hold IRAP.

## 4. How products are deployed and plug in

- Almost every new product is shared (multi-tenant) SaaS. Older enterprise products (regulatory reporting, AML monitoring, Archer) also run on-premise or in private cloud and are moving to cloud. Camms is cloud GRC. — [Riskonnect](https://riskonnect.com/press/riskonnect-acquires-camms-grc/)
- **ServiceNow:** GRC runs on the customer's own ServiceNow instance. All GRC apps, including ServiceNow's own (named "GRC: ..."), come from the ServiceNow Store and need entitlement; third-party apps lack that prefix. A 2019 post counted 60+ partner GRC apps (dated). — [ServiceNow docs](https://www.servicenow.com/docs/r/governance-risk-compliance/grc-and-store.html); [Community, 2019](https://www.servicenow.com/community/grc-blog/the-servicenow-store-speeds-access-to-new-grc-applications/ba-p/2273910); [Store release notes](https://www.servicenow.com/docs/r/store-release-notes/store-rn-grc.html)
- **Vanta:** 300+ pre-built connectors plus APIs. The Vanta Integration Partner Program is free: partners publish a public integration with the Build Integrations API, the only API open to partners (they cannot use the "Manage Vanta" API, e.g. setting control owners or managing vendors). Customers can build private integrations for their own account, self-serve, in the Developer Console. Vanta announces integrations in batches (e.g. "50 new integrations"). API details: plugin file section 1. — [Build integrations](https://developer.vanta.com/docs/build-integrations); [Become a partner](https://developer.vanta.com/docs/guides/become-partner.md); [Integrations concepts](https://developer.vanta.com/docs/concepts/integrations); [50 new integrations](https://www.vanta.com/resources/50-new-integrations)
- **OneTrust:** Technology Partner Program; partner integrations go into the Integrations Gallery after a OneTrust technical check. Claims 165+ integrations, 500+ APIs, 14,000+ customers; a tracker counted 115 listings and 80 software partners (May 2025). OneTrust also sits inside other vendors' marketplaces (Braze, Auth0). — [OneTrust partners](https://developer.onetrust.com/onetrust/page/partners); [OneTrust integrations](https://www.onetrust.com/integrations/?integrations=cmp); [AppMarketplace](https://appmarketplace.com/marketplaces/onetrust-integrations-marketplace); [Braze](https://marketplace.braze.com/partners/onetrust); [Auth0](https://auth0.com/blog/consent-management-with-auth0-marketplace/)
- Sumsub and similar ID vendors are used through API/SDK and dashboards. — [API Evangelist](https://providers.apievangelist.com/providers/sumsub/)

Our reading:
- "Content as a feed" is common (CUBE into ServiceNow, ComplyAdvantage data into Sumsub): data vendors supply workflow platforms instead of fighting for the screen.
- Cloud marketplaces (AWS, Azure) let buyers use cloud budget they already committed and skip a separate buying round.
- Easiest routes for a small add-on: (1) a public Vanta integration (free program, scoped API that pushes evidence in); (2) a OneTrust Gallery listing (needs OneTrust's check); (3) a ServiceNow Store app (heavier: built on ServiceNow and certified). A listing lets the product ride the host's existing approval instead of a separate security review.

Not found: SaaS vs on-premise split, or which AML vendors (NICE Actimize, Quantexa) still ship on-premise; Australian self-hosted or local-hosting options; partner programs of Drata, Secureframe, AuditBoard, Archer, MetricStream, Diligent; ServiceNow Store certification steps, revenue share and current GRC app count; share of revenue any vendor gets through marketplaces.
