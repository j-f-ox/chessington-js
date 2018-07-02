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
        if(this.player === Player.WHITE) {
            movesArray.push({row: currentSquare.row + 1, col: currentSquare.col});
            if(currentSquare.row === 1) {
                movesArray.push({row: currentSquare.row + 2, col: currentSquare.col});
            }
        } else {
            movesArray.push({row: currentSquare.row - 1, col: currentSquare.col});
            if(currentSquare.row === GameSettings.BOARD_SIZE - 2) {
                movesArray.push({row: currentSquare.row - 2, col: currentSquare.col});
            }
        }
        return movesArray;
    }
}
