class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const map = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        }
        if (digits.length === 0) return []
        let res = ['']
        for (const d of digits) {
            const letters = map[d]
            const temp = []
            for (const comb of res) {
                for (const l of letters) {
                    temp.push(comb + l)
                }
            }
            res = temp

        }

        return res
    }
}

// Input: digits = "345"
//                  i
//                   j
// 
