import { useLoaderData } from '@remix-run/react'
import React from 'react'
import Guitar from '~/components/guitar'
import { getAllGuitars } from '~/data/guitars.server'
import style from '~/styles/guitars.css'

export function meta(){
  return [
      { title: 'Store Guitar LA' },
      { description: 'Tienda de guitarras' }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: style
    }
  ]

}


//El loader se manda a llamar en automatico
//Loader es lo que utilizas cuando un componente carga

export async function loader()
{
  const guitars = await getAllGuitars()
  
  return guitars.data

}

const Store = () => {

  const guitars = useLoaderData()

  return (
    <main className='contenedor'>
      <h2 className="heading">Our Collection</h2>

      {guitars && guitars?.length && (
        <div className='guitarras-grid'>
          {guitars.map( guitar => (
             <Guitar
             key ={guitar?.id}
             guitar = {guitar?.attributes}
             />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store
