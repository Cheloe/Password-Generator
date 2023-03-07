// Assignment Code
var generateBtn = document.querySelector("#generate");



//This function gets user preferences, adds them to the character pool array, randomly chooses characters from that array, then calls the check characters function to ensure each type of character is represented and randomly splices in any missing values. 

function generatePassword(){
    //Character Arrays
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var symbols = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{', '}','<','>','?','.',',',':',';'];
    var charPool = [];

    //var numChars = this.prompt("How many characters should your password have?") //this needs to be run through a min/max check at some point.
    var includeLower = this.confirm("Should your password have lowercase letters? (Y/N)");
    var includeUpper = this.confirm("Should your password have uppercase letters? (Y/N)");
    var includeNumbers = this.confirm("Should your password have numbers? (Y/N)");
    var includeSymbols = this.confirm("Should your password have symbols?");   
    
    //this pushes the appropriate characters to an array of all possible characters
    if (includeLower) {
        charPool = charPool.concat(lowercase);
    };
    if (includeUpper) {
        charPool = charPool.concat(uppercase);
    }
    if (includeNumbers) {
        charPool = charPool.concat(numbers);
    }
    if (includeSymbols) {
        charPool = charPool.concat(symbols);
    }

    console.log(charPool);
    
    function ensureChars() {

    };
    function 
    // ensureChars();
};



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

