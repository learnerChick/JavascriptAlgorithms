function Stack(){
	this.items = [];
	this.count = 0;
}

Stack.prototype.push = function(item) {
	this.items.push(item);
	this.count++;
}

Stack.prototype.pop = function(){
	if(!this.isEmpty()){
		this.count--;
		return this.items.pop();
	}

	return null;
}

Stack.prototype.length = function(){
	return this.count;
}

Stack.prototype.peek = function(){
	if(!this.isEmpty()){
		return this.items[this.count - 1];
	}
}

Stack.prototype.isEmpty = function(){
	return this.count === 0;
}


