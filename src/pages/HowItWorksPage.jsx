import { CheckCircle, Clock, Users, Target, TrendingUp, Zap, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function HowItWorksPage() {
  const sessionSteps = [
    {
      title: 'Business Discovery',
      duration: '10 mins',
      icon: Users,
      description: 'Understand your team, goals, and current pain points.',
    },
    {
      title: 'Operations & Admin Deep Dive',
      duration: '10-12 mins',
      icon: Target,
      description: 'Spot time-drains, bottlenecks, and repetitive tasks ripe for automation.',
    },
    {
      title: 'Sales, Marketing & Lead Gen',
      duration: '10-12 mins',
      icon: TrendingUp,
      description: 'Review how leads are generated and explore ways to automate outreach, follow-up, and campaigns.',
    },
    {
      title: 'AI Agent Mapping',
      duration: '10 mins',
      icon: Zap,
      description: 'Match your needs to the right AI agents — Admin, Lead Gen, Customer Support, Reporting, and more.',
    },
    {
      title: 'ROI Summary',
      duration: '10 mins',
      icon: TrendingUp,
      description: 'Compare the cost of manual work (staff or outsourced) vs. the cost of using AI — showing real savings and time gained.',
    },
    {
      title: 'Wrap-Up & Next Steps',
      duration: '5-8 mins',
      icon: CheckCircle,
      description: 'Walk away with a clear plan — and the option to be referred for funded implementation.',
    },
  ]

  const benefits = [
    'No jargon, no sales — just practical advice',
    'Fully funded by Innovate UK',
    'Fast, focused, and personalised',
    'Backed by real experts if you choose to implement',
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-2xl text-teal-50 max-w-3xl mx-auto">
              A 60-minute strategy session to uncover where AI can save time, cut costs, and boost growth in your business
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Directors */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Your AI Discovery Team</h2>
            <p className="text-xl text-slate-600">Led by The Green Agents Directors</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/directors-photo.png" 
                alt="Westley Sweetman and John Wicks - The Green Agents Directors" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Westley Sweetman</h3>
                <p className="text-teal-600 font-semibold mb-3">Co-Director | IT Services & Operations Expert</p>
                <p className="text-slate-700">
                  Westley has built and grown a successful business in the IT Services and support sector. 
                  He knows everything that SMEs require to run efficiently and understands the operational 
                  challenges business owners face every day. With over 25 years of industry experience, Westley founded Sweetbyte in 2005 and has grown it through a reputation for strategic thinking and treating every client's IT as if it were his own.
                </p>
                <a href="https://www.sweetbyte.co.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline mt-2 inline-block">sweetbyte.co.uk</a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">John Wicks</h3>
                <p className="text-teal-600 font-semibold mb-3">Co-Director | Sales & Marketing Veteran</p>
                <p className="text-slate-700">
                  With 40 years of experience in sales and marketing, John understands the woes and pains 
                  SMEs face when trying to boost their social presence and gain new customers. His expertise 
                  helps businesses unlock growth opportunities. John specializes in practical, real-world email marketing campaigns that get results, not just theory—his hands-on approach drives genuine business growth.
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7390129417341251584?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7390129417341251584%2C7390417376204410880%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287390417376204410880%2Curn%3Ali%3Aactivity%3A7390129417341251584%29" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline mt-2 inline-block">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by The Navigator */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8 border-2 border-teal-600">
            <MessageCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Powered by The Navigator</h3>
            <p className="text-lg text-slate-700 mb-6">
              A voice-enabled AI consultant backed by <strong>Innovate UK</strong>. The Navigator helps us 
              deliver fast, focused, and personalised AI discovery sessions that uncover real opportunities 
              in your business.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Get */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What You'll Get</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A clear, jargon-free discovery session focused on practical wins — not tech talk. 
              We'll map out where your business could automate repetitive tasks, improve workflows, 
              and generate more leads using AI agents and Microsoft Copilot tools.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">This session is ideal for:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">SME owners, directors, and decision-makers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Automate time-consuming admin or operations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Improve sales and marketing without more staff</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Reduce costs and inefficiencies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Explore safe, real-world uses of AI and Microsoft Copilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Session Breakdown */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What's Covered in the Session</h2>
            <p className="text-xl text-slate-600">A structured 60-minute journey through your business</p>
          </div>

          <div className="space-y-6">
            {sessionSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border-l-4 border-teal-600 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6 text-teal-600" />
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                        <span className="ml-auto text-sm text-teal-600 font-semibold">{step.duration}</span>
                      </div>
                      <p className="text-slate-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Discover Your AI Opportunities?</h2>
          <p className="text-xl text-teal-50 mb-8">
            Book your free 60-minute AI Discovery Session today and uncover hours of saved time 
            and new opportunities in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Take the AI Readiness Assessment
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-teal-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-900 transition-colors border-2 border-white"
            >
              Book Your Discovery Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksPage
