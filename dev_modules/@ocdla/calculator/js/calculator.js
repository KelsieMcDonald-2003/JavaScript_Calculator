import * as math from 'mathjs';

export class Calculator {
    static ALLOWED_KEYS = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '(', '0', ')', '.', '/', '%', '^', '='];

    constructor() {
        
    }

    solve(x) {
        return math.evaluate(x);
    }

    clear() {
        document.getElementById("result").value = "";
    }
}

//export default Calculator;