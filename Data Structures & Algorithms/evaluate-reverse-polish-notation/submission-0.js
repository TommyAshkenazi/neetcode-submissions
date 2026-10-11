class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let operations = {
            "+": (val1, val2) => val1 + val2,
            "-": (val1, val2) => val1 - val2,
            "*": (val1, val2) => val1 * val2,
            "/": (val1, val2) => Math.trunc(val1 / val2)
        }

        for (const token of tokens) {
            if(operations[token]) {
                const b = stack.pop()
                const a = stack.pop()

                stack.push(operations[token](a, b))
            } else {
                stack.push(parseInt(token))
            }
        }

        return stack[0]
    }
}
