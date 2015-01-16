/* From a unsorted array, check whether there are any two numbers that will sum up to a given number?*/

function matchSum(arr, sum){
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        return true;
      }
    }
  }
  return false;
}


function efficientMatchSum(arr, sum){
  var diff = {},
    subtract;

    for(var i = 0; i < arr.length; i++){
      subtract = sum - arr[i];

      if(diff[subtract]){
        return true;
      }
      else{
        diff[arr[i]] = true;
      }
    }
    return false;
}
