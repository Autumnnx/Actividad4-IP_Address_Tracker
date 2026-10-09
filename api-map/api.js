/**
 * Cliente para la API de IPify. Se utiliza para obtener información de IP y dominio.
 *
 * La interfaz de usuario no contiene la clave de API de IPify.
 * Llama a nuestro endpoint de Express y el servidor realiza la solicitud externa.
 */
export async function getIpData(query = '') {
    const endpoint = query
    ? `/api/ip?query=${encodeURIComponent(query)}`
    : '/api/ip';

    const response = await fetch(endpoint);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
    throw new Error(data.message || 'No se puede recuperar la información de IP.');
    }

    return data;
}
