const OPERATIONS = new Set(["+", "-", "×", "÷", "/", "*"])
const DIV_BY_ZERO_MESSAGE = "Not a number"

const initialState = {
    display: "0",
    storedNum: undefined,
    operator: undefined,
    startNewNumber: true,
}

let state = { ...initialState }

const display = document.querySelector(".display")


const handleButtonClick = (event) => handleInput(event.target.textContent)
const handleKeyPress = (event) => handleInput(event.key)

// Ugly
const handleInput = (input) => {
    if (input === "AC") {
        state = { ...initialState }
    } else if (!isNaN(Number(input))) {
        if (state.startNewNumber) {
            state.display = input
            state.startNewNumber = false
        } else {
            state.display += input
        }
    } else if (OPERATIONS.has(input)) {
        if (state.storedNum === undefined) {
            state.storedNum = Number(state.display)
            state.startNewNumber = true
        } else if (!state.startNewNumber) {
            const result = operate(state.storedNum, Number(state.display), state.operator)
            state.storedNum = result
            state.display = result
            state.startNewNumber = true
        }
        state.operator = input
    } else if ((input === "=" || input === "Enter") && state.storedNum && state.operator) {
        const result = operate(state.storedNum, Number(state.display), state.operator)
        state.storedNum = result
        state.display = result
        state.operator = undefined
        state.startNewNumber = true
    } else if (input === "." && !state.display.includes(".")) {
        if (state.startNewNumber) {
            state.display = "0."
            state.startNewNumber = false
        } else {
            state.display += "."
        }
    } else if (input === "Backspace") {

        if (state.display.length > 1) {
            state.display = state.display.slice(0, -1)
        } else {
            state.display = "0"
            state.startNewNumber = true
        }
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
        case "*":
            return num1 * num2
        case "÷":
        case "/":
            return Math.round(((num1 / num2) + Number.EPSILON) * 10000) / 10000
    }
}

const getTextWidthEstimate = (size, len) => size * (len / 1.5)

// Over-engineered and yet still impercise
const updateFontSize = () => {
    const maxWidth = display.clientWidth
    const textLength = display.textContent.length
    const fontSize = Number(window.getComputedStyle(display).fontSize.slice(0, -2))
    const isOffScreen = getTextWidthEstimate(fontSize, textLength) > maxWidth

    if (isOffScreen) {
        display.style.fontSize = `${fontSize * .9}px`
    } else {
        const defaultSize = Math.min(window.innerWidth, window.innerHeight) * .8 / 6;
        const defaultSizeFits = getTextWidthEstimate(defaultSize, textLength) < maxWidth
        const increasedFontSize = Math.min(defaultSize, fontSize * 1.1)
        const incrasedSizeFits = getTextWidthEstimate(increasedFontSize, textLength) < maxWidth
        const newFontSize = defaultSizeFits ? defaultSize : incrasedSizeFits ? increasedFontSize : fontSize
        display.style.fontSize = `${newFontSize}px`
    }
}

const showButtonPress = (event) => {
    const button = event.target
    button.style.filter = "brightness(150%)"
    setTimeout(function() {
        button.style.filter = "brightness(100%)"
    }, 100);
}

const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener("click", handleButtonClick)
    buttons.item(i).addEventListener("click", updateFontSize)
    buttons.item(i).addEventListener("click", showButtonPress)
}
document.addEventListener("keydown", handleKeyPress)


