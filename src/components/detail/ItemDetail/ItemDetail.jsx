import './ItemDetail.css'; 

const ItemDetail = ({item}) => {
    return (
        <article className="itemDetail">
            <h1>{item.nombre}</h1>
            <img className="imgDetail" src={item.foto} alt=""/>
            <h3>Descripción:</h3>    
            <div className="descripcion">
            <p1>{item.descripcion}</p1>
            <p>${item.precio}</p>
            <p>Stock: {item.stock}</p>
            <button>Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail; 