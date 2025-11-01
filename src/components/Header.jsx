import React, { useState } from "react";
import { ShoppingCart, User, Search, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/contexts';
import Menu from "./Menu";

const Header =  () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop-all?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

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
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-3 rounded-full hover:bg-gray-100 transition"
            title="Search"
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
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

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-100 bg-white px-4 sm:px-6 lg:px-8 py-4">
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
              >
                <Search size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};
export default Header;
