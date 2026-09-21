import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ApiKeyWarning from '../components/ApiKeyWarning'
import { hasApiKey, getMovieDetails, getMovieCredits, posterUrl } from '../api/tmdb'
import { useFavorites } from '../context/FavoritesContext'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [error, setError] = useState('')
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    if (!hasApiKey()) return
    setMovie(null)
    Promise.all([getMovieDetails(id), getMovieCredits(id)])
      .then(([details, credits]) => {
        setMovie(details)
        setCast(credits.cast.slice(0, 6))
      })
      .catch((err) => setError(err.message))
  }, [id])

  if (!hasApiKey()) {
    return (
      <div className="page">
        <ApiKeyWarning />
      </div>
    )
  }

  if (error) return <div className="page"><p className="status-text">{error}</p></div>
  if (!movie) return <div className="page"><p className="status-text">Cargando...</p></div>

  const favorite = isFavorite(movie.id)

  return (
    <>
      <div
        className="detail-banner"
        style={movie.backdrop_path ? { backgroundImage: `url(${posterUrl(movie.backdrop_path, 'original')})` } : undefined}
      >
        <Link to="/" className="back-link">&larr; Volver</Link>
      </div>

      <div className="page">
        <div className="detail-body">
          {posterUrl(movie.poster_path) && (
            <img src={posterUrl(movie.poster_path)} className="detail-poster" alt={movie.title} />
          )}

          <div>
            <div className="detail-header">
              <h1 className="detail-title">{movie.title}</h1>
              <button type="button" className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={() => toggleFavorite(movie)}>
                {favorite ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
              </button>
            </div>
            <p className="detail-meta">⭐ {movie.vote_average?.toFixed(1)} · {movie.release_date} · {movie.runtime} min</p>
            <p className="detail-genres">{movie.genres?.map((g) => g.name).join(', ')}</p>
            <p className="detail-overview">{movie.overview}</p>

            {cast.length > 0 && (
              <>
                <h2 className="cast-heading">Reparto</h2>
                <ul className="cast-list">
                  {cast.map((actor) => (
                    <li key={actor.id}>{actor.name} <span>como {actor.character}</span></li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetail
