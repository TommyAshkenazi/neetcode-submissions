class Solution {
    found(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!root && subRoot) return false;
        if (root && !subRoot) return false;

        return root.val === subRoot.val
            && this.found(root.left, subRoot.left)
            && this.found(root.right, subRoot.right);
    }
    isSubtree(root, subRoot) {
        if (!root) return false;
        return this.found(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
