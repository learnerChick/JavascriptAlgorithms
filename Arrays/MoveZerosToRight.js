/*
You are given an integer array which contains some zeros.
Move the zeros to the right side of the array with minimum number of swaps. The order of the original array can be destroyed.

1) First start the index at the length of the array - 1.
2) Iterate through the numbers from 0 till index.
3) Check if the number at  i === 0.  If so, swap i with index pos.
4) In the swapping pos, index could be 0. So, decrement index till you find a non-zero position.
5) Once you find a swap position, swap, return i.
6) Now, decrement the index in main function to result-1 because we've already swapped those positions.

Worst case 0(N-1) if 0 is at the end.
Average swaps - n/2.  We keep swapping until pointers meet.
*/


function moveZerosRight(numbers){
	var end = numbers.length - 1;
	for(var i = 0; i < end; i++){
		if(i === end){
			break;
		}

		if(numbers[i] === 0){
			end = swap(i, end, numbers);
			end--;
		}
	}

	return numbers.join('')
}

function swap(org, toSwap, arr){
	while(arr[toSwap] === 0){
		toSwap--;
	}

	var tmp = arr[toSwap];
	arr[toSwap] = arr[org];
	arr[org] = tmp;
	return toSwap;
}
