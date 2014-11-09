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

    function checkHeight(node) {
        console.log("Element is ", (node !== null ? node.element : "empty"));
        if (node === null) {
            return 0;
        }

        //recursively check the left node until it hits the condition above.
        var leftHeight = checkHeight(node.left);

        if (leftHeight === -1) {
            return -1;
        }

        var rightHeight = checkHeight(node.right);
        if (rightHeight === -1) {
            return -1
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        else {
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

    return isBalanced;

});