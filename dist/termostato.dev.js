"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = require('./events'); // Diferencia de temperatura permitida entre la temperatura real y la ideal.


var MARGEN_ERROR = 0.3; // Clase Termostato.
// Mira la temperatura de una habitacion y avisa si hace demasiado calor o frio.
// Tambien informa sobre la temperatura actual de la habitacion.
// Metodos:
//    indicarTemperaturaIdeal
//    encender
//    apagar
// Eventos:
//    tic
//    muchocalor
//    muchofrio

var Termostato =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Termostato, _EventEmitter);

  function Termostato(habitacion) {
    var _this;

    _classCallCheck(this, Termostato);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Termostato).call(this));
    _this.habitacion = habitacion; // Temperatura ideal programada:

    _this.temperaturaIdeal = 16; // para cancelar el temporizador setInterval:

    _this.intervalId = null;
    return _this;
  }

  _createClass(Termostato, [{
    key: "indicarTemperaturaIdeal",
    value: function indicarTemperaturaIdeal(temperaturaIdeal) {
      this.temperaturaIdeal = temperaturaIdeal;
    }
  }, {
    key: "encender",
    value: function encender() {
      var _this2 = this;

      console.log('Encendiendo el termostato.');
      clearInterval(this.intervalId);
      this.intervalId = setInterval(function () {
        _this2.emit('tic', _this2.habitacion.temperatura);

        if (_this2.habitacion.temperatura > _this2.temperaturaIdeal + MARGEN_ERROR) {
          _this2.emit('muchocalor');
        } else if (_this2.habitacion.temperatura < _this2.temperaturaIdeal - MARGEN_ERROR) {
          _this2.emit('muchofrio');
        }
      }, 500);
    }
  }, {
    key: "apagar",
    value: function apagar() {
      console.log('Apagando el termostato.');
      clearInterval(this.intervalId);
    }
  }]);

  return Termostato;
}(EventEmitter);

exports = module.exports = Termostato;