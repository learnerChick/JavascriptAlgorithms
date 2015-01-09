define(function(){
    /*

        An inorder successor of a binary search tree is the next node in the in order traversal of the binary tree.
        Successor is the next bigger number of the current node, it has to be the smallest of all numbers in the right subtree.
        So, essentially we are looking for the minimum number in the right subtree of the current node.

        If there isn't a right subtree, we need to traverse up the tree. This can be broken into 2 cases:
            -- continue while look while parent is not null and curr == parent.right
            a) the current node is the left child of its parent.  In this case, this is the successor node because in inorder traversal, parent
            comes after you're done with the left subtree.
            b) the current node is the right child of the parent.  Here, you need to go up the subtree until you hit a parent node that will be next in traversal.

    */

    function findSuccessorWithParent(tree, node){
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

    function findSuccessor(tree, root, node){
        if(node === null){
            return null;
        }
        if(node.right !== null){
            return tree.findMinRecursive(node.right);
        }

        var succ = null;
        //start from root and search for successor down the tree
        while(root !== null){
            if(node.element < root.element){
                succ = root;
                root = root.left;
            }
            else if(node.element > root.element){
                root = root.right;
            }
            else{
                break;
            }
        }
        return succ;
    }

    //this will be the next smaller item in inorder traversal
    function findPredecessor(tree, root, node){
        if(node === null){
            return null;
        }
        if(node.left !== null){
            return tree.findMaxRecursive(node.left);
        }

        var succ = null;
        //start from root and search for successor down the tree
        while(root !== null){
            if(node.element < root.element){
                root = root.left;
            }
            else if(node.element > root.element){
                succ = root;
                root = root.right;
            }
            else{
                break;
            }
        }
        return succ;
    }

    return {
        findSuccessorWithParent: findSuccessorWithParent,
        findSuccessor: findSuccessor,
        findPredecessor: findPredecessor
    }
});
