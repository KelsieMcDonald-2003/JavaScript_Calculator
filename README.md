# JavaScript_Calculator
 This is a simple JavaScript Calculator. There are two versions.

 ## Features
* Users can click the buttons on the screen to create equations
* Users can enter numbers and the symbols from the keyboard to create equations
* Once an equation is ready, the user can either click the equal button on the screen or press enter from the keyboard to get the answer to their problems
 
 ## Quick Explanation
 * This version directly appends the key pressed by the user to the "result" field
 * The displayValues function takes a value and appends it to the "result" field
 * The solve function evaluates the expression in the "result" field and updates it with the result
 * The clear function clears the "result" field

## Files

### Controller
'''
if(input === "=" || e.keyCode === 13) {
            let userinput = document.getElementById("result").value;
            let solution = this.calculator.solve(userinput);
            this.displaySolution(solution);
            this.saveCalculation(userinput, solution);
        } else if (Calculator.ALLOWED_KEYS.includes(input)) {
            this.displayInput(input);
        }
'''
