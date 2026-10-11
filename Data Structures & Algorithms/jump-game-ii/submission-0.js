class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let cnt = 0, left = 0, right = 0

        while(right < nums.length - 1) {
            let farest = 0
            for (let i = left ; i <= right ; i++) {
                farest = Math.max(farest, i + nums[i])
            }
            left = right + 1
            right = farest
            cnt++
        }

        return cnt
    }
}

//         0 1 2 3 4 5
// nums = [2,4,1,1,1,1]
//               L
//                       R
