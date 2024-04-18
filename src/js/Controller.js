/** @jsx vNode */
import '../css/calculator.css';
import {directions} from './directions.js';
import {Calculator} from '../../node_modules/@ocdla/calculator/js/Calculator.js';
import {vNode, View} from "../../node_modules/@ocdla/view/view.js";

class Controller {
    constructor() {
        directions();
        const table = document.getElementById('calc');
        let html = View.createElement(<CalculatorComponent />);
        table.appendChild(html);
        this.calculator = new Calculator();
        //this.createButtons();
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
            this.saveCalculation(userinput, solution);
        } else if (Calculator.ALLOWED_KEYS.includes(input)) {
            this.displayInput(input);
        }
    }
    
    saveCalculation(userinput, solution) {
        fetch('/services/apexrest/Calculator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Name": userinput,
                "Result": solution,
                "Types": "Calculation"
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    displaySolution(y) {
        document.getElementById("result").value = y;
    }

    clear() {
        document.getElementById("result").value = "";
    } 
}


const CalculatorComponent = function(props) {
    return (
        <div id="calculator">

            <table id="calc">
                <tbody>
                    <tr>
                        <td colspan="3">
                            <input type="text" id="result" placeholder="Enter Numbers" />
                        </td>
                        <td>
                            <input id="clear" type="button" value="C" onclick={() => window.controller.clear()} />
                        </td>
                    </tr>
                    <ButtonGroup keys="1,2,3,+" />
                    <ButtonGroup keys="4,5,6,-" />
                    <ButtonGroup keys="7,8,9,*" />
                    <ButtonGroup keys="(,0,),." />
                    <ButtonGroup keys="/,%,^,=" />
                </tbody>
            </table>

        </div>
    );
};

const ButtonGroup = function(props) {

    // convert string of keys to an array of characters.
    let keys = props.keys.split(",");

    return (
        <tr>
            {keys.map((key) => {
                return <td><input type="button" value={key} /></td>;
            })}
        </tr>
    );

};

window.onload = () => {
    window.controller = new Controller();
}