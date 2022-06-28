// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
