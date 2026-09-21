import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import ApiKeyWarning from '../components/ApiKeyWarning'
import { hasApiKey, getTrendingMovies, getPopularMovies, searchMovies, posterUrl } from '../api/tmdb'

function Home() {
  const [featured, setFeatured] = useState(null)
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!hasApiKey()) {
      setLoading(false)
      return
    }
    Promise.all([getTrendingMovies(), getPopularMovies()])
      .then(([trendingRes, popularRes]) => {
        setFeatured(trendingRes.results[0] ?? null)
        setMovies(popularRes.results)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return
    setLoading(true)
    try {
      const res = await searchMovies(query)
      setMovies(res.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!hasApiKey()) {
    return (
      <div className="page">
        <ApiKeyWarning />
      </div>
    )
  }

  return (
    <>
      {featured && (
        <div
          className="hero"
          style={{ backgroundImage: `url(${posterUrl(featured.backdrop_path ?? featured.poster_path, 'original')})` }}
        >
          <div className="hero-content">
            <h1 className="hero-title">{featured.title}</h1>
            <p className="hero-meta">⭐ {featured.vote_average?.toFixed(1)} · {featured.release_date?.slice(0, 4)}</p>
            <p className="hero-overview">{featured.overview}</p>
            <Link to={`/pelicula/${featured.id}`} className="hero-link">Ver detalle</Link>
          </div>
        </div>
      )}

      <div className="page">
        <form className="search" onSubmit={handleSearch}>
          <input
            type="search"
            className="search-input"
            placeholder="Buscar películas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" type="submit">Buscar</button>
        </form>

        {error && <p className="status-text">{error}</p>}
        {loading ? <p className="status-text">Cargando...</p> : <MovieGrid movies={movies} />}
      </div>
    </>
  )
}

export default Home
