function certainSum(arr, sum){
  var currentSum = 0
    currentBegin = 0,
    currentEnd = currentBegin + 1,
    currentSum = 0;

  while(currentBegin < arr.length){
    currentSum += arr[currentBegin];

    while(currentEnd < arr.length){
      currentSum += arr[currentEnd];

      if(currentSum > sum){
        currentBegin++;
        currentEnd = currentBegin + 1;
        currentSum = arr[currentBegin];
      }
      else if(currentSum === sum){
        return arr.slice(currentBegin, currentEnd + 1);
      }
      else{
        currentEnd++;
      }
    }
    currentBegin++;
    currentEnd = currentBegin + 1;
  }
}
