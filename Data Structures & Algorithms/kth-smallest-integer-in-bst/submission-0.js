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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // in order traversal for BST give a sorted array
        const arr = [];
        const inOrderTraversal = (root) => {
            if (!root) return null;

            inOrderTraversal(root.left);
            if (root) arr.push(root.val);
            inOrderTraversal(root.right);
        };
        inOrderTraversal(root)
        return arr[k - 1];
    }
}
