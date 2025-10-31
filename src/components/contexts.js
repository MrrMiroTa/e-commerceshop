import { createContext, useContext } from 'react';

export const AppContext = createContext();
export const CartContext = createContext();

export const useApp = () => useContext(AppContext);
export const useCart = () => useContext(CartContext);