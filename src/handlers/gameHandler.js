import { checkWin } from '../utils/checkWin.js'
import { checkTie } from '../utils/checkTie.js'
import { switchPlayer } from '../utils/switchPlayer.js'
import { updateMessage } from '../components/message.js'
import {
    getCurrentPlayer,
    setCurrentPlayer,
    getSomeoneWon,
    setSomeoneWon,
    players
} from '../constants/game.js'

export function handleClick(i, squares) {
    if (getSomeoneWon() || squares[i].textContent !== '') {
        return {
            currentPlayer: getCurrentPlayer(),
            someoneWon: getSomeoneWon()
        }
    }

    squares[i].textContent = getCurrentPlayer()

    if (checkWin(squares, getCurrentPlayer())) {
        setSomeoneWon(true)
        updateMessage(`Game over! ${getCurrentPlayer()} wins! 🥇`)
        return {
            currentPlayer: getCurrentPlayer(),
            someoneWon: true
        }
    }

    if (checkTie(squares)) {
        setSomeoneWon(true)
        updateMessage(`Game is tied! 🎭`)
        return {
            currentPlayer: getCurrentPlayer(),
            someoneWon: true
        }
    }

    const nextPlayer = switchPlayer(getCurrentPlayer(), players)
    setCurrentPlayer(nextPlayer)
    updateMessage(`${nextPlayer}'s turn!`)

    return {
        currentPlayer: nextPlayer,
        someoneWon: false
    }
}
