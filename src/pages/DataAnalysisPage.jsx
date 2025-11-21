import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function DataAnalysisPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Data Analysis Agent
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Transform your business data into actionable insights. Automatically generates reports, identifies trends, and provides strategic recommendations.
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our Data Analysis Agent turns your raw data into your biggest asset.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Reporting</h3>
              <p className="text-slate-600">Daily, weekly, or monthly reports delivered to your inbox.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Trend Analysis</h3>
              <p className="text-slate-600">Identifies key trends and opportunities in your data.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Insights</h3>
              <p className="text-slate-600">Get actionable recommendations to improve your business.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance Tracking</h3>
              <p className="text-slate-600">Track your KPIs and business goals automatically.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataAnalysisPage
