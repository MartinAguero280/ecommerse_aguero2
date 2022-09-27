import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import data from '../ItemList/dataProductos';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true);

    const {productId} = useParams();

    const [item, setItem] =useState([]);

    useEffect(() => {
        const obtenerProducto = async()=> {
            const queryRef = doc(db, "items", productId);
            const response = await getDoc(queryRef);
            const newProduct = {
                ...response.data(),
                id: response.id
            }
            setItem(newProduct);
            setIsLoading(false)
        }
        obtenerProducto();
    }, [productId]);

    /*const obtenerData = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const producto = data.find(item=> item.id === parseInt(id))
                resolve(producto)
                setIsLoading(false)
            }, 1000)
        })
    }

    useEffect(() => {
        const obtenerProducto = async()=> {
            const producto = await obtenerData(productId);
            setItem(producto)
        }
        obtenerProducto();
    }, [productId]);*/


    return (

        <div className='itemDetailContainer'>
            {
                isLoading === false ? <ItemDetail item = {item} /> :
                isLoading === true && <h2 className='h2__cargando'>Cargando...</h2>
            }
        </div>
        
        
    )
}

export default ItemDetailContainer