import ProductCard from './product-card.jsx';
import Link from 'next/link';
import '../styles/product-list.css'

const ProductList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map(product => (
          <Link className="product-item" key={product.id} href={`/product-details/${product.id}`} passHref>
            <div>
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </div>
    );
};  

export default ProductList;
