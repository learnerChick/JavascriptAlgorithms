/* Find all the permutations of a given string whose letters are unique. */

/*

    Try each of the letters in turn as the first letter and then find all the permutations of the remaining letters using a recursive call.
    The base case is when the input is an empty string the only permutation is the empty string.

*/


function permutations(str){
    permute("", str);
}


function permute(prefix, str){
    var len = str.length;
    if(len === 0){
        console.info(prefix, " final");
    }
    else{
        for(var i = 0; i < len; i++){
            var before = str.substring(0, i);
            var after = str.substring(i+1);
            var current = str[i];
            console.log(prefix+current, before+after);
            permute(prefix + current, before + after);
        }
    }
}
