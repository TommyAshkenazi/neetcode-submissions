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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true

        const dfs = (root) => {
            if (!root) return 0

            const left = dfs(root.left)
            const right = dfs(root.right)

            // בודקים את ההפרש: אם הוא גדול מ-1, העץ לא מאוזן
            if (Math.abs(left - right) > 1) {
                res = false;
            }

            // הפונקציה חייבת להחזיר למעלה את הגובה של התת-עץ הנוכחי
            return 1 + Math.max(left, right);
        }

        dfs(root)
        return res
    }
}
