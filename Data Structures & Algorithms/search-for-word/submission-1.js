class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const dfs = (row, col, index) => {
            // base case: found the word
            if (index === word.length) return true
            // validate the boundries and check cell
            if (
                row < 0 || row > board.length - 1 ||
                col < 0 || col > board[0].length - 1 ||
                board[row][col] !== word[index]
            ) {
                return false
            }

            const curr = board[row][col]
            // mark the step
            board[row][col] = "#"
            // search for the word recursivly 
            let found = dfs(row + 1, col, index + 1) ||
                        dfs(row - 1, col, index + 1) ||
                        dfs(row, col + 1, index + 1) ||
                        dfs(row, col - 1, index + 1)
            
            board[row][col] = curr

            return found

        }

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
