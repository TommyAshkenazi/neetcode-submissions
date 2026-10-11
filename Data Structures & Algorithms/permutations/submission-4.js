class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        const dfs = (path, remaining) => {
            // Base case: if no more numbers remain, add the path to results
            if (remaining.length === 0) {
                res.push([...path]);
                return;
            }

            // Iterate through the remaining numbers
            for (let i = 0; i < remaining.length; i++) {
                // Choose a number
                const nextPath = [...path, remaining[i]];
                const nextRemaining = remaining.filter((_, idx) => idx !== i);
                // Explore further
                dfs(nextPath, nextRemaining);
            }
        };

        // Start DFS with an empty path and all numbers in `nums`
        dfs([], nums);

        return res;
    }
}