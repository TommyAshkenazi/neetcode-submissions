class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let left = 0 , right = heights.length - 1
        while(left < right) {
            let distance = right - left
            let leftVal = heights[left]
            let rightVal = heights[right]
            max = Math.max(max, Math.min(leftVal,rightVal) * distance)

            if (leftVal < rightVal) left++
            else right--
        }

        return max
    }
}

// [1, 7 , 2 , 5 , 4 , 7 , 3 , 6 ]
//     L
//                             R

