import React from 'react';

const Hero = () => (
    <div className="relative bg-gray-900 text-white h-[45vh] sm:h-[60vh] flex items-center justify-center overflow-hidden rounded-b-3xl mb-12 shadow-xl">
        <div className="w-full h-full absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: "url('https://x-shop-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.340692cb.png&w=2048&q=75')"}}></div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
                The Future of Minimal Design
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                Curated essentials for the modern lifestyle. Shop our exclusive collection today.
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full text-lg hover:bg-gray-600 transition duration-300 shadow-lg active:scale-[0.98]">
                Shop New Arrivals
            </button>
        </div>
    </div>
);

export default Hero;