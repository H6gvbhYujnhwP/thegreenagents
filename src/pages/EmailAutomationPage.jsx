import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Clock, Target, BarChart3, CheckCircle, ArrowRight, Play } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from 'react-router-dom'
import tgaLogo from '../assets/TheGreenAgentsLogoWebsite.png'
import emailHero from '../assets/email-automation-hero.png'

const EmailAutomationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    // Honeypot fields
    website: '',
    url: '',
    phone_number: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('')

  // reCAPTCHA callback function
  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token)
  }

  // Make reCAPTCHA callback available globally
  React.useEffect(() => {
    window.onRecaptchaChange = onRecaptchaChange
    return () => {
      delete window.onRecaptchaChange
    }
  }, [])

  const randomFacts = [
    "Automated email sequences generate 320% more revenue than single broadcast emails!",
    "Companies using email automation see an average ROI of $42 for every $1 spent!",
    "AI can predict the best time to send emails with 89% accuracy, boosting engagement rates!",
    "Personalized automated emails deliver 6x higher transaction rates than generic messages!"
  ]

  const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    // Check honeypot fields for spam protection
    if (formData.website || formData.url || formData.phone_number) {
      return // Silent fail for bots
    }
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('product', 'Email Automation Agent')
      formDataToSend.append('_subject', `New Email Automation Agent Inquiry from ${formData.firstName} ${formData.lastName}`)
      
      const response = await fetch('https://formspree.io/f/mdkdewjg', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormSubmitted(true)
      } else {
        alert('Sorry, there was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    }
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 120
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-black border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 lg:h-48">
            <div className="flex items-center">
              <Link to="/">
                <img src={tgaLogo} alt="The Green Agents" className="h-20 lg:h-40 w-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/#how-it-works" className="text-white hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">How It Works</Link>
                <Link to="/#products" className="text-white hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">Our Products</Link>
                <Link to="/#services" className="text-white hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">Services</Link>
                <Link to="/#why-us" className="text-white hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">Why Choose Us</Link>
                <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="text-white hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</a>
              </div>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                >
                  See How It Works
                </Button>
              </Link>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => scrollToSection('contact-form')}
              >
                Start Your 14-Day Pilot
              </Button>
            </div>
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
                Email Automation <span className="text-green-400">Agent</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your email marketing with intelligent automation that writes, sends, and optimizes campaigns while you sleep. Our AI agent handles everything from lead nurturing to customer retention.
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
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={emailHero} 
                alt="Email Automation Dashboard" 
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our Email Automation Agent comes packed with intelligent features designed to maximize your email marketing ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Smart Email Writing",
                description: "AI-powered content generation that creates personalized, engaging emails tailored to each recipient's preferences and behavior."
              },
              {
                icon: Clock,
                title: "Perfect Timing",
                description: "Advanced algorithms determine the optimal send time for each contact, maximizing open rates and engagement."
              },
              {
                icon: Target,
                title: "Precision Targeting",
                description: "Intelligent segmentation and targeting based on customer behavior, demographics, and engagement history."
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Comprehensive reporting and analytics that provide actionable insights to continuously improve campaign performance."
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

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Transform Your Email Marketing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the dramatic impact our Email Automation Agent can have on your business metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "320%",
                label: "Increase in Revenue",
                description: "Automated sequences generate significantly more revenue than single broadcast emails"
              },
              {
                metric: "41%",
                label: "Higher Open Rates",
                description: "AI-powered optimization delivers better engagement than traditional email marketing"
              },
              {
                metric: "15hrs",
                label: "Saved Per Week",
                description: "Eliminate manual email creation, scheduling, and follow-up tasks completely"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                  <div className="text-xl font-semibold text-slate-900 mb-4">{benefit.label}</div>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Automate Your Emails?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Schedule your free consultation and discover how our Email Automation Agent can transform your marketing.
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
                      Tell us about your email marketing goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                      placeholder="What email marketing challenges are you facing? What would you like to automate?"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4 h-auto"
                  >
                    Get My Free Email Automation Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-sm text-white/70 text-center">
                    No commitment required. We'll show you exactly how email automation can transform your marketing.
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

export default EmailAutomationPage

