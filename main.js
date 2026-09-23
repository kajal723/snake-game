import { Game } from './game.js';

const board = document.getElementById('game-board');

let game;
let interval;

const createBoard = () => {
    board.innerHTML = "";

    for (let y = 0; y < game.rows; y++) {
        for (let x = 0; x < game.columns; x++) {

            const cell = document.createElement('div');
            cell.classList.add('cell');  // add a class to the cell for styling
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);

        }
    }
}

const Render = () => {
    const cells = board.children; // Get all cells in the board

    for (const cell of cells) {
        cell.classList.remove('snake', 'head', 'food');
    }

    game.snake
        .getBody()
        .forEach(
            (segment, index) => {

                const cell = board.querySelector(
                    `[data-x="${segment.x}"][data-y="${segment.y}"]`
                );

                if (!cell) return;

                cell.classList.add(
                    "snake"
                );

                if (index === 0) {

                    cell.classList.add(
                        "head"
                    );

                }

            }
        );


}

const startGame = () => {
    clearInterval(interval);

    game = new Game();

    createBoard();

    Render();
    clearInterval(interval);

   
    game = new Game();

   
    createBoard();
    
    Render();

    interval = setInterval(() => {
            game.update();
            Render();

            if (!game.running) {

                clearInterval(interval);

            }

        },

        game.speed
    );

}

startGame();