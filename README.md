# IP Address Tracker

Aplicación web desarrollada a partir del reto **IP Address Tracker** de Frontend Mentor.

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES Modules)
- Fetch API
- Node.js + Express
- IP Geolocation API de IPify
- Leaflet
- OpenStreetMap
- Git y GitHub
- Render para el despliegue

## Estructura

- `public/`: frontend de la aplicación.
- `server/`: backend y endpoint que consulta IPify.
- `docs/`: documentación técnica del proyecto.
- `design/`: referencias originales del reto.
- `images/`: recursos gráficos proporcionados por Frontend Mentor.

## Ejecución local

1. Instalar dependencias:

```bash
npm install
```

2. Copiar `.env.example` como `.env`.

3. Agregar la clave real de IPify en `.env`:

```env
IPIFY_API_KEY=tu_clave_real
```

4. Ejecutar:

```bash
npm start
```

5. Abrir `http://localhost:3000`.

## Seguridad

La API Key no se guarda en el frontend. El servidor la obtiene mediante `process.env.IPIFY_API_KEY`. El archivo `.env` está excluido mediante `.gitignore` y no debe subirse al repositorio.

## Despliegue

El proyecto está preparado para desplegarse como Web Service en Render usando `npm start` y configurando `IPIFY_API_KEY` como Environment Variable.
