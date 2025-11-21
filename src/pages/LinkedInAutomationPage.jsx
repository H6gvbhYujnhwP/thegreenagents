import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function LinkedInAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            LinkedIn Automation
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Automate your LinkedIn presence, from content creation to lead generation. Build your brand and connect with your ideal clients, all on autopilot.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Is Your Business Being Left Behind?</h2>
            <p>In today's competitive landscape, it's not enough to just be good at what you do. You need to be visible. You need to be consistent. And you need to do it all without burning out.</p>
            <p>For many UK SME owners, that feels like an impossible task. You're the CEO, the Head of Sales, and the entire Marketing Department. You know you need to be active on platforms like LinkedIn, but who has the time?</p>
            
            <h3>It's Not a Lack of Effort. It's a Lack of Leverage.</h3>
            <p>Our LinkedIn Automation service gives you that leverage back. We handle the repetitive, time-consuming tasks of content creation, posting, and engagement, so you can focus on what you do best: running your business.</p>
            
            <h4>What We Automate:</h4>
            <ul>
              <li><strong>Content Creation:</strong> We create a week's worth of high-quality, relevant LinkedIn posts for you, live on our initial call.</li>
              <li><strong>Consistent Posting:</strong> We schedule and post your content at the optimal times to maximize reach and engagement.</li>
              <li><strong>Audience Building:</strong> We help you connect with your target audience and grow your network with relevant professionals.</li>
              <li><strong>Lead Nurturing:</strong> We can even automate outreach and follow-up messages to turn connections into conversations.</li>
            </ul>

            <h3>Try Social Echo: Your AI Social Media Team</h3>
            <p>Want to automate your LinkedIn and social media content creation? Try Social Echo—our AI-powered social media content generator. Generate professional posts daily, train the AI to match your brand voice, and build your authority without the cost of a marketing team.</p>
            <div className="bg-teal-50 p-8 rounded-lg my-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 text-center">🎉 FREE 7-Day Trial</h4>
              <p className="text-center text-slate-700 mb-6">No credit card required. No bank details needed. Start generating professional social content today.</p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <a href="https://socialecho.ai/register" target="_blank" rel="noopener noreferrer">Start Your Free Trial</a>
                </Button>
              </div>
            </div>

            <h3>Take the 60-Second AI Readiness Scorecard</h3>
            <p>Discover your biggest growth opportunity and get a personalized AI blueprint. Our free, no-obligation 60-minute AI Quick-Start Session will show you exactly how AI can transform your marketing—and give you your time back.</p>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link to="/assessment">Get Your Free Score & AI Blueprint</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LinkedInAutomationPage
