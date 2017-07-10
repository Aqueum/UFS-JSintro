/**
 * Created by martin on 08/07/2017.
 */

console.log("hiya friend");

for  (var i = 0; i < 10; i++) {
    console.log(i);
}

// single line comment

/*
Multi
Line
Comment
 */

console.log("concatenate" + " " + "strings");

// implicit type coercion
console.log("Hello" + 5*10);
// gives Hello50

var variableName = "value";
console.log(variableName);

console.log("James"[0]);

console.log("This is how we say \"he said\", you see? \nand take a new line \n\ttabbed 2 \n\tor 3");

//Ternary operator
//conditional ? (if condition is true) : (if condition is false)

var isGoing = true;
var colour = isGoing ? "green" : "red";
console.log(colour);

// is equivalent to:

var isGoing2 = true;
var color;
if (isGoing2) {
    color = "green";
} else {
    color = "red";
}
console.log(color);

// Switch Statement with fallthrough

var month = 2;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
}

console.log("There are " + days + " days in this month.");

// Loops
// While
var start = 0; // when to start
while (start < 10) { // when to stop
    console.log(start);
    start = start + 2; // how to get to the next item
}

// For
for (var j = 0; j < 6; j = j + 1) {
    console.log("Printing out j = " + j);
}

// Functions

function findAverage(x, y) {
    return (x + y) / 2;
}

var avg = findAverage(5, 9);

console.log(avg);

// Callback - function as parameter:
// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));

// Inline function:
// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// Arrays
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array