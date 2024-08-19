// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Valor predeterminado para el contexto
const defaultCartContext = {
  addToCart: () => {},
  removeFromCart: () => {},
  getCartItems: () => [],
};

const CartContext = createContext(defaultCartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getCartItems = () => cart;

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, getCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
