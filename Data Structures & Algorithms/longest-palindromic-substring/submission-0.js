class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0;
        let resLen = 0;

        for (let i = 0; i < s.length; i++) {
            // Odd case 
            // s = "a b a b d"
            //      l
            //      r
            let l = i;
            let r = i;
            // while we found a palindrom
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                // if the found the longest
                if (r - l + 1 > resLen) {
                    resLen = r - l + 1
                    resIdx = l
                }
                l--
                r++
            }

            // Even case
            // s = "a b a b d"
            //      l
            //        r
            l = i
            r = i + 1
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                // if the found the longest
                if (r - l + 1 > resLen) {
                    resLen = r - l + 1
                    resIdx = l
                }
                l--
                r++
            }
        }

        return s.substr(resIdx, resLen)
    }
}
