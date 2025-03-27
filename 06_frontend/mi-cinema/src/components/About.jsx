import { useState } from "react";

function About({ nombre, edad, children }) {
    const [newEdad, setNewEdad] = useState(parseInt(edad));
    const esActivo = false;
    const estilos = {
        color: "blue",
        fontSize: "20px"
    };

    return (
        <>
            <hr />
            <h2 style={estilos}>Perfil de Usuario : {nombre}</h2>
            <p>Edad: { newEdad } años</p>
            <p>Categoria: {edad < 18 ? "Niño" : edad < 55 ? "Adulto" : "Adulto Mayor"}</p>
            <p>Estado: {esActivo ? "Activo" : "Inactivo"}</p>

            <cite>
                {children}
            </cite>
            <br />
            <button onClick={() => setNewEdad(newEdad+1) }>Incrementar la edad</button>
            <hr />
        </>
    );
}

export default About
