import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartWidget = () => {
  const { getCartItems } = useContext(CartContext);
  const cartItems = getCartItems();

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-secondary">{cartItems.length}</span>
    </div>
  );
};

export default CartWidget;
