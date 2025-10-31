import React from 'react';
import { Truck, RotateCcw, Clock, MapPin } from 'lucide-react';

const ShippingReturnsPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Returns</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about shipping and our return policy
        </p>
      </div>

      {/* Shipping Information */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <Truck className="w-8 h-8 mr-3" />
          Shipping Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Shipping</h3>
            <div className="space-y-2 text-gray-600">
              <p><strong>Delivery Time:</strong> 3-5 business days</p>
              <p><strong>Cost:</strong> Free on orders over $50</p>
              <p><strong>$9.99 on orders under $50</strong></p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Express Shipping</h3>
            <div className="space-y-2 text-gray-600">
              <p><strong>Delivery Time:</strong> 1-2 business days</p>
              <p><strong>Cost:</strong> $19.99</p>
              <p><strong>Available for most locations</strong></p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">International Shipping</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Delivery Times</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Canada: 5-7 business days</li>
                <li>• Europe: 7-10 business days</li>
                <li>• Asia: 10-14 business days</li>
                <li>• Other regions: 10-21 business days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Customs & Duties</h4>
              <p className="text-gray-600 text-sm">
                International orders may be subject to customs fees, import duties, and taxes.
                These fees are the responsibility of the recipient and are not included in the order total.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Returns Policy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <RotateCcw className="w-8 h-8 mr-3" />
          Returns & Exchanges
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Return Window</h3>
              <p className="text-gray-600">
                You have 30 days from the date of delivery to initiate a return. Items must be unused,
                in original packaging, and with all tags attached.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">What's Covered</h3>
            <ul className="text-green-800 space-y-2">
              <li>• Defective or damaged items</li>
              <li>• Wrong item shipped</li>
              <li>• Size exchanges (clothing)</li>
              <li>• Change of mind returns</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">What's Not Covered</h3>
            <ul className="text-red-800 space-y-2">
              <li>• Items damaged by misuse</li>
              <li>• Items without original packaging</li>
              <li>• Final sale items</li>
              <li>• Personalized/custom items</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How to Return */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Start a Return</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Contact Customer Service</h3>
              <p className="text-gray-600">Email us at returns@uta-shop.com or call 1-800-UTA-HELP with your order number.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Receive Return Authorization</h3>
              <p className="text-gray-600">We'll provide a return authorization number and prepaid shipping label.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Pack and Ship</h3>
              <p className="text-gray-600">Pack the item securely in its original packaging and use the provided shipping label.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Refund Processing</h3>
              <p className="text-gray-600">Once received, we'll process your refund within 3-5 business days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <MapPin className="w-12 h-12 text-gray-900 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-6">
          Our customer service team is here to help with any shipping or return questions.
        </p>
        <div className="space-y-2">
          <p className="text-gray-900 font-medium">Email: support@uta-shop.com</p>
          <p className="text-gray-900 font-medium">Phone: 1-800-UTA-HELP</p>
        </div>
      </div>
    </main>
  );
};

export default ShippingReturnsPage;