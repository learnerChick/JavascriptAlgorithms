/**
 * Write a function to find the min and max in an array with minimum comparisons.
 * Solution: Compare in pairs
 * If n is odd, then initialize min and max = arr[0]. 
 * If n is even, the initialize min = arr[0] and max = arr[1].
 * Then, start going through each element and compare min and max
 * Time complexity: 0(n)
 * Comparisons: We're doing 3 comparisons every time, and since we're going down the route of 2 numbers each time, divide that by half.
 * 3*(n-1)/2 ~1.5n
 */

function minMaxArray(arr){
	var min, max;

	if(arr.length === 0){
		return null;
	}

	if(arr.length % 2 === 0){
		min = arr[0];
		max = arr[1];
	}
	else{
		min = arr[0];
		max = arr[0];
	}

	for(var i = 1; i < arr.length; i=i+2){
		//here, we check if the left item is larger than the right, if it is, we then check the larger item with max and the smaller one with min.
		if(arr[i] > arr[i+1]){
			if(arr[i+1] < min){
				min = arr[i+1];
			}
			if(arr[i] > max){
				max = arr[i];
			}
		}
		else{
			if(arr[i+1] > max){
				max = arr[i+1];
			}
			if(arr[i] < min){
				min = arr[i];
			}
		}
		//move counter two ahead because we've compared 2 ahead already
	}

	return {
		min: min,
		max: max
	}
}