import { checkWin } from '../utils/checkWin.js'
import { checkTie } from '../utils/checkTie.js'
import { switchPlayer } from '../utils/switchPlayer.js'
import { updateMessage } from '../components/message.js'

let players = ['X', 'O']
let currentPlayer = players[0]
let someoneWon = false

export function handleClick(i, squares) {
    if (someoneWon || squares[i].textContent !== '') return { currentPlayer, someoneWon }

    squares[i].textContent = currentPlayer

    if (checkWin(squares, currentPlayer)) {
        someoneWon = true
        updateMessage(`Game over! ${currentPlayer} wins!🥇`)
        return { currentPlayer, someoneWon }
    }

    if (checkTie(squares)) {
        someoneWon = true
        updateMessage(`Game is tied!🎭`)
        return { currentPlayer, someoneWon }
    }

    currentPlayer = switchPlayer(currentPlayer, players)
    updateMessage(`${currentPlayer}'s turn!`)
    return { currentPlayer, someoneWon }
}

export function restartGame() {
    const squares = document.getElementsByClassName('square')
    for (let square of squares) {
        square.textContent = ''
    }
    currentPlayer = players[0]
    someoneWon = false
    updateMessage(`X's turn!`)
}
