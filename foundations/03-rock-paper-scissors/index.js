let moves = ['rock', 'paper', 'scissors']

let getComputerChoice = () => moves[Math.floor(Math.random() * moves.length)]

let playRound = (playerSelection, computerSelection) => {
    p = playerSelection.toLowerCase()

    switch (computerSelection) {
        case 'rock':
            return p === 'rock' ? 'Tie!' : p === 'paper' ? 'Player win!' : 'Computer win!'
        case 'paper':
            return p === 'paper' ? 'Tie!' : p === 'scissors' ? 'Player win!' : 'Computer win!'
        case 'scissors':
            return p === 'scissors' ? 'Tie!' : p === 'rock' ? 'Player win!' : 'Computer win!'
    }
}

let playGame = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your move?")
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

playGame()
