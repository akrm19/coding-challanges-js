class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.data = (val === undefined) ? null : val;
    }
    isLeaf() {
        return this.left == null && this.right == null;
    }
    static traverseTree(tree) {

    }
    static isSymmetric(bst) {
        if(!bst.left && !bst.right)
            return true;
        else if (bst.left !== null && bst.right !== null){
            return bst.left.data === bst.right.data
                && TreeNode.isSymmetric(bst.left.left, bst.right.right)
                && TreeNode.isSymmetric(bst.left.right, bst.right.left);
        }
        return false;
    }
}

class BinarySearchTree {
    constructor() {
        super();
        this.root = new TreeNode();
    }
}

module.exports = {
    TreeNode: TreeNode,
    BinarySearchTree: BinarySearchTree
}