/* Con el .server le decimos a Remix que este archivo solo puede ejecutarse en la parte del administrador */

export async function getAllGuitars(){
    const url = process.env.API_URL_GET_ALL_GUITARS
    // 1. Obtengo resultado de API
    const response = await fetch(url)
    // 2. Covierto la respuesta de JSON
    const jsonResponse = response.json()

    return jsonResponse
}