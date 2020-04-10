var preorderTraversal = function(root, res=[]) {
    if(root) {
        res.push(root.val);
        if (root.left) {
            preorderTraversal(root.left, res);
        } 
        if (root.right) {
            preorderTraversal(root.right, res);
        }
    }
    return res;
};
