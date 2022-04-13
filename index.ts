import { question } from 'readline-sync'

//defining a type so typescript knows that only these 4 characters are valid operators
type Operator = '+' | '-' | '*' | '/'


//this is the function that will be running in the node console
function main(): void {

  //These variables are strings output in the console to obtain a value
  const firstStr: string = question('Enter first number:\n')
  const operator: string = question('Enter operator:\n')
  const secondStr: string = question('Enter second number:\n')

  //this line will ensure all 3 inputs are valid at the same time
  const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)

  //this will run only if all 3 inputs are valid
  if (validInput) {
    //we need to store the results of the input string in a variable as a number
    const firstNum: number = parseInt(firstStr)
    const secondNum: number = parseInt(secondStr)

    //runs the calculate and console logs the answer
    const result = calculate(firstNum, operator as Operator, secondNum)
    console.log(result)
  }
  else {
    console.log('\ninvalid input\n')
    main()
  }

}
//this function is the calculation that takes all the arguments and uses a switch statement to return them.
function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case '+':
      return firstNum + secondNum
    case '-':
      return firstNum - secondNum
    case '*':
      return firstNum * secondNum
    case '/':
      return firstNum / secondNum
  }
}
//validation that only these 4 characters can be input as an operator
function isOperator(operator: string): boolean {
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
      return true
    default:
      return false
  }
}

//validation that the string entered into the console is in fact a number
function isNumber(str: string): boolean {
  const maybeNum = parseInt(str)
  const isNum: boolean = !isNaN(maybeNum)
  return isNum
}


main()