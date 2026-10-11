class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let sum = 1
        if (n >= 0) {
            while (n > 0) {
                sum *= x
                n--
            }
        } else {
            while (n < 0) {
                sum *= (1/x)
                n++
            }
        }
        
        return sum
    }
}
