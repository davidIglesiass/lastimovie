# LastiMovie

Catálogo de películas con React 19 + React Router + Bootstrap, usando la API de [TMDB](https://www.themoviedb.org/).

## Arranque

```bash
npm install
npm run dev
```

Necesitás una API key gratis de TMDB (themoviedb.org/settings/api). Creá un archivo `.env` en la raíz del proyecto con:

```
VITE_TMDB_API_KEY=tu-api-key
```

Sin esa variable, la app muestra un aviso en vez de romper.

## Funcionalidad

- Inicio: carrusel de tendencias + grid de populares
- Búsqueda por título
- Página de detalle por película (`/pelicula/:id`): sinopsis, rating, reparto
