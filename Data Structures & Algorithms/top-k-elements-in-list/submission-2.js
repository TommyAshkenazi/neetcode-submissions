class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create a result array with size k that will hold the result
        const res = [];
        //  create a count array that will hold the number of accurences of each item
        const count = Array.from({length: nums.length + 1}, () => [])
        // a hash map that will hold the number of accurences each number have
        const map = new Map();

        //  insert the values into the map
        for (let n of nums) {
            if (map.has(n)) {
                map.set(n, map.get(n) + 1);
            } else {
                map.set(n, 1);
            }
        }

        // count will hold the the number of accures representing the index
        map.forEach((value, key) => {
            count[value].push(key);
        });

        for (let i = count.length - 1; i >= 0; i--) {
            for (let num of count[i]) {
                res.push(num)
            }

            if (res.length === k) return res
        }

        return res;
    }
}
