// Assignment Code
var generateBtn = document.querySelector("#generate");

var charUser = "";
var password = "";


/*
function promptCriteria() {
  var inputString = window.prompt("Write down, separated by commas, the number of the elements you want your password to have: \n1) Lowercase \n2) Uppercase \n3) Numeric \n4) Special Characters", "1, 2, 3");
  console.log("Input String: " + inputString);
  // Change value into a usable array
  const numberStrings = inputString.split(",");
  console.log("Number Strings: " + numberStrings);
  const numbers = numberStrings.map(str => Number(str));
  console.log("numbers: " + numbers);
  var charString = numbers.toString();
  console.log("charsSting: " + charString);
  return charString;
 // console.log(typeof numbers);
} */

function promptCriteria() {
// Define an array containing the options
const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

// Prompt the user to select one or several options by their number
const input = prompt("Please select one or several options by their number, separated by commas: 1. Option 1, 2. Option 2, 3. Option 3, 4. Option 4");

// Split the input value into an array of selected option numbers
const selectedOptionNumbers = input.split(",").map(optionNumber => parseInt(optionNumber.trim()) - 1);

// Map the selected option numbers to their corresponding option values
const selectedOptions = selectedOptionNumbers.map(optionNumber => options[optionNumber]);

// Log the selected options to the console
console.log(selectedOptions);
}


// Defines the sub-functions (created from a tip from a classmate)
function psswdLength() {
  var pLength = parseInt(window.prompt("Define the length of your password", "8"), 10);
  if (pLength < 8 || pLength > 128) {
    alert("Please enter a valid length");
    psswdLength(); //ask again
  }
  console.log(pLength);
}


// Creates a string of characters from a list
function randomGenerator (list, length) {
    for (var i = 0; i <= length; i++) {
        var randomNumber = Math.floor(Math.random() * list.length);
        password += list.substring(randomNumber, randomNumber + 1);
       } 
       //return password;
} 


function concatenateStrings(selectedValues) {
  // Define variables containing the strings to concatenate
  const char = "abcdefghijklmnopqrstuvwxyz";
  const charMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charNum = "0123456789";
  const charSpec = ` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`;

  // Define an array containing the variables that hold the strings to concatenate
  const stringVariables = [char, charMay, charNum, charSpec];

  // Define a variable to hold the concatenated string
  let result = "";

  // Concatenate the strings based on the length of the selectedValues array
  for (let i = 0; i < selectedValues.length; i++) {
    const index = selectedValues[i] - 1;
    if (index >= 0 && index < stringVariables.length) {
      result += stringVariables[index];
    }
  }

  // Return the concatenated string
  return result;
}



//Generates password
function generatePassword() {

  var pCriteria = promptCriteria();
  var pLength = psswdLength();

  // Begins the generation process

  if (pCriteria.includes(`1`)) {
    charUser = charUser.concat(char);
    console.log("minusc: " + charUser);

  } else if (pCriteria.includes(`2`)) {
    charUser = charUser.concat(charMay);
    console.log("Mayusc: " + charUser);

  } else if (pCriteria.includes(`3`)) {
    charUser = charUser.concat(charNum);
    console.log("Num: " + charUser);

  } else if (pCriteria.includes(`4`)) {
    charUser = charUser.concat(charSpec);
    console.log("Special Char: " + charUser);
  }

  randomGenerator(charUser, pLength);
  //return randomGenerator.password;
} 

// Write password to the #password input
function writePassword() {
  var psswd = generatePassword(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = psswd;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
