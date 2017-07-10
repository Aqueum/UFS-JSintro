# UFS-JSintro
Notes from udacity [UD803 Intro to JavaScript](https://www.udacity.com/course/intro-to-javascript--ud803)

## Values
- null is nothing
- undefined is the absence of anything
- NaN is not a number

## Boolean Operators
- &&    = AND
- ||    = OR
- !     = NOT

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

## Shaddowing
AKA scope overriding.  When you have the same variable name defined in two different scopes and one overrides the other.
