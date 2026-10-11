class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        for (let i = 0 ; i < heights.length ; i++) {
            for (let j = i + 1 ; j < heights.length ; j++) {
                let left = heights[i]
                let right = heights[j]
                max = Math.max(max, Math.min(left,right) * Math.abs(i - j))
            }
        }

        return max
    }
}
// first max 

//  0  1   2   3   4   5   6.  7
// [1, 7 , 2 , 5 , 4 , 7 , 3 , 6 ]
//  


//  6  42  10  20. 16. 35. 18. 42
//              r

// 
// max = Math.max(max, Math.min(heights[l],heights[r]) * Math.abs(r - l))

