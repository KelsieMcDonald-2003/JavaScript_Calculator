import '../css/calculator1.css';
import {directions} from '../../dev_modules/@ocdla/calculator/js/directions.js';
import {navbar} from '../../dev_modules/@ocdla/calculator/js/navbar.js';
import {Calculator} from '../../dev_modules/@ocdla/calculator/js/calculator.js';

class Controller {
    constructor() {
        navbar();
        directions();
        this.calculator = new Calculator();
        this.createButtons();
        this.cal = document.getElementById("calc");
        this.cal.addEventListener("keyup", this);
        this.cal.addEventListener("click", this);
    }

    displayInput(input) {
        document.getElementById("result").value += input;
    }

    handleEvent(e) {
        e.stopPropagation();
        e.preventDefault();
        let target = e.target;
        let input = e.type == "keyup" ? e.key : e.target.value;

        if(input === "=" || e.keyCode === 13) {
            let userinput = document.getElementById("result").value;
            let solution = this.calculator.solve(userinput);
            this.displaySolution(solution);
        }

        if (!Calculator.ALLOWED_KEYS.includes(input)) {
            return;
        }
        this.displayInput(input);
    }

    displaySolution(y) {
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
    window.controller = new Controller();
}