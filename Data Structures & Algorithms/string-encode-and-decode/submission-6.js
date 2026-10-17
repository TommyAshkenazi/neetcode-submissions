class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // decide the length of the work and the delimiter
        // Input: strs = ["Hello","World"]

        const res = [];
        for (let s of strs) {
            res.push(String(s.length), "#", s);
        }

        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#Hello5#world
        // i
        //  j

        const res = [];
        let i = 0
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            let currLen = Number(str.substring(i, j));

            let word = str.substring(j + 1, j + 1 + currLen);

            res.push(word);
            i = j + 1 + currLen;
        }

        return res;
    }
}
