import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Tutos Deivis</Link>
            <div className="collapse navbar-collapse show">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacto" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
