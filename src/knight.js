import ChessBoard from "./ChessBoard.js"

class Knight {

    constructor() {
        this.board = new ChessBoard();
    }

    findShortestPath(start, end) {
        if (
            !this.board.isValidPosition(start) ||
            !this.board.isValidPosition(end)
        ) {
            throw new Error("Invalid start or end position");
        }

        const queue = [{position: start, path: [start]}];
        const visited = new Set();

        visited.add(start.toString());

        while (queue.length > 0) {
            const { position, path } = queue.shift();

            if (position[0] === end[0] && position[1] === end[1]) {
                return path;
            }
            const nextMoves = this.board.getPossibleMoves(position);
            
            for (const move of nextMoves) {
                if (!visited.has(move.toString())) {
                    visited.add(move.toString());

                    queue.push({ position: move, path: [...path, move] });
                }
            }
        }
        return null;
    }
}

export default Knight;