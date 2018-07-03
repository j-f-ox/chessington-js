import Player from '../player';

let id = 0;
export default class Piece {
    constructor(player) {
        this.player = player;
        this.type = "noType";
        this.id = id++;
    }
    // 
    getLegalMoves(board) { //availableMoves is an array of theoretically possible rules from piece.getAvailableMoves
        let enemyColor = this.player === Player.WHITE ? Player.BLACK : Player.WHITE;
        let validMoves = [];
        let availableMoves = this.getAvailableMoves(board);

        for(let i=0; i<availableMoves.length; i++) {
            let newSquare = availableMoves[i];
            let oldSquare = board.findPiece(this);
            let oldPiece = board.getPiece(newSquare);

            board.setPiece(newSquare, this);
            board.setPiece(oldSquare, undefined);
            board.verifyCheckStateAfterMovingPiece(enemyColor);

            if(board.playerInCheck !== this.player) {
                validMoves.push(newSquare);
            }
            
            board.playerInCheck = null;
            board.setPiece(newSquare, oldPiece);
            board.setPiece(oldSquare, this);
        }

        return validMoves;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    isKing() {
        return false;
    }

    equals(piece) {
        return this.player === piece.player && this.type === piece.type && this.id === piece.id;
    }

}
