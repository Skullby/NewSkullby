import { Store } from '../../Contexts/Store'; 
import {useContext} from 'react'; 
import {NavLink} from 'react-router-dom';

function Cart() {

    const [data, setData] = useContext(Store);

    const removeAllItems = () => {
        setData({
            cartItems:[],
            cantTotal: 0,
        })
    }

    const removeItem = () => {
       
        setData({
            cantTotal: data.cantTotal - (data.cartItems[data.cartItems.findIndex(i => i.id === data.cartItems.id)]?.itemQty),
            cartItems: data.cartItems.splice([data.cartItems.findIndex(i => i.id === data.cartItems.id)])})
    }

   
    
    return (
        <div>
        {data.cartItems.length > 0 ? (
            <div>
            <h2>Sus productos:</h2>

            {
                data.cartItems?.map(item => <p>{item.nombre} x {item.itemQty}
                <button onClick={removeItem}>Quitar</button></p>) 
            }

            <p>Total: $ {data.cartItems.reduce((a, c) => a + c.precio * c.itemQty, 0)}</p>

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