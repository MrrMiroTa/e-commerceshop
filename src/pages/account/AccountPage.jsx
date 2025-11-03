import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/contexts';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const AccountPage = () => {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <User className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Account Access Required
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Please sign in to view your account information.
            </p>
          </div>
          <div>
            <Link
              to="/login"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Account</h1>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign Out
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Information Card */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Name:</span>
                    <span className="ml-2 text-sm text-gray-900 dark:text-white">{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email:</span>
                    <span className="ml-2 text-sm text-gray-900 dark:text-white">{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone:</span>
                    <span className="ml-2 text-sm text-gray-900 dark:text-white">{user.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Address:</span>
                    <span className="ml-2 text-sm text-gray-900 dark:text-white">{user.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Member since:</span>
                    <span className="ml-2 text-sm text-gray-900 dark:text-white">{user.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Account Actions Card */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Actions</h2>
                <div className="space-y-3">
                  <Link
                    to="/account/edit-profile"
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition block"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/account/order-history"
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition block"
                  >
                    Order History
                  </Link>
                  <Link
                    to="/account/wishlist"
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition block"
                  >
                    Wishlist
                  </Link>
                  <Link
                    to="/account/change-password"
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition block"
                  >
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;