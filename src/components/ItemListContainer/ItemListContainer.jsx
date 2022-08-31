import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

//Desestructuracion de props con {}.
const ItemListContainer = ({greeting}) => {
    return (
        <div className='container__itemList'>
            <h1 className='h1__saludo'>{greeting}</h1>
            <ItemCount/>
        </div>

    )
}

export default ItemListContainer;