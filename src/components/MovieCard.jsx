import { Link } from 'react-router-dom'
import { posterUrl } from '../api/tmdb'
import { useFavorites } from '../context/FavoritesContext'

function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(movie.id)

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(movie)
  }

  return (
    <div className="poster-card">
      <button
        type="button"
        onClick={handleFavoriteClick}
        aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        className="favorite-toggle"
      >
        {favorite ? '❤️' : '🤍'}
      </button>
      <Link to={`/pelicula/${movie.id}`}>
        {posterUrl(movie.poster_path) ? (
          <img src={posterUrl(movie.poster_path)} alt={movie.title} loading="lazy" />
        ) : (
          <div className="poster-empty">Sin poster</div>
        )}
        <div className="poster-scrim">
          <p className="poster-title">{movie.title}</p>
          <p className="poster-meta">⭐ {movie.vote_average?.toFixed(1) ?? '—'} · {movie.release_date?.slice(0, 4) ?? '—'}</p>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
