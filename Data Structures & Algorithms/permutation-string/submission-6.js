class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const windowLength = s1.length;
        const s1Freq = Array(26).fill(0);
        const windowFreq = Array(26).fill(0);

        // Helper function to get the index of a character
        const charToIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

        // Fill frequency array for s1
        for (const char of s1) {
            s1Freq[charToIndex(char)]++;
        }

        // Initialize the frequency array for the first window in s2
        for (let i = 0; i < windowLength; i++) {
            windowFreq[charToIndex(s2[i])]++;
        }

        // Check if the frequency arrays match
        const arraysAreEqual = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        // Sliding window
        for (let i = 0; i <= s2.length - windowLength; i++) {
            if (arraysAreEqual(s1Freq, windowFreq)) return true;

            // Slide the window to the right
            if (i + windowLength < s2.length) {
                windowFreq[charToIndex(s2[i])]--; // Remove the left character
                windowFreq[charToIndex(s2[i + windowLength])]++; // Add the new right character
            }
        }

        return false;
    }
}
