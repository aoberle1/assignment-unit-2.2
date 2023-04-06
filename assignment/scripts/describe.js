// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Created variable called name and set the value of it equal to the string 'Dane'.
// Next we are checking if value of name is exactly equal to the string 'Mary'.
// The string 'Dane' which is the value of name is not exactly equal to the string 'Mary'.
// console.log will print the string 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We created a variable called secret and left the value as undefined.
// Next we created a variable called code and set it to the number 123.
// Next we are checking to see if the value of code is exactly equal to the number 123.
// If the value of code is exactly equal to 123, the value of 'secret' becomes the string 'super', and the value of the variable 'code' is multiplied by 2.
// Next we are checking if the new value of code is greater than 250
// If the new value of code is greater than 250, the value of secret will become the string 'duper'
// Finally, since the value of code is exactly equal to 123, but since the new value of code is less than 250,
// console.log will print the string 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First, we created a variable called isStudent and set it equal to the boolean value of true.
// Next we created a variable called age and set the value equal to the number 34.
// Next we created a variable called zip and set the value equal to the number 55407.
// Then we are checking to see if the value of isStudent is exactly equal to the boolean value true AND that the value of zip is also greater than 80000.
// If both of these conditions are true, the console.log will print 'You're a student on the West Coast!'. 
// If either of the above conditions are false, we will next check to see if the value of isStudent is exactly equal to false OR that the value of age is set to less than 30.
// If either of these conditions are true, the console.log will print 'What are your hobbies?'.
// If neither of these conditions are true, we will then check if the value of the variable isStudent is exactly equal to true.
// If this condition is true, the console.log will print 'Welcome to Prime!'.
// If none of the above conditions are true, the console.log will print 'How about the weather?'.
// Finally, since the value of zip is less than 80000, the value of age is greater than 30, and the value of isStudent is set to true
// console.log will print the string 'Welcome to Prime!'.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'



/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - If we want to set both colorOne and colorTwo to 'purple' we would want to add colorTwo = 'purple'; as below:
if (mix === true) {
  colorOne = 'purple';
  //FIX - colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - since we are checking the two variables for AND instead of OR, we would replace || with && as below:
if (temp > 39 || time >= 4) {
  // FIX - if (temp > 39 && time >= 4)
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX - the console logs would currently print the opposite of what you want,
// so change <= to >=
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  // FIX - if (minAge >= age){
  console.log('no entry');
} else {
  console.log('enter');
}
*/

