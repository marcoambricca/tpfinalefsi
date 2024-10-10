'use client';

import { useEffect, useState } from 'react';
import NavigationComponent from '@/app/components/navigation';
import Image from 'next/image';
import '../../styles/product-detail.css';

export default function Page({ params }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${params.id}`);
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <NavigationComponent />
            <div className="product-container">
                <div className="product-detail">
                    <h1>{product.title}</h1>
                    <p><strong>Price:</strong> ${product.price} USD</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p>
                        <strong>Dimensions:</strong> 
                        {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                    </p>
                    <p><strong>Warranty Information:</strong> {product.warrantyInformation}</p>
                    <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
                </div>
            </div>
        </>
    );
}

/*<Image 
                    src={product.images[0] || 'https://placekitten.com/600/600'} // Use first image or placeholder
                    alt={product.title} 
                    className="product-image" 
                    width={600} 
                    height={600} 
                    style={{ objectFit: 'contain' }} 
                    onError={(e) => e.target.src = 'https://placekitten.com/600/600'} // Fallback on error
                />*/ 