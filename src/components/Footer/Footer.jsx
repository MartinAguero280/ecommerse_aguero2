import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div>
                <p>NAVEGACIÓN</p>
                    <ul>
                        <li className='nav-item nav-item-mod'>
                        <Link className="nav-link" to="/productos"><b>PRODUCTOS</b></Link>
                        </li>
                        <li className='nav-item nav-item-mod'>
                            <a className='nav-link' href="/contacto"><b>CONTACTO</b></a>
                        </li> 
                        <li className='nav-item nav-item-mod'>
                            <a className='nav-link' href="/acercade"><b>ACERCA DE</b></a>
                        </li>
                        <li className='nav-item nav-item-mod'>
                            <a className='nav-link' href="/carrito"><b>CARRITO</b></a>
                        </li>
                    </ul>
            </div>

            <div>
                <p>CONTACTANOS</p>
                <ul>
                    <li>+54 2622 777777</li>
                    <li>ejemplo@gmail.com</li>
                </ul>
            </div>

            <div>
                <p>HORARIOS</p>
                <ul>
                    <li>Lunes: <br/> 8:30-12:30, 16:00-20:00</li>
                    <li>Martes: <br/> 8:30-12:30, 16:00-20:00</li>
                    <li>Miercoles: <br/> 8:30-12:30, 16:00-20:00</li>
                    <li>Jueves: <br/> 8:30-12:30, 16:00-20:00</li>
                    <li>Viernes: <br/> 8:30-12:30, 16:00-20:00</li>
                    <li>Sabado: <br/> 8:30-13:00</li>
                </ul>
            </div>

            <div>
                <p>REDES SOCIALES</p>
                <ul>
                    <li>
                        
                        <a href="https://www.facebook.com/" target="_blank"><button className="boton__facebook__footer"><i className="fa-brands fa-facebook-square icono__facebook__footer"></i></button></a>
                        
                        
                        <a href="https://www.instagram.com/" target="_blank"><button className="boton__instagram__footer"><i className="fa-brands fa-instagram-square icono__instagram__footer"></i></button></a>   
                        
                    </li>
                </ul>
            </div>

            <div>
                <p>DONDE ENCONTRARNOS</p>
                <ul>
                    <li>Calle, Departamento, Provincia</li>
                </ul>
            </div>

            <div className="container__llevameHaciaArriba">
                <a href="#Arriba"> <button className="boton__llevamehaciaarriba"><i className="fa-solid fa-circle-arrow-up icono__llevameHaciaArriba"></i></button> </a> 
            </div>

            <div className="container__whatsapp">
                <a href="https://www.whatsapp.com/" target="_blank"><button className="boton__whatsapp"><i className="fa-brands fa-whatsapp icono__whatsapp"></i></button></a>
            </div>
        </footer>
    )
}
