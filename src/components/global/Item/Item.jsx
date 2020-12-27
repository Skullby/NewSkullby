import { NavLink } from 'react-router-dom'
import './Item.css'

const Items = ({nombre, precio, itemid})  => {
    
    return (
     
        <article className="items">
            <NavLink to={`/item/${itemid}`} className="navLink">
                <div>
                    <h3>{nombre}</h3>
                    <p>${precio}</p>   
                </div>
            </NavLink>
        </article>
       
       
    );
}   


export default Items; 