'use client'

import ProductCard from './product-card.jsx';
import SearchBar from './searchbar.jsx';
import Link from 'next/link';
import { useState } from 'react';
import '../styles/product-list.css'

export default function ProductList({ products }){
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
};