// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Arrays
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{', '}','<','>','?','.',',',':',';'];
//var randomArrayPickerArray = [lowercase, uppercase, numbers, symbols];

//This function gets user preferences, adds them to the character pool array, randomly chooses characters from that array, then calls the check characters function to ensure each type of character is represented and randomly splices in any missing values.

function generatePassword(){
    // Stores characters of each type chosen by user
    //var charPool = [];
   

    //var numChars = this.prompt("How many characters should your password have?") //this needs to be run through a min/max check at some point.
    // var includeLower = this.confirm("Should your password have lowercase letters?");
    // var includeUpper = this.confirm("Should your password have uppercase letters?");
    // var includeNumbers = this.confirm("Should your password have numbers?");
    // var includeSymbols = this.confirm("Should your password have symbols?");

    var passwordChoices = {
        numOfChars: window.prompt("How many characters should your password have?"),
        lower: window.confirm("Should your password have lowercase letters?"),
        upper: window.confirm("Should your password have uppercase letters?"),
        numbers: window.confirm("Should your password have numbers?"),
        symbols: window.confirm("Should your password have lowercase letters"),
        numOfTypes: 0,
        numberFromEachArray:0,
        addChars() {
            if (this.lower){
                this.numOfTypes++;
            }
            if (this.upper) {
                this.numOfTypes++;
            }
            if (this.numbers) {
                this.numOfTypes++;
            }
            if (this.symbols) {
                this.numOfTypes++;
            }
        },
        determineNumberFromEachArray(){
            this.numberFromEachArray = this.numOfTypes/this.numOfChars;
        },
        addToArrayFirstTime(){
            
        }
    }
    
    //this pushes the appropriate characters to an array of all possible characters
    //function addChars() {

        //function to add chars to password takes three parameters (number of times to iterate (math.floor(numChars/# types of chars )) | name of the array to iterate over | password) 
        //concats number items to password array from selected array.
        //if password.length > numChars (selected by user), then run the function again pw.length - numChars times using the array of arrays
        //return password

        // if (includeLower) {
        //     charPool = charPool.concat(lowercase);
        //     };
        // if (includeUpper) {
        //     charPool = charPool.concat(uppercase);
        //     };
        // if (includeNumbers) {
        //     charPool = charPool.concat(numbers);
        //     };
        // if (includeSymbols) {
        //     charPool = charPool.concat(symbols);
        //     };
    //};
    
    console.log(charPool);

    
    
    // addChars();
    // ensureChars();
    //passwordDraft.
}



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

// Is there a way to keep running through the conditional until all of the checks come back true?

// Divide the number of characters the user requests by the number of character arrays (ie 24 characters = math.floor(6)), pull that many characters out of each selected character array.
// if password length < user choice length, reiterate over each array 1x for pwlength - user length times
// if there is a modulus,then make char pool
//randomize that array
//profit.





// ------- Old Code I threw out because I had better ideas:---------

//iterates over the character pool the number of times specified by the user's character count choice, adding a random character to a password draft each time.


    //this checks the proposed password to ensure the random number generator didn't miss any of the character types added to the possible characters array.
    // function ensureChars() {
    //     if (includeLower && !passwordDraft.includes(uppercase)) {
    //         passwordDraft.splice(passwordDraft[Math.floor(Math.random() * lowercase.length-1)], 1, lowercase[Math.floor(Math.random() * lowercase.length-1)]);
    //     };
    // };