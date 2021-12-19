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
console.log(`For Test Data 1:

- Marks's BMI is: ${markBMIsDB1}.
- John's BMI is: ${johnBMIsDB1}.`);

const markBMIsDB2 = markMassDB2 / markHeightDB2 ** 2;
const johnBMIsDB2 = johnMassDB2 / johnHeightDB2 ** 2;
console.log(`For Test Data 2:

- Marks's BMI is: ${markBMIsDB2}.
- John's BMI is: ${johnBMIsDB2}.`);

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

const markHigherBMIsDB1 = markBMIsDB1 > johnBMIsDB1;
console.log(`For Test Data 1, Does Mark BMI is higher than John?
 ${markHigherBMIsDB1}`);

const markHigherBMIsDB2 = markBMIsDB2 > johnBMIsDB2;
console.log(`For Test Data 2, Does Mark BMI is higher than John?
${markHigherBMIsDB2}`);
