class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles); // Maximum speed is the largest pile size
        let min = 1; // Minimum speed is 1
        let res = max;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2); // Middle point
            const sum = piles.reduce((acc, curr) => acc + Math.ceil(curr / mid), 0); // Calculate hours required

            if (sum > h) {
                // Need a faster speed
                min = mid + 1;
            } else {
                // Valid speed, but try to find a smaller one
                res = mid;
                max = mid - 1;
            }
        }

        return res;
    }
}
