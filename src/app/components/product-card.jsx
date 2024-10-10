import Image from 'next/image';
import '../styles/product-card.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;

/*<Image 
          src={product.images[0] || 'https://placekitten.com/300/300'} // Use first image or placeholder
          alt={product.title} 
          className="product-image" 
          width={300} 
          height={300} 
          style={{ objectFit: 'contain' }} 
          onError={(e) => e.target.src = 'https://placekitten.com/300/300'} // Fallback on error
        />*/