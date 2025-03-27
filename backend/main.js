const express = require('express')

app = express();

app.use( express.json());

let id_auto = 4;
let users = [
    {id:1,nombre:"Carlos", edad: 22},
    {id:2,nombre:"Ana", edad: 43},
    {id:3,nombre:"Luis", edad: 31}
]

app.get('/usuarios', (req, res)=>{
    res.json(users);
});

app.get('/usuarios/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const usuario = users.filter( (u)=>{ return u.id === id});
    res.status(200).json(usuario);
});

app.post('/usuarios', (req, res)=>{
    console.log(req);
    const {nombre, edad} = req.body;
    const usuario = {id:id_auto++,nombre, edad}
    users.push(usuario)
    res.status(201).json(usuario);
});

app.put('/usuarios/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const {nombre, edad} = req.body;
    const usuario = {id,nombre, edad};
    users = users.map( u => u.id === id ? usuario : u )
    res.json(usuario);
});

app.delete('/usuarios/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const index = users.findIndex( u => u.id === id );
    if (index>=0) {
        users.splice(index,1);
        return res.sendStatus(204);
    }
    res.status(404).json({"mensaje":"Usuario no encontrado."});
});


app.listen(3000);
