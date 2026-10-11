class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let left = 0
        let sum = 0

        for (let right = 0 ; right < s.length ; right++) {
            const rightVal = s[right]
            while(charSet.has(rightVal)) {
                const leftVal = s[left]
                charSet.delete(leftVal)
                left++
            }
            charSet.add(rightVal)
            sum = Math.max(sum, right - left + 1)
        }

        return sum
    }
}

// 0 1 2 3 4 5 6 7
// a b c a b c b b
//   L 
//       R
