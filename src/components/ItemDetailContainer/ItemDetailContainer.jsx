import './ItemDetailContainer.css';
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import dataProducto from '../ItemDetail/dataProducto'

const ItemDetailContainer = () => {

    const [item, setItem] =useState([]);

    const obtenerData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducto)
        }, 2000)
    })

    useEffect(() => {
        obtenerData.then((resultado) => {
            setItem(resultado);
        })
    }, []);


    return (

        <>
            <ItemDetail item = {item} />
        </>
        
        
    )
}

export default ItemDetailContainer