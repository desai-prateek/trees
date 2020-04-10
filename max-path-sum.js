var maxPathSum = function(root) {
    var max = -Infinity; 
    getMaxSum(root);
  
    return max;
  
  function getMaxSum(tree) {
    if (tree == null) { return 0 } // Termination condition
    
    const leftBranch = Math.max(0, getMaxSum(tree.left));
      
    const rightBranch = Math.max(0, getMaxSum(tree.right));
    
    const currentPath = leftBranch + tree.val + rightBranch;
      
    max = Math.max(max, currentPath);
    return tree.val + Math.max(leftBranch, rightBranch)
  }
        

};
