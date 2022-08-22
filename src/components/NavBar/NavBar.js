
import logo from '../NavBar/imagen_logo.png';
import './NavBar.css';

const NavBar = () => {
    return (

        <div className='div__header'>

            <div className="container__logo__manonimotorep">
                <a href="../NavBar/NavBar.js"><img src={logo} className="LogoManoniMotoRep" alt="logo manoni motorep"/></a>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-item-mod">
                                <a className="nav-link" href="./pages/productos.html"><b>PRODUCTOS</b></a>
                            </li>
                            <li className="nav-item nav-item-mod">
                                <a className="nav-link" href="./pages/contacto.html"><b>CONTACTO</b></a>
                            </li>
                            <li className="nav-item nav-item-mod">
                                <a className="nav-link" href="./pages/acercade.html"><b>ACERCA DE</b></a>
                            </li>
                            <li className="nav-item nav-item-mod">
                                <a className="nav-link" href="./pages/carrito.html"><b>CARRITO</b></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    );
};

export default NavBar