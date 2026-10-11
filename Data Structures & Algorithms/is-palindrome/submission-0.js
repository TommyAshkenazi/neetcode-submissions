class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (char) => {
            return (char >= 'a' && char <= 'z') || 
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9') 
        }

        let newStr = ""
        for (const c of s) {
            if(isAlphanumeric(c)) {
                newStr += c.toLocaleLowerCase()
            }
        }

        return newStr === newStr.split('').reverse().join('')
    }
}
