const express = require('express');
const ruta = express.Router();
const logic = require('../logic/usuario_model');

ruta.get('/', (req, res) => {
    res.json('Respuesta a peticion GET de Usuarios Correctamente');
});


module.exports = ruta;