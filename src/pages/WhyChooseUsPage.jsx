import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle, Users, Zap } from 'lucide-react'

function WhyChooseUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Your Success is Our Business
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're not just another tech company. We're your strategic partners, led by seasoned business owners who understand the challenges UK SMEs face every single day. Our success is measured by YOURS.
          </p>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience That Matters</h2>
            <p className="text-xl text-slate-600">Meet the minds behind your AI strategy</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Westley Sweetman</h3>
              <p className="text-teal-600 font-semibold mb-3">The Operations Expert Who's Been in Your Shoes</p>
              <p className="text-slate-700 mb-4">
                With 25+ years in IT and as the founder of a successful IT support company since 2005, Westley has seen it all. He knows the operational bottlenecks that stifle growth and specializes in implementing practical, efficient AI solutions that streamline your business from the inside out.
              </p>
              <a href="https://www.sweetbyte.co.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">Learn more about his IT expertise</a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">John Wicks</h3>
              <p className="text-teal-600 font-semibold mb-3">The Growth Veteran Who Gets Results</p>
              <p className="text-slate-700 mb-4">
                With 40 years in the trenches of sales and marketing, John knows what it takes to win new customers. He cuts through the noise with practical, real-world strategies that use AI to boost your social presence, generate qualified leads, and drive genuine business growth—no fluff, just results.
              </p>
              <a href="https://www.linkedin.com/in/john-wicks-a4b1b31b/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">Connect on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Promise to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Speak Your Language</h3>
              <p className="text-slate-600">No tech jargon. We're business owners first, technologists second. We focus on practical solutions to your real-world problems.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Zap className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast, Tangible Results</h3>
              <p className="text-slate-600">Our goal is to get you a return on your investment as quickly as possible. We prioritize high-impact automations that save you time and money from day one.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">A Partnership for Growth</h3>
              <p className="text-slate-600">We're not a faceless corporation. We're your dedicated partners, invested in your success and committed to helping you scale your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner with Experts Who Get It?</h2>
          <p className="text-xl text-teal-100 mb-10">Let's build a more efficient, profitable future for your business. Book your free, no-obligation discovery session and see the difference that real-world experience makes.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-6 text-lg">
              <Link to="/contact">Book Your Free Discovery Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUsPage
