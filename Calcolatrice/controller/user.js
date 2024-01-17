import { Calculator } from "../model/logic.js"



/* Expression to solve by the calculator, empty by default */
let expression = ""

/* Result, empty by default */
let result = ""

/* Container for the calculator */
const container = document.querySelector(".calculator")

/* Container for displaying the current expression */
const expressionContainer = document.getElementById("expression")

/* Container for displaying the result on the screen */
const resultContainer = document.getElementById("result")

/* AC button in the keyboard */
const clearButton = document.getElementById("clear-button")

/* C button in the keyboard */
const deleteBtn = document.getElementById("delete-button")

/* Numbers Buttons */
const numberBtns = document.querySelectorAll(".number-button")

/* Operation Buttons */
const operationBtns = document.querySelectorAll(".operation-button")

/* Point button */
const pointBtn = document.getElementById("point-button")

/* Equal button */
const equalBtn = document.getElementById("equal-button")

/* Input for swtiching mode (from light to dark and vice versa) */
const inputMode = document.querySelector(".switch-mode-container span")

/* Class istance */
const calc = new Calculator (numberBtns, operationBtns, pointBtn)

/* When mode input is clicked, the calculator's mode change (light mode - dark mode and vice versa) */
inputMode.addEventListener("click", () => {
    calc.switchMode(container, "light-mode", "dark-mode")
})

/* When a number button is cliked, its value is appended to the current expression, then the expression is displayed on the screen */
numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        expression = calc.updateExpression(btn.value, expression)
        calc.displayExpression(expressionContainer, expression)
        calc.checkLength(expression)
    })
})

/* When a operation button is cliked, its value is appended to the current expression, then the expression is displayed on the screen */
operationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        /* In the keyboard the button of "percent" (%) is equal to a 0.01 multiplication */
        if (btn.value === "%") {
            expression = calc.updateExpression("*0.01", expression)
        }
        else {
            expression = calc.updateExpression(btn.value, expression)
        }
        calc.displayExpression(expressionContainer, expression)
        calc.checkLength(expression)
    })
})

/* When equal button is clicked, the user reads the expression result on the screen */
equalBtn.addEventListener("click", () => {
    result = calc.evaluateResult(expression)
    calc.displayExpression(resultContainer, result)
    expression = ""
    calc.unlockKeyboard()
})

/* The clear button (AC), if clicked, resets the current expression and the result to default state. It cleans completely the display */
clearButton.addEventListener("click", () => {
    expression = ""
    result = ""
    calc.displayExpression(expressionContainer, expression)
    calc.displayExpression(resultContainer, result)
    calc.unlockKeyboard()
})

/* Everytime the delete button (C button in the keyboard) is clicked, the last character of the current expression is removed */
deleteBtn.addEventListener("click", () => {
    expression = calc.removeLast(expression)
    calc.displayExpression(expressionContainer, expression)
    calc.unlockKeyboard()
})

/* When point Button is clicked, a point is appended to the expression. It is used for creating decimal numbers */
pointBtn.addEventListener("click", () => {
    expression = calc.updateExpression(pointBtn.value, expression)
    calc.displayExpression(expressionContainer, expression)
    calc.checkLength(expression)
})