import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, useUser } from '../contexts/contexts';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { createOrder } from './api';
import { ShoppingCart, CreditCard, User, MapPin, Phone, Mail, Truck } from 'lucide-react';

const CheckoutPage = () => {
  const { cartItems, cartTotal, setCartItems } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate('/login');
      return;
    }

    // Check if cart is empty
    if (cartItems.length === 0) {
      navigate('/');
      return;
    }
  }, [user, cartItems, navigate]);

  const handlePayPalSuccess = async (details) => {
    setIsLoading(true);
    try {
      // Prepare order data
      const orderData = {
        items: cartItems.map(item => ({
          product_id: item.product.id,
          quantity: item.qty,
          price: item.product.price
        })),
        total: cartTotal,
        paypal_transaction_id: details.id,
        status: 'completed'
      };

      // Create order via API
      await createOrder(orderData);

      // Clear cart
      setCartItems([]);

      // Redirect to success page or account
      alert('Payment successful! Order created.');
      navigate('/account');
    } catch (error) {
      console.error('Order creation failed:', error);
      alert('Payment successful but order creation failed. Please contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayPalError = (error) => {
    console.error('PayPal error:', error);
    alert('Payment failed. Please try again.');
  };

  if (!user || cartItems.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <ShoppingCart className="w-8 h-8 mr-3" />
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.product.imageUrl || '/api/placeholder/100/100'}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.qty}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ${(item.product.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Customer Information
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{user.phone || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{user.address || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{user.location || 'Not provided'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Payment
          </h2>

          <PayPalScriptProvider options={{
            "client-id": "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R", // Sandbox client ID
            currency: "USD"
          }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: cartTotal.toFixed(2),
                    },
                  }],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(handlePayPalSuccess);
              }}
              onError={handlePayPalError}
              disabled={isLoading}
            />
          </PayPalScriptProvider>

          {isLoading && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                Processing payment...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;