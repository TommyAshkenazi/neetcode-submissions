class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const dp = new Array(cost.length).fill(0);
        dp[0] = cost[0];
        dp[1] = cost[1];

        for (let i = 2; i < cost.length; i++) {
            // needs to ask what is the minimum cost to step on each step
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }

        return Math.min(dp[dp.length - 1], dp[dp.length - 2])
    }
}
