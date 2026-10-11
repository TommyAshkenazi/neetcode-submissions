class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map ([
            ["}", "{"],
            [")", "("],
            ["]", "["]
        ])
        let stack = []

        for (const c of s) {
            // if it is a opening brucket
            if (!map.has(c)) {
                stack.push(c)
            } else { // closing brucket
                if (map.get(c) !== stack.pop()) {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
