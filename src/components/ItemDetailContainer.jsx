import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtiene el id del producto desde la URL
  const [product, setProduct] = useState(null); // Estado para el producto

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10); // Convierte el id a número entero
      const selectedProduct = mockProducts.find((prod) => prod.id === productId);
      setProduct(selectedProduct || null); // Establece el producto o null si no se encuentra
    }
  }, [id]); 

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
