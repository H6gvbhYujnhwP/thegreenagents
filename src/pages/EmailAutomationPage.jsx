import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import { Mail, Clock, Target, TrendingUp, CheckCircle, Zap } from 'lucide-react'
import SEO from '../components/SEO'

function EmailAutomationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Email Automation Agent",
    "description": "Intelligent email campaigns that write, send, and optimize themselves. AI-powered email marketing automation for UK SMEs. Never miss a follow-up, never lose a lead.",
    "provider": {
      "@type": "Organization",
      "name": "The Green Agents",
      "url": "https://thegreenagents.com"
    },
    "areaServed": "GB",
    "serviceType": "Email Marketing Automation",
    "offers": {
      "@type": "Offer",
      "description": "£30-£40 return for every £1 spent on email automation"
    }
  }

  return (
    <div className="bg-white">
      <SEO 
        title="Email Automation Agent - AI Email Marketing"
        description="Intelligent email campaigns that write, send, and optimize themselves. AI-powered email marketing automation for UK SMEs. Get £30-£40 return for every £1 spent. Never miss a follow-up."
        keywords="email automation UK, AI email marketing, automated email campaigns, email marketing automation, lead nurturing automation, email follow-up automation, personalized email automation"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
                Email Automation Agent
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8">
                Intelligent email campaigns that write, send, and optimize themselves. Never miss a follow-up, never lose a lead.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-teal-600 text-teal-600 hover:bg-teal-50 w-full sm:w-auto touch-manipulation">
                  <Link to="/assessment">Free Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/service-images/email-workflow.webp" 
                alt="Email Automation Workflow" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-5xl font-bold mb-2">£30-£40</p>
              <p className="text-teal-100">ROI for every £1 spent</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">10+</p>
              <p className="text-teal-100">Hours saved per week</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">80%</p>
              <p className="text-teal-100">Increase in lead engagement</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-teal-100">Automated follow-ups</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Email Automation Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our AI-powered system handles your entire email marketing pipeline from lead capture to conversion. In a world dominated by social media, email remains the highest-ROI marketing channel. Social media is great for reaching new audiences, but it's a crowded and distracting environment. Email, on the other hand, is a direct, personal, and permission-based conversation where you build the trust that turns prospects into paying clients.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg">
            <img 
              src="/service-images/email-automation-flow.png" 
              alt="Email Automation Flow Diagram" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600">Everything you need to run successful email campaigns on autopilot</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Email Writing</h3>
              <p className="text-slate-600">Our AI crafts compelling, on-brand emails that resonate with your audience and drive action.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Follow-ups</h3>
              <p className="text-slate-600">Never miss a follow-up again. Our system automatically sends timely, personalized messages.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Segmentation</h3>
              <p className="text-slate-600">AI analyzes your contacts and automatically segments them for targeted campaigns.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Optimization</h3>
              <p className="text-slate-600">Continuous A/B testing and optimization to maximize your open rates and conversions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lead Nurturing</h3>
              <p className="text-slate-600">Automated drip campaigns that guide leads through your sales funnel.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Notifications</h3>
              <p className="text-slate-600">Get alerted when hot leads engage, so your team can follow up at the perfect moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">You Own Your Email List. You Don't Own Your Social Following.</h2>
              <p className="text-slate-600 mb-6">Your email list is a valuable business asset that you control. You can back it up, move it to another provider, and contact your subscribers whenever you want. No algorithm can limit your reach, and no platform can suspend your account and wipe out your audience overnight. Building your business on social media is like building on rented land; your email list is property you own.</p>
              <div className="bg-teal-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Key Differences</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">Ownership</h4>
                    <p className="text-slate-700">You own your email list; the platform owns your social following.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">Reach</h4>
                    <p className="text-slate-700">Direct access to 100% of your email subscribers vs. a small fraction of your social followers.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">Control</h4>
                    <p className="text-slate-700">You control the message, timing, and format of your emails.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">ROI</h4>
                    <p className="text-slate-700">Email marketing generates an average return of £30-£40 for every £1 spent.</p>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Email Automation Matters for SMEs</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Consistent Communication</h3>
                    <p className="text-slate-600">Stay top-of-mind with your prospects and customers without lifting a finger.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable Growth</h3>
                    <p className="text-slate-600">Handle 10 leads or 10,000 leads with the same level of personalization.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Higher Conversion Rates</h3>
                    <p className="text-slate-600">Timely, relevant emails convert up to 5x better than generic broadcasts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Time Freedom</h3>
                    <p className="text-slate-600">Get 10+ hours back every week to focus on strategy and growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/service-images/team-collaboration.jpeg" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Automate Your Email Marketing?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8 lg:mb-10">Join hundreds of UK SMEs who have transformed their email marketing with AI automation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-teal-500 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
              <Link to="/assessment">Free AI Readiness Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmailAutomationPage
