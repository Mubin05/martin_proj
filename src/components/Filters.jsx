import React from 'react';

const Filters = ({ setSortOption, setCategoryFilter }) => (
  <div className="bg-gradient-to-r from-[#933c29] to-[#64342a] p-6 shadow-lg rounded-lg">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col w-full sm:w-1/3">
          <label 
            className="text-white text-sm font-semibold mb-2 uppercase tracking-wide" 
            htmlFor="sort"
          >
            Sort By
          </label>
          <select
            id="sort"
            onChange={(e) => setSortOption(e.target.value)}
            className="appearance-none bg-white p-3 rounded-lg border border-gray-300 shadow-sm 
                       text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                       cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>

        
        <div className="flex flex-col w-full sm:w-1/3">
          <label 
            className="text-white text-sm font-semibold mb-2 uppercase tracking-wide" 
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="appearance-none bg-white p-3 rounded-lg border border-gray-300 shadow-sm 
                       text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                       cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Grooming">Grooming</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Furniture">Furniture</option>
            <option value="Toys">Toys</option>
          </select>
        </div>

        
      </div>
    </div>
  </div>
);

export default Filters;