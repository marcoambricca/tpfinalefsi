import ProductCard from './product-card.jsx';
import Link from 'next/link';
import '../styles/product-list.css'

const ProductList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map(product => (
          <Link key={product.id} href={`/product-details/${product.id}`} passHref>
            <div className="product-item">
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </div>
    );
};  

export default ProductList;
