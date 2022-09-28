// Assignment Code
var generateBtn = document.querySelector("#generate");
var listLow = "abcdefghijklmnopqrstuvwxyz";
var listUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specChar = "!#$%&()*+-./:;<=?@^_`{|}~,";
var temp = "";
var password = "";

function askHowLong() {
  var length = prompt("How many characters would you like your password to be? Your choice must be a number between 8 and 128.");
  
  if (length >= 8 && length <= 128) {
    confirm("You would like " + length + " characters in your password? If so, please confirm.");
    return length;
  }
  if (length < 8 || length > 128) {
    confirm("You did not enter a valid input. Please try again.")
    return askHowLong();
  }
}

// Write password to the #password input
function generatePassword() {
  lowercaseCharacterTypes(), uppercaseCharacterTypes(), numericCharacterTypes(), specialCharacterTypes();
  return entirePassword(askHowLong());
}

function lowercaseCharacterTypes() {
  confirm("In the following prompts, you will be asked questions about what character types you want your password to include. If you want them included, click 'OK'. If you do not want them included, click 'Cancel'.");
  let lowerCase = confirm("Would you like to include lowercase letters in your password?");
  
  if (lowerCase == true) {
    temp += (listLow);
    confirm("You would like lowercase characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want lowercase characters to be included in your password? On to the next option!");
  }
}

function uppercaseCharacterTypes() {
  let upperCase = confirm("Would you like to include uppercase letters in your password?");
  
  if (upperCase == true) {
    temp += (listUp);
    confirm("You would like uppercase characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want uppercase characters to be included in your password? On to the next option!");
  }
}

function numericCharacterTypes() {
  let numEric = confirm("Would you like to include numeric characters in your password?");
  
  if (numEric == true) {
    temp += (numChar);
    confirm("You would like numeric characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want numeric characters to be included in your password? On to the next option!");
  }
}

function specialCharacterTypes() {
  let speCial = confirm("Would you like to include special characters in your password?");
  
  if (speCial == true) {
    temp += (specChar);
    confirm("You would like special characters to be included in your password? If so, please confirm.");
  } else {
    confirm("You do not want special characters to be included in your password? On to the next option!");
  }
}

function entirePassword(length) {
  for (var i = 0; i < length; i++) {
    var tempsplit = temp.split("");
    var randO = tempsplit[Math.floor(Math.random() * temp.length)]
    
    password += (randO); 
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
