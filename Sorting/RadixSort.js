/*
First, find out what the longest number in an array is.  Based on the length of that number, 
it will be determine the radix, that is 1, 10, 100, 1000, etc.

Create an array of queues indexed by the radix,

Begin with the 1's.  For all numbers in the 1's, find the modulus of that number by 10.  
Insert the original number into the modulus space of the queue.  

Dequeue all queues into an array.  Now the first radix is sorted.  Continue the same step with the other radix.

Average efficiency 0(N log N)

*/

function RadixSort(numbers){
	this.numbers = numbers;
	this.radix = [1,10,100,1000,10000,100000,100000];
}

RadixSort.prototype.init = function(){
	var passes = this.getMaxPasses();
	this.max = passes;

	for(var i = 0; i < passes; i++){
		var queues = this.distribute(this.radix[i]);
		this.collect(queues);
	}
	console.log("Sorted numbers are: ", this.numbers.join(","));
}

RadixSort.prototype.getMaxPasses = function(){
	var max = this.numbers[0].toString().length;
	for(var i = 1; i < this.numbers.length; i++){
		if(this.numbers[i].toString().length > max){
			max = this.numbers[i].toString().length;
		}
	}

	//how many passes
	return max;
}

RadixSort.prototype.distribute = function(digits){
	var queues = this.createEmptyQueue(this.max);
	for(var i = 0; i < this.numbers.length; i++){
		if(digits === 1){
			queues[this.numbers[i]%10].enqueue(this.numbers[i]);
		}
		else{
			queues[Math.floor(this.numbers[i]/digits)].enqueue(this.numbers[i]);
		}
	}
	return queues;
}

RadixSort.prototype.collect = function(queues){
	this.numbers = [];
	for(var i = 0; i < queues.length; i++){
		while(!queues[i].isEmpty()){
			this.numbers.push(queues[i].dequeue());
		}
	}
}

RadixSort.prototype.createEmptyQueue = function(passes){
	var size = this.radix[passes];

	if(passes === 1){
		size = 10;
	}

	var queues = [];
	for(var i = 0; i < size; i++){
		queues[i] = new Queue();
	}

	return queues;
}
