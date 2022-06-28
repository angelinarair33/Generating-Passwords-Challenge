// Assignment Code
var generateBtn = document.querySelector("#generate");

function askHowLong() {
  let length = prompt("How many characters would you like your password to be?");
  
  if (length != null) {
    confirm("You would like " + length + " characters in your password? If so, please confirm.");
   }
}

// Write password to the #password input
function generatePassword() {
  return askHowLong(), "Kevin70$";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
