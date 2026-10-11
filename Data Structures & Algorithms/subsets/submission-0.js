class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const subset = []
        this.dfs(nums,0, subset, res)
        return res
    }

    dfs(nums, i, subset, res) {
        // if i is greater then the length of nums
        // push the content of{ subset inside an array [...values] into res and return
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        // push nums[i] into subset
        // call the dfs with i + 1
        subset.push(nums[i])
        this.dfs(nums, i + 1, subset, res)
        // pop nums[i] from subset
        // call the dfs with i + 1
        subset.pop()
        this.dfs(nums, i + 1, subset, res)
    }
}
// [ 1 , 2 , 3 ]
// p

