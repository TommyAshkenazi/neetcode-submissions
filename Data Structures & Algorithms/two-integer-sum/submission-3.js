class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // time complexity -> O(n^2)
        // space complexity -> O(1)
        // for(let i = 0 ; i < nums.length ; i++) {
        //     for (let j = i + 1 ; j < nums.length ; j++) {
        //         const iVal = nums[i]
        //         const jVal = nums[j]
        //         if (iVal + jVal == target) return [i , j]
        //     }
        // }


        // time com -> O(n)
        // space com -> O(n)
        const map = new Map()
        map.set(nums[0], 0)
        for(let i = 1 ; i < nums.length ; i++) {
            const val = nums[i]
            const diff  = target - val
            if(map.has(diff)) return [map.get(diff), i] 
            map.set(val, i)
        }


        
    }
}
