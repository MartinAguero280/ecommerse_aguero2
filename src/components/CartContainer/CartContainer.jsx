import React from 'react'
import './CartContainer.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartContainer = () => {
    const {productCartList, removeItem, clear} = useContext(CartContext);
    return (
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

            <button onClick={ () => clear()} className="boton__eliminarProducto">Eliminar todos los productos</button>
        </div>
    )
}
