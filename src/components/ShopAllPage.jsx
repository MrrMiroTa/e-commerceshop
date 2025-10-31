import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getAllProducts } from './api';

const ShopAllPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        setError('');
        const allProducts = await getAllProducts();
        setProducts(allProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] text-center">
        <div>Loading products...</div>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>
        <p className="text-xl text-gray-600">Browse our complete collection of premium products</p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ShopAllPage;