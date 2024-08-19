// src/components/ItemListContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        {mockProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} style={{ width: '100px' }} />
              <p>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
