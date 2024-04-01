# JavaScript_Calculator
 This is a simple JavaScript Calculator. There are two versions.

 
 ## Version 1:
 * This version directly appends the key pressed by the user to the "result" field
 * The displayValues function takes a value and appends it to the "result" field
 * The solve function evaluates the expression in the "result" field and updates it with the result
 * The clear function clears the "result" field


## Version 2:
* This version stores the keys pressed by the user in an array (this.values), and the "result" field is updated with the joined array values
* The displayValues function pushes the value into the array and updates the "result" field with the joined array values
* The solve function evaluates the joined array values, updates the "result" field with the result. and then clears the array
* The clear function clears both the "result" field and the array
