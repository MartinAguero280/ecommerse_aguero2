import React from 'react';
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'; 
import { useParams, NavLink } from 'react-router-dom';
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';


//Desestructuracion de props con {}.
const ItemListContainer = () => {

    const [isLoading, setIsLoading] = useState(true);

    const {categoryId} = useParams();

    const [items, setItems] =useState([]);

    
    useEffect(() => {
        const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"),where("categoria","==",categoryId));
        getDocs(queryRef).then(response => {
            const results = response.docs.map(doc => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                }
            return newProduct;
        });
        setItems(results);
        });
        setIsLoading(false);
    }, [categoryId]);


    return (
        <>
            {
                isLoading === false ?
                <div className='container__itemList container'>
                    <h1 className='titulo__pagina'>Productos</h1>
                    <div className='container__filtroItems row'>
                        <div className='container__filtro col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                            <h3 className='texto__filtro'>filtro</h3>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/'>todo</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/aceite'>aceite</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/bateria'>bateria</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/casco'>casco</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/cubierta'>cubierta</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/guantes'>guantes</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/cilindro'>cilindro</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/transmision'>transmision</NavLink>
                            <NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/productos/lubricante'>lubricante</NavLink>
                        </div>
                        <div className='col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9'><ItemList itemsList={items}/></div>
                    </div>
                </div>
                :
                <h2 className='h2__cargando'>Cargando...</h2>
            }
        </>

    );
};

export default ItemListContainer;