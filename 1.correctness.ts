/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
scriptAt(str: string)
2) What did you learn from this exercise?
- Use the indexOf
- Write function
- Assign type to ensure both input type and output type are correct.
- Check type of variable
*/

function scriptAt(str: string): number{
    console.log(typeof str)
    var result = str.indexOf('Script')
    return result
}

var result = scriptAt('somethingScriptsomething')
console.log(result)