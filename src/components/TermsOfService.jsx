import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Website
          </Button>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: January 18, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using The Green Agents website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Service Description</h2>
            <p className="text-slate-700 mb-4">
              The Green Agents Ltd provides managed AI automation services for small and medium-sized businesses. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>AI agent deployment and management</li>
              <li>Business process automation</li>
              <li>Customer service automation</li>
              <li>Marketing automation</li>
              <li>Data analysis and reporting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Responsibilities</h2>
            <p className="text-slate-700 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Using our services in a manner consistent with their intended purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Service Availability</h2>
            <p className="text-slate-700 mb-4">
              While we strive to provide continuous service availability, we do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-slate-900 mb-4">5. Intellectual Property</h2>
            <p className="text-slate-700 mb-4">
              All content, features, and functionality of our services are owned by The Green Agents Ltd and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              To the fullest extent permitted by law, The Green Agents Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Termination</h2>
            <p className="text-slate-700 mb-4">
              Either party may terminate the service agreement with 30 days written notice. Upon termination, your access to our services will cease, and any outstanding obligations will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Governing Law</h2>
            <p className="text-slate-700 mb-4">
              These terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-slate-700">
              Email: legal@thegreenagents.com<br />
              Company: The Green Agents Ltd<br />
              Jurisdiction: United Kingdom
            </p>
          </section>

          <div className="bg-slate-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-slate-600">
              <strong>Disclaimer:</strong> This Terms of Service document is provided for informational purposes and should be reviewed by qualified legal counsel. The Green Agents Ltd reserves the right to update these terms at any time with reasonable notice to users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

