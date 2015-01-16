/* from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number. */

function missingNumber(arr){
  //increment it by 1 because the arr is missing one number, we need it to be 1 higher
  //for the formula (n * (n+1))/2
  var totalLength = arr.length + 1

  var total = (totalLength * (totalLength+1))/2;
  var sum = 0;

  //get sum for all numbers
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return total - sum;

}
