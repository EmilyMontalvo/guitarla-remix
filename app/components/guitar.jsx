import React from 'react'
import { Link } from '@remix-run/react'

const Guitar = ({guitar}) => {

    return (
        <div className='guitarra'>
            <img src={guitar.image.data.attributes.formats.medium.url} alt={`Imagen guitarra ${guitar.name}`} />
            <div className="contenido">
                <h3>{guitar.name}</h3>
                <p className='descripcion'>{guitar.description[0].children[0].text}</p> 
                <p className='precio'>${guitar.price}</p> 
                <Link className='enlace' to={`/guitars/${guitar.url}`}>View More</Link>
            </div>
        </div>
    )
}

export default Guitar
