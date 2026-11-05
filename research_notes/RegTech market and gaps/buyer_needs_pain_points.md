# What compliance buyers want and what frustrates them

Source notes for `reports/RegTech market and gaps.md`: what compliance costs, top complaints, why rollouts fail, wanted features, trust in AI, and differences by company size. Research 4 Nov 2026 by Claude; needs human review.

**How sure:** each survey figure carries its year. Several sources are vendor-run or second-hand; flagged. Paywalled reports (PwC Global Compliance Survey 2025 full text, Gartner, Hyperproof 2026, Thomson Reuters Cost of Compliance 2025) were not read in full.

## 1. What compliance costs

Bottom line: anti-financial-crime work alone costs banks hundreds of billions of US dollars a year. Staff time is the biggest cost, and almost everyone says costs are rising.

- **LexisNexis True Cost, global (2023 edition):** USD 206.1bn. The 2021 edition said 213.9bn (2021), up from 180.9bn (2020). A FutureCFO page (Apr 2025) repeats the 2023 figure; no 2025 global edition found. — [FutureCFO](https://futurecfo.net/?p=15703); [CPO Magazine](https://www.cpomagazine.com/cyber-security/global-cost-of-financial-crime-compliance-over-180-billion-report-reveals/)
- **LexisNexis 2024, US and Canada:** USD 61bn; 99% of institutions say costs are rising. — [InvestmentNews](https://www.investmentnews.com/regulation-and-legislation/financial-crime-compliance-costs-reach-61b-for-financial-institutions/249818)
- **LexisNexis/Forrester Asia Pacific (2023 data, out Mar 2024):** Australia AU$5.37bn (US$3.5bn); 98% say costs rose; technology is 34% of budget (highest of the countries surveyed); labour 39%. Across all surveyed countries: US$45bn; 75% name labour as a main cost driver; 79% see more screening alerts; 70% pay more for KYC software; 81% aim to cut costs in the next 12 months; 39% name more regulation as the main driver. 23% of Australian institutions recorded more AI use in this work. — [CFOtech](https://cfotech.com.au/story/australia-s-financial-crime-compliance-costs-reach-5-37bn)
- **Small Australian licensees (Holley Nethercote, Feb 2025, 200+ financial services and credit licensees):** spending dropped a lot; 40% spend under AU$100,000 on internal compliance staff, up from 29% a year earlier. Other surveys report hundreds of thousands a year, some with internal costs over $1m. — [Mondaq](https://www.mondaq.com/australia/compliance/1621992/annual-compliance-trends-survey-results-released); [Money Management](https://www.moneymanagement.com.au/how-much-are-licensees-spending-compliance); [Money Management, over $1m](https://www.moneymanagement.com.au/internal-compliance-costs-surpassing-1m-annually-licensees)
- **Australia, whole economy (older Deloitte Access Economics estimate, second-hand):** government rules cost AU$27bn a year to run and AU$67bn a year to comply with. — [Money Management](https://www.moneymanagement.com.au/mixed-views-regulation-costs)
- **Staff time:** GRC 20/20 says GRC reports often take 80+ person-hours. A study it cites found 80% of staff time went on chasing spreadsheets and building reports, not managing risk. — [GRC 20/20](https://www.grc2020.com/?p=390)
- **Spend trend:** Gartner projected legal and compliance spend on GRC tools up 50% by 2026. — [Help Net Security](https://www.helpnetsecurity.com/?p=276192). Hyperproof 2026 (1,002 GRC staff): most expect GRC spend to rise in 2026, the second year of rises (exact % gated). — [Hyperproof](https://hyperproof.io/it-compliance-benchmarks/)
- **Outsourcing:** Thomson Reuters Cost of Compliance 2021: 34% outsource all or part of compliance. — [Corporate Compliance Insights](https://www.corporatecomplianceinsights.com/thomson-reuters-cost-of-compliance-2021/). A 2025 "Cost of Compliance" report (publisher unclear; CUBE uses the same name) says compliance should advise earlier and at the top. — [Compliance Week](https://www.complianceweek.com/risk-management/rapid-regulatory-change-requires-investment-in-compliance-processes-in-financial-services-firms/36332.article)
- **GRC market:** Wheelhouse Advisors puts GRC software and services at USD 17.2bn in 2026, rising to 35.8bn by 2033 (11.1% a year); all integrated risk management at USD 69.7bn in 2026. — [Wheelhouse, 7 Oct 2026](https://www.prweb.com/releases/wheelhouse-advisors-finds-ai-agents-at-work-in-grc-but-full-autonomy-has-not-arrived-302900792.html)

Our reading: people, not software, are the biggest cost, so pitch hours saved, not features. Australian firms already spend 34% on tech, so they will compare on results. Small Australian licensees are cutting spend: the small end is very price-sensitive.

Not found: Thomson Reuters 2025/26 headline figures; a RegTech Association cost survey; a 2025-26 global fines total; Deloitte or KPMG cost surveys.

## 2. Top complaints

Words: **evidence collection** = gathering proof for an auditor (settings screenshots, user-list exports, signed policies). **False positive** = an alert that looks suspicious but is fine; a person still has to check it.

- **Spreadsheets live on, even inside GRC tools.** A Reddit thread (Feb 2026) lists uneven risk scoring across teams, GRC tools "overly complex but still rely heavily on spreadsheets", and weak exports for board reports. Practitioners want better board-level reporting and consistent scoring. — [Reddit snapshot](https://reddit.sentinel-team.org/posts/1r2tn8q/snapshots/2026-02-14T09%3A33%3A34.007023Z)
- **Audit fatigue at small firms.** The only security and IT person at a ~120-staff company had a family member help sort screenshots for the last audit (Reddit, Dec 2025). — [Reddit snapshot](https://reddit.sentinel-team.org/posts/1ptnc81/snapshots/2025-12-23T22%3A00%3A06.813696Z)
- **Too many tools.** 85% of Gartner's assurance clients have more than one GRC tool; just over 50% of enterprise risk users are satisfied. — [Gartner](https://www.gartner.com/en/documents/5368963)
- **Integrations are the top complaint on G2.** Vanta's top cons: "Integration Issues" (179 reviews), "Limited Integrations" (149). Drata's: "Limited Integrations" (43), "Integration Issues" (38). Counts change by snapshot. Pros: Drata support and ease of use; Vanta ease of use and coverage; reviewers credit Vanta with automating evidence. — [G2: Sprinto/Vanta/Drata](https://www.g2.com/compare/sprinto-inc-vs-vanta-vs-drata); [G2: OneTrust/Vanta/Drata](https://www.g2.com/compare/onetrust-tech-risk-compliance-vs-vanta-vs-drata); [G2: Drata/Vanta/Sprinto](https://www.g2.com/compare/drata-vs-vanta-vs-sprinto-inc)
- A Vanta reviewer: not every service of a connected tool (e.g. CrowdStrike) is continuously monitored. — [G2 review](https://g2.com/products/vanta/reviews/vanta-review-9312561)
- Rival 6clicks says Vanta users complain of weak reporting, hard-to-reach support, and billing and cancel friction (competitor source; treat with care). — [6clicks](https://www.6clicks.com/resources/blog/understanding-vantas-limitations-insights-from-real-user-experiences)
- **AML false positives (vendor survey, SymphonyAI 2026-27):** 37% have false-positive rates above 50%, 25.2% above 75%; only 20.5% keep them under 25%. 70.8% say 5% or fewer alerts lead to escalation or a report. 21.3% don't track the rate at all. — [SymphonyAI](https://www.symphonyai.com/resources/compliance-modernization)
- The often-repeated "90-95% of alerts are false positives" is credited to PwC by vendors; the original was not found. — [Youverify](https://youverify.co/en/blogs/howreduce-aml-false-positives)
- Too many alerts hurts judgement, not just time (practitioners). — [Hackernoon](https://hackernoon.com/why-aml-transaction-monitoring-fails-when-you-optimise-for-volume-instead-of-decisions); [Flagright](https://www.flagright.com/post/understanding-false-positives-in-transaction-monitoring)
- **PwC Global Compliance Survey 2025** (1,802 executives, 63 territories): technology is the top compliance priority; the biggest gap between hoped-for and actual capability is in AI, resilience and critical infrastructure. — [PwC Japan](https://www.pwc.com/jp/ja/knowledge/thoughtleadership/global-compliance-survey-2025.html); [PwC](https://pwc.com/gcs2025)

Our reading: integration depth is the battleground; shallow connectors push work back into screenshots. Board reporting is weak even in enterprise suites, leaving room for a clear live board view. In AML the measurable pain is analyst hours lost to false alerts, and about one in five institutions doesn't even measure it.

Not found: sourced reviews of ServiceNow GRC, Archer, MetricStream, OneTrust or AuditBoard/Optro (their "heavy rollout" reputation is common talk, unsourced); frameworks per company (Hyperproof gated); lock-in or data-export complaints.

## 3. Why rollouts fail

- Gartner: GRC tools take **over a year** from choice to full use. Use stalls after go-live because heads of enterprise risk lack clout and change-management resources. — [Gartner](https://www.gartner.com/en/documents/5368963); [Gartner](https://www.gartner.com/en/documents/5592959)
- Gartner survey (140 legal teams, 2024): most did not get the full benefit of tech they bought; only 37% asked about barriers before rollout; only 23% scored high on digital readiness. A Sep 2025 Gartner release repeats this. — [Lawyers Weekly](https://www.lawyersweekly.com.au/corporate-counsel/42769-legal-teams-struggle-to-fully-leverage-technology-gartner); [BizTech Reports](https://www.biztechreports.com/news-archive/2025/9/10/gartner-says-legal-departments-are-not-realizing-the-full-benefits-from-technology-investments-gartner-september-10-2025)
- AI-specific barriers: section 5.

Our reading: failure is mostly about people and setup (long projects, weak ownership), not just tech. A product useful on day one with little setup fixes the most common failure.

Not found: a measured failure or abandonment rate; sourced procurement barriers (security questionnaires); regulator acceptance of tool output (auditor view: plugin file section 4).

## 4. Features buyers want

Words: **continuous control monitoring** = software checks settings all the time (e.g. "is MFA on for everyone?"), not once a year. **Cross-framework mapping** = one control (e.g. "encrypt laptops") counts toward several standards ("test once, comply many"). **Obligations register** = a list of every legal duty, its owner and the proof it is met.

- 80%+ of companies plan to use tech to automate and speed up compliance (PwC 2025, via a Taiwanese news summary). — [Yam News](https://n.yam.com/Article/20250407490246)
- 64% of executives say better risk visibility is RegTech's main benefit (second-hand). — [RegTech Analyst](https://regtechanalyst.com/?p=73312)
- Firms with an integrated, automated approach to risk had fewer breaches: 27% of them had a breach in 2025 (comparison figure gated). — [Hyperproof](https://hyperproof.io/it-compliance-benchmarks/)
- Third-party risk is a priority: a Drata Oct 2026 report headline says 83% report third-party breaches (aggregator; not verified). — [Industry Lens](https://industry-lens.com/reports/drata-83-report-third-party-october-2026)
- Gartner's 2025 Hype Cycle for legal, risk and compliance highlights GenAI and automation. — [Gartner, 9 Sep 2025](https://www.gartner.com/en/newsroom/press-releases/2025-09-09-gartner-hype-cycle-highlights-rise-in-gen-ai-and-automation-as-legal-risk-and-compliance-leaders-tackle-global-regulatory-complexity)
- Also wanted: automated evidence and deep integrations, board reporting (section 2); AI doing the legwork with people deciding (section 5).

Our reading: the wanted feature list has settled: deep connectors, continuous checks, cross-framework mapping, board reports, AI help with human sign-off. Winners will differ on depth and trust, not on the list. Multi-entity views and rule-change alerts are widely marketed, but no buyer survey ranks them.

Not found: a survey ranking specific features; demand data for multi-site views.

## 5. AI in compliance

Words: **hallucination** = AI stating something false with confidence. **Human-in-the-loop** = a person approves AI output before it counts. **Agentic AI** = AI that does multi-step tasks itself (collect evidence, run a test, file a finding).

- **UK (Bank of England/FCA survey, Nov 2024):** about 75% of financial firms use AI and 10% more plan to within 3 years; 81% of users apply some explainability method. Yet nearly half have only a "partial understanding" of the AI they use, and explainability is among the biggest barriers. — [Finextra](https://finextra.com/newsarticle/45100/ai-adoption-in-uk-fs-sector-grows-but-understanding-lags); [Stephenson Harwood](https://www.stephensonharwood.com/insights/the-bank-of-england-and-the-fcas-survey-on-ai-in-uk-financial-services/); [Simmons & Simmons](https://www.simmons-simmons.com/en/publications/cm4inotaz04rougzgd9ujkqhx/ai-in-uk-financial-services-insights-from-the-fca-boe-survey)
- **PwC 2025:** 71% expect AI to be net positive for compliance (second-hand). — [Libertify](https://www.libertify.com/interactive-library/global-compliance-survey-2025/); [PwC](https://pwc.com/gcs2025)
- **Vixio (Aug 2026, interviews):** 65% of compliance leaders distrust generic AI for regulatory decisions; about 56% require a human check before acting on it; 59% name hallucinations as their main worry. — [Vixio press release](https://www.vixio.com/articles/press-release-new-vixio-report-reveals-65-of-compliance-leaders-distrust-generic-ai-for-regulatory-decisions); [Vixio report](https://www.vixio.com/resources-research-and-guides/the-state-of-ai-trust-in-regulatory-compliance-2026)
- Compliance staff plan to raise AI tool spend by 24%, but a trust gap remains (2026). — [Mondo Visione](https://mondovisione.com/news/compliance-professionals-set-to-increase-ai-tool-spending-by-24-but-trust-gap-2026105/)
- **S-RM (225 professionals, early 2026):** 84% say trust and reliability remain a challenge; only 12% think AI will do most due-diligence work with little oversight within 5 years. — [S-RM](https://www.s-rminform.com/latest-thinking/integrating-ai-into-compliance-and-intelligence-workstreams-key-trends-to-watch-in-2026)
- **Ethisphere x Ethena (134 organisations, Jun 2026):** top blockers are accuracy and hallucination risk (53%) and data exposure (48%). — [Ethisphere](https://ethisphere.com/ai-data-report/)
- **White & Case 2025:** more firms use AI for investigations and reporting, but accuracy, governance and privacy worries persist. — [White & Case](https://whitecase.com/insight-our-thinking/2025-global-compliance-risk-benchmarking-survey-artificial-intelligence)
- **ASIC REP 798 "Beware the gap" (Oct 2024, 23 licensees):** some adopt AI faster than they update governance; many rely on third-party AI models without proper governance; ASIC expects the gap to widen; governance should lead. — [ASIC REP 798](https://asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-beware-the-gap-governance-arrangements-in-the-face-of-ai-innovation/); [MinterEllison](https://www.minterellison.com/articles/asic-urges-stronger-ai-governance-for-afs-and-credit-licensees)
- **FCA AI Update (Apr 2024):** firms should expect to explain their AI to the FCA, which uses existing rules (Consumer Duty, SM&CR), not AI-specific ones. 2025 commentary says it is sharpening expectations on explainability, fairness and governance (second-hand). — [Bird & Bird](https://twobirds.com/en/insights/2024/uk/the-fca-publishes-its-expectations-of-uk-financial-services-firms-adopting-or-deploying-ai); [FCA (PDF)](https://fca.org.uk/publication/corporate/ai-update.pdf); [A-Team Insight](https://a-teaminsight.com/blog/fca-ai-update-2025-how-the-regulator-is-embedding-ai-oversight-into-uk-financial-rules/)
- **Agentic launches, Oct 2026:** Optro (formerly AuditBoard) launched domain-trained agents for audit, compliance, third-party risk and AI governance; they scope frameworks, collect evidence and evaluate controls "across every framework" while teams make judgements and own attestations; a demo had agents run control tests and flag exceptions. Commugen launched AI agents for cyber GRC. Vanta calls itself an "agentic trust platform" with an agent for search, evidence checks and policy writing (second-hand). — [PR Newswire](https://www.prnewswire.com/news-releases/optro-launches-domain-trained-agents-for-audit-compliance-third-party-risk-and-ai-governance-302907924.html); [Intelligent CISO](https://www.intelligentciso.com/2026/10/20/optro-launches-domain-trained-agents-for-audit-compliance-third-party-risk-and-ai-governance/); [CIO Influence](https://cioinfluence.com/automation/commugen-launches-ai-agents-for-cyber-grc-bringing-agentic-automation-to-risk-compliance-management/); [ISMS Copilot](https://www.ismscopilot.com/learn/best-ai-grc-tools-2026)
- **Wheelhouse 2026-27 IRM Navigator** (33 providers, evidence Sep 2025-Oct 2026): agents that do compliance work (gather evidence, run control tests, map obligations, triage cases) are live at customers of a few providers. None shows agents across all four GRC areas with independent checks; most agents assist while people verify. Open question: "who verifies the agents". Buyer advice: ask to see an agent working at a named customer, and who checks its work. — [Wheelhouse, 7 Oct 2026](https://www.prweb.com/releases/wheelhouse-advisors-finds-ai-agents-at-work-in-grc-but-full-autonomy-has-not-arrived-302900792.html)

Our reading: products moved from "AI chat about compliance" to "AI does the evidence work", but trust lags. AI proposes, a named person approves, and both are logged: that matches what buyers and regulators ask for. Regulators are not banning AI; they want governance first, explanations and accountable people, which favours outputs traceable to source evidence. A visible trail of "what the AI did and who approved it" is a must for adoption.

Not found: SEC statements on AI used for compliance; APRA AI guidance; Drata's own agentic launch (second-hand only). EU AI Act dates: fundamentals file.

## 6. Big, mid-size and small firms

Evidence is thin and indirect.
- **Enterprise:** several heavy GRC suites, rollouts over a year, about half satisfied (Gartner, sections 2-3). They need many teams, entities and frameworks in one view and can afford long projects.
- **Small:** one overloaded person doing audits by screenshot; very price-sensitive (Reddit and Holley Nethercote, sections 1-2). They need something cheap that works out of the box.
- **Mid-market:** SOC 2/ISO automation tools (Vanta, Drata, Sprinto) rate well on ease and support; integrations are the top complaint (section 2). Vanta's 16,000+ customers (vendors file) show how big this segment has become.

Our reading: a product for mid-size multi-site firms competes with heavy enterprise suites (slow, costly to set up) and SMB tools (too shallow for many entities). The gap is fast setup with enterprise-style multi-entity views.

Not found: pain or spend split by company size (Hyperproof breakdowns gated). Price comparison: vendors file section 2.
