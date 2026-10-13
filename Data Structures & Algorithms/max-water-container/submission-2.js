class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // need to start from the edges cause we want to maximize the width of the area
        let l = 0, r = heights.length - 1, max = 0
        while(l < r) {
            const width = r - l
            // the area is the min of left and right times the width
            const leftH = heights[l]
            const rightH = heights[r]
            const area = width * Math.min(leftH, rightH)
            max = Math.max(max, area)

            if (leftH < rightH) {
                l++
            } else {
                r--
            }
        }

        return max
    }
}
