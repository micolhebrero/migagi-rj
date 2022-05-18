import './App.css';
import {Navbar} from './componentes/Navbar'


function App() {

  const contenido = "Primer contenido de mi App."
  const estiloContenido = {fontSize: "40x", border: "2px solid #FFF"}

  return (
    <div className="App">
      <Navbar/>

      <p style={estiloContenido}>{contenido}</p>

    </div>
  );
}

export default App;
