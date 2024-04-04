import '../css/calculator1.css';
import {directions} from './directions.js';
import {navbar} from './navbar.js';

navbar()
directions()

class Calculator{

    /*
        Initiallizes the cal property with the calculator element from the
        HTML and sets up an event listener for key presses
    */

    static ALLOWED_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '(', ')', '=']
    constructor(){
        this.cal = document.getElementById("calc");
        //this.cal.addEventListener("click", this);
        this.cal.addEventListener("keyup", this);
    }

    /*
        This method is used to display the values entered or calculated
        It takes a value as an argument and appends it to the current value
        in the result input field
    */
    displayValues(val){
        document.getElementById("result").value += val;
    }


    /*
        This method is triggered when a key is pressed
        It Checks if the key pressed is a number or an operator
        If so, it calls displayValues method with the key as an
        argument
        If the Enter key is pressed, it calls the solve method
    */

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
        This method is used to calculate the result of the expression entered
        It gets the expression from the result input field, evaluates it using
        the math.evaluate function from the mathjs library, and then displays 
        the result in the result input field
    */
    solve(){
        let x = document.getElementById("result").value;
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
    }

    /*
        This method is used to clear the result input field
        It sets the value of the result input field to an empty
        string
    */
    clear(){
        document.getElementById("result").value = "";
    } 

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
                button.id = isNaN(value) ? 'symbol' : 'number';
                button.onclick = value === '=' ? () => this.solve() : value === 'C' ? () => this.clear() : () => this.displayValues(value);
                td.appendChild(button);
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    }
}

window.onload = () => {
    window.calculator = new Calculator();
    calculator.createButtons();
}