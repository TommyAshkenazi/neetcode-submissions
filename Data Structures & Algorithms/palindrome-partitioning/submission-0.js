class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const part = []

        const isPali = (start, end) => {
            while(start < end) {
                if (s[start] !== s[end]) return false
                start++
                end--
            }
            return true
        }

        const dfs = (i) => {
            // base case: reached the end of the input
            if (i === s.length) {
                res.push([...part])
                return
            }

            for (let j = i ; j < s.length ; j++) {
                if(isPali(i, j)) {
                    // push the current pali
                    part.push(s.substring(i, j + 1))
                    dfs(j + 1)
                    // pop the current pali
                    part.pop()
                }
            }
        }

        dfs(0)
        return res
    }
}
