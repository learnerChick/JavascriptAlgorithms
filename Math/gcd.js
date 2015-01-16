/* Find the greatest common divisor of 2 numbers */
/* Use the Euclid's algorithm */

function gcd(num1, num2){
  var larger = Math.max(num1, num2);
  var smaller = Math.min(num1, num2);

  while(smaller !== 0){
    var remainder = larger % smaller;
    larger = smaller;
    smaller = remainder;
  }
  return larger;
}
