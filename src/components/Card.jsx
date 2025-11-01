import React from 'react';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useCart, useApp } from './../contexts/contexts';

const Card = ({ product }) => {
  const { addToCart, isLoading } = useCart();
  const { navigateToProduct } = useApp();

  if (!product) return null;

  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/400x400/F3F4F6/9CA3AF?text=Product';
  };

  return (
    <div
      className="bg-white p-4 group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-[1.02] border border-gray-100 flex flex-col"
      onClick={() => navigateToProduct(product)}
    >
      {/* Product Image Area */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-lg mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-90"
          onError={handleImageError}
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.category}</p>
      </div>

      {/* Price and Action */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>

        {/* Larger touch target for the button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          disabled={isLoading || product.stock <= 0}
          className="p-3 bg-gray-900 text-white rounded-full transition-colors duration-300 hover:bg-gray-700 active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          title="Add to Cart"
        >
          {isLoading ? <Loader2 size={20} className="animate-spin" /> : <ShoppingCart size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Card;