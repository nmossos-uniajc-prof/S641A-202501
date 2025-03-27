import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import ListMovies from "./components/ListMovies"
import NewMovie from "./components/NewMovie";
import EditMovie from "./components/EditMovie";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-md bg-dark border-bottom border-body"  data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Grupo S641A</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">Acerca de </Link>
                <Link className="nav-link" to="/lista-peliculas">Peliculas</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lista-peliculas' element={<ListMovies />} />
          <Route path="/new-movies" element={<NewMovie />} />
          <Route path="/edit-movie/:id" element={<EditMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
