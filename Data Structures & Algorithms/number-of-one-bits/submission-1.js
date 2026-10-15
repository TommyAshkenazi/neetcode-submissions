class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        // n = 3
        // n = 11
        //      
        let cnt = 0
        const mask = 1
        while (n > 0) {
            // we are going to & each bit with our mask and count the number of 1's
            if ((n & mask) === 1) {
                cnt++
            }
            n = n >>> 1
        }

        return cnt
    }
}
