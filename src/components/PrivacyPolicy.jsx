import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: 24 June 2026</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Fill out our contact forms or request information</li>
              <li>Schedule a discovery call or consultation</li>
              <li>Subscribe to our services</li>
              <li>Communicate with us via email or other channels</li>
            </ul>
            <p className="text-slate-700 mb-4">
              This may include your name, email address, company name, phone number, and information about your business needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about our services and offerings</li>
              <li>Analyze usage patterns to improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Information Sharing</h2>
            <p className="text-slate-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Retention</h2>
            <p className="text-slate-700 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Cookies, tracking and the Meta Pixel</h2>
            <p className="text-slate-700 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyse website traffic. You can control cookie settings through your browser preferences.
            </p>
            <p className="text-slate-700 mb-4">
              On some of our pages, and on pages we operate on behalf of our clients, we use the Meta Pixel and the Meta Conversions API. These tools allow us and Meta Platforms, Inc. ("Meta") to measure the effectiveness of advertising, understand the actions people take, and show more relevant ads on Facebook and Instagram. The information shared with Meta may include your interactions with the website (such as pages viewed or forms submitted) and identifiers such as your IP address. This information is processed by Meta in accordance with Meta's own Data Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Facebook and Meta Lead Ads</h2>
            <p className="text-slate-700 mb-4">
              We run advertising campaigns on Facebook and Instagram, including Lead Ads that use Meta's instant forms. If you submit one of these forms, the information you provide — which may include your name, email address, phone number and answers to any questions on the form — is collected through Meta's platform and made available to us so that we (or the client we are advertising on behalf of) can respond to your enquiry, provide the information or service you requested, and follow up with you.
            </p>
            <p className="text-slate-700 mb-4">
              Information submitted through a Lead Ad is handled in line with this Privacy Policy. It is also processed by Meta under Meta's own terms and Data Policy. We do not use this information for any purpose other than the one for which you provided it, and we do not sell it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. International Data Transfers</h2>
            <p className="text-slate-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Contact us and data deletion requests</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, or if you would like us to access, correct or delete the personal information we hold about you — including any information you submitted through a Facebook or Instagram Lead Ad — please contact us using the details below. We will action verified deletion requests within 30 days.
            </p>
            <p className="text-slate-700">
              Email: privacy@thegreenagents.com<br />
              Company: The Green Agents Ltd<br />
              Jurisdiction: United Kingdom
            </p>
          </section>

          <div className="bg-slate-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-slate-600">
              <strong>Disclaimer:</strong> This Privacy Policy is provided for informational purposes and should be reviewed by qualified legal counsel. The Green Agents Ltd is committed to protecting your privacy and complying with applicable data protection regulations including GDPR.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

