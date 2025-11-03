import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/contexts';

const CartPage = () => {
    const {
        cartItems,
        cartTotal,
        updateQuantity,
        removeFromCart,
        setIsCartOpen
    } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                        <ShoppingCart className="w-8 h-8 mr-3" />
                        Your Cart
                    </h1>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center mt-12 text-gray-500">
                        <ShoppingCart size={64} className="mx-auto mb-4"/>
                        <p className="text-lg">Your cart is empty.</p>
                        <button
                            onClick={() => navigate('/')}
                            className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Cart Items */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-start space-x-4 border-b pb-4 last:border-b-0">
                                        <img
                                            src={item.product.imageUrl}
                                            alt={item.product.name}
                                            className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                            onError={(e) => e.target.src = 'https://placehold.co/80x80/F3F4F6/9CA3AF?text=Item'}
                                        />
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.product.name}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">${item.product.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex flex-col items-end space-y-2">
                                            {/* Quantity Control */}
                                            <div className="flex items-center border rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                                                    className="p-2 hover:bg-gray-50 text-gray-600 transition"
                                                >-</button>
                                                <span className="px-3 text-sm">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                                                    className="p-2 hover:bg-gray-50 text-gray-600 transition"
                                                >+</button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-sm text-red-500 hover:text-red-700 transition"
                                            >Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Summary and Checkout */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">Subtotal:</span>
                                <span className="text-2xl font-extrabold text-gray-900 dark:text-white">${cartTotal.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full py-3 bg-gray-900 text-white text-lg font-medium rounded-xl hover:bg-gray-700 transition duration-300 shadow-md active:scale-[0.99] flex items-center justify-center"
                            >
                                Proceed to Checkout
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;