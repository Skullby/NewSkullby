import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {listaProductos} from '../../assets/listaProductos'; 

const Detail = () => {
    const {itemid} = useParams();
    const [items, setItems] = useState();

    
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoClickeado = listaProductos.find( item => item.id == itemid)
            resolve(productoClickeado)
        }, 600);
    });

    const llamadoProducto = () => {
        getItems.then((respuesta) => setItems(respuesta))
    }

    useEffect(() => llamadoProducto()
    // eslint-disable-next-line
    , []);

    return (
        <>
            {
                items ?
                <div>
                    <ItemDetail item={items} />

                    
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}
export default Detail; 