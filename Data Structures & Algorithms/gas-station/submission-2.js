class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const sumGas = gas.reduce((acc, val) => acc + val, 0)
        const sumCost = cost.reduce((acc, val) => acc + val, 0)
        if (sumGas < sumCost) return -1

        // we know that there is a solution exists
        let sum = 0
        let res = 0
        for (let i = 0 ; i < gas.length ; i++) {
            sum += gas[i] - cost[i]

            if (sum < 0) {
                sum = 0
                res = i + 1
            }
        }

        return res
    }
}
