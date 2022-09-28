
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import './Item.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Item = ({id, nombre, precio, categoria, imagen, stock}) => {

    const value = useContext(CartContext);

    const [productCar, setProductCar] = useState(0);

    const onAdd = (params) => {
        setProductCar(params);
        value.addItem({item: id, nombre, precio, categoria, imagen, stock}, params, precio)
        
    }

    const initial = 1
    return (
        <div className='carta__producto'>
            <div>
                <Link to={`/detalle/${id}`} element={<ItemDetailContainer />}><img src={imagen} alt="imagen producto" className='foto__producto' /></Link>
            </div>
            <div className='container__infoProducto'>
                <p className='precio__producto'>${precio} </p>
                <p className='info__producto'> {nombre}</p>
            </div>
        </div>
    )
}
//<ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
export default Item;