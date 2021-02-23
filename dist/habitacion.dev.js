"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Clase habitacion.
// Su temperatura cambia aleatoriamente. (Simula el invierno o el verano)
var Habitacion = function Habitacion() {
  var _this = this;

  _classCallCheck(this, Habitacion);

  // Temperatura actual de la habitacion:
  this.temperatura = 20.0; // Cada 10 segundos sube o baja aleatoriamente la temperatura 
  // hasta +/- un grado:

  setInterval(function () {
    _this.temperatura += Math.random() * 2 - 1, console.log("Cambio aleatorio a ".concat(_this.temperatura.toFixed(1), "\xBAC"));
  }, 10000);
};

exports = module.exports = Habitacion;