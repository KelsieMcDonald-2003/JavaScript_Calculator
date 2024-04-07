"use strict";
self["webpackHotUpdaterecipesearchapp"]("calculator1",{

/***/ "./src/js/calvs1.js":
/*!**************************!*\
  !*** ./src/js/calvs1.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_calculator1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/calculator1.css */ "./src/css/calculator1.css");
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

/*
class Calculator{
    /*
        This static property contains an array of allowed keys for the 
        calculator
    
    static ALLOWED_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '(', ')', '=']
    
    /*
        This is the constructor method for the Calculator class. It gets the calculator 
        element from the DOM and adds an event listener for the “keyup” event.
    
    constructor(){
        this.cal = document.getElementById("calc");
        //this.cal.addEventListener("click", this);
        this.cal.addEventListener("keyup", this);
    }

    /*
        This method appends the passed value to the calculator’s display.
    
    displayValues(val){
        document.getElementById("result").value += val;
    }

    /*
      This method handles the events triggered on the calculator. It checks if the event target is 
      a button and if the value is allowed. If the value is “=”, it calls the solve() method. If 
      the value is an allowed key, it calls the displayValues() method. It also calls the solve() 
      method if the “Enter” key is pressed.  
    
    handleEvent(e){
        e.preventDefault();
        let target = e.target;
        let value = e.type == "keyup" ? e.key : e.target.value;
    
        // Check if the event target is a button
        if(target.tagName.toLowerCase() === 'input' && target.type === 'button'){
            if(value === "="){
                this.solve();
            } else if(Calculator.ALLOWED_KEYS.includes(value)){
                this.displayValues(value);
            }
            // Stop the event from bubbling up to the calculator
            e.stopPropagation();
        }
    
        if(e.keyCode === 13){
            this.solve();
        }
    }
    
    /*
        This method evaluates the expression in the calculator’s display and updates the display with the result.
    
    solve(){
        let x = document.getElementById("result").value;
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
    }

    /*
        This method clears the calculator’s display.
    
    clear(){
        document.getElementById("result").value = "";
    } 

    /*
        This method creates the buttons for the calculator and adds them to the DOM. 
        It also assigns the appropriate event handlers to each button.
    
    createButtons(){
        const buttonValues = [
            ['7', '8', '9', '/'],
            ['4', '5', '6', '*'],
            ['1', '2', '3', '-'],
            ['.', '0', '+', '%'],
            ['(', ')', '=']
        ];

        const table = document.getElementById('calc');

        buttonValues.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(value => {
                const td = document.createElement('td');
                const button = document.createElement('input');
                button.type = 'button';
                button.value = value;
                if(value === '='){
                    button.id = 'equals';
                    td.colSpan = 2;
                } else{
                    button.id = isNaN(value) ? 'symbol' : 'number';
                }
                button.onclick = value === '=' ? () => this.solve() : value === 'C' ? () => this.clear() : () => this.displayValues(value);
                td.appendChild(button);
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    }
}

/*
    This is an event handler that gets called when the window has finished loading. 
    It creates a new instance of the Calculator class and calls the createButtons() method.

window.onload = () => {
    window.calculator = new Calculator();
    calculator.createButtons();
}
*/
var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
    this.cal = document.getElementById("calc");
    this.cal.addEventListener("keyup", this);
    this.cal.addEventListener("click", this);
  }
  return _createClass(Calculator, [{
    key: "displayValues",
    value: function displayValues(val) {
      document.getElementById("result").value += val;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      e.preventDefault();
      var target = e.target;
      var value = e.type == "keyup" ? e.key : e.target.value;
      if (target.tagName.toLowerCase() === 'input' && target.type === 'button') {
        if (value === "=") {
          this.solve();
        } else if (Calculator.ALLOWED_KEYS.includes(value)) {
          this.displayValues(value);
        }
        e.stopPropagation();
      }
      if (e.keyCode === 13) {
        this.solve();
      }
    }
  }, {
    key: "solve",
    value: function solve() {
      var x = document.getElementById("result").value;
      var y = math.evaluate(x);
      document.getElementById("result").value = y;
    }
  }, {
    key: "clear",
    value: function clear() {
      document.getElementById("result").value = "";
    }

    /*
    createButtons() {
        const table = document.getElementById('calc');
        let buttonId = 0;
        let tr = document.createElement('tr'); // Create the first row
    
        Calculator.ALLOWED_KEYS.forEach((value, index) => {
            if (index % 4 === 0 && index !== 0) { // Change '4' to set the number of buttons per row
                table.appendChild(tr); // Append the completed row to the table
                tr = document.createElement('tr'); // Create a new row for next set of buttons
            }
    
            const td = document.createElement('td');
            const button = document.createElement('input');
            button.type = 'button';
            button.value = value;
            button.id = `button${buttonId++}`;
            td.appendChild(button);
            tr.appendChild(td); 
        });
    
        table.appendChild(tr); // Append the last row to the table
    }  */
  }, {
    key: "createButtons",
    value: function createButtons() {
      var table = document.getElementById('calc');
      var buttonId = 0;
      var tr = document.createElement('tr'); // Create the first row

      Calculator.ALLOWED_KEYS.forEach(function (value, index) {
        if (!isNaN(value)) {
          // Only create buttons for numeric values
          if (index % 4 === 0 && index !== 0) {
            // Change '4' to set the number of buttons per row
            table.appendChild(tr); // Append the completed row to the table
            tr = document.createElement('tr'); // Create a new row for next set of buttons
          }
          var td = document.createElement('td');
          var button = document.createElement('input');
          button.type = 'button';
          button.value = value;
          button.id = "button".concat(Date.now()).concat(buttonId++); // Generate a unique ID for each button
          td.appendChild(button);
          tr.appendChild(td);
        }
      });
      table.appendChild(tr); // Append the last row to the table
    }
  }]);
}();
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
/******/ 	__webpack_require__.h = () => ("3dfd71081aad375256f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=calculator1.ce8d9fd9a2fa6bf06df7.hot-update.js.map