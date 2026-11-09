import ChessBoard from "./ChessBoard.js"

class Knight {

    constructor() {

    }

    findShortestPath(start, end) {
        const board = new ChessBoard();

        const queue = [{position: start, path: [start]}];
        const visited = new Set();

        visited.add(start.toString());

        while (queue.length > 0) {
            const { position, path } = queue.shift();

            if (position[0] === end[0] && position[1] === end[1]) {
                console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
                for (const step of path) {
                    console.log(step);
                }
                return path;
            }

            const nextMoves = board.getPossibleMoves(position);
            for (const move of nextMoves) {
                if (!visited.has(move.toString())) {
                    visited.add(move.toString());
                    queue.push({ position: move, path: [...path, move] });
                }
            }
        }
    }
}

export default Knight;