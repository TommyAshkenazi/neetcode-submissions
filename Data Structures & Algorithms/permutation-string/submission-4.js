class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false
        const windowLength = s1.length
        const sortedS1 = s1.split('').sort().join('')

        for(let i = 0 ; i + windowLength <= s2.length ; i++) {
            const currSortedStr2 = s2.substring(i, i + windowLength).split('').sort().join('')
            if(sortedS1 === currSortedStr2) {
                return true
            }
        }

        return false
    }
}
//     0 1 2 3
// s1="a d c"
// s2="d c d a"
