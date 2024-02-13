import {
    Meta,   // Para la cabecera
    Links,  // Para importar estilos, etc
    Outlet, // Para inyectar routas
    Scripts, // Tiene todas las optimizaciones de Remix, sirve para ya no tener el flasheo de cargando
    LiveReload // Para no estar recargando a cada momento, esucha los cambios
} from "@remix-run/react"
/* Coloco ~ en el json.config para apuntar a la carpeta app, entonces puedo poner ~ en mis rutas para que apunte
directo a la carpeta y no tenga que hacer esto: ../../ para salir de las carpetas
Asi obtengo la ruta relativa hacia la app */
import styles from '~/styles/index.css'
import Header from "~/components/Header"
import Footer from "~/components/footer"

//  el return en la ruta "meta()" debe retornar un objeto.[CORCHETES]
// Este meta funciona en routes pero no para componentes
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

/* REMIX es un modelo basado en rutas porque con forme vayas creando archivos en routes las ira registrando como rutas de tu aplicacion*/
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

/* Al agregar Outlet puedo inyectar todas las routas que tengo en routes para que se muestren */

export default function App(){
    return(
       <Document>
            <Outlet/>
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
                <Header/>
                {children}
                <Scripts/>
                <LiveReload/>
                <Footer/>
            </body>
        </html>
    )
}