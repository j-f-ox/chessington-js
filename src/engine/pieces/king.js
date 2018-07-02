import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let moveArray = [];
        for(let i = -1; i < 2; i++) {
            for(let j = -1; j < 2; j++) {
                if(j === 0 && i === 0) {
                    continue;
                }
                let newRow = currentSquare.row + i;
                let newCol = currentSquare.col + j;
                let newPosition = {row:newRow, col:newCol};
                if (board.isOnBoard(newPosition)) {
                    moveArray.push(newPosition);
                } 
            }
        }
        return moveArray;
    }
}
