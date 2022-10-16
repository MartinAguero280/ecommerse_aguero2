import React from 'react';
import "../Main/Main.css";
import {Link} from "react-router-dom";
import imagenHero from "../../images/imagen_hero.jpg";

export const Main = () => {
    return (
        <div>
            <main>

                <div className="container__hero">

                    <div className="container__hero__texto">
                        <h1>Manoni Moto Rep</h1><br/>
                            <p>Manoni Moto Rep, una empresa que cuenta con más de 20 años de experiencia en la venta de repuestos para motos. Durante estos años nos hemos destacado por brindar un servicio responsable y eficiente, lo cual nos llena de orgullo y de deseos de continuar adelante.</p>
                    </div>

                    <div className="container__hero__imagen">
                        <Link to="/acercade"> <img src={imagenHero} className="hero__imagen" alt="Imagen Hero"/> </Link>    
                    </div>
                </div>

                <div className="container__data">
                    <p className="data__parrafo">ENVÍOS A TODO EL PAÍS</p>
                    <p className="data__parrafo">HASTA 12 CUOTAS PAGANDO CON TARJETA</p>
                    <p className="data__parrafo">RECIBIMOS TODAS LAS TARJETAS</p>
                </div>


                <div className="container__form__index">
                    <p className="parrafo__form__index">RECIBÍ OFERTAS Y NOVEDADES EN TU CORREO</p><br/>
                        <form action="" className="form__index">
                            <input type="mail" className="mail__form__index"/>
                                <button className="boton__form__index"><i className="fa-solid fa-circle-arrow-right icono__forma__index"></i></button>
                        </form>
                </div>

            </main>

        </div>
    )
}
