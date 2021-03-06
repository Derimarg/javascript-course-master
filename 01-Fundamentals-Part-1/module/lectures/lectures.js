/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $functions = 27;

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// Change from boolean to string
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined variables
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null); // null is not an object 

// LESSON: let, const and var

console.log(`

- var declarations are globally scoped or function scoped while let and const are block scoped.

- var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.

- While var and let can be declared without being initialized, const must be initialized during declaration.`);

// LESSON: Basic Operators

// - Math Operators
const now = 2021;
const ageJonas = now - 1995;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'Derimar';
const lastName = 'Gray';
console.log(firstName + ' ' + lastName);

// - Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x++;  // x = x + 1
x--; 
x--;
console.log(x);

// - Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1995 > now - 2018); 


// -------- LECTURE: Basic Operators --------

const now = 2037;
const ageDeri = now -1991;
const ageMicha = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageDeri + ageMicha) / 2;
console.log(ageDeri, ageMicha, averageAge);


// ------- LECTURE: Strings and template literals -------

const firstName = 'Derimar';
const job = 'Software Developer';
const birthYear = 1995;
const year = 2021;

// String
const derimars = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(derimars);

// Template String
const derimarsNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(derimarsNew);

// ------- LECTURE: Taking Decisions: if/else Statements -------

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license ????");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Waiting for ${yearsLeft} years :)`);
}
const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// ------- LECTURE:  Type Conversion and Coercion -------

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);

// ------- LECTURE:  Truthy and falsy values -------
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


// ------- LECTURE:  Equality Operators: == vs ===  -------

const age = "18";
if (age === 18) console.log("You just became  an adult :D (strict");

if (age == 18) console.log("You just became an adult ;D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log('Why not 23?');
*/

// ------- LECTURE:  Logical Operators -------

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Something else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Something else should drive...');
}