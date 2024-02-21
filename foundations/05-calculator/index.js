const OPERATIONS = new Set(["+", "-", "×", "÷"])
const DIV_BY_ZERO_MESSAGE = "Not a number"

const initialState = {
    display: "0",
    storedNum: undefined,
    operator: undefined,
    startNewNumber: true,
}

let state = { ...initialState }

const display = document.querySelector(".display")

const handleButtonClick = (event) => {
    let buttonText = event.target.textContent

    if (buttonText === "AC") {
        state = { ...initialState }
    } else if (!isNaN(Number(buttonText))) {
        if (state.startNewNumber) {
            state.display = buttonText
            state.startNewNumber = false
        } else {
            state.display += buttonText
        }
    } else if (OPERATIONS.has(buttonText)) {
        if (state.storedNum === undefined) {
            state.storedNum = Number(state.display)
            state.startNewNumber = true
        }
        state.operator = buttonText
    } else if (buttonText === "=" && state.storedNum && state.operator) {
        const result = operate(state.storedNum, Number(state.display), state.operator)
        state = { ...initialState }
        state.storedNum = result
        state.display = result
    }
    display.textContent = state.display
}

const operate = (num1, num2, operator) => {
    if (num1 === DIV_BY_ZERO_MESSAGE || num2 === 0) {
        return DIV_BY_ZERO_MESSAGE
    }
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "×":
            return num1 * num2
        case "÷":
            return num1 / num2
    }
}


// Section: - Add onclick
const buttons = document.getElementsByClassName("button");
console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).onclick = handleButtonClick
}

