import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.IPIFY_API_KEY;

app.use(express.static('public'));

/**
 * Proxy de backend para IPify.
 *
 * La clave de API se lee desde una variable de entorno para que nunca tenga que ser
 * comprometida en GitHub o enviada al navegador.
 */
app.get('/api/ip', async (req, res) => {
    if (!API_KEY) {
    return res.status(500).json({
        message: 'IPIFY_API_KEY no está configurado en el servidor.'
    });
    }

    const query = String(req.query.query || '').trim();
    const params = new URLSearchParams({
    apiKey: API_KEY,
    format: 'json'
    });

    if (query) {
    // Clasificación simple para las dos entradas compatibles con el desafío:
    // una dirección IPv4 o un nombre de dominio.
    const isIpv4 = /^(?:\\d{1,3}\\.){3}\\d{1,3}$/.test(query);
    params.set(isIpv4 ? 'ipAddress' : 'domain', query);
    }

    try {
    const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?${params.toString()}`
    );

    const data = await response.json();

    if (!response.ok) {
        return res.status(response.status).json({
        message: data.messages || 'IPify rechazó la solicitud.'
        });
    }

    return res.json(data);
    } catch (error) {
    console.error('Solicitud a IPify fallida:', error);
    return res.status(502).json({
        message: 'No se pudo conectar con el servicio de geolocalización IP.'
    });
    }
});

app.listen(PORT, () => {
    console.log(`IP Address Tracker running on port ${PORT}`);
});
