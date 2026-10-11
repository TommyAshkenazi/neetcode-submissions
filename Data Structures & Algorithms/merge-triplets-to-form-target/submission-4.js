class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let x = false, y = false, z = false
            for (let t of triplets) {
                if (t[0] === target[0] && t[1] <= target[1] && t[2] <= target[2]) {
                    x = true;
                }
                if (t[1] === target[1] && t[0] <= target[0] && t[2] <= target[2]) {
                    y = true;
                }
                if (t[2] === target[2] && t[0] <= target[0] && t[1] <= target[1]) {
                    z = true;
                }
                if (x && y && z) return true

            }
        return false
    }
}
