function Queue(){
	this.items = [];
	this.count = 0;
}

Queue.prototype.enqueue = function(item){
	this.items.push(item);
	this.count++;
}

Queue.prototype.dequeue = function(){
	if(this.count > 0){
		this.count--;
		return this.items.shift();
	}
	else{
		return null;
	}
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

Queue.prototype.toString = function(){
	return this.items.join(",");
}