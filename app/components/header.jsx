import React from 'react'
import { 
  Link, 
  useLocation //Brinda informacion de la ubicacion actual
} from '@remix-run/react'
import logo from '../../public/img/logo.svg'

const Header = () => {

  const location = useLocation() //Brinda inofrmacion de la ubicacion actual
 

  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link className="logo" to='/'>
          <img className='logo' src={logo} alt="Imagen logo" />
        </Link>
        <nav className="navegacion">
          <Link to="/" className={location.pathname === '/' ? 'active': ''} > Inicio </Link>
          <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active': ''} > Nosotros </Link>
          <Link to="/tienda" className={location.pathname === '/tienda' ? 'active': ''} > Tienda </Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active': ''} > Blog </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
