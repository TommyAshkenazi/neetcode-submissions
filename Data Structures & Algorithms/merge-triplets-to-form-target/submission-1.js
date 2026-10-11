class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const cand = new Set()

        for (const t of triplets) {
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                continue
            }
            for (let i = 0 ; i < t.length ; i++) {
                if (t[i] === target[i]) {
                    cand.add(i)
                }
            }
            
        }
        return cand.size === 3
    }
}
//  Input: triplets = [[1,2,3],[7,1,1]], target = [7,2,3]


