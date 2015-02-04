/*
Given an integer array find the subarray which has the largest sum.

1) First, initialize a few variables to 0.  That is currentSum, currentStart, currentEnd, maxSum, maxStart, maxEnd.
2) Then start a while loop which goes on until currentEnd != array.length.
3) currentSum is calculated by adding currentSum to current array's index.
   If currentSum is larger than maxSum, then currentSum is assigned to maxSum.
   maxStart and maxEnd are currentStart and currentEnd respectively.

   If currentSum is smaller or equals to 0, then we need to move the currentStart pointer ahead
   to currentEnd+1 because the current subarray will not be part of the maximum subset.  currentSum is reset to 0.

Code runs in O(n).
*/

function LargestSubArray(arr){
	var currentStart = 0;
	var	currentEnd = 0;
	var	currentSum = 0;
	var	maxStart = 0;
	var	maxEnd = 0;
	var	maxSum = 0;

	while(currentEnd < arr.length){
		currentSum = currentSum + arr[currentEnd];

		if(currentSum > maxSum){
			maxSum = currentSum;
			maxStart = currentStart;
			maxEnd = currentEnd;
		}

		if(currentSum <= 0){
			currentStart = currentEnd + 1;
			currentSum = 0;
		}
		currentEnd++;
	}

	console.log("Maximum sum is: ", maxSum);
	console.log("Starts at:", maxStart, " Ends at: ", maxEnd);

	return arr.slice(maxStart, maxEnd);
}

