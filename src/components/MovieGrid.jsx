import MovieCard from './MovieCard'

function MovieGrid({ movies }) {
  if (!movies.length) return <p className="status-text">No se encontraron películas.</p>

  return (
    <div className="poster-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default MovieGrid
