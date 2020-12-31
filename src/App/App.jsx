import './App.css';
import Error404 from '../components/Error404/Error404';
import NavAndWidgetCart from '../components/global/NavAndWidgetCart/NavAndWidgetCart';
import Home from '../components/home/Home/Home'; 
import Detail from '../components/detail/ItemDetailContainer/Detail'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from '../components/global/Footer/Footer';
import Checkout from '../components/Checkout/Checkout';
import Category from '../components/Category';
import { useEffect} from 'react';


function App() {
  const windowResize = (e) => {
    console.log(e);
  }

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    }
  }, [])

  

   
  return (
    <>
      <BrowserRouter>
        <NavAndWidgetCart/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path="/item/:itemid">
            <Detail/>
          </Route>
          <Route path='/category/:category_name'>
            <Category/>
          </Route>
          <Route path="*">
            <Error404/>
          </Route>
        </Switch>

        <Footer/>
      </BrowserRouter>
    </>
  );
}


export default App;
