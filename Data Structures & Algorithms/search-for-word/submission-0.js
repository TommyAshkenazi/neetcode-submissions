class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const dfs = (row, col, index) => {
            // Base case: all characters in the word are matched
            if (index === word.length) return true;

            // Check boundaries and current cell
            if (
                row < 0 || row >= board.length || 
                col < 0 || col >= board[0].length || 
                board[row][col] !== word[index]
            ) {
                return false;
            }

            // Temporarily mark the cell as visited
            const temp = board[row][col];
            board[row][col] = "#";

            // Explore all 4 directions
            const found =
                dfs(row, col + 1, index + 1) ||
                dfs(row, col - 1, index + 1) ||
                dfs(row - 1, col, index + 1) ||
                dfs(row + 1, col, index + 1);

            // Restore the cell for backtracking
            board[row][col] = temp;

            return found;
        };

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === word[0]) {
                    if (dfs(i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
