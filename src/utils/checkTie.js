export function checkTie(squares) {
    return Array.from(squares).every(square => square.textContent !== '')
}
