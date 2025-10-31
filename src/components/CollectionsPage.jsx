import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getAllProducts, getAllCategories } from './api';

const CollectionsPage = () => {
  const [collections, setCollections] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        setError('');
        const allProducts = await getAllProducts();
        const categories = await getAllCategories();

        const collectionsData = categories.reduce((acc, category) => {
          acc[category] = allProducts.filter(product => product.category === category);
          return acc;
        }, {});

        setCollections(collectionsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] text-center">
        <div>Loading collections...</div>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Collections</h1>
        <p className="text-xl text-gray-600">Explore our curated collections by category</p>
      </div>

      {Object.entries(collections).map(([category, products]) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">{category}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
            {products.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default CollectionsPage;