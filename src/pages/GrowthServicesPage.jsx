import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Target, BarChart3, Lock } from 'lucide-react'
import '../styles/GrowthServices.css'

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

      <div className="growth-services-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Professional Growth Services for UK SMEs</h1>
              <p className="hero-subtitle">50% Lower Cost Than Traditional Agencies</p>
              <p className="hero-description">
                Green Agents + Sweetbyte partnership delivers enterprise-quality growth services at SME-friendly pricing. 
                Get 30+ qualified leads per month, recover 40% of your time, and achieve 8-11:1 ROI in just 6 months.
              </p>
              <div className="hero-ctas">
                <button className="btn-primary">
                  Book Free Consultation <ArrowRight size={20} />
                </button>
                <button className="btn-secondary">View Pricing</button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <strong>30+</strong>
                  <span>Leads/Month</span>
                </div>
                <div className="stat">
                  <strong>40%</strong>
                  <span>Time Saved</span>
                </div>
                <div className="stat">
                  <strong>8-11:1</strong>
                  <span>ROI</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-graphic">
                <div className="graphic-element graphic-1"></div>
                <div className="graphic-element graphic-2"></div>
                <div className="graphic-element graphic-3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="problem-section">
          <div className="container">
            <h2>The SME Growth Challenge</h2>
            <p className="section-subtitle">You're caught between two impossible choices</p>
            
            <div className="problem-grid">
              <div className="problem-card">
                <h3>Option 1: Expensive Agencies</h3>
                <p>£4,000-£6,000 per month for bloated teams, expensive offices, and middleman markup</p>
                <span className="problem-icon">💰</span>
              </div>
              <div className="problem-card">
                <h3>Option 2: Do It Yourself</h3>
                <p>Lack the expertise, time, and resources to build a professional growth system</p>
                <span className="problem-icon">⚠️</span>
              </div>
            </div>

            <div className="pain-points">
              <h3>Four Key Pain Points</h3>
              <div className="pain-grid">
                <div className="pain-item">
                  <CheckCircle size={24} className="pain-icon" />
                  <h4>Inconsistent Leads</h4>
                  <p>No predictable pipeline</p>
                </div>
                <div className="pain-item">
                  <CheckCircle size={24} className="pain-icon" />
                  <h4>Admin Overload</h4>
                  <p>Sales team drowning in manual work</p>
                </div>
                <div className="pain-item">
                  <CheckCircle size={24} className="pain-icon" />
                  <h4>Founder Stretched Thin</h4>
                  <p>60% of time on admin, not strategy</p>
                </div>
                <div className="pain-item">
                  <CheckCircle size={24} className="pain-icon" />
                  <h4>Can't Scale</h4>
                  <p>Growth feels impossible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Partnership Section */}
        <section className="partnership-section">
          <div className="container">
            <h2>The Partnership That Changes Everything</h2>
            <p className="section-subtitle">Two companies. One mission. 50% lower cost.</p>

            <div className="partnership-grid">
              <div className="partner-card">
                <div className="partner-header green-agents">
                  <h3>Green Agents</h3>
                  <p>Growth Strategy & Sales</p>
                </div>
                <ul className="partner-features">
                  <li>✓ Growth strategy and planning</li>
                  <li>✓ Client relationships</li>
                  <li>✓ Industry expertise</li>
                  <li>✓ Results accountability</li>
                  <li>✓ Founder-focused positioning</li>
                </ul>
              </div>

              <div className="partnership-connector">
                <div className="connector-plus">+</div>
                <p>Together = 50% Lower Cost</p>
              </div>

              <div className="partner-card">
                <div className="partner-header sweetbyte">
                  <h3>Sweetbyte</h3>
                  <p>Technical Delivery & Tools</p>
                </div>
                <ul className="partner-features">
                  <li>✓ Proprietary automation platform</li>
                  <li>✓ In-house development team</li>
                  <li>✓ CRM & email integration</li>
                  <li>✓ Website & AI agent delivery</li>
                  <li>✓ 50% lower cost structure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>Six Integrated Growth Services</h2>
            <p className="section-subtitle">Complete systems that work together</p>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📧</div>
                <h3>Email Outreach & Automation</h3>
                <ul>
                  <li>Targeted email campaigns</li>
                  <li>Automated follow-ups</li>
                  <li>30+ qualified leads/month</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Social Media Management</h3>
                <ul>
                  <li>Consistent professional presence</li>
                  <li>Content creation & scheduling</li>
                  <li>Community engagement</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🌐</div>
                <h3>Conversion-Focused Websites</h3>
                <ul>
                  <li>Professional custom design</li>
                  <li>Mobile-responsive & fast</li>
                  <li>CRM integration built-in</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🤖</div>
                <h3>AI Sales Agents & Automation</h3>
                <ul>
                  <li>Email triage & prioritization</li>
                  <li>Automated booking management</li>
                  <li>40% admin time saved</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>CRM Integration & Setup</h3>
                <ul>
                  <li>Seamless system integration</li>
                  <li>Automated data capture</li>
                  <li>Workflow automation</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Analytics & Optimization</h3>
                <ul>
                  <li>Comprehensive tracking</li>
                  <li>Monthly optimization</li>
                  <li>ROI reporting & analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <div className="container">
            <h2>Simple, Transparent Pricing</h2>
            <p className="section-subtitle">No hidden costs. Month-to-month. Cancel anytime.</p>

            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Starter</h3>
                <div className="price">£400<span>/month</span></div>
                <ul className="features-list">
                  <li>✓ Email outreach campaigns</li>
                  <li>✓ Basic social media</li>
                  <li>✓ Prospect targeting</li>
                  <li>✓ Monthly reporting</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="btn-secondary">Get Started</button>
              </div>

              <div className="pricing-card featured">
                <div className="badge">Most Popular</div>
                <h3>Growth</h3>
                <div className="price">£650<span>/month</span></div>
                <ul className="features-list">
                  <li>✓ Everything in Starter, plus:</li>
                  <li>✓ AI sales acceleration agents</li>
                  <li>✓ Conversion-focused website</li>
                  <li>✓ CRM integration & automation</li>
                  <li>✓ Priority support</li>
                </ul>
                <button className="btn-primary">Get Started</button>
              </div>

              <div className="pricing-card">
                <h3>Scale</h3>
                <div className="price">£800<span>/month</span></div>
                <ul className="features-list">
                  <li>✓ Everything in Growth, plus:</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ Quarterly strategy reviews</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <button className="btn-secondary">Get Started</button>
              </div>
            </div>

            <p className="pricing-note">Setup Fee: £1,500 (one-time, includes CRM setup, integration, training, strategy session)</p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="case-studies-section">
          <div className="container">
            <h2>Proven Success Stories</h2>
            <p className="section-subtitle">Real results across multiple industries</p>

            <div className="case-studies-grid">
              <div className="case-study">
                <h3>Real Estate Firm - London</h3>
                <div className="metrics">
                  <div className="metric">
                    <strong>6x</strong>
                    <span>Lead Growth</span>
                  </div>
                  <div className="metric">
                    <strong>£200k</strong>
                    <span>New Revenue</span>
                  </div>
                  <div className="metric">
                    <strong>8:1</strong>
                    <span>ROI</span>
                  </div>
                </div>
                <p className="quote">"Sales team can focus on closing deals instead of admin. Within 6 months, we went from 5 leads per month to 30+."</p>
              </div>

              <div className="case-study">
                <h3>UK Law Firm - 8 Staff</h3>
                <div className="metrics">
                  <div className="metric">
                    <strong>5x</strong>
                    <span>Lead Growth</span>
                  </div>
                  <div className="metric">
                    <strong>£200k</strong>
                    <span>New Revenue</span>
                  </div>
                  <div className="metric">
                    <strong>11:1</strong>
                    <span>ROI</span>
                  </div>
                </div>
                <p className="quote">"18 hours per week founder time recovered. Finally able to think about scaling instead of surviving."</p>
              </div>

              <div className="case-study">
                <h3>Construction Firm - 12 Staff</h3>
                <div className="metrics">
                  <div className="metric">
                    <strong>4x</strong>
                    <span>Lead Growth</span>
                  </div>
                  <div className="metric">
                    <strong>£150k</strong>
                    <span>New Revenue</span>
                  </div>
                  <div className="metric">
                    <strong>9:1</strong>
                    <span>ROI</span>
                  </div>
                </div>
                <p className="quote">"Predictable pipeline established. Now bidding on projects we would have missed before."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Green Agents + Sweetbyte</h2>
            <p className="section-subtitle">Six key differentiators</p>

            <div className="differentiators-grid">
              <div className="differentiator">
                <Zap size={32} className="diff-icon" />
                <h3>50% Lower Cost</h3>
                <p>Enterprise-quality services at SME-friendly pricing. No bloated overheads or unnecessary markup.</p>
              </div>

              <div className="differentiator">
                <Target size={32} className="diff-icon" />
                <h3>Proprietary Tools</h3>
                <p>We own our automation platform. No expensive SaaS licensing. This is how we deliver affordability.</p>
              </div>

              <div className="differentiator">
                <Users size={32} className="diff-icon" />
                <h3>In-House Experts</h3>
                <p>Experienced developers and strategists on our team. No outsourcing. No quality compromise.</p>
              </div>

              <div className="differentiator">
                <BarChart3 size={32} className="diff-icon" />
                <h3>Measurable Results</h3>
                <p>Real leads, real revenue growth, real ROI. We track everything and optimize continuously.</p>
              </div>

              <div className="differentiator">
                <TrendingUp size={32} className="diff-icon" />
                <h3>Proven Playbooks</h3>
                <p>Hundreds of projects delivered. We know what works for your industry. Faster delivery. Better results.</p>
              </div>

              <div className="differentiator">
                <Lock size={32} className="diff-icon" />
                <h3>No Lock-In</h3>
                <p>Month-to-month contracts. Cancel anytime. We earn your business every month.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <div className="container">
            <h2>Four-Step Implementation Process</h2>
            <p className="section-subtitle">From discovery to growth in just 4 weeks</p>

            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Discovery Call</h3>
                <p>We understand your business, challenges, and goals. No pressure, just a conversation about what's possible.</p>
                <span className="step-timeline">Week 1</span>
              </div>

              <div className="step-arrow">→</div>

              <div className="step">
                <div className="step-number">2</div>
                <h3>Strategy & Setup</h3>
                <p>We create a custom growth plan, set up your systems, integrate your tools, and train your team.</p>
                <span className="step-timeline">Week 1-2</span>
              </div>

              <div className="step-arrow">→</div>

              <div className="step">
                <div className="step-number">3</div>
                <h3>Campaign Launch</h3>
                <p>We launch your campaigns, activate your automation, and start generating leads immediately.</p>
                <span className="step-timeline">Week 2-3</span>
              </div>

              <div className="step-arrow">→</div>

              <div className="step">
                <div className="step-number">4</div>
                <h3>Optimization & Growth</h3>
                <p>We monitor results, optimize continuously, and help you scale. Your success is our success.</p>
                <span className="step-timeline">Week 4+</span>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Results Section */}
        <section className="results-section">
          <div className="container">
            <h2>What SMEs Typically Achieve</h2>
            <p className="section-subtitle">In just 6 months</p>

            <div className="results-grid">
              <div className="result-card">
                <div className="result-number">30+</div>
                <h3>Qualified Leads Per Month</h3>
                <p>Consistent, predictable pipeline from email and social campaigns</p>
              </div>

              <div className="result-card">
                <div className="result-number">40%</div>
                <h3>Admin Time Recovered</h3>
                <p>15+ hours per week freed up for strategic work</p>
              </div>

              <div className="result-card">
                <div className="result-number">8-11:1</div>
                <h3>ROI</h3>
                <p>Return on investment, proven across multiple industries</p>
              </div>

              <div className="result-card">
                <div className="result-number">£150k-£200k</div>
                <h3>New Revenue</h3>
                <p>Typical additional revenue generated in first 6 months</p>
              </div>
            </div>

            <div className="results-note">
              <p>These results compound over time. As you scale, your unit economics improve. Growth becomes sustainable and predictable.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section">
          <div className="container">
            <h2>Ready to Grow Your Business?</h2>
            <p>Book a free 30-minute consultation. No pressure. Just a conversation about what's possible.</p>
            
            <button className="btn-primary btn-large">
              Book Your Free Consultation <ArrowRight size={24} />
            </button>

            <p className="cta-note">No pressure. Just a conversation about what's possible.</p>

            <div className="contact-info">
              <p>📞 +44 (0) 123 456 7890 | 📧 hello@greenagents.co.uk</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
