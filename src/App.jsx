import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, ArrowRight, Clock, Target, Shield, Zap, Users, BarChart3, 
  Phone, Mail, MapPin, Menu, X, Star, Award, TrendingUp, Cpu, Bot,
  Building2, Briefcase, Settings, ChevronDown, PlayCircle, FileText,
  Globe, Rocket, Brain, Network
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import tgaLogo from './assets/TheGreenAgents1.png'
import emailAutomation from './assets/email-automation.png'
import marketingAutomation from './assets/marketing-automation.webp'
import customerService from './assets/customer-service.png'
import dataAnalysis from './assets/data-analysis.png'
import TermsOfService from './components/TermsOfService.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import EmailAutomationPage from './components/EmailAutomationPage.jsx'
import MarketingAutomationPage from './components/MarketingAutomationPage.jsx'
import CustomerServicePage from './components/CustomerServicePage.jsx'
import DataAnalysisPage from './components/DataAnalysisPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import Navigation from './components/Navigation.jsx'
import './App.css'

function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    // Honeypot fields (should remain empty)
    website: '',
    url: '',
    phone_number: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    // Check honeypot fields for spam protection
    if (formData.website || formData.url || formData.phone_number) {
      return // Silent fail for bots
    }
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`)
      
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

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
      website: '',
      url: '',
      phone_number: ''
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 200
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const facts = [
    "Did you know that AI is the biggest technological advancement since the internet began?",
    "Companies using AI agents see an average 300% increase in operational efficiency!",
    "AI can process information 1000x faster than humans, making your business lightning quick!",
    "Businesses with AI automation save an average of 40 hours per week on repetitive tasks!",
    "AI agents never sleep - they work 24/7 to grow your business while you rest!"
  ]

  const randomFact = facts[Math.floor(Math.random() * facts.length)]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We run the work.{' '}
              <span className="text-teal-600">You run the business.</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fully managed AI agents that handle your repetitive tasks, so you can focus on what matters most. 
              No technical skills required, no setup headaches, just results.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-4 h-auto"
                onClick={() => scrollToSection('ready-to-get-started')}
              >
                Start Your 14-Day Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white text-lg px-8 py-4 h-auto bg-transparent"
                onClick={() => scrollToSection('how-it-works')}
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Bullets */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-teal-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Fully Managed</h3>
              <p className="text-slate-600">We deploy, monitor, and optimize your AI agents so you don't have to. From initial setup to ongoing performance tuning, our team handles all the technical complexity.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-teal-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Outcome-Owned</h3>
              <p className="text-slate-600">We tie our agents' performance directly to the KPIs that matter to your business. Whether it's response times, lead conversion, or cost savings, we measure success the same way you do.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-teal-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No Tech Skills Needed</h3>
              <p className="text-slate-600">We translate your business needs into intelligent automation. Simply tell us what tasks are eating up your time, and we'll design agents that handle them exactly how you want.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Getting started with The Green Agents is simple. We handle all the complexity while you focus on your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="bg-teal-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-lg">1</span>
                  </div>
                  <CardTitle className="text-2xl">Discovery Call</CardTitle>
                  <CardDescription className="text-slate-500">Week 1</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">"Tell us what's slowing you down"</h4>
                  <p className="text-slate-600">
                    We start with a simple conversation about your biggest time drains and repetitive tasks. No technical jargon, 
                    no complex requirements gathering – just a straightforward discussion about where you need help most.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-teal-400" />
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="bg-teal-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-lg">2</span>
                  </div>
                  <CardTitle className="text-2xl">Agent Setup</CardTitle>
                  <CardDescription className="text-slate-500">Week 2</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">"We build and deploy your AI squad"</h4>
                  <p className="text-slate-600">
                    Our technical team creates and configures your AI agents while you continue running your business as usual. 
                    We handle all the complex setup, integration, and testing.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-teal-400" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="bg-teal-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-lg">3</span>
                  </div>
                  <CardTitle className="text-2xl">Managed Delivery</CardTitle>
                  <CardDescription className="text-slate-500">Ongoing</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">"Your agents work while we optimize"</h4>
                  <p className="text-slate-600">
                    Your AI agents begin handling tasks immediately while our team monitors performance and makes continuous improvements. 
                    You'll receive weekly reports showing time saved and performance metrics.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our AI Agent Products</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our suite of intelligent agents designed to automate your most time-consuming business tasks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Email Automation Agent",
                description: "Intelligent email campaigns that write, send, and optimize themselves. Handles customer follow-ups, lead nurturing, and personalized outreach automatically.",
                image: emailAutomation,
                features: ["Smart email writing", "Automated follow-ups", "Performance optimization", "Lead nurturing"]
              },
              {
                title: "Marketing Automation Agent", 
                description: "Complete marketing campaigns that run themselves. From social media posts to ad optimization, this agent handles your entire marketing pipeline.",
                image: marketingAutomation,
                features: ["Social media management", "Ad campaign optimization", "Content creation", "Analytics reporting"]
              },
              {
                title: "Customer Service Agent",
                description: "24/7 customer support that never sleeps. Handles inquiries, resolves issues, and escalates complex cases to your team when needed.",
                image: customerService,
                features: ["24/7 availability", "Multi-channel support", "Issue resolution", "Smart escalation"]
              },
              {
                title: "Data Analysis Agent",
                description: "Transform your business data into actionable insights. Automatically generates reports, identifies trends, and provides strategic recommendations.",
                image: dataAnalysis,
                features: ["Automated reporting", "Trend analysis", "Strategic insights", "Performance tracking"]
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/${product.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We automate the tasks that consume your time, so you can focus on growing your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle className="text-2xl">Customer Service Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Transform your customer support with AI agents that handle inquiries, process requests, and escalate complex issues to your team.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      24/7 availability
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Maintains your brand voice
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Intelligent escalation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle className="text-2xl">Marketing Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Automate lead nurturing, social media management, content scheduling, and campaign optimization.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Lead nurturing sequences
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Social media automation
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Campaign optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle className="text-2xl">Administrative Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Eliminate time-consuming administrative work with agents that handle scheduling, data entry, and routine communications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Appointment scheduling
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Data entry & processing
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      Invoice management
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose The Green Agents</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another AI tool. We're your dedicated automation partner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-teal-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Results</h3>
              <p className="text-slate-600">40% reduction in time spent on repetitive tasks within the first month</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-teal-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Management</h3>
              <p className="text-slate-600">Our team of AI specialists continuously monitors and optimizes your agents</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-teal-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Seamless Integration</h3>
              <p className="text-slate-600">Works with your existing tools and systems, no changes required</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-teal-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Transparent Reporting</h3>
              <p className="text-slate-600">Detailed weekly reports showing exactly what your agents accomplished</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilot Offer Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Risk-Free with Our 14-Day Pilot</h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Experience the power of managed AI agents with no long-term commitment. We'll identify your biggest time drain, 
              deploy a custom agent, and show you measurable results within two weeks. If you're not completely satisfied 
              with the time savings and quality, there's no obligation to continue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100 text-lg px-8 py-4 h-auto">
                Start Your 14-Day Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-teal-600 text-lg px-8 py-4 h-auto bg-transparent"
                onClick={() => scrollToSection('ready-to-get-started')}
              >
                Schedule Discovery Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="ready-to-get-started" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Schedule your free discovery call today and learn how The Green Agents can transform your business operations.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {!formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="Enter your business email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      What tasks would you like to automate?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                      placeholder="Tell us about the repetitive tasks that are slowing down your business..."
                    ></textarea>
                  </div>
                  
                  {/* Honeypot fields - hidden from users but visible to bots */}
                  <div style={{ display: 'none' }}>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                    <input
                      type="url"
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-4 h-auto"
                  >
                    Schedule My Free Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-sm text-white/70 text-center">
                    No commitment required. We'll discuss your needs and show you exactly how AI agents can help your business.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="mb-6">
                  <img src={tgaLogo} alt="The Green Agents" className="h-20 w-auto mx-auto mb-4" />
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Thank you for your interest!
                </h3>
                
                <p className="text-lg text-slate-600 mb-6">
                  We'll be in touch soon from the Green Agents Team! You have made the right choice.
                </p>
                
                <div className="bg-teal-600/20 border border-teal-600/30 rounded-lg p-4 mb-6">
                  <h4 className="text-teal-600 font-semibold mb-2">💡 Fun Fact of the Day</h4>
                  <p className="text-slate-700 text-sm">
                    {randomFact}
                  </p>
                </div>
                
                <Button 
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={tgaLogo} alt="The Green Agents" className="w-64 lg:w-96 h-auto mr-8" />
              <p className="text-slate-600">© 2025 The Green Agents Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-slate-600 hover:text-teal-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-slate-600 hover:text-teal-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/email-automation-agent" element={<EmailAutomationPage />} />
        <Route path="/marketing-automation-agent" element={<MarketingAutomationPage />} />
        <Route path="/customer-service-agent" element={<CustomerServicePage />} />
        <Route path="/data-analysis-agent" element={<DataAnalysisPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App

