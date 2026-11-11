import Knight from "./knight.js";
import ChessBoard from "./ChessBoard.js";

const knight = new Knight();
const board = new ChessBoard();
const boardContainer = document.getElementById("board");
const statusText = document.getElementById("status");

let startPosition = null;
let endPosition = null;
let isAnimating = false;

function createVisualBoard() {
    boardContainer.innerHTML = "";
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            if ((row + col) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }
            square.dataset.row = row;
            square.dataset.col = col;
            square.innerText = `${row},${col}`;

            square.addEventListener("click", handleSquareClick);
            boardContainer.appendChild(square);
        }
    }
}

function handleSquareClick(event) {
    if (isAnimating) return;

    const clickedSquare = event.currentTarget;
    const row = parseInt(clickedSquare.dataset.row);
    const col = parseInt(clickedSquare.dataset.col);
    const position = [row, col];

    if (!startPosition || (startPosition && endPosition)) {
        clearBoardStates();
        startPosition = position;
        clickedSquare.classList.add("start");
        statusText.innerText = "Click a square to set the END position";
    }
    else if (startPosition && !endPosition) {
        if (startPosition[0] === row && startPosition[1] === col) return;

        endPosition = position;
        clickedSquare.classList.add("end");
        statusText.innerText = "Calculating the shortest path...";

        const path = knight.findShortestPath(startPosition, endPosition);
        animatePath(path);
    }
}

function animatePath(path) {
    isAnimating = true;
    let step = 1;

    const interval = setInterval(() => {
        if (step >= path.length - 1) {
            clearInterval(interval);
            statusText.innerText = `Path completed in ${path.length - 1} moves! Click anywhere to reset.`;
            isAnimating = false;
            return;
        }

        const [row, col] = path[step];
        const targetSquare = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (targetSquare) {
        targetSquare.classList.add("path");
        targetSquare.innerText = `${step}`;
        }
        step++;
    }, 500);
}

function clearBoardStates() {
    startPosition = null;
    endPosition = null;
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        const isLight = square.classList.contains("light");
        square.className = isLight ? "square light" : "square dark";
        square.innerText = `[${square.dataset.row},${square.dataset.col}]`;
    });
}

createVisualBoard();
console.log(knight);
console.log(board);