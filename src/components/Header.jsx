import React from "react";
import { ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/contexts';
import Menu from "./Menu";

const Header =  () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-black tracking-widest text-gray-900 uppercase hover:text-gray-700 transition"
          >
            UTA-SHOP
          </Link>

          {/* Navigation Menu (Hidden on mobile) */}
          <Menu/>
        </div>

        {/* Icons (Sufficient touch targets on all devices) */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            className="p-3 rounded-full hover:bg-gray-100 transition"
            title="Search"
          >
            <Search size={20} />
          </button>

          <button
            className="p-3 rounded-full hover:bg-gray-100 transition"
            title="User Account"
          >
            <User size={20} />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="p-3 rounded-full hover:bg-gray-100 transition relative"
            title="Shopping Cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-gray-900 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4 ring-2 ring-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
