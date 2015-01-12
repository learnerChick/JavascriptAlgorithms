/*
  Maintain two pointers – reference pointer and main pointer.
  Initialize both reference and main pointers to head.
  First move reference pointer to n nodes from head.
  Now move both pointers one by one until reference pointer reaches end.
  Now main pointer will point to nth node from the end. Return main pointer.
*/

function nthFromLast(linkedList, n){
  var referencePointer = linkedList.head,
    mainPointer = linkedList.head,
    counter = 0;

    while(referencePointer !== null && counter < n){
      if(referencePointer.next === null){
        return;
      }

      referencePointer = referencePointer.next;
      counter++;
    }

    //now move both reference and mainPointer until referencePointer reaches end
    while(referencePointer !== null){
      referencePointer = referencePointer.next;
      mainPointer = mainPointer.next;
    }

    return mainPointer.element

    //we have reached the end, return the mainPointer



}
