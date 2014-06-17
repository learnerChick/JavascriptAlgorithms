function Node(element){
	this.element = element;
	this.previous = null;
	this.next = null;
}

function DoublyLinkedList(){
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.insertFirst = function(element){
	var node = new Node(element);
	if(this.head === null){
		this.head = node;
		this.tail = this.head;
	}
	else{
		var oldHead = this.head;
		this.head = node;
		this.head.next = oldHead;
		oldHead.previous = node;
	}
}

DoublyLinkedList.prototype.insertAfter = function(element, afterWhich){
	var current = this.head;
	while(current !== null){
		if(current.element === afterWhich){
			var node = new Node(element);
			var oldNext = current.next;
			current.next = node;
			node.next = oldNext;
			node.previous = current;
			oldNext.previous = node;
			return;
		}
		current = current.next;
	}
}

DoublyLinkedList.prototype.insertLast = function(element){
	var node = new Node(element);
	if(this.head === null){
		this.head = node;
		this.tail = this.head;
	}
	else{
		var oldTail = this.tail;
		this.tail = node;
		oldTail.next = this.tail;
		this.tail.previous = oldTail;
	}
}

DoublyLinkedList.prototype.deleteFirst = function(){
	if(this.head !== null){
		var oldHead = this.head;
		this.head = this.head.next;
		this.head.previous = null;
		return oldHead;
	}
	return null;
}

DoublyLinkedList.prototype.deleteLast = function(){
	var current = this.tail;
	if(this.tail !== null){
		var oldTail = this.tail;
		this.tail = oldTail.previous;
		this.tail.next = null;
		return oldTail;
	}
	else if(this.head !== null){
		this.deleteFirst();
	}
}

DoublyLinkedList.prototype.deleteItem = function(item){
	var current = this.head;
	while(current !== null){
		if(current.element === item){
			var oldCurrent = current.item;
			var previous = current.previous;
			var next = current.next;

			previous.next = next;
			next.previous = previous;
			return oldCurrent;
		}
		else{
			current = current.next;
		}
	}
	return null;
}

DoublyLinkedList.prototype.display = function(){
	var current = this.head;
	while(current !== null){
		console.log(current.element);
		current = current.next;
	}
}


DoublyLinkedList.prototype.find = function(item){
	var current = this.head;
	while(current !== null){
		if(current.element === item){
			return current;
		}
		else{
			current = current.next;
		}
	}
	return null;
}




