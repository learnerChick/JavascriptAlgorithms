/* Implement a queue using stack. */

function StackQueue(){
	this.pushStack = new Stack();
	this.popStack = new Stack();
}

StackQueue.prototype.enqueue = function(item){
	this.pushStack.push(item);
}

StackQueue.prototype.dequeue = function(item){
	if(!this.pushStack.isEmpty()){
		while(!this.pushStack.isEmpty()){
			this.popStack.push(this.pushStack.pop());
		}

		var toBeReturned = this.popStack.pop();

		while(!this.popStack.isEmpty()){
			this.pushStack.push(this.popStack.pop());
		}
		return toBeReturned;
	}

	return null;
}

StackQueue.prototype.isEmpty = function(){
	return this.pushStack.isEmpty();
}




