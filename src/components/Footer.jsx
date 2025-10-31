import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16 py-10 sm:py-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Footer sections stack on mobile (col-span-2 on mobile for the last section) */}
        <div>
          <h4 className="font-semibold text-white mb-4">SHOP</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop-all" className="hover:text-white transition">All Products</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
            <li><Link to="/collections" className="hover:text-white transition">Collections</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition">About UTA-Shop</Link></li>
            {/* <li><a href="#" className="hover:text-white transition">Careers</a></li> */}
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">SUPPORT</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/shipping-returns" className="hover:text-white transition">Shipping & Returns</Link></li>
            <li><Link to="/terms-privacy" className="hover:text-white transition">Terms & Privacy</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-semibold text-white mb-4">CONNECT</h4>
          <p className="text-sm mb-4">Join our community for exclusive deals.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 border-none rounded-l-lg focus:ring-2 focus:ring-white bg-gray-800 text-white flex-grow"
            />
            <button className="bg-white text-gray-900 p-3 rounded-r-lg font-medium hover:bg-gray-200 transition active:scale-[0.98]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-6 mx-auto max-w-7xl">
        &copy; 2025 UTA-Shop. All rights reserved. Built with React & Laravel.
      </div>
    </footer>
);

export default Footer;