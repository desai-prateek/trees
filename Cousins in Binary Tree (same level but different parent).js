/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    // cousins are nodes at the same depth with different parents
    const map = new Map(); // [number, {level: number, parent: TreeNode}]
    const traverse = (node, level, parent) => {
        if (node === null) {
            return;
        }
        if (node.val === x || node.val === y) {
            map.set(node.val, {level, parent})
        }
        traverse(node.left, level + 1, node);
        traverse(node.right, level + 1, node);
    }
    traverse(root, 0, new TreeNode(-1));
    return map.get(x).level === map.get(y).level && map.get(x).parent !== map.get(y).parent; 
};


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
