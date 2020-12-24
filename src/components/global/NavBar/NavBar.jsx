
import logo from "./logo.svg";
import Cart from "../Cart/Cart";
import './NavBar.css';

function NavBar({titulo, action}) {
    // const {titulo} = props;
   
    return(
        <>
        
            <header>
            
                <ul className="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                </ul>

               
                <Cart action={action}/>
        
        
                <div className="container">
                <img src={logo}   alt='logo'/>
                <h1 >{titulo}</h1>
                <h2>Tienda E-Commerce</h2>
                <nav>
                    <ul>
                        <li>
                            <a href="">Teclados</a>
                        </li>
                        <li>
                            <a href="">Mouses</a>
                        </li>
                        <li>
                            <a href="">Monitores</a>
                        </li>
                        <li>
                            <a href="">Placas de video</a>
                        </li>
                        <li>
                            <a href="">CPUs</a>
                        </li>
                    </ul>
                </nav>
                    
                </div>


            </header>
        
        </>

    )
}
export default NavBar;