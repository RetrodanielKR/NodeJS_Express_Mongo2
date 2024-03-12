const express = require('express');
const Curso = require('../models/curso_model');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.json('respuesta de yipo Get de Cursos correctamente');
});

module.exports = ruta;