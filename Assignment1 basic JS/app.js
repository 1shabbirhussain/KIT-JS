// 1. Question: Reverse a string without using the built-in reverse() method.
// function reverseString(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(`Input string is: ${originalString} \nOutput String is: ${reversedString}`); 


// 2. Question: Count the number of vowels in a given string.
// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let vowelCount = 0;

//     for (const char of str) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

// const inputString = "I am a student of KIT";
// const numberOfVowels = countVowels(inputString);
// console.log(` Input String is: ${inputString}\n Number of vowels: ${numberOfVowels}`);



// 3. Question: Convert the first letter of each word in a sentence to uppercase.

// function capitalizeWords(sentence) {
//     let split= sentence.split(" ");
//     let capitalize = split.map(word=> word.charAt(0).toUpperCase()+word.slice(1));
//     return capitalize.join(' ');
// }

// const input = "My name is shabbir hussain";
// const output = capitalizeWords(input);
// console.log(output); 


// 4. Question: Check if a string is a palindrome.
// function isPalindrome(word) {
//     const cleanedWord = word.toLowerCase();
//     return cleanedWord === cleanedWord.split('').reverse().join('');
// }

// const inputWord = "lo";

// if(isPalindrome(inputWord) == true){
//     console.log("word is Palindrome")
// }
// else{
//     console.log("word is not Palindrome")
// }


// 5. Question: Find the sum of all positive numbers in an array.
// function sumOfPositiveNumbers(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         if (number > 0) {
//             sum += number;
//         }
//     }
//     return sum;
// }

// const numberArray = [3, -5, 2, 9, -1, 7];
// console.log(`Sum of All positive numebers is: ${sumOfPositiveNumbers(numberArray)}`); 



// 6. Question: Find the index of the first occurrence of a specific element in an array.

// function indexOfElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
//     return -1; // Element not found
// }

// const arr = [5, 10, 50, 20, 25, 30];
// const elementToFind = 20;
// console.log(`First index or element is: ${indexOfElement(arr, elementToFind)}`); 


// 7. Question: Remove all duplicates from an array without built-in methods.

// function removeDuplicates(arr) {
//     const uniqueArray = [];
//     for (const element of arr) {
//         if (!uniqueArray.includes(element)) {
//             uniqueArray.push(element);
//         }
//     }
//     return uniqueArray;
// }

// const inputArray = [2, 5, 8, 2, 9, 1, 5, 6, 8];
// const newArray = removeDuplicates(inputArray);
// console.log(newArray);


// 8. Question: Sort the array in ascending and descending without built-in methods.

// 9. Question: Print all even numbers between 1 and 20 using a while loop.
// let number = 2;
// let arr = [];
// while (number <= 20) {
//     arr.push(number);
//     number += 2;
// }
// console.log(arr);



// 10. Question: Calculate the factorial of a number using a do-while loop.

// function calculateFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     do {
//         factorial *= i;
//         i++;
//     } while (i <= number);
//     return factorial;
// }

// const inputNumber = 5;
// const result = calculateFactorial(inputNumber);
// console.log(`Factorial of ${inputNumber} is: ${result}`);


// 11. Question: Iterate through the properties of an object using a for-in loop.

// const person = {
//     firstName: "Shabbir",
//     lastName: "Hussain",
//     age: 23,
//     profession: "Software engineer"
// };

// for (const property in person) {
//     console.log(`${property}: ${person[property]}`);
// }


// 12. Question: Loop through an array using a for-of loop and double each element.

// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = [];

// for (const element of originalArray) {
//     doubledArray.push(element * 2);
// }

// console.log(doubledArray); // Outputs: [2, 4, 6, 8, 10]




// 13. Question: Check if a number is even or odd and return a corresponding message.
// function check(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// const inputNumber = 7;
// const result = check(inputNumber);
// console.log(`${inputNumber} is ${result}`); 


// 14. Question: Find the maximum of three numbers using nested ternary operators.
// function findMax(a, b, c) {
//     return a > b
//         ? (a > c ? a : c)
//         : (b > c ? b : c);
// }

// const num1 = 10;
// const num2 = 25;
// const num3 = 15;
// const max = findMax(num1, num2, num3);
// console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`); 

// 15. Question: Determine if a year is a leap year or not.

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// const inputYear = 2023;
// const result = isLeapYear(inputYear);

// if (result) {
//     console.log(`${inputYear} is a leap year.`);
// } else {
//     console.log(`${inputYear} is not a leap year.`);
// }
