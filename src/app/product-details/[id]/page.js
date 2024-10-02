import products from '../../modules/products.js';
import '../../styles/product-detail.css';

export default function ProductDetails({ params }) {
    const product = products.find(p => p.id === params.id);

    if (!product){
        return(
            <div>Product not found</div>
        )
    }

    return (
        <div className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-detail">
                <h1>{product.name}</h1>
                <p>Type: {product.type}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}