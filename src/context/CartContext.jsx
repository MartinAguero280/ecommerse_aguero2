import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, cantidad) => {

        const newProduct = {
            ...item,
            cantidad
        }

        if (isInCart(newProduct.id)) {
            setProductCartList(productCartList.map(product => {
                return product.id === newProduct.id ? {...product, cantidad: product.cantidad + cantidad } : product
            }))
            item.stock = item.stock - cantidad;
        }else {

            const newProductCartList = [...productCartList];
            newProductCartList.push(newProduct);
            item.stock = item.stock - cantidad;
            setProductCartList(newProductCartList);

        }

    }

    const removeItem = (itemId) => {
        const productCartListFilter = productCartList.filter(producto => producto.id !== itemId);
        setProductCartList(productCartListFilter);
    }

    const clear = () => {
        const productCartListClear = [];
        setProductCartList(productCartListClear)
    }

    const isInCart = (id) => productCartList.find(producto => producto.id === id) ? true : false;
    

    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear}} >
            {children}
        </CartContext.Provider>
    )
}