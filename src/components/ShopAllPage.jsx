import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import { getAllProducts, getProducts } from "./api";
import { MOCK_PRODUCTS } from "./mockData";

const ShopAllPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");
        if (searchQuery) {
          // If there's a search query, fetch products with search
          const result = await getProducts(1, searchQuery);
          if (result.status === "success" && result.data.data.length > 0) {
            const productsWithParsedPrice = result.data.data.map((product) => ({
              ...product,
              price: parseFloat(product.price),
              stock: product.stock || 10,
              imageUrl: product.image
                ? `${
                    import.meta.env.API_BASE_URL || "http://127.0.0.1:8000"
                  }/storage/${product.image}`
                : product.image_url || product.imageUrl,
            }));
            setProducts(productsWithParsedPrice);
          } else {
            // If API fails or no results, use mock data filtered by search
            const filteredMock = MOCK_PRODUCTS.filter(product =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              product.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setProducts(filteredMock);
          }
        } else {
          // Otherwise, fetch all products
          try {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
          } catch (apiError) {
            // If API fails, use mock data
            console.log('API failed, using mock data:', apiError.message);
            setProducts(MOCK_PRODUCTS);
          }
        }
      } catch (err) {
        console.log('Error fetching products, using mock data:', err.message);
        // If there's an error, use mock data
        if (searchQuery) {
          const filteredMock = MOCK_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setProducts(filteredMock);
        } else {
          setProducts(MOCK_PRODUCTS);
        }
        setError(""); // Clear error since we're using mock data
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
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : "Shop All Products"}
        </h1>
        <p className="text-xl text-gray-600">
          {searchQuery
            ? `Found ${products.length} product${
                products.length !== 1 ? "s" : ""
              }`
            : "Browse our complete collection of premium products"}
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {searchQuery && products.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found matching "{searchQuery}"
          </p>
          <p className="text-gray-400 mt-2">Try a different search term</p>
        </div>
      )}
    </main>
  );
};

export default ShopAllPage;
