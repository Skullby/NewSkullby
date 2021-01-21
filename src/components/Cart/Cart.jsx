import { Store } from '../../Contexts/Store'; 
import {useContext, useState} from 'react'; 
import {NavLink} from 'react-router-dom';
import './Cart.css'; 

function Cart() {
    const [data, setData] = useContext(Store);


  
    const removeAllItems = () => {
        setData({
            cartItems:[],
            cantTotal: 0,
            precioTotal:0,
        })
    }

    const removeItem = () => {
       
        setData({
            cartItems: data.cartItems.splice([data.cartItems.findIndex(i => i.id === data.cartItems.id)]),
            cantTotal: data.cantTotal - (data.cartItems[data.cartItems.findIndex(i => i.id === data.cartItems.id)]?.itemQty),
            
        })
    }

   
    
    return (
        <div>
        {data.cartItems.length > 0 ? (
            <div>
            <h2>Sus productos:</h2>

            {
                data.cartItems.map(item =>  
                <li>
                    <img  className="cartImg" src={item.foto} alt={item.nombre}></img>
                    <div>
                        <h2>{item.nombre}</h2>
                        <p>Cantidad: {item.itemQty}</p>
                        <p>Precio por unidad: <strong>${item.precio}</strong></p>
                        <button onClick={removeItem}>Quitar</button>

                    </div>
                </li>  
                ) 
            }

            <p>Total: $ {data.precioTotal}</p>

            <button onClick={removeAllItems} >Quitar todos los productos del Cart</button>
            <NavLink to='/checkout' activeClassName="cLink">Ir al Checkout</NavLink>
            </div>
            )

            :   
            <div>
                     <h2>No tiene items en el Carrito</h2>
                     <NavLink to='/'>Volver a la pagina principal</NavLink>
            </div>
                     
        }
            
            

       
        </div>
    )
}

export default Cart; 