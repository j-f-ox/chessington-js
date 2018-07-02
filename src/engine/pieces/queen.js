import Piece from './piece';
import { diagonalMoves, linearMoves } from './moves';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moveArray = [];
        let currentSquare = board.findPiece(this);
        moveArray = moveArray.concat(diagonalMoves(currentSquare, board));
        moveArray = moveArray.concat(linearMoves(currentSquare, board, this.player));

        return moveArray;
    }
}
