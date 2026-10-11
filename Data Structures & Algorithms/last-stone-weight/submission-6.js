class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxPQ = new MaxPriorityQueue();

        for (const stone of stones) {
            maxPQ.enqueue(stone)
        }

        while(maxPQ.size() > 1) {
            const first = maxPQ.dequeue()
            const second = maxPQ.dequeue()

            if (first !== second) {
                maxPQ.enqueue(first - second)
            }

        }

        return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
    }
}
