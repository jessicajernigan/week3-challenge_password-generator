// Assignment code here

// ACCEPTANCE CRITERIA / PSEUDOCODE


// WHEN prompted for the length of the password 
// THEN I choose a length of at least 8 characters and no more than 128 characters --> Validate the user's answer. If it is <8 or >128, prompt the user to fix their input and prompt again. If the input is within the range, proceed.
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters --> At least one of these must be true.
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Arrays

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbolsArray = ["[", "@", "^", "$", ".", "|", "?", "*", "+", "(", ")", "]", "%", "~", "!"]
var allOptionsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "[", "@", "^", "$", ".", "|", "?", "*", "+", "(", ")", "]", "%", "~", "!"]
var allLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = Math.floor(Math.random() * 9) + 1;


var generatePassword = function () {
  var pwLength = window.prompt("How long do you need your password to be? Please enter a value betwen 8 and 128.");
  console.log("This many char:", pwLength);

  if (pwLength < 8 || pwLength > 128) {
    window.alert("Ahem... please select a value between 8 and 128!");
    generatePassword();
  }
  else {
    var includeLowercase = window.confirm("Would you like your password to include lowercase letters?");
    console.log("Include lowercase letters:", includeLowercase);

    var includeUppercase = window.confirm("Would you like your password to include uppercase letters?");
    console.log("Include uppercase letters:", includeUppercase);

    var includeNum = window.confirm("Would you like your password to include numbers?");
    console.log("Include numbers:", includeNum);

    var includeSymbols = window.confirm("Would you like your password to include symbols?");
    console.log("Include symbols:", includeSymbols);
  }

  push

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria --> window.prompt() solicits an answer || window.confirm() solicits yes or no
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password:
// 1. Length (prompt --> requesting input)
// 2. lowercase (confirm --> yes/no)
// 3. uppercase (confirm --> yes/no)
// 4. numeric (confirm --> yes/no)
// 5. special characters (confirm --> yes/no)
