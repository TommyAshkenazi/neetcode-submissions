class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map()
        const res = []
        let size = 0, end = 0
        for (let i = 0 ; i < S.length ; i++) {
            map.set(S[i], i)
        }

        for (let i = 0 ; i < S.length ; i++) {
            const curr = S[i]
            size++
            end = Math.max(map.get(curr), end) 

            if (i === end) {
                res.push(size)
                size = 0
            }
        }

        return res
    }
}

// Input: s = "xyxxyzbzbbisl"
//              L
//                 R


