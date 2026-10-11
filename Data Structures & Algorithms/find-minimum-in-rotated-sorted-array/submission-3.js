class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0, end = nums.length - 1
        while (start < end) {
            const mid = start + Math.floor( (end - start) / 2 )
            if (nums[mid] > nums[end]) { // try to skip on the left half - not relevant
                start = mid + 1
            } else { // the right half is the one you want to search the minimum in
                end = mid
            }
        }

        return nums[start]
    }
}
