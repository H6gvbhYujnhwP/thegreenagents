import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import { Mail, Megaphone, Headphones, BarChart3 } from 'lucide-react'
import SEO from '../components/SEO'

function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Green Agents",
    "description": "AI-powered marketing automation and business process automation for UK SMEs. Email automation, social media management, customer service, and data analysis agents.",
    "url": "https://thegreenagents.com",
    "telephone": "+44-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "areaServed": "GB",
    "serviceType": ["AI Marketing Automation", "Email Automation", "Social Media Automation", "Customer Service Automation", "Data Analysis"],
    "priceRange": "££"
  }

  return (
    <div className="bg-white">
      <SEO 
        title="AI Marketing Automation for UK SMEs"
        description="Deploy AI-powered marketing agents for email automation, social media management, and customer service. Get 10+ hours back every week. Free consultation for UK SMEs."
        keywords="AI marketing automation, email automation UK, LinkedIn automation, marketing automation for SMEs, AI business automation, automated email campaigns, social media automation, customer service automation, data analysis automation, AI agents for business"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Deploy Your AI-Powered Workforce
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
            AI agents that automate your business operations, from marketing and customer service to app development and data analysis—so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
              <Link to="/assessment">Take the 60-Second AI Readiness Scorecard</Link>
            </Button>
            <Button asChild variant="outline" className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-teal-600 text-teal-600 hover:bg-teal-50 w-full sm:w-auto touch-manipulation">
              <Link to="/services">Explore Our AI Agents</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-teal-600 mb-3 sm:mb-4">Trusted by UK SMEs</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 px-2">Join hundreds of UK SME owners who have automated their business operations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-lg">
                <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">£30-£40</p>
                <p className="text-base sm:text-lg text-slate-600">Return for every £1 spent on email automation</p>
              </div>
              <div className="bg-slate-50 p-6 sm:p-8 rounded-lg">
                <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">10+</p>
                <p className="text-base sm:text-lg text-slate-600">Hours back in your week, every week</p>
              </div>
              <div className="bg-slate-50 p-6 sm:p-8 rounded-lg">
                <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">80%</p>
                <p className="text-base sm:text-lg text-slate-600">Increase in lead consistency within 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Are You Wearing Too Many Hats in Your Business?</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-4">You know you need to be doing more—marketing, operations, customer service, data analysis—but there are never enough hours in the day. While you're stretched thin managing every aspect of your business, your competitors are working smarter, not just harder.</p>
            <p className="text-base sm:text-lg text-slate-600">The reality for most UK SME owners is brutal: you're wearing multiple hats, fighting fires, and critical tasks get pushed to tomorrow. Again. Meanwhile, opportunities slip through your fingers because you can't scale yourself.</p>
          </div>
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-teal-600 mb-3 sm:mb-4">It's Not a Lack of Effort. It's a Lack of Leverage.</h3>
              <p className="text-base sm:text-lg text-slate-600">AI-powered automation handles the repetitive tasks across your entire business while you focus on strategy, sales, and growth. It's the leverage you need to scale your operations, improve efficiency, and get hours back in your week—without hiring a full team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Meet Your New AI-Powered Team</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-2">Our AI agents are designed to handle the most time-consuming business tasks across marketing, operations, customer service, and more—so you can focus on what matters most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Email Automation Agent */}
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <Mail className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email Automation Agent</h3>
              <p className="text-slate-600 mb-6">Intelligent email campaigns that write, send, and optimize themselves. Handles customer follow-ups, lead nurturing, and personalized outreach automatically.</p>
              <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link to="/services/email-automation">Learn More</Link>
              </Button>
            </div>

            {/* Marketing Automation Agent */}
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <Megaphone className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketing Automation Agent</h3>
              <p className="text-slate-600 mb-6">Complete marketing campaigns that run themselves. From social media posts to ad optimization, this agent handles your entire marketing pipeline.</p>
              <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link to="/services/marketing-automation">Learn More</Link>
              </Button>
            </div>

            {/* Customer Service Agent */}
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <Headphones className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Service Agent</h3>
              <p className="text-slate-600 mb-6">24/7 customer support that never sleeps. Handles inquiries, resolves issues, and escalates complex cases to your team when needed.</p>
              <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link to="/services/customer-service">Learn More</Link>
              </Button>
            </div>

            {/* Data Analysis Agent */}
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Analysis Agent</h3>
              <p className="text-slate-600 mb-6">Transform your business data into actionable insights. Automatically generates reports, identifies trends, and provides strategic recommendations.</p>
              <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link to="/services/data-analysis">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
