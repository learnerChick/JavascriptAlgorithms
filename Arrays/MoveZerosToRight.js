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
	var index = numbers.length - 1;
	for(var i = 0; i < index; i++){
		if(numbers[i] === 0){
			var succ = findSwap(i, index, numbers);
			if(typeof succ !== "undefined"){
				index = succ - 1;
			}
			else{
				return;
			}
		}
	}
	return numbers.join("");
}


function findSwap(begin, index, numbers){
	for(var i = index; i > begin; i--){
		if(numbers[i] !== 0){
			var tmp = numbers[i];
			numbers[i] = numbers[begin];
			numbers[begin] = tmp;
			return i;
		}
	}
}