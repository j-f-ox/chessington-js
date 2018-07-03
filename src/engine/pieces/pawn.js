import Piece from './piece';
import Player from '../player';
import { isMoveValid } from './moves';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.type = "Pawn";
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        let direction = this.player === Player.WHITE ? 1 : -1;
        let pawnStartPosition = this.player === Player.WHITE ? 1 : 6;
        

        for(let i = -1; i < 2; i+=2) {
            let newPosition = new Square(currentSquare.row + 1 * direction, currentSquare.col + i );
            if (board.isOnBoard(newPosition)) {
                if (board.isSquareEmpty(newPosition)) {
                    continue;
                }
            }
            
            isMoveValid(newPosition, board, this.player, movesArray);
        }
        
        let newPosition = new Square(currentSquare.row + 1 * direction, currentSquare.col );

        if (board.isOnBoard(newPosition)) { //check we are not moving off the board
            if (board.isSquareEmpty(newPosition)){ //check that we are moving to an empty square
                movesArray.push(newPosition);
            } else {
                return movesArray;
            }
        }
        
        if (currentSquare.row === pawnStartPosition) { 
            let newPosition = new Square(currentSquare.row + 2 * direction, currentSquare.col );
            if (board.isSquareEmpty(newPosition) ){ //check that we are moving to an empty square
                movesArray.push(newPosition);
            }
        }
        return movesArray;
    }
}
