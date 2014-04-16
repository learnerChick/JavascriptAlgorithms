/*
	From a given input array, for each element, find next lower element present in each array.
 	For example {3,4,2,6,5,1,8,4} output would be{2,2,1,5,1,0,4,0}.

 	Time complexity = O(n).  Worst case is when items are sorted in decreasing order.
*/

function nextHighestNumber(arr){
	var stack = new Stack();
	var transformed = [];
	for(var i = arr.length - 1; i >= 0; i--){
		var current = arr[i];

		/*	if stack is empty, time to add item to it and continue to the next number.  But before moving on,
			set the next highest number to 0 for the current number.
		*/
		if(stack.isEmpty()){
			stack.push(current);
			transformed[i] = 0;
			continue;
		}

		//continue popping until the first min is encountered
		while(!stack.isEmpty() && stack.peek() <= current){
			stack.pop();
		}

		transformed[i] = stack.peek() === null ? 0 : stack.peek();
		stack.push(current);
	}

	console.log(transformed.join(","));

}