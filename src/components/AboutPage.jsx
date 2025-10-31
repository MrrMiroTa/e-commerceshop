import React from 'react';
import { Users, Award, Heart, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About UTA-Shop</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the finest curated products that combine quality, style, and sustainability.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Target className="w-16 h-16 text-gray-900 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To provide exceptional products that enhance your lifestyle while maintaining the highest standards of quality,
              sustainability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <Award className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
          <p className="text-gray-600">
            Every product in our collection undergoes rigorous quality testing to ensure it meets our high standards.
          </p>
        </div>
        <div className="text-center">
          <Heart className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
          <p className="text-gray-600">
            Your satisfaction is our priority. We're committed to providing excellent service and support.
          </p>
        </div>
        <div className="text-center">
          <Users className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
          <p className="text-gray-600">
            We believe in building lasting relationships with our customers and contributing to our community.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            Founded in 2020, UTA-Shop began as a small passion project with a simple goal: to create a shopping
            experience that felt personal, authentic, and truly valuable.
          </p>
          <p className="mb-4">
            What started as a curated selection of carefully chosen products has grown into a trusted destination
            for quality goods. We work directly with artisans, manufacturers, and designers who share our commitment
            to excellence and ethical practices.
          </p>
          <p>
            Today, we're proud to serve thousands of customers who trust us for their shopping needs. Every product
            we offer is selected with care, ensuring it meets our standards for quality, design, and value.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
          <div className="text-gray-600">Products</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
          <div className="text-gray-600">Partners</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;