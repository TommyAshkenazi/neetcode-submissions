class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0)
        const stack = [] // pair: [temp, index]

        for (let i = 0 ; i < temperatures.length ; i++) {
            const t = temperatures[i]
            while(stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop()
                res[stackInd] = i - stackInd
            }
            stack.push([t, i])

        }

        

        return res
    }
}

//   0    1.   2.   3.    4   5.   6
// [ 30 , 38 , 30 , 30 , 35 , 40 , 28 ]
//        i
//  [0.   0.    0.   0.   0.   0.   0]

