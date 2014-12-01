/*
	1) First create a Node class with an element an next pointing to null.
	2) Then create a LinkedList class with the head set to null.
	3) When inserting an item first into the Linked List, first check if the head is null.
	   If null, create a new node and set that as head.

	   If not null, then set the current head as a variable called oldHead.  Then, create a new node
	   with the new item and set the next node of the new node to oldHead.
	4) When inserting an item after a certain item, first, set a variable current to this.head.  Then, 
	   in a while loop, while the current !== null, check if the current.item === item.  If so, the next
	   node after the item will be the new node.  So, store the oldNext into a variable, set the new next 
	   node and the next of the new node will be the oldNext.  

	   If item cannot be found, return null.
	5) To find an item, set a variable called current to head.  Then while the current != null, check if
	   current.item === item. If not found, set current to current.next.  If item is found in while loop,
	   return item.  If not, return null.

	6) When deleting an item, we need to keep track of previous and current node.  So, first, set varibles
	   current and previous to this.head.  While current.item != item and then if current.next != null, we set 
	   current = current.next and previous to current.  If current.next == null, we return null.

	   Now, outside of the while loop, check is current = this.head.  If current == this.head, then 
	   this.head = this.head.next.  Else, previous.next = current.next
	


*/



function Node(element){
	this.element = element;
	this.next = null;
}

function LinkedList(){
	this.head = null;
}

LinkedList.prototype.insertFirst = function(item){
	var node = new Node(item);
	//no item in list
	if(this.head === null){
		this.head = node;
	}
	else{
		var oldHead = this.head;
		this.head = node;
		this.head.next = oldHead;
	}
}

LinkedList.prototype.insertAfter = function(item, afterWhich){
	var current = this.head;
	while(current !== null){
		if(current.element === afterWhich){
			var oldNext = current.next;
			current.next = new Node(item);
			current.next.next = oldNext;
		}
		current = current.next;
	}
	return null;
}

LinkedList.prototype.find = function(item){
	var current = this.head;
	while(current !== null){
		if(current.element === item){
			return current;
		}
		current = current.next;
	}
	return null;
}

LinkedList.prototype.delete = function(item){
	var current = this.head;
	var previous = this.head;

    if(this.head === null){
        return null;
    }

    if(current.element === item){
        this.head = this.head.next;
        return true;
    }

    while(current !== null){
        if(current.element !== item){
            previous = current;
            current = current.next;
        }
        else{
            previous.next = current.next;
            return true;
        }
    }
}

LinkedList.prototype.display = function(){
	var current = this.head;
	while(current !== null){
		console.log(current.element, " ", current);
		current = current.next;
	}
}

