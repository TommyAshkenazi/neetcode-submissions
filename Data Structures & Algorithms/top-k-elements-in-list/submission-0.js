class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map() // {number, count}
        // loop on nums array
        for(const num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }
        // make a array from the map.entries() and sort it according to the values
        const sortedEntries = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
        const topKKeys = sortedEntries.slice(0,k).map(entry => entry[0])

        return topKKeys

        // check for every val if its in map or not
        // if in then update the count
        // else add for the first time
        // slice the k keys in map that are the most frequest
    }
}
