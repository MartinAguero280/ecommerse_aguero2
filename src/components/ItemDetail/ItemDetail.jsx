import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const value = useContext(CartContext);

    const [productCar, setProductCar] = useState(0);

    const precio = item.precio;

    const onAdd = (params) => {
        setProductCar(params);
        value.addItem(item, params, precio)
    }


    return (
        <div className='item__detail'>

            <div className='itemDetail__imagenContainer'>
                <img className='itemDetail__imagen' src={item.imagen} alt="imagen producto" />
            </div>
            
            <div className='itemDetail__imagenPrecioStockCountContainer'>
                <h3 className='itemDetail__nombre'>{item.nombre}</h3>
                <h2 className='itemDetail__precio'>$ {item.precio} </h2>
                <h5 className='itemDetail__stock'>Stock: {item.stock}</h5>
                {
                    item.stock >= 1 ?
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> :
                    <h4 className='itemsDetail__noStock'>no hay stock</h4>
                }
                <div>
                {
                    productCar > 0 &&
                    <Link to="/carrito">
                        <button className="boton__finalizarCompraItemDetail">Finalizar compra</button>
                    </Link>
                }
                </div>
            </div>
        </div>
    )
}
//<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
export default ItemDetail