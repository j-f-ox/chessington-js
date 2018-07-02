import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        //let moveArray = [1, -1];
        const stay = 0;
        const goUp = 1;
        const goDown = -1;
        let possibleMoves = [{row:stay, col:goUp}, {row:stay, col:goDown},{row:goUp, col:stay}, {row:goDown, col:stay}];

        for(let i = 0; i < possibleMoves.length; i++) {
            let newRow = currentSquare.row + possibleMoves[i].row;
            let newCol = currentSquare.col + possibleMoves[i].col;
            while(-1 < newRow && newRow < 8 && -1 < newCol && newCol < 8) {
                movesArray.push({row: newRow, col:newCol});
                newRow += possibleMoves[i].row;
                newCol += possibleMoves[i].col;
            } 
        }
        return movesArray;
    }
}
