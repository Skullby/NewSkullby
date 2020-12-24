import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const Detail = () => {
    const [items, setItems] = useState(null);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "Teclado Razer Huntsman Tournament Edition",
                foto: "https://i.rtings.com/images/reviews/keyboard/razer/huntsman/huntsman-design-medium.jpg",
                descripcion: "El teclado Razer Huntsman Tournament Edition es un teclado mecánico con interruptores ópticos diseñado para ofrecernos la máxima velocidad a la hora de demostrar nuestras habilidades en todo tipo de torneos de juego. Este teclado monta unos switches ópticos lineales Razer.",
                precio: 16.499,
                stock: 60,
            })
        }, 2000);
    });

    useEffect(() => {
        getItems
        .then(response => setItems(response))
        .catch(error => console.log(error));
        // eslint-disable-next-line
    }, []);

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