/* */

// ----- Coding Challenge #1 -----

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Test data:

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
let challengeNumber;
const DB1 = 'For DATA 1';
const DB2 = 'For DATA 2';

const markMassDB1 = 78;
const markHeightDB1 = 1.69;
const johnMassDB1 = 92;
const johnHeightDB1 = 1.95;

const markMassDB2 = 95;
const markHeightDB2 = 1.88;
const johnMassDB2 = 85;
const johnHeightDB2 = 1.76;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

const markBMIsDB1 = markMassDB1 / markHeightDB1 ** 2;
const johnBMIsDB1 = johnMassDB1 / johnHeightDB1 ** 2;
challengeNumber = `Coding Challenge #1 \n\n`;

console.log(challengeNumber);
console.log(`${DB1}\n
- Marks's BMI is: ${markBMIsDB1}.
- John's BMI is: ${johnBMIsDB1}.`);

const markBMIsDB2 = markMassDB2 / markHeightDB2 ** 2;
const johnBMIsDB2 = johnMassDB2 / johnHeightDB2 ** 2;

console.log(`${DB2}\n
- Marks's BMI is: ${markBMIsDB2}.
- John's BMI is: ${johnBMIsDB2}.`);

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

const markHigherBMIsDB1 = markBMIsDB1 > johnBMIsDB1;
console.log(`${DB1}, Does Mark BMI is higher than John?
 ${markHigherBMIsDB1}`);

const markHigherBMIsDB2 = markBMIsDB2 > johnBMIsDB2;
console.log(`${DB2}, Does Mark BMI is higher than John?
${markHigherBMIsDB2}`);

// ----- Coding Challenge #2 ------

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

//Your tasks:

// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

//Hint: Use an if/else statement

challengeNumber = `Coding Challenge #2 \n\n`;

console.log(challengeNumber);

if (markHigherBMIsDB1){
    console.log(`${DB1}, Mark's BMI is higher than John's!`);
} else{
console.log(`${DB1}, John's BMI is higher than Mark's!`);
}

if (markHigherBMIsDB2){
    console.log(`${DB2}, Mark's BMI is higher than John's!`);
} else{
console.log(`${DB2}, John's BMI is higher than Mark's!`);
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

if (markHigherBMIsDB1){
    console.log(`${DB1}, Mark's BMI (${markBMIsDB1}) is higher than John's (${johnBMIsDB1})!`);
} else{
console.log(`${DB1}, John's BMI (${johnBMIsDB1}) is higher than Mark's (${markBMIsDB1})!`);
}

if (markHigherBMIsDB2){
    console.log(`${DB2}, Mark's BMI (${markBMIsDB2}) is higher than John's (${johnBMIsDB2})!`);
} else{
console.log(`${DB2}, John's BMI (${johnBMIsDB2}) is higher than Mark's (${markBMIsDB2})!`);
}