class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
       this.capacity = capacity
       this.arr = new Array(capacity)
       this.size = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.getSize() === this.capacity) {
            this.resize()
        }
        this.arr[this.size] = n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size === 0) return null
        const res = this.arr[this.size - 1]
        this.arr[this.size - 1] = undefined
        this.size--
        return res
    }

    /**
     * @returns {void}
     */
    resize() {
        const newCap = this.capacity * 2
        const newArr = new Array(newCap)

        for (let i = 0 ; i < this.size ; i++) {
            newArr[i] = this.arr[i]
        }

        this.arr = newArr
        this.capacity = newCap
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
