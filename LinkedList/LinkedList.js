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

	while(current.element !== item){
		if(current.next === null){
			return null;
		}
		else{
			previous = current;
			current = current.next;
		}
	}

	if(current === this.head){
		this.head = this.head.next;
	}
	else{
		previous.next = current.next;
	}
	return current;
}

LinkedList.prototype.display = function(){
	var current = this.head;
	while(current !== null){
		console.log(current.element, " ", current);
		current = current.next;
	}
}

