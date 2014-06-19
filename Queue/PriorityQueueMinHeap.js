/* 1)  First create a Node object that holds the priority and the item.
   2)  Then, create a PriorityQueue object, initializing the heap to an array with the first item set to null.  This item is not used, 
       but makes the calculation easier.  Set count to 0.
   3)  In the enqueue method, just add the item to the end of the heap.  Once added, let the heap resort itself by calling the swim method.
   4)  The swim method takes the size of the array as a param.  In a while loop while index/2 (parent node) is greater than 0, we compare parent
       index priority with child.  If child priority is higher, swap.  Then, set index to parent index and continue.
   5)  In the dequeue method, remove the item at position 1.  Remember that item at position 0 is merely a dummy. 
       In this operation, we put the item at index 1 in a temp object.  Then get the last item in the array and put it into position 1.  
       Then, pop() the heap for the last item.  Then, call the sink method that rearranges the new item at position 1.
   6)  In sink, while index * 2 (child) is less than length, find the smallest child less than the current root.
       Left index is i*2, right is i*2 + 1.  Then swap the root with that child.

    Insertion process to insert one by one - O(n log n)

    
*/


function Node(item, priority){
    this.item = item;
    this.priority = priority;
}

Node.prototype.toString = function(){
    return this.priority;
}

function PriorityQueueMinHeap(){
    this.heap = [null];
    this.count = 0;
}

PriorityQueueMinHeap.prototype.enqueue = function(item, priority){
    var node = new Node(item, priority);
    this.heap.push(node);
    this.count++;
    this.swim(this.count);
}

/*
In order to maintain the heap order property, all we need to do is swap the root with its smallest child less than the root. 
After the initial swap, we may repeat the swapping process with a node and its children until the node is
 swapped into a position on the tree where it is already less than both children.
*/

PriorityQueueMinHeap.prototype.dequeue = function(){
    var item = this.heap[1];
    this.heap[1] = this.heap[this.count];
    this.count--;
    this.heap.pop();
    this.sink(1);
    return item;
}


PriorityQueueMinHeap.prototype.swim = function(index){
    while(Math.floor(index/2) > 0){
        var parentIndex = Math.floor(index/2);
        var toMoveUp = this.isHigherPriority(index, parentIndex);
        if(toMoveUp){
            this.swap(index, parentIndex);
        }
        index = parentIndex;
    }
}

PriorityQueueMinHeap.prototype.sink = function(index){
    //keep moving down
    while((index * 2) < this.count){
        //left is i*2, right is i*2+1
        var isLeftHigher = !this.isHigherPriority(index*2 + 1, index*2);
        var childIndex = isLeftHigher ? index*2 : index*2 + 1;
        
        if(!this.isHigherPriority(index, childIndex)){
            this.swap(index, childIndex);
        }
        index = childIndex;
    }
}

PriorityQueueMinHeap.prototype.isHigherPriority = function(i, j){
    return this.heap[i].priority < this.heap[j].priority;
}


PriorityQueueMinHeap.prototype.swap = function(i, j){
    var temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
}

PriorityQueueMinHeap.prototype.toString = function(){
    var str = "";
    for(var i = 1; i < this.heap.length; i++){
        str = str + " " + this.heap[i].toString();
    }
    return str;
}


var queue = new PriorityQueueMinHeap();
        
queue.enqueue({p:'two'}, 2);
queue.enqueue({p:'three'}, 3);
queue.enqueue({p:'five'}, 5);
queue.enqueue({p:'1st one'}, 1);
queue.enqueue({p:'zero'}, 0);
queue.enqueue({p:'nine'}, 9);
queue.enqueue({p:'2nd one'}, 1);
        
console.log(queue.toString()); // 0,1,1,3,2,9,5 

console.log(queue.dequeue()); //  {p:'zero'}
console.log(queue.dequeue()); // {p:'1st one'}
console.log(queue.toString()); // 1,2,9,3,5

queue.enqueue({p:'one-half'}, 0.5);
console.log(queue.toString()); // 0.5,2,1,3,5,9