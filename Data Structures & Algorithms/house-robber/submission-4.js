class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // need to create the dp array
        // need to create the base case which is the first 2 (if only 1 return it)
        if (nums.length <= 1) return nums[0];
        const dp = new Array().fill(0);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            const curr = nums[i];
            // we want ti insert to dp[i] the max option between the curr + dp[i -2] or dp[i-1]
            dp[i] = Math.max(curr + dp[i - 2], dp[i - 1]);
        }
        return dp[dp.length - 1];
    }
}
