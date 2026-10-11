class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const dfs = (row, col) => {
            if (
                row < 0 || row > grid.length - 1 ||
                col < 0 || col > grid[0].length - 1 ||
                grid[row][col] === 0 ||
                grid[row][col] === -1
            ) return 0

            // mark current step
            grid[row][col] = -1
            
            return 1 +
            dfs(row + 1, col) + 
            dfs(row - 1, col) + 
            dfs(row, col + 1) +  
            dfs(row, col - 1)
        }
        
        let res = 0
        for (let i = 0 ; i < grid.length ; i++) {
            for (let j = 0 ; j < grid[0].length ; j++) {
                if (grid[i][j] === 1) {
                    res = Math.max(dfs(i, j), res)
                }
            }
        }

        return res
    }
}
