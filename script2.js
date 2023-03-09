var timesToIterate =  function () {
    if (lower){
        numOfTypes++;
    }
    if (upper) {
        numOfTypes++;
    }
    if (numbers) {
        numOfTypes++;
    }
    if (symbols) {
        numOfTypes++;
    }
    return Math.floor(numOfChars / numOfTypes);
}();



// //TODO: change insurance condition to randomly choose from superarray ()
// //This 
// function createPassword(password) {
    
//     password = [];
    
//     if (lower){ 
//         arrayOfChoices = arrayOfChoices.concat(lowercase);
//         for (let i = 0; i <= timesToIterate; i++) {
//             password = password.concat(lowercase[Math.floor(Math.random) * lowercase.length])
//         }
//     };

//     if (upper){
//         arrayOfChoices = arrayOfChoices.concat(uppercase);
//         for (let i = 0; i <= timesToIterate; i++) {
//             password = password.concat(uppercase[Math.floor(Math.random) * uppercase.length])
//         }
//     };

//     if (numbers){ 
//         arrayOfChoices = arrayOfChoices.concat(numbers);
//         for (let i = 0; i <= timesToIterate; i++) {
//             password = password.concat(numbers[Math.floor(Math.random) * numbers.length])
//         }
//     };

//     if (symbols) { 
//         arrayOfChoices = arrayOfChoices.concat(symbols);
//         for (let i = 0; i <= timesToIterate; i++) {
//             password = password.concat(symbols[Math.floor(Math.random) * symbols.length])
//         }
//     };

//     if (password.length < numOfChars){
//         timesToIterate = numOfChars - password.length;
//         for (let i = 0; i<= timesToIterate; i++) {
//             password = password.concat(lowercase[Math.floor(Math.random) * lowercase.length]);
//         }
//     }
//     return password;
// }