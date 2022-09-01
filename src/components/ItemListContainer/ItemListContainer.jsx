import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

//Desestructuracion de props con {}.
const ItemListContainer = ({greeting}) => {
    function onAdd(params) {
        console.log(params);
    }
    const stock = 10;
    const initial = 1;
    return (
        <div className='container__itemList'>
            <h1 className='h1__saludo'>{greeting}</h1>
            <ItemCount stock = {stock} initial = {initial} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;