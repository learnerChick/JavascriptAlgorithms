/* O(n^2) */
function uniqueChars(str){
    for(var i = 0; i < str.length; i++){
        for(var j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(uniqueChars("aabcd"));
console.log(uniqueChars("abcde"));


function uniqueCharsEfficient(str){
    var chars = [];
    for(var i = 0; i < str.length; i++){
        var char = str.charAt(i);
        if(typeof chars[char] !== "undefined"){
            return false;
        }
        else{
            chars[char] = true;
        }
    }
    return true;
}

console.log(uniqueCharsEfficient("aabcd"));
console.log(uniqueCharsEfficient("abcde"));
