import Piece from './piece';
import { linearMoves } from './moves';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
        this.type = "Rook";
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        return linearMoves(currentSquare, board, this.player);
    }
}
