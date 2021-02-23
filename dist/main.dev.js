"use strict";

var Habitacion = require('./habitacion');

var Climatizador = require('./climatizador');

var Termostato = require('./termostato');

var Programador = require('./programador'); // Creamos una habitacion:


var dormitorio = new Habitacion();
dormitorio.temperatura = 22; // Creamos un climatizador para la habitacion:

var climatizador = new Climatizador(dormitorio); // Creamos un Termostato que mira la temperatura de la habitacion:

var termostato = new Termostato(dormitorio); // Creamos un nuevo programador segun se indica en la tabla.

var programacion = [{
  hora: "07:00",
  temperatura: 22
}, {
  hora: "08:30",
  temperatura: 18
}, {
  hora: "18:00",
  temperatura: 22
}, {
  hora: "23:00",
  temperatura: 20
}, {
  hora: "23:38",
  temperatura: 22
}];
var programador = new Programador(programacion); // Configuramos el termostato para controlar la temperatura:

termostato.on('muchofrio', function () {
  return climatizador.calentar();
});
termostato.on('muchocalor', function () {
  return climatizador.enfriar();
}); // Mostar la temperatura periodicamente:
//termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

termostato.on('tic', function (temp) {
  d = new Date();
  console.log(d.toLocaleTimeString() + " ".concat(temp.toFixed(1), "\xBAC"));
}); // Configurar la temp ideal a 20 grados:

termostato.indicarTemperaturaIdeal(20); // Configurar la nueva temperatura

programador.on('ideal', function (temp) {
  termostato.indicarTemperaturaIdeal(temp);
  console.log('Programador fijado temperatura a ' + " ".concat(temp.toFixed(1), "\xBAC"));
}); // Encender el termostato:

termostato.encender();