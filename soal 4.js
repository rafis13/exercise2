// Write a code to find the sum of the numbers 1 to N

// Input a positive integer N
let N = parseInt(prompt("Enter a positive integer N:"));

// Initialize a variable to store the sum
let sum = 0;

// Check if N is a positive integer
if (N >= 1) {
    for (let i = 1; i <= N; i++) {
        sum += i;
    }

    console.log(`The sum of numbers from 1 to ${N} is: ${sum}`);
} else {
    console.log("Please enter a positive integer.");
}