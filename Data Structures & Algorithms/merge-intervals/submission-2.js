class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // if the intervals length is 1 return it
        if (intervals.length < 2) return intervals
        const sorted = intervals.sort((a, b) => a[0] - b[0])
        const res = []
        let [start, end] = sorted[0]

        for (let i = 1 ; i < sorted.length ; i++) {
            let [currStart, currEnd] = sorted[i]

            // if the interval ends before the current start, insert and overreide it
            if (end < currStart) {
                res.push([start, end])
                start = currStart
                end = currEnd
            }
            // else end >= currStart
            else {
                start = Math.min(start, currStart)
                end = Math.max(end, currEnd)
            }
            // if the interval start after the curr ends insert and overreide it
            
            // if overlap take the min start and the max ends and save to the next iteration

        }
        // define extract the values from the first element to compare
        // loop on the input and compare

        // return the res
        res.push([start, end])
        return res

    }
}
// intervals=[[1,4],[0,0]] -> [[0,0], [1,4]]


// Input: intervals = [[1,2],[3,4]]

// Output: [[1,3]]

// Input: intervals = [[1,3],[1,5],[6,7]]

// Output: [[1,5],[6,7]]
