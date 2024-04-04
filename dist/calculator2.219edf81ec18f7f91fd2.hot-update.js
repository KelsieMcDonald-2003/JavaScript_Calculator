"use strict";
self["webpackHotUpdaterecipesearchapp"]("calculator2",{

/***/ "./src/js/calvs2.js":
/*!**************************!*\
  !*** ./src/js/calvs2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_calculator2_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/calculator2.css */ "./src/css/calculator2.css");
/* harmony import */ var _directions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directions.js */ "./src/js/directions.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.js */ "./src/js/navbar.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



(0,_navbar_js__WEBPACK_IMPORTED_MODULE_2__.navbar)();
(0,_directions_js__WEBPACK_IMPORTED_MODULE_1__.directions)();
var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
    this.cal = document.getElementById("calc");
    this.cal.addEventListener("click", this);
    this.cal.addEventListener("keyup", this);
  }

  /*
      This method is used to display the values entered or calculated
      It takes a value as an argument and appends it to the current value
      in the result input field
  */
  return _createClass(Calculator, [{
    key: "displayValues",
    value: function displayValues(val) {
      document.getElementById("result").value += val;
    }

    /*
        This method is triggered when a key is pressed
        It Checks if the key pressed is a number or an operator
        If so, it calls displayValues method with the key as an
        argument
        If the Enter key is pressed, it calls the solve method
    */
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      e.preventDefault();
      var target = e.target;
      var value = e.type == "keyup" ? e.key : e.target.value;
      if (value === "=") {
        this.solve();
      } else if (Calculator.ALLOWED_KEYS.includes(value)) {
        this.displayValues(value);
      }
      if (e.keyCode === 13) {
        this.solve();
      }
    }

    /*
        This method is used to calculate the result of the expression entered
        It gets the expression from the result input field, evaluates it using
        the math.evaluate function from the mathjs library, and then displays 
        the result in the result input field
    */
  }, {
    key: "solve",
    value: function solve() {
      var x = document.getElementById("result").value;
      var y = math.evaluate(x);
      document.getElementById("result").value = y;
    }

    /*
        This method is used to clear the result input field
        It sets the value of the result input field to an empty
        string
    */
  }, {
    key: "clear",
    value: function clear() {
      document.getElementById("result").value = "";
    }
  }, {
    key: "createButtons",
    value: function createButtons() {
      var _this = this;
      var buttonValues = [['7', '8', '9', '/'], ['4', '5', '6', '*'], ['1', '2', '3', '-'], ['.', '0', '+', '%'], ['(', ')', '=']];
      var table = document.getElementById('calc');
      buttonValues.forEach(function (row) {
        var tr = document.createElement('tr');
        row.forEach(function (value) {
          var td = document.createElement('td');
          var button = document.createElement('input');
          button.type = 'button';
          button.value = value;
          button.id = isNaN(value) ? 'symbol' : 'number';
          button.onclick = value === '=' ? function () {
            return _this.solve();
          } : value === 'C' ? function () {
            return _this.clear();
          } : function () {
            return _this.displayValues(value);
          };
          td.appendChild(button);
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
    }
  }]);
}();
/*
    Initiallizes the cal property with the calculator element from the
    HTML and sets up an event listener for key presses
*/
_defineProperty(Calculator, "ALLOWED_KEYS", ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '(', ')', '=']);
window.onload = function () {
  window.calculator = new Calculator();
  calculator.createButtons();
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4fc576e74990fa6cae7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=calculator2.219edf81ec18f7f91fd2.hot-update.js.map