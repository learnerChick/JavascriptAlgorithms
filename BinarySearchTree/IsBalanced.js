define(function() {
    /*
     Implement a function to check if a tree is balanced For the purposes of this question,
     a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one

    Take the root. Compute the height of its left and right sub tree.
    If the difference between height of the left and right sub tree is less than or equal to 1, return true.
    An empty tree is also considered balanced.
    */

    function isBalanced(tree) {
        if (checkHeight(tree.root) === -1) {
            return false;
        }
        return true;
    }

    function checkHeight(node){
        if(node === null){
            return -1;
        }

        var leftHeight = checkHeight(node.left);
        var rightHeight = checkHeight(node.right);

        if(Math.abs(leftHeight-rightHeight) > 1){
            return -1;
        }
        else{
            return Math.max(leftHeight, rightHeight) + 1
        }
    }

return isBalanced;

});
