import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetalContainer from './componentes/ItemDetailContainer/ItemDetalContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Cart from './componentes/Cart.js/Cart';
import { CartContext } from './componentes/Context/CartContext';


function App() {
  return (
   
    <CartContext>
    <BrowserRouter>
    
    <div className="App">
      
      <NavBar/>
   <Routes>
    
      <Route path='/' element={ <ItemListContainer/>} />
      <Route path='/category/:category' element={ <ItemListContainer/>} />
      <Route path='/detalles/:id' element={<ItemDetalContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
    </CartContext>
   
   
    
  );
}

export default App;
