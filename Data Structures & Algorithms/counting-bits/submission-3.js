// class Solution {
//     /**
//      * @param {number} n
//      * @return {number[]}
//      */
//     countBits(n) {
//         // time complex: O(nlogn) we can do better :)
//         const res = [];
//         const mask = 1;
//         for (let i = 0; i <= n; i++) {
//             let cnt = 0;
//             let currNum = i;
//             while (currNum > 0) {
//                 if ((currNum & mask) === 1) {
//                     cnt++;
//                 }
//                 currNum = currNum >>> 1;
//             }
//             res.push(cnt);
//         }

//         return res;

//     }
// }

class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const dp = new Array(n).fill(0);
        dp[0] = 0;

        for (let i = 1; i <= n; i++) {
            // odd case
            if ((i & 1) == 1) {
                dp[i] = 1 + dp[i - 1];
            } else {
                // even case
                dp[i] = dp[i >>> 1];
            }
        }

        return dp;
    }
}
