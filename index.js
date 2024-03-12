const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');


const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userscoursesdb') //{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado a MongoDB...'))
.catch(err => console.log('No se pudo conectar con MongoDB...',err));


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/usuarios',usuarios);
app.use('/api/cursos',cursos);


const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log('Api REST Ok, y ejecutandose...');
})
