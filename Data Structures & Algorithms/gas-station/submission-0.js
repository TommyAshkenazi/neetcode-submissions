class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const n = gas.length

        for (let i = 0 ; i < n ; i++) {
            let diff = gas[i] - cost[i]
            if (diff < 0) continue;
            let j = (i + 1) % n
            while (j !== i) {
                diff += gas[j] - cost[j]
                if (diff < 0) break
                j = (j + 1) % n
            }

            if (i === j) return i
        }

        return -1
    }
}
