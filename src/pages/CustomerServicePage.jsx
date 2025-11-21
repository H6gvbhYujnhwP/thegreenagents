import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Headphones, MessageSquare, Clock, Users, Zap, CheckCircle } from 'lucide-react'

function CustomerServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Customer Service Agent
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                24/7 customer support that never sleeps. Handle inquiries instantly, resolve issues efficiently, and delight your customers—all on autopilot.
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
                src="/service-images/customer-service-chat.png" 
                alt="Customer Service Chat Interface" 
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
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-teal-100">Always available</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">&lt;30s</p>
              <p className="text-teal-100">Average response time</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">85%</p>
              <p className="text-teal-100">Issues resolved instantly</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-teal-100">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Customer Service Automation Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our AI handles customer inquiries across all channels, escalating only when human expertise is truly needed.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg">
            <img 
              src="/service-images/customer-service-flow.png" 
              alt="Customer Service Flow Diagram" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Support Solution</h2>
            <p className="text-xl text-slate-600">Everything you need to deliver exceptional customer service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Availability</h3>
              <p className="text-slate-600">Your customers get instant help anytime, day or night—no waiting, no delays.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Channel Support</h3>
              <p className="text-slate-600">Email, chat, social media—our AI handles inquiries across all your channels.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Resolution</h3>
              <p className="text-slate-600">85% of common questions answered instantly without human intervention.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Escalation</h3>
              <p className="text-slate-600">Complex issues automatically routed to your team with full context.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Knowledge Base Integration</h3>
              <p className="text-slate-600">AI pulls answers from your documentation, FAQs, and past conversations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sentiment Analysis</h3>
              <p className="text-slate-600">Detects frustrated customers and prioritizes them for immediate attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Customer Service?</h2>
          <p className="text-xl text-teal-100 mb-10">Join hundreds of UK SMEs delivering exceptional support with AI automation.</p>
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

export default CustomerServicePage
