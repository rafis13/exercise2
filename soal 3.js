// Write a code to check whether the number is prime number or not

// Input a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is prime
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else if (number <= 3) {
    isPrime = true;
} else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
} else {
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}