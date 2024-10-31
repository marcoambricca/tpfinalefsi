'use client';

import { useCart } from '../../context/cartContext.js';
import NavigationComponent from '../components/navigation.jsx';
import '../styles/cart-details.css';

export default function CartDetails() {
  const { cart, updateCartItem, removeFromCart } = useCart();

  return (
    <div>
      <NavigationComponent />
      <div className="container">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div>
                    {item.title} - ${item.price} x 
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateCartItem(item.id, Number(e.target.value))}
                    />
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}