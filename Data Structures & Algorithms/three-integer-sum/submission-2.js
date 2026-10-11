class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // define map
        let set = new Set();
        let map = new Map();

        // Create a map with numbers as keys and their indices as values
        for (const [idx, num] of nums.entries()) {
            if (map.has(num)) {
                map.set(num, [...map.get(num), idx]);
            } else {
                map.set(num, [idx]);
            }
        }

        // Nested loop to find triplets
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];

                if (map.has(-sum)) {
                    const indexes = map.get(-sum);

                    // Filter out the indices equal to `i` or `j`
                    const filteredIndexes = indexes.filter(idx => idx !== i && idx !== j);

                    if (filteredIndexes.length > 0) {
                        // Sort the triplet to ensure unique combinations
                        const triplet = [nums[i], nums[j], -sum].sort();

                        // Convert triplet to a string and add it to the set
                        const strTriplet = JSON.stringify(triplet);
                        set.add(strTriplet);
                    }
                }
            }
        }

        // Convert set to array of arrays
        return Array.from(set).map(str => JSON.parse(str));
    }
}
