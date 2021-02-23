"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Cuanto subimos o bajamos la temperatura 
var DELTA = 0.1; // Clase Climatizador.
// Modifica la temperatura de una habitacion.
// Metodos:
//    enfriar
//    calentar

var Climatizador =
/*#__PURE__*/
function () {
  function Climatizador(habitacion) {
    _classCallCheck(this, Climatizador);

    this.habitacion = habitacion;
  }

  _createClass(Climatizador, [{
    key: "enfriar",
    value: function enfriar() {
      console.log('Enfriando.');
      this.habitacion.temperatura -= DELTA;
    }
  }, {
    key: "calentar",
    value: function calentar() {
      console.log('Calentando.');
      this.habitacion.temperatura += DELTA;
    }
  }]);

  return Climatizador;
}();

exports = module.exports = Climatizador;