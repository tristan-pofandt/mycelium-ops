# RegTech basics and market

Source notes for `reports/RegTech market and gaps.md`: what RegTech is, the laws that drive it, market size, funding and deals, and Australia's RegTech scene. Research 4 Nov 2026 by Claude; needs human review.

**How sure:** about 20 searches. Most market and deal numbers come from search summaries, not full reads of paywalled reports. **[K]** = from memory, not checked this session; check before publishing.

## 1. What RegTech is

- **RegTech** (regulatory technology) is software that helps firms obey rules more cheaply and reliably. It started inside FinTech after the 2008 crisis and now spans many industries.
- **Origin.** The UK Treasury's March 2015 Budget asked the FCA (with the PRA, the Bank of England's bank-safety regulator) to support new tech that cuts compliance costs, "so-called 'RegTech'". — [Osborne Clarke](https://osborneclarke.com/insights/what-is-regtech-and-how-is-the-fca-encouraging-new-regulatory-technologies); [FCA RegTech page](https://www.fca.org.uk/firms/innovation/regtech)
- The FCA's Call for Input (23 Nov 2015) got 350+ replies. Feedback Statement FS16/4 followed in July 2016. Replies asked the FCA to do more, including certifying RegTech. — [FCA FS16/4 (PDF)](https://www.fca.org.uk/publication/feedback/fs-16-04.pdf); [Regulation Tomorrow](https://www.regulationtomorrow.com/2015/11/fca-call-for-input-on-supporting-the-development-and-adoption-of-regtech/); [FinTech Futures](https://www.fintechfutures.com/biometrics-id-verification/call-for-blockchain-and-biometrics-boost-to-uk-s-regtech)
- The FCA's 2018 call on "smarter regulatory reporting" (machine-readable rules) cites those 2015 replies. — [FCA CFI (PDF)](https://www.fca.org.uk/publication/call-for-input/call-for-input-smarter-regulatory-reporting.pdf)
- "The FCA coined RegTech" is a simplification. The Budget text is the earliest official use found; no source shows who said it first.
- [K] Post-2008 rules (Basel III, Dodd-Frank 2010, EMIR, MiFID II, bigger anti-money-laundering fines) drove up bank compliance costs. RegTech grew as the automation answer.

**Nearby terms**
- **FinTech** delivers financial services; **RegTech** helps obey rules. Juniper says spending now "expands beyond just financial services". — [The Stack](https://thestack.technology/regtech-spending-triples-by-2026)
- **SupTech** = regulators' own tools (e.g. ASIC's data analytics). [K]
- **GRC** is older (from about 2002, after Sarbanes-Oxley; Archer, MetricStream, ServiceNow IRM). The line with RegTech is blurry: funding trackers count GRC firms as RegTech (e.g. Protecht, section 4). — [RegTech Analyst](https://regtechanalyst.com/?p=82030)
- **"Compliance software"** is the generic term. "RegTech" usually means newer cloud, data or AI tools, often for one rule.
- Trackers now count cyber firms (Armis, Vanta, NinjaOne) as RegTech, because cyber rules (DORA, SEC, CPS 234) turned security evidence into a compliance product. — [RegTech Analyst](https://regtechanalyst.com/?p=82030); [FinTech Global Q1 2025](https://fintech.global/?p=196500)

**Segments** (there is no official list)
- FinTech Global tracks 4,000+ RegTech products from 1,300+ vendors (2025). — [FinTech Global, Aug 2026](https://fintech.global/2026/08/05/over-5bn-raised-by-regtech-companies-in-2025/)
- Market reports split by use (risk and compliance, identity, regulatory reporting, fraud, regulatory intelligence) and by buyer (banking, insurance, FinTech, IT and telecom, public sector, energy, healthcare). Segment shares were not retrieved. — [Fortune Business Insights](https://www.fortunebusinessinsights.com/segmentation/regtech-market-108305); [IMARC](https://www.imarcgroup.com/regtech-market)

| Segment | What it does | Example / source |
|---|---|---|
| AML/KYC and ID checks | Confirm a customer is who they say: scan ID, match a selfie (with "liveness" checks against deepfakes), check government data, find a company's real owners | FrankieOne (AU) links banks and insurers to hundreds of ID and fraud data providers — [Finextra](https://finextra.com/newsarticle/39001/robinhood-and-monzo-founders-join-20-million-round-in-aus-regtech-frankieone) |
| Transaction monitoring | Screen each payment for laundering or fraud; analysts decide whether to file a suspicious matter report (SMR) with AUSTRAC | [K] In old systems, well over 90% of alerts are often false alarms |
| Sanctions and PEP screening | Check names against sanctions lists (UN, OFAC, DFAT) and "politically exposed persons"; fuzzy name matching is the core tech | — |
| Regulatory reporting | Turn core-system data into regulator returns (APRA Connect in AU, often XBRL) | Regnology, Vermeg AGILE (now Regnology's; see vendors file) — [FF News](https://ffnews.com/newsarticle/fintech/regnology-acquires-vermegs-regtech-division-agile-to-solidify-position-as-global-market-leader/) |
| Regulatory change / horizon scanning | Track new rules, summarise them (now with AI), map them to the firm's policies | CUBE, Corlytics, Regology — [RegTech Analyst](https://regtechanalyst.com/?p=83277); [Windsor Drake](https://windsordrake.com/market-intelligence/transactions/regology-bloomberg-industry-group-2026) |
| GRC / operational risk | One record of risks, controls, incidents, policies, audits, suppliers, board reports; APRA CPS 230 drives AU demand | Protecht, ServiceNow IRM, Archer, MetricStream — [RegTech Analyst](https://regtechanalyst.com/?p=82030) |
| Conduct surveillance | Watch trades, staff emails, chats and calls for misconduct; review marketing | Red Marker (AU) — [Finextra](https://finextra.com/pressarticle/68691/regtech-association-launches-in-australia-with-spotlight-on-growing-eco-system) |
| Tax | GST/VAT, e-invoicing, FATCA/CRS, OECD Pillar Two minimum tax | [K] Avalara, Vertex, Sovos |
| ESG and climate | Collect emissions (Scope 1 = own operations, 2 = bought energy, 3 = supply chain and product use) and make audit-ready reports (AASB S2, CSRD) | [Anthesis](https://www.anthesisgroup.com/au/regulations/asrs-aasb-s2/) |
| Privacy | Data maps, consent, access requests, privacy impact checks, breach workflows | [K] OneTrust |
| Cyber/IT compliance ("trust management") | Keep proving security controls work (SOC 2, ISO 27001, Essential Eight, CPS 234, DORA) | Vanta (vendors file) |
| AI governance, "agentic" compliance | List and risk-rate AI models (EU AI Act); AI agents turn rules into checks | Norm Ai (section 4) |

Our reading: research firms and funding trackers set the category's edges, which is why market sizes differ so much. Cyber, privacy, AI and climate rules now pull in buyers far outside finance.

Not checked: Deloitte's RegTech Universe; Cambridge's 2019 RegTech taxonomy; who first used the word before March 2015.

## 2. Laws and regulators that drive demand

**Global**
- [K] **FATF** (founded 1989) sets the 40 Recommendations, the global AML standard, and peer-reviews countries. Australia's Tranche 2 partly answers FATF criticism that lawyers, accountants and real-estate agents were unregulated. — [FATF](https://www.fatf-gafi.org)
- [K] **Basel Committee** sets bank capital rules (Basel III, "Basel 3.1") and BCBS 239 (risk data). — [BIS](https://www.bis.org/bcbs)
- [K] **GDPR** applied 25 May 2018; fines up to EUR 20m or 4% of global turnover. It created the privacy-tech market.
- [K] **DORA** applied 17 Jan 2025 to EU financial firms and their critical IT providers: IT risk, incident reports, resilience tests, a register of IT contracts. — [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2554/oj)
- **EU AI Act:** in force 1 Aug 2024. A provisional "Digital Omnibus on AI" deal (7 May 2026) delays high-risk duties: stand-alone systems (Annex III: jobs, education, credit scoring) to 2 Dec 2027; systems inside products (Annex I) to 2 Aug 2028. Delayed, not removed. Article 50 transparency duties still apply from Aug 2026. — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/); [Sidley](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/); [Euronews](https://www.euronews.com/2026/05/07/eu-reaches-tentative-deal-to-simplify-ai-rules)
- In 2025-2026 the EU (CSRD and AI Act omnibus packages) and the US cut back or delayed some duties. — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/); [Travers Smith](https://www.traverssmith.com/knowledge/knowledge-container/the-omnibus-reaches-its-destination-csrd-and-cs3d-20/)
- NIS2, Cyber Resilience Act, SEC cyber rules and CSRD details: enterprise file.

**Australia**
- **ASIC** regulates companies, markets, financial services and credit. It enforces climate reporting (RG 280); the AASB writes the standard but does not enforce it. ASIC has run RegTech events since about 2017; Report 685 (Jan 2021) covers its 2019-20 RegTech work. — [AASB FAQ](https://aasb.gov.au/research-resources/knowledge-hub/aasb-s2-knowledge-hub/aasb-s2-frequently-asked-questions/general-faqs/); [ASIC REP 685 (PDF)](https://download.asic.gov.au/media/5937756/rep685-published-20-january-2021.pdf); [ASIC 18th RegTech Liaison Forum](https://download.asic.gov.au/media/jo3b1hlw/asic-18th-regtech-liaison-forum-master-slides.pdf)
- **APRA** regulates banks, insurers and super funds.
  - [K] CPS 234 (information security) since 1 Jul 2019: tell APRA of material incidents within 72 hours. — [APRA](https://www.apra.gov.au)
  - CPS 230 (operational risk) from 1 Jul 2025: operational risk, business continuity (critical operations and tolerance levels), and material service providers. Old provider contracts must comply at renewal or by 1 Jul 2026, whichever is first. The head of a group applies it group-wide, including unregulated companies. 2026 amendments add an exemption list for non-traditional providers (Norton Rose summary, May 2026; not checked against APRA). — [APRA CPS 230 (PDF)](https://www.apra.gov.au/sites/default/files/2023-07/Prudential%20Standard%20CPS%20230%20Operational%20Risk%20Management%20-%20clean.pdf); [Allens](https://www.allens.com.au/insights-news/insights/2022/09/A-guide-to-APRAs-operational-risk-management-reforms/); [Pulse](https://www.pulse.bot/banking/news/apra-finalises-targeted-amendments-to-cps-230-operational-risk-management-d6af04c0-402a-4dc8-b374-6be0c3af9c81/)
- **AUSTRAC, AML/CTF Tranche 2.** The AML/CTF Amendment Act 2024 adds lawyers, accountants, conveyancers, real-estate agents, trust and company service providers, and dealers in precious metals and stones. Duties started 1 Jul 2026. Enrolment opened 31 Mar 2026 and was due 29 Jul 2026. Each needs an AML/CTF program, customer checks and a compliance officer. Industry estimate: about 100,000 regulated entities, up from about 19,000. Existing entities' reformed duties began 31 Mar 2026; new TTR/SMR report forms from 1 Jul 2026, with transition to 30 Mar 2029. Caveat: law-firm and vendor sources. The Law Council (27 Jan 2026) asked to delay lawyers to 1 Jul 2027; the outcome was not confirmed on austrac.gov.au, though Legl's "Tranche 2 is live" implies no delay. Enrolment numbers and tools: gaps file Q2. — [Legl: live](https://legl.com/articles/tranche-2-is-live-what-the-1-july-start-date-means-for-australian-law-firms); [Legl: deadline](https://legl.com/articles/the-clock-is-ticking-law-firms-have-until-29-july-to-enrol-with-austrac); [LexisNexis AU](https://www.lexisnexis.com/blogs/en-au/insights/austraia-aml-ctf-regime-whats-changed-and-whats-coming-in-2026); [FinTech Global, Dec 2025](https://fintech.global/2025/12/18/preparing-for-austrac-tranche-2-aml-reforms-in-2026/); [Small Business WA](https://www.smallbusiness.wa.gov.au/blog/anti-money-laundering-and-counter-terrorism-new-reforms-explained)
- Privacy Act reforms, SOCI, Essential Eight, ransomware reporting and climate reporting (AASB S2): enterprise file.

Our reading: Tranche 2 is Australia's biggest new demand event. It brings tens of thousands of small firms with no compliance staff into AML rules, which favours cheap self-serve KYC and AML-program software. EU "simplification" slows ESG and AI-governance demand but does not remove it. Cyber and resilience rules (DORA, NIS2, CPS 230, SOCI) were not cut and look like the steadier driver.

Not checked: DORA details ([K]); AUSTRAC's own commencement notice.

## 3. Market size

Most 2026 estimates sit at **USD 18-26bn, growing about 17-22% a year**.

| Firm | Size | Yearly growth | Source |
|---|---|---|---|
| Grand View | USD 24.34bn (2025) | 21.1% (2026-33) | [MarketResearch.com](https://www.marketresearch.com/Grand-View-Research-v4060/RegTech-44620628/); [GII](https://www.gii.tw/report/grvi2018341-regtech-market-size-share-trends-analysis-report.html) |
| Fortune Business Insights | USD 23.43bn (2026) | 20.0% (2026-34) | [Fortune BI](https://www.fortunebusinessinsights.com/segmentation/regtech-market-108305) |
| Polaris | USD 20.79bn (2026) | 21.5% (2026-34) | [Polaris](https://www.polarismarketresearch.com/industry-analysis/regtech-market) |
| Fairfield (Jun 2026) | USD 25.80bn (2026) | 21.3% (to 2033) | [Fairfield](https://www.fairfieldmarketresearch.com/report/regtech-market) |
| IMARC | USD 77.0bn by 2034 | 17.1% (2026-34) | [IMARC](https://www.imarcgroup.com/regtech-market) |
| 360iResearch | USD 17.54bn (2026) | 19.57% | [GII](https://www.giiresearch.com/report/ires2000574-regtech-market-by-component-enterprise-size.html) |
| MarkNtel | USD 26.29bn (2025) | ~11.2% (2026-32), low outlier; says Europe leads | [MarkNtel](https://www.marknteladvisors.com/research-library/global-regtech-market.html) |

- Most reports say North America is the biggest region. — [Polaris](https://www.polarismarketresearch.com/industry-analysis/regtech-market)
- **Juniper** uses a wider "spend" measure that counts in-house tech budgets:
  - USD 83bn in 2023, up 124% by 2028 (about 186bn). — [ITWeb](https://itweb.co.za/content/R8OKdWqDkgoMbznQ)
  - Earlier forecast: 68bn (2022) to 204bn (2026), with RegTech passing 50% of all compliance spend. — [iTnews](https://www.itnews.com.au/news/global-regtech-spend-to-exceed-204-billion-by-2026-juniper-578916)
  - 2018 study: 18bn (2018) to 115.9bn (2023); North America 41.8bn, Western Europe 37.4bn. — [PaymentsNext](https://paymentsnext.com/regtech-compliance-disruption-growing-spending-will-reach-115-9-billion/)
  - 2017 study: RegTech's share of banks' regulatory spend from 4.8% (2017) to 34.4% (2022). — [Business Wire](https://businesswire.com/news/home/20171024005759/en/Juniper-Research-Regtech-Spending-Exceed-76Bn-2022)
  - 26% of bank digital onboarding to use AI by 2026, up from 8% in 2022. — [The Stack](https://thestack.technology/regtech-spending-triples-by-2026)
- **Australia:** Grand View USD 435.3m (2025) to 2,187m by 2033 (22.5%) — [Grand View](https://www.grandviewresearch.com/horizon/outlook/regtech-market/australia); Expert Market Research AUD 623.68m (2025), 20.5% (2026-35) — [EMR](https://www.expertmarketresearch.com.au/reports/australia-regtech-market); MarkNtel about USD 0.87bn (2025) to 1.65bn (2032), ~9.6% — [MarkNtel AU](https://www.marknteladvisors.com/research-library/regtech-market-australia.html); IMARC USD 316m (2024) — [IMARC AU](https://www.imarcgroup.com/australia-regtech-market)

Our reading: "market size" depends on the definition. Vendor-revenue reports land at USD 20-25bn; Juniper's spend measure is 4-8 times higher. Neither is wrong. Australia is about USD 0.4-0.9bn, roughly 2-4% of the world market, which is high next to its ~1.7% GDP share [K]. Finance is probably still most of the market (it is the top buyer in every report), but that is a guess.

Not found: a free figure for finance vs other industries (Grand View's split is paywalled; its page returned a placeholder). MarketsandMarkets' current figure (memory only: about USD 7.6bn in 2021 rising to 19.5bn by 2026; unverified).

## 4. Funding and deals, 2023-2026

Funding fell in 2023-24 and recovered in 2025. Totals depend on the tracker:
- **KPMG (Feb 2026):** USD 6.8bn (2024) down to 4.9bn (2025); deals up from 431 to 519. — [KPMG](https://kpmg.com/lv/en/insights/2026/02/pulse-of-fintech.html)
- **FinTech Global (Aug 2026):** USD 5bn+ in 2025. By country: US 3.17bn, Israel 566m, UK 412m, **Australia 280m (4th)**, Italy 200m, France 145m. By stage: early 145 deals / 1.85bn; mid-sized venture 34 / 1.9bn; private equity 17 / 1.1bn. Top investors: General Catalyst 751m (4 deals), Evolution Equity 595m, Goldman Sachs Growth Equity 585m. — [FinTech Global](https://fintech.global/2026/08/05/over-5bn-raised-by-regtech-companies-in-2025/)
- **RegTech Analyst:** USD 8.5bn in 2025, up 31% from 6.5bn; 546 deals, up 23% from 444; deals under USD 100m up 55%. — [RegTech Analyst](https://regtechanalyst.com/?p=83976)
- FinTech Global's Dec 2025 projection (7.3bn, 513 deals) was replaced by later figures. — [FinTech Global, Dec 2025](https://fintech.global/2025/12/24/global-regtech-funding-projected-to-grow-by-12-in-2025-as-investors-loosen-purse-strings/)
- US firms took 7 of the top 10 deals in 2025. — [RegTech Analyst](https://regtechanalyst.com/?p=82030)

**Big rounds**
- **Protecht** (Sydney, GRC): USD 280m from PSG Equity, the world's biggest RegTech deal in the first nine months of 2025. That is about all of Australia's 2025 total. — [RegTech Analyst](https://regtechanalyst.com/?p=82030)
- **Armis:** USD 435m round. (Vanta's round: vendors file.) — [RegTech Analyst](https://regtechanalyst.com/?p=82030)
- **NinjaOne:** biggest RegTech deal of Q1 2025. — [FinTech Global](https://fintech.global/?p=196500)
- **Norm Ai:** USD 120m Series C on 7 Jul 2026, led by Khosla, reported USD 1.2bn valuation. It pairs AI agents with an affiliated AI-native law firm (Norm Law LLP). Earlier: 48m (Mar 2025; Coatue, Craft, Vanguard, Blackstone) plus 50m from Blackstone. Total about 256-260m+; sources conflict (one dates the 48m round April 2026, see gaps file Q7). — [Under30CEO](https://www.under30ceo.com/compliance-software-norm-ai-series-c/); [Bloomberg Government](https://news.bgov.com/esg/blackstone-vanguard-invest-funds-in-compliance-ai-startup); [Corporate Compliance Insights](https://www.corporatecomplianceinsights.com/normai-raises-48-million-agentic-ai)

**Buyouts**
- **ServiceNow bought Armis** for about USD 7.75bn cash, closed 20 Apr 2026, after buying Veza (identity security). Armis is used by 9 of the Fortune 10. ServiceNow says the two deals more than triple its security and risk market. — [TelcoNews](https://telconews.com.au/story/servicenow-completes-usd-7-75-billion-armis-acquisition); [Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/servicenow-now-completes-7-75b-135707058.html); [Ynet](https://www.ynetnews.com/business/article/r1z11dpnpwx)
- **Corlytics** bought a Deloitte UK RegTech platform (Feb 2026, price not given). — [FF News](https://ffnews.com/newsarticle/fintech/global-regtech-consolidator-corlytics-acquires-a-deloitte-uk-regtech-platform/)
- **Bloomberg Industry Group bought Regology** (3 Jun 2026, price not given; AI regulatory intelligence). — [Windsor Drake](https://windsordrake.com/market-intelligence/transactions/regology-bloomberg-industry-group-2026)
- CUBE and Regnology deals: vendors file.
- [K] Older: Nasdaq-Verafin USD 2.75bn (2021); Mastercard-Recorded Future 2.65bn (2024); LexisNexis Risk Solutions-IDVerse (Sydney ID checks, 2025).

**Where money goes:** AI and agentic compliance (Norm Ai, CUBE's AI buys, Bloomberg-Regology); cyber and trust management (Armis, Vanta, NinjaOne); more, smaller deals.

Our reading: exits are buyouts by big platforms (ServiceNow, Bloomberg, LexisNexis, Nasdaq, Mastercard) or private-equity roll-ups (Hg/CUBE, Regnology), not IPOs. So "be worth buying for a platform" is the realistic end goal. Headline totals include cyber deals, so compliance-only funding is smaller.

Not found: a full 2025-26 deal list with prices (most undisclosed); 2026 year-to-date funding.

## 5. Australia's RegTech scene

- **BCG (2020, with the RegTech Association):** Australia was the world's 3rd-biggest RegTech hub, home to about 80 of ~600 RegTechs, with 65%+ of the Asia-Pacific market. Dated. — [Consultancy.com.au](https://www.consultancy.com.au/news/2682/australia-the-worlds-third-largest-regtech-hub-says-bcg); [BCG](https://bcg.com/ja-jp/publications/2020/australia-global-regtech-hub-poised-for-growth)
- **RegTech Association:** non-profit, Sydney, 2017, 13 founding members including Red Marker, GRC Solutions, Arctic Intelligence, Verifier, Dynamic GRC, Simple KYC, Cynopsis Solutions, AML Accelerate, Complii and Identitii. — [Finextra](https://finextra.com/pressarticle/68691/regtech-association-launches-in-australia-with-spotlight-on-growing-eco-system); [Arctic Intelligence blog](https://arctic-intelligence.com/insights/media/blog-coverage-start-ups-form-regtech-industry-association)
- Members grew from 8 to 172 organisations (CEO Deborah Young; date not shown, likely about 2021-22). — [Fintech Times](https://thefintechtimes.com/how-australia-rose-to-become-the-third-largest-regtech-hub/)
- **ASIC:** Innovation Hub; Report 523 (2017); 18+ RegTech liaison forums; Report 685 (section 2).
- A federal RegTech strategy was welcomed by FinTech Australia and the RegTech Association; date and issuer not confirmed. — [FinTech Australia](https://www.fintechaustralia.org.au/newsroom/newnew-australian-regulatory-technology-strategy-a-strong-platform-for-growth-industry-groups-say); [IT Brief](https://itbrief.com.au/story/new-aussie-regtech-strategy-set-accelerate-industry)
- **2025 funding:** USD 280m, mostly Protecht (section 4).
- **Vendors:**
  - **FrankieOne** (Melbourne; KYC and fraud orchestration): Series A of about AUD 20m (AirTree, Greycroft; Robinhood and Monzo founders), extended to about AUD 45m in 2022, then the biggest VC raise by an AU RegTech. Positioned for AUSTRAC's 2026 duties. — [Finextra](https://finextra.com/newsarticle/39001/robinhood-and-monzo-founders-join-20-million-round-in-aus-regtech-frankieone); [TechCrunch](https://techcrunch.com/2022/11/28/frankieone-series-a-plus); [FinTech Australia](https://www.fintechaustralia.org.au/newsroom/frankieone-a-scalable-foundation-for-identity-and-compliance)
  - **Red Marker** (marketing review), **Identitii** (ASX-listed; payments data, financial crime), **Complii** (ASX-listed; broker compliance), **Simple KYC**, **GRC Solutions** (training): founding members. — [Finextra](https://finextra.com/pressarticle/68691/regtech-association-launches-in-australia-with-spotlight-on-growing-eco-system)
  - Protecht, Arctic Intelligence, 6clicks, Camms, Daisee: vendors file.

Our reading: Tranche 2 buyers are small, price-sensitive firms with no compliance staff, so cheap, self-serve, bundled products should win. One deal (Protecht) is about the whole 2025 Australian total, so yearly Australian figures swing a lot and are not a trend.

Not found: 2026 RegTech Association numbers (regtech.org.au not fetched); 2026 Australian rounds; a count of Australian RegTechs after 2020.
