function Queue(){
	this.items = [];
	this.count = 0;
}

Queue.prototype.enqueue = function(item){
	this.items.push(item);
}

Queue.prototype.dequeue = function(){
	return this.items.shift();
}

Queue.prototype.isEmpty = function(){
	return this.count === 0;
}

Queue.prototype.front = function(){
	return this.items[0];
}

Queue.prototype.back = function(){
	return this.items[this.count - 1];
}

Queue.prototype.toString(){
	return this.items.join(",");
}