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
        const king = new King(Player.WHITE);
        const opposingRook = new Rook(Player.BLACK);
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(3, 6), opposingRook);

        const isBoardChecked = board.isUnderAttack(Player.WHITE);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by queen', () => {
        const king = new King(Player.WHITE);
        const opposingRook = new Queen(Player.BLACK);
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(3, 6), opposingRook);

        const isBoardChecked = board.isUnderAttack(Player.WHITE);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by bishop', () => {
        const king = new King(Player.WHITE);
        const opposingRook = new Bishop(Player.BLACK);
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(5, 6), opposingRook);

        const isBoardChecked = board.isUnderAttack(Player.WHITE);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by knight', () => {
        const king = new King(Player.WHITE);
        const opposingRook = new Knight(Player.BLACK);
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(4, 6), opposingRook);

        const isBoardChecked = board.isUnderAttack(Player.WHITE);
        isBoardChecked.should.be.eql(true);
    });

    it('King is in check by pawn', () => {
        const king = new King(Player.WHITE);
        const opposingRook = new Pawn(Player.BLACK);
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(2, 3), opposingRook);

        const isBoardChecked = board.isUnderAttack(Player.WHITE);
        isBoardChecked.should.be.eql(true);
    });

    it('King is not in check', () => {
        const king = new King(Player.WHITE);
        const opposingRook = new Rook(Player.BLACK);
        board.setPiece(Square.at(3, 4), king);
        board.setPiece(Square.at(4, 6), opposingRook);

        const isBoardChecked = board.isUnderAttack(Player.WHITE);
        isBoardChecked.should.be.eql(false);
    });
});

