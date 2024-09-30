import ProductCard from './product-card.jsx';
import '../styles/product-list.css'

const ProductList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
};  

export default ProductList;
