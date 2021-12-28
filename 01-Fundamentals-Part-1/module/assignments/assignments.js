/*

// JavaScript Fundamentals - Part 1 


// ------- LECTURE: Values and Variables ----------

// 1. Declare variables called 'country', 'continent', and 'population' and assing their values according to your own country (population in millions)

let country = 'United States';
let continent = 'North America';
let population = 333849235;

// 2. Log their values to the console 
console.log("country: " + country);
console.log("continent: " + continent);
console.log("population: " + population);
console.log("The country of " + country + " is part of the continent of " + continent + " and has a population of " + population);

// ------- LECTURE: Data Types----------

// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet

let isIsland = false;
let language;

// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console 

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ------- LECTURE: let, const and var ----------

// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) 

language = 'English';

// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. 

const isIsland2 = false;
const country2 = 'United States';
const continent2 = 'North America';

// 3. Try to change one of the changed variables now, and observe what happens. 

// isIsland2 = true;  //Will display an error 

// -------- LECTURE: Basic Operators --------

// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half? 

let countryPopulation = 4;
const halfOfPopulation = countryPopulation / 2;
console.log(halfOfPopulation); // 2

// 2. Increase the population of your country by 1 and log the result to the console 

countryPopulation++;
console.log(countryPopulation); // 5

// 3. Finland has a population of 6 million. Does your country have more people than Finland? 
const finlandPopulation = 6;
console.log(countryPopulation > finlandPopulation); // False

// 4. The average population of a country is 33 million people.Does your country
have less people than the average country? 
const averagePopulation = 33;
console.log(countryPopulation < averagePopulation);

// 5. Based on the variables you created,create a new variable'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' 

const description1 = country + ' is in ' + continent +', and its ' + countryPopulation + ' million people speak ' + language + '.';
console.log(description1);

// ------- LECTURE: Strings and template literals -------

// 1. Recreate the 'description' variable from the last assignment,this time using the template literal syntax

console.log(`${country}is in ${continent}, and it's ${countryPopulation} million people speak ${language}.`);

// ------- LECTURE: Taking Decisions: if/else Statements -------

// 1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

const countryName = "USA";
let populationUSA = 4;

if (populationUSA > 33) {
  console.log(`${countryName}'s population is above average!`);
} else {
  console.log(
    `${countryName}'s population is ${
      33 - populationUSA
    } million bellow average!`
  );
}

// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
populationUSA = 13;
if (populationUSA > 33) {
  console.log(`${countryName}'s population is above average!`);
} else {
  console.log(
    `${countryName}'s population is ${
      33 - populationUSA
    } million bellow average!`
  );
}

populationUSA = 130;
if (populationUSA > 33) {
  console.log(`${countryName}'s population is above average!`);
} else {
  console.log(
    `${countryName}'s population is ${
      33 - populationUSA
    } million bellow average!`
  );
}

populationUSA = 4;

if (populationUSA > 33) {
  console.log(`${countryName}'s population is above average!`);
} else {
  console.log(
    `${countryName}'s population is ${
      33 - populationUSA
    } million bellow average!`
  );
}


// ------- LECTURE:  Type Conversion and Coercion -------

//1. Predict the result of these 5 operations without executing them: '9' - '5'; '19' - '13' + '17'; '19' - '13' + 17; '123' < 57;5 + 6 + '4' + 9 - 4 - 2;

const a = '9' - '5'; // 4
const b = '19' - '13' + '17'; // '617'
const c = '19' - '13' + 17; // 23
const d = '123' < 57; // false
const e = 5 + 6 + '4' + 9 - 4 - 2; // 1143

// 2. Execute the operations to check if you were right
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/

// ------- LECTURE: Equality Operators: == vs. === -------

// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
let numNeighbours = prompt(
  "How many neighbours countries does your country have?"
);

// 2. If there is only 1 neighbour,log to the console 'Only 1 border!'(use loose equality == for now)
if (numNeighbours == 1) {
  console.log("Only 1 border!");

  // 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");

  // 5. Test the code with different values of 'numNeighbours', including 1 and 0.
} else if (numNeighbours == 0) {
  console.log("No borders!");
} else if (numNeighbours > 0) {
  console.log("Borders!");

  // 4. Use an else block to log 'No borders'(this block will be executed when 'numNeighbours' is 0 or any other value)
} else {
  console.log("No borders!");
}

// 6. Change == to ===, and test the code again,with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else if (numNeighbours === 0) {
  console.log("No borders!");
} else if (numNeighbours > 0) {
  console.log("Borders!");
} else {
  console.log("No borders!");
}

// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
numNeighbours = Number(
  prompt("How many neighbours countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else if (numNeighbours === 0) {
  console.log("No borders!");
} else if (numNeighbours > 0) {
  console.log("Borders!");
} else {
  console.log("No borders!");
}
