class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const n = hand.length
        if (n % groupSize !== 0) return false
        const map = new Map()
        const minPQ = new MinPriorityQueue()
        hand.forEach(h => {
            const cnt = map.get(h) || 0
            map.set(h, cnt + 1)
            if (cnt === 0)
                minPQ.enqueue(h)
        })

        while(!minPQ.isEmpty()) {
            const min = minPQ.front()
            for (let i = 0 ; i < groupSize ; i++) {
                const curr = min + i
                if (map.has(curr)) {
                    const cntCurr = map.get(curr)
                    if (cntCurr === 1) {
                        map.delete(curr)
                        minPQ.dequeue()
                    } else {
                        map.set(curr, cntCurr - 1)
                    }
                } else {
                    return false
                }
            }
        }
        return true
    }
}

// Input: hand = [1,2,4,2,3,5,3,4], groupSize = 4
// {
//      1:X
//      2:X
//      3:X
//      4:1
//      5:1
// }

