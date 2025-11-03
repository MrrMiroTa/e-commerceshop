import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getNewArrivals } from './api';
import { MOCK_PRODUCTS } from './mockData';

const NewArrivalsPage = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true);
        setError('');
        const products = await getNewArrivals();
        setNewArrivals(products);
      } catch (err) {
        console.log('API failed, using mock data for new arrivals:', err.message);
        // Use mock data sorted by ID descending (newest first)
        const sortedMock = [...MOCK_PRODUCTS].sort((a, b) => b.id - a.id);
        setNewArrivals(sortedMock);
        setError(''); // Clear error since we're using mock data
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] text-center">
        <div>Loading new arrivals...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] text-center">
        <div className="text-red-500">{error}</div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
        <p className="text-xl text-gray-600">Discover our latest collection of premium products</p>
      </div>

      {newArrivals.length > 0 ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No new arrivals at the moment. Check back soon!</p>
        </div>
      )}
    </main>
  );
};

export default NewArrivalsPage;