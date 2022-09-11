
import './ItemListContainer.css';
import data from '../ItemList/dataProductos';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'; 
import { useParams, NavLink } from 'react-router-dom';


//Desestructuracion de props con {}.
const ItemListContainer = () => {

    const {categoryId} = useParams();
    console.log('categoryId', categoryId);

    const [items, setItems] =useState([]);

    const obtenerData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })

    useEffect(() => {
        obtenerData.then((resultado) => {
            if (categoryId) {
                const nuevosItems = resultado.filter(item=>item.categoria === categoryId);
                setItems(nuevosItems);
            } else {
                setItems(resultado);
            }

        })
    }, [categoryId]);


    return (
        <div className='container__itemList'>
            <h1 className='titulo__pagina'>Productos</h1>
            <div className='container__filtroItems'>
                <div className='container__filtro'>
                    <h4 className='texto__filtro'>filtro</h4>
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
                <div><ItemList itemsList={items}/></div>
                
            </div>
            
        </div>
    );
};

export default ItemListContainer;