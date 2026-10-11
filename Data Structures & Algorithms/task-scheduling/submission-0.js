class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // define the count array
        const count = new Array(26).fill(0) //O(n)
        for (const task of tasks) { // O(n)
            // tasks = ["A", "A", "B", "C"] for example
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++
        }
        // define the maxHeap
        const maxHeap = new MaxPriorityQueue()
        for (const c of count) { //O(n)
            if (c > 0) maxHeap.enqueue(c)
        }
        // define the queue
        const q = new Queue()
        let time = 0
        // loop on heap & queue and schedule the tasks according to the problem logic
        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const cnt = maxHeap.pop() - 1
                if (cnt > 0) {
                    q.push([cnt, time + n]) // [count of the task, time the task will be available]
                }
            }

            if (q.size() > 0) {
                const [val, timeAvalible] = q.front()
                if (timeAvalible === time) {
                    maxHeap.push(val)
                    q.pop()
                }
            }
        }

        return time
    }
}
