import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [totalCarrito, setTotalCarrito] = useState(0);

    /*const sumarTotalCarrito = (item) => {
        const newTotalCarrito = totalCarrito + item.precio;
        setTotalCarrito(newTotalCarrito);
    }*/

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
        const productCartListFilter = productCartList.filter(producto => producto.id !== itemId);
        setProductCartList(productCartListFilter);

        const productFilteredId = productCartList.filter(producto => producto.id === itemId);
        const productFilteredIdArray = productFilteredId.forEach(element => {
            const precioProductoEliminado = element.precio;
            const newTotalCarrito = totalCarrito - precioProductoEliminado;
            setTotalCarrito(newTotalCarrito)
        });
    }

    const clear = () => {
        const productCartListClear = [];
        setProductCartList(productCartListClear)
    }

    const isInCart = (id) => productCartList.find(producto => producto.id === id) ? true : false;

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