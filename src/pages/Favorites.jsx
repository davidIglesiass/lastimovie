import MovieGrid from '../components/MovieGrid'
import { useFavorites } from '../context/FavoritesContext'

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className="page">
      <h1 className="page-title">Mis favoritos</h1>
      {favorites.length === 0 ? (
        <p className="status-text">Todavía no agregaste ninguna película a favoritos.</p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  )
}

export default Favorites
