class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = nums.length - 1

        for (let i = nums.length - 2 ; i >= 0 ; i--) {
            const jump = i + nums[i]
            if (jump >= goal) {
                goal = i
            }
        }

        return goal === 0
    }
}
