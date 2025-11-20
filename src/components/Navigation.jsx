import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import tgaLogo from '../assets/TheGreenAgents1.png'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    
    if (!isHomePage) {
      // Navigate to home page first, then scroll
      window.location.href = `/#${sectionId}`
      return
    }
    
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 200
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex items-center">
            <Link to="/">
              <img src={tgaLogo} alt="The Green Agents" className="w-48 lg:w-80 h-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">How It Works</button>
              <button onClick={() => scrollToSection('products')} className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Our Products</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Why Choose Us</button>
              <Link to="/contact" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Contact</Link>
            </div>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How It Works
            </Button>
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => scrollToSection('ready-to-get-started')}
            >
              Start Your 14-Day Pilot
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
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-slate-700 hover:text-teal-600 py-2 text-sm font-medium transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left text-slate-700 hover:text-teal-600 py-2 text-sm font-medium transition-colors">Our Products</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-700 hover:text-teal-600 py-2 text-sm font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left text-slate-700 hover:text-teal-600 py-2 text-sm font-medium transition-colors">Why Choose Us</button>
              <Link to="/contact" className="block w-full text-left text-slate-700 hover:text-teal-600 py-2 text-sm font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  See How It Works
                </Button>
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => scrollToSection('ready-to-get-started')}
                >
                  Start Your 14-Day Pilot
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
