import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({id, nombre, precio, categoria, imagen, stock}) => {

    function onAdd(params) {
        console.log(params);
    }

    const initial = 1
    return (
        <div className='carta__producto'>
            <div>
                <Link to={`/itemDetail/${id}`} element={<ItemDetailContainer />}><img src={imagen} alt="imagen producto" className='foto__producto' /></Link>
            </div>
            <div className='container__infoProducto'>
                <p className='precio__producto'> {precio} </p>
                <p className='info__producto'> {nombre}</p>
            </div>
            <ItemCount stock = {stock} initial = {initial} onAdd={onAdd}/>
        </div>
    )
}

export default Item;