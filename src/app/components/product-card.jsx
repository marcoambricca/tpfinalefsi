import Image from 'next/image';
import '../styles/product-card.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Image 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          width={300} 
          height={300} 
          objectFit="contain"
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;
