const prompt = require('prompt-sync')();

let age = Number(prompt("Enter your age: "));

if (isNaN(age) || age < 0) {
    console.log("Invalid Input");
} else if (age >= 18) {
    console.log("You are a valid voter");
} else {
    console.log("You are not a valid voter");
}