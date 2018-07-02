import Piece from './piece';
import { diagonalMoves } from './moves';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        return diagonalMoves(currentSquare, board, this.player);
    }
}
