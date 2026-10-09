# IP Address Tracker

Aplicación web desarrollada como proyecto académico a partir del reto **IP Address Tracker** de Frontend Mentor. La app permite consultar una dirección IP o un dominio y visualizar información geográfica asociada, como ubicación, zona horaria, ISP y un mapa interactivo del lugar detectado.

## Descripción del proyecto

Este proyecto combina frontend, backend y consumo de APIs para resolver un caso real de geolocalización. La interfaz presenta una búsqueda intuitiva, una tarjeta con los datos relevantes y un mapa con marcador dinámico. La lógica de negocio se resuelve del lado del servidor para proteger la clave de la API externa y mantener un flujo seguro.

## Funcionalidades

- Búsqueda de direcciones IP o dominios.
- Visualización de: IP, ubicación, zona horaria e ISP.
- Mapa interactivo con Leaflet + OpenStreetMap.
- Diseño responsive inspirado en el reto original.
- Backend Express como proxy seguro hacia IPify.
- Configuración de entorno con variables de seguridad.

## Stack tecnológico

- HTML5
- CSS3
- JavaScript (ES Modules)
- Node.js
- Express
- IP Geolocation API de IPify
- Leaflet
- OpenStreetMap
- dotenv
- Git + GitHub
- Render para despliegue

## Estructura del repositorio

```text
.
├── public/                  # Frontend y assets estáticos
│   ├── css/
│   ├── images/
│   ├── js/
│   └── index.html
├── server/
│   └── server.js            # Servidor Express y proxy a IPify
├── docs/                    # Documentación técnica del proyecto
├── design/                  # Referencias visuales del reto
├── .env.example             # Plantilla de variables de entorno
├── .gitignore               # Exclusiones de Git
├── package.json             # Dependencias y scripts
├── README.md                # Documentación principal
└── .env                     # Variables locales de entorno (no versionado)
```

## Requisitos previos

- Node.js 18 o superior
- npm o pnpm
- Cuenta activa con IPify para obtener una API key

## Instalación y ejecución local

1. Clona el repositorio y entra a la carpeta del proyecto:

```bash
git clone https://github.com/Autumnnx/Actividad4-IP_Address_Tracker.git
cd Actividad4-IP_Address_Tracker
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` a partir del ejemplo:

```bash
copy .env.example .env
```

4. Agrega tu clave real de IPify:

```env
IPIFY_API_KEY=tu_clave_real
```

5. Ejecuta la aplicación:

```bash
npm start
```

6. Abre en el navegador:

```text
http://localhost:3000
```

Opcionalmente, puedes ejecutar en modo de desarrollo con recarga automática:

```bash
npm run dev
```

## Endpoint principal

La aplicación cuenta con un backend que expone este endpoint:

```http
GET /api/ip?query=8.8.8.8
```

Este endpoint:

- recibe una IP o dominio como parámetro `query`
- valida la entrada
- consulta la API de IPify desde el servidor
- devuelve un JSON con la información geográfica

## Seguridad

La clave de IPify no se expone al navegador. La API key se lee únicamente desde una variable de entorno en el servidor (`process.env.IPIFY_API_KEY`). Esto evita filtrarla en el frontend y reduce riesgos de seguridad.

Además:

- el archivo `.env` no debe subirse al repositorio
- la configuración sensible se gestiona desde variables del entorno
- el backend actúa como capa intermedia entre el cliente y la API externa

## Despliegue

El proyecto está preparado para desplegarse en Render como un servicio web.

### Variables requeridas en producción

```env
IPIFY_API_KEY=tu_clave_real
PORT=3000
```

### Comandos de inicio

```bash
npm install
npm start
```

## Documentación adicional

La carpeta `docs/` incluye información técnica detallada sobre:

- consumo de la API
- arquitectura del sistema
- despliegue y entorno
- flujo de trabajo con Git y GitHub

## Saludo académico

Saludos cordiales al profesor: muchas gracias por acompañarnos y guiarnos en esta actividad académica. Este proyecto representa la aplicación práctica de conceptos de frontend, backend, APIs externas y despliegue, y es un esfuerzo de aprendizaje que agradecemos profundamente.

## Créditos

Proyecto inspirado en el reto visual de Frontend Mentor, adaptado y desarrollado como actividad académica con enfoque práctico en tecnologías web.
