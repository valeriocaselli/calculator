/* Calculator Logic */

class Calculator {
    constructor (numberBtns, operationBtns, pointBtn) {
        this.numberBtns = numberBtns
        this.operationBtns = operationBtns
        this.pointBtn = pointBtn
        this.keyboard = Array.from(numberBtns).concat(Array.from(operationBtns), pointBtn)
    }

    /* Function to change from light mode to dark mode and vice versa */ 
    switchMode (element, class0, class1) {
        element.classList.toggle(class0)
        element.classList.toggle(class1)
    }

    /* Function to update che expression */
    updateExpression(value, expression) {
        expression = expression + value
        return expression
    }

    /* Function to display the current expression on the screen 
       Function to display the result too */
    displayExpression(screen, expression) {
        screen.textContent = expression
    }

    /* Function to evaluate the expression and get the result */
    evaluateResult (expression) {
        // return eval(expression)
        try {
            if (Number(eval(expression))) {
                return eval(expression)
            }
        }
        catch (err) {
            return err.name
        }
    }

    /* Function to remove the last element of the current expression */
    removeLast (expression) {
        return expression.slice(0, -1)
    }

    /* Function to check the lenght of the current expression: the user is allowerd to write an expression of 25 characters, maximum */
    checkLength (expression) {
        if (expression.length >= 25) {
            this.lockKeyboard()
        }
    }

    /* Function to lock the keyboard when necessary */
    lockKeyboard () {
        this.keyboard.forEach(btn => {
            btn.disabled = true
        })
        console.log(this.keyboard)
    }

    /* Function to lock the keyboard when necessary */
    unlockKeyboard () {
        this.keyboard.forEach(btn => {
            btn.disabled = false
        })
    }

}

export { Calculator }
