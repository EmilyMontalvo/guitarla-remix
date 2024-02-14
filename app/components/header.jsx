import React from 'react'
import { 
  Link
} from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegation from './navegation'

const Header = () => {
  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link className="logo" to='/'>
          <img className='logo' src={logo} alt="Imagen logo" />
        </Link>
        <Navegation/>
      </div>
    </header>
  )
}

export default Header
