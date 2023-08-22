import React from 'react'

const NavBar = () => {
    const titulos = ['Home', 'Contacto', 'Shop', 'Acerca de']
    const titulosMapeados = titulos.map((titulo, indice) => {
        return <h4 key={indice}>{titulo}</h4>
    })
  return (
    <div>
        {titulosMapeados}
    </div>
  )
}

export default NavBar