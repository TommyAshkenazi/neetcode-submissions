class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let map = new Map();
    let max = 0;
    let left = 0;
    let maxAccurences = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        // Update the count of the most frequent character in the current window
        maxAccurences = Math.max(...map.values());

        const currLength = right - left + 1;

        // Check if the current window is invalid
        if (currLength - maxAccurences > k) {
            const leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            left++;
        }

        // Update the max length of the valid window
        max = Math.max(max, right - left + 1);
    }

    return max;
    }
}

// A A A B A B B
// L
//       R