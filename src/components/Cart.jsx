// src/components/Cart.jsx
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { getCartItems, removeFromCart } = useContext(CartContext);
  const cartItems = getCartItems();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
