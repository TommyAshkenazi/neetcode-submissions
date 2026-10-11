class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(const arr of matrix) { // loop on the matrix
            let start = 0, end = arr.length - 1
            if (target > arr[end] || target < arr[start]) continue
            while (start <= end) {
                const mid = Math.floor( (start + end) / 2 )
                if (arr[mid] === target) return true
                else if (arr[mid] > target) {
                    end = mid - 1
                } else { // arr[mid] < target
                    start = mid + 1
                }
            }
        }

        return false
    }
}
