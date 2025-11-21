import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle, Zap, Users, BarChart } from 'lucide-react'

function WorkTrackrPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            WorkTrackr: Custom Workflows. Zero Hassle.
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            The complete workflow and ticketing system designed for IT support providers, maintenance teams, and service organizations.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 text-lg">
              <a href="https://worktrackr.cloud/register" target="_blank" rel="noopener noreferrer">Start Free Trial</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 px-8 py-6 text-lg">
              <a href="https://worktrackr.cloud" target="_blank" rel="noopener noreferrer">View Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Manage Workflows</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Ticketing</h3>
              <p className="text-slate-600">Create, assign, and track tickets with automated workflows and SLA monitoring.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Tenant</h3>
              <p className="text-slate-600">Partner accounts can manage multiple customer organizations with white-label branding.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Workflows</h3>
              <p className="text-slate-600">Build automated workflows with triggers, actions, and escalation rules.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Billing Ready</h3>
              <p className="text-slate-600">Integrated Stripe billing with subscription management and customer portals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600">7-day free trial on all plans</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Starter</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">£49<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>1 user included</li>
                <li>Advanced ticketing</li>
                <li>Email notifications</li>
                <li>+ £15/month per additional user</li>
              </ul>
              <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                <a href="https://worktrackr.cloud/register">Choose Plan</a>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-yellow-500">
              <p className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full inline-block mb-4">Most Popular</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Pro</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">£99<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>5 users included</li>
                <li>Workflow builder</li>
                <li>Reports & inspections</li>
                <li>Approvals</li>
                <li>+ £15/month per additional user</li>
              </ul>
              <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                <a href="https://worktrackr.cloud/register">Choose Plan</a>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">£299<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>50 users included</li>
                <li>Advanced workflows</li>
                <li>API access</li>
                <li>White-labeling</li>
                <li>+ £15/month per additional user</li>
              </ul>
              <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                <a href="https://worktrackr.cloud/register">Choose Plan</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Workflows?</h2>
          <p className="text-xl text-yellow-100 mb-10">Start your free 7-day trial and see how WorkTrackr can transform your business operations.</p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-slate-100 px-8 py-6 text-lg">
              <a href="https://worktrackr.cloud/register" target="_blank" rel="noopener noreferrer">Get Started Free</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkTrackrPage
