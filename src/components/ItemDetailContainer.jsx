import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import CartContext from '../context/CartContext';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const selectedProduct = mockProducts.find((prod) => prod.id === productId);
      setProduct(selectedProduct || null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <ItemDetail product={product} />
          <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

