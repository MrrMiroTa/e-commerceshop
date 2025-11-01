import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Loader2 } from 'lucide-react';
import { useApp, useCart } from '../contexts/contexts';
import { getProduct } from './api';

const API_BASE_URL = 'http://127.0.0.1:8000';

const ProductPage = () => {
     const { navigateToHome } = useApp();
     const { addToCart, isLoading } = useCart();
     const { id } = useParams();
     const [product, setProduct] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState('');
     const [quantity, setQuantity] = useState(1);

     useEffect(() => {
         const fetchProduct = async () => {
             try {
                 setLoading(true);
                 setError('');
                 const result = await getProduct(id);
                //  console.log('Product API result:', result); // Debug log
                //  console.log('Result status:', result.status); // Debug log
                //  console.log('Result data:', result.data); // Debug log
                //  console.log('Result product:', result.product); // Debug log

                 if (result.status === 'success' && (result.data || result.product)) {
                     const productInfo = result.data || result.product;
                     const productData = {
                         ...productInfo,
                         price: parseFloat(productInfo.price),
                         stock: productInfo.stock || 10, // Add default stock if not provided
                         imageUrl: productInfo.image ? `${API_BASE_URL}/storage/${productInfo.image}` : productInfo.image_url || productInfo.imageUrl
                     };
                    //  console.log('Processed product data:', productData); // Debug log
                     setProduct(productData);
                 } else {
                     console.log('Setting error: Product not found'); // Debug log
                     setError('Product not found');
                 }
             } catch (err) {
                 console.error('Error fetching product:', err); // Debug log
                 setError(err.message);
             } finally {
                 setLoading(false);
             }
         };

         if (id) {
             fetchProduct();
         }
     }, [id]);

     if (loading) {
         return (
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                 <div>Loading product...</div>
             </div>
         );
     }

     if (error || !product) {
         return (
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                 <p className="text-xl text-red-500">{error || 'Product not found'}. <button onClick={navigateToHome} className="text-gray-900 font-medium hover:underline">Go Home</button></p>
             </div>
         );
     }

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 min-h-[70vh]">
             <button
                onClick={navigateToHome}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition p-2 -ml-2 rounded-lg"
            >
                <ArrowLeft size={16} className="mr-2"/> Back to Shopping
            </button>

            {/* Image and details stack vertically on mobile (grid-cols-1) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Gallery */}
                <div>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full rounded-xl shadow-2xl border border-gray-100 object-cover"
                        onError={(e) => e.target.src = 'https://placehold.co/600x600/F3F4F6/9CA3AF?text=Image+Not+Found'}
                    />
                </div>

                {/* Details and Actions */}
                <div className="flex flex-col justify-start">
                    <h2 className="text-sm font-semibold uppercase text-gray-500 mb-2">{product.category}</h2>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

                    <div className="border-t border-b py-6 mb-6">
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed text-base">{product.description}</p>
                    </div>

                    <div className="flex items-center space-x-4 mb-8">
                        <label htmlFor="quantity" className="text-gray-700 font-medium">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            min="1"
                            max={product.stock}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            // Larger padding for better mobile touch target
                            className="w-20 p-3 border border-gray-300 rounded-lg text-center focus:ring-gray-900 focus:border-gray-900"
                        />
                        <span className="text-sm text-gray-500">({product.stock} in stock)</span>
                    </div>

                    <button
                        onClick={() => addToCart(product, quantity)}
                        disabled={isLoading || product.stock <= 0}
                        className="w-full py-4 bg-gray-900 text-white text-xl font-medium rounded-xl hover:bg-gray-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg active:scale-[0.99]"
                    >
                        {isLoading ? <Loader2 size={24} className="animate-spin" /> : (
                            <>
                                <ShoppingCart size={24} />
                                <span>Add to Cart</span>
                            </>
                        )}
                    </button>
                    {product.stock === 0 && (
                        <p className="text-center text-red-500 mt-2 font-medium">Out of Stock</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProductPage;