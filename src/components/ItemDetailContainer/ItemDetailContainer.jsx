import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import data from '../ItemList/dataProductos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const {productId} = useParams();

    const [item, setItem] =useState([]);

    const obtenerData = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const producto = data.find(item=> item.id === parseInt(id))
                resolve(producto)
            }, 1000)
        })
    }

    useEffect(() => {
        const obtenerProducto = async()=> {
            const producto = await obtenerData(productId);
            setItem(producto)
        }
        obtenerProducto();
    }, [productId]);


    return (

        <div className='itemDetailContainer'>
            <ItemDetail item = {item} />
        </div>
        
        
    )
}

export default ItemDetailContainer