var hasPathSum = function(root, sum) {
    if (root == null) 
        return false; 
    else { 
        let ans = false; 
        /* otherwise check both subtrees */
        let subsum = sum - root.val; 
        if (subsum == 0 && root.left == null && root.right == null) 
            return true; 
        if (root.left != null) 
            ans = hasPathSum(root.left, subsum)? hasPathSum(root.left, subsum): ans; 
        if (root.right != null) 
            ans = hasPathSum(root.right, subsum)? hasPathSum(root.right, subsum) : ans; 
        return ans; 
    }
};
