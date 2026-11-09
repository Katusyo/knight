class ChessBoard {
    constructor(size = 8) {
        this.size = size;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = [];
        for (let i = 0; i < this.size; i++) {
            const row = [];
            for (let j = 0; j< this.size;j++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    isValidPosition(position) {
        const [x, y] =position;
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }

    getPossibleMoves([x, y]) {
        const moves = [
            [x + 2, y + 1],
            [x + 2, y - 1],
            [x - 2, y + 1],
            [x - 2, y - 1],
            [x + 1, y + 2],
            [x + 1, y - 2],
            [x - 1, y + 2],
            [x - 1, y - 2]
        ];
        const legalMoves = [];

        for (const move of moves) {
            if (this.isValidPosition(move)) {
                legalMoves.push(move);
            }
        }
        return legalMoves;
    }
}

export default ChessBoard;