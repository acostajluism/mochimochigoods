// src/components/ItemDetail.jsx
import React from 'react';

const ItemDetail = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
