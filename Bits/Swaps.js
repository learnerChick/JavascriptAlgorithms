/*
    How would you find the number of bit swaps required to convert integer A to integer B?
*/

function swaps_required(a, b){
    a = a.toString(2);
    b = b.toString(2);

    //first, do XOR on a and b
    var c = a ^ b,
        count = 0;
        console.log("XOR value of " , a, " and", b, "is", c);
    //now, check all the number of 1's in c, because those are the changed ones

    var cStr = c.toString();
    for(var i = 0; i < cStr.length; i++){
        if (cStr[i] == 1){
            count++;
        }
    }
    console.log("Total swaps are", count);
    return count;
}
