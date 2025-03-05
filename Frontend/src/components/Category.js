import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categorySlug } = useParams();

  useEffect(() => {
    fetchCategoryProducts();
  }, [categorySlug]);

  const fetchCategoryProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products/get-product', {
        params: { category: categorySlug }
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  const handleAddToCart = (product) => {
    // Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center capitalize">
        {categorySlug} Products
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.imageUrl || '/api/placeholder/300/300?text=Product'} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => handleAddToCart(product)} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;