import './CartWidget.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import {useContext} from 'react'; 
import {Store} from '../../../Contexts/Store';


const CartWidget = ({show, action}) => {
    const [data, setData] = useContext(Store);

    const removeAllItems = () => {
        setData({
            cartItems:[],
            cantTotal: 0,
        })
        data.cartItems[data.cartItems.findIndex(i => i.id === data.cartItems.id)].itemQty = 0 
    }



    const removeItem = () => {
        data.cartItems.splice([data.cartItems.findIndex(i => i.id === data.cartItems.id)])
       
    }

   


 
      console.log(data)
      
    

    return (
        <>
        <div className={`cartWidget ${show ? 'open' : 'close'}`}>

            <AiFillCloseCircle className="button" onClick={action}/>    

            <h2>Sus productos:</h2>
            {
                data.cartItems?.map(item => <p>{item.nombre} x {item.itemQty}
                <button onClick={removeItem}>Quitar</button></p>) 
            }
           
            <button onClick={removeAllItems} >Quitar todos los productos del Cart</button>
            <NavLink to='/cart' activeClassName="cLink">Ir al Cart</NavLink>
            

        </div>
        </>
    )
}

export default CartWidget;