import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Clock, Users, Headphones, CheckCircle, ArrowRight, Play } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from 'react-router-dom'
import tgaLogo from '../assets/TheGreenAgentsLogoWebsite.png'
import customerServiceHero from '../assets/customer-service-hero.png'

const CustomerServicePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })

  const facts = [
    "AI customer service agents can handle 80% of routine inquiries without human intervention!",
    "24/7 automated support increases customer satisfaction scores by 35% on average!",
    "Companies using AI customer service see 67% faster response times and 40% cost reduction!",
    "Intelligent chatbots can resolve customer issues 3x faster than traditional support methods!",
    "AI-powered customer service reduces support costs by up to 60% while improving quality!"
  ]

  const randomFact = facts[Math.floor(Math.random() * facts.length)]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-black border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 lg:h-48">
            <Link to="/" className="flex items-center">
              <img src={tgaLogo} alt="The Green Agents" className="h-20 lg:h-40 w-auto" />
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-green-400">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Customer Service <span className="text-green-400">Agent</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                24/7 customer support that never sleeps. Our AI agent handles inquiries, resolves issues, and escalates complex cases to your team when needed, ensuring exceptional customer experience around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={customerServiceHero} 
                alt="Customer Service Automation Dashboard" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Always-On Customer Support</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our Customer Service Agent provides intelligent, empathetic support that scales with your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Never miss a customer inquiry. Our AI agent provides instant responses and support around the clock."
              },
              {
                icon: MessageCircle,
                title: "Multi-Channel Support",
                description: "Seamless support across email, chat, social media, and phone with consistent quality and tone."
              },
              {
                icon: Users,
                title: "Smart Escalation",
                description: "Intelligent routing of complex issues to the right human agents when specialized expertise is needed."
              },
              {
                icon: Headphones,
                title: "Issue Resolution",
                description: "Advanced problem-solving capabilities that resolve 80% of customer inquiries without human intervention."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-green-600/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready for 24/7 Customer Support?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Schedule your free consultation and discover how our Customer Service Agent can transform your support operations.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {!formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
              >
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="Enter your business email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Tell us about your customer service needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                      placeholder="What customer service challenges are you facing? What support tasks would you like to automate?"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4 h-auto"
                  >
                    Get My Free Customer Service Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-sm text-white/70 text-center">
                    No commitment required. We'll show you exactly how AI can transform your customer support.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
              >
                <div className="mb-6">
                  <img src={tgaLogo} alt="The Green Agents" className="h-20 w-auto mx-auto mb-4" />
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Thank you for your interest!
                </h3>
                
                <p className="text-lg text-green-100 mb-6">
                  We'll be in touch soon from the Green Agents Team! You have made the right choice.
                </p>
                
                <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-4 mb-6">
                  <h4 className="text-green-400 font-semibold mb-2">💡 Fun Fact of the Day</h4>
                  <p className="text-green-100 text-sm">
                    {randomFact}
                  </p>
                </div>
                
                <Button 
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={tgaLogo} alt="The Green Agents" className="h-40 lg:h-56 w-auto mr-8" />
              <p className="text-slate-400">© 2025 The Green Agents Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-slate-400 hover:text-green-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CustomerServicePage

