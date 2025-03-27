import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./components/About"
import Compra from "./components/Compra"
import Faq from "./components/faq";
import ListMovies from "./components/ListMovies";
import { useEffect, useState } from "react";


function App() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>

<BrowserRouter>
<ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/acerca">Acerca de</Link></li>
    <li><Link to="/faqs">Preguntas Frecuentes</Link></li>
    </ul>

    <h1>Hola grupo S641A {hora}</h1> 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, saepe!</p>



      <Routes>
      <Route path="/" element={<ListMovies />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/acerca" element={<About nombre="Carlos Mosquera" edad="18"/>} />
      </Routes>
      </BrowserRouter>
      <p>Chao!</p>
    </>
  )
}

export default App
