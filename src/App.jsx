import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp.jpg'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='aplicacion-tareas'>
        <div className='freecodecamp-logo-contendor'>
          <img 
            src={freeCodeCampLogo} 
            className='freecodecamp-logo' />
        </div>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
