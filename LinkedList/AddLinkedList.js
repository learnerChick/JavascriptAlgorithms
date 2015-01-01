define(["../LinkedList/Node"], function(Node){
  /*
    You have two numbers represented by a linked list, where each node contains a single digit.
    The digits are stored in reverse order, such that the 1’s digit is at the head of the list.
    Write a function that adds the two numbers and returns the sum as a linked list.
    EXAMPLE
    Input: (3 -> 1 -> 5), (5 -> 9 -> 2)
    Output: 8 -> 0 -> 8
  */


  function AddLinkedList(node1, node2, carryover){
    if(node1 === null && node2 === null){
      return null;
    }

    var sum = carryover;
    var node = new Node();

    //add the sum for each node part
    if(node1 !== null){
      sum += node1.element;
    }

    if(node2 !== null){
      sum += node2.element;
    }

    //since each node will only store 1 digit, divide by 10 to get the mod to be stored.
    var balance = sum % 10;
    node.element = balance;

    node.next = AddLinkedList(node1 !== null ? node1.next : null, node2 !== null ? node2.next : null, sum >= 10 ? 1 : 0);
    return node;
  }

  return AddLinkedList;
});
