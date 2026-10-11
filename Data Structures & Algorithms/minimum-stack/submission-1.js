class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.minStack.push(val)
        } else {
            const min = Math.min(val, this.minStack[this.minStack.length - 1])
            this.minStack.push(min)
        }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        this.stack.pop()
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
