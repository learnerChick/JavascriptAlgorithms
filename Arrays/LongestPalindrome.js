/*
    A string is called palindrome when it is same while reading character by character from left side or right side. Given any arbitrary string find out the largest substring in it which is a palindrome.

*/

function longestPalindrome(str){
    var longest = null;
    var length = str.length;

    if(length === 0){
        return "Not a valid string";
    }
    else if(length === 1){
        return str;
    }
   
    longest = str.substring(0, 1);
   
    for(var i = 0; i < length; i++){
        //just this part is good enough coverage for odd length strings
        var tmp = finder(str, i, i);
        if(tmp.length > longest.length){
            longest = tmp;

        }

        //need this below for even length strings
        tmp = finder(str, i, i + 1);
        
        if(tmp.length > longest.length){
            longest = tmp;
        }
    }

    return longest;
}

function finder(str, begin, end){
    while(begin >= 0 && 
        end <= str.length - 1 &&
        str.charAt(begin) === str.charAt(end)){
        begin--;
        end++;
    }

    return str.substring(begin + 1, end);
}

