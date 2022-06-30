// Assignment Code
var generateBtn = document.querySelector("#generate");
let listLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var listUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", "?", "@", "^", "_", "`", "{", "|", "}", "~"];

function askHowLong() {
  let length = prompt("How many characters would you like your password to be? Your choice must be a number between 8 and 128.");
  
  if (length != null) {
    confirm("You would like " + length + " characters in your password? If so, please confirm.");
   }
}

// Write password to the #password input
function generatePassword() {
  return askHowLong(), lowercaseCharacterTypes(), uppercaseCharacterTypes(), numericCharacterTypes(), specialCharacterTypes(), entirePassword();
}

function lowercaseCharacterTypes() {
  confirm("In the following prompts, you will be asked questions about what character types you want your password to include. If you want them included, click 'OK'. If you do not want them included, click 'Cancel'.");
  let lowerCase = confirm("Would you like to include lowercase letters in your password?");
  
  if (lowerCase == true) {
    confirm("You would like lowercase characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want lowercase characters to be included in your password? On to the next option!");
  }
}

function uppercaseCharacterTypes() {
  let upperCase = confirm("Would you like to include uppercase letters in your password?");
  
  if (upperCase == true) {
    confirm("You would like uppercase characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want uppercase characters to be included in your password? On to the next option!");
  }
}

function numericCharacterTypes() {
  let numEric = confirm("Would you like to include numeric characters in your password?");
  
  if (numEric == true) {
    confirm("You would like numeric characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want numeric characters to be included in your password? On to the next option!");
  }
}

function specialCharacterTypes() {
  let speCial = confirm("Would you like to include special characters in your password?");
  
  if (speCial == true) {
    confirm("You would like special characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want special characters to be included in your password? On to the next option!");
  }
}

function entirePassword() {
  var formulaL = Math.floor(Math.random() * listLow.length);
  var pwdL = listLow[formulaL];
  var formulaU = Math.floor(Math.random() * listUp.length);
  var pwdU = listUp[formulaU];
  var formulaN = Math.floor(Math.random() * numChar.length);
  var pwdN = numChar[formulaN];
  var formulaS = Math.floor(Math.random() * specChar.length);
  var pwdS = specChar[formulaS];
  return pwdL + pwdU + pwdN + pwdS;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
