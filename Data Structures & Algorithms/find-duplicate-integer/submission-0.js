class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0, fast = 0
        // search the meeting point
        while (true) {
            slow = nums[slow]
            fast = nums[nums[fast]]
            if (slow === fast) break
        }
        // start from the beginning
        slow = 0
        while (slow !== fast) {
            slow = nums[slow]
            fast = nums[fast]
        }
        return slow
    }
}
