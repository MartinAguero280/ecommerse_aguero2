
import logo from '../NavBar/imagen_logo.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (

        <div className='div__header'>

            <div className='container__logo__manonimotorep'>
                <a href="../../../App"><img src={logo} className='LogoManoniMotoRep' alt="logo manoni motorep"/></a>
            </div>

            <nav className='navbar navbar-expand-lg navbar-light'>

                <div className='container-fluid'>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className='nav-item nav-item-mod'>
                                <a className='nav-link' href="../../../App"><b>PRODUCTOS</b></a>
                            </li>
                            <li className='nav-item nav-item-mod'>
                                <a className='nav-link' href="../../../App"><b>CONTACTO</b></a>
                            </li> 
                            <li className='nav-item nav-item-mod'>
                                <a className='nav-link' href="../../../App"><b>ACERCA DE</b></a>
                            </li>
                            <li className='nav-item nav-item-mod'>
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    );
};

export default NavBar