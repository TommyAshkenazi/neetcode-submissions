class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort()
        const res = []
        const subSet = []
        const dfs = (nums, res, subSet, i) => {
            res.push([...subSet])
            for (let j = i ; j < nums.length ; j++) {
                if (j > i && nums[j] === nums[j - 1]) {
                    continue
                }
                subSet.push(nums[j])
                dfs(nums, res, subSet, j + 1)
                subSet.pop()
            } 
        }
        dfs(nums, res, subSet, 0)
        return res
    }
}
