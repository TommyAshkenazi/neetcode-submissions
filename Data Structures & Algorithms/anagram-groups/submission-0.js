class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // define the result array and map
        let res = []
        let map = new Map()
        // loop on the strs array
        for (const [idx, str] of strs.entries()) {
            // sort each str
            const sortedStr = str.split('').sort().join('')
            if(map.has(sortedStr)) {
                // check if sorted str is a key in map
                map.set(sortedStr, [...map.get(sortedStr), strs[idx]])
            } else {
                map.set(sortedStr, [strs[idx]])
            }
        }
        // if key in map update the values of map to be indicies
        // else add as new value to map
        // loop on map and create result array
        for (const [key, value] of map.entries()) {
            res.push(value)
        }
        return res
        // return result array

    }
}

// map = {
// {"act", ["act", "cat"]},
// {"stop", ["stop","pots", "tops"]},
// {"hat", ["hat"]}
// }
