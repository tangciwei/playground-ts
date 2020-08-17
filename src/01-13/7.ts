function solveSudoku(board) {
    let isValid = (row, col, num) => {
        for (let i = 0; i < 9; i++) {
            let boxRow = parseInt(row / 3) * 3;
            let boxCol = parseInt(col / 3) * 3;
            if (
                board[row][i] == num ||
                board[i][col] == num ||
                board[boxRow + parseInt(i / 3)][boxCol + (i % 3)] == num
            ) {
                return false;
            }
        }
        return true;
    };
    let solve = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == ".") {
                    for (let num = 1; num < 10; num++) {
                        if (isValid(i, j, num)) {
                            board[i][j] = String(num);
                            if (solve(board)) {
                                return true;
                            }
                            board[i][j] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };
    solve(board);
    console.log(board);
    return board;
}

solveSudoku([
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
]);
