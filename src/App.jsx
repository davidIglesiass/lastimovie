import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <nav className="nav">
          <div className="nav-inner">
            <Link className="brand" to="/">🎬 LastiMovie</Link>
            <ul className="nav-links">
              <li><NavLink to="/" end>Inicio</NavLink></li>
              <li><NavLink to="/favoritos">Favoritos</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pelicula/:id" element={<MovieDetail />}/>
          <Route path="/favoritos" element={<Favorites />}/>
          <Route path="/contacto" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
