class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const pre = new Array(n)
        const post = new Array(n)
        const output = new Array(n)

        pre[0] = 1
        post[n - 1] = 1
        for (let i = 1 ; i < n ; i++) {
            pre[i] = nums[i-1] * pre[i-1] 
        }

        for (let i = n - 2 ; i >= 0 ; i--) {
            post[i] = nums[i+1] * post[i+1]
        }

        for (let i = 0 ; i < n ; i++) {
            output[i] = pre[i] * post[i]
        }

        return output
    }
}
//      [ 1 , 2 , 4 , 6 ]
// pre  [1, 1, 2, 8]
// post [48 ,24,6,1]
// out  [48, 24, 12, 8]
