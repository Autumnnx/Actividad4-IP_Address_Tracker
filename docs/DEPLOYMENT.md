# Despliegue y entrega del proyecto

## Objetivo

Documentar la forma de publicar la aplicación de manera segura y profesional en un entorno de producción.

## Requisitos de despliegue

- Cuenta en Render
- Repositorio GitHub con el proyecto actualizado
- Variable de entorno `IPIFY_API_KEY`
- Puerto configurable por la plataforma (`PORT`)

## Configuración en Render

1. Crea un nuevo servicio web en Render.
2. Conecta el repositorio del proyecto.
3. Selecciona el tipo de servicio: `Web Service`.
4. Usa el comando de inicio:

```bash
npm start
```

5. Configura la variable de entorno:

```env
IPIFY_API_KEY=tu_clave_real
```

6. Guarda y despliega.

## Variables recomendadas

```env
PORT=3000
IPIFY_API_KEY=tu_clave_real
```

## Consideraciones importantes

- No incluir claves sensibles en el repositorio.
- Usar variables de entorno en Render o en el entorno de producción.
- Mantener `npm start` como comando principal para arrancar la app.
- Verificar que el servicio pueda servir los archivos estáticos y responder en `/api/ip`.

## Validación post-despliegue

Tras el despliegue, conviene comprobar:

- que la app responde en la URL pública
- que el formulario funciona
- que la búsqueda por IP y dominio devuelve datos válidos
- que la clave se maneja sin exponerla al cliente

## Cierre académico

Este despliegue representa una práctica real de publicación web, integrando observaciones de seguridad, configuración de entorno y automatización de entorno productivo.
