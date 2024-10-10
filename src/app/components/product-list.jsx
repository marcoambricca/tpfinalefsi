'use client';

import ProductCard from './product-card.jsx';
import SearchBar from './searchbar.jsx';
import Link from 'next/link';
import { useState } from 'react';
import '../styles/product-list.css';
import '../styles/dropdown.css';

export default function ProductList({ products, categories }) {
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
            <Link className="product-item" key={product.id} href={`/product-details/${product.id}`} passHref>
              <div>
                <ProductCard product={product} />
              </div>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}