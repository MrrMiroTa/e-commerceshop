import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
import { getAllProducts, getProducts } from './api';

const ShopAllPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');
        if (searchQuery) {
          // If there's a search query, fetch products with search
          const result = await getProducts(1, searchQuery);
          if (result.status === 'success' && result.data.data.length > 0) {
            const productsWithParsedPrice = result.data.data.map(product => ({
              ...product,
              price: parseFloat(product.price),
              stock: product.stock || 10,
              imageUrl: product.image ? `${import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'}/storage/${product.image}` : product.image_url || product.imageUrl
            }));
            setProducts(productsWithParsedPrice);
          } else {
            setProducts([]);
          }
        } else {
          // Otherwise, fetch all products
          const allProducts = await getAllProducts();
          setProducts(allProducts);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
        </h1>
        <p className="text-xl text-gray-600">
          {searchQuery ? `Found ${products.length} product${products.length !== 1 ? 's' : ''}` : 'Browse our complete collection of premium products'}
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {searchQuery && products.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching "{searchQuery}"</p>
          <p className="text-gray-400 mt-2">Try a different search term</p>
        </div>
      )}
    </main>
  );
};

export default ShopAllPage;