# Consumo de API

El navegador consulta el endpoint local `/api/ip`. El servidor Express recibe la búsqueda y consulta la API de geolocalización de IPify utilizando la variable de entorno `IPIFY_API_KEY`.

El frontend recibe la respuesta JSON y utiliza sus datos para actualizar la tarjeta informativa y las coordenadas del mapa.
