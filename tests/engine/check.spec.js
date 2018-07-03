import 'chai/register-should';
import Board from '../../src/engine/board';
import Player from '../../src/engine/player';
import Square from '../../src/engine/square';
import King from './../../src/engine/pieces/king';
import Pawn from '../../src/engine/pieces/pawn';
import Knight from '../../src/engine/pieces/knight';
import Bishop from '../../src/engine/pieces/bishop';
import Queen from '../../src/engine/pieces/queen';
import Rook from '../../src/engine/pieces/rook';

describe('Check', () => {

    let board;
    beforeEach(() => board = new Board());

    it('King is in check by rook', () => {
        const king = new King(Player.BLACK);
        const opposingRook = new Rook(Player.WHITE);
        
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(4, 6), opposingRook);
        board.movePiece(Square.at(4, 6), Square.at(3, 6));

        const isBoardChecked = board.playerIsInCheck(Player.BLACK);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by queen', () => {
        const king = new King(Player.BLACK);
        const opposingRook = new Queen(Player.WHITE);
        
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(4, 6), opposingRook);
        board.movePiece(Square.at(4, 6), Square.at(3, 6));

        const isBoardChecked = board.playerIsInCheck(Player.BLACK);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by bishop', () => {
        const king = new King(Player.BLACK);
        const opposingRook = new Bishop(Player.WHITE);
        
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(4, 5), opposingRook);
        board.movePiece(Square.at(4, 5), Square.at(5, 6));

        const isBoardChecked = board.playerIsInCheck(Player.BLACK);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by knight', () => {
        const king = new King(Player.BLACK);
        const opposingRook = new Knight(Player.WHITE);
        
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(2, 5), opposingRook);
        board.movePiece(Square.at(2, 5), Square.at(4, 6));

        const isBoardChecked = board.playerIsInCheck(Player.BLACK);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by pawn', () => {
        const king = new King(Player.BLACK);
        const opposingRook = new Pawn(Player.WHITE);
        
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(1, 3), opposingRook);
        board.movePiece(Square.at(1, 3), Square.at(2, 3));

        const isBoardChecked = board.playerIsInCheck(Player.BLACK);
        isBoardChecked.should.be.eql(true);
    });

    it('King is not in check', () => {
        const king = new King(Player.BLACK);
        const opposingRook = new Rook(Player.WHITE);
        
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(4, 6), opposingRook);
        board.movePiece(Square.at(4, 6), Square.at(2, 6));

        const isBoardChecked = board.playerIsInCheck(Player.BLACK);
        isBoardChecked.should.be.eql(false);
    });
});

