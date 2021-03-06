# UFS-JSintro
Notes from udacity [UD803 Intro to JavaScript](https://www.udacity.com/course/intro-to-javascript--ud803)

## Primative Data Types
- strings
- numbers (NaN is not a number, but it's type is number)
- booleans
- null is nothing
- undefined is the absence of anything

### typeof
- typeof "hello" // returns "string"
- typeof true // returns "boolean"
- typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
- typeof function hello() { } // returns "function"

## Boolean Operators
- &&    = AND
- ||    = OR
- !     = NOT

## Increment/decrement
- x++ or ++x // same as x = x + 1
- x-- or --x // same as x = x - 1
- x += 3 // same as x = x + 3
- x -= 6 // same as x = x - 6
- x *= 2 // same as x = x * 2
- x /= 5 // same as x = x / 5

## Style
[styleguide](https://google.github.io/styleguide/jsguide.html
) says camelCase for variables


## Falsy & Truthy
Falsy values evaluate to false in context of boolean expression:
1. the Boolean value false
2. the null type
3. the undefined type
4. the number 0
5. the empty string ""
6. the odd value NaN (stands for "not a number", check out the NaN MDN article)

Everything else is Truthy

## Scope
- If an identifier is declared in global scope, it's available everywhere.
- If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
- When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
- Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.

### Shaddowing
AKA scope overriding.  When you have the same variable name defined in two different scopes and one overrides the other.

### Hoisting
JavaScript (as opposed to most languages), invisibly hoists function & variable declarations to the top of the current scope.
So you can declare a variable or function anywhere in the script.  
WARNING: this doesn't happen with assignments, so `var greeting = "hello";` defined below `console.log(greeting);` would be undefined
because the variable declaration would be hoisted, but as an empty variable, as asignation is not hoisted.
FIX: define your functions at the top of the script and variables at the top of the functions, so code behaves as it looks.
- JavaScript hoists function declarations and variable declarations to the top of the current scope.
- Variable assignments are not hoisted.
- Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.

## Function Expression
- function expression:
`var whatever = function() {}`
- function declaration: 
`function whatever() {}`

Function expressions use named or anonymous functions stored in variables.

Giving the variable name will return the function, the name with parenthesis calls the function.

HOISTING: Function expressions are not hoisted. Only variable declarations are hoisted, not their assignments.

## Callbacks - functions as parameters
A function that is passed into another function is called a callback.

## Inline functions
You can write a function within the argument of another function.  Doing so with anonimous functions can save code if you aren't going to use them again.

## Array methods
Check the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- .length -> number of elements
- .push(x) -> add x as last element
- .pop() -> remove & return last element
- .splice(change index, # of elements to delete, [add somethings,])
- .forEach(element, index, array) {} -> lets you loop over elements
- y = x.map(function(element) {}) -> copies x, performing function on elements

## Objects
`var object = {};`

### Object literal notation
`var object = {
   key: value,
   k2: v2
 };`
 
 Keys & values separated by colons, pairs separated by commas (& often given new lines), all wrapped in curly braces {} 
 
 For a method (as opposed to property) the value is a function.
 
 Can access with bracket notation: `objecy["key"]` or dot notation `object.key`
 
 Can't start a property name with number & it can't include spaces or hyphens - use camelCase.
 
 Better not to put quotes around property names as it can mask errors.
 