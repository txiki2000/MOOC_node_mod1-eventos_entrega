"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//Para emitir eventos.
var EventEmitter = require('./events'); // Gestion horaria


var later = require('later'); //Usamos la hora local


later.date.localTime();

var Programador =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Programador, _EventEmitter);

  // Recibe la tabla con la programación horaria.    
  function Programador(programacion) {
    var _this;

    _classCallCheck(this, Programador);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Programador).call(this));
    console.log(programacion);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var par = _step.value;
        console.log('Programacion aceptada a las ' + par.hora + '=>' + par.temperatura); //Planificamos un evento a la hora indicada.

        var prog = later.parse.text('at ' + par.hora); //a la hora indicada lanzamos el evento 'ideal'

        later.setInterval(function () {
          return _this.emit('ideal', par.temperatura);
        }, prog);
      };

      for (var _iterator = programacion[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return _this;
  }

  return Programador;
}(EventEmitter);

exports = module.exports = Programador;