export function meta(){
    return (
        {
            charset: "utf-8",
            title:"Guitar LA - Remix",
            viewport: "widht=device-width,initial-scale=1"
        }
    )
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
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}