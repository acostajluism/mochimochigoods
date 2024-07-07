import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa los estilos CSS de FontAwesome
import '../styles/Styles.css';


const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i>
            {/* <span className="badge badge-pill badge-primary">3</span> */}
            <span className="badge badge-pill badge-primary" style={{ backgroundColor: '#007bff', color: '#fff' }}>3</span>
        </div>
    );
};

export default CartWidget;
