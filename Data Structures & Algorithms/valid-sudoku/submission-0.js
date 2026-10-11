class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0 ; row < board.length ; row++) {
            let seen = new Set()
            for (let i = 0 ; i < board[0].length ; i++) {
                let curr = board[row][i]
                if (curr === '.') continue
                if (seen.has(curr)) return false
                else (seen.add(curr))
            }
        }

        for (let col = 0 ; col < board[0].length ; col++) {
            let seen = new Set()
            for (let i = 0 ; i < board.length ; i++) {
                let curr = board[i][col]
                if (curr === '.') continue
                if (seen.has(curr)) return false
                else (seen.add(curr))
            }
        }

        for (let square = 0 ; square < 9 ; square++) {
            let seen = new Set()
            for (let i = 0 ; i < 3 ; i++) {
                for (let j = 0 ; j < 3 ; j++) {
                    const row = Math.floor(square / 3) * 3 + i;
                    const col = (square % 3) * 3 + j;
                    const curr = board[row][col]
                    if (curr === '.') continue
                    if (seen.has(curr)) return false
                    else (seen.add(curr))
                }
            }
        }

        return true
    }
}
