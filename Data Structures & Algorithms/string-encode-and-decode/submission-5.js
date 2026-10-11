class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = ""
        for (const str of strs) {
            encode += `${str.length}:${str}`
        }

        return encode
    }
// Input: ["neet","code","love","you"]
//.        0123456789 
// Output:"4:neet4:code4:love3:you"


    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0

        while(i < str.length) {
            const colonIndex = str.indexOf(':', i);
            const length = parseInt(str.substring(i, colonIndex), 10)

            const word = str.substring(colonIndex + 1, colonIndex + 1 + length)
            result.push(word)

            i = colonIndex + 1 + length 
        }

        return result
    }
}
