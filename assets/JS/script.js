// Assignment Code
var generateBtn = document.querySelector("#generate");
var charUser = "";
var password = "";

// Define function for selection of types of characters
function promptCriteria() {
  
// Define variables containing the strings to concatenate
  const char = "abcdefghijklmnopqrstuvwxyz";
  const charMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charNum = "0123456789";
  const charSpec = ` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
// Define an array containing the options
const options = [char, charMay, charNum, charSpec];
// Prompt the user to select one or several options by their number
const input = prompt("Write down, separated by commas, the number of the " +
"elements you want your password to have: \n1) Lowercase \n2) Uppercase \n3) " +
"Numeric \n4) Special Characters", "1,2,3"); 
// Split the input value into an array of selected option numbers
const selectedOptionNumbers = input.split(",").map(optionNumber => parseInt(optionNumber.trim()) - 1);
// Map the selected option numbers to their corresponding option values
const selectedOptions = selectedOptionNumbers.map(optionNumber => options[optionNumber]);
// Log the selected options to the console
console.log(selectedOptions);

return selectedOptions;
}


// Defines the sub-functions (created from a tip from a classmate)
function psswdLength() {
  var pLength = parseInt(window.prompt("Define the length of your password", "8"), 10);
  if (pLength < 8 || pLength > 128) {
    alert("Please enter a valid length");
    psswdLength(); //ask again
  }

  console.log("Password length: " + pLength);
  return pLength;
}


// Creates a string of characters from a list
function randomGenerator (charList, length) {
    for (var i = 0; i < length; i++) { // if you use =< you get one character extra
        var randomNumber = Math.floor(Math.random() * charList.length);
        password += charList.substring(randomNumber, randomNumber + 1);
       } 
       return password;
} 


function concatenateStrings(array) {

  // Define a variable to hold the concatenated string
  let result = "";
  // Concatenate the array of pre-selected values of the array
  result = array.join(``);
  console.log("Resulting string: " + result);
  // Return the concatenated string
  return result;

}



//Generates password
function generatePassword() {

  var pCriteria = promptCriteria();
  var pLength = psswdLength();
  var concatString = concatenateStrings(pCriteria);

  // Begins the generation process
  var mainPassword = randomGenerator(concatString, pLength);
  console.log("Main Password: " + mainPassword);
  return mainPassword;

  
} 

// Write password to the #password input
function writePassword() {
    var psswd = generatePassword();
    var passwordText = document.querySelector("#password");
    var addedText = document.querySelector("#added-text");

    passwordText.value = psswd;
    addedText.textContent = "To create a new one please refresh the tab. \nYou can do this by pressing F5.";
}

function refreshPage() {
  window.refreshPage();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


