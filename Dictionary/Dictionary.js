function Dictionary(){
	this.data = [];
}

Dictionary.prototype.add = function(key, value){
	this.data[key] = value;
}

Dictionary.prototype.find = function(key){
	return this.data[key];
}

Dictionary.prototype.remove = function(key){
	delete this.data[key];
}

Dictionary.prototype.showAll = function(){
	var keys = Object.keys(this.data);
	for(var i = 0; i < keys.length; i++){
		console.log(keys[i], this.data[keys[i]]);
	}
}

Dictionary.prototype.sort = function(){
	var keys = Object.keys(this.data).sort();
	for(var i = 0; i < keys.length; i++){
		console.log(keys[i], this.data[keys[i]]);
	}
}