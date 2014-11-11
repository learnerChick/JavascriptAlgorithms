/*
    Given a sorted (increasing order) array, write an algorithm to create a binary tree with minimal height
*/

define(["Node", "BinarySearchTree"], function(Node, BST){
    var bst = new BST();
    function balancedTree(arr){
        if(arr.length === 0){
            return;
        }

        else{
            var mid = Math.floor(arr.length/2);
            bst.add(arr[mid]);

            var left = arr.slice(0, mid);
            var right = arr.slice(mid + 1, arr.length)

            balancedTree(left);
            balancedTree(right);
        }

        return bst;
    }


    return balancedTree;
});