class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let [start, end] = newInterval;

        for (let i = 0; i < intervals.length; i++) {
            const [currStart, currEnd] = intervals[i];

            // If the current interval ends before the new interval starts, add it to the result
            if (currEnd < start) {
                result.push(intervals[i]);
            }
            // If the current interval starts after the new interval ends, add the new interval and update
            else if (currStart > end) {
                result.push([start, end]);
                start = currStart
                end = currEnd
            } 
            // if there is an overlap, merge
            else {
                start = Math.min(start, currStart)
                end = Math.max(end, currEnd)
            }
        }
        // push the remain interval
        result.push([start, end]);

        return result 
        
    }
}

// Input: intervals = [[1,2],[3,5],[9,10]], newInterval = [4,7]
//                                     ^
// [[1,2], [3,7], ]