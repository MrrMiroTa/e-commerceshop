import { createContext, useContext } from 'react';

export const AppContext = createContext();
export const CartContext = createContext();
export const UserContext = createContext();

export const useApp = () => useContext(AppContext);
export const useCart = () => useContext(CartContext);
export const useUser = () => useContext(UserContext);

// Mock data for orders and wishlist
export const MOCK_ORDERS = [
  {
    id: 1,
    date: '2024-10-15',
    status: 'Delivered',
    total: 89.99,
    items: [
      { id: 1, name: 'Classic T-Shirt', quantity: 2, price: 29.99 },
      { id: 2, name: 'Denim Jeans', quantity: 1, price: 59.99 }
    ]
  },
  {
    id: 2,
    date: '2024-09-28',
    status: 'Shipped',
    total: 45.50,
    items: [
      { id: 3, name: 'Running Shoes', quantity: 1, price: 45.50 }
    ]
  }
];

export const MOCK_WISHLIST = [
  { id: 1, name: 'Leather Jacket', price: 199.99, image: '/api/placeholder/300/300' },
  { id: 2, name: 'Wireless Headphones', price: 149.99, image: '/api/placeholder/300/300' },
  { id: 3, name: 'Smart Watch', price: 299.99, image: '/api/placeholder/300/300' }
];