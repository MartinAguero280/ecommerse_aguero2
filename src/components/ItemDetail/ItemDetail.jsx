import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({item}) => {

    return (
        <div className='item__detail'>
            {
                item.map((producto) => {
                    return(
                        <>
                            <div className='itemDetail__imagenContainer'>
                                <img className='itemDetail__imagen' src={producto.imagen} alt="imagen producto" />
                            </div>
                            
                            <div className='itemDetail__imagenPrecioStockCountContainer'>
                                <h2 className='itemDetail__nombre'>{producto.nombre}</h2>
                                <h1 className='itemDetail__precio'>$ {producto.precio} </h1>
                                <h4 className='itemDetail__info'>Medios de pago</h4>
                                <p className='itemDetail__stock'>Stock: {producto.stock}</p>
                                <button className='boton__agregarAlCarrito'>AGREGAR AL CARRITO</button>
                            </div>
                            
                        </>
                        
                    )
                })
            }
            
        </div>
    )
}

export default ItemDetail