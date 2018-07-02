function linearMoves(currentSquare) {
    let movesArray = [];
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

function diagonalMoves(currentSquare) {
    let movesArray = [];
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

export { linearMoves };
export { diagonalMoves };