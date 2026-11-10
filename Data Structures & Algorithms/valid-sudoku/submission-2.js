class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        [...Array(9).keys()].forEach((k) => {
            rows.set(k, new Set());
            cols.set(k, new Set());
            // squares.set(k, new Set());
        });

                    // squares.set(k, new Set());


        console.log({
            rows, cols, squares
        })
        

        let isValid = true;

        board.forEach((row, rowIndex) => {
            row.forEach((c, columnIndex) => {
                const value = c === '.' ? '.' : Number(c);

                const squareKey = `${Math.floor(rowIndex / 3)},${Math.floor(columnIndex / 3)}`;
                const squaresCp = squares.set(squareKey, squares.get(squareKey) || new Set());
                console.log( { rowIndex, columnIndex, value, squareKey, row: rows.get(rowIndex), column: cols.get(columnIndex)})

                if (rows.get(rowIndex).has(value) || cols.get(columnIndex).has(value) || squares.get(squareKey).has(value)) {
                    isValid = false;
                } else if (value !== '.') {
                    rows.set(rowIndex, rows.get(rowIndex).add(value));
                    cols.set(columnIndex, cols.get(columnIndex).add(value));
                    squares.set(squareKey, squares.get(squareKey).add(value));
                }
            });
        });

        return isValid;
    }
}
