import * as math from 'mathjs';

export class Calculator {
    static ALLOWED_KEYS = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '(', '0', ')', '.', '/', '%', '^', '='];

    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(event, data) {
        this.observers.forEach(observer => observer.update(event, data));
    }

    solve(x) {
        this.notifyObservers('calculation', {userinput: x, solution: result});
        return math.evaluate(x);
    }

    clear() {
        document.getElementById("result").value = "";
    }
}

//export default Calculator;