class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.set(key, [...this.keyStore.get(key), [value, timestamp]])
        } else {
            this.keyStore.set(key, [[value, timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) {
            return ""
        }

        const arr = this.keyStore.get(key) // [value, timestamp]
        let start = 0, end = arr.length - 1, result = ''
        while(start <= end) {
            const mid = start + Math.floor( (end - start) / 2 )
            if (arr[mid][1] <= timestamp) {
                result = arr[mid][0]
                start = mid + 1
            } else {
                end = mid - 1
            }
        }

        return result
    }
}
