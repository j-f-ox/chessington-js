import Piece from './piece';
import Player from '../player';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        const oneUp = 1;
        const oneDown = -1;
        const twoUp = 2;
        const twoDown = -2;
        let enemyColor = this.player === Player.WHITE ? Player.BLACK : Player.WHITE;
        let possibleMoves = [
            {row: oneUp, col: twoDown}, {row: oneUp, col: twoUp}, {row: oneDown, col: twoDown}, {row: oneDown, col: twoUp},
            {row: twoUp, col: oneUp}, {row: twoUp, col: oneDown}, {row: twoDown, col: oneUp}, {row: twoDown, col: oneDown}
        ];
        for (let i=0; i<possibleMoves.length; i++){
            let newRow = currentSquare.row + possibleMoves[i].row;
            let newCol = currentSquare.col + possibleMoves[i].col;
            let newPosition = {row: newRow, col: newCol};
            if (board.isOnBoard(newPosition)) {
                if (!board.isSquareEmpty(newPosition)) {
                    let otherPiece = board.getPiece(newPosition);
                    if (otherPiece.player === enemyColor
                            && !otherPiece.isKing()) {
                            movesArray.push(newPosition);
                    }
                    break;
                }
                movesArray.push(newPosition);
            }
            
        }
        return movesArray;
    }
}
