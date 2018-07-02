import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        if(this.player === Player.WHITE) {
            movesArray.push({row: currentSquare.row + 1, col: currentSquare.col});
        } else {
            movesArray.push({row: currentSquare.row - 1, col: currentSquare.col});
        }
        return movesArray;
    }
}
