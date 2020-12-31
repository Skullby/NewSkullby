import ItemCount from '../../global/ItemCount/ItemCount';
import './ItemDetail.css'; 
import { useState } from 'react';
import { Link } from 'react-router-dom'; 


const ItemDetail = ({item}) => {
    const [showItemCount, setShowItemCount] = useState(true)

    const onAdd = () => {
        setShowItemCount(false);
    }

    return (
        <article className="itemDetail">
            <h1>{item.nombre}</h1>
            <img className="imgDetail" src={item.foto} alt=""/>
            <h3>Descripción:</h3>    
            <div className="descripcion">
            <p1>{item.descripcion}</p1>
            <p>${item.precio}</p>
            <p>Stock: {item.stock}</p>
            { showItemCount ? 
                <ItemCount onAdd={onAdd} /> 
              :
                <Link to='/checkout'><button>Termina tu compra</button></Link>
            }
            
            </div>
        </article>
    )
}

export default ItemDetail; 