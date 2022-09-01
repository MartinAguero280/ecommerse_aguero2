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
        
        <div className='carta__producto'>
            <div>
            <img src="" alt="imagen producto" className='foto__producto' />
            </div>
            <div className='container__infoProducto'>
            <p className='precio__producto'> $1000 </p>
            <p className='info__producto'> info producto, stock maximo 10</p>
            </div>
            <div className='container__contador'>
                <button onClick={resta} className='fa-solid fa-minus boton__contador'></button>
                <h5 className='numero__contador'>{contador}</h5>
                <button onClick={suma} className='fa-solid fa-plus boton__contador'></button>
            </div>
            <button className='boton__agregarAlCarrito' onClick={ () => {stock !== 0 ?  onAdd(contador) : console.log('No hay stock'); }}>AGREGAR AL CARRITO</button>
        </div>
        
    )
}

export default ItemCount;