/*

 Implement a method to perform basic string compression using the counts of repeated characters.
 For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become
 smaller than the original string, your method should return the original string.
 */

function compress(str){
    if(typeof str === 'undefined' || str === ''){
        return '';
    }
    else if(str.length === 1){
        return str;
    }

    var ch = str[0];
    var compressed = ch;
    var count = 1;

    for(var i = 1; i < str.length; i++){
        var currentCh = str[i];
        if(ch === currentCh){
            count++;
        }
        else{
            compressed += count;
            ch = currentCh;
            compressed += ch;
            count = 1;
        }
    }
    compressed += count;

    if(compressed.length > str.length){
        return str;
    }
    return compressed;
}