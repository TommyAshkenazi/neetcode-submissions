class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const left = []
        const stars = []
        for (let index = 0 ; index < s.length ; index++) {
            const c = s[index]
            if (c === "(") {
                left.push(index)
            } else if (c === "*") {
                stars.push(index)
            } else {
                if (left.length > 0) {
                    left.pop()
                } else if (stars.length > 0) {
                    stars.pop()
                } else {
                    return false
                }
            }
        }

        while(left.length > 0 && stars.length > 0) {
            if (left.pop() > stars.pop()) return false
        }

        return left.length === 0

    }
}
