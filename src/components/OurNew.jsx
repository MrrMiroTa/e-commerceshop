import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getNewArrivals } from './api';
import { MOCK_PRODUCTS } from './mockData';

const OurNew = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        setLoading(true);
        setError('');
        const newProducts = await getNewArrivals();
        // Limit to first 4 products for the homepage section
        setProducts(newProducts.slice(0, 4));
      } catch (err) {
        console.log('API failed, using mock data for homepage:', err.message);
        // Use first 4 mock products for homepage section
        const sortedMock = [...MOCK_PRODUCTS].sort((a, b) => b.id - a.id);
        setProducts(sortedMock.slice(0, 4));
        setError(''); // Clear error since we're using mock data
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <div>Loading newest essentials...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          New Jersey & Shoe
        </h2>
        <p className="mt-2 text-base sm:text-xl text-gray-500">
          Fresh designs, timeless quality.
        </p>
      </div>

      {/* Fully responsive product grid:
        1 column on base, 2 on small screens, and now 4 on large screens (lg: and xl:).
      */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OurNew;