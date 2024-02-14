import React from 'react'
import Navegation from './navegation'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="contenedor contenido">
            <Navegation/>
            <p className="copyright">All rigths are reserved {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer
