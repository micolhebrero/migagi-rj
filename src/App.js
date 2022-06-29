import 'bootstrap/dist/css/bootstrap.min.css';
/* import './App.css'; */
import {Navbar} from './componentes/Navbar/Navbar'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import {Nosotros} from './componentes/Nosotros/Nosotros'
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate, UNSAFE_RouteContext} from 'react-router-dom'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContext, CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout';


function App() {

  return (
    <CartProvider>

    <BrowserRouter>

      <Navbar/>
      <Routes>
       <Route path='/' element={ <ItemListContainer/> }/>
       <Route path='/categorias/:categoryId' element={<ItemListContainer/> }/>
       <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/checkout' element={<Checkout/>} />
       <Route path='/nosotros' element={ <Nosotros/> }/>
       <Route path='/contacto' element={ <Contacto/> }/>
       <Route path='*' element={<Navigate to={"/"}/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
