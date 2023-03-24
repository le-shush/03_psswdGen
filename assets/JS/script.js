// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstuvwxyz";
var charMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var charSpec = ` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
var password = "";

/*
function pieceCharacters (x) {

    for (var i = 0; i <= psswdLength; i++) {
        var randomNumber = Math.floor(Math.random() * x.length);
        password += x.substring(randomNumber, randomNumber + 1);
       } 
       return password;
} */

//Generates password
function generatePassword() {
    // Define the length of the password
  var psswdLength = prompt("Define the length of your password", 8);
  console.log(psswdLength);

  // Begins the prompt to the user
  var confUpper = confirm("Default passwords include lowercase letters only. Would you like to add Uppercase letters?");
  console.log(confUpper);
  if (confUpper === true) {
    var char = "abcdefghijklmnopqrstuvwxyz";
    char = char.concat(charMay);
    console.log(char);
    var confNum = confirm("Numbers?");

    if (confNum === true) {
        var char = "abcdefghijklmnopqrstuvwxyz";
        char = char.concat(charNum);
        console.log(charLowUpNum);
        confirm("Special Characters?");

    } else {
        var char = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i <= psswdLength; i++) {
            var randomNumber = Math.floor(Math.random() * char.length);
            password += char.substring(randomNumber, randomNumber + 1);
           } 
           return password;
    }

  } else {
    var char = "abcdefghijklmnopqrstuvwxyz";
    console.log()
    for (var i = 0; i <= psswdLength; i++) {
        var randomNumber = Math.floor(Math.random() * char.length);
        password += char.substring(randomNumber, randomNumber + 1);
       }
    return password;
  }

} 

// Write password to the #password input
function writePassword() {
  var psswd = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = psswd;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
