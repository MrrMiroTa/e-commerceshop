import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/contexts';
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { MOCK_WISHLIST } from '../../contexts/contexts';

const WishlistPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-6">
              <button
                onClick={() => navigate('/account')}
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Account
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Wishlist</h1>
            </div>

            {MOCK_WISHLIST.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Your wishlist is empty</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Start adding items you love to your wishlist.
                </p>
                <button
                  onClick={() => navigate('/shop-all')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_WISHLIST.map((item) => (
                  <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                      <Heart className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex space-x-2">
                      <button className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                      <button className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;