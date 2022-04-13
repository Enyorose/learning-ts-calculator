"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
//this is the function that will be running in the node console
function main() {
    //These variables are strings output in the console to obtain a value
    var firstStr = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    //this line will ensure all 3 inputs are valid at the same time
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    //this will run only if all 3 inputs are valid
    if (validInput) {
        //we need to store the results of the input string in a variable as a number
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        //runs the calculate and console logs the answer
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
//this function is the calculation that takes all the arguments and uses a switch statement to return them.
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
//validation that only these 4 characters can be input as an operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
//validation that the string entered into the console is in fact a number
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
