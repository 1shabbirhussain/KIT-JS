// Perform arithmetic operations on two numbers.
// Prints the result after evaluating arithmetic operations between two numbers
// of addition, multiplication, division, and modulus in JavaScript.
// 1. Print result of num1+num2 if operation is “add”
// 2. Print result of num1-num2 if operation is “subtract”
// 3. Print result of num1*num2 if operation is “multiply”
// 4. Print result of num1/num2 if operation is “divide”
// 5. Print result of num1%num2 if operation is “modulus”
// 6. Else print “Invalid operation”

function performArithmetic(num1, num2, operation) {
    let result;
    
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
          result = num1 / num2;
        break;
      case "modulus":
        if (num2 !== 0) {
          result = num1 % num2;
        } else {
          console.log("Modulus by zero is not allowed.");
          return;
        }
        break;
      default:
        console.log("Invalid operation.");
        return;
    }
    
    console.log("Result:", result);
  }
  
  performArithmetic(10, 5, "add");        
  performArithmetic(10, 5, "subtract");   
  performArithmetic(10, 5, "multiply");   
  performArithmetic(10, 5, "divide");     
  performArithmetic(10, 5, "modulus");       
  performArithmetic(10, 5, "unknown");      