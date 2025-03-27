const express = require('express')
const app = express()

app.use(express.json() );
const port = 3000;

let id_auto = 4;
let usuarios = [{ id: 1, "nombre": "Carlos Jaramillo", edad: 24, programa: "Sistemas" },
{ id: 2, "nombre": "Ana Mosquera", edad: 35, programa: "Insdutrial" },
{ id: 3, "nombre": "Luis Valencia", edad: 23, programa: "Sistemas" }
];

const getUsers = (req, res) => {
    res.json(usuarios);
}

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);    
    const usuario = usuarios.filter( (u) => { return u.id == id; } );
    res.json(usuario);
}

const addUser = (req, res) => {
    const {nombre, edad, programa} = req.body;
    const usuario = {id: id_auto++, nombre, edad, programa};
    usuarios.push(usuario);
    res.status(201).json(usuario);
}

const deleteUser = ( req, res ) => {
    const id = parseInt(req.params.id); 
    const index = usuarios.findIndex( (u)=> u.id === id )
    if (index>=0) {
        usuarios.splice(index,1);
        return res.sendStatus(204);
    } 
    return res.status(404).json({"mensaje": "Usuario no encontrado"});
}


const updateUser = ( req, res ) => {
    const id = parseInt(req.params.id);
    const {nombre, edad, programa} = req.body;
    const usuario = {id, nombre, edad, programa};
    usuarios = usuarios.map( (u)=> u.id === id ? usuario:u )
    return res.json(usuario);
}

app.get('/users', getUsers);
app.get('/users/:id', getUsersById);
app.post('/users', addUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)


app.listen(port);
console.log("Servidor en el puerto " + port);
