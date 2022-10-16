import React, { useState } from 'react';
import './CartContainer.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const CartContainer = () => {
    const {productCartList, removeItem, clear, totalCarrito} = useContext(CartContext);

    const [idOrder, setIdOrder] = useState("");

    const sendOrder = (event) => {
        event.preventDefault();

        if (event.target[0].value.length, event.target[1].value.length, event.target[2].value.length > 0) {

            const date = Date();

            const order = {
                buyer: {
                    name:event.target[0].value,
                    phone:event.target[1].value,
                    email:event.target[2].value
                },
                items: productCartList,
                date: date,
                total: totalCarrito
            }

            const queryRef = collection(db, "orders");
            addDoc(queryRef, order).then(response => setIdOrder(response.id));

            clear();
        }else {
            Swal.fire({
                icon: 'warning',
                text: 'No se pueden dejar campos vacíos',
                confirmButtonColor: '#00BB2D',
                confirmButtonText: 'Ok',
                color: '#FFFFFF',
                background: '#1C1C1C'
            })
        }

    }

    

    const alertaFinalizarCompra = () => {
        Swal.fire({
            title: '¡Gracias por su compra!',
            text: `Su orden se a enviado exitosamente, id: ${idOrder}`,
            confirmButtonColor: '#00BB2D',
            confirmButtonText: 'Ok',
            color: '#FFFFFF',
            background: '#1C1C1C'
        })
    }

    const alertaVaciarCarrito = () => {

        Swal.fire({
            title: '¿Está seguro?',
            text: "Si pulsa en eliminar se removeran todos los productos de su carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#00BB2D',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            color: '#FFFFFF',
            background: '#1C1C1C'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Eliminado!',
                    text: 'Todos los productos han sido eliminados del carrito',
                    icon: 'success',
                    color: '#FFFFFF',
                    background: '#1C1C1C',
                    confirmButtonColor: '#3d58ce'
                })
                clear()
            }
        })
    }

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
                    <h3 className='h3__total'>Total: ${totalCarrito} </h3>
                    <div className='container__botonesCarrito'>    
                        <button onClick={ () => alertaVaciarCarrito()} className="boton__eliminarProducto">Vaciar carrito</button>
                    </div>
                    <div className='container__formCarrito'>
                        <form className='form__carrito' onSubmit={sendOrder}>
                            <label>Nombre: </label>
                            <input type="text" />
                            <label>Telefono: </label>
                            <input type="text" />
                            <label>Mail: </label>
                            <input type="email" />
                            <button className='boton__finalizarCompra' type='submit'>Finalizar compra</button>
                        </form>
                        
                    </div>
                </div>
                :
                <div className='container__carritoVacio'>
                    <h2 className='h2__carritoVacio'>El carrito está vacio</h2>
                    <Link to="/productos">
                        <button className='boton__carritoVacio'>Ver catalogo de productos</button>
                    </Link>
                </div>
            }

            {
                idOrder && alertaFinalizarCompra()
            } 

        </div>
    )
}
