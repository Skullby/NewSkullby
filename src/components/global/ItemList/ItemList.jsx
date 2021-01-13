import Items from "../Item/Item";
import {useState, useEffect} from 'react'; 
import './ItemList.css';
import {NavLink} from 'react-router-dom';

const ItemList=() => {
    const [items, setItems] = useState([]);
   
    const products = [
        {
            id: 10,
            nombre: 'RTX 3070',
            categoria: "placas-de-video",
            foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod." ,
            precio: 19.799,
            stock: 12,
        },
        {
            id: 11,
            nombre: 'RTX 3080',
            categoria: "placas-de-video",
            foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod." ,
            precio: 19.799,
            stock: 12,
        },
        {
            id: 4,
            nombre: 'G203 Lightsync Logitech',
            categoria: "mouses",
            foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod." ,
            precio: 300,
            stock: 34,
        },
        {
            
            id: 3,
            nombre: 'Razer BlackWidow Chroma V2',
            categoria: "teclados",
            foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod." ,
            precio: 500,
            stock: 40,
    
        },
        {
            id: 2, 
            nombre: "Logitech G Pro Gaming",
            categoria: "teclados",
            foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
            precio: 6.499,
            stock: 56,
        },
        {
            id: 15,
            nombre: 'Intel Core i9-9900K',
            categoria: "cpus",
            foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod." ,
            precio: 19.799,
            stock: 12,
        }
    ];
   
   
    const getPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
    
    const getProducstFromDB = async () => {
        try {
            const result = await getPromise;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
       getProducstFromDB();
        // eslint-disable-next-line
    }, []);
        
    
    
    
    return (
        
            <section className="itemList">
                <div>
                {items.length > 0 ? (
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <Items
                                    nombre={item.nombre}
                                    precio={item.precio}
                                    itemid={item.id}
                                />
                            </li>
                        ))}
                    </ul>
                    ) :  
                    (<p>Cargando items...</p>)}
                </div>
            </section>
        
        );
}

export default ItemList;