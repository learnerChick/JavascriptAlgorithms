/* 
    Reverse the words in a given sentence. Words are always delimited by spaces. 
    For example if the given word is "reverse words of a sentence". The output will be "sentence a of words reverse"
*/


function reverseWords(str){
    var end = str.length;
    var reversedStr = "";

    for(var i = str.length - 1; i >= -1; i--){
        if(str[i] === " " || i == -1){
            reversedStr = reversedStr + str.substring(i+1, end) + " ";
            end = i;
            continue;
        }
    }
    console.log(reversedStr);
}

