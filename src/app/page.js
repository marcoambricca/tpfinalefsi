import ProductList from "./components/product-list.jsx";
import NavigationComponent from "./components/navigation.jsx";
import products from "./modules/products.js";
import './styles/main.css'

export default function Home(){
  return(
    <>
      <NavigationComponent />
      <div className="main">
        <ProductList products={products}/>
      </div>
    </>
  )
}