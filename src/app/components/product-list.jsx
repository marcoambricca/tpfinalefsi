'use client';

import ProductCard from './product-card.jsx';
import SearchBar from './searchbar.jsx';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../context/cartContext.js';
import '../styles/product-list.css';
import '../styles/dropdown.css';

export default function ProductList({ products, categories }) {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? product.category.toLowerCase() === selectedType.toLowerCase() : true;
    return matchesSearch && matchesType;
  });

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="filter-dropdown">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          {selectedType ? `Filter: ${selectedType}` : 'Filter by type'}
        </button>

        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li onClick={() => handleTypeSelect('')}>Clear filters</li>
            {categories.map((category) => (
              <li key={category} onClick={() => handleTypeSelect(category)}>
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <Link href={`/product-details/${product.id}`} passHref>
                <ProductCard product={product} />
              </Link>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}