// /src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para enlaces a las páginas de detalle

const Item = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-500">${item.price}</p>
      <Link to={`/item/${item.id}`} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded inline-block">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
