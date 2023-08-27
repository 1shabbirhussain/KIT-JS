// Find the largest of three number.
// 1. Print num1 is the largest if num1>num2 and num1>num3.
// 2. Print num2 is the largest if num2<num3.
// 3. Else print num3

function findMax(a, b, c) {
    return a > b
        ? (a > c ? a : c)
        : (b > c ? b : c);
}

const num1 = 10;
const num2 = 25;
const num3 = 15;
const max = findMax(num1, num2, num3);
console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`); 