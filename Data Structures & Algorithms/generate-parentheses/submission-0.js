class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backtruck(openN, closeN, n, res, stack) {
        if (openN === closeN && openN === n) {
            res.push(stack)
            return
        }

        if (openN < n) {
            this.backtruck(openN + 1, closeN, n, res, stack + "(")
        }

        if (closeN < openN) {
            this.backtruck(openN, closeN + 1, n, res, stack + ")")
        }
    }

    generateParenthesis(n) {
        const res = []
        this.backtruck(0, 0, n, res, "")
        return res
    }
}

// n = 3
// ((())), (()()), (())(), ()(()), ()()()
