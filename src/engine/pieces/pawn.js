import Piece from './piece';
import Player from '../player';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        let direction = this.player === Player.WHITE ? 1 : -1;
        let pawnStartPosition = this.player === Player.WHITE ? 1 : 6;
            movesArray.push({row: currentSquare.row + 1*direction, col: currentSquare.col});
            if(currentSquare.row === pawnStartPosition) {
                movesArray.push({row: currentSquare.row + 2*direction, col: currentSquare.col});
            }
        
        return movesArray;
    }
}
