define(["BSTWithParent"], function(BST){
    /*
        Successor is the next bigger number of the current node, it has to be the smallest of all numbers in the right subtree.
        So, essentially we are looking for the minimum number in the right subtree of the current node.

        If there isn't a right subtree, we need to traverse up the tree. This can be broken into 2 cases:
            -- continue while look while parent is not null and curr == parent.right
            a) the current node is the left child of its parent.  In this case, this is the successor node because in inorder traversal, parent
            comes after you're done with the left subtree.
            b) the current node is the right child of the parent.  Here, you need to go up the subtree until you hit a parent node that will be next in traversal.

    */

    function findSuccessor(tree, node){
        if(node === null){
            return null;
        }
        if(node.right !== null){
            return tree.findMinRecursive(node.right);
        }

        var parent = node.parent;
        var curr = node;

        while(parent !== null && curr === parent.right){
            curr = parent;
            parent = parent.parent;
        }

        return parent;
    }

    return {
        findSuccessor: findSuccessor
    }
});