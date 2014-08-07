/*
  1) First use a formula to calculate the gap to use initially.
  2) Now, while gap is greater or equal to 1, set 2 for loops.
  	 The outer loop, i starts at h and it is less than the length 
  	 of the array and is incremented one by one.
  	 The inner loop, j starts at i and if j is greater or equal to h and the
  	 number at j compared to j-h, then value has to be swapped.  j is
  	 decremented by h.
  3) One thing to note here is we're always comparing the rightmost first to the
     left.
  4) Decrement h by a formula/
  5) Worst case O(n^2), best case O(n log n)

*/

function ShellSort(numbers){
	var h = 1;
	while(h < numbers.length/3){
		h = h * 3 + 1
	}

	while(h >= 1){
		for(var i = h; i < numbers.length; i++){
			for(var j = i; j >= h && numbers[j] < numbers[j-h]; j = j-h){
				var temp = numbers[j];
				numbers[j] = numbers[j-h]
				numbers[j-h] = temp; 
			}
		}
		h = (h-1)/3;
	}
	console.log(numbers);
}



