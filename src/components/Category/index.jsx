import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import listaProductos from '../assets/listaProductos';
import ProductCard from '../global/ProductCard/ProductCard';
import './index.css'; 

function Category() {
    const [productos, setProductos] = useState([]);

    const {category_name} = useParams();

    useEffect(() => {
        console.log(category_name);
    }, [category_name])

    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => resolve(listaProductos), 500);
    });


    const llamadoProductos = () => {
        promesaProductos.then((respuesta) => {
            const productosPorCategoria = respuesta.filter(
                (producto) => producto.categoria == category_name
            );
            setProductos(productosPorCategoria);
        });
    };

    useEffect(() => llamadoProductos(), [category_name]);
   
    return productos.length > 0 ? (
        <section className="categorias">
            <ul>
                {
                    productos.map((item, index) => (
                        <li key={index}>
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
        </section>
    ) : (
        <p className="cargando">Cargando items...</p>
    )
    
};

export default Category;