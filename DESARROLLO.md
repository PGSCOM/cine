# Desarrollo con Astro

Este sitio ahora utiliza Astro para generar las páginas de forma automática desde datos JSON.

## Estructura del proyecto

- `src/data/content.json` - Contiene todos los datos del sitio (contenido, navegación, etc.)
- `src/pages/` - Páginas Astro que se generan como HTML estático
- `src/layouts/` - Plantillas reutilizables
- `public/` - Archivos estáticos (imágenes, CSS, etc.)
- `legacy/` - Archivos HTML originales (respaldo)

## Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
```

## Cómo agregar nuevo contenido

Edita el archivo `src/data/content.json` y agrega nuevos elementos al array `content`:

```json
{
  "title": "Título del contenido",
  "image": "./images/covers/imagen.png",
  "url": "https://url-del-contenido.com",
  "type": "video|podcast|external"
}
```

Después ejecuta `npm run build` para generar los archivos HTML actualizados.

## Despliegue

El comando `npm run build` genera archivos HTML estáticos en la carpeta `dist/` que pueden ser desplegados directamente en GitHub Pages.