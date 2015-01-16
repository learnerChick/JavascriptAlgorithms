/* How would you swap two numbers without using a temporary variable? */

function swap(a, b){
  b = b - a;
  a = a + b;
  b = a - b

  return {
    a: a,
    b: b
  };
}
