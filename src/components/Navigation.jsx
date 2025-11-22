import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import tgaLogo from '../assets/TheGreenAgents1.png'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [ourAppsMenuOpen, setOurAppsMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Email Automation', href: '/services/email-automation' },
        { name: 'Marketing Automation', href: '/services/marketing-automation' },
        { name: 'Customer Service', href: '/services/customer-service' },
        { name: 'Data Analysis', href: '/services/data-analysis' },
        { name: 'LinkedIn Automation', href: '/services/linkedin-automation' },
      ],
    },
    {
      name: 'Our Apps',
      href: '/our-apps',
      subLinks: [
        { name: 'Social Echo', href: '/our-apps/social-echo' },
        { name: 'WorkTrackr', href: '/our-apps/worktrackr' },
      ],
    },
    { name: 'Why Choose Us', href: '/#why-us' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex items-center">
            <Link to="/">
              <img src={tgaLogo} alt="The Green Agents" className="w-40 sm:w-48 lg:w-80 h-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.name} className="relative">
                  <button
                    onMouseEnter={() => link.name === 'Services' ? setServicesMenuOpen(true) : setOurAppsMenuOpen(true)}
                    onMouseLeave={() => link.name === 'Services' ? setServicesMenuOpen(false) : setOurAppsMenuOpen(false)}
                    className="flex items-center text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {((link.name === 'Services' && servicesMenuOpen) || (link.name === 'Our Apps' && ourAppsMenuOpen)) && (
                    <div
                      onMouseEnter={() => link.name === 'Services' ? setServicesMenuOpen(true) : setOurAppsMenuOpen(true)}
                      onMouseLeave={() => link.name === 'Services' ? setServicesMenuOpen(false) : setOurAppsMenuOpen(false)}
                      className="absolute top-full left-0 mt-0 w-56 bg-white shadow-md border-t-2 border-teal-600 z-[100]"
                    >
                      <div className="py-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => link.href.startsWith('/#') && handleScrollTo(link.href.substring(2))}
                  className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent">
              <Link to="/assessment">AI Readiness Scorecard</Link>
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link to="/contact">Get Started</Link>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div>
                      <button
                        onClick={() => {
                          if (link.name === 'Services') {
                            setMobileServicesOpen(!mobileServicesOpen)
                            setMobileAppsOpen(false)
                          } else {
                            setMobileAppsOpen(!mobileAppsOpen)
                            setMobileServicesOpen(false)
                          }
                        }}
                        className="flex justify-between items-center w-full text-left text-slate-700 hover:text-teal-600 py-3 text-base font-medium transition-colors touch-manipulation"
                      >
                        {link.name} 
                        <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${
                          (link.name === 'Services' && mobileServicesOpen) || (link.name === 'Our Apps' && mobileAppsOpen) 
                            ? 'rotate-180' 
                            : ''
                        }`} />
                      </button>
                      {((link.name === 'Services' && mobileServicesOpen) || (link.name === 'Our Apps' && mobileAppsOpen)) && (
                        <div className="pl-4 mt-1 space-y-1 pb-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              className="block w-full text-left text-slate-600 hover:text-teal-600 py-2.5 text-sm transition-colors touch-manipulation"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileServicesOpen(false)
                                setMobileAppsOpen(false)
                              }}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => {
                        if (link.href.startsWith('/#')) {
                          handleScrollTo(link.href.substring(2))
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }}
                      className="block w-full text-left text-slate-700 hover:text-teal-600 py-3 text-base font-medium transition-colors touch-manipulation"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Button asChild variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent text-base py-6 touch-manipulation">
                  <Link to="/assessment" onClick={() => setMobileMenuOpen(false)}>AI Readiness Scorecard</Link>
                </Button>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white text-base py-6 touch-manipulation">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
