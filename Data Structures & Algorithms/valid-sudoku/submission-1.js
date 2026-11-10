class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const columns = Array.from({length: 9}, () => Array(9));

        let isValid = true;

        board.forEach((row, rowIndex) => {
            let seen = new Set();
            console.log({row});

            row.forEach((column, columnIndex) => {
                if (seen.has(column)) {
                    isValid = false;
                } else if (column !== '.') {
                    seen.add(column);
                }

                columns[columnIndex][rowIndex] = column;
            });

        });

        columns.forEach((column, columnIndex) => {
            let seen = new Set();
            console.log({column});

            column.forEach((row, rowIndex) => {
                if (seen.has(row)) {
                    isValid = false;
                } else if (row !== '.') {
                    seen.add(row);
                }

                // columns[rowIndex][columnIndex] = column;
            });

        });

        [...Array(9).keys()].forEach((quadrant, quardrantIndex) => {
            const matrix = [[0, 1, 2], [3,4,5], [6,7,8]]

            const cols = matrix[quadrant % 3]
            const rows = matrix[(quadrant - (quadrant % 3))/3];

            const seen = new Set();

            rows.forEach((row) => {
                cols.forEach((col) => {
                    const val = board[row][col];
                    if (seen.has(val)) {
                        isValid = false;
                    } else if (val !== '.') {
                        seen.add(val);
                    }
                })
            });

            console.log({quadrant, cols, rows, seen, isValid})

        });

        console.log({columns})

        return isValid;
    }
}
