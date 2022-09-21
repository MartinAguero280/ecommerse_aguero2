import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);
    return (
    <div>
        <Link className="nav-link" to="/carrito"><b><i className="fa-solid fa-cart-shopping icono__carrito"/><span>{getTotalProducts()}</span></b></Link> 
    </div>
    )
    
};

export default CartWidget