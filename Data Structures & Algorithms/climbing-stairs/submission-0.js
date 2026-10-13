class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 2) return n

        // n= 5
        //  5. 4. 3. 2. 1. 0
        // [1, 1, 2, 3, 0 , 0]

        const dp = new Array(n + 1).fill(0)

        dp[n] = 1
        dp[n-1] = 1

        for (let i = n-2 ; i >=0 ; i--) {
            dp[i] = dp[i + 1] + dp[i + 2]
        }

        return dp[0]

    }
}
