console.log(`

======== ASSIGNMENT SCRIPTS ============

`)

// JavaScript Fundamentals - Part 1 


// ------- LECTURE: Values and Variables ----------

/* 1. Declare variables called 'country', 'continent', and 'population' and assing their values according to your own country (population in millions)
*/

let country = 'United States';
let continent = 'North America';
let population = 333849235;

/* 2. Log their values to the console */
console.log("country: " + country);
console.log("continent: " + continent);
console.log("population: " + population);
console.log("The country of " + country + " is part of the continent of " + continent + " and has a population of " + population);

// ------- LECTURE: Data Types----------

/* 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet*/

let isIsland = false;
let language;

/* 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console */

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ------- LECTURE: let, const and var ----------

/* 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) */

language = 'English';

/* 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. */

const isIsland2 = false;
const country2 = 'United States';
const continent2 = 'North America';

/* 3. Try to change one of the changed variables now, and observe what happens. */

// isIsland2 = true;  //Will display an error 

