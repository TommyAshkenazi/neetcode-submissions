class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false
        const windowLength = s1.length;
        let s1Freq = Array(26).fill(0)
        let windowFreq = Array(26).fill(0)

        const charToIndex = (char) => {
            return char.charCodeAt(0) - 'a'.charCodeAt(0)
        }

        const arraysAreEquals = (arr1, arr2) => {
            for(let i = 0 ; i < 26 ; i++) {
                if(arr1[i] !== arr2[i]) {
                    return false
                }
            }
            return true
        }

        for(const c of s1) {
            s1Freq[charToIndex(c)]++
        }

        for (let i = 0; i < windowLength ; i++) {
            windowFreq[charToIndex(s2[i])]++
        }

        // Sliding the window
        for (let i = 0 ; i + windowLength <= s2.length ; i++) {
            if (arraysAreEquals(s1Freq, windowFreq)) return true

            if (i < s2.length - windowLength) {
                // close one to the left
                windowFreq[charToIndex(s2[i])]--
                // open one to th right
                windowFreq[charToIndex(s2[i + windowLength])]++
            }

        }

        return false
    }
}
