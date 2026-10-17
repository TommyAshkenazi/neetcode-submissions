class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let max = 0

        for (let num of set) {
            //  check if the num is the first in the curr sequence
            if (!set.has(num - 1)) {
                let currNum = num
                let currMax = 1

                while(set.has(currNum + 1)) {
                    currNum++
                    currMax++
                }

                max = Math.max(currMax, max)
            }
        }

        return max
    }
}
