class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // naive solution
        // let max = 0
        // for (let i = prices.length - 1 ; i >= 0 ; i--) {
        //     for (let j = i - 1 ; j >= 0 ; j--) {
        //         max = Math.max(max, prices[i] - prices[j])
        //     }
        // }

        // return max
        let b = 0, s = 1
        let max = 0

        while (b < prices.length){
            const buyPrice = prices[b]
            const sellPrice = prices[s]

            if (buyPrice < sellPrice){
                max = Math.max(max, sellPrice - buyPrice)
            } else {
                b = s
            }
            s++

        }
        return max
    }
}
