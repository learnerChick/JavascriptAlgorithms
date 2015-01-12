define(["LinkedList.RequireJS"], function(LinkedList){

  function removeDuplicatesWithExtraSpace(list){
    var noDuplicates = new LinkedList();
    var current = list.head;

    while(current !== null){
      if(noDuplicates.find(current.element) === null){
        noDuplicates.insertFirst(current.element);
      }
      current = current.next;
    }

    return noDuplicates;
  }


  function removeDuplicatesWithNoExtraSpace(list){
    var current = list.head;

    while(current !== null){
      var previous = current;
      var next = current.next;

      while(next !== null){
        if(current.element === next.element){
          previous.next = next.next;
        }
        previous = next;
        next = next.next;
      }
      current = current.next;
    }

    return list;
  }

  return {
    removeDuplicatesWithExtraSpace: removeDuplicatesWithExtraSpace,
    removeDuplicatesWithNoExtraSpace: removeDuplicatesWithNoExtraSpace
  }
});
