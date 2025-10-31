import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for secure and convenient checkout."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is also available."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be unused and in original packaging. Some restrictions apply to certain products."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also check your order status by logging into your account."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic. We work directly with authorized manufacturers and distributors to ensure product authenticity."
    },
    {
      question: "Do you offer size exchanges?",
      answer: "Absolutely! If you need a different size, contact our customer service within 30 days of delivery, and we'll arrange a free size exchange."
    },
    {
      question: "How do I care for my products?",
      answer: "Care instructions are included with each product. Generally, we recommend following the care labels and avoiding harsh chemicals or excessive heat."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer complimentary gift wrapping for all orders. You can select this option during checkout."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our products and services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-medium text-gray-900 pr-4">
                {faq.question}
              </h3>
              {openItems.has(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openItems.has(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Our customer service team is here to help.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
};

export default FAQPage;