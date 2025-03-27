import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ListMovies() {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargar = async () => {
      try {
        const result = await axios.get("http://localhost:3000/peliculas");
        setPeliculas(result.data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    }

    cargar();


  }, []);

  const handleDelete = (id)=>{
    if (confirm(`Esta seguro que desea eliminar la pelicula ${id}`)) {
      axios.delete(`http://localhost:3000/peliculas/${id}`)
      setPeliculas(peliculas.filter((pelicula) => pelicula.id !== id));
    }
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-success mb-3" onClick={() => navigate("/new-movies")}>
        <i className="bi bi-plus-circle me-1"></i> Crear nueva película
      </button>
      <h2 className="text-primary mb-3">Listado de Películas</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha de Estreno</th>
            <th>Nacionalidad</th>
            <th>Clasificación</th>
            <th>Director</th>
            <th>Géneros</th>
            <th>Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula) => (
            <tr key={pelicula.id}>
              <td>{pelicula.id}</td>
              <td>{pelicula.titulo}</td>
              <td>{pelicula.fecha_estreno}</td>
              <td>{pelicula.nacionalidad}</td>
              <td>{pelicula.clasificacion}</td>
              <td>{pelicula.director}</td>
              <td>{pelicula.generos.join(", ")}</td>
              <td>
              <button className="btn btn-warning me-2" onClick={() => navigate(`/edit-movie/${pelicula.id}`)}>
                    <i className="bi bi-pencil"></i></button>
                  <button className="btn btn-danger" onClick={() => handleDelete(pelicula.id)}>
                    <i className="bi bi-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListMovies