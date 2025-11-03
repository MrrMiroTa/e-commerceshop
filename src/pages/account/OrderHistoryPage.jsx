import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/contexts';
import { ArrowLeft, Package, Calendar, DollarSign } from 'lucide-react';
import { MOCK_ORDERS } from '../../contexts/contexts';

const OrderHistoryPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order History</h1>
            </div>

            {MOCK_ORDERS.length === 0 ? (
              <div className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No orders yet</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  When you place orders, they will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Order #{order.id}
                        </span>
                      </div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(order.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Items:</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              {item.name} (x{item.quantity})
                            </span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
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

export default OrderHistoryPage;