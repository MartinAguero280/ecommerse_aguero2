
import './ItemListContainer.css';
import data from '../ItemList/dataProductos';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'; 


//Desestructuracion de props con {}.
const ItemListContainer = ({greeting}) => {

    const [items, setItems] =useState([]);

    const obtenerData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })

    useEffect(() => {
        obtenerData.then((resultado) => {
            setItems(resultado);
        })
    }, []);


    return (
        <div className='container__itemList'>
            <h1 className='h1__saludo'>{greeting}</h1>
            <ItemList itemsList={items}/>
        </div>
    );
};

export default ItemListContainer;