function removeDuplicates(arr){
  if(arr.length <= 1){
    return arr;
  }

  var uniq = [arr[0]];
  arr.shift();

  while(arr.length > 0){
    var item = arr.shift();
    var found = false;
    for(var i = 0; i < uniq.length; i++){
      if(item === uniq[i]){
        found = true;
        break;
        //don't add this item, break out of the loop and just move on
      }
    }
    if(!found){
      uniq.push(item);
    }
  }
  return uniq;
}
