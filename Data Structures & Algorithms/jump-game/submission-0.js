class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = nums.length - 1 // we want to reach here at first

        for (let i = nums.length - 2 ; i >= 0 ; i--) {
            if (i + nums[i] >= goal) {
                goal = i // set the new goal 
            }
        }

        return goal === 0
    }
}
//                0 1 2 3 4
// Input: nums = [1,2,0,1,0]
