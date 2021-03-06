import Piece from './piece';
import { isMoveValid } from './moves';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.type = "Knight";
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        const oneUp = 1;
        const oneDown = -1;
        const twoUp = 2;
        const twoDown = -2;
        let possibleMoves = [
            {row: oneUp, col: twoDown}, {row: oneUp, col: twoUp}, {row: oneDown, col: twoDown}, {row: oneDown, col: twoUp},
            {row: twoUp, col: oneUp}, {row: twoUp, col: oneDown}, {row: twoDown, col: oneUp}, {row: twoDown, col: oneDown}
        ];
        for (let i=0; i<possibleMoves.length; i++){
            let newRow = currentSquare.row + possibleMoves[i].row;
            let newCol = currentSquare.col + possibleMoves[i].col;
            let newPosition = new Square(newRow, newCol);
            isMoveValid(newPosition, board, this.player, movesArray);
        }
        return movesArray;
    }
}
