import { Link } from 'react-router-dom';
import './CartWidget.css';


const CartWidget = () => {
    return (
    <div>
        <Link className="nav-link" to="/ItemDetail"><b><i className="fa-solid fa-cart-shopping icono__carrito"/></b></Link>
    </div>
    )
    
};

export default CartWidget