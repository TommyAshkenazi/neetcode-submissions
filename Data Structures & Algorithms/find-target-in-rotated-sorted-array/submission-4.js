class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums[0] === target) return 0
        let start = 0, end = nums.length - 1
        while (start <= end) {
            const mid = start + Math.floor ( ( end - start) / 2 )
            if (nums[mid] === target) return mid
            
            // left sorted porsion
            if (nums[start] <= nums[mid]) {
                if (target < nums[start] || target > nums[mid]) {
                    start = mid + 1
                } else {
                    end = mid - 1
                }
            // right sorted porsion
            } else {
                if (target < nums[mid] || target > nums[end]) {
                    end = mid -1
                } else {
                    start = mid + 1
                }
            }
        }

        return -1
    }
}

//   0.  1.  2.  3.  4.  5
// [ 3 , 4 , 5 , 6 , 1 , 2 ]  t = 6
//   _____________   ------
//   S
//           M
//                        E   
