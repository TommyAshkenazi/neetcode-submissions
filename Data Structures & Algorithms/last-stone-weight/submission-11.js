class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        //          (6)
        //          / \
        //        (4)  (3)
//                / \
//              (2) (2)

        const maxPQ = new MaxPriorityQueue()

        for (const s of stones) {
            maxPQ.enqueue(s)
        }

        while (maxPQ.size() > 1) {
            const first = maxPQ.dequeue()
            const second = maxPQ.dequeue()

            const result = first - second
            maxPQ.enqueue(result)
        }

        return maxPQ.dequeue()
    }
}
