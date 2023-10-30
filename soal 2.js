// Write a code to check whether the number is odd or even

// Input a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is odd or even
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}