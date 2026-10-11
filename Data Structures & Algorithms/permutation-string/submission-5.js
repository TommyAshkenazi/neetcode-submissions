class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const windowLength = s1.length;
        const map1 = new Map();
        const map2 = new Map();

        // Create a frequency map for s1
        for (const c of s1) {
            map1.set(c, (map1.get(c) || 0) + 1);
        }

        // Initialize the frequency map for the first window of s2
        for (let i = 0; i < windowLength; i++) {
            const c = s2[i];
            map2.set(c, (map2.get(c) || 0) + 1);
        }

        // Function to check if the two maps are equal
        const mapsAreEqual = (map1, map2) => {
            if (map1.size !== map2.size) return false;
            for (const [key, value] of map1.entries()) {
                if (map2.get(key) !== value) return false;
            }
            return true;
        };

        // Sliding window
        for (let left = 0; left + windowLength <= s2.length; left++) {
            if (mapsAreEqual(map1, map2)) return true;

            const right = left + windowLength;
            if (right < s2.length) {
                // Remove the left character from the window
                const leftChar = s2[left];
                map2.set(leftChar, map2.get(leftChar) - 1);
                if (map2.get(leftChar) === 0) {
                    map2.delete(leftChar);
                }

                // Add the new right character to the window
                const rightChar = s2[right];
                map2.set(rightChar, (map2.get(rightChar) || 0) + 1);
            }
        }

        return mapsAreEqual(map1, map2);
    }
}
