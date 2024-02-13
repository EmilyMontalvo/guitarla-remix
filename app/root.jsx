import {
    Meta, 
    Links
} from "@remix-run/react"
import styles from './styles/index.css'

//  el return en la ruta "meta()" debe retornar un objeto.[CORCHETES]
export function meta(){
    return [
        { charset: 'utf-8' },
        { title: 'Guitar LA - Remix' },
        { name: "viewport", content: "width=device-width,initial-scale=1" }
    ]
}

//Para hojas de estilo, retorno un arreglo porque puedo 
//tener multiples hojas de estilo, tambien puedo agregar 
//imagenes para un prefetch o un preload
// el return en la ruta "links()" debe retornar un objeto. [CORCHETES]
// se cargo la hoja de estilo y las fuentes de google font, el orden en que se pusieron es importante
export const links = () => {
    return [
        {
            rel:'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'

        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect', 
            href :'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap'

        },
        {
            rel: 'stylesheet',
            href: styles
        } 
    ]
}

export default function App(){
    return(
       <Document>
        <h1>Holi</h1>
        </Document>
    )
}

function Document({children}){
    return(
        <html lang= "es">
            <head>
                
                <Meta/>
                <Links/>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}