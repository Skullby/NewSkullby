import ProductCard from '../../global/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {useState, useEffect} from 'react';

const FeaturedProducts = () => {
    const [items, setItems] = useState([ 
    {
        id: 1, 
        nombre: "Teclado Razer Huntsman Tournament Edition",
        categoria: "teclados",
        foto: "https://i.rtings.com/images/reviews/keyboard/razer/huntsman/huntsman-design-medium.jpg",
        descripcion: "El teclado Razer Huntsman Tournament Edition es un teclado mecánico con interruptores ópticos diseñado para ofrecernos la máxima velocidad a la hora de demostrar nuestras habilidades en todo tipo de torneos de juego. Este teclado monta unos switches ópticos lineales Razer.",
        precio: 16.499,
        stock: 60,
    },
    {
        id: 2, 
        nombre: "Logitech G Pro Gaming",
        categoria: "teclados",
        foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
        descripcion: "lorem",
        precio: 6.499,
        stock: 56,
    },
    {
        id: 3,
        nombre: 'Razer BlackWidow Chroma V2',
        categoria: "teclados",
        foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
        descripcion:"" ,
        precio: 500,
        stock: 40,
        
    },
    {
        id: 13,
        nombre: 'Intel Core i7-9700F',
        categoria: "cpus",
        foto:"https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" ,
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod." ,
        precio: 19.799,
        stock: 12,
    },
]);
    // Hagan de cuenta que esta constante es una API
    

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 500)
    })
    
    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line 
    }, [])
    
    
    
    
    
    
    return(
        <section className="featuredProducts">
            <div>
                 {
                    items.length ?
                    <>
                        <h2>Productos destacados</h2>

                        <ul>
                            {
                                items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard 
                                            nombre={item.nombre} 
                                            precio={item.precio} 
                                            stock={item.stock}
                                            foto={item.foto}
                                            itemid={item.id}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items...</p>
                }
            </div>

        </section>
    )
}

export default FeaturedProducts;