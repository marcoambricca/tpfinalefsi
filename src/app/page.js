import ProductList from "./components/product-list.jsx";
import products from "./modules/products.js";
import './styles/main.css'

export default function Home(){
  return(
    <div className="main">
      <ProductList products={products}/>
    </div>
  )
}