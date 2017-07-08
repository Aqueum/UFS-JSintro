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