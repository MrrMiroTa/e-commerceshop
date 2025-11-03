import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="hidden lg:flex space-x-8 text-sm font-medium text-gray-600">
      <Link
        to="/new-arrivals"
        className="hover:text-gray-900 transition font-medium"
      >
        New Arrivals
      </Link>
      <Link
        to="/shop-all"
        className="hover:text-gray-900 transition"
      >
        Shop All
      </Link>
      <Link
        to="/collections"
        className="hover:text-gray-900 transition"
      >
        Collections
      </Link>
      <Link
        to="/checkout"
        className="hover:text-gray-900 transition"
      >
        Checkout
      </Link>
      <Link
        to="/contact"
        className="hover:text-gray-900 transition"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Menu;