import React from 'react'
import './CartContainer.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartContainer = () => {
    const {productCartList, removeItem, clear, totalCarrito} = useContext(CartContext);
    return (
        <div>
            {
                productCartList.length > 0 ?
                <div className='cart__container'>
                    {productCartList.map(item => (
                    <div className="fila__productoCarrito" id="fila__productoCarrito">

                        <img className="imagen__productoCarrito" src={item.imagen}/>
            
                        <div className="container__parrafosFilaProductoCarrito">
                            <p className="producto__carritoNombre">Nombre: {item.nombre} </p>
                            <div className="container__precioCantidad">
                                <p className="productoCarritoPrecio">Precio: ${item.precio} </p>
                                <p className='cantidadProducto'>cantidad: {item.cantidad}</p>
                            </div>
                        </div>
                            
                        <div className="container__botonEliminarProducto">
                            <button onClick={ () => removeItem(item.id)} className="boton__eliminarProducto" id="boton__eliminarProducto">Eliminar</button>
                        </div>

                    </div>
                    ))}
                    <h3 className='h3__total'>Total: {totalCarrito} </h3>
                    <div className='container__botonesCarrito'>
                        <button onClick={ () => clear()} className="boton__finalizarCompra">Finalizar compra</button>    
                        <button onClick={ () => clear()} className="boton__eliminarProducto">Vaciar carrito</button>
                    </div>
                </div>
                :
                <div className='container__carritoVacio'>
                    <h2 className='h2__carritoVAcio'>El carrito está vacio</h2>
                    <Link to="/productos">
                        <button className='boton__carritoVacio'>Ver catalogo de productos</button>
                    </Link>
                </div>
                
            }

        </div>
    )
}
