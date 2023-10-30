// Write a code to print the first N fibonacci numbers

// Input the number of Fibonacci numbers to print
let N = parseInt(prompt("Enter the number of Fibonacci numbers to print:"));

// Check if N is a positive integer
if (N >= 1) {
    let fibonacciNumbers = [0, 1]; // Initialize the Fibonacci sequence with the first two numbers

    for (let i = 2; i < N; i++) {
        let nextFibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        fibonacciNumbers.push(nextFibonacciNumber);
    }

    console.log(`The first ${N} Fibonacci numbers are:`);
    console.log(fibonacciNumbers.join(', '));
} else {
    console.log("Please enter a positive integer.");
}