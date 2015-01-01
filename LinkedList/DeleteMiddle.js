function deleteMiddle(list, item){
  var nodeToBeDeleted = list.find(item);

  //we cannot continue with this operation since the next node is important for replacement of content.
  if(nodeToBeDeleted === null || nodeToBeDeleted.next === null){
    return null;
  }

  //we do a replacement here instead to update the pointers.
  var nextNode = nodeToBeDeleted.next;
  nodeToBeDeleted.element = nextNode.element;
  nodeToBeDeleted.next = nextNode.next;
  return list;
}
