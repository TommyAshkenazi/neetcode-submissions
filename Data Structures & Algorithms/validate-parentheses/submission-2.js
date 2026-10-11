class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map([
            ["}", "{"],
            [")", "("],
            ["]", "["]
        ])

        const stack = []

        for (let c of s) {
            // if the map doesnt has the char that means its a opening bruket
            if (!map.has(c)) {
                // if its an opennig brucket that means that in the future we need to pop it against a closing one
                stack.push(c)
            } else {
                // a closing bruket
                if (map.get(c) !== stack.pop()) return false
            }
        }

        return stack.length == 0
    }
}
