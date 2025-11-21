import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Mail, Clock, Target, TrendingUp, CheckCircle, Zap } from 'lucide-react'

function EmailAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Email Automation Agent
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Intelligent email campaigns that write, send, and optimize themselves. Never miss a follow-up, never lose a lead.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="px-8 py-6 text-lg border-teal-600 text-teal-600 hover:bg-teal-50">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our AI-powered system handles your entire email marketing pipeline from lead capture to conversion.</p>
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
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Email Marketing?</h2>
          <p className="text-xl text-teal-100 mb-10">Join hundreds of UK SMEs who have transformed their email marketing with AI automation.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-6 text-lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-teal-500 px-8 py-6 text-lg">
              <Link to="/assessment">Free AI Readiness Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmailAutomationPage
