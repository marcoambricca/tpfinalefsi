import ProductList from "./components/product-list.jsx";
import NavigationComponent from "./components/navigation.jsx";
import products from "./modules/products.js";
import './styles/main.css'
import Carousel from "./components/carousel.jsx";

export default function Home(){
  return(
    <>
      <NavigationComponent />
      <Carousel />
      <div className="main">
        <ProductList products={products}/>
      </div>
    </>
  )
}