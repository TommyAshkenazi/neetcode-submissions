class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let max = 0

        for (const num of set) {
            // check if num is the first
            if (!set.has(num - 1)) {
                let currNum = num
                let currMax = 1

                while(set.has(currNum + 1)) {
                    currMax++;
                    currNum++;
                }

                max = Math.max(max, currMax)

            }

        }

        return max
    }
}
