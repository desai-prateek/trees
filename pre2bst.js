/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    
    if (preorder.length === 0) return null;
    if (preorder.length === 1) return new TreeNode(preorder[0]);
    var tree = new TreeNode(preorder[0]);
    
    for (let i = 1; i < preorder.length; i++) {
        tree = insert(tree, preorder[i])
    }
    return tree
};

var insert = function(root, value) {
    if (root === null) return new TreeNode(value);
    if (value < root.val) {
    // insert in left subtree
        root.left = insert(root.left, value);
    } else {
    // insert in right subtree
        root.right = insert(root.right, value);
    }
    return root;
}


// input [8,5,1,7,10,12]
// output [8,5,10,1,7,null,12]
