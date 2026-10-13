class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        // A function that break the number into digits, power then by 2 aand sum them
        const powerAndSum = (val) => {
            let output = 0
            while (val > 0) {
                output += (val % 10) ** 2
                val = Math.floor(val/10)
            }

            return output
        }

        // use the 2 pointers method to indicate loop
        // fast and slow pointers

        let slow = n
        let fast = powerAndSum(n)
        // while the slow and fast are different
        while(fast !== slow) {
            slow = powerAndSum(slow)
            fast = powerAndSum(fast)
            fast = powerAndSum(fast)
        }

        return slow === 1


    }
}
