export function switchPlayer(currentPlayer, players) {
    return currentPlayer === players[0] ? players[1] : players[0]
}
