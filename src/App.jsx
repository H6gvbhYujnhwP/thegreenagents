import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import EmailAutomationPage from './pages/EmailAutomationPage'
import MarketingAutomationPage from './pages/MarketingAutomationPage'
import CustomerServicePage from './pages/CustomerServicePage'
import DataAnalysisPage from './pages/DataAnalysisPage'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import LinkedInAutomationPage from './pages/LinkedInAutomationPage'
import EmailMarketingPage from './pages/EmailMarketingPage'
import AssessmentPage from './pages/AssessmentPage'
import HowItWorksPage from './pages/HowItWorksPage'
import WhyChooseUsPage from './pages/WhyChooseUsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/email-automation" element={<EmailAutomationPage />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomationPage />} />
          <Route path="/services/customer-service" element={<CustomerServicePage />} />
          <Route path="/services/data-analysis" element={<DataAnalysisPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services/linkedin-automation" element={<LinkedInAutomationPage />} />
          <Route path="/services/email-marketing-guide" element={<EmailMarketingPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/why-us" element={<WhyChooseUsPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
