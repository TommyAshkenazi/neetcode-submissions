class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // define hashmap
        let res = []
        let map = new Map()
        // loop on the nums array entries [index, value]
        for(const [idx, num] of nums.entries()) {
            // check if map has x which x = target - num
            if (map.has(target - num)) {
                let indexFromMap = map.get(target - num)
                res.push(indexFromMap, idx)
                break
            } else {             // add to the map if not
                map.set(num, idx)
            }
        }

        return res.sort()
    }
}
