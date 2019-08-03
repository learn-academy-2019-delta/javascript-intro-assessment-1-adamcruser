// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

var mantra = "Be the dev"

// 1a. Write the code that returns 'B' from mantra.

var mantra = "Be the dev"
var letter = mantra.charAt("Be the dev")
console.log(letter)


// 1b. Write the code that determines if there is an 'x' in mantra.

var mantra = "be the dev"
var maybe = mantra.includes("x")
console.log(maybe)


// 1c. Write the code that determines if there is a 'v' in mantra.

var mantra = "be the dev"
var cool = mantra.includes("v")
console.log(cool)


// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.


// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var myDog = "Snoopy"
var myCat = "Garfield"
function dogCat (str1, str2){
    if (str1.length>str2.length){
         console.log(str1)
        return str1 
    }else{
        console.log(str2)
        return str2
    
    }
}
    dogCat(myDog, myCat)

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var myDog = "Snoopy"
var myCat = "Garfield"
var animal = [myDog].concat([myCat])
console.log(animal)
 


// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.


// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

var myMessage = "Learning is fun!"
const letters = (str) =>{
    let newArr= str.split("")
    // console.log(newArr)
    for (let i=0; i< newArr.length;i++){
        console.log(newArr[i])
    }
}
letters(myMessage)

// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().


// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

var testString = "thisisateststring"
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels(testString))

// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.


// ----------------------------------------------
// Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

getCats =(arr) =>{
    const kats =[]
    for(let i=0; i<arr.length; i++){
        if (arr[i].animal=== "cat"){
          kats.push(arr[i])  
        }
    }
    return kats
} 
getCats(toonimals)
console.log(getCats(toonimals))




//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"