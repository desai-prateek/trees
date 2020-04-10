var levelOrder = function(root) {
    var result = [];
    traverseLevel(root, result, 0);
    return result;
}

var traverseLevel = function(node, result, level){
    if(node == null){
        return; //base case.
    }
    
    if(!result[level]){
        result[level] = [];
    }
    result[level].push(node.val);
    
    traverseLevel(node.left, result, level + 1);
    traverseLevel(node.right, result, level + 1);
}
