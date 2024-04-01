import '../css/calculator1.css';
import {directions} from './directions.js';
import {navbar} from './navbar.js';

navbar()
directions()

class Calculator{
    constructor(){
        this.cal = document.getElementById("calc");
        this.cal.onkeyup = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        if(event.key >= '0' && event.key <= '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '%' || event.key == '(' || event.key == ')'){
            this.displayValues(event.key);
        }
        if(event.keyCode === 13){
            console.log("Enter");
            this.solve();
        }
    }

    displayValues(val){
        document.getElementById("result").value += val;
    }

    solve(){
        let x = document.getElementById("result").value;
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
    }

    clear(){
        document.getElementById("result").value = "";
    }
}

window.onload = () => {
    window.calculator = new Calculator();
}