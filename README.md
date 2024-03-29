# JavaScript_Calculator
 This is a simple JavaScript Calculator. There are two versions.
 ##Version 1:
 * Uses:
   - Input Fields (document.getElementById("result"))
   - Key Presses (handleKeyPress(event))
   - Evalutation (math.evaluate(x))


##Version 2:
* Uses:
  -  Initializes an empty array
  -  Key Press Handling (handleKeyPress(event))
  -  Storing Values (displayValues(value), this.values, push())
  -  Solving Expressions
     1. If the Enter key is pressed or a valid expression is formed, the solve() method is called
     2. This method joins all elements in this.values into a string
     3. Evaluates the mathematical expression using the math.evaluate() function
     4. Displays the result
  - Clears Values
