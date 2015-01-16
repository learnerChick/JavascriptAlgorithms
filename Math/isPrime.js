/* Determine if a number is a prime */
function isPrime(number){
  if(number <= 1){
    return false;
  }

  var begin = number - 1;
  while(begin > 1){
    if(number % begin === 0){
      return false
    }
    else{
      begin = begin - 1;
    }
  }
  return true;

}
