const express = require('express');
const path = require('path');

const app = express();

app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'inicio.html'));
});

app.get('/galeria', (req, res) => {
  res.sendFile(path.join(__dirname, 'fotos.html'));
});

app.listen(9000, () => {
  console.log('Servidor en ejecución en el puerto 9000');
});
