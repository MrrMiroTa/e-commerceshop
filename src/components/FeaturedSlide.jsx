import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/contexts';
import { getFeaturedProduct } from './api';
import { MOCK_PRODUCTS } from './mockData';

const FeaturedSlide = () => {
    const { navigateToProduct } = useApp();
    const [featuredProduct, setFeaturedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFeaturedProduct = async () => {
            try {
                setLoading(true);
                setError('');
                const product = await getFeaturedProduct();
                setFeaturedProduct(product);
            } catch (err) {
                console.log('API failed, using mock data for featured product:', err.message);
                // Use the first product from mock data as featured
                setFeaturedProduct(MOCK_PRODUCTS[0]);
                setError(''); // Clear error since we're using mock data
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProduct();
    }, []);

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
                <div className="bg-gray-100 p-6 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center shadow-inner">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3 mb-6"></div>
                            <div className="h-10 bg-gray-300 rounded w-32"></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center w-full">
                        <div className="w-full max-w-sm h-64 bg-gray-300 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !featuredProduct) {
        return null; // Don't show the featured slide if there's an error or no product
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="bg-gray-100 p-6 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center shadow-inner">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
                    <h2 className="text-xs font-semibold uppercase text-gray-600 mb-2">Featured Collection</h2>
                    <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {featuredProduct.name}
                    </h3>
                    <p className="text-gray-700 mb-6 max-w-md">
                        {featuredProduct.description}
                    </p>
                    <button
                        onClick={() => navigateToProduct(featuredProduct)}
                        className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition active:scale-[0.98]"
                    >
                        Explore Now
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center w-full">
                    <img
                        src={featuredProduct.imageUrl}
                        alt={featuredProduct.name}
                        className="rounded-xl shadow-2xl w-full max-w-sm transition duration-500 hover:scale-[1.03] object-cover"
                        onError={(e) => e.target.src = 'https://placehold.co/600x600/F3F4F6/9CA3AF?text=Image+Not+Found'}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturedSlide;