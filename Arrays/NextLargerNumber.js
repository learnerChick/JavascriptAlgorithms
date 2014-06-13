/**
 *  Given a number whose digits are unique, find the next larger number that can be formed with those digits.
 *  Algorithm:
 *      1) Start from the end.
 *      2) Compare digit on left with right.  If left is larger than right, move on.
 *      3) If left is smaller than right, this will be the first pivot point.
 *      4) Divide the numbers into 2 chunks.  One from index 0 to right before pivot.  The other from pivot to end.
 *      5) Sort second chunk into order.  
 		6) Go through second part and find number greater than pivot.  If not number, add to part2Swapped.
 		   Else	indicate pivotReplacerFound and don't go find the next larger number.
		8) Join part1, pivotReplacer and part3

 *      Algorithm below runs at 0(N^2).
 */

function findNextLargerNumber(number){
	number = number.toString().split("");

	//1) Start from the end.
	for(var i = number.length - 1; i >= 0; i--){
		var left = number[i-1];
		var right = number[i];
		var pivot = -1;
		var pivotReplacer = -1;
		var part2Swapped = [];
		var replacerNotFound = false;

		//2) Compare digit on left with right.  If left is larger than right, move on.
	    //3) If left is smaller than right, this will be the first pivot point.
	
		if(left < right){
			pivot = left;

			// 4) Divide the numbers into 2 chunks.  One from index 0 to right before pivot.  The other from pivot to end.
			var part1 = number.slice(0, i-1);
			var part2 = number.slice(i-1, number.length);

			//5) Sort second chunk into order. 
			//part2 = Array.sort(part2);
			part2 = part2.sort(function(a,b){return a-b});

			//6) Find the smallest number larger than the pivot.
			for(var j = 0; j < part2.length; j++){
				if(part2[j] > pivot && !replacerNotFound){
					pivotIndex = j;	
					pivotReplacer = part2[j];
					replacerNotFound = true;
				}
				else{
					part2Swapped.push(part2[j]);
				}
			}

			//8) Join part1, pivotReplacer and part2Swapped
			return part1.join("") + pivotReplacer + part2Swapped.join("");
		}
	}
}

function start(){
	console.log(findNextLargerNumber(1234)); //1243
	console.log(findNextLargerNumber(12543)); //13245
	console.log(findNextLargerNumber(38276)); //38627
	console.log(findNextLargerNumber(7865)); //8567
}
