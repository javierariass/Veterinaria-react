import Formulario from './components/Formulario'
import Cabecera from './components/Cabecera'
import Listado_Pacientes from './components/Listado_Pacientes'

function App() {
  return (
    <div className='container mx-auto mt-20'>
    <Cabecera />

    <div className='mt-12 md:flex'>
         <Formulario />
         <Listado_Pacientes/>
    </div>

    </div>
  )
}

export default App
