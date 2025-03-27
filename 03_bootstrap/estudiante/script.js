let estudiantes = []

//document.getElementById("formulario").addEventListener('submit', (e) => { e.preventDefault(); });


function registar() {
    const nombre = document.getElementById("nombre").value;
    const facultad = document.getElementById("facultad").value;
    const edad = parseInt(document.getElementById("edad").value);
    const nota = parseFloat(document.getElementById("nota").value);

    const est = { nombre, facultad, edad, nota };

    estudiantes.push(est);
    const toast = new bootstrap.Toast(document.getElementById("toastexito"))
    toast.show();
    limpiar();
    actualizarLista();
    promedio();
}


function limpiar(params) {
    document.getElementById("nombre").value = "";
    document.getElementById("facultad").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("nota").value = "";
}

function promedio(params) {
    let total = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        total += estudiantes[i].nota;
        
    }

    const prom = total /  estudiantes.length;

    const valor = estudiantes.length > 0 ? prom.toFixed(1): 0.0;
    document.getElementById("promedio").textContent = valor;

}

function actualizarLista(){
    let cadena = ""

    for (let i = 0; i < estudiantes.length; i++) {
        cadena +=`
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${estudiantes[i].nombre}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${estudiantes[i].facultad}</h6>
                        <p class="card-text">Edad: ${estudiantes[i].edad}</p>
                        <p class="card-text">Nota: ${estudiantes[i].nota}</p>
                        <a href="#" class="btn btn-danger" onclick="eliminar(${i})"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                    </div>
                </div>
            </div>
`
    }
    document.getElementById("lista-estudiantes").innerHTML = cadena;
}


function eliminar(index) {
    estudiantes.splice(index,1)
    actualizarLista();
    promedio();
}