import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Megaphone, Share2, BarChart3, Calendar, Sparkles, Target } from 'lucide-react'

function MarketingAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Marketing Automation Agent
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                For UK SMEs, consistent marketing is a constant battle. Our AI Marketing Automation Agent takes the entire workload off your plate, running campaigns that save you time, cut costs, and drive real growth. From social media to ad optimization, your entire marketing pipeline is on autopilot.
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
                src="/service-images/marketing-dashboard.png" 
                alt="Marketing Automation Dashboard" 
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
              <p className="text-5xl font-bold mb-2">3x</p>
              <p className="text-teal-100">More content published</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-teal-100">Hours saved per week</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">200%</p>
              <p className="text-teal-100">Increase in reach</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-teal-100">Campaign optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Marketing Automation Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our AI agent acts as your dedicated marketing manager, handling the entire workflow from strategy and content creation to multi-channel distribution and performance optimization. It’s a closed-loop system designed for one thing: results.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg">
            <img 
              src="/service-images/marketing-automation-flow.png" 
              alt="Marketing Automation Flow Diagram" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Marketing Suite</h2>
            <p className="text-xl text-slate-600">Everything you need to dominate your market</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Social Media Management</h3>
              <p className="text-slate-600">AI creates, schedules, and posts engaging content across all your social channels.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Content Creation</h3>
              <p className="text-slate-600">Generate blog posts, social media content, and ad copy that converts.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ad Campaign Optimization</h3>
              <p className="text-slate-600">Automatically adjust bids, targeting, and creative for maximum ROI.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Content Calendar</h3>
              <p className="text-slate-600">AI plans and schedules your content strategy weeks in advance.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics & Reporting</h3>
              <p className="text-slate-600">Comprehensive dashboards showing what's working and what's not.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Channel Campaigns</h3>
              <p className="text-slate-600">Coordinate campaigns across email, social, ads, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Marketing Automation?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Built on Real Experience</h3>
              <p className="text-slate-700">Designed with 40 years of real-world sales and marketing expertise from our director, John Wicks. This isn't just tech; it's proven strategy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Managed Service</h3>
              <p className="text-slate-700">We don't just hand you software. Our team provides a fully managed service, ensuring your AI agent is always optimized for performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Reporting</h3>
              <p className="text-slate-700">You get clear, jargon-free reports that show exactly what's working, what's not, and the tangible ROI your business is getting.</p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg mb-16">
            <p className="text-xl text-slate-800 italic mb-4">"Since using The Green Agents, our online presence has exploded. We're saving 15+ hours a week and our lead quality has never been better. It feels like we have a full marketing team working for us around the clock."</p>
            <p className="text-right font-semibold text-teal-700">- David Chen, Director at a UK-based manufacturing SME</p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Can Marketing Automation Do For You?</h2>
            <p className="text-xl text-slate-600">Real solutions for real SME challenges</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Media Presence</h3>
              <p className="text-slate-600 mb-4">Struggling to post consistently? Our AI creates and schedules engaging content for LinkedIn, Facebook, Twitter, and Instagram—keeping your brand visible 24/7.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Daily posts across all platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Optimal posting times for maximum engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Brand-consistent messaging</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Paid Advertising</h3>
              <p className="text-slate-600 mb-4">Wasting money on underperforming ads? Our AI continuously tests and optimizes your campaigns to maximize every pound spent.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Automatic A/B testing of ad creative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Smart budget allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Real-time performance optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Content Marketing</h3>
              <p className="text-slate-600 mb-4">No time to write blog posts? Our AI creates SEO-optimized content that drives traffic and establishes your authority.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Weekly blog posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">SEO keyword optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Industry-specific insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lead Generation</h3>
              <p className="text-slate-600 mb-4">Need more qualified leads? Our AI creates and manages campaigns specifically designed to attract your ideal customers.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Targeted lead magnets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Landing page optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Automated lead scoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop Juggling, Start Growing</h2>
          <p className="text-xl text-teal-100 mb-10">Ready to get your marketing off your to-do list for good? Let our AI Marketing Automation Agent handle the heavy lifting so you can focus on what you do best: running your business. Book your free, no-obligation discovery session today and see how much time and money you could save.</p>
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

export default MarketingAutomationPage
