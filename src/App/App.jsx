import './App.css';
import NavAndWidgetCart from '../components/global/NavAndWidgetCart/NavAndWidgetCart';
import ItemListContainer from '../components/global/ItemListContainer/ItemListContainer';
import Home from '../components/home/Home/Home'; 
import Detail from '../components/detail/ItemDetailContainer/Detail'; 

function App() {
  
  const sectionToShow = (section) => {
    switch(section) {
      case 'Home' : return <Home/>;
      case 'Detail' : return <Detail/>;
      default : return <Home/> 
    }
  }

   
  return (
    <>

     <NavAndWidgetCart/>
     {sectionToShow('Detail')}
     <ItemListContainer/>

    </>
  );
}


export default App;
