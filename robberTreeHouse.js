var rob = function(root) {
    let res = robHelper(root);
    return Math.max(res[0], res[1]);
};

var robHelper = function(root) {
    if(!root) {
        return [0,0];
    }
    let leftRobbedMoney = robHelper(root.left);
    let rightRobbedMoney = robHelper(root.right);
    
    let maxMoneyIfRootRobbed = root.val + leftRobbedMoney[1] + rightRobbedMoney[1];
    let maxMoneyIfRootNotRobbed = Math.max(leftRobbedMoney[0], leftRobbedMoney[1]) +                        Math.max(rightRobbedMoney[0], rightRobbedMoney[1]);
        
        return [maxMoneyIfRootRobbed, maxMoneyIfRootNotRobbed];
}
