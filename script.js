// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
/*Var section*/
var uppercaseask = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var  lowercaseask = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var  numask = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var  specialask = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "."];

//emtpy arrays
var result = [];
var userarray = [];

uppercaseask [1]

//Prompt for password character count
var passlength = prompt("How many characters? must be between 8-128");
  if (passlength < 8) {
    alert("Password must be more than 7 characters");
    return"";
  }

  if (passlength > 128) {
    alert("Password must be less than 128 characters");
    return"";
  }

//Prompts for numbers, upper case, lower case and special characters
var number = confirm ("Would you like numbers included?");
var uppercases = confirm ("Do you want upper case?");
var lowercases = confirm ("Do you want lower case?");
var specials = confirm ("Would you like special characters?");

//Concat to combine results 
  if (number){
    result = result.concat(numask);
  }

  if (uppercases){
      result = result.concat(uppercaseask);
    }

  if (lowercases){
      result = result.concat(lowercaseask);
    }

  if (specials){
    result = result.concat(specialask);
  }

//Logging result 
console.log(result)


//Array for randomization based on results above 
  for (var i = 0; i < passlength; i++) {
    userarray.push (result[Math.floor(Math.random() * result.length)]);
  }

  return userarray.join("");

}

//Function to write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);