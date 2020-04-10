var postorderTraversal = function(root, res = []) {
    if(root){
        if(root.left) {
            postorderTraversal(root.left, res);
        }
        if(root.right) {
            postorderTraversal(root.right, res);
        }
        res.push(root.val)
    }
    return res;
};
