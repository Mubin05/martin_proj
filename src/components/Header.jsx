import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
const SearchBar = ({ setSearchQuery }) => (
    <div className="hidden md:flex flex-grow mx-8 ">
      <div className="relative w-full">
        <input
          type="text"
          id="search"
          placeholder="Search products..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );

const Header = ({ setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#af9164] shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold text-indigo-600">Martin</h1>
          </div>

         
          <SearchBar setSearchQuery={setSearchQuery} />

          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Deals
            </a>
          </nav>

          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-indigo-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Products
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Categories
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Deals
            </a>
          </div>
          
          <div className="px-4 py-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;