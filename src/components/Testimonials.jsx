import React from 'react';
import { Star } from 'lucide-react';
import { MOCK_TESTIMONIALS } from './mockData';

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition">
        <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i + testimonial.rating} size={20} className="text-gray-300" />
            ))}
        </div>
        <p className="flex-grow text-gray-700 italic mb-4 text-base">"{testimonial.text}"</p>
        <p className="font-semibold text-gray-900 mt-auto">— {testimonial.author}</p>
    </div>
);

const Testimonials = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">What Our Customers Say</h2>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-10 sm:mb-12">Trusted quality, loved by thousands.</p>

        {/* Responsive grid for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MOCK_TESTIMONIALS.map(t => (
                <TestimonialCard key={t.id} testimonial={t} />
            ))}
        </div>
    </div>
);

export default Testimonials;