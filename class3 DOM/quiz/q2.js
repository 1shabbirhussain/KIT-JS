// Check if input variable is a number or not.
// 1. Print “Variable is not a number” if isNaN() returns true.
// 2. Else print “Variable is a valid number” if isNaN() returns false.


function checkNumber(variable) {
    if (isNaN(variable)) {
      console.log("Variable is not a number");
    } else {
      console.log("Variable is a valid number");
    }
  }
  
  checkNumber("Hello");     
  checkNumber(42);          

  