var maxDepth = function(root) {
    var depth = 0;
    
    var check = function(node, level) {
        if(node == null) return;
        
        if(level > depth) depth = level;
        
        check(node.right, level + 1);
        check(node.left, level + 1)
    }
    
    check(root, 1)
    return depth;
};
