class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const dfs = (row, col) => {
            if (
                row < 0 || row > grid.length - 1 ||
                col < 0 || col > grid[0].length - 1 ||
                grid[row][col] === "#" ||
                grid[row][col] === "0"
            ) return
            
            // mark your step
            grid[row][col] = "#"

            dfs(row + 1, col)
            dfs(row - 1, col)
            dfs(row, col + 1)
            dfs(row, col - 1)

           
        }

        let cnt = 0
        for (let i = 0 ; i < grid.length ; i++) {
            for (let j = 0 ; j < grid[0].length ; j++) {
                if (grid[i][j] === '1') {
                    cnt++
                    dfs(i, j)
                }
            }
        }

        return cnt
    }
}
