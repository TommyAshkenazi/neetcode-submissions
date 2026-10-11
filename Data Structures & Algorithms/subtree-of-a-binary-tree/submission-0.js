class Solution {
    // Helper function to check if two trees are identical
    found(root, subRoot) {
        if (!root && !subRoot) return true; // Both trees are null
        if (!root || !subRoot) return false; // One tree is null, the other is not

        // Check current node and recursively check left and right subtrees
        return root.val === subRoot.val
            && this.found(root.left, subRoot.left)
            && this.found(root.right, subRoot.right);
    }

    // Helper function to traverse the tree
    traverse(root, subRoot) {
        if (!root) return false; // Reached the end of a branch

        // Check if the current tree is a match or recursively traverse
        return this.found(root, subRoot)
            || this.traverse(root.left, subRoot)
            || this.traverse(root.right, subRoot);
    }

    // Main function to check if subRoot is a subtree of root
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true; // Both trees are null
        if (!root || !subRoot) return false; // One tree is null, the other is not

        return this.traverse(root, subRoot);
    }
}
