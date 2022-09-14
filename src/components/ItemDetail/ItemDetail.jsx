import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';

const ItemDetail = ({item}) => {

    const [productCar, setProductCar] = useState(0);

    const onAdd = (params) => {
        console.log("Ah agregado", params ,"productos al carrito");
        setProductCar(params);
    }


    return (
        <div className='item__detail'>

            <div className='itemDetail__imagenContainer'>
                <img className='itemDetail__imagen' src={item.imagen} alt="imagen producto" />
            </div>
            
            <div className='itemDetail__imagenPrecioStockCountContainer'>
                <h2 className='itemDetail__nombre'>{item.nombre}</h2>
                <h1 className='itemDetail__precio'>$ {item.precio} </h1>
                <h4 className='itemDetail__info'>Medios de pago</h4>
                <p className='itemDetail__stock'>Stock: {item.stock}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                <h5>Productos agregados al carrito {productCar}</h5>
            </div>

        </div>
    )
}

export default ItemDetail