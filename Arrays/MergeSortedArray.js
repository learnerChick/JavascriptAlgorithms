/*
Write a function that takes two sorted lists of numbers and merges them into a single sorted list
*/

function merge(a, b){
	var c = [];
	while(a.length > 0 && b.length > 0){
		if(a[0] > b[0]){
			c.push(b.shift());
		}
		else{
			c.push(a.shift());
		}
	}
	if(a.length === 0){
		c = c.concat(b);
	}
	if(b.length === 0){
		c = c.concat(a);
	}

	console.log(c);
}
