class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0, end = nums.length - 1
        while(start <= end) {
            const mid = Math.floor( (end + start) / 2)
            if (nums[mid] > target) end--
            else if (nums[mid] < target) start++
            else return mid
        }

        return -1
    }
}
