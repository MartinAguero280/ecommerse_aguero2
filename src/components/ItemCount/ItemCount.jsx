import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) => {
    const [contador , setContador] = useState(initial);
    const suma = () => {
        contador < stock && setContador(contador + 1);
    }
    const resta = () => {
        contador > 1 && setContador(contador - 1);
    }

    return (

        <div className='container__contadorAgregarAlCarrito'>
            <div className='container__contador'>
                <button onClick={resta} className='fa-solid fa-minus boton__contador'></button>
                <h5 className='numero__contador'>{contador}</h5>
                <button onClick={suma} className='fa-solid fa-plus boton__contador'></button>
            </div>
            <button className='boton__agregarAlCarrito' onClick={ () => {
                stock !== 0 ?  onAdd(contador) : console.log('No hay stock');
                setContador(1);
            }}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount;