class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if (!matrix.length || !matrix[0].length) return [];

        const res = []
        let l = 0, t = 0, r = matrix[0].length - 1, b = matrix.length - 1
        while (l <= r && t <= b) {
            // left to right
            for (let i = l ; i <= r ; i++) {
                res.push(matrix[t][i])
            }
            t++;
            // top to bottom
            for (let i = t; i <= b ; i++) {
                res.push(matrix[i][r])
            }
            r--;
            // right to left
            if (t <= b) {
                for (let i = r ; i >= l ; i--) {
                    res.push(matrix[b][i])
                }
                b--;
            }
            if (l <= r) {
                // bottom to top
                for (let i = b; i >= t; i--) {
                    res.push(matrix[i][l])
                }
                l++
            }
        }

        return res
    }
}
