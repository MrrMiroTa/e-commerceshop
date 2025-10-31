// --- API Configuration ---
const API_BASE_URL = 'http://127.0.0.1:8000';

// --- API Functions ---
const getProducts = async (page = 1, search = '') => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No authentication token found');
  }

  let url = `${API_BASE_URL}/api/products?page=${page}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Authentication failed');
    }
    throw new Error('Failed to fetch products');
  }

  return await response.json();
};

const getProduct = async (productId) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No authentication token found');
  }

  // console.log('Fetching product with ID:', productId); // Debug log

  const response = await fetch(`${API_BASE_URL}/api/products/${productId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  });

  console.log('Product API response status:', response.status); // Debug log

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Authentication failed');
    }
    if (response.status === 404) {
      throw new Error('Product not found');
    }
    throw new Error('Failed to fetch product');
  }

  const result = await response.json();
  console.log('Product API result:', result); // Debug log
  console.log('Full result object:', JSON.stringify(result, null, 2)); // Debug log

  return result;
};

const getAllProducts = async () => {
  const allProducts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const result = await getProducts(page);
    if (result.status === 'success' && result.data.data.length > 0) {
      // Parse price to number if it's a string and map image field
      const productsWithParsedPrice = result.data.data.map(product => ({
        ...product,
        price: parseFloat(product.price),
        stock: product.stock || 10, // Add default stock if not provided
        imageUrl: product.image ? `${API_BASE_URL}/storage/${product.image}` : product.image_url || product.imageUrl
      }));
      allProducts.push(...productsWithParsedPrice);
      if (result.data.current_page < result.data.last_page) {
        page++;
      } else {
        hasMore = false;
      }
    } else {
      hasMore = false;
    }
  }

  return allProducts;
};

const getNewArrivals = async () => {
  const allProducts = await getAllProducts();
  // Sort by ID descending (assuming higher ID means newer)
  return allProducts.sort((a, b) => b.id - a.id);
};

const getProductsByCategory = async (category) => {
  const allProducts = await getAllProducts();
  return allProducts.filter(product => product.category === category);
};

const getAllCategories = async () => {
  const allProducts = await getAllProducts();
  const categories = [...new Set(allProducts.map(product => product.category))];
  return categories;
};

const getTestimonials = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`${API_BASE_URL}/api/testimonials`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Authentication failed');
    }
    throw new Error('Failed to fetch testimonials');
  }

  const result = await response.json();
  return result.data || result.testimonials || [];
};

const getFeaturedProduct = async () => {
  const allProducts = await getAllProducts();
  // Return the first product as featured, or you could implement logic to get a specific featured product
  return allProducts[11];
};

export { getProducts, getProduct, getAllProducts, getNewArrivals, getProductsByCategory, getAllCategories, getTestimonials, getFeaturedProduct };