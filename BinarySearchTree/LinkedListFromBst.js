/*
 Given a binary search tree, design an algorithm which creates a linked list of all
 the nodes at each depth (i e , if you have a tree with depth D, you’ll have D linked lists)
 */

define(["Node", "../LinkedList/LinkedList.RequireJS"], function(Node, LinkedList){
    function createList(tree){
        var lists = listCreator(tree.root, [], 0);
        return lists;
    }

    function listCreator(node, lists, level){
        if(node === null){
            return;
        }

        var list = null;

        //current level doesn't have its own linked list
        if(level === lists.length){
            list = new LinkedList();
            lists.push(list);
        }
        else{
            list = lists[level];
        }

        list.insertFirst(node);
        console.log("Data inserted at ", level , " with value ", node.element);
        listCreator(node.left, lists, level + 1);
        listCreator(node.right, lists, level + 1);

        return lists;
    }

    return {
        createList: createList
    };


});