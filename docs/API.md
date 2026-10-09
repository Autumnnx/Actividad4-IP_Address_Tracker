# Documentación de la API

## Propósito

La aplicación usa un backend Express para ocultar la clave de acceso a la API de IPify y centralizar la lógica de comunicación con el servicio externo. El navegador nunca interactúa directamente con IPify, sino con un endpoint propio del proyecto.

## Endpoint principal

```http
GET /api/ip?query={ip_o_dominio}
```

### Parámetros

- `query`: dirección IP o dominio a consultar. Es opcional. Si no se incluye, la API intenta resolver la IP pública del cliente.

### Ejemplos

```bash
curl "http://localhost:3000/api/ip?query=8.8.8.8"
curl "http://localhost:3000/api/ip?query=github.com"
```

## Flujo de trabajo

1. El frontend envia una petición al backend mediante `fetch()`.
2. Express recibe la petición y valida la variable de entorno `IPIFY_API_KEY`.
3. El servidor arma la consulta a IPify con `apiKey` y `format=json`.
4. Si la consulta es una IP, usa `ipAddress`; si es un dominio, usa `domain`.
5. IPify responde con un JSON que incluye la información geográfica y el ISP.
6. El backend devuelve esa respuesta al cliente para dibujar la tarjeta y actualizar el mapa.

## Respuesta esperada

```json
{
  "ip": "8.8.8.8",
  "location": {
    "country": "US",
    "region": "California",
    "city": "Mountain View",
    "lat": 37.4056,
    "lng": -122.0785,
    "timezone": "-07:00"
  },
  "isp": "Google LLC"
}
```

## Manejo de errores

El servidor responde con un código HTTP apropiado:

- `500`: falta la variable `IPIFY_API_KEY`
- `502`: error de comunicación con IPify
- `400+`: rechazo de solicitud por parte del servicio externo

## Seguridad

- La clave de API se gestiona únicamente desde el servidor.
- El frontend no almacena ni expone secretos.
- La lógica de acceso externo queda encapsulada en `server/server.js`.

Saludos académicos al profesor: gracias por guiarnos en esta práctica de integración de APIs y arquitectura cliente-servidor.
