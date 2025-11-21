import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle, Zap, Users, BarChart } from 'lucide-react'

function SocialEchoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Social Echo: Your AI Social Media Team
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Generate professional social posts daily, train your AI to match your brand voice, and build your authority—all without the cost of a marketing team.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
              <a href="https://www.socialecho.ai" target="_blank" rel="noopener noreferrer">Start Your Free Trial</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white border-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg">
              <a href="https://socialecho.ai" target="_blank" rel="noopener noreferrer">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stop Paying £2,000/Month for What You Can Get for £49</h2>
            <p className="text-xl text-slate-600">Traditional agencies charge enterprise prices. We deliver professional results at SME-friendly pricing.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-b border-slate-200 bg-slate-50 p-4">Feature</th>
                  <th className="border-b border-slate-200 bg-slate-50 p-4">Traditional Agency</th>
                  <th className="border-b border-slate-200 bg-teal-50 p-4 font-bold">Social Echo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-slate-200">Monthly Cost</td>
                  <td className="p-4 border-b border-slate-200">£2,000-£5,000</td>
                  <td className="p-4 border-b border-slate-200 font-bold text-teal-700">£29.99-£49.99</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-slate-200">Posts Per Month</td>
                  <td className="p-4 border-b border-slate-200">15-30 posts</td>
                  <td className="p-4 border-b border-slate-200 font-bold text-teal-700">Up to 100 posts</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-slate-200">Content Style</td>
                  <td className="p-4 border-b border-slate-200">Generic templates</td>
                  <td className="p-4 border-b border-slate-200 font-bold text-teal-700">AI trained on YOUR voice</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-slate-200">Turnaround Time</td>
                  <td className="p-4 border-b border-slate-200">3-5 days</td>
                  <td className="p-4 border-b border-slate-200 font-bold text-teal-700">Instant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">3 Simple Steps to Daily Social Posts</h2>
            <p className="text-xl text-slate-600">No marketing experience required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Train Your Echo</h3>
              <p className="text-slate-600">Tell our AI about your business, tone, and target audience. It learns your unique voice in minutes.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Generate Daily</h3>
              <p className="text-slate-600">Click "Generate" and watch as professional posts appear in seconds. Refine with custom instructions.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Post & Grow</h3>
              <p className="text-slate-600">Copy to your platform, add an image, and post. Give feedback to help your AI learn and watch your authority soar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Results That Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-teal-50 p-8 rounded-lg">
              <p className="text-5xl font-bold text-teal-600 mb-2">350%</p>
              <p className="text-slate-700 font-semibold">Follower Growth</p>
              <p className="text-slate-600">Average increase in social media following within 90 days.</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg">
              <p className="text-5xl font-bold text-teal-600 mb-2">1000s</p>
              <p className="text-slate-700 font-semibold">New Subscribers</p>
              <p className="text-slate-600">Email list growth through targeted content and engagement.</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg">
              <p className="text-5xl font-bold text-teal-600 mb-2">100%</p>
              <p className="text-slate-700 font-semibold">Inbound Leads</p>
              <p className="text-slate-600">Recognition as sector experts driving qualified inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Free Trial Today</h2>
          <p className="text-xl text-teal-100 mb-10">No credit card required. Cancel anytime. See results in days, not months.</p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-6 text-lg">
              <a href="https://socialecho.ai/register" target="_blank" rel="noopener noreferrer">Get Started Free</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocialEchoPage
