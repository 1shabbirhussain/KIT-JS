// Check if a number is odd or even in JavaScript.
// 1. Print “Number is even” if the number is divisible by 2.
// 2. Else print “Number is odd” if the number returns a remainder
// when divided by 2.

function check(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const inputNumber = 7;
const result = check(inputNumber);
console.log(`${inputNumber} is ${result}`); 