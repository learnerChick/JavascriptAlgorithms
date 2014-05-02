/* 
Find the least difference between any two elements of an integer array.
*/

function leastDifference(arr){
	arr = arr.sort(function(a, b) { return a - b});
	if(arr.length === 1){
		return null;
	}

	var least = arr[1] - arr[0];
	for(var i = 1; i < arr.length - 1; i++){
		if(arr[i + 1] - arr[i] < least){
			least = arr[i + 1] - arr[i];
		}
	}
	return least;
}