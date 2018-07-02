import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        let direction = this.player === Player.WHITE ? 1 : -1;
        let pawnStartPosition = this.player === Player.WHITE ? 1 : 6;
        let newPosition = { row: currentSquare.row + 1 * direction, col: currentSquare.col };
        if (board.isOnBoard(newPosition)) { //check we are not moving off the board
            if (board.isSquareEmpty(newPosition)){ //check that we are moving to an empty square
                movesArray.push(newPosition);
            } else {
                return movesArray;
            }
        }
        
        if (currentSquare.row === pawnStartPosition) { 
            let newPosition = { row: currentSquare.row + 2 * direction, col: currentSquare.col };
            if (board.isSquareEmpty(newPosition) ){ //check that we are moving to an empty square
                movesArray.push(newPosition);
            }
        }
        return movesArray;
    }
}
