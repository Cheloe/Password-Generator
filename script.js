// Document targets
var generateBtn = document.querySelector("#generate");

// Character Arrays
var lowercaseArr = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var uppercaseArr = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var numbersArr = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];
var symbolsArr = [
    '!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{', '}','<','>','?','.',':',';'
];

// Capture user preferences, push each character type into a password array, then randomize, stringify, and return that password array--

function generatePassword(){
    
    // Prompt user for character length
    var numOfChars= prompt("How many characters should your password have?");

        // Check to make sure password length is not blank, too short, or too long
        if (!numOfChars || numOfChars < 8 || numOfChars > 128) {
            password = "Sorry, each password must be between 8 and 128 characters. Please try again!"
            return password;
        }

    // Capture user's character preferences
    var lowerPrompt = confirm("Should your password have lowercase letters?");
    var upperPrompt = confirm("Should your password have uppercase letters?");
    var numbersPrompt = confirm("Should your password have numbers?");
    var symbolsPrompt = confirm("Should your password have lowercase letters?");

        // Check to make sure password has at lease one character type
        if (!lowerPrompt && !upperPrompt && !numbersPrompt && !symbolsPrompt) {
            password = 'Sorry, each password must have at least one character type. Please try again!'
            return password;
        }
    
    // Determine the iterator for pulling from each character array    
    var numOfTypes = 0;
        
    var calculateFirstIterator = function () {
        if (lowerPrompt){
            numOfTypes++;
        }
        if (upperPrompt) {
            numOfTypes++;
        }
        if (numbersPrompt) {
            numOfTypes++;
        }
        if (symbolsPrompt) {
            numOfTypes++;
        }
        return Math.floor(numOfChars / numOfTypes);
    };

    var firstIterator = calculateFirstIterator();
    
    // This adds a number determined by the previous function from each kind of character-type array and adds them to a password array
    function createPassword(firstIterator, password) {
        
        password = [];
        var allSelectedCharsArr = [];

        if (lowerPrompt){ 
            allSelectedCharsArr = allSelectedCharsArr.concat(lowercaseArr);
            for (let i = 0; i < firstIterator; i++) {
                password = password.concat(lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)]);
            }
        };

        if (upperPrompt){
            allSelectedCharsArr = allSelectedCharsArr.concat(uppercaseArr);
            for (let i = 0; i < firstIterator; i++) {
                password = password.concat(uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)]);
            }
        };

        if (numbersPrompt){ 
            allSelectedCharsArr = allSelectedCharsArr.concat(numbersArr);
            for (let i = 0; i < firstIterator; i++) {
                password = password.concat(numbersArr[Math.floor(Math.random() * numbersArr.length)]);
            }
        };

        if (symbolsPrompt) { 
            allSelectedCharsArr = allSelectedCharsArr.concat(symbolsArr);
            for (let i = 0; i < firstIterator; i++) {
                password = password.concat(symbolsArr[Math.floor(Math.random() * symbolsArr.length)]);
            }
        };

        // If number of characters the user chose is not evenly divisible by the number of types they chose, this pulls the remainder from allSelectedCharsArr.
        if (password.length < numOfChars){
            timesToReiterate = numOfChars - password.length;
            for (let i = 0; i<= timesToReiterate; i++) {
                password = password.concat(allSelectedCharsArr[Math.floor(Math.random() * allSelectedCharsArr.length)]);
            }
        }
        
        // Since characters are added to the password in a set order, the password needs to be shuffled or every password will have a similar format
        let shuffled = password
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        
        password = shuffled;

        // Removes commas from password array
        password = password.join('');

        return password;
    }

    return createPassword(firstIterator, password);
}
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);