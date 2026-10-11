class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        candidates.sort()

        const dfs = (idx, path, curr) => {
            if (curr === target) {
                res.push([...path])
                return
            }

            if (idx === candidates.length || curr > target) {
                return
            }

            // include candidate
            path.push(candidates[idx])
            dfs(idx + 1, path, curr + candidates[idx])
            path.pop()
            // skip candidate
            while(idx < candidates.length && candidates[idx] === candidates[idx + 1])
                idx++
            dfs(idx + 1, path, curr)

        }
        dfs(0, [], 0)
        return res
    }
}

// Input: candidates = [9,2,2,4,6,1,5], target = 8
// 
// Output: [
//   [1,2,5],
//   [2,2,4],
//   [2,6]
// ]
