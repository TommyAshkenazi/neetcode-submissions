class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // define the map
        let map = new Map()
        let max = 0
        // insert all the values from nums into the map
        for (let num of nums) {
            if(!map.has(num)) {
                map.set(num, 1)
            }
        }
        // loop on nums and check the following
        for (let key of nums) {
            let value = map.get(key)
            // if not seen yet
            if(value > 0) {
                // lets check if there are a next key
                let nextKey = key + 1
                while(map.has(nextKey) && map.get(nextKey) > 0) {
                    let nextValue = map.get(nextKey)
                    value = map.get(key)
                    map.set(key, value + nextValue)
                    map.set(nextKey, 0)
                    nextKey++;
                }
            }
           
        }

        for (let value of map.values()) {
            if (value > max) {
                max = value
            }
        }
        return max
        // if map has prev and not marked 
    }
}

// [2,20,4,10,3,4,5]
//  ^          
// {
//      
//      20: 1,
//      10: 1,
//      3: 0,
//      4: 0,
//      5: 0,
//      2: 4,
// }