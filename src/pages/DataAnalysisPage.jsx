import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { BarChart3, TrendingUp, PieChart, Activity, Target, Zap } from 'lucide-react'

function DataAnalysisPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
                Data Analysis Agent
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8">
                Transform your business data into actionable insights. Automatically generate reports, identify trends, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-teal-600 text-teal-600 hover:bg-teal-50 w-full sm:w-auto touch-manipulation">
                  <Link to="/assessment">Free Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/service-images/data-analytics-dashboard.png" 
                alt="Data Analytics Dashboard" 
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
              <p className="text-5xl font-bold mb-2">90%</p>
              <p className="text-teal-100">Faster reporting</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-teal-100">Data accuracy</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-teal-100">Hours saved monthly</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-teal-100">Real-time insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Data Analysis Automation Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our AI collects, analyzes, and transforms your data into strategic insights automatically.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg">
            <img 
              src="/service-images/data-analysis-flow.png" 
              alt="Data Analysis Flow Diagram" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Analytics Features</h2>
            <p className="text-xl text-slate-600">Turn data chaos into clarity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Reporting</h3>
              <p className="text-slate-600">Daily, weekly, or monthly reports generated automatically and delivered to your inbox.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trend Analysis</h3>
              <p className="text-slate-600">AI identifies patterns and trends before they become obvious, giving you a competitive edge.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Tracking</h3>
              <p className="text-slate-600">Monitor KPIs in real-time with customizable dashboards that update automatically.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Insights</h3>
              <p className="text-slate-600">Get actionable recommendations based on your data, not just numbers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Visualization</h3>
              <p className="text-slate-600">Beautiful charts and graphs that make complex data easy to understand.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Analytics</h3>
              <p className="text-slate-600">Forecast future trends and outcomes based on historical data patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Can Data Analysis Do For Your Business?</h2>
            <p className="text-xl text-slate-600">Real insights for real growth</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sales Performance</h3>
              <p className="text-slate-600 mb-4">Track revenue, conversion rates, and sales pipeline health. Identify your best-performing products, channels, and salespeople.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Revenue trends and forecasts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Conversion rate analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Pipeline health monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketing ROI</h3>
              <p className="text-slate-600 mb-4">See exactly which marketing channels and campaigns are driving results. Stop wasting money on what doesn't work.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Channel performance comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Cost per acquisition tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Campaign ROI analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Behavior</h3>
              <p className="text-slate-600 mb-4">Understand what your customers want, when they buy, and why they leave. Use insights to improve retention and lifetime value.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Customer segmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Churn prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Lifetime value analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Operational Efficiency</h3>
              <p className="text-slate-600 mb-4">Identify bottlenecks, optimize processes, and reduce costs. Make your operations leaner and more profitable.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Process efficiency metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Cost analysis and reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Resource allocation optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Make Data-Driven Decisions?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8 lg:mb-10">Join hundreds of UK SMEs using AI to turn data into competitive advantage.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-teal-500 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation">
              <Link to="/assessment">Free AI Readiness Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataAnalysisPage
