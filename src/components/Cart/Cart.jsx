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
        <>
       
            <h2>Sus productos:</h2>

            {
                data.cartItems?.map(item => <p>{item.nombre} x {item.itemQty}
                <button onClick={removeItem}>Quitar</button></p>) 
            }

            <button onClick={removeAllItems} >Quitar todos los productos del Cart</button>
            <NavLink to='/checkout' activeClassName="cLink">Ir al Checkout</NavLink>
            

       
        </>
    )
}

export default Cart; 