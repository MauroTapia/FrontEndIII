import { useState } from 'react'

function App() {

  const ejemplo = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iure.</p>
  
  const [num, setNum] = useState(1);

  const sumar = () => {
    setNum(num+1);
  } 

  return (
    <div className='App'>
      <h1>Hola mundo</h1>
      <button onClick={sumar}>+1</button>
      <p>{num}</p>
      {ejemplo}
    </div> 
)
}

export default App
