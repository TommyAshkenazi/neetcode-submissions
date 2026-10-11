class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxPQ = new MaxPriorityQueue(n => n)
        let res = 0
        for (const n of nums) {
            maxPQ.enqueue(n)
        }

        while (k-- > 0) {
            res = maxPQ.dequeue()
        }

        return res
    }
}
