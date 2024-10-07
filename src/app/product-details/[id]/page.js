'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Products from '../../modules/products.js';
import '../../styles/product-detail.css';

export default function Page({ params }) {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const search = Products.find(p => p.id === parseInt(params.id));
        setProduct(search);
    }, [])

    if (!product){
        return(
            <div>Product not found</div>
        )
    }

    return (
        <div className="product-container">
            <Image src={product.image} className="product-image"/>
            <div className="product-detail">
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
            </div>
        </div>
    );
}