import { useState, useEffect } from 'react'

const FuncComponent = () => {
    // console.log('Se procesa el componenente de función')
    // const [name, setName] = useState('Facundo')
    // const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('Se montó el componente de función')
        return () => {
            console.log('Se desmontó el componente de función')
        }
    }, [])
    
    // useEffect(() => {
    //     console.log('Se actualizó el estado name y/o count')
    // }, [name, count])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    

  return (
    <div>
        {console.log("se ejecuto el render")}
        <h1>Su pedido:</h1>
        {loading ? "" : 
        <>
            <h2>Pizzas</h2>
        </>}
        <button onClick={() => setLoading(true)}>Cancelar pedido</button>
        {/* {loading ? 'Loading...' : 
        <>
            {console.log('Se ejecutó el render')}
            <h1>Componente de función</h1>
            <h1>Hola, {name}.</h1>
            <button onClick={() => setName('Flor')}>Este no es mi nombre</button>
            <button onClick={() => setCount(count +1)}>Sumar {count}</button>
        </>} */}
    </div>
  )
}

export default FuncComponent