import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Sparkles, Mic, FileText, Calendar, Share2, TrendingUp, Users } from "lucide-react";

function LinkedInAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Automate Your LinkedIn Presence
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
            Build your brand, connect with ideal clients, and generate leads—all on autopilot.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto max-w-md mx-auto touch-manipulation">
            <a href="https://www.socialecho.ai" target="_blank" rel="noopener noreferrer">Start Your Free Trial</a>
          </Button>
        </div>
      </section>

      {/* ROI Comparison Chart */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Stop Wasting Time, Start Seeing Results</h2>
            <p className="text-lg sm:text-xl text-slate-600 px-2">Compare the cost and effort of manual posting vs. automated solutions.</p>
          </div>
          <img src="/linkedin-images/linkedin-roi-comparison.png" alt="LinkedIn ROI Comparison Chart" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Our Automated LinkedIn Workflow</h2>
            <p className="text-lg sm:text-xl text-slate-600 px-2">From strategy to lead generation, we handle it all.</p>
          </div>
          
          {/* Modern Workflow Steps */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 transform -translate-y-1/2 z-0"></div>
            
            {/* Workflow Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Your Business Goals</h3>
                <p className="text-sm text-slate-600 text-center">Define your target audience and objectives</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">AI Content Generator</h3>
                <p className="text-sm text-slate-600 text-center">Create engaging posts tailored to your brand</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Brand Voice Training</h3>
                <p className="text-sm text-slate-600 text-center">AI learns your unique tone and style</p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Daily Post Creation</h3>
                <p className="text-sm text-slate-600 text-center">Professional content generated automatically</p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Optimal Scheduling</h3>
                <p className="text-sm text-slate-600 text-center">Posts timed for maximum engagement</p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">LinkedIn Publishing</h3>
                <p className="text-sm text-slate-600 text-center">Automated posting to your profile</p>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Engagement Tracking</h3>
                <p className="text-sm text-slate-600 text-center">Monitor performance and insights</p>
              </div>

              {/* Step 8 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Lead Generation</h3>
                <p className="text-sm text-slate-600 text-center">Convert connections into customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE Trial CTA */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your LinkedIn?</h2>
          <p className="text-xl text-teal-100 mb-10">Try Social Echo FREE for 7 days. No credit card required.</p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-6 text-lg">
            <a href="https://www.socialecho.ai" target="_blank" rel="noopener noreferrer">Start Your Free Trial</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default LinkedInAutomationPage;
