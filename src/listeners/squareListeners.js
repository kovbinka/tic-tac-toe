import { handleClick } from '../handlers/gameHandler.js'

export function setupListeners() {
    const squares = document.getElementsByClassName('square')
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
            handleClick(i, squares)
        })
    }
}
