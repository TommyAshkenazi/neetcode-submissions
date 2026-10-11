class Solution {
    found(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;

        return root.val === subRoot.val
            && this.found(root.left, subRoot.left)
            && this.found(root.right, subRoot.right);
    }
    traverse(root, subRoot) {
        if (!root) return false;
        return this.found(root, subRoot) || this.traverse(root.left, subRoot) || this.traverse(root.right, subRoot);
    }
    isSubtree(root, subRoot) {
        if (!root) return false;
        return this.traverse(root, subRoot);
    }
}
