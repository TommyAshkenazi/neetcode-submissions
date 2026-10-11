class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        for (let i = 0 ; i < matrix.length ; i++) {
            for (let j = 0 ; j < matrix[0].length ; j++) {
                if (matrix[i][j] === "$") continue
                if (matrix[i][j] === 0) {
                    for (let x = 0 ; x < matrix[0].length ; x++) {
                        if (matrix[i][x] !== 0)
                            matrix[i][x] = "$"
                    }
                    for (let y = 0 ; y < matrix.length ; y++) {
                        if (matrix[y][j] !== 0)
                            matrix[y][j] = "$"
                    }
                }
            }
        }

        for (let i = 0 ; i < matrix.length ; i++) {
            for (let j = 0 ; j < matrix[0].length ; j++) {
                if (matrix[i][j] === "$") 
                    matrix[i][j] = 0

            }
        }
    }
}