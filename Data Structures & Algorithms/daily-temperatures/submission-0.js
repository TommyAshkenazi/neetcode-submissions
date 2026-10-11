class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0)
        for (let i = 0 ; i < temperatures.length ; i++) {
            const curr = temperatures[i]
            for (let j = i + 1 ; j < temperatures.length ; j++) {
                const next = temperatures[j]
                if (curr < next) {
                    res[i] = j - i
                    break
                }
            }
        }

        return res
    }
}

//   0    1.   2.   3.    4   5.   6
// [ 30 , 38 , 30 , 36 , 35 , 40 , 28 ]
//   L
//         R
//  [0.   0.    0.   0.   0.   0.   0]