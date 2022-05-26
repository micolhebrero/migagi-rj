import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from './componentes/Navbar/Navbar'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import {Nosotros} from './componentes/Nosotros/Nosotros'

function App() {

  const integrantes = {
    nombre: 'Micol',
  }

  return (
    <div className="App">
      <Navbar/>

     <ItemListContainer nombre={integrantes.nombre}/>
     <Nosotros/>


    </div>
  );
}

export default App;
