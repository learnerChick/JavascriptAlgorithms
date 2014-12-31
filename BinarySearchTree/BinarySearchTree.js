define(["Node", "../Queue/Queue.RequireJS"], function(Node, Queue){
    var BinarySearchTree = function(element){
        this.root = null;
    };

    BinarySearchTree.prototype.getSize = function(){
        return this.size(this.root);
    };

    BinarySearchTree.prototype.size = function(node){
        if(node === null){
            return 0;
        }
        else{
            return node.count;
        }
    };


    BinarySearchTree.prototype.add = function(item){
        this.root = this.addRecursive(item, this.root);
        return this.root;
    };

    BinarySearchTree.prototype.addRecursive = function(item, node){
        if(node === null){
            node = new Node(item);
        }
        else if(item < node.element){
            node.left = this.addRecursive(item, node.left);
        }
        else if(item > node.element){
            node.right = this.addRecursive(item, node.right);
        }
        node.count = 1 + this.size(node.left) + this.size(node.right);

        return node;
    }


    BinarySearchTree.prototype.find = function(item){
        return this.findRecursive(item, this.root);
    };

    BinarySearchTree.prototype.findRecursive = function(item, node){
        if(node === null){
            return null;
        }

        else if(item < node.element){
            return this.findRecursive(item, node.left);
        }

        else if(item > node.element){
            return this.findRecursive(item, node.right);
        }
        else if(item === node.element){
            return node;
        }
        return null;
    };

    BinarySearchTree.prototype.remove = function(item){
        this.root = this.removeRecursive(item, this.root);

        return this.root;
    };

    BinarySearchTree.prototype.removeRecursive = function(item, node){
        if(node === null){
            return null;
        }
        else if(item < node.element){
            node.left = this.removeRecursive(item, node.left);
        }
        else if(item > node.element){
            node.right = this.removeRecursive(item, node.right);
        }

        //if node has both children, find the minimum in the right node.  
        //Replace the value of node to be removed with found minimum.  
        //Since right tree now contains duplicate, remove the duplicate item in the right subtree
        else if(node.left !== null && node.right !== null){
            var minNode = this.findMinRecursive(node.right);
            node.element = minNode.element;
            node.right = this.removeMin(node.right);
        }

        //if either node is enmpty, replace the node to be removed with either node
        else{
            node = node.left === null ? node.right : node.left;
        }


        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    }

    BinarySearchTree.prototype.findMin = function(){
        return this.findMinRecursive(this.root);
    }

    BinarySearchTree.prototype.findMinRecursive = function(node){
        if(node !== null && node.left !== null){
            node = this.findMinRecursive(node.left);
        }
        return node;
    };

    BinarySearchTree.prototype.findMax = function(){
        return this.findMaxRecursive(this.root);
    }

    BinarySearchTree.prototype.findMaxRecursive = function(node){
        if(node !== null && node.right !== null){
            node = this.findMaxRecursive(node.right);
        }
        return node;
    }

    /* first check if left node is not null, if not null, removeMin of left node
        if node.left == null, then return right node
    */
    BinarySearchTree.prototype.removeMin = function(node){
        if(node === null){
            return null;
        }
        if(node.left !== null){
            node.left = this.removeMin(node.left);
            return node;
        }
        else{
            //basically, when the left node is null in above, that's the node we want to remove.  So by returning the right node, we're replacing the left node with the right node's value.
            return node.right;
        }
    }


    //LVR, if a node is missing on left or right, parent will be visited
    //recursively visit the left, then print value, then recursively go to the right
    BinarySearchTree.prototype.inorder = function(){
        var arr = [];
        return this.inorderTraversal(this.root, arr);

    }

    BinarySearchTree.prototype.inorderTraversal = function(node, arr){
        if(node.left !== null){
            this.inorderTraversal(node.left, arr);
        }
        arr.push(node.element);

        if(node.right !== null){
            this.inorderTraversal(node.right, arr);
        }
        return arr.join(", ");
    }

    BinarySearchTree.prototype.postorder = function(){
        var arr = [];
        return this.postorderTraversal(this.root, arr);
    }

    //LRV (left, right, value, recursively)
    BinarySearchTree.prototype.postorderTraversal = function(node, arr){
        if(node.left !== null){
            this.postorderTraversal(node.left, arr);
        }

        if(node.right !== null){
            this.postorderTraversal(node.right, arr);
        }

        arr.push(node.element);
        return arr.join(", ");
    }

    /*VLR (value, left, right
         * Start at root, get value, go left, get value, go down recursively. 
         * When no more lefts, go up, go right, print value, repeat above.  Also known as depth first search
    */
    BinarySearchTree.prototype.preorder = function(){
        var arr = [];
        return this.preorderTraversal(this.root, arr);
    }

    //LRV (left, right, value, recursively)
    BinarySearchTree.prototype.preorderTraversal = function(node, arr){
        arr.push(node.element);

        if(node.left !== null){
            this.preorderTraversal(node.left, arr);
        }

        if(node.right !== null){
            this.preorderTraversal(node.right, arr);
        }

        
        return arr.join(", ");
    }    

    BinarySearchTree.prototype.bfs = function(){
        this.bfsImplementation(this.root);
    }

    BinarySearchTree.prototype.bfsImplementation = function(node){
        var queue = new Queue();
        queue.enqueue(node);

        while(!queue.isEmpty()){
            var current = queue.dequeue();
            if(current !== null){
                continue;
            }
            console.log(current.element);

            queue.enqueue(current.left);
            queue.enqueue(current.right);
        }
    }

    return BinarySearchTree;
});