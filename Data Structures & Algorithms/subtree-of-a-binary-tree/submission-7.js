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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // that function checks of the trees are the same
        const isSameTree = (r, s) => {
            if (!r && !s) return true;
            if (!r || !s || r.val !== s.val) return false;

            const left = isSameTree(r.left, s.left);
            const right = isSameTree(r.right, s.right);

            return left && right;
        };

        // if root null needs to keep looking 
        if (!root) return false;
        // call the helper function to check if sub tree are same as current root
        if (isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || 
        this.isSubtree(root.right, subRoot);
    }
}
