import React from 'react';
import { FileText, Shield, Lock } from 'lucide-react';

const TermsPrivacyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service & Privacy Policy</h1>
        <p className="text-xl text-gray-600">
          Important information about using our services and how we protect your data
        </p>
      </div>

      {/* Terms of Service */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <FileText className="w-8 h-8 text-gray-900 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using UTA-Shop, you accept and agree to be bound by the terms and provision
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Use License</h3>
            <p className="text-gray-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on UTA-Shop for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. User Account</h3>
            <p className="text-gray-600 leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete,
              and current at all times. You are responsible for safeguarding the password and for all activities
              that occur under your account.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Products and Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              All products are subject to availability. We reserve the right to discontinue any product at any time.
              Prices for our products are subject to change without notice. We reserve the right at any time to modify
              or discontinue the Service (or any part or content thereof) without notice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Billing and Account Information</h3>
            <p className="text-gray-600 leading-relaxed">
              You agree to provide current, complete, and accurate purchase and account information for all purchases
              made at our store. You agree to promptly update your account and other information, including your email
              address and credit card numbers and expiration dates, so that we can complete your transactions and contact
              you as needed.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-gray-900 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect information you provide directly to us, such as when you create an account, make a purchase,
              or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Name, email address, and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Order history and preferences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
            <p className="text-gray-600 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Provide customer service and support</li>
              <li>Send you important updates about your orders</li>
              <li>Improve our products and services</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h3>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share your information with trusted third parties
              who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
            <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Correct any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cookies */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <Lock className="w-8 h-8 text-gray-900 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Cookies Policy</h2>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic,
            and understand where our visitors are coming from. By using our website, you consent to the use of cookies
            in accordance with this policy.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed">
            You can control and manage cookies through your browser settings. However, disabling certain cookies
            may affect the functionality of our website.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Policies?</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms of Service or Privacy Policy, please contact us.
        </p>
        <div className="space-y-2">
          <p className="text-gray-900 font-medium">Email: legal@uta-shop.com</p>
          <p className="text-gray-900 font-medium">Phone: 1-800-UTA-HELP</p>
        </div>
      </div>
    </main>
  );
};

export default TermsPrivacyPage;