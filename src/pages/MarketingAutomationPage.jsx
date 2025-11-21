import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function MarketingAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Marketing Automation Agent
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Complete marketing campaigns that run themselves. From social media posts to ad optimization, this agent handles your entire marketing pipeline.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our Marketing Automation Agent is your all-in-one solution for a hands-free marketing strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Media Management</h3>
              <p className="text-slate-600">Automated content creation and posting for LinkedIn, Facebook, and more.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ad Campaign Optimization</h3>
              <p className="text-slate-600">AI-powered optimization of your Google and social media ad campaigns.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Content Creation</h3>
              <p className="text-slate-600">Blog posts, articles, and social media content written by our AI.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Analytics Reporting</h3>
              <p className="text-slate-600">Weekly reports on your marketing performance and ROI.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketingAutomationPage
