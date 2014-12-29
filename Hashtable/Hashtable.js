/*
	Hashtable solution using separate chaining to address collision issue.  This linked list will
	take extra space.  Doubly linked list is used to remove
	store the items.

	Space: O(n)

	Worst case for finding: O(n)
	Best case = O(1)
	Average case = O(n/m)
*/

define(["../LinkedList/DoublyLinkedList.RequireJS"], function(LinkedList){

	var Hashtable = function(){
		this.data = {};
	};

	//djb2 hashing function
	var hash = function(item){
		var h = 5381;

		for(var i = 0; i < item.length; i++){
			var char = item.charCodeAt(i);
			h = ((h << 5) + h) + char; //h * 33 + c
		}
		return h;
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
			//get the item from the linked list
			return this.data[bucketLocation].find(item);
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