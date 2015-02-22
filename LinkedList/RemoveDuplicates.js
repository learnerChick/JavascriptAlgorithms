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

  function removeDuplicatesWithNoExtraSpace2(list){
      var current = list.head;

      while(current !== null){
        var next = current.next;

        while(next !== null){
          if(next.element === current.element){
            next.element = next.next.element;
          }
          next = next.next;
        }
        current = current.next;
      }

      return list;
    }


  return {
    removeDuplicatesWithExtraSpace: removeDuplicatesWithExtraSpace,
    removeDuplicatesWithNoExtraSpace: removeDuplicatesWithNoExtraSpace,
    removeDuplicatesWithNoExtraSpace2: removeDuplicatesWithNoExtraSpace2

  }
});
