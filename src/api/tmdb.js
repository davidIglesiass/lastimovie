const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE = 'https://image.tmdb.org/t/p'

export const hasApiKey = () => Boolean(API_KEY)

export const posterUrl = (path, size = 'w500') => (path ? `${IMAGE_BASE}/${size}${path}` : null)

async function request(path, params = {}) {
  if (!hasApiKey()) throw new Error('Falta configurar VITE_TMDB_API_KEY en el .env')

  const url = new URL(`${BASE_URL}${path}`)
  url.searchParams.set('api_key', API_KEY)
  url.searchParams.set('language', 'es-ES')
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)

  const res = await fetch(url)
  if (!res.ok) throw new Error(`TMDB error ${res.status}`)
  return res.json()
}

export const getPopularMovies = (page = 1) => request('/movie/popular', { page })
export const getTrendingMovies = () => request('/trending/movie/week')
export const searchMovies = (query, page = 1) => request('/search/movie', { query, page })
export const getMovieDetails = (id) => request(`/movie/${id}`)
export const getMovieCredits = (id) => request(`/movie/${id}/credits`)
