// Write a code to find factorial of a number

// Using Loop

// Input a positive integer
let number = parseInt(prompt("Enter a positive integer:"));

// Initialize a variable to store the factorial
let factorial = 1;

if (number >= 0) {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${number} is: ${factorial}`);
} else {
    console.log("Please enter a non-negative integer.");
}