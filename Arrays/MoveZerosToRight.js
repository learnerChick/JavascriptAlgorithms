/*
You are given an integer array which contains some zeros. 
Move the zeros to the right side of the array with minimum number of swaps. The order of the original array can be destroyed.

1) First start the index at the length of the array(the end).
2) Iterate through the numbers from 0 till index.  
3) Check if the number at  i === 0 and index-1 is still greater than i.  If so, swap i with index pos.
4) In the swapping pos, index could be 0. So, decrement index till you find a non-zero position.  Once you find it, break out of loop.
5) Swap items, return index.
6) Set index in for loop to result - 1.

Worst case 0(N-1) if 0 is at the end.
Average swaps - n/2.  We keep swapping until pointers meet.
*/


function moveZerosRight(numbers){
	var index = numbers.length;
	for(var i = 0; i < index; i++){
		if(numbers[i] === 0 && (index-1) > i){
			var succ = findSwap(i, index, numbers);
			if(succ > -1){
				index = succ - 1;
			}
			else{
				console.log("no more moves");
				return;
			}
		}
	}
	console.log(numbers.join(""));
}

function findSwap(i, index, numbers){
	do{
		if(numbers[index-1] === 0){
			index--;
		}
		else{
			break;
		}
	}
	while(index >= 0);

	if(index >= 0){
		var tmp = numbers[i];
		numbers[i] = numbers[index-1];
		numbers[index-1] = tmp;
		return index;
	}
	//no more swap
	return -1;
}