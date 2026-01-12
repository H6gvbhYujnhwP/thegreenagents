import { Helmet } from 'react-helmet-async'
import { ChevronRight, CheckCircle, TrendingUp, Users, Zap, BarChart3, Lock, Rocket } from 'lucide-react'

/**
 * GREEN AGENTS + SWEETBYTE LANDING PAGE
 * 
 * Design Philosophy: Nano Banana Aesthetic
 * - Bold, modern typography with strong visual hierarchy
 * - Navy (#1F3A5C) and Cyan (#00A9CE) colour scheme
 * - Generous whitespace and clean layouts
 * - Premium SaaS aesthetic with results-focused messaging
 * - Smooth scrolling experience with visual breaks
 */

export default function GrowthServicesPage() {
  return (
    <>
      <Helmet>
        <title>Affordable Growth Services for UK SMEs | Green Agents + Sweetbyte</title>
        <meta name="description" content="Professional growth services for UK SMEs. Email automation, social media, AI sales agents, and website builds. 50% lower cost than traditional agencies. No lock-in contracts." />
        <meta name="keywords" content="SME growth services, email automation, social media management, AI sales agents, affordable marketing, UK business growth" />
        <meta property="og:title" content="Affordable Growth Services for UK SMEs | Green Agents + Sweetbyte" />
        <meta property="og:description" content="Professional growth services for UK SMEs. 50% lower cost, proven results, no lock-in. Book a free consultation." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affordable Growth Services for UK SMEs" />
        <meta name="twitter:description" content="Professional growth services for UK SMEs. 50% lower cost than traditional agencies." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#1F3A5C] to-[#2D5A8C] text-white py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                Affordable Growth Services for UK SMEs
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-light">Green Agents + Sweetbyte Partnership</p>
              <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">
                Get 30+ qualified leads, save 40% on admin time, and achieve 8-11:1 ROI in 6 months
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-[#00A9CE] hover:bg-[#0088a8] text-white px-8 py-4 text-lg font-bold rounded-lg transition-colors">
                  Book Your Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1F3A5C] px-8 py-4 text-lg font-bold rounded-lg transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* PROBLEM SECTION */}
        <section className="bg-[#F8F9FA] py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-16 text-center">
              The SME Growth Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Lead Generation Bottleneck", desc: "Most SMEs struggle to generate consistent, qualified leads. Without a systematic approach, growth stalls." },
                { title: "Time-Consuming Admin", desc: "Founders spend 15-20 hours per week on repetitive tasks: email, data entry, scheduling, manual processes." },
                { title: "Expensive Agencies", desc: "Traditional agencies charge £4,000-£6,000/month with bloated teams. SMEs can't afford enterprise pricing." },
                { title: "No Integrated Systems", desc: "Services are fragmented: separate email, CRM, website, social. Nothing talks to each other." },
                { title: "Lack of Accountability", desc: "Most agencies don't guarantee results. You pay monthly with no clear ROI or measurable outcomes." },
                { title: "Founder Burnout", desc: "Juggling growth, operations, and delivery leaves no time for strategy. Stuck in the business, not building it." },
              ].map((problem, idx) => (
                <div key={idx} className="bg-white border-l-4 border-[#00A9CE] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-black text-[#1F3A5C] mb-3">{problem.title}</h3>
                  <p className="text-gray-700 font-light leading-relaxed">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* PARTNERSHIP SECTION */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-4 text-center">
              The Partnership That Changes Everything
            </h2>
            <p className="text-center text-xl text-gray-600 mb-16 font-light">
              Two companies, one mission: deliver enterprise-quality growth services at SME-friendly prices.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              {/* GREEN AGENTS */}
              <div className="bg-[#1F3A5C] text-white p-12 rounded-lg">
                <h3 className="text-4xl font-black mb-2">Green Agents</h3>
                <p className="text-[#00A9CE] text-xl font-bold mb-8">Growth Strategy & Sales</p>
                <ul className="space-y-4">
                  {[
                    "Growth Strategy – Founder-focused approach to scaling",
                    "Client Relationships – Direct accountability and results focus",
                    "Industry Expertise – Deep knowledge of UK SME markets",
                    "Results Accountability – Guaranteed outcomes, no fluff",
                    "Founder Positioning – Everything designed for busy owners",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00A9CE] flex-shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SWEETBYTE */}
              <div className="bg-[#F8F9FA] text-[#1F3A5C] p-12 rounded-lg">
                <h3 className="text-4xl font-black mb-2">Sweetbyte</h3>
                <p className="text-[#00A9CE] text-xl font-bold mb-8">Technical Delivery & Tools</p>
                <ul className="space-y-4">
                  {[
                    "Proprietary Platform – In-house automation tools (50% cost advantage)",
                    "In-House Team – No outsourcing, no delays, quality control",
                    "Fast Delivery – Weeks, not months. Ready to launch immediately",
                    "CRM Integration – Everything connected, data flows automatically",
                    "Continuous Optimization – Monthly improvements based on real data",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00A9CE] flex-shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* SERVICES SECTION */}
        <section className="bg-[#F8F9FA] py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-16 text-center">
              Six Integrated Growth Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Email Outreach & Automation", desc: "Personalized campaigns to 100+ prospects. 30+ qualified leads per month. Fully automated." },
                { icon: TrendingUp, title: "Social Media Management", desc: "LinkedIn, Instagram, Twitter strategy. 3-4 posts per week. Lead generation from social." },
                { icon: Rocket, title: "Conversion-Focused Websites", desc: "Professional builds optimized for conversions. Mobile-responsive. SEO-ready. Fast turnaround." },
                { icon: Zap, title: "AI Sales Agents & Automation", desc: "Automated lead qualification. 24/7 engagement. Appointment scheduling. 40% time saved." },
                { icon: BarChart3, title: "CRM Integration & Setup", desc: "Complete CRM configuration. Email-to-CRM automation. Lead scoring. Team training." },
                { icon: CheckCircle, title: "Analytics & Optimization", desc: "Monthly performance reports. ROI tracking. A/B testing. Continuous improvement." },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="bg-white border-l-4 border-[#00A9CE] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="w-10 h-10 text-[#00A9CE] mb-4" />
                    <h3 className="text-xl font-black text-[#1F3A5C] mb-3">{service.title}</h3>
                    <p className="text-gray-700 font-light leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* PRICING SECTION */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-4 text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="text-center text-xl text-[#00A9CE] font-bold mb-16">
              No lock-in. Month-to-month. Cancel anytime.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "£400", setup: "£1,500", features: ["One email outreach per month", "One social post per week", "Platform of choice", "Email support", "Monthly reporting"], highlight: false },
                { name: "Growth", price: "£650", setup: "£1,500", features: ["One email every two weeks", "Landing page build", "Two social posts per week", "Priority support", "Monthly reporting"], highlight: true },
                { name: "Scale", price: "Custom", setup: "£1,500", features: ["Everything in Growth", "Advanced analytics", "Personal account manager", "Monthly strategy reviews", "One-on-one strategy calls"], highlight: false },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-lg transition-all ${
                    tier.highlight
                      ? "bg-[#00A9CE] text-white shadow-xl scale-105"
                      : "bg-white border-2 border-gray-200 text-[#1F3A5C]"
                  }`}
                >
                  <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                  {tier.highlight && <p className="text-sm font-bold mb-4 opacity-90">Most Popular</p>}
                  <div className="mb-6">
                    <div className="text-5xl font-black mb-2">{tier.price}</div>
                    <p className={`text-sm ${tier.highlight ? "opacity-90" : "text-gray-600"}`}>per month</p>
                    <p className={`text-xs ${tier.highlight ? "opacity-75" : "text-gray-500"}`}>Setup: {tier.setup}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 font-light">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? "text-white" : "text-[#00A9CE]"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full font-bold py-3 rounded-lg transition-colors ${
                      tier.highlight
                        ? "bg-white text-[#00A9CE] hover:bg-gray-100"
                        : "bg-[#00A9CE] text-white hover:bg-[#0088a8]"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* CASE STUDIES SECTION */}
        <section className="bg-[#F8F9FA] py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-16 text-center">
              Proven Results Across Industries
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Real Estate Firm (London)", leads: "6x", revenue: "£200k", roi: "8:1", extra: "30+ qualified leads/month" },
                { title: "UK Law Firm (8 staff)", leads: "5x", revenue: "£200k", roi: "11:1", extra: "18 hours/week founder time saved" },
                { title: "Construction Firm (12 staff)", leads: "4x", revenue: "£150k", roi: "9:1", extra: "Admin time cut by 40%" },
              ].map((study, idx) => (
                <div key={idx} className="bg-[#1F3A5C] text-white p-8 rounded-lg border-l-4 border-[#00A9CE]">
                  <h3 className="text-xl font-black mb-6">{study.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[#00A9CE] text-4xl font-black">{study.leads}</p>
                      <p className="text-sm opacity-75">Lead increase</p>
                    </div>
                    <div>
                      <p className="text-[#00A9CE] text-4xl font-black">{study.revenue}</p>
                      <p className="text-sm opacity-75">New revenue</p>
                    </div>
                    <div>
                      <p className="text-[#00A9CE] text-4xl font-black">{study.roi}</p>
                      <p className="text-sm opacity-75">ROI</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 border-t border-[#00A9CE] pt-4">{study.extra}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <section className="bg-[#1F3A5C] text-white py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
              Why Choose Green Agents + Sweetbyte?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "50% Lower Cost", desc: "Proprietary tools + in-house team = no bloated overhead. Same quality as agencies charging £4,000-£6,000/month." },
                { title: "Founder-Focused", desc: "Everything designed for busy SME owners. We recover 15+ hours/week of your time. You get your life back." },
                { title: "Measurable Results", desc: "Real metrics. Real ROI. 8-11:1 return in 6 months. Everything is tracked and optimized." },
                { title: "No Lock-In", desc: "Month-to-month contracts. Cancel anytime. No penalties. We earn your business by delivering results." },
                { title: "Integrated Systems", desc: "Everything works together. Email → CRM → Website → Social → AI Agents. One platform. Clear data flow." },
                { title: "Fast Delivery", desc: "Weeks, not months. We launch campaigns immediately. You see results in 30 days." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white bg-opacity-10 border-l-4 border-[#00A9CE] p-8 rounded-lg">
                  <h3 className="text-xl font-black mb-3">{item.title}</h3>
                  <p className="font-light opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* HOW IT WORKS SECTION */}
        <section className="bg-[#F8F9FA] py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-16 text-center">
              How It Works: Four Simple Steps
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "1", title: "Discovery Call", desc: "30-minute consultation. We understand your business, goals, and challenges." },
                { num: "2", title: "Strategy & Setup", desc: "We build your growth plan. CRM setup. Email templates. Everything configured." },
                { num: "3", title: "Launch & Optimize", desc: "Campaigns go live. AI agents start working. Results in 30 days." },
                { num: "4", title: "Scale & Grow", desc: "Monthly reporting. Continuous improvement. Predictable, scalable growth." },
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-[#00A9CE] text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-black text-[#1F3A5C] mb-2">{step.title}</h3>
                  <p className="text-gray-700 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* RESULTS METRICS SECTION */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-16 text-center">
              What Typical SMEs Achieve in 6 Months
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { metric: "30+", label: "Qualified Leads", sub: "Per month, consistently" },
                { metric: "40%", label: "Time Saved", sub: "Admin hours recovered" },
                { metric: "8-11:1", label: "ROI", sub: "Return on investment" },
                { metric: "£150k+", label: "New Revenue", sub: "Average 6-month result" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="text-6xl font-black text-[#00A9CE] mb-2">{item.metric}</div>
                  <p className="text-xl font-black text-[#1F3A5C] mb-1">{item.label}</p>
                  <p className="text-gray-600 font-light">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* FAQ SECTION */}
        <section className="bg-[#F8F9FA] py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-[#1F3A5C] mb-16 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "How long until I see results?", a: "You'll see initial leads within 30 days. Meaningful results (5-10 leads/week) within 60-90 days. Full optimization by 6 months." },
                { q: "What if I'm not happy?", a: "Month-to-month contracts. No lock-in. Cancel anytime. We earn your business by delivering results, not by trapping you." },
                { q: "Do you work with my industry?", a: "Yes. We work with real estate, legal, construction, trades, professional services, B2B SaaS, and more. Every industry has different needs. We customize everything." },
                { q: "What's the setup fee for?", a: "CRM configuration, email template design, website optimization, social media calendar setup, AI agent training, team onboarding, and strategy development." },
                { q: "Can I add services later?", a: "Absolutely. Start with Starter, upgrade to Growth or Scale whenever you're ready. Add specific services as your business grows." },
                { q: "How do you measure success?", a: "Clear KPIs: leads generated, conversion rates, revenue impact, time saved, ROI. Monthly reporting. Transparent metrics. Everything is tracked." },
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-black text-[#1F3A5C] mb-3">{item.q}</h4>
                  <p className="text-gray-700 font-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE-STRIPE DIVIDER */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#4A4A4A]"></div>
          <div className="flex-1 bg-[#00A9CE]"></div>
          <div className="flex-1 bg-[#F8F9FA]"></div>
        </div>

        {/* FINAL CTA SECTION */}
        <section className="bg-gradient-to-br from-[#1F3A5C] to-[#2D5A8C] text-white py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Grow Your Business?</h2>
            <p className="text-2xl mb-12 font-light">
              Book a free 30-minute consultation. No pressure. No sales pitch. Just honest advice on how to grow.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <a href="tel:01702540776" className="inline-flex items-center justify-center bg-[#00A9CE] hover:bg-[#0088a8] text-white px-8 py-4 text-lg font-bold rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 mr-2" />
                Call: 01702 540776
              </a>
              <a href="mailto:support@sweetbyte.co.uk" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1F3A5C] px-8 py-4 text-lg font-bold rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 mr-2" />
                Email: support@sweetbyte.co.uk
              </a>
            </div>
            <p className="text-lg opacity-90 font-light">Or fill out the form below and we'll contact you within 24 hours.</p>
          </div>
        </section>
      </div>
    </>
  );
}
