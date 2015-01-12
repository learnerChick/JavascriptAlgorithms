function getAnagrams(str){
  getAllAnagrams("", str);
}

function getAllAnagrams(prefix, word){
  if(word.length <= 1){
    console.log(prefix + word);
    return prefix + word;
  }

  for(var i=0; i < word.length; i++){
    var current = word.substring(i, i+1);
    var before = word.substring(0, i);
    var after = word.substring(i+1);
    //console.log(current, before, after);
    getAllAnagrams(prefix+current, before+after);
  }
}
