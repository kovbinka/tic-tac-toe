let players = ['❌', '⭕']
let currentPlayer = players[0]
let someoneWon = false

export { players }

export function getCurrentPlayer() {
    return currentPlayer
}

export function setCurrentPlayer(value) {
    currentPlayer = value
}

export function getSomeoneWon() {
    return someoneWon
}

export function setSomeoneWon(value) {
    someoneWon = value
}
