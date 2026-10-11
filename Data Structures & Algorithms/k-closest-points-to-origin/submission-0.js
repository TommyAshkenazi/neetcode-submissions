class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // set the priority according to dist
        const minPQ = new MinPriorityQueue(p => p[0]) 
        const res = []
        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2
            minPQ.enqueue([dist, x, y])
        }

        while (k-- > 0) {
            const [_, x, y] = minPQ.dequeue()
            res.push([x, y])
        }

        return res
    }
}
