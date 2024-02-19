const generateGrid = (dimension = 16) => {
    const grid = document.querySelector(".grid")
    grid.innerHTML = ''

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        grid.appendChild(row)

        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.addEventListener("mouseover", setRandomColor)
            square.addEventListener("mouseover", increaseBrightness)
            row.appendChild(square)
        }
    }
}

const parseFilter = (raw) => {
    if (!raw) {
        return 0
    } else {
        console.log(raw)
        return Number(raw.replace(/\D/g, ''))
    }
}

const increaseBrightness = (event) => {
    let square = event.target
    let filterString = square.style.filter
    let brightness = parseFilter(filterString)
    brightness = brightness < 100 ? brightness + 10 : brightness
    square.style.filter = `brightness(${brightness}%)`;

}

const setRandomColor = (event) => {
    let square = event.target
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    square.style.backgroundColor = randomColor;
}

const parseUserInput = (input) => {
    let number = Number(input)
    if (isNaN(number)) {
        return 16
    } else if (number > 100) {
        return 100
    } else {
        return number
    }
}

const displayPrompt = () => {
    userInput = prompt("Enter grid dimentions (max 100)")
    dimensions = parseUserInput(userInput)
    generateGrid(dimensions)
}

generateGrid()
