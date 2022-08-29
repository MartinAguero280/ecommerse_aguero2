import './ItemListContainer.css';

//Desestructuracion de props con {}.
const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='h1__saludo'>{greeting}</h1>
        </div>

    )
}

export default ItemListContainer;