class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // naive solution
        let max = 0
        for (let i = prices.length - 1 ; i >= 0 ; i--) {
            for (let j = i - 1 ; j >= 0 ; j--) {
                max = Math.max(max, prices[i] - prices[j])
            }
        }

        return max
    }
}
