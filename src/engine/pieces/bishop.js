import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let movesArray = [];
        //let moveArray = [1, -1];
        for (let i=-1; i<2; i+=2) { //i = -1, 1
            for (let j=-1; j<2; j+=2) {
                
                let newRow = currentSquare.row + i;
                let newCol = currentSquare.col + j;

                while(-1 < newRow && newRow < 8 && -1 < newCol && newCol < 8) {
                    movesArray.push({row: newRow, col:newCol});
                    newRow += i;
                    newCol += j;
                }
            }
        }
        return movesArray;
    }
}
