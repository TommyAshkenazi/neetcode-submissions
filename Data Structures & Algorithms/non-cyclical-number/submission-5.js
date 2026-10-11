class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    
    isHappy(n) {
        // like finding a cycle in a linked list
        let slow = n
        let fast = this.findSquare(n)

        
        while (slow !== fast) {
            slow = this.findSquare(slow)
            fast = this.findSquare(fast)
            fast = this.findSquare(fast)
        }

        return slow === 1
    }

    findSquare(val) {
        let output = 0
        while (val !== 0) {
            output += (val % 10) ** 2
            val = Math.floor(val / 10)
        }

        return output
    }
}
