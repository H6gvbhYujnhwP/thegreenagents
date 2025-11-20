import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import tgaLogo from '../assets/TheGreenAgents1.png'

function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    // Honeypot fields for spam protection
    website: '',
    url: '',
    phone_number: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
    setFormSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 lg:h-32">
            <div className="flex items-center">
              <Link to="/">
                <img src={tgaLogo} alt="The Green Agents" className="w-48 lg:w-80 h-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Home</Link>
                <Link to="/contact" className="text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap border-b-2 border-teal-600">Contact</Link>
              </div>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-teal-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" className="block text-slate-700 hover:text-teal-600 px-3 py-2 text-base font-medium transition-colors">Home</Link>
              <Link to="/contact" className="block text-teal-600 px-3 py-2 text-base font-medium transition-colors border-l-4 border-teal-600">Contact</Link>
              <div className="pt-4 space-y-2">
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI agents? Schedule your free discovery call today and learn how The Green Agents can help you work smarter.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <a href="mailto:hello@thegreenagents.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                hello@thegreenagents.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600">Available Monday-Friday</p>
              <p className="text-slate-600">9:00 AM - 5:00 PM GMT</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">United Kingdom</p>
              <p className="text-slate-600">Serving SMEs Nationwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 p-8 lg:p-12 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Schedule Your Free Discovery Call</h2>
              <p className="text-slate-600 mb-8 text-center">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
              </p>

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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-slate-900"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-slate-900"
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-slate-900"
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-slate-900"
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
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-slate-900 resize-none"
                    placeholder="Tell us about the repetitive tasks that are slowing down your business..."
                  />
                </div>

                {/* Honeypot fields - hidden from users */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="website" value={formData.website} onChange={handleInputChange} tabIndex="-1" />
                  <input type="text" name="url" value={formData.url} onChange={handleInputChange} tabIndex="-1" />
                  <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} tabIndex="-1" />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-6"
                >
                  Schedule My Free Discovery Call
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-teal-50 p-8 lg:p-12 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-teal-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h3>
              <p className="text-lg text-slate-700 mb-6">
                We've received your message and will get back to you within 24 hours to schedule your free discovery call.
              </p>
              <p className="text-slate-600 mb-8">
                In the meantime, feel free to explore our services or check your email for a confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={resetForm}
                  variant="outline"
                  className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white"
                >
                  Send Another Message
                </Button>
                <Link to="/">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
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

export default ContactPage
