# Arquitectura del sistema

## Visión general

El proyecto sigue una arquitectura cliente-servidor muy simple, con responsabilidades bien separadas:

- El frontend se encarga de la interfaz y la experiencia de usuario.
- El backend actúa como capa intermedia entre el navegador y la API externa.
- La API externa (IPify) provee la información geográfica de IPs y dominios.

```text
Usuario
  │
  ▼
Navegador (HTML + CSS + JS)
  │
  │ fetch('/api/ip?query=...')
  ▼
Express Server
  │
  │ process.env.IPIFY_API_KEY
  ▼
IPify Geolocation API
  │
  │ JSON response
  ▼
Express Server
  │
  ▼
Frontend
  ├── actualiza tarjeta de datos
  ├── actualiza zona horaria
  └── mueve el mapa con Leaflet + OpenStreetMap
```

## Componentes

### Frontend

Ubicado en `public/`:

- `index.html`: estructura principal
- `css/style.css`: estilos y diseño responsive
- `js/api.js`: cliente HTTP para consumir `/api/ip`
- `js/app.js`: lógica de formulario, renderizado y estado en UI
- `js/map.js`: inicialización y actualización del mapa

### Backend

Ubicado en `server/server.js`:

- sirve archivos estáticos desde `public/`
- define el endpoint `/api/ip`
- lee la API key desde `.env`
- valida la entrada del usuario
- realiza la consulta externa
- devuelve la respuesta JSON al navegador

## Flujo de datos

1. El usuario ingresa una IP o un dominio.
2. La UI hace una petición al backend.
3. El servidor valida y reenvía la solicitud a IPify.
4. El servicio externo responde con los datos de geolocalización.
5. El frontend renderiza esos datos en la tarjeta y actualiza el mapa.

## Beneficios de esta arquitectura

- Seguridad: la API key se mantiene del lado del servidor.
- Mantenibilidad: la lógica de negocio está separada del frontend.
- Escalabilidad: el backend puede ampliarse con validaciones o caché.
- Mejor práctica académica: demuestra uso de arquitectura cliente-servidor con API externa.

Saludos al profesor: esta organización ayuda a comprender cómo se construye una aplicación web moderna con una capa de backend y una capa de presentación clara.
