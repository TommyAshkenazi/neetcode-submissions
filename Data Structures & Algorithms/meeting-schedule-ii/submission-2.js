/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.map(i => i.start).sort((a, b) => a - b);
        const end = intervals.map(i => i.end).sort((a, b) => a - b);

        let res = 0, cnt = 0, s = 0, e = 0
        while (s < intervals.length) {
            if (start[s] < end[e]) {
                s++
                cnt++
            } else {
                e++
                cnt--
            }

            res = Math.max(res, cnt)
        }
        return res
    }
}

// intervals = [(0,40),(5,10),(15,20)]
//   0-----------------40
//      5--10 15--20
//   1  2   1  2   1    0

