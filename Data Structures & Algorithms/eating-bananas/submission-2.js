class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles)
        let min = 1
        let res = max

        while(min <= max) {
            const mid = min + Math.floor((max - min) / 2)
            const sum = piles.reduce((acc, curr) => acc + Math.ceil(curr/mid) ,0)
            if (sum > h) { // need to increase the range
                min = mid + 1
            } else { // need to decrease the range
                res = mid
                max  = mid - 1
            }
        }

        return res


    }
}
