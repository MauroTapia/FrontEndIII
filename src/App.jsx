import { useState } from 'react'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
import PokeApi from './Components/PokeApi'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <PokeApi />
    </>
    // <>
    // <button onClick={() => setToggle(!toggle)}>Show/Hide</button>
    //    { toggle && < FuncComponent /> }
    // </>
    // <>
    // {toggle ? 
    //   <ClassComponent/>
    //   :
    //   <FuncComponent/>
    //   }
    // <button onClick={() => setToggle(!toggle)}>Cambiar a componente de {toggle ?  'función' : 'clase'}</button>
    // </>
  )
}

export default App
