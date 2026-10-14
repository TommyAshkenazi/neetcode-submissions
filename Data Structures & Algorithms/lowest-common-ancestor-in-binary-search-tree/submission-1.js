/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // the first assumption is that the root is the lowest
        const min = Math.min(p.val, q.val)
        const max = Math.max(p.val, q.val)

        const dfs = (root) => {
            if (!root) return null
            if (root.val < min) return dfs(root.right)
            if (root.val > max) return dfs(root.left)

            return root
        }

        return dfs(root)
    }
}
