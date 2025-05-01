import { players, setCurrentPlayer, setSomeoneWon } from '../constants/game.js';

import { updateMessage } from '../components/message.js';

export function restartGame() {
    const squares = document.getElementsByClassName('square');

    for (let square of squares) {
        square.textContent = '';
    }

    setCurrentPlayer(players[0]);
    setSomeoneWon(false);
    updateMessage(`X's turn!`);
}
