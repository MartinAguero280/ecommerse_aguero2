import React, { useState } from 'react'
import Swal from 'sweetalert2';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [totalCarrito, setTotalCarrito] = useState(0);

    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, cantidad, precio) => {

        const newProduct = {
            ...item,
            cantidad,
        }

        if (isInCart(newProduct.id)) {
            setProductCartList(productCartList.map(product => {
                return product.id === newProduct.id ? {...product, cantidad: product.cantidad + cantidad, precio: product.precio + precio * cantidad} : product
            }))
            const newPrecio = newProduct.precio * cantidad;
            const newTotalCarrito = totalCarrito + newPrecio;
            setTotalCarrito(newTotalCarrito)
            item.stock = item.stock - cantidad;
        }else {

            const newProductCartList = [...productCartList];
            newProductCartList.push({...newProduct, precio: precio * cantidad});
            item.stock = item.stock - cantidad;
            setProductCartList(newProductCartList);
            const newPrecio = newProduct.precio * cantidad;
            const newTotalCarrito = totalCarrito + newPrecio;
            setTotalCarrito(newTotalCarrito)

        }

    }

    const removeItem = (itemId) => {
        
        Swal.fire({
            title: '¿Está seguro?',
            text: "Si pulsa en eliminar se removera el producto de su carrito!",
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
                    text: 'Su producto a sido eliminado del carrito',
                    icon: 'success',
                    color: '#FFFFFF',
                    background: '#1C1C1C',
                    confirmButtonColor: '#3d58ce'
                })
                const productCartListFilter = productCartList.filter(producto => producto.id !== itemId);
                setProductCartList(productCartListFilter);

                const productFilteredId = productCartList.filter(producto => producto.id === itemId);
                const productFilteredIdArray = productFilteredId.forEach(element => {
                    const precioProductoEliminado = element.precio;
                    const newTotalCarrito = totalCarrito - precioProductoEliminado;
                    setTotalCarrito(newTotalCarrito)
                });
            }
        })

    }

    const clear = () => {
        const productCartListClear = [];
        setProductCartList(productCartListClear);
        setTotalCarrito(0);
    }

    const isInCart = (id) => {
        const productIsInCart = productCartList.some(producto => producto.id === id);
        return productIsInCart; 
    };

    const getTotalProducts = () => {
        const totalNumberProducts = productCartList.reduce((acc, item) => acc + item.cantidad, 0);
        return totalNumberProducts;
    }


    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, totalCarrito, getTotalProducts}} >
            {children}
        </CartContext.Provider>
    )
}