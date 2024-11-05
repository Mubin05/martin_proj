
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card bg-white rounded-lg shadow-xl transition-transform duration-30 hover:shadow-xl hover:scale-20 flex flex-col overflow-hidden">
    
    <div className="relative pb-[56.25%] group">
      <img 
        src={product.image} 
        alt={product.name} 
        
        className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-30"
      />
      
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-30"></div>
    </div>
    
    
    <div className="p-4 flex-grow flex flex-col justify-between">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-3">{product.name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-gray-800">₹{product.price.toFixed(2)}</p>
        <div className="flex items-center ">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-large font-bold text-gray-600">{product.rating}</span>
        </div>
      </div>
    </div>

    
    <button className="w-full bg-[#AF8F0F] text-white py-2 px-4 hover:bg-[#6b5707] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
