import Image from 'next/image';
import '../styles/product-card.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Image 
          src={product.images[0]} 
          alt={product.title} 
          className="product-image" 
          width={300} 
          height={300} 
          objectFit="contain"
          unoptimized
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;