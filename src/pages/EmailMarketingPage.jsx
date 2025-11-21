import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function EmailMarketingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Why Email Marketing Still Matters
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            In a world dominated by social media, email remains the highest-ROI marketing channel. Discover how to build relationships, generate predictable leads, and achieve long-term growth.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
            <Link to="/contact">Automate Your Email Marketing</Link>
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Social Media Creates Awareness. Email Creates Connection.</h2>
            <p>Social media is great for reaching new audiences, but it's a crowded and distracting environment. Your message is competing with holiday photos, memes, and breaking news. Engagement is fleeting, and you're always at the mercy of changing algorithms.</p>
            <p>Email, on the other hand, is a direct, personal, and permission-based conversation. When someone invites you into their inbox, you have their focused attention. This is where you build the trust and rapport that turns prospects into paying clients.</p>
            
            <blockquote>
              <p>"Social introduces you. Email helps people choose you."</p>
            </blockquote>

            <h3>You Own Your Email List. You Don't Own Your Social Following.</h3>
            <p>Your email list is a valuable business asset that you control. You can back it up, move it to another provider, and contact your subscribers whenever you want. No algorithm can limit your reach, and no platform can suspend your account and wipe out your audience overnight.</p>
            <p>Building your business on social media is like building on rented land. Your email list is property you own. It provides stability, security, and long-term value for your business.</p>

            <h4>Key Differences:</h4>
            <ul>
              <li><strong>Ownership:</strong> You own your email list; the platform owns your social following.</li>
              <li><strong>Reach:</strong> Direct access to 100% of your email subscribers vs. a small fraction of your social followers.</li>
              <li><strong>Control:</strong> You control the message, timing, and format of your emails.</li>
              <li><strong>ROI:</strong> Email marketing generates an average return of £30-£40 for every £1 spent.</li>
            </ul>

            <h3>Ready to Build Your Most Valuable Marketing Asset?</h3>
            <p>Our Email Automation Agent handles everything from writing and sending campaigns to nurturing leads and optimizing for performance. Let us build you a powerful email marketing engine that generates predictable leads and drives long-term growth.</p>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link to="/services/email-automation">Explore the Email Automation Agent</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmailMarketingPage
