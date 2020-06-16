// Arrays
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbolsArray = ["!", "@", "#", "$", "%", "&", "|", ";", ">", "~", "`"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Empty arrays -- used to push user input data and assemble password based on given criteria.
var answersArray = []
var passwordArray = []


var generatePassword = function () {
  var includeLowercase;
  var includeUppercase;
  var includeNum;
  var includeSymbols;

  var passwordText = document.querySelector("#password");
  if (passwordText.value != null) {
    passwordText.value = "";
    answersArray = [];
    passwordArray = [];
  }

  function inputs() {
    includeLowercase = window.confirm("Would you like your password to include lowercase letters?");
    console.log("Include lowercase letters:", includeLowercase);

    includeUppercase = window.confirm("Would you like your password to include uppercase letters?");
    console.log("Include uppercase letters:", includeUppercase);

    includeNum = window.confirm("Would you like your password to include numbers?");
    console.log("Include numbers:", includeNum);

    includeSymbols = window.confirm("Would you like your password to include symbols?");
    console.log("Include symbols:", includeSymbols);
  }

  var pwLength = window.prompt("How long do you need your password to be? Please enter a value between 8 and 128.");
  console.log("This many char:", pwLength);

  if (pwLength < 8 || pwLength > 128) {
    window.alert("Ahem... please select a value between 8 and 128!");
    generatePassword();
  }

  else {
    inputs();
  }

  if (includeLowercase === false && includeUppercase === false && includeNum === false && includeSymbols === false) {
    window.alert("You must select at least one type of character.");
    inputs();
  }

  if (includeLowercase === true || includeUppercase === true || includeNum === true || includeSymbols === true) {
    answersArray.push(includeLowercase, includeUppercase, includeNum, includeSymbols);
    console.log(answersArray);
  }


  while (passwordArray.length < pwLength) {
    // If user wants LOWERCASE LETTERS, this pulls at least one.
    if (answersArray[0] === true && passwordArray.length < pwLength) {
      passwordArray.push(lowercaseArray[Math.floor(Math.random() * 26)]);
      console.log(passwordArray);
    }

    // If user wants UPPERCASE LETTERS, this pulls at least one.
    if (answersArray[1] === true && passwordArray.length < pwLength) {
      passwordArray.push(uppercaseArray[Math.floor(Math.random() * 26)]);
      console.log(passwordArray);
    }

    // If user wants NUMBERS, this pulls at least one.
    if (answersArray[2] === true && passwordArray.length < pwLength) {
      passwordArray.push(numberArray[Math.floor(Math.random() * 9)]);
      console.log(passwordArray);
    }

    // If user wants SYMBOLS, this pulls at least one.
    if (answersArray[3] === true && passwordArray.length < pwLength) {
      passwordArray.push(symbolsArray[Math.floor(Math.random() * 11)]);
      console.log(passwordArray.join(""));
    }
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  generatePassword();
  passwordText.value = passwordArray.join("");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
