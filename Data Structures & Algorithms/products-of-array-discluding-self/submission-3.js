class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const pre = new Array(n).fill(1);
        const post = new Array(n).fill(1);
        const res = new Array(n).fill(1)

        for (let i = 1; i < n; i++) {
            pre[i] = pre[i - 1] * nums[i - 1];
        }

        for (let i = n - 2 ; i >= 0 ; i--) {
            post[i] = post[i + 1] * nums[i + 1]
        }

        for (let i = 0 ; i < n ; i++) {
            res[i] = pre[i] * post[i]
        }

        return res
    }
}
