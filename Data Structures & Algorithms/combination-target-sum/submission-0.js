class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const sum = [];
        this.dfs(nums, target, 0, sum, res);
        return res;
    }

    dfs(nums, target, i, sum, res) {
        const value = sum.reduce((acc, curr) => acc + curr, 0);
        if (value === target) {
            res.push([...sum]);
            return;
        }
        if (value > target || i >= nums.length) {
            return;
        }

        // Include current number
        sum.push(nums[i]);
        this.dfs(nums, target, i, sum, res); // Continue with the same index for unlimited use
        sum.pop(); // Backtrack

        // Skip current number
        this.dfs(nums, target, i + 1, sum, res);
    }
}
