/* Find all the permutations of a given string whose letters are unique. */

/*

    Try each of the letters in turn as the first letter and then find all the permutations of the remaining letters using a recursive call.
    The base case is when the input is an empty string the only permutation is the empty string.

*/


function permutations(str){
    permute("", str);
}


function permute(prefix, str){
    console.log("prefix: ", prefix, " str:", str);
    var len = str.length;
    if(len === 0){
        console.info(prefix);

    }
    else{
        for(var i = 0; i < len; i++){

            var newString = str.substring(0, i) + str.substring(i+1, len);
            console.log(i, newString, prefix + str.charAt(i));
            permute(prefix + str.charAt(i), newString);
        }
    }
}
