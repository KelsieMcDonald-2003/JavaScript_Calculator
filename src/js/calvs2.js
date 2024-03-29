import {navbar} from './navbar.js';
import '../css/calculator2.css';
navbar()

class Calculator{
    constructor(){
        this.cal = document.getElementById("calc");
        this.cal.onkeyup = this.handleKeyPress.bind(this);
        this.values = []; // Initialize an empty array to store the values
    }

    handleKeyPress(event){
        if(event.key >= '0' && event.key <= '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '%' || event.key == '(' || event.key == ')'){
            this.displayValues(event.key); // Store the key pressed in the array
            if(this.values.length > 2 && !isNaN(this.values[this.values.length - 2]) && isNaN(this.values[this.values.length - 3])){
                this.solve();
            }
        }
        if(event.keyCode === 13){
            console.log("Enter");
            this.solve();
        }
    }
    

    displayValues(value){
        this.values.push(value); // Store the value in the array
        document.getElementById("result").value = this.values.join(''); // Display the array values as a string
    }    

    solve(){
        let x = this.values.join(''); // Convert the array values to a string for evaluation
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
        this.values = []; // Clear the array after solving
    }

    clear(){
        document.getElementById("result").value = "";
        this.values = []; // Clear the array when clearing the display
    }
}

window.onload = () => {
    window.calculator = new Calculator();
}