import React from 'react';
import '../styles/Styles.css';



const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;
