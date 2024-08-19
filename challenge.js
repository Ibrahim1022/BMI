// Good Luck! You got this 💪🏾
// Write your code here.



function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Example usage:
let aliBMI = calculateBMI(70, 1.75); // Ali's weight is 70kg and height is 1.75m
let mohamedBMI = calculateBMI(85, 1.8); // Mohamed's weight is 85kg and height is 1.8m

console.log(`Ali's BMI: ${aliBMI}`);
console.log(`Mohamed's BMI: ${mohamedBMI}`);

if (aliBMI > mohamedBMI) {
    console.log("Ali has a higher BMI.");
} else if (aliBMI < mohamedBMI) {
    console.log("Mohamed has a higher BMI.");
} else {
    console.log("Ali and Mohamed have the same BMI.");
}