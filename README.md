# JavaScript_Calculator
 This is a simple JavaScript Calculator. There are two versions.

 ## Features
* Users can click the buttons on the screen to create equations
* Users can enter numbers and the symbols from the keyboard to create equations
* Once an equation is ready, the user can either click the equal button on the screen or press enter from the keyboard to get the answer to their problems
 
 ## Version 1
 * This version directly appends the key pressed by the user to the "result" field
 * The displayValues function takes a value and appends it to the "result" field
 * The solve function evaluates the expression in the "result" field and updates it with the result
 * The clear function clears the "result" field

### Methods
* constructor():
  - is called when an object of the Calculator class is created
  - Initializes the cal property with the calculator element from the HTML and sets up an event listener for key presses
* handleKeyPress(event):
  - This method is triggered when a key is pressed
  - It checks if the key pressed is a number or an operator and if so, it calls the displayValues method with the key as an argument
  - If the ‘Enter’ key is pressed, it calls the solve method
*  displayValues(val):
   - This method is used to display the values entered or calculated. It takes a value as an argument and appends it to the current value in the result input field.
*  solve():
   - This method is used to calculate the result of the expression entered
   - It gets the expression from the result input field, evaluates it using the math.evaluate function from the mathjs library, and then displays the result in the result input field
*  clear():
   - This method is used to clear the result input field. It sets the value of the result input field to an empty string


## Version 2
* This version stores the keys pressed by the user in an array (this.values), and the "result" field is updated with the joined array values
* The displayValues function pushes the value into the array and updates the "result" field with the joined array values
* The solve function evaluates the joined array values, updates the "result" field with the result. and then clears the array
* The clear function clears both the "result" field and the array

### Methods
* Similar to the methods in Version 1, but uses an array
