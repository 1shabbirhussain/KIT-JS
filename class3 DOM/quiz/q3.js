// Find the largest of two number.
// 1. Print num1 is the largest if num1>num2.
// 2. Print num2 is the largest if num1<num2.
// 3. Else print num1 and num2 are equal when num1==num2.

function findMax(a, b) {
    return a > b ? a : b ;
}

const num1 = 10;
const num2 = 25;
const max = findMax(num1, num2);
console.log(`The maximum of ${num1}and ${num2} is: ${max}`); 