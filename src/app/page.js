'use client';
// HOLA BUTI HOLA MARCO LOS AMOOOOOOOOO 

import ProductList from "./components/product-list.jsx";
import NavigationComponent from "./components/navigation.jsx";
import './styles/main.css';
import Carousel from "./components/carousel.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [productsArray, setProductsArray] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await fetch('https://dummyjson.com/products');
        const productsData = await productsRes.json();
        setProductsArray(productsData.products);

        const categoriesRes = await fetch('https://dummyjson.com/products/category-list');
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationComponent />
      <Carousel />
      <div className="main">
        <ProductList products={productsArray} categories={categories} />
      </div>
    </>
  );
}
