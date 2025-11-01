import React, { useState, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import NewArrivalsPage from './components/NewArrivalsPage';
import ShopAllPage from './components/ShopAllPage';
import CollectionsPage from './components/CollectionsPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import ShippingReturnsPage from './components/ShippingReturnsPage';
import TermsPrivacyPage from './components/TermsPrivacyPage';
import CartDrawer from './components/CartDrawer';
import { AppContext, CartContext } from './contexts/contexts';
import { MOCK_PRODUCTS } from './components/mockData';

// --- 3. Cart Provider and Logic ---

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartTotal = useMemo(() =>
    cartItems.reduce((total, item) => total + (item.product.price * item.qty), 0),
    [cartItems]
  );

  const totalItems = useMemo(() =>
    cartItems.reduce((total, item) => total + item.qty, 0),
    [cartItems]
  );

  const addToCart = (product, quantity = 1) => {
    setIsLoading(true);
    setTimeout(() => { // Simulate API latency
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === product.id ? { ...item, qty: item.qty + quantity } : item
          );
        } else {
          return [...prevItems, { id: product.id, qty: quantity, product }];
        }
      });
      setIsCartOpen(true);
      setIsLoading(false);
    }, 500);
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const checkout = () => {
      // Use a custom message box instead of alert()
      const message = `Checkout simulation complete! Total: $${cartTotal.toFixed(2)}. This data would now be sent to your Laravel API for processing.`;
      console.log(message);
      // Using simple alert for quick demo, but this is a large, tap-friendly modal in a real app.
      alert(message);
      setCartItems([]);
      setIsCartOpen(false);
  };

  const value = {
    cartItems,
    cartTotal,
    totalItems,
    isCartOpen,
    isLoading,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    checkout
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};






// --- 7. Main Application Component ---

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract product ID from URL if on product page
  const productId = location.pathname.startsWith('/product/') ? location.pathname.split('/product/')[1] : null;
  const selectedProduct = productId ? MOCK_PRODUCTS.find(p => p.id === parseInt(productId)) : null;

  const navigateToHome = () => navigate('/');
  const navigateToProduct = (product) => navigate(`/product/${product.id}`);
  const navigateToNewArrivals = () => navigate('/new-arrivals');
  const navigateToShopAll = () => navigate('/shop-all');
  const navigateToCollections = () => navigate('/collections');
  const navigateToContact = () => navigate('/contact');

  const appValue = {
    selectedProduct,
    navigateToHome,
    navigateToProduct,
    navigateToNewArrivals,
    navigateToShopAll,
    navigateToCollections,
    navigateToContact
  };

  return (
    <AppContext.Provider value={appValue}>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans antialiased">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/shop-all" element={<ShopAllPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
            <Route path="/terms-privacy" element={<TermsPrivacyPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </AppContext.Provider>
  );
};

export default App;
