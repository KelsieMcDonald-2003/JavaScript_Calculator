import '../css/calculator1.css';
import {directions} from './directions.js';
import {navbar} from './navbar.js';
import * as math from 'mathjs';

navbar()
directions()

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

class Calculator {
    //static ALLOWED_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '(', ')', '='];
    static ALLOWED_KEYS = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '00', '(', ')', '.', '%', '^', '='];

    constructor() {
        this.cal = document.getElementById("calc");
        this.cal.addEventListener("keyup", this);
        this.cal.addEventListener("click", this);
    }

    displayValues(val) {
        document.getElementById("result").value += val;
    }

    handleEvent(e) {
        e.preventDefault();
        let target = e.target;
        let value = e.type == "keyup" ? e.key : e.target.value;

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

    solve() {
        let x = document.getElementById("result").value;
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
    }

    clear() {
        document.getElementById("result").value = "";
    }

    /*
     The following method is used to dynamically create a set of
     buttons and add them to a table in the HTML document.
    */
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
    }  
}

window.onload = () => {
    window.calculator = new Calculator();
    calculator.createButtons();
}