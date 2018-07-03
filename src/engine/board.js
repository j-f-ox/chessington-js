import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
        this.playerInCheck = null;
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (!!this.board[row][col] && this.board[row][col].equals(pieceToFind)) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }
    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        if(!movingPiece){
            throw new Error('The supplied square is empty.');
        }
        if(movingPiece.player !== this.currentPlayer){
            throw new Error('Tried to move an opponent\'s piece.');
        }

        this.setPiece(toSquare, movingPiece);
        this.setPiece(fromSquare, undefined);
        this.verifyCheckStateAfterMovingPiece(this.currentPlayer);
        this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
    }

    isSquareEmpty(square) { //check whether the given square is empty
        return typeof(this.getPiece(square)) === 'undefined';
    }

    isOnBoard(square) { //return true if square is on the board, false otherwise
        return (0<=square.row && square.row<=7 && 0<=square.col && square.col<=7);
    }

    playerIsInCheck(player) { //return true if pieces on square are under attack by enemy pieces
        return !!this.playerInCheck && this.playerInCheck === player;
    }

    verifyCheckStateAfterMovingPiece(player) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (!!this.board[row][col] 
                    && this.board[row][col].player === player) {
                    this.board[row][col].getAvailableMoves(this);
                }
            }
        }
    }

}
