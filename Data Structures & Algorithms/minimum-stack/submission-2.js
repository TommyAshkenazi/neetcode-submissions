class MinStack {
    constructor() {
        this.minStack = []
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length == 0) {
            this.minStack.push(val)
        } else {
            const lastMin = this.minStack[this.minStack.length - 1]
            const min = Math.min(val, lastMin)
            this.minStack.push(min)
        }

        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
