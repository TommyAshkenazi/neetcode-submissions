class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length < 2) return nums[0]

        let rob2 = 0 // 2 houses before
        let rob1 = 0 // 1 house before

        for (const num of nums) {
            const max = Math.max(num + rob2, rob1)
            rob2 = rob1 // next iteration - 2 houses before becomes 1 house
            rob1 = max // 1 house hold the max val
        }

        return rob1
    }
}
