/*
    A string is called palindrome when it is same while reading character by character from left side or right side.
    Given any arbitrary string find out the largest substring in it which is a palindrome.
    

    1) First, get the length of string.  Length <= 0 is invalid.  Length === 1 is considered a palindrome, so return that string.
    2) Now, set the longest palindrome as a substring from 0 to 1.
    3) Iterate through the string from 0 to it's length.  In this loop, we shall be calling out to a helper function that will check for the existence of palindromes from index to outwards. (this is for odd length string)
        a) In the helper function, in a while loop check if begin index is >= 0 && end index is <= str.length - 1 && str[begin] === str[end].  If it passes, decrement begin by one and and increment end by one.
        b) After exiting while loop, return the part of the string we determined was a substring by getting substring(begin+1, end).
        c) If returned string length > than longest string length, replace.
    4) In the  same loop above, do the same thing for even numbered strings (i, i+1)


    Time complexity : O(n^2)
    Space complexity: O(1)
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

