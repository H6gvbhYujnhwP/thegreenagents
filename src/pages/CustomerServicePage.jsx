import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function CustomerServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Customer Service Agent
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            24/7 customer support that never sleeps. Handles inquiries, resolves issues, and escalates complex cases to your team when needed.
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our Customer Service Agent provides instant, reliable support to your customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Availability</h3>
              <p className="text-slate-600">Your customers get instant support, day or night.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-channel Support</h3>
              <p className="text-slate-600">Support via email, chat, and social media.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Issue Resolution</h3>
              <p className="text-slate-600">Resolves up to 80% of common customer issues automatically.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Escalation</h3>
              <p className="text-slate-600">Seamlessly escalates complex issues to your human team.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerServicePage
