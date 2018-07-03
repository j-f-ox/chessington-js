import Piece from './piece';
import { isMoveValid } from './moves';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.type = "King";
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        for(let i = -1; i < 2; i++) {
            for(let j = -1; j < 2; j++) {
                if(j === 0 && i === 0) {
                    continue;
                }
                let newRow = currentSquare.row + i;
                let newCol = currentSquare.col + j;
                let newPosition = new Square(newRow, newCol);
                isMoveValid(newPosition, board, this.player, movesArray);
            }
        }
        return movesArray;
    }

    isKing() {
        return true;
    }
}
