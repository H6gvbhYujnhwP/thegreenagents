import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function EmailAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Email Automation Agent
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Intelligent email campaigns that write, send, and optimize themselves. Handles customer follow-ups, lead nurturing, and personalized outreach automatically.
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our Email Automation Agent is packed with features to save you time and grow your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Email Writing</h3>
              <p className="text-slate-600">Our AI writes compelling, on-brand emails for your campaigns.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Follow-ups</h3>
              <p className="text-slate-600">Never miss a lead with automated follow-up sequences.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance Optimization</h3>
              <p className="text-slate-600">A/B testing and performance analysis to maximize your ROI.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lead Nurturing</h3>
              <p className="text-slate-600">Turn cold leads into paying customers with personalized nurturing campaigns.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmailAutomationPage
