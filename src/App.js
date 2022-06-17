import 'bootstrap/dist/css/bootstrap.min.css';
/* import './App.css'; */
import {Navbar} from './componentes/Navbar/Navbar'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import {Nosotros} from './componentes/Nosotros/Nosotros'
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/Footer/Footer';
import { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';


function App() {

  const [cart, setCart] = useState( [] )

  return (
    <CartContext.Provider value={ {cart, setCart} }>

    <BrowserRouter>

      <Navbar/>
      <Routes>
       <Route path='/' element={ <ItemListContainer/> }/>
       <Route path='/categorias/:categoryId' element={<ItemListContainer/> }/>
       <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
       <Route path='/nosotros' element={ <Nosotros/> }/>
       <Route path='/contacto' element={ <Contacto/> }/>
       <Route path='*' element={<Navigate to={"/"}/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
