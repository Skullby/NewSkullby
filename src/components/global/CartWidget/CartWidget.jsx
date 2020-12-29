import './CartWidget.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {AiFillCloseCircle} from 'react-icons/ai';
import ItemList from '../ItemList/ItemList';
import {NavLink} from 'react-router-dom';

const CartWidget = ({show, action}) => {
    return (
        <>
        <div className={`cartWidget ${show ? 'open' : 'close'}`}>

            <AiFillCloseCircle className="button" onClick={action}/>
            
            <NavLink to='/checkout' activeClassName="cLink">Ir al Checkout</NavLink>
            

        </div>
        </>
    )
}

export default CartWidget;