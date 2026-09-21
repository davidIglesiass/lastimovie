import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'lastimovie_favorites'

const readFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (id) => favorites.some((m) => m.id === id)

  const toggleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((m) => m.id === movie.id) ? prev.filter((m) => m.id !== movie.id) : [...prev, movie]
    )
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider')
  return ctx
}
