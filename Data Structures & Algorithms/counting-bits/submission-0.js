class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = []
        const mask = 1
        for (let i = 0 ; i <= n ; i++) {
            let cnt = 0
            let currNum = i
            while (currNum > 0) {
                if ((currNum & mask) === 1) {
                    cnt++
                }
                currNum = currNum >>> 1
            }
            res.push(cnt)
        }

        return res
    }
}
