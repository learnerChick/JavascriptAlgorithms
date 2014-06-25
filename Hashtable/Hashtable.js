/*
	Hashtable solution using separate chaining to address collision issue.  Doubly linked list is used to remove 
	store the items.

	Space: O(n)

	Worst case for finding: O(n)
	Best case = O(1)
	Average case = O(n/m)
*/

define(["../LinkedList/DoublyLinkedList.RequireJS"], function(LinkedList){

	Hashtable = function(){
		this.data = {};
	};

	var hash = function(item){
		var hashed = 0;
		if(item.length === 0){
			return hashed;
		}
		for(var i = 0; i < item.length; i++){
			var char = item.charCodeAt(i);
			hashed = ((hashed << 5) - hashed) + char;
			hashed = hashed & hashed;
		}
		return hashed;
	};

	Hashtable.prototype.put = function(item){
		var bucketLocation = hash(item);
		if(typeof this.data[bucketLocation] === "undefined"){
			this.data[bucketLocation] = new LinkedList();
			this.data[bucketLocation].insertFirst(item);
		}
		else{
			this.data[bucketLocation].insertLast(item);
		}
	};

	Hashtable.prototype.get = function(item){
		var bucketLocation = hash(item);
		if(typeof this.data[bucketLocation] !== "undefined"){
			return this.data[bucketLocation];
		}
		return null;
	}

	Hashtable.prototype.remove = function(item){
		var bucketLocation = hash(item);
		if(typeof this.data[bucketLocation] === "undefined"){
			return null;
		}
		else{
			var list = this.data[bucketLocation];
			list.deleteItem(item);
			if(list.head === null){
				//empty linked list, so let's remove entire entry
				delete this.data[bucketLocation];
			}
			return item;
		}
		console.log(this.data);
	};

	Hashtable.prototype.display = function(){
		for(item in this.data){
			this.data[item].display();
		} 
	}



	return Hashtable;
});