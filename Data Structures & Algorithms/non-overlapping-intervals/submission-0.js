class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1])
        let res = 0
        let prevEnd = intervals[0][1]

        for (let i = 1 ; i < intervals.length ; i++) {
            const [currStart, currEnd] = intervals[i]
            if (currStart < prevEnd) res++
            else prevEnd = currEnd
        }

        return res
    }
}
