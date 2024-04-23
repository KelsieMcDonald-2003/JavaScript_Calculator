/** @jsx vNode */
import '../css/calculator.css';
import {directions} from './directions.js';
import {Calculator} from '../../node_modules/@ocdla/calculator/js/Calculator.js';
import {vNode, View} from "../../node_modules/@ocdla/view/view.js";
import {SalesforceRestApi} from "../../node_modules/@ocdla/calculator/SalesforceRestApi/SalesforceRestApi.js";

class Controller {
    /**
     * Constructs new instance of the class and sets up the 
     * calculator UI
     */
    constructor() {
        directions();
        const table = document.getElementById('calc');
        let html = View.createElement(<CalculatorComponent />);
        table.appendChild(html);
        this.calculator = new Calculator();
        this.calculator.addObserver(this);
        this.api = new SalesforceRestApi();
        this.cal = document.getElementById("calc");
        this.cal.addEventListener("keyup", this.handleEvent);
        this.cal.addEventListener("click", this.handleEvent);
    }

    /**
     * Appends the given input to the calculator's display
     * @param {*} input - The input to display
     */
    displayInput(input) {
        document.getElementById("result").value += input;
    }
    
    /**
     * Handles keyup and click events on the calculator
     * @param {Event} e - The event to handle 
     */
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
    
    /**
    * Sends a POST request to save the calculation.
    * @param {string} userinput - The user's input for the calculation.
    * @param {string} solution - The result of the calculation.
    */
    saveCalculation(userinput, solution) {
        this.api.fetch('/services/apexrest/Calculator', {
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

    /**
     * This method displays the solution in the "result" element in the DOM
     * @param {number} solution - the solution to be displayed.
     */
    displaySolution(y) {
        document.getElementById("result").value = y;
    }

    /**
     * This method clears the "result" element in the DOM
     */
    clear() {
        document.getElementById("result").value = "";
    }

    /**
     * Updates the component based on the event
     * @param {string} event - The event that occured
     * @param {Object} data - The data associated with the event
     */
    update(event, data) {
        if (event === 'calculation') {
            this.saveCalculation(data.userinput, data.solution);
        }
    }
}

/**
 * A functional component that renders the calculator
 * @param {Object} props - The properties passed to the component
 * @returns {JSX.Element} - The rendered calculator component
 */
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
                            <input id="clear" type="button" value="C" />
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
    let keys = props.keys.split(",");
    return (
        <tr>
            {keys.map((key) => {
                return <td><input type = "button" value = {key} /></td>;
            })}
        </tr>
    );
};

window.onload = () => {
    window.controller = new Controller();
}