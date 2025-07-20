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

### Contenido principal (página de inicio)

Edita el archivo `src/data/content.json` y agrega nuevos elementos al array `content`:

```json
{
  "title": "Título del contenido",
  "image": "./images/covers/imagen.png",
  "url": "https://url-del-contenido.com",
  "type": "video|podcast|external"
}
```

### Página "Próximamente"

Puedes configurar la página "Próximamente" editando la sección `proximamente` en `content.json`:

```json
"proximamente": {
  "title": "Texto del título principal",
  "video": "/ruta/al/video/de/fondo.mp4", 
  "listContent": "Texto por defecto cuando no hay contenido próximo",
  "upcomingContent": [
    {
      "title": "Próximo proyecto",
      "image": "./images/covers/proyecto.png",
      "description": "Descripción del proyecto (opcional)",
      "url": "https://enlace-opcional.com"
    }
  ]
}
```

**Opciones:**
- Si `upcomingContent` está vacío, se mostrará el texto de `listContent`
- Si `upcomingContent` tiene elementos, se mostrarán como tarjetas de contenido
- `url` es opcional - si no se incluye, no habrá enlace
- `description` es opcional

Después ejecuta `npm run build` para generar los archivos HTML actualizados.

## Despliegue

El comando `npm run build` genera archivos HTML estáticos en la carpeta `dist/` que pueden ser desplegados directamente en GitHub Pages.