# Git y GitHub

## Estrategia de ramas

Una estructura clara facilita el trabajo en equipo y la entrega del proyecto:

- `main`: versión estable y lista para entrega.
- `develop`: integración de cambios y pruebas.
- `feature/frontend`: trabajo relacionado con HTML, CSS y maquetado.
- `feature/backend`: lógica del servidor y rutas.
- `feature/api`: integración con IPify y manejo de respuestas.
- `feature/docs`: documentación del proyecto.

## Flujo recomendado

1. Crear una rama desde `develop` o `main`.
2. Trabajar en cambios concretos y con commits descriptivos.
3. Hacer commits frecuentes con mensajes claros.
4. Abrir un Pull Request para revisión.
5. Revisar el código, corregir comentarios y hacer merge.

## Convenciones de commits

Ejemplos recomendados:

```bash
git commit -m "feat: add IP search form"
git commit -m "fix: handle missing API key"
git commit -m "docs: improve project README"
```

## Buenas prácticas

- Mantener ramas pequeñas y enfocadas.
- No subir archivos sensibles, como `.env`.
- Revisar cambios antes de fusionar.
- Mantener descripciones claras en Pull Requests.

## Relación con la actividad académica

Git y GitHub no solo sirven para versionar el código, sino también para demostrar un proceso profesional de desarrollo colaborativo y control de entregas en entornos educativos.

Saludos al profesor: gracias por fomentar buenas prácticas de trabajo en equipo y trazabilidad de proyectos.
