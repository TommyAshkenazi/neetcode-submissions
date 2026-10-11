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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length < 1) return true
        const sorted = intervals.sort((a, b) => a.start - b.start)
        let prev = sorted[0]

        for (let i = 1 ; i < sorted.length ; i++) {
            const curr = sorted[i]
            if (prev.end > curr.start) return false
            prev = curr
        }
        return true

    }
}
