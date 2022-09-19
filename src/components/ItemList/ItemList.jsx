import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({itemsList}) => {
    return (
        <div className='item__list'>
            {
                itemsList.map((producto) => {
                    return(
                        <Item 
                        key={producto.id} 
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        categoria={producto.categoria} 
                        imagen={producto.imagen} 
                        stock={producto.stock} 
                        />
                    )
                })
            }
        </div>
    );
}

export default ItemList;