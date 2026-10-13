class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this. minPQ = new MinPriorityQueue()

        for (const n of nums) {
            this.minPQ.enqueue(n)
        }

        while (this.minPQ.size() > k) {
            this.minPQ.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minPQ.enqueue(val)
        while (this.minPQ.size() > this.k) {
            this.minPQ.dequeue()
        }

        return this.minPQ.front()
    }
}
