/* Figure out the nth fibonacci number */
function fibonacci(n){
  var seq = [0, 1],
    count = 1;

  while(count < n){
    var nextSeq = seq[count] + seq[count - 1];
    seq.push(nextSeq);
    count++;
  }

  return nextSeq;
}
