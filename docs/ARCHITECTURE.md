# Arquitectura

```text
Usuario
  ↓
HTML + CSS + JavaScript
  ↓ fetch()
Express /api/ip
  ↓ API Key desde process.env
IPify
  ↓ JSON
Express
  ↓
Frontend
  ├── tarjeta de información
  └── Leaflet + OpenStreetMap
```
