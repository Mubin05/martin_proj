// src/App.js
import React, { useState } from 'react';
import { products as productData } from './data/products';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProducts = productData
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((product) => (categoryFilter ? product.category === categoryFilter : true))
    .sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="App bg-[#6f1a07]">
      <Header setSearchQuery={setSearchQuery} />
      <Filters 
        setSearchQuery={setSearchQuery}
        setSortOption={setSortOption}
        setCategoryFilter={setCategoryFilter}
      />
      <ProductList products={filteredProducts} />
      <Footer />
    </div>
  );
};

export default App;
