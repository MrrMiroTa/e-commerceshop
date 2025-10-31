import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from './contexts';

const CartDrawer = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartTotal,
        updateQuantity,
        removeFromCart,
        checkout
    } = useCart();

    const handleCheckout = () => { checkout(); };

    // Tailwind classes for drawer visibility and width
    const visibilityClass = isCartOpen
        ? 'translate-x-0'
        : 'translate-x-full';

    const backdropClass = isCartOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none';

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${backdropClass}`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Drawer Panel (w-full on mobile, md:w-96 on medium/desktop screens) */}
            <div
                className={`fixed top-0 right-0 w-full md:w-96 max-w-full h-full bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${visibilityClass}`}
            >
                {/* Header */}
                <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition">
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="text-center mt-12 text-gray-500">
                            <ShoppingCart size={48} className="mx-auto mb-4"/>
                            <p className="text-lg">Your cart is empty.</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="flex items-start space-x-4 border-b pb-4 last:border-b-0">
                                <img
                                    src={item.product.imageUrl}
                                    alt={item.product.name}
                                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                                    onError={(e) => e.target.src = 'https://placehold.co/64x64/F3F4F6/9CA3AF?text=Item'}
                                />
                                <div className="flex-grow">
                                    <h3 className="text-base font-medium text-gray-900 truncate">{item.product.name}</h3>
                                    <p className="text-sm text-gray-600">${item.product.price.toFixed(2)}</p>
                                </div>
                                <div className="flex flex-col items-end space-y-1">
                                    {/* Quantity Control (Touch friendly buttons) */}
                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.qty - 1)}
                                            className="p-1 px-3 hover:bg-gray-50 text-gray-600 transition"
                                        >-</button>
                                        <span className="px-2 text-sm">{item.qty}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.qty + 1)}
                                            className="p-1 px-3 hover:bg-gray-50 text-gray-600 transition"
                                        >+</button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xs text-red-500 hover:text-red-700 transition"
                                    >Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / Summary */}
                <div className="p-6 border-t sticky bottom-0 bg-white shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-gray-900">Subtotal:</span>
                        <span className="text-2xl font-extrabold text-gray-900">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        disabled={cartItems.length === 0}
                        className="w-full py-3 bg-gray-900 text-white text-lg font-medium rounded-xl hover:bg-gray-700 transition duration-300 disabled:opacity-50 shadow-md active:scale-[0.99]"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;