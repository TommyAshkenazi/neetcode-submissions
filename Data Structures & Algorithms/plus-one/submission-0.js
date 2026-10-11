class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const res = []
        let number = Number(digits.join(''))
        number++
        while(number > 0) {
            res.push(number % 10)
            number = Math.floor(number / 10)
        }

        return res.reverse()
    }
}
