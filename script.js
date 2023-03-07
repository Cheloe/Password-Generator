// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Arrays
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{', '}','<','>','?','.',',',':',';'];
var characterPool = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//arrays

//prompts

//math floor is new array.length -1


//When someone adds a type to the password pool, it is pushed into the array. Math.random has a floor of pool.length. Iterates over the pool the number of times specified by password length. Then, run checks to make sure there is at least one of each specified character type, and splice one in at a randomly chosen location if not. 

//Is there a way to keep running through the conditional until all of the checks come back true?

