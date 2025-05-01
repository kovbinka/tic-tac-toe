import { createMessage, updateMessage } from './components/message.js'
import { setupListeners } from './listeners/squareListeners.js'
import { restartGame } from './handlers/resetHandler.js'

document.addEventListener("DOMContentLoaded", () => {
    createMessage("X's turn!")
    setupListeners()

    document.getElementById("restartBtn").addEventListener("click", () => {
        restartGame()
    })
})
