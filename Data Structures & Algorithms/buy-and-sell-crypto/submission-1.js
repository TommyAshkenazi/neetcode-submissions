class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // define 2 pointer B - Buy and S - Sell
        let b = 0, s = b + 1
        let max = 0

        while(b < prices.length) {
            const buyPrice = prices[b]
            const sellPrice = prices[s]
            if (buyPrice < sellPrice) {
                max = Math.max(max, sellPrice - buyPrice) 
                s++
            } else {
                b = s
                s++
            }
        }

        return max
        // define max val
        // loop on the prices and according to Buy value and Sell value look for the max val
    }
}

// [ 7, 1, 5, 3, 6, 4]
//   B
//            S