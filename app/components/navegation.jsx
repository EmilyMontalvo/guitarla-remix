import React from 'react'
import { 
    Link, 
    useLocation //Brinda informacion de la ubicacion actual
  } from '@remix-run/react'

const Navegation = () => {
    
    const location = useLocation() //Brinda inofrmacion de la ubicacion actual

    return (
        <nav className="navegacion">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} > Home </Link>
            <Link to="/aboutUs" className={location.pathname === 'aboutUs' ? 'active' : ''} > About us </Link>
            <Link to="/store" className={location.pathname === '/store' ? 'active' : ''} > Store </Link>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} > Blog </Link>
        </nav>
    )
}

export default Navegation
